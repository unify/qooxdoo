#!/usr/bin/env python
# -*- coding: utf-8 -*-
################################################################################
#
#  qooxdoo - the new era of web development
#
#  http://qooxdoo.org
#
#  Copyright:
#    2006-2011 1&1 Internet AG, Germany, http://www.1und1.de
#
#  License:
#    LGPL: http://www.gnu.org/licenses/lgpl.html
#    EPL: http://www.eclipse.org/org/documents/epl-v10.php
#    See the LICENSE file in the project's top-level directory for details.
#
#  Authors:
#    * Thomas Herchenroeder (thron7)
#
################################################################################

##
# nightly_build_times.py -- extract build time from nightly testing logs
#
#
# SYNTAX
#
#  $0 harvest [<logfile_url>]  -- parse log file and feed data into RRDB
#
#  $0 graph  -- generate statistical graphs from the RRDB's data
#
#
# DESCRIPTION
#
#  nightly_build_times.py supports two sub-commands, 'harvest' and 'graph'. The
#  first is to collect data from a log file into its RRD database, the second to
#  generate statistical graphs from the data. The two are described below. At
#  the start of the script is a configuration section (search for "Config
#  section"), where customizable settings can be set.
#
#  'harvest'
#
#  The 'harvest' sub-command takes a URL as an optional argument. The URL might
#  start with 'file://' for a local file, in which case the path should be
#  absolute. If given, the URL is loaded. The contents is expected to be in a
#  format as generated by our test infrastructure's build logs. The import
#  entries are like this
#
#       2010-11-14 22:00:58 Building Feedreader
#         /var/www/qx/trunk/qooxdoo/tool/admin/app/batserver/batbuild.py -w /var/www/qx -z -C -p application/feedreader -g build,source -n
#       2010-11-14 22:05:04 Feedreader build finished without errors.
#
#  The start and end times of these build runs are extracted for our suite of
#  standard apps, like Feedreader, Demobrowser, FrameworkUnitTests, asf. The
#  elapsed time in seconds is stored in the data base. (As you can see in this
#  sample, both source and build version were created).
#
#  If no argument is given to 'harvest', the script reaches out to the
#  configured report server URL and tries to pick yesterday's log file. This is
#  interesting for daily run update jobs.
#
#  'graph'
#
#  The 'graph' sub-command takes no arguments and invokes the RRDTool command to
#  produce two images from the contained data, one reflecting the build times of
#  the past 4 weeks, the other the build times of the past 12 months. Both
#  images can be used in a suitable HTML page for display over the net.
#
#
# USEFUL RRD COMMANDS
#
#  Create the necessary RRDtool db like this:
#
#    rrdtool create nightly_builds.rrd \
#        --step=86400 --start 1249336700 \
#        DS:feedreader:GAUGE:172800:U:U \
#        DS:demobrowser:GAUGE:172800:U:U \
#        DS:showcase:GAUGE:172800:U:U \
#        DS:framework-tests:GAUGE:172800:U:U \
#        DS:playground:GAUGE:172800:U:U \
#        DS:apiviewer:GAUGE:172800:U:U \
#        DS:portal:GAUGE:172800:U:U \
#        DS:inspector:GAUGE:172800:U:U \
#        RRA:AVERAGE:0.5:1:28 \                # keep 4 weeks of measurements individually
#        RRA:AVERAGE:0.5:3:90 \                # average 3 days and keep 3 month worth of these
#        RRA:AVERAGE:0.5:6:60                  # average over 6 and keep roughly a year worth
#
#
#  Inspect the Db:
#
#    rrdtool info nightly_builds.rrd
#
#  Update like this:
#
#    rrdtool update nightly_builds.rrd 1292676240:246:1565:205:425:428:164:117:230
#                        # timestamp:feedreader:demobrowser:showcase:framework-tests:playground:apiviewer:portal:inspector
#
#  Check contents
#
#    rrdtool fetch nightly_builds.rrd AVERAGE --start 1263318964 --end 1294854964
#
#  Re-apply the update.log to a fresh RRD db:
#
#    cat update.log |while read line; do eval $line; done
#
#  Create graphs like this:
#
#    rrdtool graph nightly_builds.png --start 920804400 --end 922100700 \
#    --vertical-label "build duration (min)" \
#    DEF:feedreader=nightly_builds.rrd:feedreader:AVERAGE LINE2:feedreader#FF0000:Feedreader \
#    DEF:demobrowser=nightly_builds.rrd:demobrowser:AVERAGE LINE2:demobrowser#00FF00:Demobrowser \
#    DEF:showcase=nightly_builds.rrd:showcase:AVERAGE LINE2:showcase#0000FF:Showcase \
#    DEF:framework-tests=nightly_builds.rrd:framework-tests:AVERAGE LINE2:framework-tests#FF00FF:"Framework Testrunner" \
#    DEF:playground=nightly_builds.rrd:playground:AVERAGE LINE2:playground#555555:Playground \
#    DEF:apiviewer=nightly_builds.rrd:apiviewer:AVERAGE LINE2:apiviewer#9933FF:Apiviewer \
#    DEF:portal=nightly_builds.rrd:portal:AVERAGE LINE2:portal#00FFFF:Portal  \
#    DEF:inspector=nightly_builds.rrd:inspector:AVERAGE LINE2:inspector#FF9933:Inspector
#
#    (For the actual used graph command see the template in the graph()
#    routine).
#
##

import sys, os, re, types, string, optparse

# add qooxdoo module path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "../../../pylib"))

import datetime, time
from pyparse.pyparsing import *
from misc import json
from warnings import warn
import urllib2 as urllib

# - Config section -------------------------------------------------------------
rrd_db_name = "nightly_builds.rrd"
#build_server_logs  = "http://172.17.12.142/~dwagner/workspace/qooxdoo-schlund/project/testing/logs/"
build_server_logs  = "http://172.17.12.142/qx/log/build/"
# customize graph colors and line types directly in the 'template' var
# - Config end -----------------------------------------------------------------

# ------------------------------------------------------------------------------
# Helpers
# ------------------------------------------------------------------------------

def timedelta_to_seconds(td):
    return td.seconds + td.days * 86400

def seconds_to_hourminsecs(secs):
    hours = secs / 3600
    mins  = secs % 3600 / 60
    secs  = secs % 3600 % 60
    return hours, mins, secs

# ------------------------------------------------------------------------------
# Parsing Stuff
# ------------------------------------------------------------------------------
apps = {}

# -- Textual Log File ----------------------------------------------------------

def processCompileStart(tokens):
    #appname = "Feedreader"
    #endtime = "2010-11-14_22:05:04"
    appname   = tokens['appname']
    starttime = "%(date)s_%(time)s" % tokens
    if appname in apps:
        warn("App %s already seen, processing multiple test runs?!" % appname)
    else:
        apps[appname] = {}
        apps[appname]['stime'] = starttime

def processCompileEnd(tokens):
    appname   = tokens['appname']
    endtime = "%(date)s_%(time)s" % tokens
    if appname not in apps:
        warn("App %s not seen, cannot process start time - skipping." % appname)
        return
    else:
        appfacts = apps[appname]
        appfacts['etime'] = endtime

        format = "%Y-%m-%d_%H:%M:%S" 
        begin = datetime.datetime.strptime(appfacts['stime'], format)
        end   = datetime.datetime.strptime(appfacts['etime'], format)
        duration_secs = timedelta_to_seconds(end - begin)
        appfacts['duration'] = duration_secs


def parseTestLog(testlog):
    yyyymmdd = Combine(Word(nums,exact=4)+('-'+Word(nums,exact=2))*2)
    hhmmss   = Combine(Word(nums,exact=2)+(':'+Word(nums,exact=2))*2)

    timestamp = yyyymmdd("date") + hhmmss("time")

    application = Word(alphanums)

    startline = timestamp + "Building" + application("appname")
    startline.setParseAction(processCompileStart)
    endline   = timestamp + application("appname") + "build finished without errors"
    endline.setParseAction(processCompileEnd)

    # the grammar
    extractCompileTimes = ( startline | endline )

    extractCompileTimes.searchString(testlog)

    return apps


# -- Json Log Data -------------------------------------------------------------

def parseTestJson(jsonString):
    apps = {}
    jData = json.loads(jsonString)
    format_in = "%Y-%m-%d_%H-%M-%S" 
    format_out = "%Y-%m-%d_%H:%M:%S" 
    for app, appVals in jData.items():
        if appVals['BuildError'] != False:
            continue
        apps[app] = {}
        # build start time
        stime = datetime.datetime.strptime(appVals['BuildStarted'], format_in)
        apps[app]['stime'] = stime.strftime(format_out)
        # build end time
        etime = datetime.datetime.strptime(appVals['BuildFinished'], format_in)
        apps[app]['etime'] = etime.strftime(format_out)
        # build duration in secs
        apps[app]['duration'] = timedelta_to_seconds(etime - stime)

    return apps


# ------------------------------------------------------------------------------
# Log Data Acquisition
# ------------------------------------------------------------------------------

def timestampFromLogname(logname, prefix, extension):
    logdates = logname.replace (prefix,'').replace(extension,'')
    # datetime.datetime.strptime ("2011-01-09_12-00-01", "%Y-%m-%d_%H-%M-%S")
    logdate = datetime.datetime.strptime (logdates, "%Y-%m-%d_%H-%M-%S")
    # datetime.timetuple:
    #   time.struct_time(tm_year=2011, tm_mon=1, tm_mday=10, tm_hour=15, tm_min=51, tm_sec=24, tm_wday=0, tm_yday=10, tm_isdst=-1)
    #   dst==-1 is "unknown"; correct it?!
    return int(time.mktime(logdate.timetuple()))

##
# Log file elements
prefix = "buildStatus_"
extension = ".json"


##
# return the URL of the latest build log on the build server
# - expects the log file names of the form "testLog_2010-12-16_22-??-??.txt"
# - tries to find *yesterday's* log file
def getLatestLogURL():
    baseurl = build_server_logs
    # calculate the next:
    # logfile = "testLog_2010-12-16_22-00-02.txt"
    #logpatt = "testLog_"
    # logfile = "buildStatus_2011-05-10_22-40-01.json"
    logpatt = prefix
    # we assume to run the day after the latest build run has been started
    yesterday = datetime.date.today() - datetime.timedelta(days=1)
    logpatt += yesterday.strftime("%Y-%m-%d")
    logpatt += "_22-..-.."
    #logpatt += r"\.txt"
    logpatt += extension.replace('.',r'\.')
    logpattr = re.compile(logpatt)
    # get yesterday's log file name
    po = urllib.urlopen (baseurl)
    # po.getcode() is 2.6, urlopen() bombs on rc other than 200
    #assert po.getcode() == 200
    # go through the index listing
    index = po.readlines()
    for l in index:
        mo = logpattr.search(l)
        if mo:
           logfile = mo.group(0)
           break
    else:
        logfile = None
    assert logfile is not None

    logtimestamp = timestampFromLogname(logfile, prefix, extension)

    return baseurl + logfile, logtimestamp


def getTestLog(datasource):
    if (datasource):
        data_source = datasource
        filename = os.path.basename(data_source)
        try:
            timestamp = timestampFromLogname(filename, prefix, extension)
        except ValueError,e :
            # this should be better
            print "  cannot extract time stamp from file name '%s', using current time" % filename
            timestamp = int(time.time())
    else:
        data_source, timestamp = getLatestLogURL()
    # get log file contents
    po = urllib.urlopen (data_source)
    #assert po.getcode() == 200  # urlopen() bombs on rc != 200
    logdata = po.read()
    return logdata, timestamp


# ------------------------------------------------------------------------------
# Output Stuff
# ------------------------------------------------------------------------------

def processDurations(apps):
    for app in apps:
        print app, "%02d:%02d:%02d" % seconds_to_hourminsecs(apps[app]['duration'])


def updateRRD(apps, tstamp=None):
    rrd_apps = ( # order must match order of DS's in rrdtool create command!
        ("feedreader", "Feedreader"), 
        ("demobrowser" , "Demobrowser"),
        ("showcase" , "Showcase"),
        ("framework-tests" , "FrameworkUnitTests"),
        ("playground" , "Playground"),
        ("apiviewer" , "APIViewer"),
        ("portal" , "Portal"),
        ("inspector", "Inspector"),
        )

    rrd_db = "nightly_builds.rrd"
    upd_cmd ="rrdtool update %s " % rrd_db
    timestamp = tstamp if tstamp else 'N'  # 'N' is rrd for now (e.g. int(time.time()))
    pdp = [ '%s' % timestamp ]
    mirror_line = [" "*len(upd_cmd) + "timestamp"]
    for rrd_ds, logapp in rrd_apps:
        mirror_line.append(rrd_ds)
        if logapp in apps and 'duration' in apps[logapp]:
            pdp.append(apps[logapp]['duration'])
        else:
            pdp.append('U')

    upd_cmd += ":".join(map(str,pdp))

    #print ":".join(mirror_line)
    print upd_cmd

    rc = os.system(upd_cmd)
    assert rc == 0
    return


def harvest(args, opts):
    data_source = args[0] if len(args) else ""
    data, timestamp = getTestLog(data_source)
    #appsdata = parseTestLog(data)
    appsdata = parseTestJson(data)
    if not opts.no_commit:
        updateRRD(appsdata, timestamp)
    else:
        print appsdata


# ------------------------------------------------------------------------------
# Reporting Stuff
# ------------------------------------------------------------------------------

def graph(args, opts):

    template = ''
    #template += "echo "
    template += '''rrdtool graph %(outpng)s --start %(fromepoch)d --end %(toepoch)d \
    --vertical-label "build duration (min)" --zoom 1.3 \
    DEF:feedreader=nightly_builds.rrd:feedreader:AVERAGE \
    CDEF:mfeedreader=feedreader,60,/ LINE2:mfeedreader#FF0000:Feedreader \
    DEF:showcase=nightly_builds.rrd:showcase:AVERAGE \
    CDEF:mshowcase=showcase,60,/ LINE2:mshowcase#0000FF:Showcase \
    DEF:framework-tests=nightly_builds.rrd:framework-tests:AVERAGE \
    CDEF:mframework-tests=framework-tests,60,/ LINE2:mframework-tests#FF00FF:"Framework Testrunner" \
    DEF:playground=nightly_builds.rrd:playground:AVERAGE \
    CDEF:mplayground=playground,60,/ LINE2:mplayground#555555:Playground \
    DEF:apiviewer=nightly_builds.rrd:apiviewer:AVERAGE \
    CDEF:mapiviewer=apiviewer,60,/ LINE2:mapiviewer#9933FF:Apiviewer \
    DEF:portal=nightly_builds.rrd:portal:AVERAGE \
    CDEF:mportal=portal,60,/ LINE2:mportal#00FFFF:Portal  \
    DEF:inspector=nightly_builds.rrd:inspector:AVERAGE \
    CDEF:minspector=inspector,60,/ LINE2:minspector#FF9933:Inspector \
    DEF:demobrowser=nightly_builds.rrd:demobrowser:AVERAGE \
    CDEF:mdemobrowser=demobrowser,60,/ LINE2:mdemobrowser#00FF00:Demobrowser \
    '''

    '''
    '''

    # last 4 weeks graph
    now = int(time.time())
    since = now - 28 * 24 * 60 * 60
    four_week_stats = template % {'rrd_db': rrd_db_name, 'outpng':'four_week_stats.png', 'fromepoch': since, 'toepoch': now}
    #print four_week_stats
    rc = os.system(four_week_stats)
    assert rc == 0
    print "  generating four_week_stats.png"

    # last year graph
    since = now - 365 * 24 * 60 * 60
    one_year_stats = template % {'rrd_db': rrd_db_name, 'outpng':'one_year_stats.png', 'fromepoch': since, 'toepoch': now}
    #print one_year_stats
    rc = os.system(one_year_stats)
    assert rc == 0
    print "  generating one_year_stats.png"
    
    return


# ------------------------------------------------------------------------------
# Main Stuff
# ------------------------------------------------------------------------------

def options():
    sub_commands = ["harvest", "graph"]

    parser = optparse.OptionParser()
    usage_str = '%s [harvest|graph] args...' % os.path.basename(__file__)
    parser.set_usage(usage_str)

    parser.add_option("-c", "--no-commit", dest="no_commit", action="store_true", default=False, help="do not commit to RRD db")

    opts, args = parser.parse_args()

    if args[0] not in sub_commands:
        parser.print_usage()
        sys.exit(1)

    return opts, args


if __name__ == "__main__":
    opts, args = options()
    if args[0] == "harvest":
        harvest(args[1:], opts)
    elif args[0] == "graph":
        graph(args[1:], opts)
    #processDurations(mapps)
