(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date().valueOf();
qx.$$build = 1282827047427;
qx.$$type = "build";
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.progressive.ProgressiveTable_Boolean","qx.theme":"qx.theme.Classic"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.3-pre"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.demo.progressive.ProgressiveTable_Boolean-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"b1f3ddcf9102"},
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };

  if (qx.$$type === "source") {
    elem.src = uri + "?r=" + qx.$$start;
  } else {
    elem.src = uri + "?r=" + qx.$$build;
  }
  
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else 
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else 
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
}

qx.$$loader.signalStartup = function () 
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true; 
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){return;});
  }
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['b1f3ddcf9102']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{}};
(function(){var bt="toString",bs=".",br="default",bq="Object",bp='"',bo="Array",bn="()",bm="String",bl="Function",bk=".prototype",bS="function",bR="Boolean",bQ="Error",bP="constructor",bO="warn",bN="hasOwnProperty",bM="string",bL="toLocaleString",bK="RegExp",bJ='\", "',bA="info",bB="BROKEN_IE",by="isPrototypeOf",bz="Date",bw="",bx="qx.Bootstrap",bu="]",bv="Class",bC="error",bD="[Class ",bF="valueOf",bE="Number",bH="count",bG="debug",bI="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return bD+this.classname+bu;
},createNamespace:function(name,bU){var bW=name.split(bs);
var parent=window;
var bV=bW[0];

for(var i=0,bX=bW.length-1;i<bX;i++,bV=bW[i]){if(!parent[bV]){parent=parent[bV]={};
}else{parent=parent[bV];
}}parent[bV]=bU;
return bV;
},setDisplayName:function(d,e,name){d.displayName=e+bs+name+bn;
},setDisplayNames:function(bh,bi){for(var name in bh){var bj=bh[name];

if(bj instanceof Function){bj.displayName=bi+bs+name+bn;
}}},define:function(name,W){if(!W){var W={statics:{}};
}var bc;
var ba=null;
qx.Bootstrap.setDisplayNames(W.statics,name);

if(W.members||W.extend){qx.Bootstrap.setDisplayNames(W.members,name+bk);
bc=W.construct||new Function;

if(W.extend){this.extendClass(bc,bc,W.extend,name,bb);
}var X=W.statics||{};
for(var i=0,bd=qx.Bootstrap.getKeys(X),l=bd.length;i<l;i++){var be=bd[i];
bc[be]=X[be];
}ba=bc.prototype;
var Y=W.members||{};
for(var i=0,bd=qx.Bootstrap.getKeys(Y),l=bd.length;i<l;i++){var be=bd[i];
ba[be]=Y[be];
}}else{bc=W.statics||{};
}var bb=this.createNamespace(name,bc);
bc.name=bc.classname=name;
bc.basename=bb;
bc.$$type=bv;
if(!bc.hasOwnProperty(bt)){bc.toString=this.genericToString;
}if(W.defer){W.defer(bc,ba);
}qx.Bootstrap.$$registry[name]=W.statics;
return bc;
}};
qx.Bootstrap.define(bx,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(P,Q,R,name,S){var V=R.prototype;
var U=new Function;
U.prototype=V;
var T=new U;
P.prototype=T;
T.name=T.classname=name;
T.basename=S;
Q.base=P.superclass=R;
Q.self=P.constructor=T.constructor=P;
},getByName:function(name,I){var J=qx.Bootstrap.$$registry[name];

if(!J&&I){throw new Error("Missing class: "+name+"! "+I);
}return J;
},$$registry:{},objectGetLength:({"count":function(c){return c.__count__;
},"default":function(o){var length=0;

for(var p in o){length++;
}return length;
}})[(({}).__count__==0)?bH:br],__a:[by,bN,bL,bt,bF,bP],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(C){var D=[];
var F=Object.prototype.hasOwnProperty;

for(var G in C){if(F.call(C,G)){D.push(G);
}}var E=qx.Bootstrap.__a;

for(var i=0,a=E,l=a.length;i<l;i++){if(F.call(C,a[i])){D.push(a[i]);
}}return D;
},"default":function(x){var y=[];
var z=Object.prototype.hasOwnProperty;

for(var A in x){if(z.call(x,A)){y.push(A);
}}return y;
}})[typeof (Object.keys)==
bS?bI:
(function(){for(var f in {toString:1}){return f;
}})()!==bt?bB:br],getKeysAsString:function(g){var h=qx.Bootstrap.getKeys(g);

if(h.length==0){return bw;
}return bp+h.join(bJ)+bp;
},__b:{"[object String]":bm,"[object Array]":bo,"[object Object]":bq,"[object RegExp]":bK,"[object Number]":bE,"[object Boolean]":bR,"[object Date]":bz,"[object Function]":bl,"[object Error]":bQ},bind:function(s,self,t){var u=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var O=Array.prototype.slice.call(arguments,0,arguments.length);
return s.apply(self,u.concat(O));
};
},$$firstUp:{},firstUp:function(bY){var ca=qx.Bootstrap.$$firstUp;
var cb=ca[bY];

if(cb!=null){return cb;
}else{return ca[bY]=bY.charAt(0).toUpperCase()+bY.substr(1);
}},firstLow:function(r){return r.charAt(0).toLowerCase()+r.substr(1);
},getClass:function(j){var k=Object.prototype.toString.call(j);
return (qx.Bootstrap.__b[k]||k.slice(8,-1));
},isString:function(B){return (B!==null&&(typeof B===bM||qx.Bootstrap.getClass(B)==bm||B instanceof String||(!!B&&!!B.$$isString)));
},isArray:function(b){return (b!==null&&(b instanceof Array||qx.Bootstrap.getClass(b)==bo||(!!b&&!!b.$$isArray)));
},isObject:function(ce){return (ce!==undefined&&ce!==null&&qx.Bootstrap.getClass(ce)==bq);
},isFunction:function(N){return qx.Bootstrap.getClass(N)==bl;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getEventType:function(q,name){var q=q.constructor;

while(q.superclass){if(q.$$events&&q.$$events[name]!==undefined){return q.$$events[name];
}q=q.superclass;
}return null;
},supportsEvent:function(H,name){return !!qx.Bootstrap.getEventType(H,name);
},getByInterface:function(K,L){var M,i,l;

while(K){if(K.$$implements){M=K.$$flatImplements;

for(i=0,l=M.length;i<l;i++){if(M[i]===L){return K;
}}}K=K.superclass;
}return null;
},hasInterface:function(bf,bg){return !!qx.Bootstrap.getByInterface(bf,bg);
},getMixins:function(cf){var cg=[];

while(cf){if(cf.$$includes){cg.push.apply(cg,cf.$$flatIncludes);
}cf=cf.superclass;
}return cg;
},$$logs:[],debug:function(cc,cd){qx.Bootstrap.$$logs.push([bG,arguments]);
},info:function(m,n){qx.Bootstrap.$$logs.push([bA,arguments]);
},warn:function(v,w){qx.Bootstrap.$$logs.push([bO,arguments]);
},error:function(ch,ci){qx.Bootstrap.$$logs.push([bC,arguments]);
},trace:function(bT){}}});
})();
(function(){var k="qx.allowUrlSettings",j="&",h="qx.core.Setting",g="qx.allowUrlVariants",f="qx.propertyDebugLevel",e="qxsetting",d=":",c=".";
qx.Bootstrap.define(h,{statics:{__c:{},define:function(l,m){if(m===undefined){throw new Error('Default value of setting "'+l+'" must be defined!');
}
if(!this.__c[l]){this.__c[l]={};
}else if(this.__c[l].defaultValue!==undefined){throw new Error('Setting "'+l+'" is already defined!');
}this.__c[l].defaultValue=m;
},get:function(p){var q=this.__c[p];

if(q===undefined){throw new Error('Setting "'+p+'" is not defined.');
}
if(q.value!==undefined){return q.value;
}return q.defaultValue;
},set:function(a,b){if((a.split(c)).length<2){throw new Error('Malformed settings key "'+a+'". Must be following the schema "namespace.key".');
}
if(!this.__c[a]){this.__c[a]={};
}this.__c[a].value=b;
},__d:function(){if(window.qxsettings){for(var r in window.qxsettings){this.set(r,window.qxsettings[r]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(n){}this.__e();
}},__e:function(){if(this.get(k)!=true){return;
}var t=document.location.search.slice(1).split(j);

for(var i=0;i<t.length;i++){var s=t[i].split(d);

if(s.length!=3||s[0]!=e){continue;
}this.set(s[1],decodeURIComponent(s[2]));
}}},defer:function(o){o.define(k,false);
o.define(g,false);
o.define(f,0);
o.__d();
}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(f,{statics:{define:function(name,D){if(D){if(D.extend&&!(D.extend instanceof Array)){D.extend=[D.extend];
}{};
var E=D.statics?D.statics:{};
if(D.extend){E.$$extends=D.extend;
}
if(D.properties){E.$$properties=D.properties;
}
if(D.members){E.$$members=D.members;
}
if(D.events){E.$$events=D.events;
}}else{var E={};
}E.$$type=c;
E.name=name;
E.toString=this.genericToString;
E.basename=qx.Bootstrap.createNamespace(name,E);
qx.Interface.$$registry[name]=E;
return E;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(P){if(!P){return [];
}var Q=P.concat();

for(var i=0,l=P.length;i<l;i++){if(P[i].$$extends){Q.push.apply(Q,this.flatten(P[i].$$extends));
}}return Q;
},__f:function(o,p,q,r){var v=q.$$members;

if(v){for(var u in v){if(qx.Bootstrap.isFunction(v[u])){var t=this.__g(p,u);
var s=t||qx.Bootstrap.isFunction(o[u]);

if(!s){throw new Error('Implementation of method "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}var w=r===true&&!t&&!qx.Bootstrap.hasInterface(p,q);

if(w){o[u]=this.__j(q,o[u],u,v[u]);
}}else{if(typeof o[u]===undefined){if(typeof o[u]!==h){throw new Error('Implementation of member "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}}}}}},__g:function(x,y){var C=y.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!C){return false;
}var z=qx.Bootstrap.firstLow(C[2]);
var A=qx.core.property.Util.getPropertyDefinition(x,z);

if(!A){return false;
}var B=C[0]==b||C[0]==d;

if(B){return qx.core.property.Util.getPropertyDefinition(x,z).check==g;
}return true;
},__h:function(J,K){if(K.$$properties){for(var L in K.$$properties){if(!qx.core.property.Util.getPropertyDefinition(J,L)){throw new Error('The property "'+L+'" is not supported by Class "'+J.classname+'"!');
}}}},__i:function(M,N){if(N.$$events){for(var O in N.$$events){if(!qx.Bootstrap.supportsEvent(M,O)){throw new Error('The event "'+O+'" is not supported by Class "'+M.classname+'"!');
}}}},assertObject:function(F,G){var I=F.constructor;
this.__f(F,I,G,false);
this.__h(I,G);
this.__i(I,G);
var H=G.$$extends;

if(H){for(var i=0,l=H.length;i<l;i++){this.assertObject(F,H[i]);
}}},assert:function(j,k,m){this.__f(j.prototype,j,k,m);
this.__h(j,k);
this.__i(j,k);
var n=k.$$extends;

if(n){for(var i=0,l=n.length;i<l;i++){this.assert(j,n[i],m);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__j:function(){},__k:null,__l:function(){}}});
})();
(function(){var k="qx.Mixin",j=".prototype",h="constructor",g="[Mixin ",f="]",e="destruct",d="Mixin";
qx.Bootstrap.define(k,{statics:{define:function(name,a){if(a){if(a.include&&!(a.include instanceof Array)){a.include=[a.include];
}{};
var c=a.statics?a.statics:{};
qx.Bootstrap.setDisplayNames(c,name);

for(var b in c){if(c[b] instanceof Function){c[b].$$mixin=c;
}}if(a.construct){c.$$constructor=a.construct;
qx.Bootstrap.setDisplayName(a.construct,name,h);
}
if(a.include){c.$$includes=a.include;
}
if(a.properties){c.$$properties=a.properties;
}
if(a.members){c.$$members=a.members;
qx.Bootstrap.setDisplayNames(a.members,name+j);
}
for(var b in c.$$members){if(c.$$members[b] instanceof Function){c.$$members[b].$$mixin=c;
}}
if(a.events){c.$$events=a.events;
}
if(a.destruct){c.$$destructor=a.destruct;
qx.Bootstrap.setDisplayName(a.destruct,name,e);
}}else{var c={};
}c.$$type=d;
c.name=name;
c.toString=this.genericToString;
c.basename=qx.Bootstrap.createNamespace(name,c);
this.$$registry[name]=c;
return c;
},checkCompatibility:function(o){var r=this.flatten(o);
var s=r.length;

if(s<2){return true;
}var v={};
var u={};
var t={};
var q;

for(var i=0;i<s;i++){q=r[i];

for(var p in q.events){if(t[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+t[p]+'" in member "'+p+'"!');
}t[p]=q.name;
}
for(var p in q.properties){if(v[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+v[p]+'" in property "'+p+'"!');
}v[p]=q.name;
}
for(var p in q.members){if(u[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+u[p]+'" in member "'+p+'"!');
}u[p]=q.name;
}}return true;
},isCompatible:function(w,x){var y=qx.Bootstrap.getMixins(x);
y.push(w);
return qx.Mixin.checkCompatibility(y);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(m){if(!m){return [];
}var n=m.concat();

for(var i=0,l=m.length;i<l;i++){if(m[i].$$includes){n.push.apply(n,this.flatten(m[i].$$includes));
}}return n;
},genericToString:function(){return g+this.name+f;
},$$registry:{},__m:null,__n:function(){}}});
})();
(function(){var D="[Class ",C="]",B="toString",A="constructor",z="singleton",y=".prototype",x="extend",w="Class",v="destruct",u="qx.Class",r="$$init-",t=".",s="static",q="qx.event.type.Data";
qx.Bootstrap.define(u,{statics:{define:function(name,bp){if(!bp){var bp={};
}if(bp.include&&!(bp.include instanceof Array)){bp.include=[bp.include];
}if(bp.implement&&!(bp.implement instanceof Array)){bp.implement=[bp.implement];
}var bq=false;

if(!bp.hasOwnProperty(x)&&!bp.type){bp.type=s;
bq=true;
}{};
var br=this.__s(name,bp.type,bp.extend,bp.statics,bp.construct,bp.destruct,bp.include);
if(bp.extend){if(bp.properties){this.__u(br,bp.properties,true);
}if(bp.members){this.__v(br,bp.members,true,true,false);
}if(bp.events){this.__t(br,bp.events,true);
}if(bp.include){for(var i=0,l=bp.include.length;i<l;i++){this.__z(br,bp.include[i],false);
}}}if(bp.settings){for(var bs in bp.settings){qx.core.Setting.define(bs,bp.settings[bs]);
}}if(bp.variants){for(var bs in bp.variants){qx.core.Variant.define(bs,bp.variants[bs].allowedValues,bp.variants[bs].defaultValue);
}}if(bp.implement){for(var i=0,l=bp.implement.length;i<l;i++){this.__x(br,bp.implement[i]);
}}{};
if(bp.defer){bp.defer.self=br;
bp.defer(br,br.prototype,{add:function(name,bF){var bG={};
bG[name]=bF;
qx.Class.__u(br,bG,true);
}});
}return br;
},undefine:function(name){delete this.$$registry[name];
var bL=name.split(t);
var bN=[window];

for(var i=0;i<bL.length;i++){bN.push(bN[i][bL[i]]);
}for(var i=bN.length-1;i>=1;i--){var bM=bN[i];
var parent=bN[i-1];

if(qx.Bootstrap.isFunction(bM)||qx.Bootstrap.objectGetLength(bM)===0){delete parent[bL[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(bd,be){{};
qx.Class.__z(bd,be,false);
},patch:function(P,Q){{};
qx.Class.__z(P,Q,true);
},isSubClassOf:function(cc,cd){if(!cc){return false;
}
if(cc==cd){return true;
}
if(cc.prototype instanceof cd){return true;
}return false;
},getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(ce,cf){return ce.$$includes&&ce.$$includes.indexOf(cf)!==-1;
},getByMixin:function(bH,bI){var bJ,i,l;

while(bH){if(bH.$$includes){bJ=bH.$$flatIncludes;

for(i=0,l=bJ.length;i<l;i++){if(bJ[i]===bI){return bH;
}}}bH=bH.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(F,G){return !!this.getByMixin(F,G);
},hasOwnInterface:function(g,h){return g.$$implements&&g.$$implements.indexOf(h)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bb){var bc=[];

while(bb){if(bb.$$implements){bc.push.apply(bc,bb.$$flatImplements);
}bb=bb.superclass;
}return bc;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(b,c){var d=b.constructor;

if(this.hasInterface(d,c)){return true;
}
try{qx.Interface.assertObject(b,c);
return true;
}catch(E){}
try{qx.Interface.assert(d,c,false);
return true;
}catch(bK){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return D+this.classname+C;
},$$registry:qx.Bootstrap.$$registry,__o:null,__p:null,__q:function(){},__r:function(){},__s:function(name,bf,bg,bh,bi,bj,bk){var bn;

if(!bg){bn=bh||{};
qx.Bootstrap.setDisplayNames(bn,name);
}else{bn={};

if(bg){if(!bi){bi=this.__A();
}
if(this.__C(bg,bk)){bn=this.__D(bi,name,bf);
}else{bn=bi;
}if(bf===z){bn.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bi,name,A);
}if(bh){qx.Bootstrap.setDisplayNames(bh,name);
var bo;

for(var i=0,a=qx.Bootstrap.getKeys(bh),l=a.length;i<l;i++){bo=a[i];
var bl=bh[bo];
bn[bo]=bl;
}}}var bm=qx.Bootstrap.createNamespace(name,bn);
bn.name=bn.classname=name;
bn.basename=bm;
bn.$$type=w;

if(bf){bn.$$classtype=bf;
}if(!bn.hasOwnProperty(B)){bn.toString=this.genericToString;
}
if(bg){qx.Bootstrap.extendClass(bn,bi,bg,name,bm);
if(bj){bn.$$destructor=bj;
qx.Bootstrap.setDisplayName(bj,name,v);
}}this.$$registry[name]=bn;
return bn;
},__t:function(bu,bv,bw){var bx,bx;
{};

if(bu.$$events){for(var bx in bv){bu.$$events[bx]=bv[bx];
}}else{bu.$$events=bv;
}},__u:function(bQ,bR,bS){var bX;

if(bS===undefined){bS=false;
}var bT=qx.core.property.Simple;
var bV=qx.core.property.Multi;
var bU=qx.core.property.Group;
var bW;

for(var name in bR){bX=bR[name];
{};
bX.name=name;
if(!bX.refine){if(bQ.$$properties===undefined){bQ.$$properties={};
}bQ.$$properties[name]=bX;
}if(bX.event){bW={};
bW[bX.event]=q;
this.__t(bQ,bW,bS);
}if(bX.refine){bQ.prototype[r+name]=bX.init;
}else if(bX.group){bU.add(bQ,name,bX);
}else if(bX.themeable||bX.inheritable||qx.core.property.Core.RUNTIME_OVERRIDE){bV.add(bQ,name,bX);
}else{bT.add(bQ,name,bX);
}}},__v:function(H,I,J,K,L){var M=H.prototype;
var O,N;
qx.Bootstrap.setDisplayNames(I,H.classname+y);

for(var i=0,a=qx.Bootstrap.getKeys(I),l=a.length;i<l;i++){O=a[i];
N=I[O];
{};
if(K!==false&&N instanceof Function&&N.$$type==null){if(L==true){N=this.__w(N,M[O]);
}else{if(M[O]){N.base=M[O];
}N.self=H;
}}M[O]=N;
}},__w:function(bO,bP){if(bP){return function(){var f=bO.base;
bO.base=bP;
var e=bO.apply(this,arguments);
bO.base=f;
return e;
};
}else{return bO;
}},__x:function(bC,bD){{};
var bE=qx.Interface.flatten([bD]);

if(bC.$$implements){bC.$$implements.push(bD);
bC.$$flatImplements.push.apply(bC.$$flatImplements,bE);
}else{bC.$$implements=[bD];
bC.$$flatImplements=bE;
}},__y:function(R){var name=R.classname;
var S=this.__D(R,name,R.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(R),l=a.length;i<l;i++){T=a[i];
S[T]=R[T];
}S.prototype=R.prototype;
var V=R.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(V),l=a.length;i<l;i++){T=a[i];
var W=V[T];
if(W&&W.self==R){W.self=S;
}}for(var T in this.$$registry){var U=this.$$registry[T];

if(!U){continue;
}
if(U.base==R){U.base=S;
}
if(U.superclass==R){U.superclass=S;
}
if(U.$$original){if(U.$$original.base==R){U.$$original.base=S;
}
if(U.$$original.superclass==R){U.$$original.superclass=S;
}}}qx.Bootstrap.createNamespace(name,S);
this.$$registry[name]=S;
return S;
},__z:function(j,k,m){{};

if(this.hasMixin(j,k)){return;
}var p=j.$$original;

if(k.$$constructor&&!p){j=this.__y(j);
}var o=qx.Mixin.flatten([k]);
var n;

for(var i=0,l=o.length;i<l;i++){n=o[i];
if(n.$$events){this.__t(j,n.$$events,m);
}if(n.$$properties){this.__u(j,n.$$properties,m);
}if(n.$$members){this.__v(j,n.$$members,m,m,m);
}}if(j.$$includes){j.$$includes.push(k);
j.$$flatIncludes.push.apply(j.$$flatIncludes,o);
}else{j.$$includes=[k];
j.$$flatIncludes=o;
}},__A:function(){function bt(){bt.base.apply(this,arguments);
}return bt;
},__B:function(){return function(){};
},__C:function(by,bz){{};
if(by&&by.$$includes){var bA=by.$$flatIncludes;

for(var i=0,l=bA.length;i<l;i++){if(bA[i].$$constructor){return true;
}}}if(bz){var bB=qx.Mixin.flatten(bz);

for(var i=0,l=bB.length;i<l;i++){if(bB[i].$$constructor){return true;
}}}return false;
},__D:function(X,name,Y){var ba=function(){var cb=ba;
{};
var ca=cb.$$original.apply(this,arguments);
if(cb.$$includes){var bY=cb.$$flatIncludes;

for(var i=0,l=bY.length;i<l;i++){if(bY[i].$$constructor){bY[i].$$constructor.apply(this,arguments);
}}}{};
return ca;
};
ba.$$original=X;
X.wrapper=ba;
return ba;
}}});
{};
})();
(function(){var a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__J:function(){var c="unknown";
var g="0.0.0";
var f=window.navigator.userAgent;
var i=false;
var e=false;

if(window.opera&&Object.prototype.toString.call(window.opera)=="[object Opera]"){c="opera";
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(f)){g=RegExp.$1+"."+RegExp.$2;

if(RegExp.$3!=""){g+="."+RegExp.$3;
}}else{e=true;
g="9.6.0";
}}else if(window.navigator.userAgent.indexOf("AppleWebKit/")!=-1){c="webkit";
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(f)){g=RegExp.$1;
var h=RegExp("[^\\.0-9]").exec(g);

if(h){g=g.slice(0,h.index);
}}else{e=true;
g="525.26";
}}else if(window.controllers&&window.navigator.product==="Gecko"){c="gecko";
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(f)){g=RegExp.$1;
}else{e=true;
g="1.9.0.0";
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(f)){c="mshtml";
g=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(g<8&&/Trident\/([^\);]+)(\)|;)/.test(f)){if(RegExp.$1==="4.0"){g="8.0";
}}this.MSHTML=true;
}else{var d=window.qxFail;

if(d&&typeof d==="function"){var c=d();

if(c.NAME&&c.FULLVERSION){c=c.NAME;
this[c.toUpperCase()]=true;
g=c.FULLVERSION;
}}else{i=true;
e=true;
g="1.9.0.0";
c="gecko";
this.GECKO=true;
qx.Bootstrap.warn("Unsupported client: "+f+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=i;
this.UNKNOWN_VERSION=e;
this.NAME=c;
this.FULLVERSION=g;
this.VERSION=parseFloat(g);
}},defer:function(b){b.__J();
}});
})();
(function(){var p="on",o="|",n="default",m="off",k="gecko",j="$",h="qx.debug",g="qx.dynlocale",f="webkit",e="opera",b="qx.client",d="qx.core.Variant",c="mshtml";
qx.Bootstrap.define(d,{statics:{__K:{},__L:{},compilerIsSet:function(){return true;
},define:function(y,z,A){{};

if(!this.__K[y]){this.__K[y]={};
}else{}this.__K[y].allowedValues=z;
this.__K[y].defaultValue=A;
},get:function(q){var r=this.__K[q];
{};

if(r.value!==undefined){return r.value;
}return r.defaultValue;
},__M:function(){if(window.qxvariants){for(var x in qxvariants){{};

if(!this.__K[x]){this.__K[x]={};
}this.__K[x].value=qxvariants[x];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(a){}this.__N(this.__K);
}},__N:function(){if(qx.core.Setting.get("qx.allowUrlVariants")!=true){return;
}var t=document.location.search.slice(1).split("&");

for(var i=0;i<t.length;i++){var u=t[i].split(":");

if(u.length!=3||u[0]!="qxvariant"){continue;
}var w=u[1];

if(!this.__K[w]){this.__K[w]={};
}this.__K[w].value=decodeURIComponent(u[2]);
}},select:function(D,E){{};

for(var F in E){if(this.isSet(D,F)){return E[F];
}}
if(E[n]!==undefined){return E[n];
}{};
},isSet:function(G,H){var I=G+j+H;

if(this.__L[I]!==undefined){return this.__L[I];
}var K=false;
if(H.indexOf(o)<0){K=this.get(G)===H;
}else{var J=H.split(o);

for(var i=0,l=J.length;i<l;i++){if(this.get(G)===J[i]){K=true;
break;
}}}this.__L[I]=K;
return K;
},__O:function(v){return typeof v==="object"&&v!==null&&v instanceof Array;
},__P:function(v){return typeof v==="object"&&v!==null&&!(v instanceof Array);
},__Q:function(B,C){for(var i=0,l=B.length;i<l;i++){if(B[i]==C){return true;
}}return false;
}},defer:function(s){s.define(b,[k,c,e,f],qx.bom.client.Engine.NAME);
s.define(h,[p,m],p);
s.define(g,[p,m],p);
s.__M();
}});
})();
(function(){var i="qx.client",h="on",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(C,D,E){C.attachEvent(h+D,E);
},"default":function(x,y,z){x.addEventListener(y,z,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(r,s,t){try{r.detachEvent(h+s,t);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(o,p,q){o.removeEventListener(p,q,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(i,{"mshtml":function(e){if(e.type===b){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(i,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(F){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(j){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(u,v){if(document.createEventObject){var w=document.createEventObject();
return u.fireEvent(h+v,w);
}else{var w=document.createEvent(a);
w.initEvent(v,true,true);
return !u.dispatchEvent(w);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(A,B){return A.hasOwnProperty(h+B);
},"default":function(k,l){var m=h+l;
var n=(m in k);

if(!n){n=typeof k[m]==g;

if(!n&&k.setAttribute){k.setAttribute(m,c);
n=typeof k[m]==g;
k.removeAttribute(m);
}}return n;
}})}});
})();
(function(){var bP="|bubble",bO="|capture",bN="|",bM="",bL="_",bK="unload",bJ="UNKNOWN_",bI="__W",bH="c",bG="DOM_",bD="__V",bF="WIN_",bE="capture",bC="qx.event.Manager",bB="QX_";
qx.Class.define(bC,{extend:Object,construct:function(o,p){this.__R=o;
this.__S=qx.core.ObjectRegistry.toHashCode(o);
this.__T=p;
if(o.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(o,bK,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(o,bK,arguments.callee);
self.dispose();
}));
}this.__U={};
this.__V={};
this.__W={};
this.__X={};
},statics:{__Y:0,getNextUniqueId:function(){return (this.__Y++)+bM;
}},members:{__T:null,__U:null,__W:null,__ba:null,__V:null,__X:null,__R:null,__S:null,getWindow:function(){return this.__R;
},getWindowId:function(){return this.__S;
},getHandler:function(ba){var bb=this.__V[ba.classname];

if(bb){return bb;
}return this.__V[ba.classname]=new ba(this);
},getDispatcher:function(bp){var bq=this.__W[bp.classname];

if(bq){return bq;
}return this.__W[bp.classname]=new bp(this,this.__T);
},getListeners:function(a,b,c){var d=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var f=this.__U[d];

if(!f){return null;
}var g=b+(c?bO:bP);
var e=f[g];
return e?e.concat():null;
},serializeListeners:function(br){var by=br.$$hash||qx.core.ObjectRegistry.toHashCode(br);
var bA=this.__U[by];
var bw=[];

if(bA){var bu,bz,bs,bv,bx;

for(var bt in bA){bu=bt.indexOf(bN);
bz=bt.substring(0,bu);
bs=bt.charAt(bu+1)==bH;
bv=bA[bt];

for(var i=0,l=bv.length;i<l;i++){bx=bv[i];
bw.push({self:bx.context,handler:bx.handler,type:bz,capture:bs});
}}}return bw;
},toggleAttachedEvents:function(E,F){var K=E.$$hash||qx.core.ObjectRegistry.toHashCode(E);
var M=this.__U[K];

if(M){var H,L,G,I;

for(var J in M){H=J.indexOf(bN);
L=J.substring(0,H);
G=J.charCodeAt(H+1)===99;
I=M[J];

if(F){this.__bb(E,L,G);
}else{this.__bc(E,L,G);
}}}},hasListener:function(q,r,s){{};
var t=q.$$hash||qx.core.ObjectRegistry.toHashCode(q);
var v=this.__U[t];

if(!v){return false;
}var w=r+(s?bO:bP);
var u=v[w];
return u&&u.length>0;
},importListeners:function(bQ,bR){{};
var bX=bQ.$$hash||qx.core.ObjectRegistry.toHashCode(bQ);
var bY=this.__U[bX]={};
var bU=qx.event.Manager;

for(var bS in bR){var bV=bR[bS];
var bW=bV.type+(bV.capture?bO:bP);
var bT=bY[bW];

if(!bT){bT=bY[bW]=[];
this.__bb(bQ,bV.type,bV.capture);
}bT.push({handler:bV.listener,context:bV.self,unique:bV.unique||(bU.__Y++)+bM});
}},addListener:function(cv,cw,cx,self,cy){var cC;
{};
var cD=cv.$$hash||qx.core.ObjectRegistry.toHashCode(cv);
var cF=this.__U[cD];

if(!cF){cF=this.__U[cD]={};
}var cB=cw+(cy?bO:bP);
var cA=cF[cB];

if(!cA){cA=cF[cB]=[];
}if(cA.length===0){this.__bb(cv,cw,cy);
}var cE=(qx.event.Manager.__Y++)+bM;
var cz={handler:cx,context:self,unique:cE};
cA.push(cz);
return cB+bN+cE;
},findHandler:function(bc,bd){var bn=false,bg=false,bo=false;
var bm;

if(bc.nodeType===1){bn=true;
bm=bG+bc.tagName.toLowerCase()+bL+bd;
}else if(bc==this.__R){bg=true;
bm=bF+bd;
}else if(bc.classname){bo=true;
bm=bB+bc.classname+bL+bd;
}else{bm=bJ+bc+bL+bd;
}var bi=this.__X;

if(bi[bm]){return bi[bm];
}var bl=this.__T.getHandlers();
var bh=qx.event.IEventHandler;
var bj,bk,bf,be;

for(var i=0,l=bl.length;i<l;i++){bj=bl[i];
bf=bj.SUPPORTED_TYPES;

if(bf&&!bf[bd]){continue;
}be=bj.TARGET_CHECK;

if(be){if(!bn&&be===bh.TARGET_DOMNODE){continue;
}else if(!bg&&be===bh.TARGET_WINDOW){continue;
}else if(!bo&&be===bh.TARGET_OBJECT){continue;
}}bk=this.getHandler(bl[i]);

if(bj.IGNORE_CAN_HANDLE||bk.canHandleEvent(bc,bd)){bi[bm]=bk;
return bk;
}}return null;
},__bb:function(j,k,m){var n=this.findHandler(j,k);

if(n){n.registerEvent(j,k,m);
return;
}{};
},removeListener:function(ch,ci,cj,self,ck){var co;
{};
var cp=ch.$$hash||qx.core.ObjectRegistry.toHashCode(ch);
var cq=this.__U[cp];

if(!cq){return false;
}var cl=ci+(ck?bO:bP);
var cm=cq[cl];

if(!cm){return false;
}var cn;

for(var i=0,l=cm.length;i<l;i++){cn=cm[i];

if(cn.handler===cj&&cn.context===self){qx.lang.Array.removeAt(cm,i);

if(cm.length==0){this.__bc(ch,ci,ck);
}return true;
}}return false;
},removeListenerById:function(N,O){var U;
{};
var S=O.split(bN);
var X=S[0];
var P=S[1].charCodeAt(0)==99;
var W=S[2];
var V=N.$$hash||qx.core.ObjectRegistry.toHashCode(N);
var Y=this.__U[V];

if(!Y){return false;
}var T=X+(P?bO:bP);
var R=Y[T];

if(!R){return false;
}var Q;

for(var i=0,l=R.length;i<l;i++){Q=R[i];

if(Q.unique===W){qx.lang.Array.removeAt(R,i);

if(R.length==0){this.__bc(N,X,P);
}return true;
}}return false;
},removeAllListeners:function(ca){var ce=ca.$$hash||qx.core.ObjectRegistry.toHashCode(ca);
var cg=this.__U[ce];

if(!cg){return false;
}var cc,cf,cb;

for(var cd in cg){if(cg[cd].length>0){cc=cd.split(bN);
cf=cc[0];
cb=cc[1]===bE;
this.__bc(ca,cf,cb);
}}delete this.__U[ce];
return true;
},deleteAllListeners:function(h){delete this.__U[h];
},__bc:function(cr,cs,ct){var cu=this.findHandler(cr,cs);

if(cu){cu.unregisterEvent(cr,cs,ct);
return;
}{};
},dispatchEvent:function(x,event){var C;
{};
var D=event.getType();

if(!event.getBubbles()&&!this.hasListener(x,D)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(x);
}var B=this.__T.getDispatchers();
var A;
var z=false;

for(var i=0,l=B.length;i<l;i++){A=this.getDispatcher(B[i]);
if(A.canDispatchEvent(x,event,D)){A.dispatchEvent(x,event,D);
z=true;
break;
}}
if(!z){{};
return true;
}var y=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !y;
},dispose:function(){this.__T.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,bD);
qx.util.DisposeUtil.disposeMap(this,bI);
this.__U=this.__R=this.__ba=null;
this.__T=this.__X=null;
}}});
})();
(function(){var c="qx.dom.Node",b="";
qx.Class.define(c,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(r){return r.nodeType===
this.DOCUMENT?r:
r.ownerDocument||r.document;
},getWindow:function(d){if(d.nodeType==null){return d;
}if(d.nodeType!==this.DOCUMENT){d=d.ownerDocument;
}return d.defaultView||d.parentWindow||null;
},getDocumentElement:function(q){return this.getDocument(q).documentElement;
},getBodyElement:function(p){return this.getDocument(p).body;
},isNode:function(g){return !!(g&&g.nodeType!=null);
},isElement:function(o){return !!(o&&o.nodeType===this.ELEMENT);
},isDocument:function(k){return !!(k&&k.nodeType===this.DOCUMENT);
},isText:function(n){return !!(n&&n.nodeType===this.TEXT);
},isWindow:function(h){return !!(h&&h.history&&h.location&&h.document);
},isNodeName:function(e,f){if(!f||!e||!e.nodeName){return false;
}return f.toLowerCase()==qx.dom.Node.getName(e);
},getName:function(j){return j&&j.nodeName&&j.nodeName.toLowerCase()||null;
},getText:function(l){if(!l||!l.nodeType){return null;
}
switch(l.nodeType){case 1:var i,a=[],m=l.childNodes,length=m.length;

for(i=0;i<length;i++){a[i]=this.getText(m[i]);
}return a.join(b);
case 2:return l.nodeValue;
break;
case 3:return l.nodeValue;
break;
}return null;
}}});
})();
(function(){var h="mshtml",g="qx.client",f="[object Array]",e="qx.lang.Array",d="qx",c="number",b="string";
qx.Class.define(e,{statics:{toArray:function(E,F){return this.cast(E,Array,F);
},cast:function(J,K,L){if(J.constructor===K){return J;
}var M=new K;
if(qx.core.Variant.isSet(g,h)){if(J.item){for(var i=L||0,l=J.length;i<l;i++){M.push(J[i]);
}return M;
}}if(Object.prototype.toString.call(J)===f&&L==null){M.push.apply(M,J);
}else{M.push.apply(M,Array.prototype.slice.call(J,L||0));
}return M;
},fromArguments:function(N,O){return Array.prototype.slice.call(N,O||0);
},fromCollection:function(z){if(qx.core.Variant.isSet(g,h)){if(z.item){var A=[];

for(var i=0,l=z.length;i<l;i++){A[i]=z[i];
}return A;
}}return Array.prototype.slice.call(z,0);
},clone:function(G){return G.concat();
},insertAt:function(u,v,i){u.splice(i,0,v);
return u;
},insertBefore:function(B,C,D){var i=B.indexOf(D);

if(i==-1){B.push(C);
}else{B.splice(i,0,C);
}return B;
},insertAfter:function(X,Y,ba){var i=X.indexOf(ba);

if(i==-1||i==(X.length-1)){X.push(Y);
}else{X.splice(i+1,0,Y);
}return X;
},removeAt:function(a,i){return a.splice(i,1)[0];
},removeAll:function(t){t.length=0;
return this;
},append:function(P,Q){{};
Array.prototype.push.apply(P,Q);
return P;
},exclude:function(m,n){{};

for(var i=0,p=n.length,o;i<p;i++){o=m.indexOf(n[i]);

if(o!=-1){m.splice(o,1);
}}return m;
},remove:function(V,W){var i=V.indexOf(W);

if(i!=-1){V.splice(i,1);
return W;
}},contains:function(j,k){return j.indexOf(k)!==-1;
},equals:function(R,S){var length=R.length;

if(length!==S.length){return false;
}
for(var i=0;i<length;i++){if(R[i]!==S[i]){return false;
}}return true;
},sum:function(T){var U=0;

for(var i=0,l=T.length;i<l;i++){U+=T[i];
}return U;
},max:function(q){{};
var i,s=q.length,r=q[0];

for(i=1;i<s;i++){if(q[i]>r){r=q[i];
}}return r===undefined?null:r;
},min:function(w){{};
var i,y=w.length,x=w[0];

for(i=1;i<y;i++){if(w[i]<x){x=w[i];
}}return x===undefined?null:x;
},unique:function(bb){var bl=[],bd={},bg={},bi={};
var bh,bc=0;
var bm=d+qx.lang.Date.now();
var be=false,bk=false,bn=false;
for(var i=0,bj=bb.length;i<bj;i++){bh=bb[i];
if(bh===null){if(!be){be=true;
bl.push(bh);
}}else if(bh===undefined){}else if(bh===false){if(!bk){bk=true;
bl.push(bh);
}}else if(bh===true){if(!bn){bn=true;
bl.push(bh);
}}else if(typeof bh===b){if(!bd[bh]){bd[bh]=1;
bl.push(bh);
}}else if(typeof bh===c){if(!bg[bh]){bg[bh]=1;
bl.push(bh);
}}else{bf=bh[bm];

if(bf==null){bf=bh[bm]=bc++;
}
if(!bi[bf]){bi[bf]=bh;
bl.push(bh);
}}}for(var bf in bi){try{delete bi[bf][bm];
}catch(H){try{bi[bf][bm]=null;
}catch(I){throw new Error("Cannot clean-up map entry doneObjects["+bf+"]["+bm+"]");
}}}return bl;
}}});
})();
(function(){var i="()",h=".",g=".prototype.",f='anonymous()',e="qx.lang.Function",d=".constructor()";
qx.Class.define(e,{statics:{getCaller:function(l){return l.caller?l.caller.callee:l.callee.caller;
},getName:function(E){if(E.displayName){return E.displayName;
}
if(E.$$original||E.wrapper||E.classname){return E.classname+d;
}
if(E.$$mixin){for(var G in E.$$mixin.$$members){if(E.$$mixin.$$members[G]==E){return E.$$mixin.name+g+G+i;
}}for(var G in E.$$mixin){if(E.$$mixin[G]==E){return E.$$mixin.name+h+G+i;
}}}
if(E.self){var H=E.self.constructor;

if(H){for(var G in H.prototype){if(H.prototype[G]==E){return H.classname+g+G+i;
}}for(var G in H){if(H[G]==E){return H.classname+h+G+i;
}}}}var F=E.toString().match(/function\s*(\w*)\s*\(.*/);

if(F&&F.length>=1&&F[1]){return F[1]+i;
}return f;
},globalEval:function(m){if(window.execScript){return window.execScript(m);
}else{return eval.call(window,m);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(j,k){{};
if(!k){return j;
}if(!(k.self||k.args||k.delay!=null||k.periodical!=null||k.attempt)){return j;
}return function(event){{};
var u=qx.lang.Array.fromArguments(arguments);
if(k.args){u=k.args.concat(u);
}
if(k.delay||k.periodical){var t=qx.event.GlobalError.observeMethod(function(){return j.apply(k.self||this,u);
});

if(k.delay){return window.setTimeout(t,k.delay);
}
if(k.periodical){return window.setInterval(t,k.periodical);
}}else if(k.attempt){var v=false;

try{v=j.apply(k.self||this,u);
}catch(y){}return v;
}else{return j.apply(k.self||this,u);
}};
},bind:function(w,self,x){return this.create(w,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(z,A){return this.create(z,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(a,self,b){if(arguments.length<3){return function(event){return a.call(self||this,event||window.event);
};
}else{var c=qx.lang.Array.fromArguments(arguments,2);
return function(event){var B=[event||window.event];
B.push.apply(B,c);
a.apply(self||this,B);
};
}},attempt:function(C,self,D){return this.create(C,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(q,r,self,s){return this.create(q,{delay:r,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(n,o,self,p){return this.create(n,{periodical:o,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var e="qx.event.Registration";
qx.Class.define(e,{statics:{__bd:{},getManager:function(u){if(u==null){{};
u=window;
}else if(u.nodeType){u=qx.dom.Node.getWindow(u);
}else if(!qx.dom.Node.isWindow(u)){u=window;
}var w=u.$$hash||qx.core.ObjectRegistry.toHashCode(u);
var v=this.__bd[w];

if(!v){v=new qx.event.Manager(u,this);
this.__bd[w]=v;
}return v;
},removeManager:function(x){var y=x.getWindowId();
delete this.__bd[y];
},addListener:function(P,Q,R,self,S){return this.getManager(P).addListener(P,Q,R,self,S);
},removeListener:function(F,G,H,self,I){return this.getManager(F).removeListener(F,G,H,self,I);
},removeListenerById:function(j,k){return this.getManager(j).removeListenerById(j,k);
},removeAllListeners:function(l){return this.getManager(l).removeAllListeners(l);
},deleteAllListeners:function(z){var A=z.$$hash;

if(A){this.getManager(z).deleteAllListeners(A);
}},hasListener:function(f,g,h){return this.getManager(f).hasListener(f,g,h);
},serializeListeners:function(m){return this.getManager(m).serializeListeners(m);
},createEvent:function(B,C,D){{};
if(C==null){C=qx.event.type.Event;
}var E=qx.event.Pool.getInstance().getObject(C);
D?E.init.apply(E,D):E.init();
if(B){E.setType(B);
}return E;
},dispatchEvent:function(n,event){return this.getManager(n).dispatchEvent(n,event);
},fireEvent:function(J,K,L,M){var N;
{};
var O=this.createEvent(K,L||null,M);
return this.getManager(J).dispatchEvent(J,O);
},fireNonBubblingEvent:function(o,p,q,r){{};
var s=this.getManager(o);

if(!s.hasListener(o,p,false)){return true;
}var t=this.createEvent(p,q||null,r);
return s.dispatchEvent(o,t);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__be:[],addHandler:function(i){{};
this.__be.push(i);
this.__be.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__be;
},__bf:[],addDispatcher:function(c,d){{};
this.__bf.push(c);
this.__bf.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bf;
}}});
})();
(function(){var a="qx.core.property.Core";
qx.Bootstrap.define(a,{statics:{RUNTIME_OVERRIDE:false,ID:0}});
})();
(function(){var k="get",j="set",i="Boolean",h="qx.core.property.Simple",g="fireDataEvent",f="$$data",e="init",d="toggle",c="$$init-",b="reset",a="is";
qx.Bootstrap.define(h,{statics:{__E:0,__F:{},add:function(s,name,t){var y;
var A=this;
var v=g;
var G=f;
var B,H,E,x;
A.__E++;
B=A.__F;
H=B[name];

if(!H){H=B[name]=qx.core.property.Core.ID;
qx.core.property.Core.ID++;
}E=s.prototype;

if(t.init!==y){x=c+name;
E[x]=t.init;
}var w=qx.Bootstrap,C=(w.$$firstUp[name]||w.firstUp(name));
var u=t.nullable,z=t.event,F=t.apply,D=t.validate;
E[k+C]=function(){var r,p,q;
r=this;
{};
p=r[G];

if(p){q=p[H];
}
if(q===y){if(x){return r[x];
}{};
q=null;
}return q;
};
if(x){E[e+C]=function(){var J=this,I=J[G];
if(!I||I[H]===y){if(F){J[F](J[x],y,name);
}if(z){J[v](z,J[x],y);
}}};
}E[j+C]=function(l){var o,n,m;
o=this;
{};

if(D){qx.core.Type.check(l,D,o,qx.core.ValidationError);
}n=o[G];

if(!n){n=o[G]={};
}else{m=n[H];
}
if(l!==m){if(m===y&&x){m=o[x];
}n[H]=l;

if(F){o[F](l,m,name);
}
if(z){o[v](z,l,m);
}}return l;
};
E[b+C]=function(){var N,L,K,M;
N=this;
{};
L=N[G];

if(!L){return;
}K=L[H];
M=y;

if(K!==M){L[H]=M;

if(x){M=N[x];
}else{}
if(F){N[F](M,K,name);
}
if(z){N[v](z,M,K);
}}};
if(t.check===i){E[d+C]=function(){this[j+C](!this[k+C]());
};
E[a+C]=E[k+C];
}}}});
})();
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__G:{},__H:0,__I:[],register:function(m){var p=this.__G;

if(!p){return;
}var o=m.$$hash;

if(o==null){var n=this.__I;

if(n.length>0){o=n.pop();
}else{o=(this.__H++)+d;
}m.$$hash=o;
}{};
p[o]=m;
},unregister:function(q){var r=q.$$hash;

if(r==null){return;
}var s=this.__G;

if(s&&s[r]){delete s[r];
this.__I.push(r);
}try{delete q.$$hash;
}catch(t){if(q.removeAttribute){q.removeAttribute(e);
}}},toHashCode:function(h){{};
var k=h.$$hash;

if(k!=null){return k;
}var j=this.__I;

if(j.length>0){k=j.pop();
}else{k=(this.__H++)+d;
}return h.$$hash=k;
},clearHashCode:function(z){{};
var A=z.$$hash;

if(A!=null){this.__I.push(A);
try{delete z.$$hash;
}catch(f){if(z.removeAttribute){z.removeAttribute(e);
}}}},fromHashCode:function(g){return this.__G[g]||null;
},shutdown:function(){this.inShutDown=true;
var v=this.__G;
var x=[];

for(var w in v){x.push(w);
}x.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var u,i=0,l=x.length;

while(true){try{for(;i<l;i++){w=x[i];
u=v[w];

if(u&&u.dispose){u.dispose();
}}}catch(y){qx.Bootstrap.error(this,"Could not dispose object "+u.toString()+": "+y);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__G;
},getRegistry:function(){return this.__G;
}}});
})();
(function(){var bb="set",ba="qx.core.Object",Y="]",X="get",W="[",V="reset",U="string",T="Object";
qx.Class.define(ba,{extend:Object,construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:T},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+W+this.$$hash+Y;
},base:function(f,g){{};

if(arguments.length===1){return f.callee.base.call(this);
}else{return f.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(c){return c.callee.self;
},set:function(t,u){var v=qx.Bootstrap;
var w;
var self=this;

if(typeof t===U){w=bb+(v.$$firstUp[t]||v.firstUp(t));
{};
return self[w](u);
}else{for(var x in t){w=bb+(v.$$firstUp[x]||v.firstUp(x));
{};
self[w](t[x]);
}return self;
}},reset:function(Q){var R=qx.Bootstrap;
var S=V+(R.$$firstUp[Q]||R.firstUp(Q));
{};
return this[S]();
},get:function(bc){var bd=qx.Bootstrap;
var be=X+(bd.$$firstUp[bc]||qx.Bootstrap.firstUp(bc));
{};
return this[be]();
},__bg:qx.event.Registration,addListener:function(n,o,self,p){if(!this.$$disposed){return this.__bg.addListener(this,n,o,self,p);
}return null;
},addListenerOnce:function(A,B,self,C){var D=function(e){B.call(self||this,e);
this.removeListener(A,D,this,C);
};
return this.addListener(A,D,this,C);
},removeListener:function(E,F,self,G){if(!this.$$disposed){return this.__bg.removeListener(this,E,F,self,G);
}return false;
},removeListenerById:function(M){if(!this.$$disposed){return this.__bg.removeListenerById(this,M);
}return false;
},hasListener:function(q,r){return this.__bg.hasListener(this,q,r);
},dispatchEvent:function(d){if(!this.$$disposed){return this.__bg.dispatchEvent(this,d);
}return true;
},fireEvent:function(N,O,P){if(!this.$$disposed){return this.__bg.fireEvent(this,N,O,P);
}return true;
},fireNonBubblingEvent:function(bk,bl,bm){if(!this.$$disposed){return this.__bg.fireNonBubblingEvent(this,bk,bl,bm);
}return true;
},fireDataEvent:function(bg,bh,bi,bj){if(!this.$$disposed){if(bi===undefined){bi=null;
}return this.__bg.fireNonBubblingEvent(this,bg,qx.event.type.Data,[bh,bi,!!bj]);
}return true;
},__bh:null,setUserData:function(K,L){if(!this.__bh){this.__bh={};
}this.__bh[K]=L;
},getUserData:function(a){var b=this.__bh&&this.__bh[a];
return b===undefined?null:b;
},debug:function(I){qx.log.Logger.debug(this,I);
},info:function(bo){qx.log.Logger.info(this,bo);
},warn:function(J){qx.log.Logger.warn(this,J);
},error:function(bf){qx.log.Logger.error(this,bf);
},trace:function(){qx.log.Logger.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var m,j;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var k=this.constructor;
var h;

while(k.superclass){if(k.$$destructor){k.$$destructor.call(this);
}if(k.$$includes){h=k.$$flatIncludes;

for(var i=0,l=h.length;i<l;i++){if(h[i].$$destructor){h[i].$$destructor.call(this);
}}}k=k.superclass;
}if(this.$$data){this.$$data=null;
}{};
},_disposeObjects:function(bn){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(s){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(H){qx.util.DisposeUtil.disposeArray(this,H);
},_disposeMap:function(bp){qx.util.DisposeUtil.disposeMap(this,bp);
}},settings:{"qx.disposerDebugging":false},defer:function(y,z){{};
},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
if(this.__bh){this.__bh=null;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.globalErrorHandling",b="on",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{setErrorHandler:function(k,l){this.__bn=k||null;
this.__bo=l||window;

if(qx.core.Setting.get(c)===b){if(k&&window.onerror){var m=qx.Bootstrap.bind(this.__bq,this);

if(this.__bp==null){this.__bp=window.onerror;
}var self=this;
window.onerror=function(e){self.__bp(e);
m(e);
};
}
if(k&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__bq,this);
}if(this.__bn==null){if(this.__bp!=null){window.onerror=this.__bp;
this.__bp=null;
}else{window.onerror=null;
}}}},__bq:function(h,i,j){if(this.__bn){this.handleError(new qx.core.WindowError(h,i,j));
return true;
}},observeMethod:function(n){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__bn){return n.apply(this,arguments);
}
try{return n.apply(this,arguments);
}catch(f){self.handleError(new qx.core.GlobalError(f,arguments));
}};
}else{return n;
}},handleError:function(d){if(this.__bn){this.__bn.call(this.__bo,d);
}}},defer:function(g){qx.core.Setting.define(c,b);
g.setErrorHandler(null,null);
}});
})();
(function(){var n="ready",m="qx.client",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="qx.application",f="gecko|opera|webkit",d="left",b="DOMContentLoaded",c="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(x){qx.core.Object.call(this);
this._window=x.getWindow();
this.__fc=false;
this.__fd=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__fg();
}}},members:{canHandleEvent:function(v,w){},registerEvent:function(r,s,t){},unregisterEvent:function(y,z,A){},__fe:null,__fc:null,__fd:null,__ff:null,__fg:function(){if(!this.__fe&&this.__fc&&qx.$$loader.scriptLoaded){try{var o=qx.core.Setting.get(g);

if(!qx.Class.getByName(o)){return;
}}catch(e){}if(qx.core.Variant.isSet(m,l)){if(qx.event.Registration.hasListener(this._window,n)){this.__fe=true;
qx.event.Registration.fireEvent(this._window,n);
}}else{this.__fe=true;
qx.event.Registration.fireEvent(this._window,n);
}}},isApplicationReady:function(){return this.__fe;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==n){this.__fc=true;
this.__fg();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(m,f)){qx.bom.Event.addNativeListener(this._window,b,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(m,l)){var self=this;
var a=function(){try{document.documentElement.doScroll(d);

if(document.body){self._onNativeLoadWrapped();
}}catch(q){window.setTimeout(a,100);
}};
a();
}qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,j,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,j,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__fc=true;
this.__fg();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__ff){this.__ff=true;

try{qx.event.Registration.fireEvent(this._window,c);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var g="qx.event.handler.Window";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this._manager=u;
this._window=u.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(q,r){},registerEvent:function(k,l,m){},unregisterEvent:function(h,i,j){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var p=qx.event.handler.Window.SUPPORTED_TYPES;

for(var o in p){qx.bom.Event.addNativeListener(this._window,o,this._onNativeWrapper);
}},_stopWindowObserver:function(){var t=qx.event.handler.Window.SUPPORTED_TYPES;

for(var s in t){qx.bom.Event.removeNativeListener(this._window,s,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var b=this._window;

try{var f=b.document;
}catch(e){return ;
}var c=f.documentElement;
var a=e.target||e.srcElement;

if(a==null||a===b||a===f||a===c){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,b]);
qx.event.Registration.dispatchEvent(b,event);
var d=event.getReturnValue();

if(d!=null){e.returnValue=d;
return d;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(n){qx.event.Registration.addHandler(n);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(m){this._manager=m;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(b,event,c){return !event.getBubbles();
},dispatchEvent:function(e,event,f){var j,g;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(d){qx.event.Registration.addDispatcher(d);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__fh||null;
},ready:function(){if(this.__fh){return;
}
if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=qx.core.Setting.get(d);
var j=qx.Class.getByName(i);

if(j){this.__fh=new j;
var h=new Date;
this.__fh.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__fh.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__fi:function(e){var l=this.__fh;

if(l){e.setReturnValue(l.close());
}},__fj:function(){var g=this.__fh;

if(g){g.terminate();
}}},defer:function(k){qx.event.Registration.addListener(window,f,k.ready,k);
qx.event.Registration.addListener(window,a,k.__fj,k);
qx.event.Registration.addListener(window,c,k.__fi,k);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var f="qx.locale.MTranslation";
qx.Mixin.define(f,{members:{tr:function(g,h){var i=qx.locale.Manager;

if(i){return i.tr.apply(i,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(a,b,c,d){var e=qx.locale.Manager;

if(e){return e.trn.apply(e,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(j,k,l){var m=qx.locale.Manager;

if(m){return m.trc.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(n){var o=qx.locale.Manager;

if(o){return o.marktr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var c="abstract",b="qx.application.AbstractGui";
qx.Class.define(b,{type:c,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__rr:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__rr;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__rr=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(a){},terminate:function(){}},destruct:function(){this.__rr=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var e="row",d="Boolean",c="end",b="demobrowser.demo.progressive.ProgressiveTable_Boolean",a="Id";
qx.Class.define(b,{extend:qx.application.Standalone,members:{main:function(){qx.application.Standalone.prototype.main.call(this);
var r=0;
var n=function(f){var g=[];

for(var h=0;h<f;h++){g.push({renderer:e,location:c,data:[r++,(Math.floor(Math.random()*2)==0?false:true)]});
}return g;
};
var q=new qx.ui.progressive.renderer.table.Widths(2);
q.setWidth(0,100);
q.setWidth(1,100);
var l=[a,d];
var m=new qx.ui.progressive.headfoot.TableHeading(q,l);
var k=new qx.ui.progressive.headfoot.Progress(q,l);
var t=new qx.ui.progressive.structure.Default(m,k);
var j=new qx.ui.progressive.Progressive(t);
var p=new qx.ui.progressive.model.Default();
var o=n(20);
p.addElements(o);
j.setDataModel(p);
var s=new qx.ui.progressive.renderer.table.Row(q);
j.addRenderer(e,s);
var i=new qx.ui.progressive.renderer.table.cell.Boolean();
i.setAllowToggle(true);
s.addRenderer(1,i);
j.set({width:200+qx.bom.element.Overflow.getScrollbarWidth(),maxWidth:200+qx.bom.element.Overflow.getScrollbarWidth()});
this.getRoot().add(j,{left:50,top:50,bottom:50});
j.render();
}}});
})();
(function(){var a="qx.core.property.Util";
qx.Bootstrap.define(a,{statics:{getPropertyDefinition:function(c,name){var d;

while(c){d=c.$$properties;

if(d&&d[name]){return d[name];
}c=c.superclass;
}return null;
},hasProperty:function(e,name){return !!this.getPropertyDefinition(e,name);
},getProperties:function(f){var g=[];

while(f){if(f.$$properties){g.push.apply(g,qx.Bootstrap.getKeys(f.$$properties));
}f=f.superclass;
}return g;
},getByProperty:function(b,name){while(b){if(b.$$properties&&b.$$properties[name]){return b;
}b=b.superclass;
}return null;
}}});
})();
(function(){var j="emulated",h="native",g='"',f="qx.lang.Core",e="\\\\",d="\\\"",c="[object Error]";
qx.Bootstrap.define(f,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==c)?j:h],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(a,b){if(b==null){b=0;
}else if(b<0){b=Math.max(0,this.length+b);
}
for(var i=b;i<this.length;i++){if(this[i]===a){return i;
}}return -1;
}}[Array.prototype.indexOf?h:j],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(C,D){if(D==null){D=this.length-1;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i>=0;i--){if(this[i]===C){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?h:j],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(r,s){var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){r.call(s||window,t,i,this);
}}}}[Array.prototype.forEach?h:j],arrayFilter:{"native":Array.prototype.filter,"emulated":function(y,z){var A=[];
var l=this.length;

for(var i=0;i<l;i++){var B=this[i];

if(B!==undefined){if(y.call(z||window,B,i,this)){A.push(this[i]);
}}}return A;
}}[Array.prototype.filter?h:j],arrayMap:{"native":Array.prototype.map,"emulated":function(u,v){var w=[];
var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){w[i]=u.call(v||window,x,i,this);
}}return w;
}}[Array.prototype.map?h:j],arraySome:{"native":Array.prototype.some,"emulated":function(k,m){var l=this.length;

for(var i=0;i<l;i++){var n=this[i];

if(n!==undefined){if(k.call(m||window,n,i,this)){return true;
}}}return false;
}}[Array.prototype.some?h:j],arrayEvery:{"native":Array.prototype.every,"emulated":function(o,p){var l=this.length;

for(var i=0;i<l;i++){var q=this[i];

if(q!==undefined){if(!o.call(p||window,q,i,this)){return false;
}}}return true;
}}[Array.prototype.every?h:j],stringQuote:{"native":String.prototype.quote,"emulated":function(){return g+this.replace(/\\/g,e).replace(/\"/g,d)+g;
}}[String.prototype.quote?h:j]}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__br=c;
this.__bs=d||b;
this.__bt=e===undefined?-1:e;
},members:{__br:null,__bs:null,__bt:null,toString:function(){return this.__br;
},getUri:function(){return this.__bs;
},getLineNumber:function(){return this.__bt;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){{};
this.__bu=b+(c&&c.message?c.message:c);
Error.call(this,this.__bu);
this.__bv=d;
this.__bw=c;
},members:{__bw:null,__bv:null,__bu:null,toString:function(){return this.__bu;
},getArguments:function(){return this.__bv;
},getSourceException:function(){return this.__bw;
}},destruct:function(){this.__bw=null;
this.__bv=null;
this.__bu=null;
}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var e="qx.util.ObjectPool",d="Integer";
qx.Class.define(e,{extend:qx.core.Object,construct:function(j){qx.core.Object.call(this);
this.__bx={};

if(j!=null){this.setSize(j);
}},properties:{size:{check:d,init:Infinity}},members:{__bx:null,getObject:function(f){if(this.$$disposed){return new f;
}
if(!f){throw new Error("Class needs to be defined!");
}var g=null;
var h=this.__bx[f.classname];

if(h){g=h.pop();
}
if(g){g.$$pooled=false;
}else{g=new f;
}return g;
},poolObject:function(a){if(!this.__bx){return;
}var b=a.classname;
var c=this.__bx[b];

if(a.$$pooled){throw new Error("Object is already pooled: "+a);
}
if(!c){this.__bx[b]=c=[];
}if(c.length>this.getSize()){if(a.destroy){a.destroy();
}else{a.dispose();
}return;
}a.$$pooled=true;
c.push(a);
}},destruct:function(){var n=this.__bx;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__bx;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var k="qx.event.type.Event";
qx.Class.define(k,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(h,i){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!h;
this._cancelable=!!i;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(l){if(l){var m=l;
}else{var m=qx.event.Pool.getInstance().getObject(this.constructor);
}m._type=this._type;
m._target=this._target;
m._currentTarget=this._currentTarget;
m._relatedTarget=this._relatedTarget;
m._originalTarget=this._originalTarget;
m._stopPropagation=this._stopPropagation;
m._bubbles=this._bubbles;
m._preventDefault=this._preventDefault;
m._cancelable=this._cancelable;
return m;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(e){this._type=e;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(j){this._eventPhase=j;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(d){this._target=d;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(b){this._currentTarget=b;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(f){this._relatedTarget=f;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(c){this._originalTarget=c;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(g){this._bubbles=g;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(a){this._cancelable=a;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var k="Number",j="string",h="String",g="Boolean",f="Unsupported check: ",e="RegExp",d="PositiveNumber",c="Integer",b="Object",a="Function",z="Array",y="' does not validates as: ",x="$$isString",w="Node",v="Null",u="Error",t="number",s="PositiveInteger",r="Element",q="Document",o="boolean",p="qx.core.Type",m="Date",n="Value: '";
qx.Class.define(p,{statics:{__by:{"String":x},__bz:{"String":1,"Number":1,"Function":1,"RegExp":1,"Date":1,"Boolean":1,"Array":1,"Object":1,"Error":1},__bA:{"Integer":k,"PositiveNumber":k,"PositiveInteger":k},__bB:{"String":j,"Number":t,"Boolean":o},__bC:{"[object String]":h,"[object Array]":z,"[object Object]":b,"[object RegExp]":e,"[object Number]":k,"[object Boolean]":g,"[object Date]":m,"[object Function]":a,"[object Error]":u},__bD:{"Class":1,"Mixin":1,"Interface":1,"Theme":1},__bE:{"Node":1,"Element":1,"Document":1},__bF:{},add:function(A,B,C){var D=this.__bF;
{};
D[A]={method:B,context:C};
},check:function(F,G,H,I){var P,O,L,S,R,K,N,M,J,Q,T,i,l;

if(!I){I=Error;
}
if(F==null){P=G==v;
{};
}else if(typeof G==j){if(this.__bz[G]||this.__bA[G]){O=this.__bA[G];

if(O){L=G;
G=O;
}S=this.__bB[G];

if(S){P=typeof F==S;
}
if(!P){P=this.__bC[Object.prototype.toString.call(F)]==G;
}R=this.__by[G];

if(!P&&R){P=R in F;
}
if(P&&G==k){P=isFinite(F);
}
if(L){G=L;

if(P){if(G==c){P=F%1==0;
}else if(G==s){P=F%1==0&&F>=0;
}else if(G==d){P=F>=0;
}}}{};
}else if(this.__bE[G]){K=F.nodeType;
P=K!=null&&(G==w||(K==1&&G==r)||(K==9&&G==q));
{};
}else if(this.__bD[G]){P=F.$$type==G;
{};
}else{N=qx.Class.getByName(G);

if(N){P=F.hasOwnProperty&&F instanceof N;
{};
}else{M=F.constructor;
J=qx.Interface.getByName(G);

if(J){P=qx.Bootstrap.hasInterface(M,J);
{};
}else{Q=qx.Mixin.getByName(G);

if(Q){P=qx.Class.hasMixin(M,Q);
{};
}}}}if(P==null){T=this.__bF[G];

if(T){P=T.method.call(T.context||window,F);
}}}else if(G instanceof Array){if(G.indexOf){P=G.indexOf(F)!=-1;
}else{P=false;

for(i=0,l=G.length;i<l;i++){if(F===G[i]){P=true;
break;
}}}{};
}else if(G instanceof RegExp){qx.core.Type.check(F,h);
P=G.match(F);
{};
}else if(G instanceof Function){try{P=G.call(H||window,F);
if(P==null){P=true;
}}catch(E){{P=false;
};
}{};
}if(P==null||P==false){if(!I){I=Error;
}
if(P==null){throw new I(f+G);
}else{throw new I(n+F+y+G);
}}}}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bG=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bG:null,message:null,getComment:function(){return this.__bG;
},toString:function(){return this.__bG+c+this.message;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var b="qx.event.handler.Object";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(c,d){return qx.Class.supportsEvent(c.constructor,d);
},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__bH:null,__bI:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__bH=b;
this.__bI=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__bH=this.__bH;
f.__bI=this.__bI;
return f;
},getData:function(){return this.__bH;
},getOldData:function(){return this.__bI;
}},destruct:function(){this.__bH=this.__bI=null;
}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(n){this.setMaxEntries(n||50);
},members:{__bJ:0,__bK:0,__bL:false,__bM:0,__bN:null,__bO:null,setMaxEntries:function(b){this.__bO=b;
this.clear();
},getMaxEntries:function(){return this.__bO;
},addEntry:function(g){this.__bN[this.__bJ]=g;
this.__bJ=this.__bP(this.__bJ,1);
var h=this.getMaxEntries();

if(this.__bK<h){this.__bK++;
}if(this.__bL&&(this.__bM<h)){this.__bM++;
}},mark:function(){this.__bL=true;
this.__bM=0;
},clearMark:function(){this.__bL=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(i,j){if(i>this.__bK){i=this.__bK;
}if(j&&this.__bL&&(i>this.__bM)){i=this.__bM;
}
if(i>0){var l=this.__bP(this.__bJ,-1);
var k=this.__bP(l,-i+1);
var m;

if(k<=l){m=this.__bN.slice(k,l+1);
}else{m=this.__bN.slice(k,this.__bK).concat(this.__bN.slice(0,l+1));
}}else{m=[];
}return m;
},clear:function(){this.__bN=new Array(this.getMaxEntries());
this.__bK=0;
this.__bM=0;
this.__bJ=0;
},__bP:function(c,d){var e=this.getMaxEntries();
var f=(c+d)%e;
if(f<0){f+=e;
}return f;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(c){this.setMaxMessages(c||50);
},members:{setMaxMessages:function(d){this.setMaxEntries(d);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(b){this.addEntry(b);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(e,f){return this.getEntries(e,f);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var P="node",O="error",N="...(+",M="array",L=")",K="instance",J="string",I="null",H="class",G="number",bk="stringify",bj="]",bi="unknown",bh="function",bg="boolean",bf="debug",be="map",bd="undefined",bc="qx.log.Logger",bb=")}",W="info",X="#",U="warn",V="document",S="{...(",T="[",Q="text[",R="[...(",Y=")]",ba="object";
qx.Class.define(bc,{statics:{__bQ:bf,setLevel:function(k){this.__bQ=k;
},getLevel:function(){return this.__bQ;
},setTreshold:function(m){this.__bT.setMaxMessages(m);
},getTreshold:function(){return this.__bT.getMaxMessages();
},__bR:{},__bS:0,register:function(n){if(n.$$id){return;
}var o=this.__bS++;
this.__bR[o]=n;
n.$$id=o;
var p=this.__bT.getAllLogEvents();

for(var i=0,l=p.length;i<l;i++){n.process(p[i]);
}},unregister:function(q){var r=q.$$id;

if(r==null){return;
}delete this.__bR[r];
delete q.$$id;
},debug:function(B,C){qx.log.Logger.__bV(bf,arguments);
},info:function(u,v){qx.log.Logger.__bV(W,arguments);
},warn:function(bt,bu){qx.log.Logger.__bV(U,arguments);
},error:function(s,t){qx.log.Logger.__bV(O,arguments);
},trace:function(){},deprecatedMethodWarning:function(bJ,bK){var bL;
{};
},deprecatedClassWarning:function(w,x){var y;
{};
},deprecatedEventWarning:function(bl,event,bm){var bn;
{};
},deprecatedMixinWarning:function(D,E){var F;
{};
},deprecatedConstantWarning:function(bF,bG,bH){var self,bI;
{};
},deprecateMethodOverriding:function(bo,bp,bq,br){var bs;
{};
},clear:function(){this.__bT.clearHistory();
},__bT:new qx.log.appender.RingBuffer(50),__bU:{debug:0,info:1,warn:2,error:3},__bV:function(bv,bw){var bB=this.__bU;

if(bB[bv]<bB[this.__bQ]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__bX(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by instanceof qx.core.Object){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__bT.process(bD);
var bE=this.__bR;

for(var bz in bE){bE[bz].process(bD);
}},__bW:function(bM){if(bM===undefined){return bd;
}else if(bM===null){return I;
}
if(bM.$$type){return H;
}var bN=typeof bM;

if(bN===bh||bN==J||bN===G||bN===bg){return bN;
}else if(bN===ba){if(bM.nodeType){return P;
}else if(bM.classname){return K;
}else if(bM instanceof Array){return M;
}else if(bM instanceof Error){return O;
}else{return be;
}}
if(bM.toString){return bk;
}return bi;
},__bX:function(a,b){var j=this.__bW(a);
var e=bi;
var d=[];

switch(j){case I:case bd:e=j;
break;
case J:case G:case bg:e=a;
break;
case P:if(a.nodeType===9){e=V;
}else if(a.nodeType===3){e=Q+a.nodeValue+bj;
}else if(a.nodeType===1){e=a.nodeName.toLowerCase();

if(a.id){e+=X+a.id;
}}else{e=P;
}break;
case bh:e=qx.lang.Function.getName(a)||j;
break;
case K:e=a.basename+T+a.$$hash+bj;
break;
case H:case bk:e=a.toString();
break;
case O:{};
e=a.toString();
break;
case M:if(b){e=[];

for(var i=0,l=a.length;i<l;i++){if(e.length>20){e.push(N+(l-i)+L);
break;
}e.push(this.__bX(a[i],false));
}}else{e=R+a.length+Y;
}break;
case be:if(b){var c;
var h=[];

for(var g in a){h.push(g);
}h.sort();
e=[];

for(var i=0,l=h.length;i<l;i++){if(e.length>20){e.push(N+(l-i)+L);
break;
}g=h[i];
c=this.__bX(a[g],false);
c.key=g;
e.push(c);
}}else{var f=0;

for(var g in a){f++;
}e=S+f+bb;
}break;
}return {type:j,text:e,trace:d};
}},defer:function(z){var A=qx.Bootstrap.$$logs;

for(var i=0;i<A.length;i++){z.__bV(A[i][0],A[i][1]);
}qx.Bootstrap.debug=z.debug;
qx.Bootstrap.info=z.info;
qx.Bootstrap.warn=z.warn;
qx.Bootstrap.error=z.error;
qx.Bootstrap.trace=z.trace;
}});
})();
(function(){var e="qx.util.DisposeUtil";
qx.Class.define(e,{statics:{disposeObjects:function(g,h,j){var name;

for(var i=0,l=h.length;i<l;i++){name=h[i];

if(g[name]==null||!g.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(g[name].dispose){if(!j&&g[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{g[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}g[name]=null;
}},disposeArray:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var i=o.length-1;i>=0;i--){n=o[i];

if(n){n.dispose();
}}}catch(f){throw new Error("The array field: "+m+" of object: "+k+" has non disposable entries: "+f);
}o.length=0;
k[m]=null;
},disposeMap:function(a,b){var c=a[b];

if(!c){return;
}if(qx.core.ObjectRegistry.inShutDown){a[b]=null;
return;
}try{for(var d in c){if(c.hasOwnProperty(d)){c[d].dispose();
}}}catch(p){throw new Error("The map field: "+b+" of object: "+a+" has non disposable entries: "+p);
}a[b]=null;
},disposeTriggeredBy:function(q,r){var s=r.dispose;
r.dispose=function(){s.call(r);
q.dispose();
};
}}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(g,h,i,j,k){qx.event.type.Event.prototype.init.call(this,j,k);
this._target=h||qx.bom.Event.getTarget(g);
this._relatedTarget=i||qx.bom.Event.getRelatedTarget(g);

if(g.timeStamp){this._timeStamp=g.timeStamp;
}this._native=g;
this._returnValue=null;
return this;
},clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
var f={};
e._native=this._cloneNativeEvent(this._native,f);
e._returnValue=this._returnValue;
return e;
},_cloneNativeEvent:function(b,c){c.preventDefault=qx.lang.Function.empty;
return c;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(l){this._returnValue=l;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="iPad",d="X11",c="MacIntel",a="MacPPC";
qx.Class.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__fk:function(){var o=navigator.platform;
if(o==null||o===l){o=navigator.userAgent;
}
if(o.indexOf(f)!=-1||o.indexOf(m)!=-1||o.indexOf(k)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(h)!=-1||o.indexOf(a)!=-1||o.indexOf(c)!=-1||o.indexOf(n)!=-1||o.indexOf(g)!=-1||o.indexOf(b)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(d)!=-1||o.indexOf(j)!=-1||o.indexOf(i)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(p){p.__fk();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__fl:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__fm:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__fl){K.push(J);
}var M=new RegExp(l+K.join(C).replace(/\./g,r)+H,u);

if(!M.test(L)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(w).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__fl[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(I){I.__fm();
}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(j,k){var n=null;
var q=null;
var t=null;
var u=null;
var p=null;

if(j){n=j.meta.color||null;
q=j.meta.decoration||null;
t=j.meta.font||null;
u=j.meta.icon||null;
p=j.meta.appearance||null;
}var r=qx.theme.manager.Color.getInstance();
var s=qx.theme.manager.Decoration.getInstance();
var l=qx.theme.manager.Font.getInstance();
var o=qx.theme.manager.Icon.getInstance();
var m=qx.theme.manager.Appearance.getInstance();
r.setTheme(n);
s.setTheme(q);
l.setTheme(t);
o.setTheme(u);
m.setTheme(p);
},initialize:function(){var h=qx.core.Setting;
var g,i;
g=h.get(e);

if(g){i=qx.Theme.getByName(g);

if(!i){throw new Error("The theme to use is not available: "+g);
}this.setTheme(i);
}}},settings:{"qx.theme":c}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(d){return this._dynamic[d];
},isDynamic:function(f){return !!this._dynamic[f];
},resolve:function(c){if(c&&this._dynamic[c]){return this._dynamic[c];
}return c;
},_setDynamic:function(e){this._dynamic=e;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(k){var l={};

if(k){var m=k.colors;
var n=qx.util.ColorUtil;
var o;

for(var p in m){o=m[p];

if(typeof o===b){if(!n.isCssString(o)){throw new Error("Could not parse color: "+o);
}}else if(o instanceof Array){o=n.rgbToRgbString(o);
}else{throw new Error("Could not parse color: "+o);
}l[p]=o;
}}this._setDynamic(l);
},resolve:function(g){var j=this._dynamic;
var h=j[g];

if(h){return h;
}var i=this.getTheme();

if(i!==null&&i.colors[g]){return j[g]=i.colors[g];
}return g;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&(r.colors[q]!==undefined)){s[q]=r.colors[q];
return true;
}return false;
}}});
})();
(function(){var n=",",m="qx.util.ColorUtil",l=")",k="qx.theme.manager.Color",j="rgb(",h="Color";
qx.Class.define(m,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(bf){return this.NAMED[bf]!==undefined;
},isSystemColor:function(J){return this.SYSTEM[J]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(k);
},isThemedColor:function(I){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(I);
},stringToRgb:function(A){if(this.supportsThemes()&&this.isThemedColor(A)){var A=qx.theme.manager.Color.getInstance().resolveDynamic(A);
}
if(this.isNamedColor(A)){return this.NAMED[A];
}else if(this.isSystemColor(A)){throw new Error("Could not convert system colors to RGB: "+A);
}else if(this.isRgbString(A)){return this.__hw();
}else if(this.isHex3String(A)){return this.__hy();
}else if(this.isHex6String(A)){return this.__hz();
}throw new Error("Could not parse color: "+A);
},cssStringToRgb:function(N){if(this.isNamedColor(N)){return this.NAMED[N];
}else if(this.isSystemColor(N)){throw new Error("Could not convert system colors to RGB: "+N);
}else if(this.isRgbString(N)){return this.__hw();
}else if(this.isRgbaString(N)){return this.__hx();
}else if(this.isHex3String(N)){return this.__hy();
}else if(this.isHex6String(N)){return this.__hz();
}throw new Error("Could not parse color: "+N);
},stringToRgbString:function(O){return this.rgbToRgbString(this.stringToRgb(O));
},rgbToRgbString:function(B){return j+B[0]+n+B[1]+n+B[2]+l;
},rgbToHexString:function(o){return (qx.lang.String.pad(o[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(o[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(o[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(a){return this.isThemedColor(a)||this.isNamedColor(a)||this.isHex3String(a)||this.isHex6String(a)||this.isRgbString(a);
},isCssString:function(y){return this.isSystemColor(y)||this.isNamedColor(y)||this.isHex3String(y)||this.isHex6String(y)||this.isRgbString(y);
},isHex3String:function(bk){return this.REGEXP.hex3.test(bk);
},isHex6String:function(x){return this.REGEXP.hex6.test(x);
},isRgbString:function(z){return this.REGEXP.rgb.test(z);
},isRgbaString:function(L){return this.REGEXP.rgba.test(L);
},__hw:function(){var be=parseInt(RegExp.$1,10);
var bd=parseInt(RegExp.$2,10);
var bc=parseInt(RegExp.$3,10);
return [be,bd,bc];
},__hx:function(){var bi=parseInt(RegExp.$1,10);
var bh=parseInt(RegExp.$2,10);
var bg=parseInt(RegExp.$3,10);
return [bi,bh,bg];
},__hy:function(){var e=parseInt(RegExp.$1,16)*17;
var d=parseInt(RegExp.$2,16)*17;
var c=parseInt(RegExp.$3,16)*17;
return [e,d,c];
},__hz:function(){var v=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var u=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var s=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [v,u,s];
},hex3StringToRgb:function(M){if(this.isHex3String(M)){return this.__hy(M);
}throw new Error("Invalid hex3 value: "+M);
},hex6StringToRgb:function(w){if(this.isHex6String(w)){return this.__hz(w);
}throw new Error("Invalid hex6 value: "+w);
},hexStringToRgb:function(K){if(this.isHex3String(K)){return this.__hy(K);
}
if(this.isHex6String(K)){return this.__hz(K);
}throw new Error("Invalid hex value: "+K);
},rgbToHsb:function(P){var R,S,U;
var bb=P[0];
var X=P[1];
var Q=P[2];
var ba=(bb>X)?bb:X;

if(Q>ba){ba=Q;
}var T=(bb<X)?bb:X;

if(Q<T){T=Q;
}U=ba/255.0;

if(ba!=0){S=(ba-T)/ba;
}else{S=0;
}
if(S==0){R=0;
}else{var W=(ba-bb)/(ba-T);
var Y=(ba-X)/(ba-T);
var V=(ba-Q)/(ba-T);

if(bb==ba){R=V-Y;
}else if(X==ba){R=2.0+W-V;
}else{R=4.0+Y-W;
}R=R/6.0;

if(R<0){R=R+1.0;
}}return [Math.round(R*360),Math.round(S*100),Math.round(U*100)];
},hsbToRgb:function(C){var i,f,p,q,t;
var D=C[0]/360;
var E=C[1]/100;
var F=C[2]/100;

if(D>=1.0){D%=1.0;
}
if(E>1.0){E=1.0;
}
if(F>1.0){F=1.0;
}var G=Math.floor(255*F);
var H={};

if(E==0.0){H.red=H.green=H.blue=G;
}else{D*=6.0;
i=Math.floor(D);
f=D-i;
p=Math.floor(G*(1.0-E));
q=Math.floor(G*(1.0-(E*f)));
t=Math.floor(G*(1.0-(E*(1.0-f))));

switch(i){case 0:H.red=G;
H.green=t;
H.blue=p;
break;
case 1:H.red=q;
H.green=G;
H.blue=p;
break;
case 2:H.red=p;
H.green=G;
H.blue=t;
break;
case 3:H.red=p;
H.green=q;
H.blue=G;
break;
case 4:H.red=t;
H.green=p;
H.blue=G;
break;
case 5:H.red=G;
H.green=p;
H.blue=q;
break;
}}return [H.red,H.green,H.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}},defer:function(bj){qx.core.Type.add(h,bj.isValidPropertyValue,bj);
}});
})();
(function(){var N="",M="g",L="0",K='\\$1',J="%",I='-',H="qx.lang.String",G=' ',F='\n',E="undefined";
qx.Class.define(H,{statics:{camelCase:function(x){return x.replace(/\-([a-z])/g,function(g,h){return h.toUpperCase();
});
},hyphenate:function(y){return y.replace(/[A-Z]/g,function(O){return (I+O.charAt(0).toLowerCase());
});
},capitalize:function(C){return C.replace(/\b[a-z]/g,function(B){return B.toUpperCase();
});
},clean:function(f){return this.trim(f.replace(/\s+/g,G));
},trimLeft:function(d){return d.trimLeft?d.trimLeft():d.replace(/^\s+/,N);
},trimRight:function(D){return D.trimRight?D.trimRight():D.replace(/\s+$/,N);
},trim:function(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,N);
},startsWith:function(o,p){return o.indexOf(p)===0;
},endsWith:function(z,A){return z.substring(z.length-A.length,z.length)===A;
},repeat:function(a,b){return a.length>0?new Array(b+1).join(a):N;
},pad:function(r,length,s){var t=length-r.length;

if(t>0){if(typeof s===E){s=L;
}return this.repeat(s,t)+r;
}else{return r;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(P,Q){return P.indexOf(Q)!=-1;
},format:function(u,v){var w=u;

for(var i=0;i<v.length;i++){w=w.replace(new RegExp(J+(i+1),M),v[i]+N);
}return w;
},escapeRegexpChars:function(e){return e.replace(/([.*+?^${}()|[\]\/\\])/g,K);
},toArray:function(c){return c.split(/\B|\b/g);
},stripTags:function(q){return q.replace(/<\/?[^>]+>/gi,N);
},stripScripts:function(j,k){var m=N;
var l=j.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){m+=arguments[1]+F;
return N;
});

if(k===true){qx.lang.Function.globalEval(m);
}return l;
}}});
})();
(function(){var i="object",h="Decorator",g="_applyTheme",f="__fE",e="qx.theme.manager.Decoration",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.core.Type.add(h,this.isValidPropertyValue,this);
},properties:{theme:{check:d,nullable:true,apply:g,event:c}},members:{__fE:null,resolve:function(n){if(!n){return null;
}
if(typeof n===i){return n;
}var q=this.getTheme();

if(!q){return null;
}var q=this.getTheme();

if(!q){return null;
}var r=this.__fE;

if(!r){r=this.__fE={};
}var o=r[n];

if(o){return o;
}var p=q.decorations[n];

if(!p){return null;
}var s=p.decorator;

if(s==null){throw new Error("Missing definition of which decorator to use in entry: "+n+"!");
}return r[n]=(new s).set(p.style);
},isValidPropertyValue:function(v){if(typeof v===b){return this.isDynamic(v);
}else if(typeof v===i){var w=v.constructor;
return qx.Class.hasInterface(w,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(t){if(!t){return false;
}var u=this.getTheme();

if(!u){return false;
}return !!u.decorations[t];
},_applyTheme:function(j,k){var m=qx.util.AliasManager.getInstance();

if(k){for(var l in k.aliases){m.remove(l);
}}
if(j){for(var l in j.aliases){m.add(l,j.aliases[l]);
}}
if(!j){this.__fE={};
}}},destruct:function(){this._disposeMap(f);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__fF={};
this.add(a,h);
},members:{__fF:null,_preprocess:function(m){var p=this._getDynamic();

if(p[m]===false){return m;
}else if(p[m]===undefined){if(m.charAt(0)===j||m.charAt(0)===b||m.indexOf(g)===0||m.indexOf(f)===i||m.indexOf(e)===0){p[m]=false;
return m;
}
if(this.__fF[m]){return this.__fF[m];
}var o=m.substring(0,m.indexOf(j));
var n=this.__fF[o];

if(n!==undefined){p[m]=n+m.substring(o.length);
}}return m;
},add:function(r,s){this.__fF[r]=s;
var u=this._getDynamic();
for(var t in u){if(t.substring(0,t.indexOf(j))===r){u[t]=s+t.substring(r.length);
}}},remove:function(q){delete this.__fF[q];
},resolve:function(k){var l=this._getDynamic();

if(k!=null){k=this._preprocess(k);
}return l[k]||k;
}},destruct:function(){this.__fF=null;
}});
})();
(function(){var k="_applyTheme",j="qx.theme.manager.Font",i="Font",h="Theme",g="changeTheme",f="singleton";
qx.Class.define(j,{type:f,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
qx.core.Type.add(i,this.isDynamic,this);
},properties:{theme:{check:h,nullable:true,apply:k,event:g}},members:{resolveDynamic:function(v){var w=this._dynamic;
return v instanceof qx.bom.Font?v:w[v];
},resolve:function(o){var r=this._dynamic;
var p=r[o];

if(p){return p;
}var q=this.getTheme();

if(q!==null&&q.fonts[o]){return r[o]=(new qx.bom.Font).set(q.fonts[o]);
}return o;
},isDynamic:function(l){var n=this._dynamic;

if(l&&(l instanceof qx.bom.Font||n[l]!==undefined)){return true;
}var m=this.getTheme();

if(m!==null&&l&&m.fonts[l]){n[l]=(new qx.bom.Font).set(m.fonts[l]);
return true;
}return false;
},__iE:function(s,t){if(s[t].include){var u=s[s[t].include];
s[t].include=null;
delete s[t].include;
s[t]=qx.lang.Object.mergeWith(s[t],u,false);
this.__iE(s,t);
}},_applyTheme:function(a){var b=this._getDynamic();

for(var e in b){if(b[e].themed){b[e].dispose();
delete b[e];
}}
if(a){var c=a.fonts;
var d=qx.bom.Font;

for(var e in c){if(c[e].include&&c[c[e].include]){this.__iE(c,e);
}b[e]=(new d).set(c[e]);
b[e].themed=true;
}}this._setDynamic(b);
}}});
})();
(function(){var n="",m="underline",k="Boolean",j="px",h='"',g="italic",f="normal",e="bold",d="_applyItalic",c="_applyBold",z="Integer",y="_applyFamily",x="_applyLineHeight",w="Array",v="overline",u="line-through",t="qx.bom.Font",s="Number",r="_applyDecoration",q=" ",o="_applySize",p=",";
qx.Class.define(t,{extend:qx.core.Object,construct:function(E,F){qx.core.Object.call(this);

if(E!==undefined){this.setSize(E);
}
if(F!==undefined){this.setFamily(F);
}},statics:{fromString:function(G){var K=new qx.bom.Font();
var I=G.split(/\s+/);
var name=[];
var J;

for(var i=0;i<I.length;i++){switch(J=I[i]){case e:K.setBold(true);
break;
case g:K.setItalic(true);
break;
case m:K.setDecoration(m);
break;
default:var H=parseInt(J,10);

if(H==J||qx.lang.String.contains(J,j)){K.setSize(H);
}else{name.push(J);
}break;
}}
if(name.length>0){K.setFamily(name);
}return K;
},fromConfig:function(S){var T=new qx.bom.Font;
T.set(S);
return T;
},__iF:{fontFamily:n,fontSize:n,fontWeight:n,fontStyle:n,textDecoration:n,lineHeight:1.2},getDefaultStyles:function(){return this.__iF;
}},properties:{size:{check:z,nullable:true,apply:o},lineHeight:{check:s,nullable:true,apply:x},family:{check:w,nullable:true,apply:y},bold:{check:k,nullable:true,apply:c},italic:{check:k,nullable:true,apply:d},decoration:{check:[m,u,v],nullable:true,apply:r}},members:{__iG:null,__iH:null,__iI:null,__iJ:null,__iK:null,__iL:null,_applySize:function(L,M){this.__iG=L===null?null:L+j;
},_applyLineHeight:function(C,D){this.__iL=C===null?null:C;
},_applyFamily:function(P,Q){var R=n;

for(var i=0,l=P.length;i<l;i++){if(P[i].indexOf(q)>0){R+=h+P[i]+h;
}else{R+=P[i];
}
if(i!==l-1){R+=p;
}}this.__iH=R;
},_applyBold:function(a,b){this.__iI=a===null?null:a?e:f;
},_applyItalic:function(N,O){this.__iJ=N===null?null:N?g:f;
},_applyDecoration:function(A,B){this.__iK=A===null?null:A;
},getStyles:function(){return {fontFamily:this.__iH,fontSize:this.__iG,fontWeight:this.__iI,fontStyle:this.__iJ,textDecoration:this.__iK,lineHeight:this.__iL};
}}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.toLowerCase().indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,HTML5_CLASSLIST:(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),TOUCH:(typeof window.Touch=="object"),__cY:function(){this.QUIRKS_MODE=this.__da();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__da:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__cY();
}});
})();
(function(){var a="qx.lang.Object";
qx.Class.define(a,{statics:{empty:function(C){{};

for(var D in C){if(C.hasOwnProperty(D)){delete C[D];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(H){{};
return H.__count__===0;
}:
function(t){{};

for(var u in t){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(x,y){{};
return x.__count__>=y;
}:
function(E,F){{};

if(F<=0){return true;
}var length=0;

for(var G in E){if((++length)>=F){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,findWinnerKey:function(b,c,d){if(!(c in b)){return d in b?d:null;
}
if(!(d in b)){return c in b?c:null;
}
for(var e in b){if(e==c){return c;
}else if(e==d){return d;
}}return null;
},getValues:function(o){{};
var q=[];
var p=this.getKeys(o);

for(var i=0,l=p.length;i<l;i++){q.push(o[p[i]]);
}return q;
},merge:function(f,g){{};
var k=arguments.length;
var h,j;

for(var i=1;i<k;i++){h=arguments[i];

for(j in h){f[j]=h[j];
}}return f;
},clone:function(L){{};
var M={};

for(var N in L){M[N]=L[N];
}return M;
},invert:function(z){{};
var A={};

for(var B in z){A[z[B].toString()]=B;
}return A;
},getKeyFromValue:function(I,J){{};

for(var K in I){if(I.hasOwnProperty(K)&&I[K]===J){return K;
}}return null;
},contains:function(v,w){{};
return this.getKeyFromValue(v,w)!==null;
},select:function(m,n){{};
return n[m];
},fromArray:function(r){{};
var s={};

for(var i=0,l=r.length;i<l;i++){{};
s[r[i].toString()]=true;
}return s;
}}});
})();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hA={};
this.__hB={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__hC:{},__hA:null,__hB:null,_applyTheme:function(t,u){this.__hB={};
this.__hA={};
},__hD:function(i,j,k){var o=j.appearances;
var r=o[i];

if(!r){var s=b;
var l=[];
var q=i.split(s);
var p;

while(!r&&q.length>0){l.unshift(q.pop());
var m=q.join(s);
r=o[m];

if(r){p=r.alias||r;

if(typeof p===h){var n=p+s+l.join(s);
return this.__hD(n,j,k);
}}}if(k!=null){return this.__hD(k,j);
}return null;
}else if(typeof r===h){return this.__hD(r,j,k);
}else if(r.include&&!r.style){return this.__hD(r.include,j,k);
}return i;
},styleFrom:function(v,w,x,y){if(!x){x=this.getTheme();
}var E=this.__hB;
var z=E[v];

if(!z){z=E[v]=this.__hD(v,x,y);
}var J=x.appearances[z];

if(!J){this.warn("Missing appearance: "+v);
return null;
}if(!J.style){return null;
}var K=z;

if(w){var L=J.$$bits;

if(!L){L=J.$$bits={};
J.$$length=0;
}var C=0;

for(var F in w){if(!w[F]){continue;
}
if(L[F]==null){L[F]=1<<J.$$length++;
}C+=L[F];
}if(C>0){K+=e+C;
}}var D=this.__hA;

if(D[K]!==undefined){return D[K];
}if(!w){w=this.__hC;
}var H;
if(J.include||J.base){var B=J.style(w);
var A;

if(J.include){A=this.styleFrom(J.include,w,x,y);
}H={};
if(J.base){var G=this.styleFrom(z,w,J.base,y);

if(J.include){for(var I in G){if(!A.hasOwnProperty(I)&&!B.hasOwnProperty(I)){H[I]=G[I];
}}}else{for(var I in G){if(!B.hasOwnProperty(I)){H[I]=G[I];
}}}}if(J.include){for(var I in A){if(!B.hasOwnProperty(I)){H[I]=A[I];
}}}for(var I in B){H[I]=B[I];
}}else{H=J.style(w);
}return D[K]=H||null;
}},destruct:function(){this.__hA=this.__hB=null;
}});
})();
(function(){var p="other",o="widgets",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",e="Theme",b="meta",d="borders",c="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,q){if(!q){var q={};
}q.include=this.__rh(q.include);
q.patch=this.__rh(q.patch);
{};
var r={$$type:e,name:name,title:q.title,toString:this.genericToString};
if(q.extend){r.supertheme=q.extend;
}r.basename=qx.Bootstrap.createNamespace(name,r);
this.__rk(r,q);
this.__ri(r,q);
this.$$registry[name]=r;
for(var i=0,a=q.include,l=a.length;i<l;i++){this.include(r,a[i]);
}
for(var i=0,a=q.patch,l=a.length;i<l;i++){this.patch(r,a[i]);
}},__rh:function(F){if(!F){return [];
}
if(qx.Bootstrap.isArray(F)){return F;
}else{return [F];
}},__ri:function(I,J){var M=J.aliases||{};

if(J.extend&&J.extend.aliases){var K=J.extend.aliases;

for(var L in K){if(!(L in M)){M[L]=K[L];
}}}I.aliases=M;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__rj:function(G){for(var i=0,H=this.__rl,l=H.length;i<l;i++){if(G[H[i]]){return H[i];
}}},__rk:function(s,t){var w=this.__rj(t);
if(t.extend&&!w){w=t.extend.type;
}s.type=w||p;
if(!w){return;
}var y=function(){};
if(t.extend){y.prototype=new t.extend.$$clazz;
}var x=y.prototype;
var v=t[w];
for(var u in v){x[u]=v[u];
if(x[u].base){{};
x[u].base=t.extend;
}}s.$$clazz=y;
s[w]=new y;
},$$registry:{},__rl:[g,d,f,n,c,o,m,b],__rm:null,__rn:null,__ro:function(){},patch:function(N,O){var Q=this.__rj(O);

if(Q!==this.__rj(N)){throw new Error("The mixins '"+N.name+"' are not compatible '"+O.name+"'!");
}var P=O[Q];
var R=N.$$clazz.prototype;

for(var S in P){R[S]=P[S];
}},include:function(z,A){var C=A.type;

if(C!==z.type){throw new Error("The mixins '"+z.name+"' are not compatible '"+A.name+"'!");
}var B=A[C];
var D=z.$$clazz.prototype;

for(var E in B){if(D[E]!==undefined){continue;
}D[E]=B[E];
}}}});
})();
(function(){var q="Boolean",p="focusout",o="interval",n="mouseover",m="mouseout",l="mousemove",k="widget",j="qx.ui.tooltip.ToolTip",i="__rs",h="_applyCurrent",d="__rv",g="qx.ui.tooltip.Manager",f="__rt",c="tooltip-error",b="singleton";
qx.Class.define(g,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,n,this.__rC,this,true);
this.__rs=new qx.event.Timer();
this.__rs.addListener(o,this.__rz,this);
this.__rt=new qx.event.Timer();
this.__rt.addListener(o,this.__rA,this);
this.__ru={left:0,top:0};
},properties:{current:{check:j,nullable:true,apply:h},showInvalidToolTips:{check:q,init:true},showToolTips:{check:q,init:true}},members:{__ru:null,__rt:null,__rs:null,__rv:null,__rw:null,__rx:function(){if(!this.__rv){this.__rv=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__rv;
},__ry:function(){if(!this.__rw){this.__rw=new qx.ui.tooltip.ToolTip().set({appearance:c});
this.__rw.syncAppearance();
}return this.__rw;
},_applyCurrent:function(r,s){if(s&&qx.ui.core.Widget.contains(s,r)){return;
}if(s){if(!s.isDisposed()){s.exclude();
}this.__rs.stop();
this.__rt.stop();
}var u=qx.event.Registration;
var t=document.body;
if(r){this.__rs.startWith(r.getShowTimeout());
u.addListener(t,m,this.__rD,this,true);
u.addListener(t,p,this.__rE,this,true);
u.addListener(t,l,this.__rB,this,true);
}else{u.removeListener(t,m,this.__rD,this,true);
u.removeListener(t,p,this.__rE,this,true);
u.removeListener(t,l,this.__rB,this,true);
}},__rz:function(e){var a=this.getCurrent();

if(a&&!a.isDisposed()){this.__rt.startWith(a.getHideTimeout());

if(a.getPlaceMethod()==k){a.placeToWidget(a.getOpener());
}else{a.placeToPoint(this.__ru);
}a.show();
}this.__rs.stop();
},__rA:function(e){var C=this.getCurrent();

if(C&&!C.isDisposed()){C.exclude();
}this.__rt.stop();
this.resetCurrent();
},__rB:function(e){var G=this.__ru;
G.left=e.getDocumentLeft();
G.top=e.getDocumentTop();
},__rC:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!z){return;
}var A,B,y,x;
while(z!=null){A=z.getToolTip();
B=z.getToolTipText()||null;
y=z.getToolTipIcon()||null;

if(qx.Class.hasInterface(z.constructor,qx.ui.form.IForm)&&!z.isValid()){x=z.getInvalidMessage();
}
if(A||B||y||x){break;
}z=z.getLayoutParent();
}if(!z||
!z.getEnabled()||
z.isBlockToolTip()||
(!x&&!this.getShowToolTips())||(x&&!this.getShowInvalidToolTips())){return;
}
if(x){A=this.__ry().set({label:x});
}
if(!A){A=this.__rx().set({label:B,icon:y});
}this.setCurrent(A);
A.setOpener(z);
},__rD:function(e){var D=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!D){return;
}var E=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!E){return;
}var F=this.getCurrent();
if(F&&(E==F||qx.ui.core.Widget.contains(F,E))){return;
}if(E&&D&&qx.ui.core.Widget.contains(D,E)){return;
}if(F&&!E){this.setCurrent(null);
}else{this.resetCurrent();
}},__rE:function(e){var v=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!v){return;
}var w=this.getCurrent();
if(w&&w==v.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,n,this.__rC,this,true);
this._disposeObjects(i,f,d);
this.__ru=null;
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setEnabled(false);

if(i!=null){this.setInterval(i);
}var self=this;
this.__gI=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(p,q,r){var s=new qx.event.Timer(r);
s.__gJ=p;
s.addListener(h,function(e){s.stop();
p.call(q,e);
s.dispose();
q=null;
},q);
s.start();
return s;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__gK:null,__gI:null,_applyInterval:function(l,m){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(j,k){if(k){window.clearInterval(this.__gK);
this.__gK=null;
}else if(j){this.__gK=window.setInterval(this.__gI,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(o){this.setInterval(o);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(n){this.stop();
this.startWith(n);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__gK){window.clearInterval(this.__gK);
}this.__gK=this.__gI=null;
}});
})();
(function(){var a="qx.ui.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(m){return this._indexOf(m);
},add:function(n,o){this._add(n,o);
},addAt:function(j,k,l){this._addAt(j,k,l);
},addBefore:function(b,c,d){this._addBefore(b,c,d);
},addAfter:function(e,f,g){this._addAfter(e,f,g);
},remove:function(i){this._remove(i);
},removeAt:function(p){return this._removeAt(p);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(h){h.getChildren=h._getChildren;
h.hasChildren=h._hasChildren;
h.indexOf=h._indexOf;
h.add=h._add;
h.addAt=h._addAt;
h.addBefore=h._addBefore;
h.addAfter=h._addAfter;
h.remove=h._remove;
h.removeAt=h._removeAt;
h.removeAll=h._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var c="qx.core.property.Group",b="set",a="reset";
qx.Bootstrap.define(c,{statics:{expandShortHand:function(l){var m=qx.lang.Array;
var n=l instanceof Array?m.clone(l):m.fromArguments(l);
switch(n.length){case 1:n[1]=n[2]=n[3]=n[0];
break;
case 2:n[2]=n[0];
case 3:n[3]=n[1];
}return n;
},add:function(d,name,e){var k=qx.Bootstrap.firstUp(name);
var g=d.prototype;
var h=d.$$propertyGroups;

if(!h){h=d.$$propertyGroups={};
}d.$$propertyGroups[name]=e;
var f=e.shorthand;
var j=e.group;
var length=j.length;
var self=this;
g[b+k]=function(o){var q=o instanceof Array?o:arguments;

if(f){q=self.expandShortHand(q);
}var p={};

for(var i=0;i<length;i++){p[j[i]]=q[i];
}this.set(p);
};
g[a+k]=function(){for(var i=0;i<length;i++){this.reset(j[i]);
}};
}}});
})();
(function(){var p="set",o="get",n="resetRuntime",m="Boolean",k="getThemedValue",j="$$data",h="qx.core.property.Multi",g="getInheritedValue",f="init",e="setRuntime",b="$$init-",d="toggle",c="reset",a="is";
(function(){var I=0;
var J={};
var L={4:{},3:{},2:{get:k},1:{get:g}};
var N={inherited:1,theme:2,user:3,override:4};
var K=b;
var M=j;
var D;
var H=qx.Bootstrap;
var G=qx.core.Type;
var C=qx.core.property.Util;
var E=qx.core.ValidationError;
var F=function(R,S,T,U){if(!R._getChildren){return;
}var bi=R._getChildren();
var length=bi.length;

if(!length){return;
}var bh=N.inherited;
var Y=U.name,bg=U.apply,ba=U.event;
var bj=J[Y];
var bd=K+Y;
var bf,V,X,bb,W,be;
var bc=qx.core.property.Util;

for(var i=0,l=bi.length;i<l;i++){bf=bi[i];
if(!bc.getPropertyDefinition(bf.constructor,Y)){continue;
}V=bf[M];

if(!V){V=bf[M]={};
}X=V[bj];

if(X!==D&&X>bh){continue;
}if(X===bh){bb=T;
}else if(X!==D){W=L[X].get;

if(W){bb=bf[W](Y);
}else{bb=bf[bj+X];
}}else{bb=bf[bd];
}be=S;

if(be===D){be=bf[bd];
V[bj]=D;
}else{V[bj]=bh;
}if(be!==bb){if(bg){bf[bg](be,bb,Y);
}if(ba){bf.fireDataEvent(ba,be,bb);
}F(bf,be,bb,U);
}}};
qx.Bootstrap.define(h,{statics:{add:function(ck,name,cl){I++;
var cw=J[name];

if(!cw){cw=J[name]=qx.core.property.Core.ID;
qx.core.property.Core.ID+=5;
}var cs=ck.prototype;

if(cl.init!==D){var cr=K+name;
cs[cr]=cl.init;
}var cp=H.$$firstUp[name]||H.firstUp(name);
var cm=cl.nullable,co=cl.event,cu=cl.apply,cv=cl.validate,ct=cl.inheritable;
var cx=function(bB){return function(w){var A=this;
{};

if(cv){G.check(w,cv,A,E);
}var y=A[M];

if(!y){y=A[M]={};
}else{var x=y[cw];

if(x!==D){var B=L[x].get;

if(B){var z=A[B](name);
}else{var z=y[cw+x];
}}}y[cw+bB]=w;
if(x===D||x<=bB){if(x!==bB){y[cw]=bB;
}if(z===D&&cr){z=A[cr];
}if(w!==z){if(cu){A[cu](w,z,cl.name);
}if(co){A.fireDataEvent(co,w,z);
}if(ct){F(A,w,z,cl);
}}}return w;
};
};
var cn=function(v){return function(bX){var bY=this;
{};
var ce=bY[M];
var cb=ce[cw];

if(cb===v){var cd=ce[cw+cb];
var cf,ca;

for(var cc=v-1;cc>0;cc--){ca=L[cc].get;

if(ca){cf=bY[ca]?bY[ca](name):D;
}else{cf=ce[cw+cc];
}
if(cf!==D){break;
}}if(cf===D){cc=D;
if(cr){cf=bY[cr];
}else{}}ce[cw]=cc;
}ce[cw+v]=D;
if(cb===v&&cd!==cf){if(cu){bY[cu](cf,cd,cl.name);
}if(co){bY.fireDataEvent(co,cf,cd);
}if(ct){F(bY,cf,cd,cl);
}}};
};
var cq=function(){var bW=this;
{};
var bU=bW[M];
var bS=bU&&bU[cw];

if(bS===D){if(cr){return bW[cr];
}if(cm){return null;
}{};
return;
}var bT=L[bS].get;

if(bT){var bV;
{return bW[bT](name);
};
}else{return bU[cw+bS];
}};
cs[o+cp]=cq;
if(cr){cs[f+cp]=function(){var Q=this;
var P=Q[M];

if(P){var O=P[cw];

if(O!==D){return;
}}if(cu){Q[cu](Q[cr],D,cl.name);
}if(co){Q.fireDataEvent(co,Q[cr],D);
}if(ct){F(Q,Q[cr],D,cl);
}};
}cs[p+cp]=cx(3);
cs[c+cp]=cn(3);

if(this.RUNTIME_OVERRIDE){cs[e+cp]=cx(4);
cs[n+cp]=cn(4);
}if(cl.check===m){cs[d+cp]=function(){this[p+cp](!this[o+cp]());
};
cs[a+cp]=cq;
}},getSingleValue:function(cg,ch,ci){var cj=J[ch]+N[ci];
{};
return cg[M][cj];
},importData:function(bC,bD,bE,bF){var bP=bC[M];

if(!bP){bP=bC[M]={};
}var bI=N[bF];
var bK,bR,bQ,bO,bM,bN;
for(bK in bD){bR=J[bK];
bM=bP[bR];

if(bM>bI){continue;
}bQ=bD[bK];
if(bM===D&&bQ===D){continue;
}if(bM!=null){if(bE&&bM==bI){bO=bE[bK];
}else{var bL=L[bM].get;

if(bL){bO=bC[bL]?bC[bL](bK):D;
}else{bO=bP[bR+bM];
}}}else{bO=D;
}if(bO===bQ){continue;
}if(bQ===D){var bQ,bG;

for(var bH=bI-1;bH>0;bH--){bG=L[bH].get;

if(bG){bQ=bC[bG]?bC[bG](bK):D;
}else{bQ=bP[bR+bH];
}
if(bQ!==D){break;
}}if(bQ===D){var bJ;
bH=D;
bN=K+bK;

if(bN){bQ=bC[bN];
}else{}}bP[bR]=bH;
}else if(bM!=bI){bP[bR]=bI;
}if(bQ!==bO){var bJ=C.getPropertyDefinition(bC.constructor,bK);
if(bJ.apply){bC[bJ.apply](bQ,bO,bJ.name);
}if(bJ.event){bC.fireDataEvent(bJ.event,bQ,bO);
}if(bJ.inheritable){F(bC,bQ,bO,bJ);
}}}},getInheritableProperties:function(q){var t=q.$$inheritables;

if(t){{};
return t;
}t=q.$$inheritables={};
var u=q.$$properties;

if(u){for(var name in u){if(u[name].inheritable){t[name]=u[name];
}}}var r=q.superclass;

if(r&&r!==Object){var s=r.$$inheritables||this.getInheritableProperties(r);

for(var name in s){t[name]=s[name];
}}return t;
},moveObject:function(bk,bl,bm){if(bl==bm){return;
}var bx,br,bz,bp,bA,bv,bt,by,bo,bu,bw,bn,bq,bs;
bx=N.inherited;
by=bk[M];

if(!by){by=bk[M]={};
}bn=bl?bl[M]:D;
br=bk.constructor;
bz=br.$$inheritables||this.getInheritableProperties(br);

for(bp in bz){bA=J[bp];
bt=K+bp;
bo=by?by[bA]:D;

if(bo===D){bu=bk[bt];
}else if(bo==bx){bu=bm.get(bp);
}else{continue;
}bw=D;

if(bl){bq=bn?bn[bA]:D;

if(bq===D){bw=bl[bt];
}else{bs=L[bq].get;

if(bs){bw=bl[bs]?bl[bs](bp):D;
}else{bw=bn[bA+bq];
}
if(bw===D){bw=bl[bt];
}}}if(bw===D){bw=bk[bt];

if(by[bA]!==D){by[bA]=D;
}}else{by[bA]=bx;
}if(bw!==bu){bv=bz[bp];
if(bv.apply){bk[bv.apply](bw,bu,bp);
}if(bv.event){bk.fireDataEvent(bv.event,bw,bu);
}F(bk,bw,bu,bv);
}}}}});
})();
})();
(function(){var q="Integer",p="_applyDimension",o="Boolean",n="_applyStretching",m="_applyMargin",l="_applyAlign",k="allowShrinkY",j="bottom",i="baseline",h="marginBottom",D="qx.ui.core.LayoutItem",C="center",B="marginTop",A="allowGrowX",z="middle",y="marginLeft",x="allowShrinkX",w="top",v="right",u="marginRight",s="abstract",t="allowGrowY",r="left";
qx.Class.define(D,{type:s,extend:qx.core.Object,properties:{minWidth:{check:q,nullable:true,apply:p,init:null,themeable:true},width:{check:q,nullable:true,apply:p,init:null,themeable:true},maxWidth:{check:q,nullable:true,apply:p,init:null,themeable:true},minHeight:{check:q,nullable:true,apply:p,init:null,themeable:true},height:{check:q,nullable:true,apply:p,init:null,themeable:true},maxHeight:{check:q,nullable:true,apply:p,init:null,themeable:true},allowGrowX:{check:o,apply:n,init:true,themeable:true},allowShrinkX:{check:o,apply:n,init:true,themeable:true},allowGrowY:{check:o,apply:n,init:true,themeable:true},allowShrinkY:{check:o,apply:n,init:true,themeable:true},allowStretchX:{group:[A,x],shorthand:true,themeable:true},allowStretchY:{group:[t,k],shorthand:true,themeable:true},marginTop:{check:q,init:0,apply:m,themeable:true},marginRight:{check:q,init:0,apply:m,themeable:true},marginBottom:{check:q,init:0,apply:m,themeable:true},marginLeft:{check:q,init:0,apply:m,themeable:true},margin:{group:[B,u,h,y],shorthand:true,themeable:true},alignX:{check:[r,C,v],nullable:true,apply:l,themeable:true},alignY:{check:[w,z,j,i],nullable:true,apply:l,themeable:true}},members:{__et:null,__eu:null,__ev:null,__ew:null,__ex:null,__ey:null,__ez:null,getBounds:function(){return this.__ey||this.__eu||null;
},clearSeparators:function(){},renderSeparator:function(bb,bc){},renderLayout:function(a,top,b,c){var d;
{};
var e=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var e=this._getHeightForWidth(b);
}
if(e!=null&&e!==this.__et){this.__et=e;
qx.ui.core.queue.Layout.add(this);
return null;
}var g=this.__eu;

if(!g){g=this.__eu={};
}var f={};

if(a!==g.left||top!==g.top){f.position=true;
g.left=a;
g.top=top;
}
if(b!==g.width||c!==g.height){f.size=true;
g.width=b;
g.height=c;
}if(this.__ev){f.local=true;
delete this.__ev;
}
if(this.__ex){f.margin=true;
delete this.__ex;
}return f;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__ev;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__ev=true;
this.__ew=null;
},getSizeHint:function(W){var X=this.__ew;

if(X){return X;
}
if(W===false){return null;
}X=this.__ew=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__et&&this.getHeight()==null){X.height=this.__et;
}if(X.minWidth>X.width){X.width=X.minWidth;
}
if(X.maxWidth<X.width){X.width=X.maxWidth;
}
if(!this.getAllowGrowX()){X.maxWidth=X.width;
}
if(!this.getAllowShrinkX()){X.minWidth=X.width;
}if(X.minHeight>X.height){X.height=X.minHeight;
}
if(X.maxHeight<X.height){X.height=X.maxHeight;
}
if(!this.getAllowGrowY()){X.maxHeight=X.height;
}
if(!this.getAllowShrinkY()){X.minHeight=X.height;
}return X;
},_computeSizeHint:function(){var R=this.getMinWidth()||0;
var O=this.getMinHeight()||0;
var S=this.getWidth()||R;
var Q=this.getHeight()||O;
var N=this.getMaxWidth()||Infinity;
var P=this.getMaxHeight()||Infinity;
return {minWidth:R,width:S,maxWidth:N,minHeight:O,height:Q,maxHeight:P};
},_hasHeightForWidth:function(){var H=this._getLayout();

if(H){return H.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(Y){var ba=this._getLayout();

if(ba&&ba.hasHeightForWidth()){return ba.getHeightForWidth(Y);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__ex=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__ey;
},setUserBounds:function(K,top,L,M){this.__ey={left:K,top:top,width:L,height:M};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__ey;
qx.ui.core.queue.Layout.add(this);
},__eA:{},setLayoutProperties:function(E){if(E==null){return;
}var F=this.__ez;

if(!F){F=this.__ez={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(E);
}for(var G in E){if(E[G]==null){delete F[G];
}else{F[G]=E[G];
}}},getLayoutProperties:function(){return this.__ez||this.__eA;
},clearLayoutProperties:function(){delete this.__ez;
},updateLayoutProperties:function(T){var U=this._getLayout();

if(U){var V;
{};
U.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},getLayoutParent:function(){return this.$$parent||null;
},_getParent:function(){return this.$$parent||null;
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}this.$$parent=parent||null;
qx.ui.core.queue.Visibility.add(this);
},isRootWidget:function(){return false;
},_getRoot:function(){var parent=this;

while(parent){if(parent.isRootWidget()){return parent;
}parent=parent.$$parent;
}return null;
},clone:function(){var I=qx.core.Object.prototype.clone.call(this);
var J=this.__ez;

if(J){I.__ez=qx.lang.Object.clone(J);
}return I;
}},destruct:function(){this.$$parent=this.$$subparent=this.__ez=this.__eu=this.__ey=this.__ew=null;
}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var d="qx.ui.core.DecoratorFactory",c="$$nopool$$";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__eB={};
},statics:{MAX_SIZE:15,__eC:c},members:{__eB:null,getDecoratorElement:function(h){var m=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(h)){var k=h;
var j=qx.theme.manager.Decoration.getInstance().resolve(h);
}else{var k=m.__eC;
j=h;
}var l=this.__eB;

if(l[k]&&l[k].length>0){var i=l[k].pop();
}else{var i=this._createDecoratorElement(j,k);
}i.$$pooled=false;
return i;
},poolDecorator:function(n){if(!n||n.$$pooled||n.isDisposed()){return;
}var q=qx.ui.core.DecoratorFactory;
var o=n.getId();

if(o==q.__eC){n.dispose();
return;
}var p=this.__eB;

if(!p[o]){p[o]=[];
}
if(p[o].length>q.MAX_SIZE){n.dispose();
}else{n.$$pooled=true;
p[o].push(n);
}},_createDecoratorElement:function(e,f){var g=new qx.html.Decorator(e,f);
{};
return g;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var b=this.__eB;

for(var a in b){qx.util.DisposeUtil.disposeArray(b,a);
}}this.__eB=null;
}});
})();
(function(){var fg="px",ff="visible",fe="Boolean",fd="qx.event.type.Mouse",fc="qx.event.type.Drag",fb="on",fa="qx.event.type.Focus",eY="excluded",eX="Integer",eW="hidden",ew="_applyPadding",ev="qx.event.type.Event",eu="opacity",et="contextmenu",es="String",er="tabIndex",eq="qx.event.type.Touch",ep="qx.event.type.Data",eo="focused",en="changeVisibility",fn="mshtml",fo="qx.event.type.KeySequence",fl="qx.client",fm=".",fj="absolute",fk="backgroundColor",fh="drag",fi="div",fp="disabled",fq="move",eP="dragstart",eO="qx.dynlocale",eR="dragchange",eQ="dragend",eT="transitionEnd",eS="resize",eV="Decorator",eU="zIndex",eN="default",eM="Color",dc="",dd="changeToolTipText",de="appear",df="beforeContextmenuOpen",dg="__eK",dh="qx.ui.core.Transform",di="_applyNativeContextMenu",dj="_applyBackgroundColor",dk="_applyFocusable",dl="changeShadow",fu="__eD",ft="qx.event.type.KeyInput",fs="createChildControl",fr="__eJ",fy="_applyTransform",fx="Font",fw="theme",fv="_applyShadow",fA="_applyEnabled",fz="_applySelectable",dL="Number",dM="_applyKeepActive",dJ="transition",dK="transform",dP="_applyVisibility",dQ="_applyTransparentVisibility",dN="__eI",dO="repeat",dH="qxDraggable",dI="__eR",du="paddingLeft",dt="_applyDroppable",dw="_applyTransition",dv="#",dq="cursor",dp="qx.event.type.MouseWheel",ds="_applyCursor",dr="_applyDraggable",dn="changeTextColor",dm="$$widget",dV="changeContextMenu",dW="paddingTop",dX="changeSelectable",dY="hideFocus",dR="none",dS="outline",dT="_applyAppearance",dU="hovered",ea="_applyOpacity",eb="url(",dE=")",dD="qx.ui.core.Widget",dC="__eP",dB="_applyFont",dA="qx.ui.core.ITransition",dz="qxDroppable",dy="changeZIndex",dx="changeTransition",dG="changeEnabled",dF="__eN",ec="changeFont",ed="_applyDecorator",ee="_applyZIndex",ef="_applyTextColor",eg="qx.ui.menu.Menu",eh="changeDecorator",ei="_applyToolTipText",ej="true",ek="widget",em="_applyTabIndex",eA="changeAppearance",ez="/",ey="_applyContextMenu",ex="paddingBottom",eE="changeNativeContextMenu",eD="qx.ui.tooltip.ToolTip",eC="qxKeepActive",eB="_applyKeepFocus",eG="__eE",eF="paddingRight",eK="changeBackgroundColor",eL="changeLocale",eI="qxKeepFocus",eJ="changeTransform",eH="qx/static/blank.gif";
qx.Class.define(dD,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation,qx.data.MBinding],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__eD=this._createContainerElement();
this.__eE=this.__eQ();
this.__eD.add(this.__eE);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:ev,disappear:ev,createChildControl:ep,resize:ep,move:ep,mousemove:fd,mouseover:fd,mouseout:fd,mousedown:fd,mouseup:fd,click:fd,dblclick:fd,contextmenu:fd,beforeContextmenuOpen:fd,mousewheel:dp,touchstart:eq,touchend:eq,touchmove:eq,touchcancel:eq,keyup:fo,keydown:fo,keypress:fo,keyinput:ft,focus:fa,blur:fa,focusin:fa,focusout:fa,activate:fa,deactivate:fa,capture:ev,losecapture:ev,drop:fc,dragleave:fc,dragover:fc,drag:fc,dragstart:fc,dragend:fc,dragchange:fc,droprequest:fc},properties:{paddingTop:{check:eX,init:0,apply:ew,themeable:true},paddingRight:{check:eX,init:0,apply:ew,themeable:true},paddingBottom:{check:eX,init:0,apply:ew,themeable:true},paddingLeft:{check:eX,init:0,apply:ew,themeable:true},padding:{group:[dW,eF,ex,du],shorthand:true,themeable:true},transition:{check:dA,nullable:true,event:dx,apply:dw},transform:{check:dh,nullable:true,event:eJ,apply:fy},zIndex:{nullable:true,init:null,apply:ee,event:dy,check:eX,themeable:true},decorator:{nullable:true,init:null,apply:ed,event:eh,check:eV,themeable:true},shadow:{nullable:true,init:null,apply:fv,event:dl,check:eV,themeable:true},backgroundColor:{nullable:true,check:eM,apply:dj,event:eK,themeable:true},textColor:{nullable:true,check:eM,apply:ef,event:dn,themeable:true,inheritable:true},font:{nullable:true,apply:dB,check:fx,event:ec,themeable:true,inheritable:true},opacity:{check:dL,apply:ea,themeable:true,nullable:true,init:null},cursor:{check:es,apply:ds,themeable:true,inheritable:true,nullable:true},toolTip:{check:eD,nullable:true},toolTipText:{check:es,nullable:true,event:dd,apply:ei},toolTipIcon:{check:es,nullable:true,event:dd},blockToolTip:{check:fe,init:false},visibility:{check:[ff,eW,eY],init:ff,apply:dP,event:en},transparentVisibility:{check:[ff,eW,eY],init:ff,apply:dQ},enabled:{check:fe,inheritable:true,apply:fA,event:dG,init:true},anonymous:{init:false,check:fe},tabIndex:{check:eX,nullable:true,apply:em},focusable:{check:fe,init:false,apply:dk},keepFocus:{check:fe,init:false,apply:eB},keepActive:{check:fe,init:false,apply:dM},draggable:{check:fe,init:false,apply:dr},droppable:{check:fe,init:false,apply:dt},selectable:{check:fe,init:false,event:dX,apply:fz},contextMenu:{check:eg,apply:ey,nullable:true,event:dV},nativeContextMenu:{check:fe,init:false,themeable:true,event:eE,apply:di},appearance:{check:es,init:ek,apply:dT,event:eA}},statics:{__eF:{},DEBUG:false,getWidgetByElement:function(bc,bd){while(bc){var be=bc.$$widget;
if(be!=null){var bf=qx.core.ObjectRegistry.fromHashCode(be);
if(!bd||!bf.getAnonymous()){return bf;
}}try{bc=bc.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,gP){while(gP){if(parent==gP){return true;
}gP=gP.getLayoutParent();
}return false;
},__eG:new qx.ui.core.DecoratorFactory(),__eH:new qx.ui.core.DecoratorFactory()},members:{__eD:null,__eE:null,__eI:null,__eJ:null,__eK:null,__eL:null,__eM:null,__eN:null,_getLayout:function(){return this.__eN;
},_setLayout:function(bt){{};

if(this.__eN){this.__eN.connectToWidget(null);
}
if(bt){bt.connectToWidget(this);
}this.__eN=bt;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var gx=this.getContainerElement();
var gw=this.$$parent;
qx.core.property.Multi.moveObject(this,parent,gw);

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(gx);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(gx);
}qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__eO:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var J=qx.theme.manager.Decoration.getInstance();
var L=J.resolve(a).getInsets();
var K=J.resolve(b).getInsets();

if(L.top!=K.top||L.right!=K.right||L.bottom!=K.bottom||L.left!=K.left){return true;
}return false;
},renderLayout:function(v,top,w,x){var G=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,v,top,w,x);
if(!G){return;
}var z=this.getContainerElement();
var content=this.getContentElement();
var D=G.size||this._updateInsets;
var H=fg;
var E={};
if(G.position){E.left=v+H;
E.top=top+H;
}if(G.size){E.width=w+H;
E.height=x+H;
}
if(G.position||G.size){z.setStyles(E);
}
if(D||G.local||G.margin){var y=this.getInsets();
var innerWidth=w-y.left-y.right;
var innerHeight=x-y.top-y.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var B={};

if(this._updateInsets){B.left=y.left+H;
B.top=y.top+H;
}
if(D){B.width=innerWidth+H;
B.height=innerHeight+H;
}
if(D||this._updateInsets){content.setStyles(B);
}
if(G.size){var F=this.__eK;

if(F){F.setStyles({width:w+fg,height:x+fg});
}}
if(G.size||this._updateInsets){if(this.__eI){this.__eI.resize(w,x);
}}
if(G.size){if(this.__eJ){var y=this.__eJ.getInsets();
var C=w+y.left+y.right;
var A=x+y.top+y.bottom;
this.__eJ.resize(C,A);
}}
if(D||G.local||G.margin){if(this.__eN&&this.hasLayoutChildren()){this.__eN.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(G.position&&this.hasListener(fq)){this.fireDataEvent(fq,this.getBounds());
}
if(G.size&&this.hasListener(eS)){this.fireDataEvent(eS,this.getBounds());
}delete this._updateInsets;
return G;
},__eP:null,clearSeparators:function(){var d=this.__eP;

if(!d){return;
}var f=qx.ui.core.Widget.__eG;
var content=this.getContentElement();
var c;

for(var i=0,l=d.length;i<l;i++){c=d[i];
f.poolDecorator(c);
content.remove(c);
}d.length=0;
},renderSeparator:function(cS,cT){var cU=qx.ui.core.Widget.__eG.getDecoratorElement(cS);
this.getContentElement().add(cU);
cU.resize(cT.width,cT.height);
cU.setStyles({left:cT.left+fg,top:cT.top+fg});
if(!this.__eP){this.__eP=[cU];
}else{this.__eP.push(cU);
}},_computeSizeHint:function(){var gl=this.getWidth();
var gk=this.getMinWidth();
var gg=this.getMaxWidth();
var gj=this.getHeight();
var gh=this.getMinHeight();
var gi=this.getMaxHeight();
{};
var gm=this._getContentHint();
var gf=this.getInsets();
var go=gf.left+gf.right;
var gn=gf.top+gf.bottom;

if(gl==null){gl=gm.width+go;
}
if(gj==null){gj=gm.height+gn;
}
if(gk==null){gk=go;

if(gm.minWidth!=null){gk+=gm.minWidth;
}}
if(gh==null){gh=gn;

if(gm.minHeight!=null){gh+=gm.minHeight;
}}
if(gg==null){if(gm.maxWidth==null){gg=Infinity;
}else{gg=gm.maxWidth+go;
}}
if(gi==null){if(gm.maxHeight==null){gi=Infinity;
}else{gi=gm.maxHeight+gn;
}}return {width:gl,minWidth:gk,maxWidth:gg,height:gj,minHeight:gh,maxHeight:gi};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__eN){this.__eN.invalidateLayoutCache();
}},_getContentHint:function(){var cx=this.__eN;

if(cx){if(this.hasLayoutChildren()){var cw;
var cy=cx.getSizeHint();
{};
return cy;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(cc){var cg=this.getInsets();
var cj=cg.left+cg.right;
var ci=cg.top+cg.bottom;
var ch=cc-cj;
var ce=this._getLayout();

if(ce&&ce.hasHeightForWidth()){var cd=ce.getHeightForWidth(cc);
}else{cd=this._getContentHeightForWidth(ch);
}var cf=cd+ci;
return cf;
},_getContentHeightForWidth:function(hn){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var cW=this.getPaddingRight();
var cY=this.getPaddingBottom();
var cX=this.getPaddingLeft();

if(this.__eI){var cV=this.__eI.getInsets();
{};
top+=cV.top;
cW+=cV.right;
cY+=cV.bottom;
cX+=cV.left;
}return {"top":top,"right":cW,"bottom":cY,"left":cX};
},getInnerSize:function(){var hf=this.getBounds();

if(!hf){return null;
}var he=this.getInsets();
return {width:hf.width-he.left-he.right,height:hf.height-he.top-he.bottom};
},show:function(){this.setVisibility(ff);
},hide:function(){this.setVisibility(eW);
},exclude:function(){this.setVisibility(eY);
},isVisible:function(){return this.getVisibility()===ff;
},isHidden:function(){return this.getVisibility()!==ff;
},isExcluded:function(){return this.getVisibility()===eY;
},isSeeable:function(){var bX=this.getContainerElement().getDomElement();

if(bX){return bX.offsetWidth>0;
}var bW=this;

do{if(!bW.isVisible()){return false;
}
if(bW.isRootWidget()){return true;
}bW=bW.getLayoutParent();
}while(bW);
return false;
},_createContainerElement:function(){var ca={"$$widget":this.toHashCode()};
{};
var bY={zIndex:0,position:fj};
return new qx.html.Element(fi,bY,ca);
},__eQ:function(){var cb=this._createContentElement();
{};
cb.setStyles({"position":fj,"zIndex":10});
return cb;
},_createContentElement:function(){return new qx.html.Element(fi,{overflowX:eW,overflowY:eW});
},getContainerElement:function(){return this.__eD;
},getContentElement:function(){return this.__eE;
},getDecoratorElement:function(){return this.__eI||null;
},getShadowElement:function(){return this.__eJ||null;
},__eR:null,getLayoutChildren:function(){var cA=this.__eR;

if(!cA){return this.__eS;
}var cB;

for(var i=0,l=cA.length;i<l;i++){var cz=cA[i];

if(cz.hasUserBounds()||cz.isExcluded()){if(cB==null){cB=cA.concat();
}qx.lang.Array.remove(cB,cz);
}}return cB||cA;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var gO=this.__eN;

if(gO){gO.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var bI=this.__eR;

if(!bI){return false;
}var bJ;

for(var i=0,l=bI.length;i<l;i++){bJ=bI[i];

if(!bJ.hasUserBounds()&&!bJ.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__eS:[],_getChildren:function(){return this.__eR||this.__eS;
},_indexOf:function(bu){var bv=this.__eR;

if(!bv){return -1;
}return bv.indexOf(bu);
},_hasChildren:function(){var hr=this.__eR;
return hr!=null&&(!!hr[0]);
},addChildrenToQueue:function(S){var T=this.__eR;

if(!T){return;
}var U;

for(var i=0,l=T.length;i<l;i++){U=T[i];
S[U.$$hash]=U;
U.addChildrenToQueue(S);
}},_add:function(hu,hv){if(hu.getLayoutParent()==this){qx.lang.Array.remove(this.__eR,hu);
}
if(this.__eR){this.__eR.push(hu);
}else{this.__eR=[hu];
}this.__eT(hu,hv);
},_addAt:function(gr,gs,gt){if(!this.__eR){this.__eR=[];
}if(gr.getLayoutParent()==this){qx.lang.Array.remove(this.__eR,gr);
}var gu=this.__eR[gs];

if(gu===gr){return gr.setLayoutProperties(gt);
}
if(gu){qx.lang.Array.insertBefore(this.__eR,gr,gu);
}else{this.__eR.push(gr);
}this.__eT(gr,gt);
},_addBefore:function(bi,bj,bk){{};

if(bi==bj){return;
}
if(!this.__eR){this.__eR=[];
}if(bi.getLayoutParent()==this){qx.lang.Array.remove(this.__eR,bi);
}qx.lang.Array.insertBefore(this.__eR,bi,bj);
this.__eT(bi,bk);
},_addAfter:function(fD,fE,fF){{};

if(fD==fE){return;
}
if(!this.__eR){this.__eR=[];
}if(fD.getLayoutParent()==this){qx.lang.Array.remove(this.__eR,fD);
}qx.lang.Array.insertAfter(this.__eR,fD,fE);
this.__eT(fD,fF);
},_remove:function(V){if(!this.__eR){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__eR,V);
this.__eU(V);
},_removeAt:function(hl){if(!this.__eR){throw new Error("This widget has no children!");
}var hm=this.__eR[hl];
qx.lang.Array.removeAt(this.__eR,hl);
this.__eU(hm);
return hm;
},_removeAll:function(){if(!this.__eR){return;
}var fJ=this.__eR.concat();
this.__eR.length=0;

for(var i=fJ.length-1;i>=0;i--){this.__eU(fJ[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__eT:function(bP,bQ){{};
var parent=bP.getLayoutParent();

if(parent&&parent!=this){parent._remove(bP);
}bP.setLayoutParent(this);
if(bQ){bP.setLayoutProperties(bQ);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(bP);
}},__eU:function(gq){{};

if(gq.getLayoutParent()!==this){throw new Error("Remove Error: "+gq+" is not a child of this widget!");
}gq.setLayoutParent(null);
if(this.__eN){this.__eN.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(gq);
}},capture:function(gY){this.getContainerElement().capture(gY);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(bE,bF,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__eK){return;
}var M=this.__eK=new qx.html.Element;
{};
M.setStyles({position:fj,top:0,left:0,zIndex:7});
var N=this.getBounds();

if(N){this.__eK.setStyles({width:N.width+fg,height:N.height+fg});
}if(qx.core.Variant.isSet(fl,fn)){M.setStyles({backgroundImage:eb+qx.util.ResourceManager.getInstance().toUri(eH)+dE,backgroundRepeat:dO});
}this.getContainerElement().add(M);
},_applyDecorator:function(hx,hy){{};
var hB=qx.ui.core.Widget.__eG;
var hz=this.getContainerElement();
if(!this.__eK&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(hy){hz.remove(this.__eI);
hB.poolDecorator(this.__eI);
}if(hx){var hA=this.__eI=hB.getDecoratorElement(hx);
hA.setStyle(eU,5);
hz.add(hA);
}else{delete this.__eI;
}this._applyBackgroundColor(this.getBackgroundColor());
this._applyOpacity(this.getOpacity());
if(this.__eO(hy,hx)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(hx){var hC=this.getBounds();

if(hC){hA.resize(hC.width,hC.height);
this.__eK&&
this.__eK.setStyles({width:hC.width+fg,height:hC.height+fg});
}}},_applyShadow:function(cm,cn){var cu=qx.ui.core.Widget.__eH;
var cp=this.getContainerElement();
if(cn){cp.remove(this.__eJ);
cu.poolDecorator(this.__eJ);
}if(cm){var cr=this.__eJ=cu.getDecoratorElement(cm);
cp.add(cr);
var ct=cr.getInsets();
cr.setStyles({left:(-ct.left)+fg,top:(-ct.top)+fg});
var cs=this.getBounds();

if(cs){var cq=cs.width+ct.left+ct.right;
var co=cs.height+ct.top+ct.bottom;
cr.resize(cq,co);
}cr.tint(null);
}else{delete this.__eJ;
}},_applyToolTipText:function(hF,hG){if(qx.core.Variant.isSet(eO,fb)){if(this.__eM){return;
}var hH=qx.locale.Manager.getInstance();
this.__eM=hH.addListener(eL,function(){if(hF&&hF.translate){this.setToolTipText(hF.translate());
}},this);
}},_applyTextColor:function(hg,hh){},_applyTransition:function(hi,hj){var hk=hj&&hj.controlsOpacity();

if(this.getTransparentVisibility()!=ff){if(hi){if(!hk&&hi.controlsOpacity()){this.addListener(eT,this.__ut);
this.addListener(de,this.__uu);
}}else if(hk){this.removeListener(eT,this.__onTransitionEndOpacityHelper);
this.removeListener(de,this.__uu);
}}
if(hi){hi=hi.getStyle();
}this.getContainerElement().setStyle(dJ,hi);
},__ut:function(e){if(e.getProperty()!=eu){return;
}
if(this.getOpacity()==0){this.setVisibility(this.getTransparentVisibility());
}},__uu:function(e){if(this.getOpacity()!=0&&this.getTransparentVisibility()!=ff){this._applyOpacity(this.getOpacity());
}},_applyTransparentVisibility:function(bB,bC){},_applyOpacity:function(ho,hp){if(hp==0&&this.getTransparentVisibility()!=ff&&!this.isVisible()){this.show();
return;
}this.getContainerElement().setStyle(eu,ho==1?null:ho);

if(qx.core.Variant.isSet(fl,fn)){if(this.__eI){this.__eI.setStyle(eu,ho==1?null:ho);
}if(qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var hq=(ho==1||ho==null)?null:0.99;
this.getContentElement().setStyle(eu,hq);
}}}},_applyTransform:function(cJ,cK){this.getContainerElement().setStyle(dK,cJ==null?null:cJ.getStyle());
},_applyZIndex:function(gy,gz){this.getContainerElement().setStyle(eU,gy==null?0:gy);
},_applyVisibility:function(bM,bN){var bO=this.getContainerElement();

if(bM===ff){bO.show();
}else{bO.hide();
}var parent=this.$$parent;

if(parent&&(bN==null||bM==null||bN===eY||bM===eY)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyCursor:function(p,q){if(p==null&&!this.isSelectable()){p=eN;
}this.getContainerElement().setStyle(dq,p,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(gJ,gK){var gL=this.getBackgroundColor();
var gN=this.getContainerElement();

if(this.__eI){this.__eI.tint(gL);
gN.setStyle(fk,null);
}else{var gM=qx.theme.manager.Color.getInstance().resolve(gL);
gN.setStyle(fk,gM);
}},_applyFont:function(da,db){},__eV:null,$$stateChanges:null,_forwardStates:null,hasState:function(cC){var cD=this.__eV;
return !!cD&&!!cD[cC];
},addState:function(W){var X=this.__eV;

if(!X){X=this.__eV={};
}
if(X[W]){return;
}this.__eV[W]=true;
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bb=this.__eY;

if(forward&&forward[W]&&bb){var Y;

for(var ba in bb){Y=bb[ba];

if(Y instanceof qx.ui.core.Widget){bb[ba].addState(W);
}}}},removeState:function(cE){var cF=this.__eV;

if(!cF||!cF[cE]){return;
}delete this.__eV[cE];
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var cI=this.__eY;

if(forward&&forward[cE]&&cI){for(var cH in cI){var cG=cI[cH];

if(cG instanceof qx.ui.core.Widget){cG.removeState(cE);
}}}},replaceState:function(bn,bo){var bp=this.__eV;

if(!bp){bp=this.__eV={};
}
if(!bp[bo]){bp[bo]=true;
}
if(bp[bn]){delete bp[bn];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bs=this.__eY;

if(forward&&forward[bo]&&bs){for(var br in bs){var bq=bs[br];

if(bq instanceof qx.ui.core.Widget){bq.replaceState(bn,bo);
}}}},__eW:null,__eX:null,__uj:null,syncAppearance:function(){var fN=qx.theme.manager.Appearance.getInstance();
var fM=this.__eV;
var gb=this.__uj;
if(!gb){if(this.$$subparent){var ga=this;
var fP=[];

do{fP.push(ga.$$subcontrol||ga.getAppearance());
}while(ga=ga.$$subparent);
gb=fP.reverse().join(ez).replace(/#[0-9]+/g,dc);
}else{gb=this.getAppearance();
}}var fO=dc;

if(fM){var fQ=qx.Bootstrap.getKeys(fM);
var fR=fQ.length;

if(fR==1){fO=fm+fQ[0];
}else if(fR>1){fO=fm+fQ.sort().join(fm);
}}var fS=qx.ui.core.Widget.__eF;
var fU=gb+fO;
var fY=fS[fU];

if(!fY){fY=fS[fU]=fN.styleFrom(gb,fM,null,this.getAppearance());
var gd;
var fK=qx.core.property.Group;

for(var fT in fY){var gc=qx.core.property.Util.getPropertyDefinition(this.constructor,fT);
if(gc.group){if(gc.shorthand){var ge=fY[fT];

if(ge instanceof Array){fY[fT]=ge.length==4?ge:fK.expandShortHand(ge);
}else{fY[fT]=[ge,ge,ge,ge];
}}gd=gc.group;

for(var i=0,l=gd.length;i<l;i++){var fV=gd[i];
var fX=fY[fV];

if(fX===undefined||qx.lang.Object.findWinnerKey(fY,fT,fV)===fV){fY[gd[i]]=fY[fT][i];
}}delete fY[fT];
}}}var fL=this.__eW;

if(fL){var fW=fS[fL];
}this.__eW=fU;
qx.core.property.Multi.importData(this,fY,fW,fw);
},getThemedValue:function(cL){var cM=this.__eW;
return cM?qx.ui.core.Widget.__eF[cM][cL]:undefined;
},getInheritedValue:function(bT){var bV=this.constructor;
var bU=bV.$$inheritables||qx.core.property.Multi.getInheritableProperties(bV);

if(bU[bT]){var parent=this.$$parent;
return parent&&parent.get(bT);
}},_applyAppearance:function(hI,hJ){this.debug("Appearance changed: "+hJ+" => "+hI);
this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__eL){qx.ui.core.queue.Appearance.add(this);
this.__eL=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__eX=true;
qx.ui.core.queue.Appearance.add(this);
var fI=this.__eY;

if(fI){var fG;

for(var fH in fI){fG=fI[fH];

if(fG instanceof qx.ui.core.Widget){fG.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var I=this;

while(I.getAnonymous()){I=I.getLayoutParent();

if(!I){return null;
}}return I;
},getFocusTarget:function(){var cv=this;

if(!cv.getEnabled()){return null;
}
while(cv.getAnonymous()||!cv.getFocusable()){cv=cv.getLayoutParent();

if(!cv||!cv.getEnabled()){return null;
}}return cv;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(r,s){var t=this.getFocusElement();
if(r){var u=this.getTabIndex();

if(u==null){u=1;
}t.setAttribute(er,u);
if(qx.core.Variant.isSet(fl,fn)){t.setAttribute(dY,ej);
}else{t.setStyle(dS,dR);
}}else{if(t.isNativelyFocusable()){t.setAttribute(er,-1);
}else if(s){t.setAttribute(er,null);
}}},_applyKeepFocus:function(ck){var cl=this.getFocusElement();
cl.setAttribute(eI,ck?fb:null);
},_applyKeepActive:function(O){var P=this.getContainerElement();
P.setAttribute(eC,O?fb:null);
},_applyTabIndex:function(bD){if(bD==null){bD=1;
}else if(bD<1||bD>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&bD!=null){this.getFocusElement().setAttribute(er,bD);
}},_applySelectable:function(bg,bh){if(bh!==null){this._applyCursor(this.getCursor());
}this.getContainerElement().setSelectable(bg);
this.getContentElement().setSelectable(bg);
},_applyEnabled:function(bl,bm){if(bl===false){this.addState(fp);
this.removeState(dU);
if(this.isFocusable()){this.removeState(eo);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(fp);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(bz,bA,name){},_applyContextMenu:function(g,h){if(h){h.removeState(et);

if(h.getOpener()==this){h.resetOpener();
}
if(!g){this.removeListener(et,this._onContextMenuOpen);
h.removeListener(en,this._onBeforeContextMenuOpen,this);
}}
if(g){g.setOpener(this);
g.addState(et);

if(!h){this.addListener(et,this._onContextMenuOpen);
g.addListener(en,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==ff&&this.hasListener(df)){this.fireDataEvent(df,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(gA,gB){if(!this.isEnabled()&&gA===true){gA=false;
}qx.ui.core.DragDropCursor.getInstance();
if(gA){this.addListener(eP,this._onDragStart);
this.addListener(fh,this._onDrag);
this.addListener(eQ,this._onDragEnd);
this.addListener(eR,this._onDragChange);
}else{this.removeListener(eP,this._onDragStart);
this.removeListener(fh,this._onDrag);
this.removeListener(eQ,this._onDragEnd);
this.removeListener(eR,this._onDragChange);
}this.getContainerElement().setAttribute(dH,gA?fb:null);
},_applyDroppable:function(fB,fC){if(!this.isEnabled()&&fB===true){fB=false;
}this.getContainerElement().setAttribute(dz,fB?fb:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(eN);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var ha=qx.ui.core.DragDropCursor.getInstance();
var hb=e.getCurrentAction();
hb?ha.setAction(hb):ha.resetAction();
},visualizeFocus:function(){this.addState(eo);
},visualizeBlur:function(){this.removeState(eo);
},scrollChildIntoView:function(gU,gV,gW,gX){this.scrollChildIntoViewX(gU,gV,gX);
this.scrollChildIntoViewY(gU,gW,gX);
},scrollChildIntoViewX:function(bw,bx,by){this.getContentElement().scrollChildIntoViewX(bw.getContainerElement(),bx,by);
},scrollChildIntoViewY:function(cP,cQ,cR){this.getContentElement().scrollChildIntoViewY(cP.getContainerElement(),cQ,cR);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(hw){if(!this.__eY){return false;
}return !!this.__eY[hw];
},__eY:null,_getCreatedChildControls:function(){return this.__eY;
},getChildControl:function(gE,gF){if(!this.__eY){if(gF){return null;
}this.__eY={};
}var gG=this.__eY[gE];

if(gG){return gG;
}
if(gF===true){return null;
}return this._createChildControl(gE);
},_showChildControl:function(gH){var gI=this.getChildControl(gH);
gI.show();
return gI;
},_excludeChildControl:function(bG){var bH=this.getChildControl(bG,true);

if(bH){bH.exclude();
}},_isChildControlVisible:function(hs){var ht=this.getChildControl(hs,true);

if(ht){return ht.isVisible();
}return false;
},_createChildControl:function(j){if(!this.__eY){this.__eY={};
}else if(this.__eY[j]){throw new Error("Child control '"+j+"' already created!");
}var o=j.indexOf(dv);

if(o==-1){var k=this._createChildControlImpl(j);
}else{var k=this._createChildControlImpl(j.substring(0,o));
}
if(!k){throw new Error("Unsupported control: "+j);
}k.$$subcontrol=j;
k.$$subparent=this;
var m=this.__eV;
var forward=this._forwardStates;

if(m&&forward&&k instanceof qx.ui.core.Widget){for(var n in m){if(forward[n]){k.addState(n);
}}}this.fireDataEvent(fs,k);
return this.__eY[j]=k;
},_createChildControlImpl:function(gv){return null;
},_disposeChildControls:function(){var gT=this.__eY;

if(!gT){return;
}var gR=qx.ui.core.Widget;

for(var gS in gT){var gQ=gT[gS];

if(!gR.contains(this,gQ)){gQ.destroy();
}else{gQ.dispose();
}}delete this.__eY;
},_findTopControl:function(){var gp=this;

while(gp){if(!gp.$$subparent){return gp;
}gp=gp.$$subparent;
}return null;
},getContainerLocation:function(hD){var hE=this.getContainerElement().getDomElement();
return hE?qx.bom.element.Location.get(hE,hD):null;
},getContentLocation:function(Q){var R=this.getContentElement().getDomElement();
return R?qx.bom.element.Location.get(R,Q):null;
},setDomLeft:function(hc){var hd=this.getContainerElement().getDomElement();

if(hd){hd.style.left=hc+fg;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(cN){var cO=this.getContainerElement().getDomElement();

if(cO){cO.style.top=cN+fg;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(bR,top){var bS=this.getContainerElement().getDomElement();

if(bS){bS.style.left=bR+fg;
bS.style.top=top+fg;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var gC=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var gD=this.getChildren();

for(var i=0,l=gD.length;i<l;i++){gC.add(gD[i].clone());
}}return gC;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(eO,fb)){if(this.__eM){qx.locale.Manager.getInstance().removeListenerById(this.__eM);
}}this.getContainerElement().setAttribute(dm,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var bL=qx.ui.core.Widget;
var bK=this.getContainerElement();

if(this.__eI){bK.remove(this.__eI);
bL.__eG.poolDecorator(this.__eI);
}
if(this.__eJ){bK.remove(this.__eJ);
bL.__eH.poolDecorator(this.__eJ);
}this.clearSeparators();
this.__eI=this.__eJ=this.__eP=null;
}else{this._disposeArray(dC);
this._disposeObjects(dN,fr);
}this._disposeArray(dI);
this.__eV=this.__eY=null;
this._disposeObjects(dF,fu,eG,dg);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(i){qx.ui.core.Widget.call(this);

if(i!=null){this._setLayout(i);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(h){this.fireNonBubblingEvent(b,qx.event.type.Data,[h]);
},_afterRemoveChild:function(e){this.fireNonBubblingEvent(a,qx.event.type.Data,[e]);
}},defer:function(f,g){qx.ui.core.MChildrenHandling.remap(g);
qx.ui.core.MLayoutHandling.remap(g);
}});
})();
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="best-fit",e="mouse",d="bottom-left",c="direct",b="Boolean",a="bottom-right",w="widget",v="qx.ui.core.MPlacement",u="left-top",t="offsetRight",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",n="offsetTop",l="right-bottom",m="right-top",k="left-bottom";
qx.Mixin.define(v,{statics:{__hT:null,setVisibleElement:function(J){this.__hT=J;
},getVisibleElement:function(){return this.__hT;
}},properties:{position:{check:[r,o,d,a,u,k,m,l],init:d,themeable:true},placeMethod:{check:[w,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[c,h,f],init:h,themeable:true},placementModeY:{check:[c,h,f],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[n,t,p,s],shorthand:true,themeable:true}},members:{__hU:null,__hV:null,__hW:null,getLayoutLocation:function(S){var V,U,W,top;
U=S.getBounds();
W=U.left;
top=U.top;
var X=U;
S=S.getLayoutParent();

while(S&&!S.isRootWidget()){U=S.getBounds();
W+=U.left;
top+=U.top;
V=S.getInsets();
W+=V.left;
top+=V.top;
S=S.getLayoutParent();
}if(S.isRootWidget()){var T=S.getContainerLocation();

if(T){W+=T.left;
top+=T.top;
}}return {left:W,top:top,right:W+X.width,bottom:top+X.height};
},moveTo:function(z,top){var G=qx.ui.core.MPlacement.getVisibleElement();
if(G){var E=this.getBounds();
var I=G.getBounds();
if(E&&I){var F=I.left;
var D=I.left+I.width;
var B=I.top;
var H=I.top+I.height;
var C=top+E.height;
var A=z+E.width;
if((A>F&&z<D)&&(C>B&&top<H)){z=Math.max(F-E.width,0);
}}}
if(this.getDomMove()){this.setDomPosition(z,top);
}else{this.setLayoutProperties({left:z,top:top});
}},placeToWidget:function(bb,bc){if(bc){this.__hX();
this.__hU=qx.lang.Function.bind(this.placeToWidget,this,bb,false);
qx.event.Idle.getInstance().addListener(i,this.__hU);
this.__hW=function(){this.__hX();
};
this.addListener(g,this.__hW,this);
}var bd=bb.getContainerLocation()||this.getLayoutLocation(bb);
this.__ia(bd);
},__hX:function(){if(this.__hU){qx.event.Idle.getInstance().removeListener(i,this.__hU);
this.__hU=null;
}
if(this.__hW){this.removeListener(g,this.__hW,this);
this.__hW=null;
}},placeToMouse:function(event){var ba=event.getDocumentLeft();
var top=event.getDocumentTop();
var Y={left:ba,top:top,right:ba,bottom:top};
this.__ia(Y);
},placeToElement:function(K,L){var location=qx.bom.element.Location.get(K);
var M={left:location.left,top:location.top,right:location.left+K.offsetWidth,bottom:location.top+K.offsetHeight};
if(L){this.__hU=qx.lang.Function.bind(this.placeToElement,this,K,false);
qx.event.Idle.getInstance().addListener(i,this.__hU);
this.addListener(g,function(){if(this.__hU){qx.event.Idle.getInstance().removeListener(i,this.__hU);
this.__hU=null;
}},this);
}this.__ia(M);
},placeToPoint:function(Q){var R={left:Q.left,top:Q.top,right:Q.left,bottom:Q.top};
this.__ia(R);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__hY:function(x){var y=null;

if(this._computePlacementSize){var y=this._computePlacementSize();
}else if(this.isVisible()){var y=this.getBounds();
}
if(y==null){this.addListenerOnce(q,function(){this.__hY(x);
},this);
}else{x.call(this,y);
}},__ia:function(P){this.__hY(function(N){var O=qx.util.placement.Placement.compute(N,this.getLayoutParent().getBounds(),P,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(O.left,O.top);
});
}},destruct:function(){this.__hX();
}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){qx.ui.container.Composite.call(this,f);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(g,h){qx.ui.container.Composite.prototype._applyVisibility.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var l="atom",k="Integer",j="String",i="_applyRich",h="qx.ui.tooltip.ToolTip",g="_applyIcon",f="tooltip",d="qx.ui.core.Widget",c="mouseover",b="Boolean",a="_applyLabel";
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(m,n){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(m!=null){this.setLabel(m);
}
if(n!=null){this.setIcon(n);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(x){var y;

switch(x){case l:y=new qx.ui.basic.Atom;
this._add(y);
break;
}return y||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,x);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(u,v){var w=this.getChildControl(l);
u==null?w.resetIcon():w.setIcon(u);
},_applyLabel:function(o,p){var q=this.getChildControl(l);
o==null?q.resetLabel():q.setLabel(o);
},_applyRich:function(r,s){var t=this.getChildControl(l);
t.setRich(r);
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__eo:{},remove:function(p){delete this.__eo[p.$$hash];
},add:function(w){this.__eo[w.$$hash]=w;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var c=this.__er();
for(var i=c.length-1;i>=0;i--){var d=c[i];
if(d.hasValidLayout()){continue;
}if(d.isRootWidget()&&!d.hasUserBounds()){var f=d.getSizeHint();
d.renderLayout(0,0,f.width,f.height);
}else{var e=d.getBounds();
d.renderLayout(e.left,e.top,e.width,e.height);
}}},getNestingLevel:function(x){var y=this.__eq;
var A=0;
var parent=x;
while(true){if(y[parent.$$hash]!=null){A+=y[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
A+=1;
}var z=A;

while(x&&x!==parent){y[x.$$hash]=z--;
x=x.$$parent;
}return A;
},__ep:function(){var v=qx.ui.core.queue.Visibility;
this.__eq={};
var u=[];
var t=this.__eo;
var q,s;

for(var r in t){q=t[r];

if(v.isVisible(q)){s=this.getNestingLevel(q);
if(!u[s]){u[s]={};
}u[s][r]=q;
delete t[r];
}}return u;
},__er:function(){var k=[];
var m=this.__ep();

for(var j=m.length-1;j>=0;j--){if(!m[j]){continue;
}
for(var h in m[j]){var g=m[j][h];
if(j==0||g.isRootWidget()||g.hasUserBounds()){k.push(g);
g.invalidateLayoutCache();
continue;
}var o=g.getSizeHint(false);

if(o){g.invalidateLayoutCache();
var l=g.getSizeHint();
var n=(!g.getBounds()||o.minWidth!==l.minWidth||o.width!==l.width||o.maxWidth!==l.maxWidth||o.minHeight!==l.minHeight||o.height!==l.height||o.maxHeight!==l.maxHeight);
}else{n=true;
}
if(n){var parent=g.getLayoutParent();

if(!m[j-1]){m[j-1]={};
}m[j-1][parent.$$hash]=parent;
}else{k.push(g);
}}}return k;
}}});
})();
(function(){var b="qx.event.handler.UserAction";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){qx.core.Object.call(this);
this.__bY=a;
this.__ca=a.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__bY:null,__ca:null,canHandleEvent:function(f,g){},registerEvent:function(h,i,j){},unregisterEvent:function(c,d,e){}},destruct:function(){this.__bY=this.__ca=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__cb={};
this.__cc=qx.lang.Function.bind(this.__cg,this);
this.__cd=false;
},members:{__ce:null,__cf:null,__cb:null,__cd:null,__cc:null,schedule:function(g){if(this.__ce==null){this.__ce=window.setTimeout(this.__cc,0);
}var h=g.toHashCode();
if(this.__cf&&this.__cf[h]){return;
}this.__cb[h]=g;
this.__cd=true;
},cancel:function(c){var d=c.toHashCode();
if(this.__cf&&this.__cf[d]){this.__cf[d]=null;
return;
}delete this.__cb[d];
if(qx.lang.Object.isEmpty(this.__cb)&&this.__ce!=null){window.clearTimeout(this.__ce);
this.__ce=null;
}},__cg:qx.event.GlobalError.observeMethod(function(){this.__ce=null;
while(this.__cd){this.__cf=qx.lang.Object.clone(this.__cb);
this.__cb={};
this.__cd=false;

for(var f in this.__cf){var e=this.__cf[f];

if(e){this.__cf[f]=null;
e.call();
}}}this.__cf=null;
})},destruct:function(){if(this.__ce!=null){window.clearTimeout(this.__ce);
}this.__cc=this.__cb=null;
}});
})();
(function(){var c="qx.util.DeferredCall";
qx.Class.define(c,{extend:qx.core.Object,construct:function(a,b){qx.core.Object.call(this);
this.__ch=a;
this.__ci=b||null;
this.__cj=qx.util.DeferredCallManager.getInstance();
},members:{__ch:null,__ci:null,__cj:null,cancel:function(){this.__cj.cancel(this);
},schedule:function(){this.__cj.schedule(this);
},call:function(){this.__ci?this.__ch.apply(this.__ci):this.__ch();
}},destruct:function(d,e){this.cancel();
this.__ci=this.__ch=this.__cj=null;
}});
})();
(function(){var d="-",c="qx.event.handler.Element";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(v){qx.core.Object.call(this);
this._manager=v;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(e,f,g){var j=qx.core.ObjectRegistry.toHashCode(e);
var h=j+d+f;
var i=qx.lang.Function.listener(this._onNative,this,h);
qx.bom.Event.addNativeListener(e,f,i);
this._registeredEvents[h]={element:e,type:f,listener:i};
},unregisterEvent:function(k,l,m){var p=this._registeredEvents;

if(!p){return;
}var q=qx.core.ObjectRegistry.toHashCode(k);
var n=q+d+l;
var o=this._registeredEvents[n];

if(o){qx.bom.Event.removeNativeListener(k,l,o.listener);
}delete this._registeredEvents[n];
},_onNative:qx.event.GlobalError.observeMethod(function(w,x){var z=this._registeredEvents;

if(!z){return;
}var y=z[x];
qx.event.Registration.fireNonBubblingEvent(y.element,y.type,qx.event.type.Native,[w]);
})},destruct:function(){var s;
var t=this._registeredEvents;

for(var u in t){s=t[u];
qx.bom.Event.removeNativeListener(s.element,s.type,s.listener);
}this._manager=this._registeredEvents=null;
},defer:function(r){qx.event.Registration.addHandler(r);
}});
})();
(function(){var C="element",B="qx.client",A="capture",z="qxSelectable",w="off",v="on",u="div",t="releaseCapture",s="",r="mshtml",U="none",T="scroll",S="text",R="qx.html.Element",Q="|capture|",P="focus",O="blur",N="deactivate",M="userSelect",L="-moz-none",J="visible",K="|bubble|",H="__cG",I="tabIndex",F="activate",G="MozUserSelect",D="normal",E="hidden";
qx.Class.define(R,{extend:qx.core.Object,construct:function(bI,bJ,bK){qx.core.Object.call(this);
this.__ck=bI||u;
this.__cl=bJ||null;
this.__cm=bK||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__cn:{},_scheduleFlush:function(m){qx.html.Element.__cR.schedule();
},flush:function(){var ce;
{};
var bU=this.__co();
var bT=bU.getFocus();

if(bT&&this.__cs(bT)){bU.blur(bT);
}var cl=bU.getActive();

if(cl&&this.__cs(cl)){bU.deactivate(cl);
}var bX=this.__cq();

if(bX&&this.__cs(bX)){qx.event.Registration.getManager(bX).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(bX);
}var cf=[];
var cg=this._modified;

for(var cd in cg){ce=cg[cd];
if(ce.__cK()){if(ce.__ct&&qx.dom.Hierarchy.isRendered(ce.__ct)){cf.push(ce);
}else{{};
ce.__cJ();
}delete cg[cd];
}}
for(var i=0,l=cf.length;i<l;i++){ce=cf[i];
{};
ce.__cJ();
}var cb=this._visibility;

for(var cd in cb){ce=cb[cd];
var ch=ce.__ct;

if(!ch){delete cb[cd];
continue;
}{};
if(!ce.$$disposed){ch.style.display=ce.__cw?s:U;
if(qx.core.Variant.isSet(B,r)){if(!(document.documentMode>=8)){ch.style.visibility=ce.__cw?J:E;
}}}delete cb[cd];
}var scroll=this._scroll;

for(var cd in scroll){ce=scroll[cd];
var cm=ce.__ct;

if(cm&&cm.offsetWidth){var bW=true;
if(ce.__cz!=null){ce.__ct.scrollLeft=ce.__cz;
delete ce.__cz;
}if(ce.__cA!=null){ce.__ct.scrollTop=ce.__cA;
delete ce.__cA;
}var ci=ce.__cx;

if(ci!=null){var cc=ci.element.getDomElement();

if(cc&&cc.offsetWidth){qx.bom.element.Scroll.intoViewX(cc,cm,ci.align);
delete ce.__cx;
}else{bW=false;
}}var cj=ce.__cy;

if(cj!=null){var cc=cj.element.getDomElement();

if(cc&&cc.offsetWidth){qx.bom.element.Scroll.intoViewY(cc,cm,cj.align);
delete ce.__cy;
}else{bW=false;
}}if(bW){delete scroll[cd];
}}}var bV={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var ck=this._actions[i];
var ch=ck.element.__ct;

if(!ch||!bV[ck.type]&&!ck.element.__cK()){continue;
}var ca=ck.args;
ca.unshift(ch);

if(ck.type==A||ck.type==t){var bY=qx.event.Registration.getManager(ch).getDispatcher(qx.event.dispatch.MouseCapture);

if(ck.type==A){bY.activateCapture(ch);
}else{bY.releaseCapture(ch);
}}else{var bU=qx.event.Registration.getManager(ch).getHandler(qx.event.handler.Focus);
bU[ck.type](ch);
}}this._actions=[];
for(var cd in this.__cn){var bS=this.__cn[cd];
var cm=bS.element.__ct;

if(cm){qx.bom.Selection.set(cm,bS.start,bS.end);
delete this.__cn[cd];
}}qx.event.handler.Appear.refresh();
},__co:function(){if(!this.__cp){var n=qx.event.Registration.getManager(window);
this.__cp=n.getHandler(qx.event.handler.Focus);
}return this.__cp;
},__cq:function(){if(!this.__cr){var c=qx.event.Registration.getManager(window);
this.__cr=c.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__cr.getCaptureElement();
},__cs:function(cL){var cM=qx.core.ObjectRegistry.fromHashCode(cL.$$element);
return cM&&!cM.__cK();
}},members:{__ck:null,__ct:null,__cu:false,__cv:true,__cw:true,__cx:null,__cy:null,__cz:null,__cA:null,__cB:null,__cC:null,__cD:null,__cl:null,__cm:null,__cE:null,__cF:null,__cG:null,__cH:null,__cI:null,_scheduleChildrenUpdate:function(){if(this.__cH){return;
}this.__cH=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
},_createDomElement:function(){return qx.bom.Element.create(this.__ck);
},__cJ:function(){{};
var dW=this.__cG;

if(dW){var length=dW.length;
var dX;

for(var i=0;i<length;i++){dX=dW[i];

if(dX.__cw&&dX.__cv&&!dX.__ct){dX.__cJ();
}}}
if(!this.__ct){this.__ct=this._createDomElement();
this.__ct.$$element=this.$$hash;
this._copyData(false);

if(dW&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__cH){this._syncChildren();
}}delete this.__cH;
},_insertChildren:function(){var dC=this.__cG;
var length=dC.length;
var dE;

if(length>2){var dD=document.createDocumentFragment();

for(var i=0;i<length;i++){dE=dC[i];

if(dE.__ct&&dE.__cv){dD.appendChild(dE.__ct);
}}this.__ct.appendChild(dD);
}else{var dD=this.__ct;

for(var i=0;i<length;i++){dE=dC[i];

if(dE.__ct&&dE.__cv){dD.appendChild(dE.__ct);
}}}},_syncChildren:function(){var cC;
var cH=qx.core.ObjectRegistry;
var cy=this.__cG;
var cF=cy.length;
var cz;
var cD;
var cB=this.__ct;
var cE=cB.childNodes;
var cA=0;
var cG;
{};
for(var i=cE.length-1;i>=0;i--){cG=cE[i];
cD=cH.fromHashCode(cG.$$element);

if(!cD||!cD.__cv||cD.__cI!==this){cB.removeChild(cG);
{};
}}for(var i=0;i<cF;i++){cz=cy[i];
if(cz.__cv){cD=cz.__ct;
cG=cE[cA];

if(!cD){continue;
}if(cD!=cG){if(cG){cB.insertBefore(cD,cG);
}else{cB.appendChild(cD);
}{};
}cA++;
}}{};
},_copyData:function(bj){var bn=this.__ct;
var bm=this.__cm;

if(bm){var bk=qx.bom.element.Attribute;

for(var bo in bm){bk.set(bn,bo,bm[bo]);
}}var bm=this.__cl;

if(bm){var bl=qx.bom.element.Style;

if(bj){bl.setStyles(bn,bm);
}else{bl.setCss(bn,bl.compile(bm));
}}var bm=this.__cE;

if(bm){for(var bo in bm){this._applyProperty(bo,bm[bo]);
}}var bm=this.__cF;

if(bm){qx.event.Registration.getManager(bn).importListeners(bn,bm);
delete this.__cF;
}},_syncData:function(){var bE=this.__ct;
var bD=qx.bom.element.Attribute;
var bB=qx.bom.element.Style;
var bC=this.__cC;

if(bC){var bH=this.__cm;

if(bH){var bF;

for(var bG in bC){bF=bH[bG];

if(bF!==undefined){bD.set(bE,bG,bF);
}else{bD.reset(bE,bG);
}}}this.__cC=null;
}var bC=this.__cB;

if(bC){var bH=this.__cl;

if(bH){var bA={};

for(var bG in bC){bA[bG]=bH[bG];
}bB.setStyles(bE,bA);
}this.__cB=null;
}var bC=this.__cD;

if(bC){var bH=this.__cE;

if(bH){var bF;

for(var bG in bC){this._applyProperty(bG,bH[bG]);
}}this.__cD=null;
}},__cK:function(){var de=this;
while(de){if(de.__cu){return true;
}
if(!de.__cv||!de.__cw){return false;
}de=de.__cI;
}return false;
},__cL:function(b){if(b.__cI===this){throw new Error("Child is already in: "+b);
}
if(b.__cu){throw new Error("Root elements could not be inserted into other ones.");
}if(b.__cI){b.__cI.remove(b);
}b.__cI=this;
if(!this.__cG){this.__cG=[];
}if(this.__ct){this._scheduleChildrenUpdate();
}},__cM:function(cQ){if(cQ.__cI!==this){throw new Error("Has no child: "+cQ);
}if(this.__ct){this._scheduleChildrenUpdate();
}delete cQ.__cI;
},__cN:function(cR){if(cR.__cI!==this){throw new Error("Has no child: "+cR);
}if(this.__ct){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__cG||null;
},getChild:function(cV){var cW=this.__cG;
return cW&&cW[cV]||null;
},hasChildren:function(){var f=this.__cG;
return f&&f[0]!==undefined;
},indexOf:function(p){var q=this.__cG;
return q?q.indexOf(p):-1;
},hasChild:function(cT){var cU=this.__cG;
return cU&&cU.indexOf(cT)!==-1;
},add:function(bi){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__cL(arguments[i]);
}this.__cG.push.apply(this.__cG,arguments);
}else{this.__cL(bi);
this.__cG.push(bi);
}return this;
},addAt:function(dq,dr){this.__cL(dq);
qx.lang.Array.insertAt(this.__cG,dq,dr);
return this;
},remove:function(bp){var bq=this.__cG;

if(!bq){return;
}
if(arguments[1]){var br;

for(var i=0,l=arguments.length;i<l;i++){br=arguments[i];
this.__cM(br);
qx.lang.Array.remove(bq,br);
}}else{this.__cM(bp);
qx.lang.Array.remove(bq,bp);
}return this;
},removeAt:function(bN){var bO=this.__cG;

if(!bO){throw new Error("Has no children!");
}var bP=bO[bN];

if(!bP){throw new Error("Has no child at this position!");
}this.__cM(bP);
qx.lang.Array.removeAt(this.__cG,bN);
return this;
},removeAll:function(){var dn=this.__cG;

if(dn){for(var i=0,l=dn.length;i<l;i++){this.__cM(dn[i]);
}dn.length=0;
}return this;
},getParent:function(){return this.__cI||null;
},insertInto:function(parent,dp){parent.__cL(this);

if(dp==null){parent.__cG.push(this);
}else{qx.lang.Array.insertAt(this.__cG,this,dp);
}return this;
},insertBefore:function(cS){var parent=cS.__cI;
parent.__cL(this);
qx.lang.Array.insertBefore(parent.__cG,this,cS);
return this;
},insertAfter:function(dm){var parent=dm.__cI;
parent.__cL(this);
qx.lang.Array.insertAfter(parent.__cG,this,dm);
return this;
},moveTo:function(cN){var parent=this.__cI;
parent.__cN(this);
var cO=parent.__cG.indexOf(this);

if(cO===cN){throw new Error("Could not move to same index!");
}else if(cO<cN){cN--;
}qx.lang.Array.removeAt(parent.__cG,cO);
qx.lang.Array.insertAt(parent.__cG,this,cN);
return this;
},moveBefore:function(dk){var parent=this.__cI;
return this.moveTo(parent.__cG.indexOf(dk));
},moveAfter:function(bf){var parent=this.__cI;
return this.moveTo(parent.__cG.indexOf(bf)+1);
},free:function(){var parent=this.__cI;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__cG){return;
}parent.__cM(this);
qx.lang.Array.remove(parent.__cG,this);
return this;
},getDomElement:function(){return this.__ct||null;
},getNodeName:function(){return this.__ck;
},setNodeName:function(name){this.__ck=name;
},setRoot:function(dF){this.__cu=dF;
},useMarkup:function(bQ){if(this.__ct){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(B,r)){var bR=document.createElement(u);
}else{var bR=qx.bom.Element.getHelperElement();
}bR.innerHTML=bQ;
this.useElement(bR.firstChild);
return this.__ct;
},useElement:function(cX){if(this.__ct){throw new Error("Could not overwrite existing element!");
}this.__ct=cX;
this.__ct.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var dg=this.getAttribute(I);

if(dg>=1){return true;
}var df=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(dg>=0&&df[this.__ck]){return true;
}return false;
},setSelectable:qx.core.Variant.select(B,{"webkit":function(eb){this.setAttribute(z,eb?v:w);
this.setStyle(M,eb?D:U);
},"gecko":function(d){this.setAttribute(z,d?v:w);
this.setStyle(G,d?S:L);
},"default":function(cP){this.setAttribute(z,cP?v:w);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__ck];
},include:function(){if(this.__cv){return;
}delete this.__cv;

if(this.__cI){this.__cI._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__cv){return;
}this.__cv=false;

if(this.__cI){this.__cI._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__cv===true;
},show:function(){if(this.__cw){return;
}
if(this.__ct){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}if(this.__cI){this.__cI._scheduleChildrenUpdate();
}delete this.__cw;
},hide:function(){if(!this.__cw){return;
}
if(this.__ct){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}this.__cw=false;
},isVisible:function(){return this.__cw===true;
},scrollChildIntoViewX:function(dv,dw,dx){var dy=this.__ct;
var dz=dv.getDomElement();

if(dx!==false&&dy&&dy.offsetWidth&&dz&&dz.offsetWidth){qx.bom.element.Scroll.intoViewX(dz,dy,dw);
}else{this.__cx={element:dv,align:dw};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}delete this.__cz;
},scrollChildIntoViewY:function(dG,dH,dI){var dJ=this.__ct;
var dK=dG.getDomElement();

if(dI!==false&&dJ&&dJ.offsetWidth&&dK&&dK.offsetWidth){qx.bom.element.Scroll.intoViewY(dK,dJ,dH);
}else{this.__cy={element:dG,align:dH};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}delete this.__cA;
},scrollToX:function(x,dY){var ea=this.__ct;

if(dY!==true&&ea&&ea.offsetWidth){ea.scrollLeft=x;
}else{this.__cz=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}delete this.__cx;
},getScrollX:function(){var ds=this.__ct;

if(ds){return ds.scrollLeft;
}return this.__cz||0;
},scrollToY:function(y,cv){var cw=this.__ct;

if(cv!==true&&cw&&cw.offsetWidth){cw.scrollTop=y;
}else{this.__cA=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}delete this.__cy;
},getScrollY:function(){var be=this.__ct;

if(be){return be.scrollTop;
}return this.__cA||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(T,this.__cP,this);
},enableScrolling:function(){this.removeListener(T,this.__cP,this);
},__cO:null,__cP:function(e){if(!this.__cO){this.__cO=true;
this.__ct.scrollTop=0;
this.__ct.scrollLeft=0;
delete this.__cO;
}},getTextSelection:function(){var dV=this.__ct;

if(dV){return qx.bom.Selection.get(dV);
}return null;
},getTextSelectionLength:function(){var cx=this.__ct;

if(cx){return qx.bom.Selection.getLength(cx);
}return null;
},getTextSelectionStart:function(){var dR=this.__ct;

if(dR){return qx.bom.Selection.getStart(dR);
}return null;
},getTextSelectionEnd:function(){var bM=this.__ct;

if(bM){return qx.bom.Selection.getEnd(bM);
}return null;
},setTextSelection:function(dS,dT){var dU=this.__ct;

if(dU){qx.bom.Selection.set(dU,dS,dT);
return;
}qx.html.Element.__cn[this.toHashCode()]={element:this,start:dS,end:dT};
qx.html.Element._scheduleFlush(C);
},clearTextSelection:function(){var ec=this.__ct;

if(ec){qx.bom.Selection.clear(ec);
}delete qx.html.Element.__cn[this.toHashCode()];
},__cQ:function(h,j){var k=qx.html.Element._actions;
k.push({type:h,element:this,args:j||[]});
qx.html.Element._scheduleFlush(C);
},focus:function(){this.__cQ(P);
},blur:function(){this.__cQ(O);
},activate:function(){this.__cQ(F);
},deactivate:function(){this.__cQ(N);
},capture:function(a){this.__cQ(A,[a!==false]);
},releaseCapture:function(){this.__cQ(t);
},setStyle:function(da,dc,dd){if(!this.__cl){this.__cl={};
}
if(this.__cl[da]==dc){return;
}
if(dc==null){delete this.__cl[da];
}else{this.__cl[da]=dc;
}if(this.__ct){if(dd){qx.bom.element.Style.set(this.__ct,da,dc);
return this;
}if(!this.__cB){this.__cB={};
}this.__cB[da]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}return this;
},setStyles:function(cq,cr){var cs=qx.bom.element.Style;

if(!this.__cl){this.__cl={};
}
if(this.__ct){if(!this.__cB){this.__cB={};
}
for(var cu in cq){var ct=cq[cu];

if(this.__cl[cu]==ct){continue;
}
if(ct==null){delete this.__cl[cu];
}else{this.__cl[cu]=ct;
}if(cr){cs.set(this.__ct,cu,ct);
continue;
}this.__cB[cu]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}else{for(var cu in cq){var ct=cq[cu];

if(this.__cl[cu]==ct){continue;
}
if(ct==null){delete this.__cl[cu];
}else{this.__cl[cu]=ct;
}}}return this;
},removeStyle:function(bg,bh){this.setStyle(bg,null,bh);
},getStyle:function(g){return this.__cl?this.__cl[g]:null;
},getAllStyles:function(){return this.__cl||null;
},setAttribute:function(dh,di,dj){if(!this.__cm){this.__cm={};
}
if(this.__cm[dh]==di){return;
}
if(di==null){delete this.__cm[dh];
}else{this.__cm[dh]=di;
}if(this.__ct){if(dj){qx.bom.element.Attribute.set(this.__ct,dh,di);
return this;
}if(!this.__cC){this.__cC={};
}this.__cC[dh]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}return this;
},setAttributes:function(cI,cJ){for(var cK in cI){this.setAttribute(cK,cI[cK],cJ);
}return this;
},removeAttribute:function(dt,du){this.setAttribute(dt,null,du);
},getAttribute:function(bL){return this.__cm?this.__cm[bL]:null;
},_applyProperty:function(name,dl){},_setProperty:function(bx,by,bz){if(!this.__cE){this.__cE={};
}
if(this.__cE[bx]==by){return;
}
if(by==null){delete this.__cE[bx];
}else{this.__cE[bx]=by;
}if(this.__ct){if(bz){this._applyProperty(bx,by);
return this;
}if(!this.__cD){this.__cD={};
}this.__cD[bx]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}return this;
},_removeProperty:function(dA,dB){this._setProperty(dA,null,dB);
},_getProperty:function(cn){var co=this.__cE;

if(!co){return null;
}var cp=co[cn];
return cp==null?null:cp;
},addListener:function(dL,dM,self,dN){var dO;

if(this.$$disposed){return null;
}{};

if(this.__ct){return qx.event.Registration.addListener(this.__ct,dL,dM,self,dN);
}
if(!this.__cF){this.__cF={};
}
if(dN==null){dN=false;
}var dP=qx.event.Manager.getNextUniqueId();
var dQ=dL+(dN?Q:K)+dP;
this.__cF[dQ]={type:dL,listener:dM,self:self,capture:dN,unique:dP};
return dQ;
},removeListener:function(V,W,self,X){var Y;

if(this.$$disposed){return null;
}{};

if(this.__ct){qx.event.Registration.removeListener(this.__ct,V,W,self,X);
}else{var bb=this.__cF;
var ba;

if(X==null){X=false;
}
for(var bc in bb){ba=bb[bc];
if(ba.listener===W&&ba.self===self&&ba.capture===X&&ba.type===V){delete bb[bc];
break;
}}}return this;
},removeListenerById:function(bd){if(this.$$disposed){return null;
}
if(this.__ct){qx.event.Registration.removeListenerById(this.__ct,bd);
}else{delete this.__cF[bd];
}return this;
},hasListener:function(bs,bt){if(this.$$disposed){return false;
}
if(this.__ct){return qx.event.Registration.hasListener(this.__ct,bs,bt);
}var bv=this.__cF;
var bu;

if(bt==null){bt=false;
}
for(var bw in bv){bu=bv[bw];
if(bu.capture===bt&&bu.type===bs){return true;
}}return false;
}},defer:function(cY){cY.__cR=new qx.util.DeferredCall(cY.flush,cY);
},destruct:function(){var o=this.__ct;

if(o){qx.event.Registration.getManager(o).removeAllListeners(o);
o.$$element=s;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__cI;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(H);
this.__cm=this.__cl=this.__cF=this.__cE=this.__cC=this.__cB=this.__cD=this.__ct=this.__cI=this.__cx=this.__cy=null;
}});
})();
(function(){var b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__cS:false,__cT:{},__cU:0,MAX_RETRIES:10,scheduleFlush:function(g){var self=qx.ui.core.queue.Manager;
self.__cT[g]=true;

if(!self.__cS){self.__cX.schedule();
self.__cS=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__cV){return;
}self.__cV=true;
self.__cX.cancel();
var f=self.__cT;
self.__cW(function(){while(f.visibility||f.widget||f.appearance||f.layout||f.element){if(f.widget){delete f.widget;
qx.ui.core.queue.Widget.flush();
}
if(f.visibility){delete f.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(f.appearance){delete f.appearance;
qx.ui.core.queue.Appearance.flush();
}
if(f.inheritance){delete f.inheritance;
qx.core.property.Multi.flush();
}if(f.widget||f.visibility||f.appearance||f.inheritance){continue;
}
if(f.layout){delete f.layout;
qx.ui.core.queue.Layout.flush();
}if(f.widget||f.visibility||f.appearance||f.layout){continue;
}
if(f.element){delete f.element;
qx.html.Element.flush();
}}},function(){self.__cS=false;
});
self.__cW(function(){if(f.dispose){delete f.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__cV=false;
});
self.__cU=0;
},__cW:function(c,d){var self=qx.ui.core.queue.Manager;

try{c();
}catch(e){{};
self.__cS=false;
self.__cV=false;
self.__cU+=1;

if(self.__cU<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__cU-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{d();
}}},defer:function(h){h.__cX=new qx.util.DeferredCall(h.flush);
qx.html.Element._scheduleFlush=h.scheduleFlush;
qx.event.Registration.addListener(window,a,h.flush);
}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(e){this._manager=e;
},members:{_getParent:function(f){throw new Error("Missing implementation");
},canDispatchEvent:function(c,event,d){return event.getBubbles();
},dispatchEvent:function(g,event,h){var parent=g;
var s=this._manager;
var p,w;
var n;
var r,u;
var t;
var v=[];
p=s.getListeners(g,h,true);
w=s.getListeners(g,h,false);

if(p){v.push(p);
}
if(w){v.push(w);
}var parent=this._getParent(g);
var l=[];
var k=[];
var m=[];
var q=[];
while(parent!=null){p=s.getListeners(parent,h,true);

if(p){m.push(p);
q.push(parent);
}w=s.getListeners(parent,h,false);

if(w){l.push(w);
k.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=m.length-1;i>=0;i--){t=q[i];
event.setCurrentTarget(t);
n=m[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(g);

for(var i=0,x=v.length;i<x;i++){n=v[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||g;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,x=l.length;i<x;i++){t=k[i];
event.setCurrentTarget(t);
n=l[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var h="losecapture",g="qx.client",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(q,r){qx.event.dispatch.AbstractBubbling.call(this,q);
this.__db=q.getWindow();
this.__dc=r;
q.addListener(this.__db,f,this.releaseCapture,this);
q.addListener(this.__db,e,this.releaseCapture,this);
q.addListener(this.__db,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__dc:null,__dd:null,__de:true,__db:null,_getParent:function(n){return n.parentNode;
},canDispatchEvent:function(u,event,v){return (this.__dd&&this.__df[v]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__de||!qx.dom.Hierarchy.contains(this.__dd,o)){o=this.__dd;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__df:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(s,t){var t=t!==false;

if(this.__dd===s&&this.__de==t){return;
}
if(this.__dd){this.releaseCapture();
}this.nativeSetCapture(s,t);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(s,h,function(){qx.bom.Event.removeNativeListener(s,h,arguments.callee);
self.releaseCapture();
});
}this.__de=t;
this.__dd=s;
this.__dc.fireEvent(s,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__dd;
},releaseCapture:function(){var j=this.__dd;

if(!j){return;
}this.__dd=null;
this.__dc.fireEvent(j,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(j);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(g,{"mshtml":function(k,l){qx.event.Timer.once(function(){k.setCapture(l!==false);
},this,0);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(g,{"mshtml":function(m){qx.event.Timer.once(function(){m.releaseCapture();
},this,0);
},"default":qx.lang.Function.empty})},destruct:function(){this.__dd=this.__db=this.__dc=null;
},defer:function(i){qx.event.Registration.addDispatcher(i);
}});
})();
(function(){var bc="qx.client",bb="blur",ba="focus",Y="mousedown",X="on",W="mouseup",V="DOMFocusOut",U="DOMFocusIn",T="selectstart",S="onmousedown",bx="onfocusout",bw="onfocusin",bv="onmouseup",bu="onselectstart",bt="draggesture",bs="qx.event.handler.Focus",br="_applyFocus",bq="deactivate",bp="textarea",bo="_applyActive",bj='character',bk="input",bh="focusin",bi="qxSelectable",bf="tabIndex",bg="off",bd="activate",be="mshtml",bl="focusout",bm="qxKeepFocus",bn="qxKeepActive";
qx.Class.define(bs,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);
this._manager=o;
this._window=o.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bo,nullable:true},focus:{apply:br,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__dg:null,__dh:null,__di:null,__dj:null,__dk:null,__dl:null,__dm:null,__dn:null,__do:null,__dp:null,canHandleEvent:function(B,C){},registerEvent:function(M,N,O){},unregisterEvent:function(bA,bB,bC){},focus:function(l){if(qx.core.Variant.isSet(bc,be)){window.setTimeout(function(){try{l.focus();
var j=qx.bom.Selection.get(l);

if(j.length==0){var k=l.createTextRange();
k.moveStart(bj,l.value.length);
k.collapse();
k.select();
}}catch(bN){}},0);
}else{try{l.focus();
}catch(w){}}this.setFocus(l);
this.setActive(l);
},activate:function(u){this.setActive(u);
},blur:function(D){try{D.blur();
}catch(q){}
if(this.getActive()===D){this.resetActive();
}
if(this.getFocus()===D){this.resetFocus();
}},deactivate:function(bL){if(this.getActive()===bL){this.resetActive();
}},tryActivate:function(y){var z=this.__dE(y);

if(z){this.setActive(z);
}},__dq:function(G,H,I,J){var L=qx.event.Registration;
var K=L.createEvent(I,qx.event.type.Focus,[G,H,J]);
L.dispatchEvent(G,K);
},_windowFocused:true,__dr:function(){if(this._windowFocused){this._windowFocused=false;
this.__dq(this._window,null,bb,false);
}},__ds:function(){if(!this._windowFocused){this._windowFocused=true;
this.__dq(this._window,null,ba,false);
}},_initObserver:qx.core.Variant.select(bc,{"gecko":function(){this.__dg=qx.lang.Function.listener(this.__dy,this);
this.__dh=qx.lang.Function.listener(this.__dz,this);
this.__di=qx.lang.Function.listener(this.__dx,this);
this.__dj=qx.lang.Function.listener(this.__dw,this);
this.__dk=qx.lang.Function.listener(this.__dt,this);
this._document.addEventListener(Y,this.__dg,true);
this._document.addEventListener(W,this.__dh,true);
this._window.addEventListener(ba,this.__di,true);
this._window.addEventListener(bb,this.__dj,true);
this._window.addEventListener(bt,this.__dk,true);
},"mshtml":function(){this.__dg=qx.lang.Function.listener(this.__dy,this);
this.__dh=qx.lang.Function.listener(this.__dz,this);
this.__dm=qx.lang.Function.listener(this.__du,this);
this.__dn=qx.lang.Function.listener(this.__dv,this);
this.__dl=qx.lang.Function.listener(this.__dB,this);
this._document.attachEvent(S,this.__dg);
this._document.attachEvent(bv,this.__dh);
this._document.attachEvent(bw,this.__dm);
this._document.attachEvent(bx,this.__dn);
this._document.attachEvent(bu,this.__dl);
},"webkit":function(){this.__dg=qx.lang.Function.listener(this.__dy,this);
this.__dh=qx.lang.Function.listener(this.__dz,this);
this.__dn=qx.lang.Function.listener(this.__dv,this);
this.__di=qx.lang.Function.listener(this.__dx,this);
this.__dj=qx.lang.Function.listener(this.__dw,this);
this.__dl=qx.lang.Function.listener(this.__dB,this);
this._document.addEventListener(Y,this.__dg,true);
this._document.addEventListener(W,this.__dh,true);
this._document.addEventListener(T,this.__dl,false);
this._window.addEventListener(V,this.__dn,true);
this._window.addEventListener(ba,this.__di,true);
this._window.addEventListener(bb,this.__dj,true);
},"opera":function(){this.__dg=qx.lang.Function.listener(this.__dy,this);
this.__dh=qx.lang.Function.listener(this.__dz,this);
this.__dm=qx.lang.Function.listener(this.__du,this);
this.__dn=qx.lang.Function.listener(this.__dv,this);
this._document.addEventListener(Y,this.__dg,true);
this._document.addEventListener(W,this.__dh,true);
this._window.addEventListener(U,this.__dm,true);
this._window.addEventListener(V,this.__dn,true);
}}),_stopObserver:qx.core.Variant.select(bc,{"gecko":function(){this._document.removeEventListener(Y,this.__dg,true);
this._document.removeEventListener(W,this.__dh,true);
this._window.removeEventListener(ba,this.__di,true);
this._window.removeEventListener(bb,this.__dj,true);
this._window.removeEventListener(bt,this.__dk,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,S,this.__dg);
qx.bom.Event.removeNativeListener(this._document,bv,this.__dh);
qx.bom.Event.removeNativeListener(this._document,bw,this.__dm);
qx.bom.Event.removeNativeListener(this._document,bx,this.__dn);
qx.bom.Event.removeNativeListener(this._document,bu,this.__dl);
},"webkit":function(){this._document.removeEventListener(Y,this.__dg,true);
this._document.removeEventListener(T,this.__dl,false);
this._window.removeEventListener(U,this.__dm,true);
this._window.removeEventListener(V,this.__dn,true);
this._window.removeEventListener(ba,this.__di,true);
this._window.removeEventListener(bb,this.__dj,true);
},"opera":function(){this._document.removeEventListener(Y,this.__dg,true);
this._window.removeEventListener(U,this.__dm,true);
this._window.removeEventListener(V,this.__dn,true);
this._window.removeEventListener(ba,this.__di,true);
this._window.removeEventListener(bb,this.__dj,true);
}}),__dt:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"gecko":function(e){if(!this.__dF(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__du:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"mshtml":function(e){this.__ds();
var i=e.srcElement;
var h=this.__dD(i);

if(h){this.setFocus(h);
}this.tryActivate(i);
},"opera":function(e){var g=e.target;

if(g==this._document||g==this._window){this.__ds();

if(this.__do){this.setFocus(this.__do);
delete this.__do;
}
if(this.__dp){this.setActive(this.__dp);
delete this.__dp;
}}else{this.setFocus(g);
this.tryActivate(g);
if(!this.__dF(g)){g.selectionStart=0;
g.selectionEnd=0;
}}},"default":null})),__dv:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"mshtml":function(e){if(!e.toElement){this.__dr();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var p=e.target;

if(p===this.getFocus()){this.resetFocus();
}
if(p===this.getActive()){this.resetActive();
}},"opera":function(e){var P=e.target;

if(P==this._document){this.__dr();
this.__do=this.getFocus();
this.__dp=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(P===this.getFocus()){this.resetFocus();
}
if(P===this.getActive()){this.resetActive();
}}},"default":null})),__dw:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__dr();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__dr();
this.__do=this.getFocus();
this.__dp=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__dx:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"gecko":function(e){var v=e.target;

if(v===this._window||v===this._document){this.__ds();
v=this._body;
}this.setFocus(v);
this.tryActivate(v);
},"webkit":function(e){var bO=e.target;

if(bO===this._window||bO===this._document){this.__ds();

if(this.__do){this.setFocus(this.__do);
delete this.__do;
}
if(this.__dp){this.setActive(this.__dp);
delete this.__dp;
}}else{this.setFocus(bO);
this.tryActivate(bO);
}},"default":null})),__dy:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"gecko":function(e){var bQ=this.__dD(e.target);

if(!bQ){qx.bom.Event.preventDefault(e);
}else if(bQ===this._body){this.setFocus(bQ);
}},"mshtml":function(e){var b=e.srcElement;
var a=this.__dD(b);

if(a){if(!this.__dF(b)){b.unselectable=X;
try{document.selection.empty();
}catch(e){}try{a.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__dF(b)){b.unselectable=X;
}}},"webkit":function(e){var n=e.target;
var m=this.__dD(n);

if(m){this.setFocus(m);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var t=e.target;
var r=this.__dD(t);

if(!this.__dF(t)){qx.bom.Event.preventDefault(e);
if(r){var s=this.getFocus();

if(s&&s.selectionEnd){s.selectionStart=0;
s.selectionEnd=0;
s.blur();
}if(r){this.setFocus(r);
}}}else if(r){this.setFocus(r);
}},"default":null})),__dz:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"mshtml":function(e){var bM=e.srcElement;

if(bM.unselectable){bM.unselectable=bg;
}this.tryActivate(this.__dA(bM));
},"gecko":function(e){var c=e.target;

while(c&&c.offsetWidth===undefined){c=c.parentNode;
}
if(c){this.tryActivate(c);
}},"webkit|opera":function(e){this.tryActivate(this.__dA(e.target));
},"default":null})),__dA:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"mshtml|webkit":function(by){var bz=this.getFocus();

if(bz&&by!=bz&&(bz.nodeName.toLowerCase()===bk||bz.nodeName.toLowerCase()===bp)){by=bz;
}return by;
},"default":function(bP){return bP;
}})),__dB:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bc,{"mshtml|webkit":function(e){var x=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__dF(x)){qx.bom.Event.preventDefault(e);
}},"default":null})),__dC:function(bI){var bJ=qx.bom.element.Attribute.get(bI,bf);

if(bJ>=1){return true;
}var bK=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bJ>=0&&bK[bI.tagName]){return true;
}return false;
},__dD:function(A){while(A&&A.nodeType===1){if(A.getAttribute(bm)==X){return null;
}
if(this.__dC(A)){return A;
}A=A.parentNode;
}return this._body;
},__dE:function(bG){var bH=bG;

while(bG&&bG.nodeType===1){if(bG.getAttribute(bn)==X){return null;
}bG=bG.parentNode;
}return bH;
},__dF:function(Q){while(Q&&Q.nodeType===1){var R=Q.getAttribute(bi);

if(R!=null){return R===X;
}Q=Q.parentNode;
}return true;
},_applyActive:function(d,f){if(f){this.__dq(f,d,bq,true);
}
if(d){this.__dq(d,f,bd,true);
}},_applyFocus:function(E,F){if(F){this.__dq(F,E,bl,true);
}
if(E){this.__dq(E,F,bh,true);
}if(F){this.__dq(F,E,bb,false);
}
if(E){this.__dq(E,F,ba,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__dG=null;
},defer:function(bD){qx.event.Registration.addHandler(bD);
var bE=bD.FOCUSABLE_ELEMENTS;

for(var bF in bE){bE[bF.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var n="qx.client",m="character",l="EndToEnd",k="input",j="textarea",i="StartToStart",h='character',g="qx.bom.Selection",f="button",e="#text",d="body";
qx.Class.define(g,{statics:{getSelectionObject:qx.core.Variant.select(n,{"mshtml":function(N){return N.selection;
},"default":function(M){return qx.dom.Node.getWindow(M).getSelection();
}}),get:qx.core.Variant.select(n,{"mshtml":function(o){var p=qx.bom.Range.get(qx.dom.Node.getDocument(o));
return p.text;
},"default":function(Q){if(this.__dH(Q)){return Q.value.substring(Q.selectionStart,Q.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(Q)).toString();
}}}),getLength:qx.core.Variant.select(n,{"mshtml":function(bw){var by=this.get(bw);
var bx=qx.util.StringSplit.split(by,/\r\n/);
return by.length-(bx.length-1);
},"opera":function(R){var W,U,S;

if(this.__dH(R)){var V=R.selectionStart;
var T=R.selectionEnd;
W=R.value.substring(V,T);
U=T-V;
}else{W=qx.bom.Selection.get(R);
U=W.length;
}S=qx.util.StringSplit.split(W,/\r\n/);
return U-(S.length-1);
},"default":function(P){if(this.__dH(P)){return P.selectionEnd-P.selectionStart;
}else{return this.get(P).length;
}}}),getStart:qx.core.Variant.select(n,{"mshtml":function(bi){if(this.__dH(bi)){var bn=qx.bom.Range.get();
if(!bi.contains(bn.parentElement())){return -1;
}var bo=qx.bom.Range.get(bi);
var bm=bi.value.length;
bo.moveToBookmark(bn.getBookmark());
bo.moveEnd(h,bm);
return bm-bo.text.length;
}else{var bo=qx.bom.Range.get(bi);
var bk=bo.parentElement();
var bp=qx.bom.Range.get();
bp.moveToElementText(bk);
var bj=qx.bom.Range.get(qx.dom.Node.getBodyElement(bi));
bj.setEndPoint(i,bo);
bj.setEndPoint(l,bp);
if(bp.compareEndPoints(i,bj)==0){return 0;
}var bl;
var bq=0;

while(true){bl=bj.moveStart(m,-1);
if(bp.compareEndPoints(i,bj)==0){break;
}if(bl==0){break;
}else{bq++;
}}return ++bq;
}},"gecko|webkit":function(a){if(this.__dH(a)){return a.selectionStart;
}else{var c=qx.dom.Node.getDocument(a);
var b=this.getSelectionObject(c);
if(b.anchorOffset<b.focusOffset){return b.anchorOffset;
}else{return b.focusOffset;
}}},"default":function(z){if(this.__dH(z)){return z.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(z)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(n,{"mshtml":function(q){if(this.__dH(q)){var v=qx.bom.Range.get();
if(!q.contains(v.parentElement())){return -1;
}var w=qx.bom.Range.get(q);
var u=q.value.length;
w.moveToBookmark(v.getBookmark());
w.moveStart(h,-u);
return w.text.length;
}else{var w=qx.bom.Range.get(q);
var s=w.parentElement();
var x=qx.bom.Range.get();
x.moveToElementText(s);
var u=x.text.length;
var r=qx.bom.Range.get(qx.dom.Node.getBodyElement(q));
r.setEndPoint(l,w);
r.setEndPoint(i,x);
if(x.compareEndPoints(l,r)==0){return u-1;
}var t;
var y=0;

while(true){t=r.moveEnd(m,1);
if(x.compareEndPoints(l,r)==0){break;
}if(t==0){break;
}else{y++;
}}return u-(++y);
}},"gecko|webkit":function(X){if(this.__dH(X)){return X.selectionEnd;
}else{var ba=qx.dom.Node.getDocument(X);
var Y=this.getSelectionObject(ba);
if(Y.focusOffset>Y.anchorOffset){return Y.focusOffset;
}else{return Y.anchorOffset;
}}},"default":function(O){if(this.__dH(O)){return O.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(O)).focusOffset;
}}}),__dH:function(A){return qx.dom.Node.isElement(A)&&(A.nodeName.toLowerCase()==k||A.nodeName.toLowerCase()==j);
},set:qx.core.Variant.select(n,{"mshtml":function(br,bs,bt){var bu;
if(qx.dom.Node.isDocument(br)){br=br.body;
}
if(qx.dom.Node.isElement(br)||qx.dom.Node.isText(br)){switch(br.nodeName.toLowerCase()){case k:case j:case f:if(bt===undefined){bt=br.value.length;
}
if(bs>=0&&bs<=br.value.length&&bt>=0&&bt<=br.value.length){bu=qx.bom.Range.get(br);
bu.collapse(true);
bu.moveStart(m,bs);
bu.moveEnd(m,bt-bs);
bu.select();
return true;
}break;
case e:if(bt===undefined){bt=br.nodeValue.length;
}
if(bs>=0&&bs<=br.nodeValue.length&&bt>=0&&bt<=br.nodeValue.length){bu=qx.bom.Range.get(qx.dom.Node.getBodyElement(br));
bu.moveToElementText(br.parentNode);
bu.collapse(true);
bu.moveStart(m,bs);
bu.moveEnd(m,bt-bs);
bu.select();
return true;
}break;
default:if(bt===undefined){bt=br.childNodes.length-1;
}if(br.childNodes[bs]&&br.childNodes[bt]){bu=qx.bom.Range.get(qx.dom.Node.getBodyElement(br));
bu.moveToElementText(br.childNodes[bs]);
bu.collapse(true);
var bv=qx.bom.Range.get(qx.dom.Node.getBodyElement(br));
bv.moveToElementText(br.childNodes[bt]);
bu.setEndPoint(l,bv);
bu.select();
return true;
}}}return false;
},"default":function(F,G,H){var L=F.nodeName.toLowerCase();

if(qx.dom.Node.isElement(F)&&(L==k||L==j)){if(H===undefined){H=F.value.length;
}if(G>=0&&G<=F.value.length&&H>=0&&H<=F.value.length){F.focus();
F.select();
F.setSelectionRange(G,H);
return true;
}}else{var J=false;
var K=qx.dom.Node.getWindow(F).getSelection();
var I=qx.bom.Range.get(F);
if(qx.dom.Node.isText(F)){if(H===undefined){H=F.length;
}
if(G>=0&&G<F.length&&H>=0&&H<=F.length){J=true;
}}else if(qx.dom.Node.isElement(F)){if(H===undefined){H=F.childNodes.length-1;
}
if(G>=0&&F.childNodes[G]&&H>=0&&F.childNodes[H]){J=true;
}}else if(qx.dom.Node.isDocument(F)){F=F.body;

if(H===undefined){H=F.childNodes.length-1;
}
if(G>=0&&F.childNodes[G]&&H>=0&&F.childNodes[H]){J=true;
}}
if(J){if(!K.isCollapsed){K.collapseToStart();
}I.setStart(F,G);
if(qx.dom.Node.isText(F)){I.setEnd(F,H);
}else{I.setEndAfter(F.childNodes[H]);
}if(K.rangeCount>0){K.removeAllRanges();
}K.addRange(I);
return true;
}}return false;
}}),setAll:function(bh){return qx.bom.Selection.set(bh,0);
},clear:qx.core.Variant.select(n,{"mshtml":function(B){var C=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(B));
var D=qx.bom.Range.get(B);
var parent=D.parentElement();
var E=qx.bom.Range.get(qx.dom.Node.getDocument(B));
if(parent==E.parentElement()&&parent==B){C.empty();
}},"default":function(bb){var bd=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bb));
var bf=bb.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bb)&&(bf==k||bf==j)){bb.setSelectionRange(0,0);
qx.bom.Element.blur(bb);
}else if(qx.dom.Node.isDocument(bb)||bf==d){bd.collapse(bb.body?bb.body:bb,0);
}else{var be=qx.bom.Range.get(bb);

if(!be.collapsed){var bg;
var bc=be.commonAncestorContainer;
if(qx.dom.Node.isElement(bb)&&qx.dom.Node.isText(bc)){bg=bc.parentNode;
}else{bg=bc;
}
if(bg==bb){bd.collapse(bb,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(p){if(qx.dom.Node.isElement(p)){switch(p.nodeName.toLowerCase()){case d:switch(p.type){case j:case i:case c:case l:case f:case h:case g:return p.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}break;
case e:case b:case l:return p.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}}else{if(p==null){p=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}},"default":function(m){var n=qx.dom.Node.getDocument(m);
var o=qx.bom.Selection.getSelectionObject(n);

if(o.rangeCount>0){return o.getRangeAt(0);
}else{return n.createRange();
}}})}});
})();
(function(){var j="",h="m",g="g",f="^",e="qx.util.StringSplit",d="i",c="$(?!\\s)",b="[object RegExp]",a="y";
qx.Class.define(e,{statics:{split:function(k,l,m){if(Object.prototype.toString.call(l)!==b){return String.prototype.split.call(k,l,m);
}var t=[],n=0,r=(l.ignoreCase?d:j)+(l.multiline?h:j)+(l.sticky?a:j),l=RegExp(l.source,r+g),q,u,o,p,s=/()??/.exec(j)[1]===undefined;
k=k+j;

if(!s){q=RegExp(f+l.source+c,r);
}if(m===undefined||+m<0){m=Infinity;
}else{m=Math.floor(+m);

if(!m){return [];
}}
while(u=l.exec(k)){o=u.index+u[0].length;

if(o>n){t.push(k.slice(n,u.index));
if(!s&&u.length>1){u[0].replace(q,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===undefined){u[i]=undefined;
}}});
}
if(u.length>1&&u.index<k.length){Array.prototype.push.apply(t,u.slice(1));
}p=u[0].length;
n=o;

if(t.length>=m){break;
}}
if(l.lastIndex===u.index){l.lastIndex++;
}}
if(n===k.length){if(p||!l.test(j)){t.push(j);
}}else{t.push(k.slice(n));
}return t.length>m?t.slice(0,m):t;
}}});
})();
(function(){var r="qx.client",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__ug:{},allowCreationWithMarkup:function(D){if(!D){D=window;
}var F=qx.core.ObjectRegistry.toHashCode(D);
var E=qx.bom.Element.__ug;

if(E[F]==undefined){try{D.document.createElement(g);
E[F]=true;
}catch(e){E[F]=false;
}}return qx.bom.Element.__ug[F];
},getHelperElement:function(A){if(!A){A=window;
}var C=qx.core.ObjectRegistry.toHashCode(A);

if(!qx.bom.Element.__dJ[C]){var B=qx.bom.Element.__dJ[C]=A.document.createElement(c);
if(qx.core.Variant.isSet(r,b)){B.style.display=h;
A.document.body.appendChild(B);
}}return qx.bom.Element.__dJ[C];
},__dI:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__dJ:{},create:function(name,s,t){if(!t){t=window;
}
if(!name){throw new Error("The tag name is missing!");
}var v=this.__dI;
var u=p;

for(var x in s){if(v[x]){u+=x+k+s[x]+d;
}}var y;
if(u!=p){if(qx.bom.Element.allowCreationWithMarkup(t)){y=t.document.createElement(m+name+o+u+n);
}else{var w=qx.bom.Element.getHelperElement(t);
w.innerHTML=m+name+o+u+a+name+n;
y=w.firstChild;
}}else{y=t.document.createElement(name);
}
for(var x in s){if(!v[x]){qx.bom.element.Attribute.set(y,x,s[x]);
}}return y;
},empty:function(z){return z.innerHTML=p;
},clone:function(G,H){var K;

if(H||(qx.core.Variant.isSet(r,q)&&!qx.xml.Document.isXmlDocument(G))){var O=qx.event.Registration.getManager(G);
var I=qx.dom.Hierarchy.getDescendants(G);
I.push(G);
}if(qx.core.Variant.isSet(r,q)){for(var i=0,l=I.length;i<l;i++){O.toggleAttachedEvents(I[i],false);
}}var K=G.cloneNode(true);
if(qx.core.Variant.isSet(r,q)){for(var i=0,l=I.length;i<l;i++){O.toggleAttachedEvents(I[i],true);
}}if(H===true){var R=qx.dom.Hierarchy.getDescendants(K);
R.push(K);
var J,M,Q,L;

for(var i=0,P=I.length;i<P;i++){Q=I[i];
J=O.serializeListeners(Q);

if(J.length>0){M=R[i];

for(var j=0,N=J.length;j<N;j++){L=J[j];
O.addListener(M,L.type,L.handler,L.self,L.capture);
}}}}return K;
}}});
})();
(function(){var j="",i="undefined",h="qx.client",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__dK:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(G){var H=[];
var J=this.__dK.runtime;

for(var I in G){if(!J[I]){H.push(I,t,G[I],y);
}}return H.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(C,name){var E=this.__dK;
var D;
name=E.names[name]||name;
if(E.original[name]){D=C.getAttribute(name,2);
}else if(E.property[name]){D=C[name];

if(typeof E.propertyDefault[name]!==i&&D==E.propertyDefault[name]){if(typeof E.bools[name]===i){return null;
}else{return D;
}}}else{D=C.getAttribute(name);
}if(E.bools[name]){return !!D;
}return D;
},"default":function(z,name){var B=this.__dK;
var A;
name=B.names[name]||name;
if(B.property[name]){A=z[name];

if(typeof B.propertyDefault[name]!==i&&A==B.propertyDefault[name]){if(typeof B.bools[name]===i){return null;
}else{return A;
}}}else{A=z.getAttribute(name);
}if(B.bools[name]){return !!A;
}return A;
}}),set:function(K,name,L){var M=this.__dK;
name=M.names[name]||name;
if(M.bools[name]){L=!!L;
}if(M.property[name]&&(!(K[name]===undefined)||M.qxProperties[name])){if(L==null){if(M.removeableProperties[name]){K.removeAttribute(name);
return;
}else if(typeof M.propertyDefault[name]!==i){L=M.propertyDefault[name];
}}K[name]=L;
}else{if(L===true){K.setAttribute(name,name);
}else if(L===false||L===null){K.removeAttribute(name);
}else{K.setAttribute(name,L);
}}},reset:function(F,name){this.set(F,name,null);
}}});
})();
(function(){var r="qx.client",q="",p="mshtml",o="'",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="MSXML2.DOMDocument.3.0",h='<\?xml version="1.0" encoding="utf-8"?>\n<',g="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",f=" xmlns='",e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(G){if(G.nodeType===9){return G.documentElement.nodeName!==d;
}else if(G.ownerDocument){return this.isXmlDocument(G.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(r,{"mshtml":function(s,t){var u=new ActiveXObject(this.DOMDOC);
u.setProperty(n,b);

if(t){var v=h;
v+=t;

if(s){v+=f+s+o;
}v+=k;
u.loadXML(v);
}return u;
},"default":function(z,A){return document.implementation.createDocument(z||q,A||q,null);
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(B){var C=qx.xml.Document.create();
C.loadXML(B);
return C;
},"default":function(w){var x=new DOMParser();
return x.parseFromString(w,e);
}})},defer:function(D){if(qx.core.Variant.isSet(r,p)){var E=[a,j];
var F=[c,g];

for(var i=0,l=E.length;i<l;i++){try{new ActiveXObject(E[i]);
new ActiveXObject(F[i]);
}catch(y){continue;
}D.DOMDOC=E[i];
D.XMLHTTP=F[i];
break;
}}}});
})();
(function(){var l="qx.dom.Hierarchy",k="previousSibling",j="*",i="nextSibling",h="qx.client",g="parentNode";
qx.Class.define(l,{statics:{getNodeIndex:function(H){var I=0;

while(H&&(H=H.previousSibling)){I++;
}return I;
},getElementIndex:function(C){var D=0;
var E=qx.dom.Node.ELEMENT;

while(C&&(C=C.previousSibling)){if(C.nodeType==E){D++;
}}return D;
},getNextElementSibling:function(A){var B=qx.dom.Node.ELEMENT;

while(A&&(A=A.nextSibling)&&A.nodeType!=B){continue;
}return A||null;
},getPreviousElementSibling:function(s){var t=qx.dom.Node.ELEMENT;

while(s&&(s=s.previousSibling)&&s.nodeType!=t){continue;
}return s||null;
},contains:qx.core.Variant.select(h,{"webkit|mshtml|opera":function(m,n){var Node=qx.dom.Node;

if(Node.isDocument(m)){var o=Node.getDocument(n);
return m&&o==m;
}else if(Node.isDocument(n)){return false;
}else{return m.contains(n);
}},"gecko":function(e,f){return !!(e.compareDocumentPosition(f)&16);
},"default":function(P,Q){while(Q){if(P==Q){return true;
}Q=Q.parentNode;
}return false;
}}),isDescendantOf:function(a,b){return this.contains(b,a);
},isRendered:function(F){if(!F.parentNode||!F.offsetParent){return false;
}var G=F.ownerDocument||F.document;
return this.contains(G.body,F);
},closest:function(M,N){var O=qx.bom.Selector;

while(M&&M.ownerDocument){if(O.matches(N,[M]).length>0){return M;
}M=M.parentNode;
}},getCommonParent:function(w,x){if(w===x){return w;
}
while(w&&w.nodeType==1){if(this.contains(w,x)){return w;
}w=w.parentNode;
}return null;
},getAncestors:function(r){return this.__dL(r,g);
},getChildElements:function(c){c=c.firstChild;

if(!c){return [];
}var d=this.getNextSiblings(c);

if(c.nodeType===1){d.unshift(c);
}return d;
},getDescendants:function(p){return qx.lang.Array.fromCollection(p.getElementsByTagName(j));
},getFirstDescendant:function(v){v=v.firstChild;

while(v&&v.nodeType!=1){v=v.nextSibling;
}return v;
},getLastDescendant:function(u){u=u.lastChild;

while(u&&u.nodeType!=1){u=u.previousSibling;
}return u;
},getPreviousSiblings:function(y){return this.__dL(y,k);
},getNextSiblings:function(z){return this.__dL(z,i);
},__dL:function(J,K){var L=[];

while(J=J[K]){if(J.nodeType==1){L.push(J);
}}return L;
},getSiblings:function(q){return this.getPreviousSiblings(q).reverse().concat(this.getNextSiblings(q));
}}});
})();
(function(){var W="qx.bom.Selector";
qx.Class.define(W,{statics:{query:null,matches:null}});
(function(){var by=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,bF=0,bB=Object.prototype.toString,bz=false,bH=true;
[0,0].sort(function(){bH=false;
return 0;
});
var bv=function(cj,ck,cl,cm){cl=cl||[];
ck=ck||document;
var cv=ck;

if(ck.nodeType!==1&&ck.nodeType!==9){return [];
}
if(!cj||typeof cj!=="string"){return cl;
}var cs=[],m,cp,cn,cr,cq=true,co=bv.isXML(ck),cu=cj,ct,cx,cw,i;
do{by.exec("");
m=by.exec(cu);

if(m){cu=m[3];
cs.push(m[1]);

if(m[2]){cr=m[3];
break;
}}}while(m);

if(cs.length>1&&bA.exec(cj)){if(cs.length===2&&bx.relative[cs[0]]){cp=bw(cs[0]+cs[1],ck);
}else{cp=bx.relative[cs[0]]?[ck]:bv(cs.shift(),ck);

while(cs.length){cj=cs.shift();

if(bx.relative[cj]){cj+=cs.shift();
}cp=bw(cj,cp);
}}}else{if(!cm&&cs.length>1&&ck.nodeType===9&&!co&&bx.match.ID.test(cs[0])&&!bx.match.ID.test(cs[cs.length-1])){ct=bv.find(cs.shift(),ck,co);
ck=ct.expr?bv.filter(ct.expr,ct.set)[0]:ct.set[0];
}
if(ck){ct=cm?
{expr:cs.pop(),set:bu(cm)}:bv.find(cs.pop(),cs.length===1&&(cs[0]==="~"||cs[0]==="+")&&ck.parentNode?ck.parentNode:ck,co);
cp=ct.expr?bv.filter(ct.expr,ct.set):ct.set;

if(cs.length>0){cn=bu(cp);
}else{cq=false;
}
while(cs.length){cx=cs.pop();
cw=cx;

if(!bx.relative[cx]){cx="";
}else{cw=cs.pop();
}
if(cw==null){cw=ck;
}bx.relative[cx](cn,cw,co);
}}else{cn=cs=[];
}}
if(!cn){cn=cp;
}
if(!cn){bv.error(cx||cj);
}
if(bB.call(cn)==="[object Array]"){if(!cq){cl.push.apply(cl,cn);
}else if(ck&&ck.nodeType===1){for(i=0;cn[i]!=null;i++){if(cn[i]&&(cn[i]===true||cn[i].nodeType===1&&bv.contains(ck,cn[i]))){cl.push(cp[i]);
}}}else{for(i=0;cn[i]!=null;i++){if(cn[i]&&cn[i].nodeType===1){cl.push(cp[i]);
}}}}else{bu(cn,cl);
}
if(cr){bv(cr,cv,cl,cm);
bv.uniqueSort(cl);
}return cl;
};
bv.uniqueSort=function(cP){if(bC){bz=bH;
cP.sort(bC);

if(bz){for(var i=1;i<cP.length;i++){if(cP[i]===cP[i-1]){cP.splice(i--,1);
}}}}return cP;
};
bv.matches=function(ec,ed){return bv(ec,null,null,ed);
};
bv.find=function(K,L,M){var N;

if(!K){return [];
}
for(var i=0,l=bx.order.length;i<l;i++){var O=bx.order[i],P;

if((P=bx.leftMatch[O].exec(K))){var Q=P[1];
P.splice(1,1);

if(Q.substr(Q.length-1)!=="\\"){P[1]=(P[1]||"").replace(/\\/g,"");
N=bx.find[O](P,L,M);

if(N!=null){K=K.replace(bx.match[O],"");
break;
}}}}
if(!N){N=L.getElementsByTagName("*");
}return {set:N,expr:K};
};
bv.filter=function(q,r,s,t){var u=q,z=[],v=r,E,D,w=r&&r[0]&&bv.isXML(r[0]);

while(q&&r.length){for(var C in bx.filter){if((E=bx.leftMatch[C].exec(q))!=null&&E[2]){var x=bx.filter[C],B,y,F=E[1];
D=false;
E.splice(1,1);

if(F.substr(F.length-1)==="\\"){continue;
}
if(v===z){z=[];
}
if(bx.preFilter[C]){E=bx.preFilter[C](E,v,s,z,t,w);

if(!E){D=B=true;
}else if(E===true){continue;
}}
if(E){for(var i=0;(y=v[i])!=null;i++){if(y){B=x(y,E,i,v);
var A=t^!!B;

if(s&&B!=null){if(A){D=true;
}else{v[i]=false;
}}else if(A){z.push(y);
D=true;
}}}}
if(B!==undefined){if(!s){v=z;
}q=q.replace(bx.match[C],"");

if(!D){return [];
}break;
}}}if(q===u){if(D==null){bv.error(q);
}else{break;
}}u=q;
}return v;
};
bv.error=function(cV){throw "Syntax error, unrecognized expression: "+cV;
};
var bx=bv.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(bJ){return bJ.getAttribute("href");
}},relative:{"+":function(dJ,dK){var dL=typeof dK==="string",dN=dL&&!/\W/.test(dK),dO=dL&&!dN;

if(dN){dK=dK.toLowerCase();
}
for(var i=0,l=dJ.length,dM;i<l;i++){if((dM=dJ[i])){while((dM=dM.previousSibling)&&dM.nodeType!==1){}dJ[i]=dO||dM&&dM.nodeName.toLowerCase()===dK?dM||false:dM===dK;
}}
if(dO){bv.filter(dK,dJ,true);
}},">":function(eP,eQ){var eR=typeof eQ==="string",eS,i=0,l=eP.length;

if(eR&&!/\W/.test(eQ)){eQ=eQ.toLowerCase();

for(;i<l;i++){eS=eP[i];

if(eS){var parent=eS.parentNode;
eP[i]=parent.nodeName.toLowerCase()===eQ?parent:false;
}}}else{for(;i<l;i++){eS=eP[i];

if(eS){eP[i]=eR?eS.parentNode:eS.parentNode===eQ;
}}
if(eR){bv.filter(eQ,eP,true);
}}},"":function(cC,cD,cE){var cF=bF++,cG=bG,cH;

if(typeof cD==="string"&&!/\W/.test(cD)){cD=cD.toLowerCase();
cH=cD;
cG=bI;
}cG("parentNode",cD,cF,cC,cH,cE);
},"~":function(dD,dE,dF){var dG=bF++,dH=bG,dI;

if(typeof dE==="string"&&!/\W/.test(dE)){dE=dE.toLowerCase();
dI=dE;
dH=bI;
}dH("previousSibling",dE,dG,dD,dI,dF);
}},find:{ID:function(eW,eX,eY){if(typeof eX.getElementById!=="undefined"&&!eY){var m=eX.getElementById(eW[1]);
return m?[m]:[];
}},NAME:function(cy,cz){if(typeof cz.getElementsByName!=="undefined"){var cB=[],cA=cz.getElementsByName(cy[1]);

for(var i=0,l=cA.length;i<l;i++){if(cA[i].getAttribute("name")===cy[1]){cB.push(cA[i]);
}}return cB.length===0?null:cB;
}},TAG:function(eG,eH){return eH.getElementsByTagName(eG[1]);
}},preFilter:{CLASS:function(du,dv,dw,dx,dy,dz){du=" "+du[1].replace(/\\/g,"")+" ";

if(dz){return du;
}
for(var i=0,dA;(dA=dv[i])!=null;i++){if(dA){if(dy^(dA.className&&(" "+dA.className+" ").replace(/[\t\n]/g," ").indexOf(du)>=0)){if(!dw){dx.push(dA);
}}else if(dw){dv[i]=false;
}}}return false;
},ID:function(bU){return bU[1].replace(/\\/g,"");
},TAG:function(dP,dQ){return dP[1].toLowerCase();
},CHILD:function(cN){if(cN[1]==="nth"){var cO=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(cN[2]==="even"&&"2n"||cN[2]==="odd"&&"2n+1"||!/\D/.test(cN[2])&&"0n+"+cN[2]||cN[2]);
cN[2]=(cO[1]+(cO[2]||1))-0;
cN[3]=cO[3]-0;
}cN[0]=bF++;
return cN;
},ATTR:function(eJ,eK,eL,eM,eN,eO){var name=eJ[1].replace(/\\/g,"");

if(!eO&&bx.attrMap[name]){eJ[1]=bx.attrMap[name];
}
if(eJ[2]==="~="){eJ[4]=" "+eJ[4]+" ";
}return eJ;
},PSEUDO:function(g,h,k,n,o){if(g[1]==="not"){if((by.exec(g[3])||"").length>1||/^\w/.test(g[3])){g[3]=bv(g[3],null,null,h);
}else{var p=bv.filter(g[3],h,k,true^o);

if(!k){n.push.apply(n,p);
}return false;
}}else if(bx.match.POS.test(g[0])||bx.match.CHILD.test(g[0])){return true;
}return g;
},POS:function(bq){bq.unshift(true);
return bq;
}},filters:{enabled:function(J){return J.disabled===false&&J.type!=="hidden";
},disabled:function(bs){return bs.disabled===true;
},checked:function(dR){return dR.checked===true;
},selected:function(em){em.parentNode.selectedIndex;
return em.selected===true;
},parent:function(I){return !!I.firstChild;
},empty:function(bj){return !bj.firstChild;
},has:function(eh,i,ei){return !!bv(ei[3],eh).length;
},header:function(el){return (/h\d/i).test(el.nodeName);
},text:function(f){return "text"===f.type;
},radio:function(cU){return "radio"===cU.type;
},checkbox:function(eF){return "checkbox"===eF.type;
},file:function(Y){return "file"===Y.type;
},password:function(br){return "password"===br.type;
},submit:function(dp){return "submit"===dp.type;
},image:function(eI){return "image"===eI.type;
},reset:function(ba){return "reset"===ba.type;
},button:function(X){return "button"===X.type||X.nodeName.toLowerCase()==="button";
},input:function(dq){return (/input|select|textarea|button/i).test(dq.nodeName);
}},setFilters:{first:function(bh,i){return i===0;
},last:function(eT,i,eU,eV){return i===eV.length-1;
},even:function(bk,i){return i%2===0;
},odd:function(dr,i){return i%2===1;
},lt:function(ej,i,ek){return i<ek[3]-0;
},gt:function(c,i,d){return i>d[3]-0;
},nth:function(cI,i,cJ){return cJ[3]-0===i;
},eq:function(cL,i,cM){return cM[3]-0===i;
}},filter:{PSEUDO:function(bM,bN,i,bO){var name=bN[1],bP=bx.filters[name];

if(bP){return bP(bM,i,bN,bO);
}else if(name==="contains"){return (bM.textContent||bM.innerText||bv.getText([bM])||"").indexOf(bN[3])>=0;
}else if(name==="not"){var bQ=bN[3];

for(var j=0,l=bQ.length;j<l;j++){if(bQ[j]===bM){return false;
}}return true;
}else{bv.error("Syntax error, unrecognized expression: "+name);
}},CHILD:function(df,dg){var dm=dg[1],dh=df;

switch(dm){case 'only':case 'first':while((dh=dh.previousSibling)){if(dh.nodeType===1){return false;
}}
if(dm==="first"){return true;
}dh=df;
case 'last':while((dh=dh.nextSibling)){if(dh.nodeType===1){return false;
}}return true;
case 'nth':var dn=dg[2],dj=dg[3];

if(dn===1&&dj===0){return true;
}var dl=dg[0],parent=df.parentNode;

if(parent&&(parent.sizcache!==dl||!df.nodeIndex)){var di=0;

for(dh=parent.firstChild;dh;dh=dh.nextSibling){if(dh.nodeType===1){dh.nodeIndex=++di;
}}parent.sizcache=dl;
}var dk=df.nodeIndex-dj;

if(dn===0){return dk===0;
}else{return (dk%dn===0&&dk/dn>=0);
}}},ID:function(dB,dC){return dB.nodeType===1&&dB.getAttribute("id")===dC;
},TAG:function(bo,bp){return (bp==="*"&&bo.nodeType===1)||bo.nodeName.toLowerCase()===bp;
},CLASS:function(ds,dt){return (" "+(ds.className||ds.getAttribute("class"))+" ").indexOf(dt)>-1;
},ATTR:function(bb,bc){var name=bc[1],bg=bx.attrHandle[name]?bx.attrHandle[name](bb):bb[name]!=null?bb[name]:bb.getAttribute(name),bf=bg+"",be=bc[2],bd=bc[4];
return bg==null?be==="!=":be==="="?bf===bd:be==="*="?bf.indexOf(bd)>=0:be==="~="?(" "+bf+" ").indexOf(bd)>=0:!bd?bf&&bg!==false:be==="!="?bf!==bd:be==="^="?bf.indexOf(bd)===0:be==="$="?bf.substr(bf.length-bd.length)===bd:be==="|="?bf===bd||bf.substr(0,bd.length+1)===bd+"-":false;
},POS:function(eB,eC,i,eD){var name=eC[2],eE=bx.setFilters[name];

if(eE){return eE(eB,i,eC,eD);
}}}};
var bA=bx.match.POS,bt=function(R,S){return "\\"+(S-0+1);
};

for(var bE in bx.match){bx.match[bE]=new RegExp(bx.match[bE].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
bx.leftMatch[bE]=new RegExp(/(^(?:.|\r|\n)*?)/.source+bx.match[bE].source.replace(/\\(\d+)/g,bt));
}var bu=function(ez,eA){ez=Array.prototype.slice.call(ez,0);

if(eA){eA.push.apply(eA,ez);
return eA;
}return ez;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){bu=function(ew,ex){var ey=ex||[],i=0;

if(bB.call(ew)==="[object Array]"){Array.prototype.push.apply(ey,ew);
}else{if(typeof ew.length==="number"){for(var l=ew.length;i<l;i++){ey.push(ew[i]);
}}else{for(;ew[i];i++){ey.push(ew[i]);
}}}return ey;
};
}var bC;

if(document.documentElement.compareDocumentPosition){bC=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){bz=true;
}return a.compareDocumentPosition?-1:1;
}var cK=a.compareDocumentPosition(b)&4?-1:a===b?0:1;

if(cK===0){bz=true;
}return cK;
};
}else if("sourceIndex" in document.documentElement){bC=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){bz=true;
}return a.sourceIndex?-1:1;
}var bi=a.sourceIndex-b.sourceIndex;

if(bi===0){bz=true;
}return bi;
};
}else if(document.createRange){bC=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){bz=true;
}return a.ownerDocument?-1:1;
}var ef=a.ownerDocument.createRange(),eg=b.ownerDocument.createRange();
ef.setStart(a,0);
ef.setEnd(a,0);
eg.setStart(b,0);
eg.setEnd(b,0);
var ee=ef.compareBoundaryPoints(Range.START_TO_END,eg);

if(ee===0){bz=true;
}return ee;
};
}bv.getText=function(bX){var ca="",bY;

for(var i=0;bX[i];i++){bY=bX[i];
if(bY.nodeType===3||bY.nodeType===4){ca+=bY.nodeValue;
}else if(bY.nodeType!==8){ca+=bv.getText(bY.childNodes);
}}return ca;
};
(function(){var eb=document.createElement("div"),ea="script"+(new Date()).getTime();
eb.innerHTML="<a name='"+ea+"'/>";
var dY=document.documentElement;
dY.insertBefore(eb,dY.firstChild);
if(document.getElementById(ea)){bx.find.ID=function(cR,cS,cT){if(typeof cS.getElementById!=="undefined"&&!cT){var m=cS.getElementById(cR[1]);
return m?m.id===cR[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===cR[1]?[m]:undefined:[];
}};
bx.filter.ID=function(T,U){var V=typeof T.getAttributeNode!=="undefined"&&T.getAttributeNode("id");
return T.nodeType===1&&V&&V.nodeValue===U;
};
}dY.removeChild(eb);
dY=eb=null;
})();
(function(){var cQ=document.createElement("div");
cQ.appendChild(document.createComment(""));
if(cQ.getElementsByTagName("*").length>0){bx.find.TAG=function(en,eo){var eq=eo.getElementsByTagName(en[1]);
if(en[1]==="*"){var ep=[];

for(var i=0;eq[i];i++){if(eq[i].nodeType===1){ep.push(eq[i]);
}}eq=ep;
}return eq;
};
}cQ.innerHTML="<a href='#'></a>";

if(cQ.firstChild&&typeof cQ.firstChild.getAttribute!=="undefined"&&cQ.firstChild.getAttribute("href")!=="#"){bx.attrHandle.href=function(fa){return fa.getAttribute("href",2);
};
}cQ=null;
})();

if(document.querySelectorAll){(function(){var bm=bv,bl=document.createElement("div");
bl.innerHTML="<p class='TEST'></p>";
if(bl.querySelectorAll&&bl.querySelectorAll(".TEST").length===0){return;
}bv=function(es,et,eu,ev){et=et||document;
if(!ev&&et.nodeType===9&&!bv.isXML(et)){try{return bu(et.querySelectorAll(es),eu);
}catch(e){}}return bm(es,et,eu,ev);
};

for(var bn in bm){bv[bn]=bm[bn];
}bl=null;
})();
}(function(){var er=document.createElement("div");
er.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!er.getElementsByClassName||er.getElementsByClassName("e").length===0){return;
}er.lastChild.className="e";

if(er.getElementsByClassName("e").length===1){return;
}bx.order.splice(1,0,"CLASS");
bx.find.CLASS=function(bR,bS,bT){if(typeof bS.getElementsByClassName!=="undefined"&&!bT){return bS.getElementsByClassName(bR[1]);
}};
er=null;
})();
function bI(cW,cX,cY,da,db,dc){for(var i=0,l=da.length;i<l;i++){var de=da[i];

if(de){de=de[cW];
var dd=false;

while(de){if(de.sizcache===cY){dd=da[de.sizset];
break;
}
if(de.nodeType===1&&!dc){de.sizcache=cY;
de.sizset=i;
}
if(de.nodeName.toLowerCase()===cX){dd=de;
break;
}de=de[cW];
}da[i]=dd;
}}}function bG(cb,cc,cd,ce,cf,cg){for(var i=0,l=ce.length;i<l;i++){var ci=ce[i];

if(ci){ci=ci[cb];
var ch=false;

while(ci){if(ci.sizcache===cd){ch=ce[ci.sizset];
break;
}
if(ci.nodeType===1){if(!cg){ci.sizcache=cd;
ci.sizset=i;
}
if(typeof cc!=="string"){if(ci===cc){ch=true;
break;
}}else if(bv.filter(cc,[ci]).length>0){ch=ci;
break;
}}ci=ci[cb];
}ce[i]=ch;
}}}bv.contains=document.compareDocumentPosition?
function(a,b){return !!(a.compareDocumentPosition(b)&16);
}:
function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
bv.isXML=function(bK){var bL=(bK?bK.ownerDocument||bK:0).documentElement;
return bL?bL.nodeName!=="HTML":false;
};
var bw=function(dS,dT){var dV=[],dU="",dX,dW=dT.nodeType?[dT]:dT;
while((dX=bx.match.PSEUDO.exec(dS))){dU+=dX[0];
dS=dS.replace(bx.match.PSEUDO,"");
}dS=bx.relative[dS]?dS+"*":dS;

for(var i=0,l=dW.length;i<l;i++){bv(dS,dW[i],dV);
}return bv.filter(dU,dV);
};
var bD=qx.bom.Selector;
bD.query=function(bV,bW){return bv(bV,bW);
};
bD.matches=function(G,H){return bv(G,null,null,H);
};
})();
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(f,g,h){},unregisterEvent:function(c,d,e){}},defer:function(b){qx.event.Registration.addHandler(b);
}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(l,stop,m){var parent=l.parentNode;
var r=qx.dom.Node.getDocument(l);
var n=r.body;
var z,x,u;
var B,s,C;
var v,D,G;
var E,p,y,o;
var t,F,w;
var q=m===g;
var A=m===c;
stop=stop?stop.parentNode:r;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===n||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===n){x=parent.scrollLeft;
u=x+qx.bom.Viewport.getWidth();
B=qx.bom.Viewport.getWidth();
s=parent.clientWidth;
C=parent.scrollWidth;
v=0;
D=0;
G=0;
}else{z=qx.bom.element.Location.get(parent);
x=z.left;
u=z.right;
B=parent.offsetWidth;
s=parent.clientWidth;
C=parent.scrollWidth;
v=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
D=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
G=B-s-v-D;
}E=qx.bom.element.Location.get(l);
p=E.left;
y=E.right;
o=l.offsetWidth;
t=p-x-v;
F=y-u+D;
w=0;
if(q){w=t;
}else if(A){w=F+G;
}else if(t<0||o>s){w=t;
}else if(F>0){w=F+G;
}parent.scrollLeft+=w;
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===n){break;
}parent=parent.parentNode;
}},intoViewY:function(K,stop,L){var parent=K.parentNode;
var R=qx.dom.Node.getDocument(K);
var M=R.body;
var ba,N,V;
var bc,Y,T;
var P,Q,O;
var be,bf,bb,U;
var X,S,bg;
var bd=L===d;
var W=L===e;
stop=stop?stop.parentNode:R;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===M||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===M){N=parent.scrollTop;
V=N+qx.bom.Viewport.getHeight();
bc=qx.bom.Viewport.getHeight();
Y=parent.clientHeight;
T=parent.scrollHeight;
P=0;
Q=0;
O=0;
}else{ba=qx.bom.element.Location.get(parent);
N=ba.top;
V=ba.bottom;
bc=parent.offsetHeight;
Y=parent.clientHeight;
T=parent.scrollHeight;
P=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
Q=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
O=bc-Y-P-Q;
}be=qx.bom.element.Location.get(K);
bf=be.top;
bb=be.bottom;
U=K.offsetHeight;
X=bf-N-P;
S=bb-V+Q;
bg=0;
if(bd){bg=X;
}else if(W){bg=S+O;
}else if(X<0||U>Y){bg=X;
}else if(S>0){bg=S+O;
}parent.scrollTop+=bg;
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoView:function(H,stop,I,J){this.intoViewX(H,stop,I);
this.intoViewY(H,stop,J);
}}});
})();
(function(){var x="",w="qx.client",v="hidden",u="-moz-scrollbars-none",r="overflow",q=";",p="overflowY",o=":",n="overflowX",m="overflow:",J="none",I="scroll",H="borderLeftStyle",G="borderRightStyle",F="div",E="borderRightWidth",D="overflow-y",C="borderLeftWidth",B="-moz-scrollbars-vertical",A="100px",y="qx.bom.element.Overflow",z="overflow-x";
qx.Class.define(y,{statics:{__dM:null,getScrollbarWidth:function(){if(this.__dM!==null){return this.__dM;
}var bL=qx.bom.element.Style;
var bN=function(bA,bB){return parseInt(bL.get(bA,bB))||0;
};
var bO=function(l){return (bL.get(l,G)==J?0:bN(l,E));
};
var bM=function(bH){return (bL.get(bH,H)==J?0:bN(bH,C));
};
var bQ=qx.core.Variant.select(w,{"mshtml":function(bC){if(bL.get(bC,p)==v||bC.clientWidth==0){return bO(bC);
}return Math.max(0,bC.offsetWidth-bC.clientLeft-bC.clientWidth);
},"default":function(bx){if(bx.clientWidth==0){var by=bL.get(bx,r);
var bz=(by==I||by==B?16:0);
return Math.max(0,bO(bx)+bz);
}return Math.max(0,(bx.offsetWidth-bx.clientWidth-bM(bx)));
}});
var bP=function(X){return bQ(X)-bO(X);
};
var t=document.createElement(F);
var s=t.style;
s.height=s.width=A;
s.overflow=I;
document.body.appendChild(t);
var c=bP(t);
this.__dM=c?c:16;
document.body.removeChild(t);
return this.__dM;
},_compile:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bt,bu){if(bu==v){bu=u;
}return m+bu+q;
}:
function(O,P){return O+o+P+q;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ce,cf){return m+cf+q;
}:
function(V,W){return V+o+W+q;
},"default":function(bT,bU){return bT+o+bU+q;
}}),compileX:function(Q){return this._compile(z,Q);
},compileY:function(e){return this._compile(D,e);
},getX:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(cb,cc){var cd=qx.bom.element.Style.get(cb,r,cc,false);

if(cd===u){cd=v;
}return cd;
}:
function(Y,ba){return qx.bom.element.Style.get(Y,n,ba,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(f,g){return qx.bom.element.Style.get(f,r,g,false);
}:
function(bo,bp){return qx.bom.element.Style.get(bo,n,bp,false);
},"default":function(a,b){return qx.bom.element.Style.get(a,n,b,false);
}}),setX:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bY,ca){if(ca==v){ca=u;
}bY.style.overflow=ca;
}:
function(bq,br){bq.style.overflowX=br;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(j,k){j.style.overflow=k;
}:
function(bh,bi){bh.style.overflowX=bi;
},"default":function(bR,bS){bR.style.overflowX=bS;
}}),resetX:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bV){bV.style.overflow=x;
}:
function(bK){bK.style.overflowX=x;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(R,S){R.style.overflow=x;
}:
function(bv,bw){bv.style.overflowX=x;
},"default":function(d){d.style.overflowX=x;
}}),getY:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bl,bm){var bn=qx.bom.element.Style.get(bl,r,bm,false);

if(bn===u){bn=v;
}return bn;
}:
function(bD,bE){return qx.bom.element.Style.get(bD,p,bE,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(K,L){return qx.bom.element.Style.get(K,r,L,false);
}:
function(bd,be){return qx.bom.element.Style.get(bd,p,be,false);
},"default":function(h,i){return qx.bom.element.Style.get(h,p,i,false);
}}),setY:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bb,bc){if(bc===v){bc=u;
}bb.style.overflow=bc;
}:
function(bF,bG){bF.style.overflowY=bG;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(T,U){T.style.overflow=U;
}:
function(bj,bk){bj.style.overflowY=bk;
},"default":function(bI,bJ){bI.style.overflowY=bJ;
}}),resetY:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(M){M.style.overflow=x;
}:
function(N){N.style.overflowY=x;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bf,bg){bf.style.overflow=x;
}:
function(bW,bX){bW.style.overflowY=x;
},"default":function(bs){bs.style.overflowY=x;
}})}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(o){if(!o){return k;
}var t=o.left;
var top=o.top;
var s=o.width;
var r=o.height;
var p,q;

if(t==null){p=(s==null?n:s+m);
t=n;
}else{p=(s==null?n:t+s+m);
t=t+m;
}
if(top==null){q=(r==null?n:r+m);
top=n;
}else{q=(r==null?n:top+r+m);
top=top+m;
}return d+top+l+p+l+q+l+t+i;
},get:function(u,v){var x=qx.bom.element.Style.get(u,c,v,false);
var C,top,A,z;
var w,y;

if(typeof x===e&&x!==n&&x!==h){x=qx.lang.String.trim(x);
if(/\((.*)\)/.test(x)){var B=RegExp.$1.split(l);
top=qx.lang.String.trim(B[0]);
w=qx.lang.String.trim(B[1]);
y=qx.lang.String.trim(B[2]);
C=qx.lang.String.trim(B[3]);
if(C===n){C=null;
}
if(top===n){top=null;
}
if(w===n){w=null;
}
if(y===n){y=null;
}if(top!=null){top=parseInt(top,10);
}
if(w!=null){w=parseInt(w,10);
}
if(y!=null){y=parseInt(y,10);
}
if(C!=null){C=parseInt(C,10);
}if(w!=null&&C!=null){A=w-C;
}else if(w!=null){A=w;
}
if(y!=null&&top!=null){z=y-top;
}else if(y!=null){z=y;
}}else{throw new Error("Could not parse clip string: "+x);
}}return {left:C||null,top:top||null,width:A||null,height:z||null};
},set:function(E,F){if(!F){E.style.clip=a;
return;
}var K=F.left;
var top=F.top;
var J=F.width;
var I=F.height;
var G,H;

if(K==null){G=(J==null?n:J+m);
K=n;
}else{G=(J==null?n:K+J+m);
K=K+m;
}
if(top==null){H=(I==null?n:I+m);
top=n;
}else{H=(I==null?n:top+I+m);
top=top+m;
}E.style.clip=j+top+l+G+l+H+l+K+g;
},reset:function(D){D.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__dN:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(a){return g+(this.__dN[a]||a)+e;
},get:function(p,q){return qx.bom.element.Style.get(p,c,q,false);
},set:function(n,o){n.style.cursor=this.__dN[o]||o;
},reset:function(m){m.style.cursor=h;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="filter",i="opacity:",h="opacity",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{compile:qx.core.Variant.select(l,{"mshtml":function(J){if(J>=1){return m;
}
if(J<0.00001){J=0;
}return d+(J*100)+f;
},"gecko":function(D){if(D==1){D=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return b+D+k;
}else{return i+D+k;
}},"default":function(y){if(y==1){return m;
}return i+y+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(t,u){var v=qx.bom.element.Style.get(t,j,qx.bom.element.Style.COMPUTED_MODE,false);
if(u>=1){t.style.filter=v.replace(/alpha\([^\)]*\)/gi,m);
return;
}
if(u<0.00001){u=0;
}if(!t.currentStyle||!t.currentStyle.hasLayout){t.style.zoom=1;
}t.style.filter=v.replace(/alpha\([^\)]*\)/gi,m)+c+u*100+e;
},"gecko":function(n,o){if(o==1){o=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){n.style.MozOpacity=o;
}else{n.style.opacity=o;
}},"default":function(w,x){if(x==1){x=m;
}w.style.opacity=x;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(H){var I=qx.bom.element.Style.get(H,j,qx.bom.element.Style.COMPUTED_MODE,false);
H.style.filter=I.replace(/alpha\([^\)]*\)/gi,m);
},"gecko":function(p){if(qx.bom.client.Engine.VERSION<1.7){p.style.MozOpacity=m;
}else{p.style.opacity=m;
}},"default":function(K){K.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(z,A){var B=qx.bom.element.Style.get(z,j,A,false);

if(B){var C=B.match(/alpha\(opacity=(.*)\)/);

if(C&&C[1]){return parseFloat(C[1])/100;
}}return 1.0;
},"gecko":function(E,F){var G=qx.bom.element.Style.get(E,qx.bom.client.Engine.VERSION<1.7?g:h,F,false);

if(G==0.999999){G=1.0;
}
if(G!=null){return parseFloat(G);
}return 1.0;
},"default":function(q,r){var s=qx.bom.element.Style.get(q,h,r,false);

if(s!=null){return parseFloat(s);
}return 1.0;
}})}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__dO:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__dP:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__dQ:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dR:function(r){var s=this.__dQ;
return s.tags[r.tagName.toLowerCase()]||s.types[r.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(B){{};
},"default":function(u){var w=this.__dP;
var v=p;

if(w){for(var i=0,l=w.length;i<l;i++){v+=w[i]+m+u+c;
}}return v;
}}),get:qx.core.Variant.select(q,{"mshtml":function(t){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(t))){if(!this.__dR(t)){return d;
}}return k;
},"default":function(y){var A=this.__dO;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==p){return z;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(C,D){{};
},"default":function(E,F){var G=this.__dO;

if(G){for(var i=0,l=G.length;i<l;i++){E.style[G[i]]=F;
}}}}),reset:function(x){this.set(x,p);
}}});
})();
(function(){var u="",t="qx.client",s="userSelect",r="style",q="MozUserModify",p="px",o="float",n="borderImage",m="styleFloat",k="appearance",P="pixelHeight",O='Ms',N=":",M="cssFloat",L="pixelTop",K="pixelLeft",J='O',I="textOverflow",H="qx.bom.element.Style",G='Khtml',B='string',C="pixelRight",z='Moz',A="pixelWidth",x="pixelBottom",y="transition",v=";",w="transform",D="userModify",E='Webkit',F="WebkitUserModify";
qx.Class.define(H,{statics:{__dS:function(){var a=[k,s,I,n,y,w];
var e={};
var b=document.documentElement.style;
var f=[z,E,G,J,O];

for(var i=0,l=a.length;i<l;i++){var g=a[i];
var c=g;

if(b[g]){e[c]=g;
continue;
}g=qx.lang.String.firstUp(g);

for(var j=0,h=f.length;j<h;j++){var d=f[j]+g;

if(typeof b[d]==B){e[c]=d;
break;
}}}this.__dT=e;
this.__dT[D]=qx.core.Variant.select(t,{"gecko":q,"webkit":F,"default":s});
this.__dU={};

for(var c in e){this.__dU[c]=this.__dY(e[c]);
}this.__dT[o]=qx.core.Variant.select(t,{"mshtml":m,"default":M});
},__dV:{width:A,height:P,left:K,right:C,top:L,bottom:x},__dW:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(bB){var bD=[];
var bF=this.__dW;
var bE=this.__dU;
var name,bC;

for(name in bB){bC=bB[name];

if(bC==null){continue;
}name=bE[name]||name;
if(bF[name]){bD.push(bF[name].compile(bC));
}else{bD.push(this.__dY(name),N,bC,v);
}}return bD.join(u);
},__dX:{},__dY:function(br){var bs=this.__dX;
var bt=bs[br];

if(!bt){bt=bs[br]=qx.lang.String.hyphenate(br);
}return bt;
},setCss:qx.core.Variant.select(t,{"mshtml":function(bu,bv){bu.style.cssText=bv;
},"default":function(bx,by){bx.setAttribute(r,by);
}}),getCss:qx.core.Variant.select(t,{"mshtml":function(R){return R.style.cssText.toLowerCase();
},"default":function(bq){return bq.getAttribute(r);
}}),isPropertySupported:function(bw){return (this.__dW[bw]||this.__dT[bw]||bw in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(S,name,T,U){{};
name=this.__dT[name]||name;
if(U!==false&&this.__dW[name]){return this.__dW[name].set(S,T);
}else{S.style[name]=T!==null?T:u;
}},setStyles:function(bd,be,bf){{};
var bi=this.__dT;
var bk=this.__dW;
var bg=bd.style;

for(var bj in be){var bh=be[bj];
var name=bi[bj]||bj;

if(bh===undefined){if(bf!==false&&bk[name]){bk[name].reset(bd);
}else{bg[name]=u;
}}else{if(bf!==false&&bk[name]){bk[name].set(bd,bh);
}else{bg[name]=bh!==null?bh:u;
}}}},reset:function(bz,name,bA){name=this.__dT[name]||name;
if(bA!==false&&this.__dW[name]){return this.__dW[name].reset(bz);
}else{bz.style[name]=u;
}},get:qx.core.Variant.select(t,{"mshtml":function(V,name,W,X){name=this.__dT[name]||name;
if(X!==false&&this.__dW[name]){return this.__dW[name].get(V,W);
}if(!V.currentStyle){return V.style[name]||u;
}switch(W){case this.LOCAL_MODE:return V.style[name]||u;
case this.CASCADED_MODE:return V.currentStyle[name]||u;
default:var bc=V.currentStyle[name]||u;
if(/^-?[\.\d]+(px)?$/i.test(bc)){return bc;
}var bb=this.__dV[name];

if(bb){var Y=V.style[name];
V.style[name]=bc||0;
var ba=V.style[bb]+p;
V.style[name]=Y;
return ba;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bc)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bc;
}},"default":function(bl,name,bm,bn){name=this.__dT[name]||name;
if(bn!==false&&this.__dW[name]){return this.__dW[name].get(bl,bm);
}switch(bm){case this.LOCAL_MODE:return bl.style[name]||u;
case this.CASCADED_MODE:if(bl.currentStyle){return bl.currentStyle[name]||u;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bo=qx.dom.Node.getDocument(bl);
var bp=bo.defaultView.getComputedStyle(bl,null);
return bp?bp[name]:u;
}}})},defer:function(Q){Q.__dS();
}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(n){if(qx.bom.client.Engine.VERSION>=8){return (n||window).document.documentMode===5;
}else{return (n||window).document.compatMode!==f;
}},"webkit":function(o){if(document.compatMode===undefined){var p=(o||window).document.createElement(a);
p.style.cssText=e;
return p.style.width===c?true:false;
}else{return (o||window).document.compatMode!==f;
}},"default":function(q){return (q||window).document.compatMode!==f;
}}),isStandardMode:function(m){return !this.isQuirksMode(m);
},getWidth:function(j){var k=(j||window).document;
var l=qx.bom.Viewport.getWidth(j);
var scroll=this.isStandardMode(j)?k.documentElement.scrollWidth:k.body.scrollWidth;
return Math.max(scroll,l);
},getHeight:function(g){var h=(g||window).document;
var i=qx.bom.Viewport.getHeight(g);
var scroll=this.isStandardMode(g)?h.documentElement.scrollHeight:h.body.scrollHeight;
return Math.max(scroll,i);
}}});
})();
(function(){var b="qx.client",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Variant.select(b,{"opera":function(r){if(qx.bom.client.Engine.VERSION<9.5){return (r||window).document.body.clientWidth;
}else{var s=(r||window).document;
return qx.bom.Document.isStandardMode(r)?s.documentElement.clientWidth:s.body.clientWidth;
}},"webkit":function(w){if(qx.bom.client.Engine.VERSION<523.15){return (w||window).innerWidth;
}else{var x=(w||window).document;
return qx.bom.Document.isStandardMode(w)?x.documentElement.clientWidth:x.body.clientWidth;
}},"default":function(p){var q=(p||window).document;
return qx.bom.Document.isStandardMode(p)?q.documentElement.clientWidth:q.body.clientWidth;
}}),getHeight:qx.core.Variant.select(b,{"opera":function(f){if(qx.bom.client.Engine.VERSION<9.5){return (f||window).document.body.clientHeight;
}else{var g=(f||window).document;
return qx.bom.Document.isStandardMode(f)?g.documentElement.clientHeight:g.body.clientHeight;
}},"webkit":function(n){if(qx.bom.client.Engine.VERSION<523.15){return (n||window).innerHeight;
}else{var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientHeight:o.body.clientHeight;
}},"default":function(h){var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientHeight:i.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(b,{"mshtml":function(d){var e=(d||window).document;
return e.documentElement.scrollLeft||e.body.scrollLeft;
},"default":function(v){return (v||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(b,{"mshtml":function(t){var u=(t||window).document;
return u.documentElement.scrollTop||u.body.scrollTop;
},"default":function(m){return (m||window).pageYOffset;
}}),getOrientation:function(j){var k=(j||window).orientation;

if(k==null){k=this.getWidth(j)>this.getHeight(j)?90:0;
}return k;
},isLandscape:function(c){return Math.abs(this.getOrientation(c))==90;
},isPortrait:function(l){return this.getOrientation(l)==0;
}}});
})();
(function(){var bh="borderTopWidth",bg="borderLeftWidth",bf="marginTop",be="marginLeft",bd="scroll",bc="qx.client",bb="border-box",ba="borderBottomWidth",Y="borderRightWidth",X="auto",bw="padding",bv="qx.bom.element.Location",bu="paddingLeft",bt="static",bs="marginBottom",br="visible",bq="BODY",bp="paddingBottom",bo="paddingTop",bn="marginRight",bl="position",bm="margin",bj="overflow",bk="paddingRight",bi="border";
qx.Class.define(bv,{statics:{__ea:function(bx,by){return qx.bom.element.Style.get(bx,by,qx.bom.element.Style.COMPUTED_MODE,false);
},__eb:function(R,S){return parseInt(qx.bom.element.Style.get(R,S,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__ec:function(m){var p=0,top=0;
if(m.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var o=qx.dom.Node.getWindow(m);
p-=qx.bom.Viewport.getScrollLeft(o);
top-=qx.bom.Viewport.getScrollTop(o);
}else{var n=qx.dom.Node.getDocument(m).body;
m=m.parentNode;
while(m&&m!=n){p+=m.scrollLeft;
top+=m.scrollTop;
m=m.parentNode;
}}return {left:p,top:top};
},__ed:qx.core.Variant.select(bc,{"mshtml":function(N){var P=qx.dom.Node.getDocument(N);
var O=P.body;
var Q=0;
var top=0;
Q-=O.clientLeft+P.documentElement.clientLeft;
top-=O.clientTop+P.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){Q+=this.__eb(O,bg);
top+=this.__eb(O,bh);
}return {left:Q,top:top};
},"webkit":function(T){var V=qx.dom.Node.getDocument(T);
var U=V.body;
var W=U.offsetLeft;
var top=U.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){W+=this.__eb(U,bg);
top+=this.__eb(U,bh);
}return {left:W,top:top};
},"gecko":function(K){var L=qx.dom.Node.getDocument(K).body;
var M=L.offsetLeft;
var top=L.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){M+=this.__eb(L,be);
top+=this.__eb(L,bf);
}if(qx.bom.element.BoxSizing.get(L)!==bb){M+=this.__eb(L,bg);
top+=this.__eb(L,bh);
}return {left:M,top:top};
},"default":function(j){var k=qx.dom.Node.getDocument(j).body;
var l=k.offsetLeft;
var top=k.offsetTop;
return {left:l,top:top};
}}),__ee:qx.core.Variant.select(bc,{"mshtml|webkit":function(x){var z=qx.dom.Node.getDocument(x);
if(x.getBoundingClientRect){var A=x.getBoundingClientRect();
var B=A.left;
var top=A.top;
}else{var B=x.offsetLeft;
var top=x.offsetTop;
x=x.offsetParent;
var y=z.body;
while(x&&x!=y){B+=x.offsetLeft;
top+=x.offsetTop;
B+=this.__eb(x,bg);
top+=this.__eb(x,bh);
x=x.offsetParent;
}}return {left:B,top:top};
},"gecko":function(q){if(q.getBoundingClientRect){var t=q.getBoundingClientRect();
var u=Math.round(t.left);
var top=Math.round(t.top);
}else{var u=0;
var top=0;
var r=qx.dom.Node.getDocument(q).body;
var s=qx.bom.element.BoxSizing;

if(s.get(q)!==bb){u-=this.__eb(q,bg);
top-=this.__eb(q,bh);
}
while(q&&q!==r){u+=q.offsetLeft;
top+=q.offsetTop;
if(s.get(q)!==bb){u+=this.__eb(q,bg);
top+=this.__eb(q,bh);
}if(q.parentNode&&this.__ea(q.parentNode,bj)!=br){u+=this.__eb(q.parentNode,bg);
top+=this.__eb(q.parentNode,bh);
}q=q.offsetParent;
}}return {left:u,top:top};
},"default":function(C){var E=0;
var top=0;
var D=qx.dom.Node.getDocument(C).body;
while(C&&C!==D){E+=C.offsetLeft;
top+=C.offsetTop;
C=C.offsetParent;
}return {left:E,top:top};
}}),get:function(a,b){if(a.tagName==bq){var location=this.__ef(a);
var i=location.left;
var top=location.top;
}else{var c=this.__ed(a);
var h=this.__ee(a);
var scroll=this.__ec(a);
var i=h.left+c.left-scroll.left;
var top=h.top+c.top-scroll.top;
}var d=i+a.offsetWidth;
var e=top+a.offsetHeight;

if(b){if(b==bw||b==bd){var f=qx.bom.element.Overflow.getX(a);

if(f==bd||f==X){d+=a.scrollWidth-a.offsetWidth+this.__eb(a,bg)+this.__eb(a,Y);
}var g=qx.bom.element.Overflow.getY(a);

if(g==bd||g==X){e+=a.scrollHeight-a.offsetHeight+this.__eb(a,bh)+this.__eb(a,ba);
}}
switch(b){case bw:i+=this.__eb(a,bu);
top+=this.__eb(a,bo);
d-=this.__eb(a,bk);
e-=this.__eb(a,bp);
case bd:i-=a.scrollLeft;
top-=a.scrollTop;
d-=a.scrollLeft;
e-=a.scrollTop;
case bi:i+=this.__eb(a,bg);
top+=this.__eb(a,bh);
d-=this.__eb(a,Y);
e-=this.__eb(a,ba);
break;
case bm:i-=this.__eb(a,be);
top-=this.__eb(a,bf);
d+=this.__eb(a,bn);
e+=this.__eb(a,bs);
break;
}}return {left:i,top:top,right:d,bottom:e};
},__ef:qx.core.Variant.select(bc,{"default":function(I){var top=I.offsetTop+this.__eb(I,bf);
var J=I.offsetLeft+this.__eb(I,be);
return {left:J,top:top};
},"mshtml":function(bO){var top=bO.offsetTop;
var bP=bO.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__eb(bO,bf);
bP+=this.__eb(bO,be);
}return {left:bP,top:top};
},"gecko":function(bB){var top=bB.offsetTop+this.__eb(bB,bf)+this.__eb(bB,bg);
var bC=bB.offsetLeft+this.__eb(bB,be)+this.__eb(bB,bh);
return {left:bC,top:top};
}}),getLeft:function(G,H){return this.get(G,H).left;
},getTop:function(bM,bN){return this.get(bM,bN).top;
},getRight:function(v,w){return this.get(v,w).right;
},getBottom:function(bz,bA){return this.get(bz,bA).bottom;
},getRelative:function(bG,bH,bI,bJ){var bL=this.get(bG,bI);
var bK=this.get(bH,bJ);
return {left:bL.left-bK.left,top:bL.top-bK.top,right:bL.right-bK.right,bottom:bL.bottom-bK.bottom};
},getPosition:function(F){return this.getRelative(F,this.getOffsetParent(F));
},getOffsetParent:function(bD){var bF=bD.offsetParent||document.body;
var bE=qx.bom.element.Style;

while(bF&&(!/^body|html$/i.test(bF.tagName)&&bE.get(bF,bl)===bt)){bF=bF.offsetParent;
}return bF;
}}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(v){qx.core.Object.call(this);
this.__eg=v;
this.__eh={};
qx.event.handler.Appear.__ei[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__ei:{},refresh:function(){var w=this.__ei;

for(var x in w){w[x].refresh();
}}},members:{__eg:null,__eh:null,canHandleEvent:function(i,j){},registerEvent:function(d,e,f){var g=qx.core.ObjectRegistry.toHashCode(d)+e;
var h=this.__eh;

if(h&&!h[g]){h[g]=d;
d.$$displayed=d.offsetWidth>0;
}},unregisterEvent:function(q,r,s){var t=qx.core.ObjectRegistry.toHashCode(q)+r;
var u=this.__eh;

if(!u){return;
}
if(u[t]){delete u[t];
}},refresh:function(){var o=this.__eh;
var p;

for(var n in o){p=o[n];
var l=p.offsetWidth>0;

if((!!p.$$displayed)!==l){p.$$displayed=l;
var m=qx.event.Registration.createEvent(l?a:b);
this.__eg.dispatchEvent(p,m);
}}}},destruct:function(){this.__eg=this.__eh=null;
delete qx.event.handler.Appear.__ei[this.$$hash];
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__ej:{},remove:function(c){delete this.__ej[c.$$hash];
},add:function(g){var h=this.__ej;

if(h[g.$$hash]){return;
}h[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var d=this.__ej;
var f;

for(var e in d){f=d[e];
delete d[e];
f.syncWidget();
}for(var e in d){return;
}this.__ej={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__ek:{},__el:{},remove:function(f){var g=f.$$hash;
delete this.__el[g];
delete this.__ek[g];
},isVisible:function(e){return this.__el[e.$$hash]||false;
},__em:function(h){var j=this.__el;
var i=h.$$hash;
var k;
if(h.isExcluded()){k=false;
}else{var parent=h.$$parent;

if(parent){k=this.__em(parent);
}else{k=h.isRootWidget();
}}return j[i]=k;
},add:function(c){var d=this.__ek;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var l=this.__ek;
var p=this.__el;
for(var m in l){if(p[m]!=null){l[m].addChildrenToQueue(l);
}}var o={};

for(var m in l){o[m]=p[m];
p[m]=null;
}for(var m in l){var n=l[m];
delete l[m];
if(p[m]==null){this.__em(n);
}if(p[m]&&p[m]!=o[m]){n.checkAppearanceNeeds();
}}this.__ek={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__en:{},remove:function(j){delete this.__en[j.$$hash];
},add:function(g){var h=this.__en;

if(h[g.$$hash]){return;
}h[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(i){return !!this.__en[i.$$hash];
},flush:function(){var f=qx.ui.core.queue.Visibility;
var c=this.__en;
var e;

for(var d in c){e=c[d];
delete c[d];
if(f.isVisible(e)){e.syncAppearance();
}else{e.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__es:{},add:function(c){var d=this.__es;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__es;

for(var g in e){var f=e[g];
delete e[g];
f.dispose();
}for(var g in e){return;
}this.__es={};
}}});
})();
(function(){var bH="get",bG="",bF="[",bE="last",bD="change",bC="]",bB=".",bA="Number",bz="String",by="set",bY="deepBinding",bX="item",bW="reset",bV="' (",bU="Boolean",bT=") to the object '",bS="Integer",bR=" of object ",bQ="qx.data.SingleValueBinding",bP="Binding property ",bN="Binding from '",bO="PositiveNumber",bL="PositiveInteger",bM="Binding does not exist!",bJ=").",bK="Date",bI=" not possible: No event available. ";
qx.Class.define(bQ,{statics:{DEBUG_ON:false,__fn:{},bind:function(p,q,r,s,t){var D=this.__fp(p,q,r,s,t);
var y=q.split(bB);
var v=this.__fw(y);
var C=[];
var z=[];
var A=[];
var w=[];
var x=p;
for(var i=0;i<y.length;i++){if(v[i]!==bG){w.push(bD);
}else{w.push(this.__fr(x,y[i]));
}C[i]=x;
if(i==y.length-1){if(v[i]!==bG){var G=v[i]===bE?x.length-1:v[i];
var u=x.getItem(G);
this.__fv(u,r,s,t,p);
A[i]=this.__fx(x,w[i],r,s,t,v[i]);
}else{if(y[i]!=null&&x[bH+qx.lang.String.firstUp(y[i])]!=null){var u=x[bH+qx.lang.String.firstUp(y[i])]();
this.__fv(u,r,s,t,p);
}A[i]=this.__fx(x,w[i],r,s,t);
}}else{var E={index:i,propertyNames:y,sources:C,listenerIds:A,arrayIndexValues:v,targetObject:r,targetPropertyChain:s,options:t,listeners:z};
var B=qx.lang.Function.bind(this.__fo,this,E);
z.push(B);
A[i]=x.addListener(w[i],B);
}if(x[bH+qx.lang.String.firstUp(y[i])]==null){x=null;
}else if(v[i]!==bG){x=x[bH+qx.lang.String.firstUp(y[i])](v[i]);
}else{x=x[bH+qx.lang.String.firstUp(y[i])]();
}
if(!x){break;
}}var F={type:bY,listenerIds:A,sources:C,targetListenerIds:D.listenerIds,targets:D.targets};
this.__fy(F,p,q,r,s);
return F;
},__fo:function(H){if(H.options&&H.options.onUpdate){H.options.onUpdate(H.sources[H.index],H.targetObject);
}for(var j=H.index+1;j<H.propertyNames.length;j++){var L=H.sources[j];
H.sources[j]=null;

if(!L){continue;
}L.removeListenerById(H.listenerIds[j]);
}var L=H.sources[H.index];
for(var j=H.index+1;j<H.propertyNames.length;j++){if(H.arrayIndexValues[j-1]!==bG){L=L[bH+qx.lang.String.firstUp(H.propertyNames[j-1])](H.arrayIndexValues[j-1]);
}else{L=L[bH+qx.lang.String.firstUp(H.propertyNames[j-1])]();
}H.sources[j]=L;
if(!L){this.__fs(H.targetObject,H.targetPropertyChain);
break;
}if(j==H.propertyNames.length-1){if(qx.Class.implementsInterface(L,qx.data.IListData)){var M=H.arrayIndexValues[j]===bE?L.length-1:H.arrayIndexValues[j];
var J=L.getItem(M);
this.__fv(J,H.targetObject,H.targetPropertyChain,H.options,H.sources[H.index]);
H.listenerIds[j]=this.__fx(L,bD,H.targetObject,H.targetPropertyChain,H.options,H.arrayIndexValues[j]);
}else{if(H.propertyNames[j]!=null&&L[bH+qx.lang.String.firstUp(H.propertyNames[j])]!=null){var J=L[bH+qx.lang.String.firstUp(H.propertyNames[j])]();
this.__fv(J,H.targetObject,H.targetPropertyChain,H.options,H.sources[H.index]);
}var K=this.__fr(L,H.propertyNames[j]);
H.listenerIds[j]=this.__fx(L,K,H.targetObject,H.targetPropertyChain,H.options);
}}else{if(H.listeners[j]==null){var I=qx.lang.Function.bind(this.__fo,this,H);
H.listeners.push(I);
}if(qx.Class.implementsInterface(L,qx.data.IListData)){var K=bD;
}else{var K=this.__fr(L,H.propertyNames[j]);
}H.listenerIds[j]=L.addListener(K,H.listeners[j]);
}}},__fp:function(ca,cb,cc,cd,ce){var ci=cd.split(bB);
var cg=this.__fw(ci);
var cn=[];
var cm=[];
var ck=[];
var cj=[];
var ch=cc;
for(var i=0;i<ci.length-1;i++){if(cg[i]!==bG){cj.push(bD);
}else{try{cj.push(this.__fr(ch,ci[i]));
}catch(e){break;
}}cn[i]=ch;
var cl=function(){for(var j=i+1;j<ci.length-1;j++){var bq=cn[j];
cn[j]=null;

if(!bq){continue;
}bq.removeListenerById(ck[j]);
}var bq=cn[i];
for(var j=i+1;j<ci.length-1;j++){var bo=qx.lang.String.firstUp(ci[j-1]);
if(cg[j-1]!==bG){var br=cg[j-1]===bE?bq.getLength()-1:cg[j-1];
bq=bq[bH+bo](br);
}else{bq=bq[bH+bo]();
}cn[j]=bq;
if(cm[j]==null){cm.push(cl);
}if(qx.Class.implementsInterface(bq,qx.data.IListData)){var bp=bD;
}else{try{var bp=qx.data.SingleValueBinding.__fr(bq,ci[j]);
}catch(e){break;
}}ck[j]=bq.addListener(bp,cm[j]);
}qx.data.SingleValueBinding.__fq(ca,cb,cc,cd,ce);
};
cm.push(cl);
ck[i]=ch.addListener(cj[i],cl);
var cf=qx.lang.String.firstUp(ci[i]);
if(ch[bH+cf]==null){ch=null;
}else if(cg[i]!==bG){ch=ch[bH+cf](cg[i]);
}else{ch=ch[bH+cf]();
}
if(!ch){break;
}}return {listenerIds:ck,targets:cn};
},__fq:function(Q,R,S,T,U){var Y=this.__fu(Q,R);

if(Y!=null){var bb=R.substring(R.lastIndexOf(bB)+1,R.length);
if(bb.charAt(bb.length-1)==bC){var V=bb.substring(bb.lastIndexOf(bF)+1,bb.length-1);
var X=bb.substring(0,bb.lastIndexOf(bF));
var ba=Y[bH+qx.lang.String.firstUp(X)]();

if(V==bE){V=ba.length-1;
}
if(ba!=null){var W=ba.getItem(V);
}}else{var W=Y[bH+qx.lang.String.firstUp(bb)]();
}}W=qx.data.SingleValueBinding.__fz(W,S,T,U);
this.__ft(S,T,W);
},__fr:function(N,O){var P=this.__fA(N,O);
if(P==null){if(qx.Class.supportsEvent(N.constructor,O)){P=O;
}else if(qx.Class.supportsEvent(N.constructor,bD+qx.lang.String.firstUp(O))){P=bD+qx.lang.String.firstUp(O);
}else{throw new qx.core.AssertionError(bP+O+bR+N+bI);
}}return P;
},__fs:function(cH,cI){var cJ=this.__fu(cH,cI);

if(cJ!=null){var cK=cI.substring(cI.lastIndexOf(bB)+1,cI.length);
if(cK.charAt(cK.length-1)==bC){this.__ft(cH,cI,null);
return;
}if(cJ[bW+qx.lang.String.firstUp(cK)]!=undefined){cJ[bW+qx.lang.String.firstUp(cK)]();
}else{cJ[by+qx.lang.String.firstUp(cK)](null);
}}},__ft:function(cV,cW,cX){var dc=this.__fu(cV,cW);

if(dc!=null){var dd=cW.substring(cW.lastIndexOf(bB)+1,cW.length);
if(dd.charAt(dd.length-1)==bC){var cY=dd.substring(dd.lastIndexOf(bF)+1,dd.length-1);
var db=dd.substring(0,dd.lastIndexOf(bF));
var da=dc[bH+qx.lang.String.firstUp(db)]();

if(cY==bE){cY=da.length-1;
}
if(da!=null){da.setItem(cY,cX);
}}else{dc[by+qx.lang.String.firstUp(dd)](cX);
}}},__fu:function(bs,bt){var bw=bt.split(bB);
var bx=bs;
for(var i=0;i<bw.length-1;i++){try{var bv=bw[i];
if(bv.indexOf(bC)==bv.length-1){var bu=bv.substring(bv.indexOf(bF)+1,bv.length-1);
bv=bv.substring(0,bv.indexOf(bF));
}bx=bx[bH+qx.lang.String.firstUp(bv)]();

if(bu!=null){if(bu==bE){bu=bx.length-1;
}bx=bx.getItem(bu);
bu=null;
}}catch(be){return null;
}}return bx;
},__fv:function(cM,cN,cO,cP,cQ){cM=this.__fz(cM,cN,cO,cP);
if(cM===undefined){this.__fs(cN,cO);
}if(cM!==undefined){try{this.__ft(cN,cO,cM);
if(cP&&cP.onUpdate){cP.onUpdate(cQ,cN,cM);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cP&&cP.onSetFail){cP.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cM+" on "+cN+". Error message: "+e);
}}}},__fw:function(d){var f=[];
for(var i=0;i<d.length;i++){var name=d[i];
if(qx.lang.String.endsWith(name,bC)){var g=name.substring(name.indexOf(bF)+1,name.indexOf(bC));
if(name.indexOf(bC)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(g!==bE){if(g==bG||isNaN(parseInt(g))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(bF)!=0){d[i]=name.substring(0,name.indexOf(bF));
f[i]=bG;
f[i+1]=g;
d.splice(i+1,0,bX);
i++;
}else{f[i]=g;
d.splice(i,1,bX);
}}else{f[i]=bG;
}}return f;
},__fx:function(bf,bg,bh,bi,bj,bk){var bl;
{};
var bn=function(l,e){if(l!==bG){if(l===bE){l=bf.length-1;
}var o=bf.getItem(l);
if(o===undefined){qx.data.SingleValueBinding.__fs(bh,bi);
}var m=e.getData().start;
var n=e.getData().end;

if(l<m||l>n){return;
}}else{var o=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+bf+" by "+bg+" to "+bh+" ("+bi+")");
qx.log.Logger.debug("Data before conversion: "+o);
}o=qx.data.SingleValueBinding.__fz(o,bh,bi,bj);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+o);
}try{if(o!==undefined){qx.data.SingleValueBinding.__ft(bh,bi,o);
}else{qx.data.SingleValueBinding.__fs(bh,bi);
}if(bj&&bj.onUpdate){bj.onUpdate(bf,bh,o);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bj&&bj.onSetFail){bj.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+o+" on "+bh+". Error message: "+e);
}}};
if(!bk){bk=bG;
}bn=qx.lang.Function.bind(bn,bf,bk);
var bm=bf.addListener(bg,bn);
return bm;
},__fy:function(cz,cA,cB,cC,cD){if(this.__fn[cA.toHashCode()]===undefined){this.__fn[cA.toHashCode()]=[];
}this.__fn[cA.toHashCode()].push([cz,cA,cB,cC,cD]);
},__fz:function(co,cp,cq,cr){if(cr&&cr.converter){var ct;

if(cp.getModel){ct=cp.getModel();
}return cr.converter(co,ct);
}else{var cv=this.__fu(cp,cq);
var cw=cq.substring(cq.lastIndexOf(bB)+1,cq.length);
if(cv==null){return co;
}var cu=qx.core.property.Util.getPropertyDefinition(cv.constructor,cw);
var cs=cu==null?bG:cu.check;
return this.__fB(co,cs);
}},__fA:function(a,b){var c=qx.core.property.Util.getPropertyDefinition(a.constructor,b);

if(c==null){return null;
}return c.event;
},__fB:function(cE,cF){var cG=qx.lang.Type.getClass(cE);
if((cG==bA||cG==bz)&&(cF==bS||cF==bL)){cE=parseInt(cE);
}if((cG==bU||cG==bA||cG==bK)&&cF==bz){cE=cE+bG;
}if((cG==bA||cG==bz)&&(cF==bA||cF==bO)){cE=parseFloat(cE);
}return cE;
},removeBindingFromObject:function(de,df){if(df.type==bY){for(var i=0;i<df.sources.length;i++){if(df.sources[i]){df.sources[i].removeListenerById(df.listenerIds[i]);
}}for(var i=0;i<df.targets.length;i++){if(df.targets[i]){df.targets[i].removeListenerById(df.targetListenerIds[i]);
}}}else{de.removeListenerById(df);
}var dg=this.__fn[de.toHashCode()];
if(dg!=undefined){for(var i=0;i<dg.length;i++){if(dg[i][0]==df){qx.lang.Array.remove(dg,dg[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cx){{};
var cy=this.__fn[cx.toHashCode()];

if(cy!=undefined){for(var i=cy.length-1;i>=0;i--){this.removeBindingFromObject(cx,cy[i][0]);
}}},getAllBindingsForObject:function(cL){if(this.__fn[cL.toHashCode()]===undefined){this.__fn[cL.toHashCode()]=[];
}return this.__fn[cL.toHashCode()];
},removeAllBindings:function(){for(var bd in this.__fn){var bc=qx.core.ObjectRegistry.fromHashCode(bd);
if(bc==null){delete this.__fn[bd];
continue;
}this.removeAllBindingsForObject(bc);
}this.__fn={};
},getAllBindings:function(){return this.__fn;
},showBindingInLog:function(cR,cS){var cU;
for(var i=0;i<this.__fn[cR.toHashCode()].length;i++){if(this.__fn[cR.toHashCode()][i][0]==cS){cU=this.__fn[cR.toHashCode()][i];
break;
}}
if(cU===undefined){var cT=bM;
}else{var cT=bN+cU[1]+bV+cU[2]+bT+cU[3]+bV+cU[4]+bJ;
}qx.log.Logger.debug(cT);
},showAllBindingsInLog:function(){for(var k in this.__fn){var h=qx.core.ObjectRegistry.fromHashCode(k);

for(var i=0;i<this.__fn[k].length;i++){this.showBindingInLog(h,this.__fn[k][i][0]);
}}}}});
})();
(function(){var f="qx.event.type.Data",e="qx.event.type.Event",d="qx.data.IListData";
qx.Interface.define(d,{events:{"change":f,"changeLength":e},members:{getItem:function(j){},setItem:function(h,i){},splice:function(a,b,c){},contains:function(g){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__fC=qx.dev.StackTrace.getStackTrace();
},members:{__fC:null,getStackTrace:function(){return this.__fC;
}}});
})();
(function(){var j=":",h="qx.client",g="anonymous",f="...",e="qx.dev.StackTrace",d="",c="\n",b="/source/class/",a=".";
qx.Class.define(e,{statics:{getStackTrace:qx.core.Variant.select(h,{"gecko":function(){try{throw new Error();
}catch(ba){var T=this.getStackTraceFromError(ba);
qx.lang.Array.removeAt(T,0);
var R=this.getStackTraceFromCaller(arguments);
var P=R.length>T.length?R:T;

for(var i=0;i<Math.min(R.length,T.length);i++){var Q=R[i];

if(Q.indexOf(g)>=0){continue;
}var X=Q.split(j);

if(X.length!=2){continue;
}var V=X[0];
var O=X[1];
var N=T[i];
var Y=N.split(j);
var U=Y[0];
var M=Y[1];

if(qx.Class.getByName(U)){var S=U;
}else{S=V;
}var W=S+j;

if(O){W+=O+j;
}W+=M;
P[i]=W;
}return P;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var K;

try{K.bar();
}catch(r){var L=this.getStackTraceFromError(r);
qx.lang.Array.removeAt(L,0);
return L;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(h,{"opera":function(bb){return [];
},"default":function(D){var I=[];
var H=qx.lang.Function.getCaller(D);
var E={};

while(H){var F=qx.lang.Function.getName(H);
I.push(F);

try{H=H.caller;
}catch(J){break;
}
if(!H){break;
}var G=qx.core.ObjectRegistry.toHashCode(H);

if(E[G]){I.push(f);
break;
}E[G]=H;
}return I;
}}),getStackTraceFromError:qx.core.Variant.select(h,{"gecko":function(s){if(!s.stack){return [];
}var y=/@(.+):(\d+)$/gm;
var t;
var u=[];

while((t=y.exec(s.stack))!=null){var v=t[1];
var x=t[2];
var w=this.__fD(v);
u.push(w+j+x);
}return u;
},"webkit":function(bc){if(bc.sourceURL&&bc.line){return [this.__fD(bc.sourceURL)+j+bc.line];
}else{return [];
}},"opera":function(k){if(k.message.indexOf("Backtrace:")<0){return [];
}var m=[];
var n=qx.lang.String.trim(k.message.split("Backtrace:")[1]);
var o=n.split(c);

for(var i=0;i<o.length;i++){var l=o[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(l&&l.length>=2){var q=l[1];
var p=this.__fD(l[2]);
m.push(p+j+q);
}}return m;
},"default":function(){return [];
}}),__fD:function(z){var C=b;
var A=z.indexOf(C);
var B=(A==-1)?z:z.substring(A+C.length).replace(/\//g,a).replace(/\.js$/,d);
return B;
}}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(j){return (j!==null&&(this.getClass(j)==b||j instanceof Number));
},isBoolean:function(k){return (k!==null&&(this.getClass(k)==a||k instanceof Boolean));
},isDate:function(h){return (h!==null&&(this.getClass(h)==c||h instanceof Date));
},isError:function(i){return (i!==null&&(this.getClass(i)==e||i instanceof Error));
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(d,e){var f={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){f.pointerEvents=c;
}qx.html.Element.call(this,null,f);
this.__fG=d;
this.__fH=e||d.toHashCode();
this.useMarkup(d.getMarkup());
},members:{__fH:null,__fG:null,getId:function(){return this.__fH;
},getDecorator:function(){return this.__fG;
},resize:function(h,i){this.__fG.resize(this.getDomElement(),h,i);
},tint:function(g){this.__fG.tint(this.getDomElement(),g);
},getInsets:function(){return this.__fG.getInsets();
}},destruct:function(){this.__fG=null;
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__fI=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,transitionEnd:1,animationEnd:1,animationStart:1,animationIteration:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1},IGNORE_CAN_HANDLE:false},members:{__fI:null,__fJ:{focusin:1,focusout:1,focus:1,blur:1},__fK:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(m,n){return m instanceof qx.ui.core.Widget;
},_dispatchEvent:function(o){var t=o.getTarget();
var s=qx.ui.core.Widget.getWidgetByElement(t);
var u=false;

while(s&&s.isAnonymous()){var u=true;
s=s.getLayoutParent();
}if(s&&u&&o.getType()==a){s.getContainerElement().activate();
}if(this.__fJ[o.getType()]){s=s&&s.getFocusTarget();
if(!s){return;
}}if(o.getRelatedTarget){var B=o.getRelatedTarget();
var A=qx.ui.core.Widget.getWidgetByElement(B);

while(A&&A.isAnonymous()){A=A.getLayoutParent();
}
if(A){if(this.__fJ[o.getType()]){A=A.getFocusTarget();
}if(A===s){return;
}}}var w=o.getCurrentTarget();
var y=qx.ui.core.Widget.getWidgetByElement(w);

if(!y||y.isAnonymous()){return;
}if(this.__fJ[o.getType()]){y=y.getFocusTarget();
}var z=o.getType();

if(!y||!(y.isEnabled()||this.__fK[z])){return;
}var p=o.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var v=this.__fI.getListeners(y,z,p);

if(!v||v.length===0){return;
}var q=qx.event.Pool.getInstance().getObject(o.constructor);
o.clone(q);
q.setTarget(s);
q.setRelatedTarget(A||null);
q.setCurrentTarget(y);
var C=o.getOriginalTarget();

if(C){var r=qx.ui.core.Widget.getWidgetByElement(C);

while(r&&r.isAnonymous()){r=r.getLayoutParent();
}q.setOriginalTarget(r);
}else{q.setOriginalTarget(t);
}for(var i=0,l=v.length;i<l;i++){var x=v[i].context||y;
v[i].handler.call(x,q);
}if(q.getPropagationStopped()){o.stopPropagation();
}
if(q.getDefaultPrevented()){o.preventDefault();
}qx.event.Pool.getInstance().poolObject(q);
},registerEvent:function(E,F,G){var H;

if(F===e||F===f){H=E.getFocusElement();
}else if(F===c||F===d){H=E.getContentElement();
}else{H=E.getContainerElement();
}
if(H){H.addListener(F,this._dispatchEvent,this,G);
}},unregisterEvent:function(g,h,j){var k;

if(h===e||h===f){k=g.getFocusElement();
}else if(h===c||h===d){k=g.getContentElement();
}else{k=g.getContainerElement();
}
if(k){k.removeListener(h,this._dispatchEvent,this,j);
}}},destruct:function(){this.__fI=null;
},defer:function(D){qx.event.Registration.addHandler(D);
}});
})();
(function(){var j="touchmove",i="touchend",h="touchcancel",g="touchstart",f="qx.event.handler.Touch",d="useraction";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){qx.core.Object.call(this);
this.__sr=q;
this.__ss=q.getWindow();
this.__st=this.__ss.document;
this._initTouchObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__su:null,__sr:null,__ss:null,__st:null,canHandleEvent:function(o,p){},registerEvent:function(s,t,u){},unregisterEvent:function(l,m,n){},__sv:function(a,b,c){if(!c){c=a.target||a.srcElement;
}
if(c&&c.nodeType){qx.event.Registration.fireEvent(c,b||a.type,qx.event.type.Touch,[a,c,null,true,true]);
}qx.event.Registration.fireEvent(this.__ss,d,qx.event.type.Data,[b||a.type]);
},_initTouchObserver:function(){this.__su=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__st,g,this.__su);
Event.addNativeListener(this.__st,j,this.__su);
Event.addNativeListener(this.__st,i,this.__su);
Event.addNativeListener(this.__st,h,this.__su);
},_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__st,g,this.__su);
Event.removeNativeListener(this.__st,j,this.__su);
Event.removeNativeListener(this.__st,i,this.__su);
Event.removeNativeListener(this.__st,h,this.__su);
},_onTouchEvent:qx.event.GlobalError.observeMethod(function(r){this.__sv(r,r.type);
})},destruct:function(){this._stopTouchObserver();
this.__sr=this.__ss=this.__st=null;
},defer:function(k){qx.event.Registration.addHandler(k);
if(qx.bom.client.Feature.TOUCH){document.addEventListener(j,function(e){e.preventDefault();
});
}}});
})();
(function(){var t="qx.client",s="mouseup",r="click",q="mousedown",p="contextmenu",o="mousewheel",n="dblclick",m="mshtml",l="mouseover",k="mouseout",f="DOMMouseScroll",j="mousemove",i="on",e="mshtml|webkit|opera",d="useraction",h="gecko|webkit",g="qx.event.handler.Mouse";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__fL=u;
this.__fM=u.getWindow();
this.__fN=this.__fM.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__fO:null,__fP:null,__fQ:null,__fR:null,__fS:null,__fL:null,__fM:null,__fN:null,canHandleEvent:function(E,F){},registerEvent:qx.bom.client.System.IPHONE?
function(P,Q,R){P[i+Q]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(S,T,U){S[i+T]=undefined;
}:qx.lang.Function.returnNull,__fT:function(v,w,x){if(!x){x=v.target||v.srcElement;
}if(x&&x.nodeType){qx.event.Registration.fireEvent(x,w||v.type,w==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[v,x,null,true,true]);
}qx.event.Registration.fireEvent(this.__fM,d,qx.event.type.Data,[w||v.type]);
},_initButtonObserver:function(){this.__fO=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fN,q,this.__fO);
Event.addNativeListener(this.__fN,s,this.__fO);
Event.addNativeListener(this.__fN,r,this.__fO);
Event.addNativeListener(this.__fN,n,this.__fO);
Event.addNativeListener(this.__fN,p,this.__fO);
},_initMoveObserver:function(){this.__fP=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fN,j,this.__fP);
Event.addNativeListener(this.__fN,l,this.__fP);
Event.addNativeListener(this.__fN,k,this.__fP);
},_initWheelObserver:function(){this.__fQ=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var J=qx.core.Variant.isSet(t,e)?o:f;
var K=qx.core.Variant.isSet(t,m)?this.__fN:this.__fM;
Event.addNativeListener(K,J,this.__fQ);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fN,q,this.__fO);
Event.removeNativeListener(this.__fN,s,this.__fO);
Event.removeNativeListener(this.__fN,r,this.__fO);
Event.removeNativeListener(this.__fN,n,this.__fO);
Event.removeNativeListener(this.__fN,p,this.__fO);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fN,j,this.__fP);
Event.removeNativeListener(this.__fN,l,this.__fP);
Event.removeNativeListener(this.__fN,k,this.__fP);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var H=qx.core.Variant.isSet(t,e)?o:f;
var I=qx.core.Variant.isSet(t,m)?this.__fN:this.__fM;
Event.removeNativeListener(I,H,this.__fQ);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__fT(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=M.target||M.srcElement;
if(qx.core.Variant.isSet(t,h)){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__fU){this.__fU(M,N,O);
}
if(this.__fW){this.__fW(M,N,O);
}this.__fT(M,N,O);

if(this.__fV){this.__fV(M,N,O);
}
if(this.__fX){this.__fX(M,N,O);
}this.__fR=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(V){this.__fT(V,o);
}),__fU:qx.core.Variant.select(t,{"webkit":function(B,C,D){if(qx.bom.client.Engine.VERSION<530){if(C==p){this.__fT(B,s,D);
}}},"default":null}),__fV:qx.core.Variant.select(t,{"opera":function(y,z,A){if(z==s&&y.button==2){this.__fT(y,p,A);
}},"default":null}),__fW:qx.core.Variant.select(t,{"mshtml":function(a,b,c){if(b==s&&this.__fR==r){this.__fT(a,q,c);
}else if(b==n){this.__fT(a,r,c);
}},"default":null}),__fX:qx.core.Variant.select(t,{"mshtml":null,"default":function(W,X,Y){switch(X){case q:this.__fS=Y;
break;
case s:if(Y!==this.__fS){var ba=qx.dom.Hierarchy.getCommonParent(Y,this.__fS);
this.__fT(W,r,ba);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__fL=this.__fM=this.__fN=this.__fS=null;
},defer:function(G){qx.event.Registration.addHandler(G);
}});
})();
(function(){var bl="keydown",bk="qx.client",bj="keypress",bi="NumLock",bh="keyup",bg="Enter",bf="0",be="9",bd="-",bc="PageUp",ct="+",cs="PrintScreen",cr="gecko",cq="A",cp="Z",co="Left",cn="F5",cm="Down",cl="Up",ck="F11",bs="F6",bt="useraction",bq="F3",br="keyinput",bo="Insert",bp="F8",bm="End",bn="/",bA="Delete",bB="*",bN="cmd",bJ="F1",bV="F4",bQ="Home",cg="F2",cb="F12",bF="PageDown",cj="F7",ci="Win",ch="F9",bE="F10",bH="Right",bI="text",bL="Escape",bO="webkit",bR="5",bX="3",cd="Meta",bu="7",bv="CapsLock",bG="input",bU="Control",bT="Space",bS="Tab",ca="Shift",bY="Pause",bP="Unidentified",bW="qx.event.handler.Keyboard",Y="mshtml|webkit",cc="6",bw="off",bx="Apps",bK="4",ba="Alt",bb="mshtml",bD="2",by="Scroll",bz="1",bC="8",bM="autoComplete",cf=",",ce="Backspace";
qx.Class.define(bW,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cI){qx.core.Object.call(this);
this.__fY=cI;
this.__ga=cI.getWindow();
if(qx.core.Variant.isSet(bk,cr)){this.__gb=this.__ga;
}else{this.__gb=this.__ga.document.documentElement;
}this.__gc={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cJ){if(this._identifierToKeyCodeMap[cJ]){return true;
}
if(cJ.length!=1){return false;
}
if(cJ>=bf&&cJ<=be){return true;
}
if(cJ>=cq&&cJ<=cp){return true;
}
switch(cJ){case ct:case bd:case bB:case bn:return true;
default:return false;
}}},members:{__gd:null,__fY:null,__ga:null,__gb:null,__gc:null,__ge:null,__gf:null,__gg:null,canHandleEvent:function(M,N){},registerEvent:function(O,P,Q){},unregisterEvent:function(g,h,i){},_fireInputEvent:function(w,x){var y=this.__gh();
if(y&&y.offsetWidth!=0){var event=qx.event.Registration.createEvent(br,qx.event.type.KeyInput,[w,y,x]);
this.__fY.dispatchEvent(y,event);
}if(this.__ga){qx.event.Registration.fireEvent(this.__ga,bt,qx.event.type.Data,[br]);
}},_fireSequenceEvent:function(n,o,p){var q=this.__gh();
var r=n.keyCode;
var event=qx.event.Registration.createEvent(o,qx.event.type.KeySequence,[n,q,p]);
this.__fY.dispatchEvent(q,event);
if(qx.core.Variant.isSet(bk,Y)){if(o==bl&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(r)&&!this._emulateKeyPress[r]){this._fireSequenceEvent(n,bj,p);
}}}if(this.__ga){qx.event.Registration.fireEvent(this.__ga,bt,qx.event.type.Data,[o]);
}},__gh:function(){var z=this.__fY.getHandler(qx.event.handler.Focus);
var A=z.getActive();
if(!A||A.offsetWidth==0){A=z.getFocus();
}if(!A||A.offsetWidth==0){A=this.__fY.getWindow().document.body;
}return A;
},_initKeyObserver:function(){this.__gd=qx.lang.Function.listener(this.__gi,this);
this.__gg=qx.lang.Function.listener(this.__gk,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gb,bh,this.__gd);
Event.addNativeListener(this.__gb,bl,this.__gd);
Event.addNativeListener(this.__gb,bj,this.__gg);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gb,bh,this.__gd);
Event.removeNativeListener(this.__gb,bl,this.__gd);
Event.removeNativeListener(this.__gb,bj,this.__gg);

for(var cF in (this.__gf||{})){var cE=this.__gf[cF];
Event.removeNativeListener(cE.target,bj,cE.callback);
}delete (this.__gf);
},__gi:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"mshtml":function(U){U=window.event||U;
var X=U.keyCode;
var V=0;
var W=U.type;
if(!(this.__gc[X]==bl&&W==bl)){this._idealKeyHandler(X,V,W,U);
}if(W==bl){if(this._isNonPrintableKeyCode(X)||this._emulateKeyPress[X]){this._idealKeyHandler(X,V,bj,U);
}}this.__gc[X]=W;
},"gecko":function(cz){var cD=this._keyCodeFix[cz.keyCode]||cz.keyCode;
var cB=0;
var cC=cz.type;
if(qx.bom.client.Platform.WIN){var cA=cD?this._keyCodeToIdentifier(cD):this._charCodeToIdentifier(cB);

if(!(this.__gc[cA]==bl&&cC==bl)){this._idealKeyHandler(cD,cB,cC,cz);
}this.__gc[cA]=cC;
}else{this._idealKeyHandler(cD,cB,cC,cz);
}this.__gj(cz.target,cC,cD);
},"webkit":function(G){var J=0;
var H=0;
var I=G.type;
if(qx.bom.client.Engine.VERSION<525.13){if(I==bh||I==bl){J=this._charCode2KeyCode[G.charCode]||G.keyCode;
}else{if(this._charCode2KeyCode[G.charCode]){J=this._charCode2KeyCode[G.charCode];
}else{H=G.charCode;
}}this._idealKeyHandler(J,H,I,G);
}else{J=G.keyCode;
this._idealKeyHandler(J,H,I,G);
if(I==bl){if(this._isNonPrintableKeyCode(J)||this._emulateKeyPress[J]){this._idealKeyHandler(J,H,bj,G);
}}this.__gc[J]=I;
}},"opera":function(m){this.__ge=m.keyCode;
this._idealKeyHandler(m.keyCode,0,m.type,m);
}})),__gj:qx.core.Variant.select(bk,{"gecko":function(cu,cv,cw){if(cv===bl&&(cw==33||cw==34||cw==38||cw==40)&&cu.type==bI&&cu.tagName.toLowerCase()===bG&&cu.getAttribute(bM)!==bw){if(!this.__gf){this.__gf={};
}var cy=qx.core.ObjectRegistry.toHashCode(cu);

if(this.__gf[cy]){return;
}var self=this;
this.__gf[cy]={target:cu,callback:function(e){qx.bom.Event.stopPropagation(e);
self.__gk(e);
}};
var cx=qx.event.GlobalError.observeMethod(this.__gf[cy].callback);
qx.bom.Event.addNativeListener(cu,bj,cx);
}},"default":null}),__gk:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"mshtml":function(cK){cK=window.event||cK;

if(this._charCode2KeyCode[cK.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cK.keyCode],0,cK.type,cK);
}else{this._idealKeyHandler(0,cK.keyCode,cK.type,cK);
}},"gecko":function(a){var d=this._keyCodeFix[a.keyCode]||a.keyCode;
var b=a.charCode;
var c=a.type;
this._idealKeyHandler(d,b,c,a);
},"webkit":function(s){if(qx.bom.client.Engine.VERSION<525.13){var v=0;
var t=0;
var u=s.type;

if(u==bh||u==bl){v=this._charCode2KeyCode[s.charCode]||s.keyCode;
}else{if(this._charCode2KeyCode[s.charCode]){v=this._charCode2KeyCode[s.charCode];
}else{t=s.charCode;
}}this._idealKeyHandler(v,t,u,s);
}else{if(this._charCode2KeyCode[s.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[s.keyCode],0,s.type,s);
}else{this._idealKeyHandler(0,s.keyCode,s.type,s);
}}},"opera":function(R){var T=R.keyCode;
var S=R.type;
if(T!=this.__ge){this._idealKeyHandler(0,this.__ge,S,R);
}else{if(this._keyCodeToIdentifierMap[R.keyCode]){this._idealKeyHandler(R.keyCode,0,R.type,R);
}else{this._idealKeyHandler(0,R.keyCode,R.type,R);
}}}})),_idealKeyHandler:function(B,C,D,E){var F;
if(B||(!B&&!C)){F=this._keyCodeToIdentifier(B);
this._fireSequenceEvent(E,D,F);
}else{F=this._charCodeToIdentifier(C);
this._fireSequenceEvent(E,bj,F);
this._fireInputEvent(E,C);
}},_specialCharCodeMap:{8:ce,9:bS,13:bg,27:bL,32:bT},_emulateKeyPress:qx.core.Variant.select(bk,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:ca,17:bU,18:ba,20:bv,224:cd,37:co,38:cl,39:bH,40:cm,33:bc,34:bF,35:bm,36:bQ,45:bo,46:bA,112:bJ,113:cg,114:bq,115:bV,116:cn,117:bs,118:cj,119:bp,120:ch,121:bE,122:ck,123:cb,144:bi,44:cs,145:by,19:bY,91:qx.bom.client.Platform.MAC?bN:ci,92:ci,93:qx.bom.client.Platform.MAC?bN:bx},_numpadToCharCode:{96:bf.charCodeAt(0),97:bz.charCodeAt(0),98:bD.charCodeAt(0),99:bX.charCodeAt(0),100:bK.charCodeAt(0),101:bR.charCodeAt(0),102:cc.charCodeAt(0),103:bu.charCodeAt(0),104:bC.charCodeAt(0),105:be.charCodeAt(0),106:bB.charCodeAt(0),107:ct.charCodeAt(0),109:bd.charCodeAt(0),110:cf.charCodeAt(0),111:bn.charCodeAt(0)},_charCodeA:cq.charCodeAt(0),_charCodeZ:cp.charCodeAt(0),_charCode0:bf.charCodeAt(0),_charCode9:be.charCodeAt(0),_isNonPrintableKeyCode:function(L){return this._keyCodeToIdentifierMap[L]?true:false;
},_isIdentifiableKeyCode:function(f){if(f>=this._charCodeA&&f<=this._charCodeZ){return true;
}if(f>=this._charCode0&&f<=this._charCode9){return true;
}if(this._specialCharCodeMap[f]){return true;
}if(this._numpadToCharCode[f]){return true;
}if(this._isNonPrintableKeyCode(f)){return true;
}return false;
},_keyCodeToIdentifier:function(cG){if(this._isIdentifiableKeyCode(cG)){var cH=this._numpadToCharCode[cG];

if(cH){return String.fromCharCode(cH);
}return (this._keyCodeToIdentifierMap[cG]||this._specialCharCodeMap[cG]||String.fromCharCode(cG));
}else{return bP;
}},_charCodeToIdentifier:function(cL){return this._specialCharCodeMap[cL]||String.fromCharCode(cL).toUpperCase();
},_identifierToKeyCode:function(K){return qx.event.handler.Keyboard._identifierToKeyCodeMap[K]||K.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__ge=this.__fY=this.__ga=this.__gb=this.__gc=null;
},defer:function(j,k){qx.event.Registration.addHandler(j);
if(!j._identifierToKeyCodeMap){j._identifierToKeyCodeMap={};

for(var l in k._keyCodeToIdentifierMap){j._identifierToKeyCodeMap[k._keyCodeToIdentifierMap[l]]=parseInt(l,10);
}
for(var l in k._specialCharCodeMap){j._identifierToKeyCodeMap[k._specialCharCodeMap[l]]=parseInt(l,10);
}}
if(qx.core.Variant.isSet(bk,bb)){k._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(bk,cr)){k._keyCodeFix={12:k._identifierToKeyCode(bi)};
}else if(qx.core.Variant.isSet(bk,bO)){if(qx.bom.client.Engine.VERSION<525.13){k._charCode2KeyCode={63289:k._identifierToKeyCode(bi),63276:k._identifierToKeyCode(bc),63277:k._identifierToKeyCode(bF),63275:k._identifierToKeyCode(bm),63273:k._identifierToKeyCode(bQ),63234:k._identifierToKeyCode(co),63232:k._identifierToKeyCode(cl),63235:k._identifierToKeyCode(bH),63233:k._identifierToKeyCode(cm),63272:k._identifierToKeyCode(bA),63302:k._identifierToKeyCode(bo),63236:k._identifierToKeyCode(bJ),63237:k._identifierToKeyCode(cg),63238:k._identifierToKeyCode(bq),63239:k._identifierToKeyCode(bV),63240:k._identifierToKeyCode(cn),63241:k._identifierToKeyCode(bs),63242:k._identifierToKeyCode(cj),63243:k._identifierToKeyCode(bp),63244:k._identifierToKeyCode(ch),63245:k._identifierToKeyCode(bE),63246:k._identifierToKeyCode(ck),63247:k._identifierToKeyCode(cb),63248:k._identifierToKeyCode(cs),3:k._identifierToKeyCode(bg),12:k._identifierToKeyCode(bi),13:k._identifierToKeyCode(bg)};
}else{k._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var Q="alias",P="copy",O="blur",N="mouseout",M="keydown",L="Ctrl",K="Shift",J="mousemove",I="move",H="mouseover",bh="Alt",bg="keyup",bf="mouseup",be="dragend",bd="on",bc="mousedown",bb="qxDraggable",ba="drag",Y="drop",X="qxDroppable",V="qx.event.handler.DragDrop",W="droprequest",T="dragstart",U="dragchange",R="dragleave",S="dragover";
qx.Class.define(V,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(B){qx.core.Object.call(this);
this.__gl=B;
this.__gm=B.getWindow().document.documentElement;
this.__gl.addListener(this.__gm,bc,this._onMouseDown,this);
this.__gy();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__gl:null,__gm:null,__gn:null,__go:null,__gp:null,__gq:null,__gr:null,__gs:null,__gt:null,__gu:null,__gv:false,__gw:0,__gx:0,canHandleEvent:function(t,u){},registerEvent:function(D,E,F){},unregisterEvent:function(c,d,f){},addType:function(bi){this.__gp[bi]=true;
},addAction:function(bj){this.__gq[bj]=true;
},supportsType:function(G){return !!this.__gp[G];
},supportsAction:function(g){return !!this.__gq[g];
},getData:function(b){if(!this.__gF||!this.__gn){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__gp[b]){throw new Error("Unsupported data type: "+b+"!");
}
if(!this.__gs[b]){this.__gt=b;
this.__gA(W,this.__go,this.__gn,false);
}
if(!this.__gs[b]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__gs[b]||null;
},getCurrentAction:function(){return this.__gu;
},addData:function(v,w){this.__gs[v]=w;
},getCurrentType:function(){return this.__gt;
},isSessionActive:function(){return this.__gv;
},__gy:function(){this.__gp={};
this.__gq={};
this.__gr={};
this.__gs={};
},__gz:function(){if(this.__go==null){return;
}var s=this.__gq;
var q=this.__gr;
var r=null;

if(this.__gF){if(q.Shift&&q.Ctrl&&s.alias){r=Q;
}else if(q.Shift&&q.Alt&&s.copy){r=P;
}else if(q.Shift&&s.move){r=I;
}else if(q.Alt&&s.alias){r=Q;
}else if(q.Ctrl&&s.copy){r=P;
}else if(s.move){r=I;
}else if(s.copy){r=P;
}else if(s.alias){r=Q;
}}
if(r!=this.__gu){this.__gu=r;
this.__gA(U,this.__go,this.__gn,false);
}},__gA:function(i,j,k,l,m){var o=qx.event.Registration;
var n=o.createEvent(i,qx.event.type.Drag,[l,m]);

if(j!==k){n.setRelatedTarget(k);
}return o.dispatchEvent(j,n);
},__gB:function(z){while(z&&z.nodeType==1){if(z.getAttribute(bb)==bd){return z;
}z=z.parentNode;
}return null;
},__gC:function(C){while(C&&C.nodeType==1){if(C.getAttribute(X)==bd){return C;
}C=C.parentNode;
}return null;
},__gD:function(){this.__go=null;
this.__gl.removeListener(this.__gm,J,this._onMouseMove,this,true);
this.__gl.removeListener(this.__gm,bf,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,O,this._onWindowBlur,this);
this.__gy();
},__gE:function(){if(this.__gv){this.__gl.removeListener(this.__gm,H,this._onMouseOver,this,true);
this.__gl.removeListener(this.__gm,N,this._onMouseOut,this,true);
this.__gl.removeListener(this.__gm,M,this._onKeyDown,this,true);
this.__gl.removeListener(this.__gm,bg,this._onKeyUp,this,true);
this.__gA(be,this.__go,this.__gn,false);
this.__gv=false;
}this.__gF=false;
this.__gn=null;
this.__gD();
},__gF:false,_onWindowBlur:function(e){this.__gE();
},_onKeyDown:function(e){var h=e.getKeyIdentifier();

switch(h){case bh:case L:case K:if(!this.__gr[h]){this.__gr[h]=true;
this.__gz();
}}},_onKeyUp:function(e){var p=e.getKeyIdentifier();

switch(p){case bh:case L:case K:if(this.__gr[p]){this.__gr[p]=false;
this.__gz();
}}},_onMouseDown:function(e){if(this.__gv){return;
}var bm=this.__gB(e.getTarget());

if(bm){this.__gw=e.getDocumentLeft();
this.__gx=e.getDocumentTop();
this.__go=bm;
this.__gl.addListener(this.__gm,J,this._onMouseMove,this,true);
this.__gl.addListener(this.__gm,bf,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,O,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__gF){this.__gA(Y,this.__gn,this.__go,false,e);
}if(this.__gv){e.stopPropagation();
}this.__gE();
},_onMouseMove:function(e){if(this.__gv){if(!this.__gA(ba,this.__go,this.__gn,true,e)){this.__gE();
}}else{if(Math.abs(e.getDocumentLeft()-this.__gw)>3||Math.abs(e.getDocumentTop()-this.__gx)>3){if(this.__gA(T,this.__go,this.__gn,true,e)){this.__gv=true;
this.__gl.addListener(this.__gm,H,this._onMouseOver,this,true);
this.__gl.addListener(this.__gm,N,this._onMouseOut,this,true);
this.__gl.addListener(this.__gm,M,this._onKeyDown,this,true);
this.__gl.addListener(this.__gm,bg,this._onKeyUp,this,true);
var a=this.__gr;
a.Ctrl=e.isCtrlPressed();
a.Shift=e.isShiftPressed();
a.Alt=e.isAltPressed();
this.__gz();
}else{this.__gA(be,this.__go,this.__gn,false);
this.__gD();
}}}},_onMouseOver:function(e){var x=e.getTarget();
var y=this.__gC(x);

if(y&&y!=this.__gn){this.__gF=this.__gA(S,y,this.__go,true,e);
this.__gn=y;
this.__gz();
}},_onMouseOut:function(e){var bl=this.__gC(e.getTarget());
var bk=this.__gC(e.getRelatedTarget());

if(bl&&bl!==bk&&bl==this.__gn){this.__gA(R,this.__gn,bk,false,e);
this.__gn=null;
this.__gF=false;
qx.event.Timer.once(this.__gz,this,0);
}}},destruct:function(){this.__go=this.__gn=this.__gl=this.__gm=this.__gp=this.__gq=this.__gr=this.__gs=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Native.prototype._cloneNativeEvent.call(this,d,e);
e.shiftKey=d.shiftKey;
e.ctrlKey=d.ctrlKey;
e.altKey=d.altKey;
e.metaKey=d.metaKey;
return e;
},getModifiers:function(){var c=0;
var b=this._native;

if(b.shiftKey){c|=qx.event.type.Dom.SHIFT_MASK;
}
if(b.ctrlKey){c|=qx.event.type.Dom.CTRL_MASK;
}
if(b.altKey){c|=qx.event.type.Dom.ALT_MASK;
}
if(b.metaKey){c|=qx.event.type.Dom.META_MASK;
}return c;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var a="qx.event.type.Touch";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d,e,f){qx.event.type.Dom.prototype.init.call(this,b,c,d,e,f);

if(!d){this._relatedTarget=qx.bom.Event.getRelatedTarget(b);
}return this;
},_cloneNativeEvent:function(g,h){var h=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,g,h);
h.pageX=g.pageX;
h.pageY=g.pageY;
h.layerX=g.layerX;
h.layerX=g.layerX;
h.srcElement=g.srcElement;
h.type=g.type;
h.currentTarget=g.currentTarget;
h.rotation=g.rotation;
h.timestamp=g.timestamp;
h.identifier=g.identifier;
h.scale=g.scale;
h.targetTouches=[];

for(var i=0;i<g.targetTouches.length;i++){h.targetTouches[i]=g.targetTouches.item(i);
}h.changedTouches=[];

for(var i=0;i<g.changedTouches.length;i++){h.changedTouches[i]=g.changedTouches.item(i);
}h.touches=[];

for(var i=0;i<g.touches.length;i++){h.touches[i]=g.touches.item(i);
}return h;
},stop:function(){this.stopPropagation();
},getTouches:function(){return this._native.touches;
},getPageX:function(){return this._native.touches[0].pageX;
},getPageY:function(){return this._native.touches[0].pageY;
}}});
})();
(function(){var i="qx.client",h="left",g="right",f="middle",e="click",d="none",c="contextmenu",b="qx.event.type.Mouse";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{init:function(m,n,o,p,q){qx.event.type.Dom.prototype.init.call(this,m,n,o,p,q);

if(!o){this._relatedTarget=qx.bom.Event.getRelatedTarget(m);
}return this;
},_cloneNativeEvent:function(j,k){var k=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,j,k);
k.button=j.button;
k.clientX=j.clientX;
k.clientY=j.clientY;
k.pageX=j.pageX;
k.pageY=j.pageY;
k.screenX=j.screenX;
k.screenY=j.screenY;
k.wheelDelta=j.wheelDelta;
k.detail=j.detail;
k.srcElement=j.srcElement;
return k;
},__gG:qx.core.Variant.select(i,{"mshtml":{1:h,2:g,4:f},"default":{0:h,2:g,1:f}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case c:return g;
case e:if(this.__sw){return this.__sw();
}default:return this.__gG[this._native.button]||d;
}},__sw:qx.core.Variant.select(i,{"mshtml":function(){return h;
},"default":null}),isLeftPressed:function(){return this.getButton()===h;
},isMiddlePressed:function(){return this.getButton()===f;
},isRightPressed:function(){return this.getButton()===g;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(i,{"mshtml":function(){var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(l);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(i,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(a);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){if(qx.bom.client.Platform.MAC){return -(this._native.wheelDelta/1200);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.bom.client.Platform.WIN){var d=120;
if(qx.bom.client.Engine.VERSION==533.16){d=1200;
}}else{d=40;
if(qx.bom.client.Engine.VERSION==533.16||qx.bom.client.Engine.VERSION==533.17){d=1200;
}}return -(this._native.wheelDelta/d);
}}})}});
})();
(function(){var k="qx.client",j="ie",i="msie",h="android",g="operamini",f="mobile chrome",e=")(/| )([0-9]+\.[0-9])",d="iemobile",c="opera mobi",b="Mobile Safari",y="operamobile",x="mobile safari",w="IEMobile|Maxthon|MSIE",v="qx.bom.client.Browser",u="opera mini",t="(",s="opera",r="mshtml",q="Opera Mini|Opera Mobi|Opera",p="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",o="5.0",l="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",m="Mobile/";
qx.Bootstrap.define(v,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__gH:function(A){var B=navigator.userAgent;
var D=new RegExp(t+A+e);
var E=B.match(D);

if(!E){return;
}var name=E[1].toLowerCase();
var C=E[3];
if(B.match(/Version(\/| )([0-9]+\.[0-9])/)){C=RegExp.$2;
}
if(qx.core.Variant.isSet(k,n)){if(name===h){name=f;
}else if(B.indexOf(b)!==-1||B.indexOf(m)!==-1){name=x;
}}else if(qx.core.Variant.isSet(k,r)){if(name===i){name=j;
if(qx.bom.client.System.WINCE&&name===j){name=d;
C=o;
}}}else if(qx.core.Variant.isSet(k,s)){if(name===c){name=y;
}else if(name===u){name=g;
}}this.NAME=name;
this.FULLVERSION=C;
this.VERSION=parseFloat(C,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(k,{"webkit":function(a){a.__gH(p);
},"gecko":function(F){F.__gH(l);
},"mshtml":function(G){G.__gH(w);
},"opera":function(z){z.__gH(q);
}})});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){qx.event.type.Dom.prototype.init.call(this,d,e,null,true,true);
this._charCode=f;
return this;
},clone:function(b){var c=qx.event.type.Dom.prototype.clone.call(this,b);
c._charCode=this._charCode;
return c;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var b="qx.client",a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(e,f){qx.event.type.Event.prototype.init.call(this,true,e);

if(f){this._native=f.getNativeEvent()||null;
this._originalTarget=f.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(l){var m=qx.event.type.Event.prototype.clone.call(this,l);
m._native=this._native;
return m;
},getDocumentLeft:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var h=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(h);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(g);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(o){this.getManager().addType(o);
},addAction:function(n){this.getManager().addAction(n);
},supportsType:function(i){return this.getManager().supportsType(i);
},supportsAction:function(j){return this.getManager().supportsAction(j);
},addData:function(c,d){this.getManager().addData(c,d);
},getData:function(k){return this.getManager().getData(k);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var p="qx.client",o="-",n="animationEnd",m="animationIteration",l="transitionEnd",k="animationStart",j="qx.event.handler.Transition",i="mozAnimationIteration",h="webkitAnimationIteration",g="mozTransitionEnd",d="mozAnimationEnd",f="webkitAnimationEnd",e="webkitTransitionEnd",c="webkitAnimationStart",b="mozAnimationStart";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){qx.core.Object.call(this);
this.__uk=q.getWindow();
this.__ul=this.__uk.document.documentElement;
this.__um=qx.lang.Function.listener(this.__up,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{transitionEnd:1,animationEnd:1,animationStart:1,animationIteration:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__um:null,__uk:null,__ul:null,__un:qx.core.Variant.select(p,{"webkit":{transitionEnd:e,animationEnd:f,animationStart:c,animationIteration:h},"gecko":{transitionEnd:g,animationEnd:d,animationStart:b,animationIteration:i},"default":null}),__uo:qx.core.Variant.select(p,{"webkit":{webkitTransitionEnd:l,webkitAnimationEnd:n,webkitAnimationStart:k,webkitAnimationIteration:m},"gecko":{mozTransitionEnd:l,mozAnimationEnd:n,mozAnimationStart:k,mozAnimationIteration:m},"default":null}),canHandleEvent:function(r,s){},registerEvent:qx.core.Variant.select(p,{"webkit|gecko":function(z,A,B){qx.bom.Event.addNativeListener(z,this.__un[A],this.__um);
},"default":function(){}}),unregisterEvent:qx.core.Variant.select(p,{"webkit|gecko":function(w,x,y){qx.bom.Event.removeNativeListener(w,this.__un[x],this.__um);
},"default":function(){}}),__up:qx.event.GlobalError.observeMethod(function(t){var u=t.propertyName;

if(u.charAt(0)==o){u=u.substring(u.indexOf(o,1)+1);
}var v=[t,t.target,u];
qx.event.Registration.fireEvent(t.target,this.__uo[t.type],qx.event.type.Transition,v);
})},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var a="qx.event.type.Transition";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this.__uq=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f.__uq=this.__uq;
return f;
},getProperty:function(){return this.__uq;
}}});
})();
(function(){var j="",i="/",h="mshtml",g="qx.client",f="?",e="string",d="qx.util.ResourceManager",c="singleton";
qx.Class.define(d,{extend:qx.core.Object,type:c,statics:{__gL:qx.$$resources||{},__gM:{}},members:{has:function(z){return !!this.self(arguments).__gL[z];
},getData:function(u){return this.self(arguments).__gL[u]||null;
},getImageWidth:function(A){var B=this.self(arguments).__gL[A];
return B?B[0]:null;
},getImageHeight:function(a){var b=this.self(arguments).__gL[a];
return b?b[1]:null;
},getImageFormat:function(v){var w=this.self(arguments).__gL[v];
return w?w[2]:null;
},isClippedImage:function(x){var y=this.self(arguments).__gL[x];
return y&&y.length>4;
},toUri:function(k){if(k==null){return k;
}var l=this.self(arguments).__gL[k];

if(!l){return k;
}
if(typeof l===e){var n=l;
}else{var n=l[3];
if(!n){return k;
}}var m=j;

if(qx.core.Variant.isSet(g,h)&&qx.bom.client.Feature.SSL){m=this.self(arguments).__gM[n];
}return m+qx.$$libraries[n].resourceUri+i+k;
}},defer:function(o){if(qx.core.Variant.isSet(g,h)){if(qx.bom.client.Feature.SSL){for(var s in qx.$$libraries){var q;

if(qx.$$libraries[s].resourceUri){q=qx.$$libraries[s].resourceUri;
}else{o.__gM[s]=j;
continue;
}if(q.match(/^\/\//)!=null){o.__gM[s]=window.location.protocol;
}else if(q.match(/^\.\//)!=null){var p=document.URL;
o.__gM[s]=p.substring(0,p.lastIndexOf(i)+1);
}else if(q.match(/^http/)!=null){o.__gM[s]=j;
}else{var t=window.location.href.indexOf(f);
var r;

if(t==-1){r=window.location.href;
}else{r=window.location.href.substring(0,t);
}o.__gM[s]=r.substring(0,r.lastIndexOf(i)+1);
}}}}}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__gN:function(){var e=(navigator.userLanguage||navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__gN();
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(x){var x=x||t;
this.__gO=x;
this.length=x.length;
},members:{$$isString:true,length:0,__gO:null,toString:function(){return this.__gO;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(y,z){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(u,v){{};
var w=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
v.valueOf=v.toString;

if(new u(t).valueOf()==null){delete v.valueOf;
}
for(var i=0,l=w.length;i<l;i++){v[w[i]]=String.prototype[w[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__gP=c;
this.__gQ=d;
},members:{__gP:null,__gQ:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__gP,this.__gQ);
}}});
})();
(function(){var n="_",m="",l="_applyLocale",k="changeLocale",j="C",h="qx.dynlocale",g="on",f="qx.locale.Manager",e="String",d="singleton";
qx.Class.define(f,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__gR=qx.$$translations||{};
this.__gS=qx.$$locales||{};
var c=qx.bom.client.Locale;
var a=c.LOCALE;
var b=c.VARIANT;

if(b!==m){a+=n+b;
}this.setLocale(a||this.__gT);
},statics:{tr:function(K,L){var M=qx.lang.Array.fromArguments(arguments);
M.splice(0,1);
return qx.locale.Manager.getInstance().translate(K,M);
},trn:function(S,T,U,V){var W=qx.lang.Array.fromArguments(arguments);
W.splice(0,3);
if(U!=1){return qx.locale.Manager.getInstance().translate(T,W);
}else{return qx.locale.Manager.getInstance().translate(S,W);
}},trc:function(X,Y,ba){var bb=qx.lang.Array.fromArguments(arguments);
bb.splice(0,2);
return qx.locale.Manager.getInstance().translate(Y,bb);
},marktr:function(bg){return bg;
}},properties:{locale:{check:e,nullable:true,apply:l,event:k}},members:{__gT:j,__gU:null,__gV:null,__gR:null,__gS:null,getLanguage:function(){return this.__gV;
},getTerritory:function(){return this.getLocale().split(n)[1]||m;
},getAvailableLocales:function(){var R=[];

for(var Q in this.__gS){if(Q!=this.__gT){R.push(Q);
}}return R;
},__gW:function(N){var P;
var O=N.indexOf(n);

if(O==-1){P=N;
}else{P=N.substring(0,O);
}return P;
},_applyLocale:function(o,p){this.__gU=o;
this.__gV=this.__gW(o);
},addTranslation:function(q,r){var s=this.__gR;

if(s[q]){for(var t in r){s[q][t]=r[t];
}}else{s[q]=r;
}},addLocale:function(bc,bd){var be=this.__gS;

if(be[bc]){for(var bf in bd){be[bc][bf]=bd[bf];
}}else{be[bc]=bd;
}},translate:function(C,D,E){var F=this.__gR;
return this.__gX(F,C,D,E);
},localize:function(G,H,I){var J=this.__gS;
return this.__gX(J,G,H,I);
},__gX:function(u,v,w,x){var y;

if(!u){return v;
}
if(x){var A=this.__gW(x);
}else{x=this.__gU;
A=this.__gV;
}if(!y&&u[x]){y=u[x][v];
}if(!y&&u[A]){y=u[A][v];
}if(!y&&u[this.__gT]){y=u[this.__gT][v];
}
if(!y){y=v;
}
if(w.length>0){var z=[];

for(var i=0;i<w.length;i++){var B=w[i];

if(B&&B.translate){z[i]=B.translate();
}else{z[i]=B;
}}y=qx.lang.String.format(y,z);
}
if(qx.core.Variant.isSet(h,g)){y=new qx.locale.LocalizedString(y,v,w);
}return y;
}},destruct:function(){this.__gR=this.__gS=null;
}});
})();
(function(){var k="px",j="qx.client",i="div",h="img",g="",f="no-repeat",d="scale-x",c="mshtml",b="scale",a="scale-y",G="qx/icon",F="repeat",E=".png",D="crop",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",z='<img src="',y="qx.bom.element.Decoration",x="', sizingMethod='",r="png",s="')",p='"></div>',q='"/>',n='" style="',o="none",l="webkit",m=" ",t="repeat-x",u="DXImageTransform.Microsoft.AlphaImageLoader",w="qx/static/blank.gif",v="absolute";
qx.Class.define(y,{statics:{DEBUG:false,__gY:{},__ha:qx.core.Variant.isSet(j,c),__hb:qx.core.Variant.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hc:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(bM,bN,bO,bP){var bR=this.getTagName(bO,bN);

if(bR!=bM.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bS=this.getAttributes(bN,bO,bP);

if(bR===h){bM.src=bS.src||qx.util.ResourceManager.getInstance().toUri(w);
}if(bM.style.backgroundPosition!=g&&bS.style.backgroundPosition===undefined){bS.style.backgroundPosition=null;
}if(bM.style.clip!=g&&bS.style.clip===undefined){bS.style.clip=null;
}var bQ=qx.bom.element.Style;
bQ.setStyles(bM,bS.style);
if(this.__ha){try{bM.filters[u].apply();
}catch(e){}}},create:function(bu,bv,bw){var bx=this.getTagName(bv,bu);
var bz=this.getAttributes(bu,bv,bw);
var by=qx.bom.element.Style.compile(bz.style);

if(bx===h){return z+bz.src+n+by+q;
}else{return B+by+p;
}},getTagName:function(ba,bb){if(qx.core.Variant.isSet(j,c)){if(bb&&this.__ha&&this.__hb[ba]&&qx.lang.String.endsWith(bb,E)){return i;
}}return this.__hc[ba];
},getAttributes:function(H,I,J){if(!J){J={};
}
if(!J.position){J.position=v;
}
if(qx.core.Variant.isSet(j,c)){J.fontSize=0;
J.lineHeight=0;
}else if(qx.core.Variant.isSet(j,l)){J.WebkitUserDrag=o;
}var L=qx.util.ResourceManager.getInstance().getImageFormat(H)||qx.io.ImageLoader.getFormat(H);
{};
var K;
if(this.__ha&&this.__hb[I]&&L===r){K=this.__hf(J,I,H);
}else{if(I===b){K=this.__hg(J,I,H);
}else if(I===d||I===a){K=this.__hh(J,I,H);
}else{K=this.__hk(J,I,H);
}}return K;
},__hd:function(br,bs,bt){if(br.width==null&&bs!=null){br.width=bs+k;
}
if(br.height==null&&bt!=null){br.height=bt+k;
}return br;
},__he:function(bc){var bd=qx.util.ResourceManager.getInstance().getImageWidth(bc)||qx.io.ImageLoader.getWidth(bc);
var be=qx.util.ResourceManager.getInstance().getImageHeight(bc)||qx.io.ImageLoader.getHeight(bc);
return {width:bd,height:be};
},__hf:function(bU,bV,bW){var ca=this.__he(bW);
bU=this.__hd(bU,ca.width,ca.height);
var bY=bV==f?D:b;
var bX=C+qx.util.ResourceManager.getInstance().toUri(bW)+x+bY+s;
bU.filter=bX;
bU.backgroundImage=bU.backgroundRepeat=g;
return {style:bU};
},__hg:function(U,V,W){var X=qx.util.ResourceManager.getInstance().toUri(W);
var Y=this.__he(W);
U=this.__hd(U,Y.width,Y.height);
return {src:X,style:U};
},__hh:function(M,N,O){var S=qx.util.ResourceManager.getInstance();
var R=S.isClippedImage(O);
var T=this.__he(O);

if(R){var Q=S.getData(O);
var P=S.toUri(Q[4]);

if(N===d){M=this.__hi(M,Q,T.height);
}else{M=this.__hj(M,Q,T.width);
}return {src:P,style:M};
}else{{};

if(N==d){M.height=T.height==null?null:T.height+k;
}else if(N==a){M.width=T.width==null?null:T.width+k;
}var P=S.toUri(O);
return {src:P,style:M};
}},__hi:function(bf,bh,bi){var bj=qx.util.ResourceManager.getInstance().getImageHeight(bh[4]);
bf.clip={top:-bh[6],height:bi};
bf.height=bj+k;
if(bf.top!=null){bf.top=(parseInt(bf.top,10)+bh[6])+k;
}else if(bf.bottom!=null){bf.bottom=(parseInt(bf.bottom,10)+bi-bj-bh[6])+k;
}return bf;
},__hj:function(bA,bB,bC){var bD=qx.util.ResourceManager.getInstance().getImageWidth(bB[4]);
bA.clip={left:-bB[5],width:bC};
bA.width=bD+k;
if(bA.left!=null){bA.left=(parseInt(bA.left,10)+bB[5])+k;
}else if(bA.right!=null){bA.right=(parseInt(bA.right,10)+bC-bD-bB[5])+k;
}return bA;
},__hk:function(bE,bF,bG){var bL=qx.util.ResourceManager.getInstance().isClippedImage(bG);
var bK=this.__he(bG);
if(bL&&bF!==F){var bJ=qx.util.ResourceManager.getInstance().getData(bG);
var bI=qx.bom.element.Background.getStyles(bJ[4],bF,bJ[5],bJ[6]);

for(var bH in bI){bE[bH]=bI[bH];
}
if(bK.width!=null&&bE.width==null&&(bF==A||bF===f)){bE.width=bK.width+k;
}
if(bK.height!=null&&bE.height==null&&(bF==t||bF===f)){bE.height=bK.height+k;
}return {style:bE};
}else{{};
bE=this.__hd(bE,bK.width,bK.height);
bE=this.__hl(bE,bG,bF);
return {style:bE};
}},__hl:function(bk,bl,bm){var top=null;
var bq=null;

if(bk.backgroundPosition){var bn=bk.backgroundPosition.split(m);
bq=parseInt(bn[0]);

if(isNaN(bq)){bq=bn[0];
}top=parseInt(bn[1]);

if(isNaN(top)){top=bn[1];
}}var bp=qx.bom.element.Background.getStyles(bl,bm,bq,top);

for(var bo in bp){bk[bo]=bp[bo];
}if(bk.filter){bk.filter=g;
}return bk;
},__hm:function(bT){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bT)&&bT.indexOf(G)==-1){if(!this.__gY[bT]){qx.log.Logger.debug("Potential clipped image candidate: "+bT);
this.__gY[bT]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__ha;
},"default":function(){return false;
}})}});
})();
(function(){var c="qx.client",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__hn:{},__ho:{width:null,height:null},__hp:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(F){var G=this.__hn[F];
return !!(G&&G.loaded);
},isFailed:function(A){var B=this.__hn[A];
return !!(B&&B.failed);
},isLoading:function(f){var g=this.__hn[f];
return !!(g&&g.loading);
},getFormat:function(d){var e=this.__hn[d];
return e?e.format:null;
},getSize:function(q){var r=this.__hn[q];
return r?
{width:r.width,height:r.height}:this.__ho;
},getWidth:function(C){var D=this.__hn[C];
return D?D.width:null;
},getHeight:function(y){var z=this.__hn[y];
return z?z.height:null;
},load:function(j,k,m){var n=this.__hn[j];

if(!n){n=this.__hn[j]={};
}if(k&&!m){m=window;
}if(n.loaded||n.loading||n.failed){if(k){if(n.loading){n.callbacks.push(k,m);
}else{k.call(m,j,n);
}}}else{n.loading=true;
n.callbacks=[];

if(k){n.callbacks.push(k,m);
}var p=new Image();
var o=qx.lang.Function.listener(this.__hq,this,p,j);
p.onload=o;
p.onerror=o;
p.src=j;
}},__hq:qx.event.GlobalError.observeMethod(function(event,t,u){var v=this.__hn[u];
if(event.type===b){v.loaded=true;
v.width=this.__hr(t);
v.height=this.__hs(t);
var w=this.__hp.exec(u);

if(w!=null){v.format=w[1];
}}else{v.failed=true;
}t.onload=t.onerror=null;
var x=v.callbacks;
delete v.loading;
delete v.callbacks;
for(var i=0,l=x.length;i<l;i+=2){x[i].call(x[i+1],u,v);
}}),__hr:qx.core.Variant.select(c,{"gecko":function(H){return H.naturalWidth;
},"default":function(s){return s.width;
}}),__hs:qx.core.Variant.select(c,{"gecko":function(h){return h.naturalHeight;
},"default":function(E){return E.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__ht:[i,null,h,b,null,j,e,null,j],__hu:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__hv:function(n,top){var o=qx.bom.client.Engine;

if(o.GECKO&&o.VERSION<1.9&&n==top&&typeof n==m){top+=0.01;
}
if(n){var p=(typeof n==m)?n+k:n;
}else{p=l;
}
if(top){var q=(typeof top==m)?top+k:top;
}else{q=l;
}return p+d+q;
},compile:function(r,s,t,top){var u=this.__hv(t,top);
var v=qx.util.ResourceManager.getInstance().toUri(r);
var w=this.__ht;
w[1]=v;
w[4]=u;
w[7]=s;
return w.join(g);
},getStyles:function(x,y,z,top){if(!x){return this.__hu;
}var A=this.__hv(z,top);
var B=qx.util.ResourceManager.getInstance().toUri(x);
var C={backgroundPosition:A,backgroundImage:c+B+f};

if(y!=null){C.backgroundRepeat=y;
}return C;
},set:function(D,E,F,G,top){var H=this.getStyles(E,F,G,top);

for(var I in H){D.style[I]=H[I];
}}}});
})();
(function(){var k="source",j="scale",i="no-repeat",h="qx.client",g="mshtml",f="webkit",e="backgroundImage",d="div",c="qx.html.Image",b="qx/static/blank.gif";
qx.Class.define(c,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,p){qx.html.Element.prototype._applyProperty.call(this,name,p);

if(name===k){var t=this.getDomElement();
var q=this.getAllStyles();

if(this.getNodeName()==d&&this.getStyle(e)){q.backgroundPosition=null;
q.backgroundRepeat=null;
}var r=this._getProperty(k);
var s=this._getProperty(j);
var u=s?j:i;
if(r!=null){qx.bom.element.Decoration.update(t,r,u,q);
}}},_createDomElement:function(){var m=this._getProperty(j);
var n=m?j:i;

if(qx.core.Variant.isSet(h,g)){var l=this._getProperty(k);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(n,l));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(n));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(v){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(a){this._setProperty(k,a);
return this;
},getSource:function(){return this._getProperty(k);
},resetSource:function(){if(qx.core.Variant.isSet(h,f)){this._setProperty(k,qx.util.ResourceManager.getInstance().toUri(b));
}else{this._removeProperty(k,true);
}return this;
},setScale:function(o){this._setProperty(j,o);
return this;
},getScale:function(){return this._getProperty(j);
}}});
})();
(function(){var V="nonScaled",U="scaled",T="alphaScaled",S=".png",R="qx.client",Q="div",P="replacement",O="qx.event.type.Event",N="hidden",M="Boolean",bl="px",bk="scale",bj="changeSource",bi="__hE",bh="qx.ui.basic.Image",bg="loaded",bf="-disabled.$1",be="loadingFailed",bd="String",bc="_applySource",ba="img",bb="image",X="mshtml",Y="_applyScale",W="no-repeat";
qx.Class.define(bh,{extend:qx.ui.core.Widget,construct:function(z){this.__hE={};
qx.ui.core.Widget.call(this);

if(z){this.setSource(z);
}},properties:{source:{check:bd,init:null,nullable:true,event:bj,apply:bc,themeable:true},scale:{check:M,init:false,themeable:true,apply:Y},appearance:{refine:true,init:bb},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:O,loaded:O},members:{__hF:null,__hG:null,__hH:null,__hE:null,getContentElement:function(){return this.__hL();
},_createContentElement:function(){return this.__hL();
},_getContentHint:function(){return {width:this.__hF||0,height:this.__hG||0};
},_applyEnabled:function(b,c){qx.ui.core.Widget.prototype._applyEnabled.call(this,b,c);

if(this.getSource()){this._styleSource();
}},_applySource:function(bp){this._styleSource();
},_applyScale:function(a){this._styleSource();
},__hI:function(n){this.__hH=n;
},__hJ:function(){if(this.__hH==null){var t=this.getSource();
var s=false;

if(t!=null){s=qx.lang.String.endsWith(t,S);
}
if(this.getScale()&&s&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__hH=T;
}else if(this.getScale()){this.__hH=U;
}else{this.__hH=V;
}}return this.__hH;
},__hK:function(o){var p;
var q;

if(o==T){p=true;
q=Q;
}else if(o==V){p=false;
q=Q;
}else{p=true;
q=ba;
}var r=new qx.html.Image(q);
r.setScale(p);
r.setStyles({"overflowX":N,"overflowY":N});
return r;
},__hL:function(){var bo=this.__hJ();

if(this.__hE[bo]==null){this.__hE[bo]=this.__hK(bo);
}return this.__hE[bo];
},_styleSource:function(){var g=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!g){this.getContentElement().resetSource();
return;
}this.__hM(g);

if(qx.core.Variant.isSet(R,X)){var h=this.getScale()?bk:W;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(h,g);
}if(qx.util.ResourceManager.getInstance().has(g)){this.__hO(this.getContentElement(),g);
}else if(qx.io.ImageLoader.isLoaded(g)){this.__hP(this.getContentElement(),g);
}else{this.__hQ(this.getContentElement(),g);
}},__hM:qx.core.Variant.select(R,{"mshtml":function(d){var f=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var e=qx.lang.String.endsWith(d,S);

if(f&&e){if(this.getScale()&&this.__hJ()!=T){this.__hI(T);
}else if(!this.getScale()&&this.__hJ()!=V){this.__hI(V);
}}else{if(this.getScale()&&this.__hJ()!=U){this.__hI(U);
}else if(!this.getScale()&&this.__hJ()!=V){this.__hI(V);
}}this.__hN(this.__hL());
},"default":function(u){if(this.getScale()&&this.__hJ()!=U){this.__hI(U);
}else if(!this.getScale()&&this.__hJ(V)){this.__hI(V);
}this.__hN(this.__hL());
}}),__hN:function(F){var I=this.getContainerElement();
var J=I.getChild(0);

if(J!=F){if(J!=null){var L=bl;
var G={};
var H=this.getInnerSize();

if(H!=null){G.width=H.width+L;
G.height=H.height+L;
}var K=this.getInsets();
G.left=K.left+L;
G.top=K.top+L;
G.zIndex=10;
F.setStyles(G,true);
F.setSelectable(this.getSelectable());
}I.removeAt(0);
I.addAt(F,0);
}},__hO:function(v,w){var y=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var x=w.replace(/\.([a-z]+)$/,bf);

if(y.has(x)){w=x;
this.addState(P);
}else{this.removeState(P);
}}if(v.getSource()===w){return;
}v.setSource(w);
this.__hS(y.getImageWidth(w),y.getImageHeight(w));
},__hP:function(A,B){var D=qx.io.ImageLoader;
A.setSource(B);
var C=D.getWidth(B);
var E=D.getHeight(B);
this.__hS(C,E);
},__hQ:function(i,j){var self;
var k=qx.io.ImageLoader;
{};
if(!k.isFailed(j)){k.load(j,this.__hR,this);
}else{if(i!=null){i.resetSource();
}}},__hR:function(l,m){if(this.$$disposed===true){return;
}if(l!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(m.failed){this.warn("Image could not be loaded: "+l);
this.fireEvent(be);
}else{this.fireEvent(bg);
}this._styleSource();
},__hS:function(bm,bn){if(bm!==this.__hF||bn!==this.__hG){this.__hF=bm;
this.__hG=bn;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(bi);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){qx.ui.basic.Image.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var j=this.getApplicationRoot();
j.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(h,i){if(i){this.removeState(i);
}
if(h){this.addState(h);
}}}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__ib=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__ib:null,_applyTimeoutInterval:function(h){this.__ib.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__ib){this.__ib.stop();
}this.__ib=null;
}});
})();
(function(){var q="top",p="right",o="bottom",n="left",m="align-start",l="qx.util.placement.AbstractAxis",k="edge-start",j="align-end",i="edge-end",h="-",e="best-fit",g="qx.util.placement.Placement",f="keep-align",d='__ic',c="direct";
qx.Class.define(g,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__ic=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:l},axisY:{check:l},edge:{check:[q,p,o,n],init:q},align:{check:[q,p,o,n],init:p}},statics:{__id:null,compute:function(B,C,D,E,F,G,H){this.__id=this.__id||new qx.util.placement.Placement();
var K=F.split(h);
var J=K[0];
var I=K[1];
this.__id.set({axisX:this.__ih(G),axisY:this.__ih(H),edge:J,align:I});
return this.__id.compute(B,C,D,E);
},__ie:null,__if:null,__ig:null,__ih:function(t){switch(t){case c:this.__ie=this.__ie||new qx.util.placement.DirectAxis();
return this.__ie;
case f:this.__if=this.__if||new qx.util.placement.KeepAlignAxis();
return this.__if;
case e:this.__ig=this.__ig||new qx.util.placement.BestFitAxis();
return this.__ig;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__ic:null,compute:function(u,v,w,x){{};
var y=this.getAxisX()||this.__ic;
var A=y.computeStart(u.width,{start:w.left,end:w.right},{start:x.left,end:x.right},v.width,this.__ii());
var z=this.getAxisY()||this.__ic;
var top=z.computeStart(u.height,{start:w.top,end:w.bottom},{start:x.top,end:x.bottom},v.height,this.__ij());
return {left:A,top:top};
},__ii:function(){var b=this.getEdge();
var a=this.getAlign();

if(b==n){return k;
}else if(b==p){return i;
}else if(a==n){return m;
}else if(a==p){return j;
}},__ij:function(){var s=this.getEdge();
var r=this.getAlign();

if(s==q){return k;
}else if(s==o){return i;
}else if(r==q){return m;
}else if(r==o){return j;
}}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(m,n,o,p,q){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(i,j,k,l){switch(l){case e:return j.start-k.end-i;
case b:return j.end+k.start;
case d:return j.start+k.start;
case c:return j.end-k.end-i;
}},_isInRange:function(f,g,h){return f>=0&&f+g<=h;
}}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var c="qx.util.placement.KeepAlignAxis",b="edge-start",a="edge-end";
qx.Class.define(c,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(d,e,f,g,h){var i=this._moveToEdgeAndAlign(d,e,f,h);
var j,k;

if(this._isInRange(i,d,g)){return i;
}
if(h==b||h==a){j=e.start-f.end;
k=e.end+f.start;
}else{j=e.end-f.end;
k=e.start+f.start;
}
if(j>g-k){i=j-d;
}else{i=k;
}return i;
}}});
})();
(function(){var a="qx.util.placement.BestFitAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){var g=this._moveToEdgeAndAlign(b,c,d,f);

if(this._isInRange(g,b,e)){return g;
}
if(g<0){g=Math.min(0,e-b);
}
if(g+b>e){g=Math.max(0,e-b);
}return g;
}}});
})();
(function(){var f="blur",d="mousedown",c="__mt",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__mt={};
qx.event.Registration.addListener(document.documentElement,d,this.__mv,this,true);
qx.event.Registration.addListener(window,f,this.hideAll,this);
},members:{__mt:null,add:function(j){{};
this.__mt[j.$$hash]=j;
this.__mu();
},remove:function(o){{};
var p=this.__mt;

if(p){delete p[o.$$hash];
this.__mu();
}},hideAll:function(){var h=this.__mt;

if(h){for(var g in h){h[g].exclude();
}}},__mu:function(){var s=1e7;
var r=this.__mt;

for(var q in r){r[q].setZIndex(s++);
}},__mv:function(e){var m=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var n=this.__mt;

for(var l in n){var k=n[l];

if(!k.getAutoHide()||m==k||qx.ui.core.Widget.contains(k,m)){continue;
}k.exclude();
}}},destruct:function(){var i=qx.event.Registration;
i.removeListener(document.documentElement,d,this.__mv,this,true);
i.removeListener(window,f,this.hideAll,this);
this._disposeMap(c);
}});
})();
(function(){var d="abstract",c="qx.ui.layout.Abstract";
qx.Class.define(c,{type:d,extend:qx.core.Object,members:{__io:null,_invalidChildrenCache:null,__ip:null,invalidateLayoutCache:function(){this.__io=null;
},renderLayout:function(f,g){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__io){return this.__io;
}return this.__io=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(h){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var e=this.__ip;

if(e instanceof qx.ui.core.LayoutItem){e.clearSeparators();
}},_renderSeparator:function(a,b){this.__ip.renderSeparator(a,b);
},connectToWidget:function(i){if(i&&this.__ip){throw new Error("It is not possible to manually set the connected widget.");
}this.__ip=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__ip;
},_applyLayoutChange:function(){if(this.__ip){this.__ip.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__ip.getLayoutChildren();
}},destruct:function(){this.__ip=this.__io=null;
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(m,n){var r=this._getLayoutChildren();
var q,s,p,o;
for(var i=0,l=r.length;i<l;i++){q=r[i];
s=q.getSizeHint();
p=m;

if(p<s.minWidth){p=s.minWidth;
}else if(p>s.maxWidth){p=s.maxWidth;
}o=n;

if(o<s.minHeight){o=s.minHeight;
}else if(o>s.maxHeight){o=s.maxHeight;
}q.renderLayout(0,0,p,o);
}},_computeSizeHint:function(){var h=this._getLayoutChildren();
var f,k;
var j=0,g=0;
var e=0,c=0;
var b=Infinity,d=Infinity;
for(var i=0,l=h.length;i<l;i++){f=h[i];
k=f.getSizeHint();
j=Math.max(j,k.width);
g=Math.max(g,k.height);
e=Math.max(e,k.minWidth);
c=Math.max(c,k.minHeight);
b=Math.min(b,k.maxWidth);
d=Math.min(d,k.maxHeight);
}return {width:j,height:g,minWidth:e,minHeight:c,maxWidth:b,maxHeight:d};
}}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",w="changeIcon",v="qx.ui.basic.Atom",u="changeLabel",t="Integer",s="_applyIconPosition",r="top",q="right",p="_applyRich",o="_applyIcon",n="_applyShow",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(B,C){{};
qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(B!=null){this.setLabel(B);
}
if(C!=null){this.setIcon(C);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:u},rich:{check:h,init:false,apply:p},icon:{check:f,apply:o,nullable:true,themeable:true,event:w},gap:{check:t,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:n,event:c},iconPosition:{init:e,check:[r,q,b,e],themeable:true,apply:s},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(M){var N;

switch(M){case j:N=new qx.ui.basic.Label(this.getLabel());
N.setAnonymous(true);
N.setRich(this.getRich());
this._add(N);

if(this.getLabel()==null||this.getShow()===i){N.exclude();
}break;
case i:N=new qx.ui.basic.Image(this.getIcon());
N.setAnonymous(true);
this._addAt(N,0);

if(this.getIcon()==null||this.getShow()===j){N.exclude();
}break;
}return N||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,M);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(J,K){var L=this.getChildControl(j,true);

if(L){L.setValue(J);
}this._handleLabel();
},_applyRich:function(G,H){var I=this.getChildControl(j,true);

if(I){I.setRich(G);
}},_applyIcon:function(D,E){var F=this.getChildControl(i,true);

if(F){F.setSource(D);
}this._handleIcon();
},_applyGap:function(x,y){this._getLayout().setGap(x);
},_applyShow:function(z,A){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(Q,R){this._getLayout().setIconPosition(Q);
},_applyCenter:function(O,P){this._getLayout().setCenter(O);
}}});
})();
(function(){var k="bottom",j="_applyLayoutChange",h="top",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",b="Integer",a="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:b,init:4,apply:j},iconPosition:{check:[g,h,f,k],init:g,apply:j},center:{check:a,init:false,apply:j}},members:{verifyLayoutProperty:null,renderLayout:function(l,m){var v=qx.ui.layout.Util;
var o=this.getIconPosition();
var r=this._getLayoutChildren();
var length=r.length;
var F,top,w,p;
var B,u;
var z=this.getGap();
var E=this.getCenter();
if(o===k||o===f){var x=length-1;
var s=-1;
var q=-1;
}else{var x=0;
var s=length;
var q=1;
}if(o==h||o==k){if(E){var A=0;

for(var i=x;i!=s;i+=q){p=r[i].getSizeHint().height;

if(p>0){A+=p;

if(i!=x){A+=z;
}}}top=Math.round((m-A)/2);
}else{top=0;
}
for(var i=x;i!=s;i+=q){B=r[i];
u=B.getSizeHint();
w=Math.min(u.maxWidth,Math.max(l,u.minWidth));
p=u.height;
F=v.computeHorizontalAlignOffset(d,w,l);
B.renderLayout(F,top,w,p);
if(p>0){top+=p+z;
}}}else{var t=l;
var n=null;
var D=0;

for(var i=x;i!=s;i+=q){B=r[i];
w=B.getSizeHint().width;

if(w>0){if(!n&&B instanceof qx.ui.basic.Label){n=B;
}else{t-=w;
}D++;
}}
if(D>1){var C=(D-1)*z;
t-=C;
}
if(n){var u=n.getSizeHint();
var y=Math.max(u.minWidth,Math.min(t,u.maxWidth));
t-=y;
}
if(E&&t>0){F=Math.round(t/2);
}else{F=0;
}
for(var i=x;i!=s;i+=q){B=r[i];
u=B.getSizeHint();
p=Math.min(u.maxHeight,Math.max(m,u.minHeight));

if(B===n){w=y;
}else{w=u.width;
}top=v.computeVerticalAlignOffset(e,u.height,m);
B.renderLayout(F,top,w,p);
if(w>0){F+=w+z;
}}}},_computeSizeHint:function(){var Q=this._getLayoutChildren();
var length=Q.length;
var I,O;
if(length===1){var I=Q[0].getSizeHint();
O={width:I.width,height:I.height,minWidth:I.minWidth,minHeight:I.minHeight};
}else{var M=0,N=0;
var J=0,L=0;
var K=this.getIconPosition();
var P=this.getGap();

if(K===h||K===k){var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
N=Math.max(N,I.width);
M=Math.max(M,I.minWidth);
if(I.height>0){L+=I.height;
J+=I.minHeight;
G++;
}}
if(G>1){var H=(G-1)*P;
L+=H;
J+=H;
}}else{var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
L=Math.max(L,I.height);
J=Math.max(J,I.minHeight);
if(I.width>0){N+=I.width;
M+=I.minWidth;
G++;
}}
if(G>1){var H=(G-1)*P;
N+=H;
M+=H;
}}O={minWidth:M,width:N,minHeight:J,height:L};
}return O;
}}});
})();
(function(){var q="middle",p="qx.ui.layout.Util",o="left",n="center",m="top",k="bottom",j="right";
qx.Class.define(p,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(ba,bb,bc){var be,bi,bd,bj;
var bf=bb>bc;
var bk=Math.abs(bb-bc);
var bl,bg;
var bh={};

for(bi in ba){be=ba[bi];
bh[bi]={potential:bf?be.max-be.value:be.value-be.min,flex:bf?be.flex:1/be.flex,offset:0};
}while(bk!=0){bj=Infinity;
bd=0;

for(bi in bh){be=bh[bi];

if(be.potential>0){bd+=be.flex;
bj=Math.min(bj,be.potential/be.flex);
}}if(bd==0){break;
}bj=Math.min(bk,bj*bd)/bd;
bl=0;

for(bi in bh){be=bh[bi];

if(be.potential>0){bg=Math.min(bk,be.potential,Math.ceil(bj*be.flex));
bl+=bg-bj*be.flex;

if(bl>=1){bl-=1;
bg-=1;
}be.potential-=bg;

if(bf){be.offset+=bg;
}else{be.offset-=bg;
}bk-=bg;
}}}return bh;
},computeHorizontalAlignOffset:function(r,s,t,u,v){if(u==null){u=0;
}
if(v==null){v=0;
}var w=0;

switch(r){case o:w=u;
break;
case j:w=t-s-v;
break;
case n:w=Math.round((t-s)/2);
if(w<u){w=u;
}else if(w<v){w=Math.max(u,t-s-v);
}break;
}return w;
},computeVerticalAlignOffset:function(T,U,V,W,X){if(W==null){W=0;
}
if(X==null){X=0;
}var Y=0;

switch(T){case m:Y=W;
break;
case k:Y=V-U-X;
break;
case q:Y=Math.round((V-U)/2);
if(Y<W){Y=W;
}else if(Y<X){Y=Math.max(W,V-U-X);
}break;
}return Y;
},collapseMargins:function(F){var G=0,I=0;

for(var i=0,l=arguments.length;i<l;i++){var H=arguments[i];

if(H<0){I=Math.min(I,H);
}else if(H>0){G=Math.max(G,H);
}}return G+I;
},computeHorizontalGaps:function(bm,bn,bo){if(bn==null){bn=0;
}var bp=0;

if(bo){bp+=bm[0].getMarginLeft();

for(var i=1,l=bm.length;i<l;i+=1){bp+=this.collapseMargins(bn,bm[i-1].getMarginRight(),bm[i].getMarginLeft());
}bp+=bm[l-1].getMarginRight();
}else{for(var i=1,l=bm.length;i<l;i+=1){bp+=bm[i].getMarginLeft()+bm[i].getMarginRight();
}bp+=(bn*(l-1));
}return bp;
},computeVerticalGaps:function(P,Q,R){if(Q==null){Q=0;
}var S=0;

if(R){S+=P[0].getMarginTop();

for(var i=1,l=P.length;i<l;i+=1){S+=this.collapseMargins(Q,P[i-1].getMarginBottom(),P[i].getMarginTop());
}S+=P[l-1].getMarginBottom();
}else{for(var i=1,l=P.length;i<l;i+=1){S+=P[i].getMarginTop()+P[i].getMarginBottom();
}S+=(Q*(l-1));
}return S;
},computeHorizontalSeparatorGaps:function(x,y,z){var C=qx.theme.manager.Decoration.getInstance().resolve(z);
var B=C.getInsets();
var A=B.left+B.right;
var D=0;

for(var i=0,l=x.length;i<l;i++){var E=x[i];
D+=E.getMarginLeft()+E.getMarginRight();
}D+=(y+A+y)*(l-1);
return D;
},computeVerticalSeparatorGaps:function(a,b,c){var f=qx.theme.manager.Decoration.getInstance().resolve(c);
var e=f.getInsets();
var d=e.top+e.bottom;
var g=0;

for(var i=0,l=a.length;i<l;i++){var h=a[i];
g+=h.getMarginTop()+h.getMarginBottom();
}g+=(b+d+b)*(l-1);
return g;
},arrangeIdeals:function(J,K,L,M,N,O){if(K<J||N<M){if(K<J&&N<M){K=J;
N=M;
}else if(K<J){N-=(J-K);
K=J;
if(N<M){N=M;
}}else if(N<M){K-=(M-N);
N=M;
if(K<J){K=J;
}}}
if(K>L||N>O){if(K>L&&N>O){K=L;
N=O;
}else if(K>L){N+=(K-L);
K=L;
if(N>O){N=O;
}}else if(N>O){K+=(N-O);
N=O;
if(K>L){K=L;
}}}return {begin:K,end:N};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var l="qx.dynlocale",k="text",j="Boolean",i="qx.client",h="color",g="userSelect",f="changeLocale",d="enabled",c="none",b="on",J="_applyTextAlign",I="qx.ui.core.Widget",H="nowrap",G="gecko",F="changeTextAlign",E="_applyWrap",D="changeValue",C="changeContent",B="qx.ui.basic.Label",A="A",s="whiteSpace",t="_applyValue",q="center",r="_applyBuddy",o="String",p="textAlign",m="right",n="changeRich",u="normal",v="_applyRich",x="click",w="label",z="webkit",y="left";
qx.Class.define(B,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(R){qx.ui.core.Widget.call(this);

if(R!=null){this.setValue(R);
}
if(qx.core.Variant.isSet(l,b)){qx.locale.Manager.getInstance().addListener(f,this._onChangeLocale,this);
}},properties:{rich:{check:j,init:false,event:n,apply:v},wrap:{check:j,init:true,apply:E},value:{check:o,apply:t,event:D,nullable:true},buddy:{check:I,apply:r,nullable:true,init:null},textAlign:{check:[y,q,m],nullable:true,themeable:true,apply:J,event:F},appearance:{refine:true,init:w},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__iq:null,__ir:null,__is:null,__it:null,_getContentHint:function(){if(this.__ir){this.__iu=this.__iv();
delete this.__ir;
}return {width:this.__iu.width,height:this.__iu.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(S){if(qx.core.Variant.isSet(i,G)){if(S&&!this.isRich()){{};
return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,S);
if(qx.core.Variant.isSet(i,z)){this.getContainerElement().setStyle(g,S?k:c);
this.getContentElement().setStyle(g,S?k:c);
}},_getContentHeightForWidth:function(a){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__iv(a).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(ba,bb){this.getContentElement().setStyle(p,ba);
},_applyTextColor:function(X,Y){if(X){this.getContentElement().setStyle(h,qx.theme.manager.Color.getInstance().resolve(X));
}else{this.getContentElement().removeStyle(h);
}},__iu:{width:0,height:0},_applyFont:function(bc,bd){var be;

if(bc){this.__iq=qx.theme.manager.Font.getInstance().resolve(bc);
be=this.__iq.getStyles();
}else{this.__iq=null;
be=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(be);
this.__ir=true;
qx.ui.core.queue.Layout.add(this);
},__iv:function(K){var O=qx.bom.Label;
var M=this.getFont();
var L=M?this.__iq.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||A;
var N=this.getRich();
return N?O.getHtmlSize(content,L,K):O.getTextSize(content,L);
},_applyBuddy:function(P,Q){if(Q!=null){Q.removeBinding(this.__is);
this.__is=null;
this.removeListenerById(this.__it);
this.__it=null;
}
if(P!=null){this.__is=P.bind(d,this,d);
this.__it=this.addListener(x,function(){if(P.isFocusable()){P.focus.apply(P);
}},this);
}},_applyRich:function(T){this.getContentElement().setRich(T);
this.__ir=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(U,V){if(U&&!this.isRich()){{};
}
if(this.isRich()){var W=U?u:H;
this.getContentElement().setStyle(s,W);
}},_onChangeLocale:qx.core.Variant.select(l,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(bf,bg){this.getContentElement().setValue(bf);
this.__ir=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(C,bf,bg);
}},destruct:function(){if(qx.core.Variant.isSet(l,b)){qx.locale.Manager.getInstance().removeListener(f,this._onChangeLocale,this);
}if(this.__is!=null){var bh=this.getBuddy();

if(bh!=null&&!bh.isDisposed()){bh.removeBinding(this.__is);
}}this.__iq=this.__is=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__iw:null,_applyProperty:function(name,i){qx.html.Element.prototype._applyProperty.call(this,name,i);

if(name==b){var j=this.getDomElement();
qx.bom.Label.setValue(j,i);
}},_createDomElement:function(){var d=this.__iw;
var c=qx.bom.Label.create(this._content,d);
return c;
},_copyData:function(h){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(f){var g=this.getDomElement();

if(g){throw new Error("The label mode cannot be modified after initial creation");
}f=!!f;

if(this.__iw==f){return;
}this.__iw=f;
return this;
},setValue:function(e){this._setProperty(b,e);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var j="qx.client",i="gecko",h="div",g="inherit",f="text",e="value",d="",c="hidden",b="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",a="nowrap",z="auto",y="0",x="ellipsis",w="normal",v="label",u="px",t="crop",s="end",r="100%",q="visible",o="qx.bom.Label",p="opera",m="block",n="none",k="-1000px",l="absolute";
qx.Class.define(o,{statics:{__ix:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__iy:function(){var I=this.__iA(false);
document.body.insertBefore(I,document.body.firstChild);
return this._textElement=I;
},__iz:function(){var V=this.__iA(true);
document.body.insertBefore(V,document.body.firstChild);
return this._htmlElement=V;
},__iA:function(Y){var ba=qx.bom.Element.create(h);
var bb=ba.style;
bb.width=bb.height=z;
bb.left=bb.top=k;
bb.visibility=c;
bb.position=l;
bb.overflow=q;

if(Y){bb.whiteSpace=w;
}else{bb.whiteSpace=a;

if(qx.core.Variant.isSet(j,i)){var bc=document.createElementNS(b,v);
var bb=bc.style;
bb.padding=y;

for(var bd in this.__ix){bb[bd]=g;
}ba.appendChild(bc);
}}return ba;
},__iB:function(G){var H={};

if(G){H.whiteSpace=w;
}else if(qx.core.Variant.isSet(j,i)){H.display=m;
}else{H.overflow=c;
H.whiteSpace=a;
H.textOverflow=x;
H.userSelect=n;
if(qx.core.Variant.isSet(j,p)){H.OTextOverflow=x;
}}return H;
},create:function(content,A,B){if(!B){B=window;
}
if(A){var C=B.document.createElement(h);
C.useHtml=true;
}else if(qx.core.Variant.isSet(j,i)){var C=B.document.createElement(h);
var E=B.document.createElementNS(b,v);
var D=E.style;
D.cursor=g;
D.color=g;
D.overflow=c;
D.maxWidth=r;
D.padding=y;
for(var F in this.__ix){E.style[F]=g;
}E.setAttribute(t,s);
C.appendChild(E);
}else{var C=B.document.createElement(h);
qx.bom.element.Style.setStyles(C,this.__iB(A));
}
if(content){this.setValue(C,content);
}return C;
},setValue:function(W,X){X=X||d;

if(W.useHtml){W.innerHTML=X;
}else if(qx.core.Variant.isSet(j,i)){W.firstChild.setAttribute(e,X);
}else{qx.bom.element.Attribute.set(W,f,X);
}},getValue:function(M){if(M.useHtml){return M.innerHTML;
}else if(qx.core.Variant.isSet(j,i)){return M.firstChild.getAttribute(e)||d;
}else{return qx.bom.element.Attribute.get(M,f);
}},getHtmlSize:function(content,N,O){var P=this._htmlElement||this.__iz();
P.style.width=O!==undefined?O+u:z;
P.innerHTML=content;
return this.__iC(P,N);
},getTextSize:function(J,K){var L=this._textElement||this.__iy();

if(qx.core.Variant.isSet(j,i)){L.firstChild.setAttribute(e,J);
}else{qx.bom.element.Attribute.set(L,f,J);
}return this.__iC(L,K);
},__iC:function(Q,R){var S=this.__ix;

if(!R){R={};
}
for(var T in S){Q.style[T]=R[T]||d;
}var U=qx.bom.element.Dimension.getSize(Q);

if(qx.core.Variant.isSet(j,i)){if(!qx.bom.client.Platform.WIN){U.width++;
}}return U;
}}});
})();
(function(){var j="0px",i="mshtml",h="qx.client",g="qx.bom.element.Dimension",f="paddingRight",e="paddingLeft",d="paddingTop",c="paddingBottom";
qx.Class.define(g,{statics:{getWidth:qx.core.Variant.select(h,{"gecko":function(C){if(C.getBoundingClientRect){var D=C.getBoundingClientRect();
return Math.round(D.right)-Math.round(D.left);
}else{return C.offsetWidth;
}},"default":function(m){return m.offsetWidth;
}}),getHeight:qx.core.Variant.select(h,{"gecko":function(a){if(a.getBoundingClientRect){var b=a.getBoundingClientRect();
return Math.round(b.bottom)-Math.round(b.top);
}else{return a.offsetHeight;
}},"default":function(l){return l.offsetHeight;
}}),getSize:function(k){return {width:this.getWidth(k),height:this.getHeight(k)};
},__iD:{visible:true,hidden:true},getContentWidth:function(v){var x=qx.bom.element.Style;
var y=qx.bom.element.Overflow.getX(v);
var z=parseInt(x.get(v,e)||j,10);
var B=parseInt(x.get(v,f)||j,10);

if(this.__iD[y]){return v.clientWidth-z-B;
}else{if(v.clientWidth>=v.scrollWidth){return Math.max(v.clientWidth,v.scrollWidth)-z-B;
}else{var A=v.scrollWidth-z;
var w=qx.bom.client.Engine;

if(w.NAME===i&&w.VERSION==6){A-=B;
}return A;
}}},getContentHeight:function(n){var p=qx.bom.element.Style;
var r=qx.bom.element.Overflow.getY(n);
var s=parseInt(p.get(n,d)||j,10);
var q=parseInt(p.get(n,c)||j,10);

if(this.__iD[r]){return n.clientHeight-s-q;
}else{if(n.clientHeight>=n.scrollHeight){return Math.max(n.clientHeight,n.scrollHeight)-s-q;
}else{var t=n.scrollHeight-s;
var o=qx.bom.client.Engine;

if(o.NAME===i&&o.VERSION==6){t-=q;
}return t;
}}},getContentSize:function(u){return {width:this.getContentWidth(u),height:this.getContentHeight(u)};
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IForm";
qx.Interface.define(b,{events:{"changeEnabled":c,"changeValid":c,"changeInvalidMessage":c,"changeRequired":c},members:{setEnabled:function(e){return arguments.length==1;
},getEnabled:function(){},setRequired:function(d){return arguments.length==1;
},getRequired:function(){},setValid:function(a){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(g){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(f){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
})();
(function(){var f="_applyBlockerColor",e="Number",d="__nK",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__nK=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__nK:null,_applyBlockerColor:function(h,i){this.__nK.setColor(h);
},_applyBlockerOpacity:function(j,k){this.__nK.setOpacity(j);
},block:function(){this.__nK.block();
},isBlocked:function(){return this.__nK.isBlocked();
},unblock:function(){this.__nK.unblock();
},forceUnblock:function(){this.__nK.forceUnblock();
},blockContent:function(g){this.__nK.blockContent(g);
},isContentBlocked:function(){return this.__nK.isContentBlocked();
},unblockContent:function(){this.__nK.unblockContent();
},forceUnblockContent:function(){this.__nK.forceUnblockContent();
},getBlocker:function(){return this.__nK;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__nM",b="qx.ui.window.MDesktop",a="__nL";
qx.Mixin.define(b,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__nL:null,__nM:null,getWindowManager:function(){if(!this.__nM){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__nM;
},supportsMaximize:function(){return true;
},setWindowManager:function(n){if(this.__nM){this.__nM.setDesktop(null);
}n.setDesktop(this);
this.__nM=n;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(j,k){this.getWindowManager().changeActiveWindow(j,k);
this.getWindowManager().updateStack();
},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._addWindow(o);
}},_addWindow:function(l){if(!qx.lang.Array.contains(this.getWindows(),l)){this.getWindows().push(l);
l.addListener(f,this._onChangeActive,this);
l.addListener(h,this._onChangeModal,this);
l.addListener(g,this._onChangeVisibility,this);
}
if(l.getActive()){this.setActiveWindow(l);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(p){if(qx.Class.isDefined(i)&&p instanceof qx.ui.window.Window){this._removeWindow(p);
}},_removeWindow:function(m){qx.lang.Array.remove(this.getWindows(),m);
m.removeListener(f,this._onChangeActive,this);
m.removeListener(h,this._onChangeModal,this);
m.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__nL){this.__nL=[];
}return this.__nL;
}},destruct:function(){this._disposeArray(a);
this._disposeObjects(c);
}});
})();
(function(){var r="contextmenu",q="help",p="qx.client",o="changeGlobalCursor",n="abstract",m="Boolean",l="root",k="",j=" !important",i="_applyGlobalCursor",f="_applyNativeHelp",h=";",g="qx.ui.root.Abstract",d="String",c="*";
qx.Class.define(g,{type:n,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
this.setEnabled(true);
},properties:{appearance:{refine:true,init:l},focusable:{refine:true,init:true},globalCursor:{check:d,nullable:true,themeable:true,apply:i,event:o},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:m,init:false,apply:f}},members:{__nN:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(p,{"mshtml":function(A,B){},"default":function(s,t){var u=qx.bom.Stylesheet;
var v=this.__nN;

if(!v){this.__nN=v=u.createElement();
}u.removeAllRules(v);

if(s){u.addRule(v,c,qx.bom.element.Cursor.compile(s).replace(h,k)+j);
}}}),_applyNativeContextMenu:function(y,z){if(y){this.removeListener(r,this._onNativeContextMenu,this,true);
}else{this.addListener(r,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(p,{"mshtml":function(a,b){if(b===false){qx.bom.Event.removeNativeListener(document,q,qx.lang.Function.returnFalse);
}
if(a===false){qx.bom.Event.addNativeListener(document,q,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__nN=null;
},defer:function(w,x){qx.ui.core.MChildrenHandling.remap(x);
}});
})();
(function(){var n="resize",m="position",l="0px",k="webkit",j="paddingLeft",i="$$widget",h="qx.ui.root.Application",g="hidden",f="qx.client",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(h,{extend:qx.ui.root.Abstract,construct:function(v){this.__nO=qx.dom.Node.getWindow(v);
this.__nP=v;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__nO,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__nO:null,__nP:null,_createContainerElement:function(){var o=this.__nP;
if(qx.core.Variant.isSet(f,k)){if(!o.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var s=o.documentElement.style;
var p=o.body.style;
s.overflow=p.overflow=g;
s.padding=s.margin=p.padding=p.margin=l;
s.width=s.height=p.width=p.height=c;
var r=o.createElement(d);
o.body.appendChild(r);
var q=new qx.html.Root(r);
q.setStyle(m,b);
q.setAttribute(i,this.toHashCode());
return q;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var t=qx.bom.Viewport.getWidth(this.__nO);
var u=qx.bom.Viewport.getHeight(this.__nO);
return {minWidth:t,width:t,maxWidth:t,minHeight:u,height:u,maxHeight:u};
},_applyPadding:function(z,A,name){if(z&&(name==a||name==j)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,z,A,name);
},_applyDecorator:function(w,x){qx.ui.root.Abstract.prototype._applyDecorator.call(this,w,x);

if(!w){return;
}var y=this.getDecoratorElement().getInsets();

if(y.left||y.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__nO=this.__nP=null;
}});
})();
(function(){var A="zIndex",z="px",y="keydown",x="deactivate",w="resize",v="keyup",u="keypress",t="backgroundColor",s="_applyOpacity",r="Boolean",M="__nB",L="__nz",K="opacity",J="interval",I="__nx",H="Tab",G="Color",F="qx.ui.root.Page",E="Number",D="qx.ui.core.Blocker",B="qx.ui.root.Application",C="_applyColor";
qx.Class.define(D,{extend:qx.core.Object,construct:function(Q){qx.core.Object.call(this);
this._widget=Q;
this._isPageRoot=(qx.Class.isDefined(F)&&Q instanceof qx.ui.root.Page);

if(this._isPageRoot){Q.addListener(w,this.__nC,this);
}
if(qx.Class.isDefined(B)&&Q instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__nu=[];
this.__nv=[];
this.__nw=[];
},properties:{color:{check:G,init:null,nullable:true,apply:C,themeable:true},opacity:{check:E,init:1,apply:s,themeable:true},keepBlockerActive:{check:r,init:false}},members:{__nx:null,__ny:0,__nz:null,__nw:null,__nu:null,__nv:null,__nA:null,__nB:null,_isPageRoot:false,_widget:null,__nC:function(e){var T=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:T.width,height:T.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:T.width,height:T.height});
}},_applyColor:function(m,n){var o=qx.theme.manager.Color.getInstance().resolve(m);
this.__nD(t,o);
},_applyOpacity:function(R,S){this.__nD(K,R);
},__nD:function(N,O){var P=[];
this.__nx&&P.push(this.__nx);
this.__nz&&P.push(this.__nz);

for(var i=0;i<P.length;i++){P[i].setStyle(N,O);
}},_backupActiveWidget:function(){var d=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__nu.push(d.getActive());
this.__nv.push(d.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var c=this.__nu.length;

if(c>0){var b=this.__nu[c-1];

if(b){qx.bom.Element.activate(b);
}this.__nu.pop();
}var a=this.__nv.length;

if(a>0){var b=this.__nv[a-1];

if(b){qx.bom.Element.focus(this.__nv[a-1]);
}this.__nv.pop();
}},__nE:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__nx){this.__nx=this.__nE();
this.__nx.setStyle(A,15);
this._widget.getContainerElement().add(this.__nx);
this.__nx.exclude();
}return this.__nx;
},block:function(){this.__ny++;

if(this.__ny<2){this._backupActiveWidget();
var f=this.getBlockerElement();
f.include();
f.activate();
f.addListener(x,this.__nJ,this);
f.addListener(u,this.__nI,this);
f.addListener(y,this.__nI,this);
f.addListener(v,this.__nI,this);
}},isBlocked:function(){return this.__ny>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__ny--;

if(this.__ny<1){this.__nF();
this.__ny=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__ny=0;
this.__nF();
},__nF:function(){this._restoreActiveWidget();
var g=this.getBlockerElement();
g.removeListener(x,this.__nJ,this);
g.removeListener(u,this.__nI,this);
g.removeListener(y,this.__nI,this);
g.removeListener(v,this.__nI,this);
g.exclude();
},getContentBlockerElement:function(){if(!this.__nz){this.__nz=this.__nE();
this._widget.getContentElement().add(this.__nz);
this.__nz.exclude();
}return this.__nz;
},blockContent:function(p){var q=this.getContentBlockerElement();
q.setStyle(A,p);
this.__nw.push(p);

if(this.__nw.length<2){q.include();

if(this._isPageRoot){if(!this.__nB){this.__nB=new qx.event.Timer(300);
this.__nB.addListener(J,this.__nH,this);
}this.__nB.start();
this.__nH();
}}},isContentBlocked:function(){return this.__nw.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nw.pop();
var h=this.__nw[this.__nw.length-1];
var j=this.getContentBlockerElement();
j.setStyle(A,h);

if(this.__nw.length<1){this.__nG();
this.__nw=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nw=[];
var U=this.getContentBlockerElement();
U.setStyle(A,null);
this.__nG();
},__nG:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__nB.stop();
}},__nH:function(){var k=this._widget.getContainerElement().getDomElement();
var l=qx.dom.Node.getDocument(k);
this.getContentBlockerElement().setStyles({height:l.documentElement.scrollHeight+z,width:l.documentElement.scrollWidth+z});
},__nI:function(e){if(e.getKeyIdentifier()==H){e.stop();
}},__nJ:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(w,this.__nC,this);
}this._disposeObjects(L,I,M);
this.__nA=this.__nu=this.__nv=this._widget=this.__nw=null;
}});
})();
(function(){var k="cursor",j="100%",i="repeat",h="mousedown",g="url(",f=")",d="mouseout",c="qx.client",b="div",a="dblclick",w="mousewheel",v="qx.html.Blocker",u="mousemove",t="mouseover",s="appear",r="click",q="mshtml",p="mouseup",o="contextmenu",n="disappear",l="qx/static/blank.gif",m="absolute";
qx.Class.define(v,{extend:qx.html.Element,construct:function(x,y){var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
var z={position:m,width:j,height:j,opacity:y||0,backgroundColor:x};
if(qx.core.Variant.isSet(c,q)){z.backgroundImage=g+qx.util.ResourceManager.getInstance().toUri(l)+f;
z.backgroundRepeat=i;
}qx.html.Element.call(this,b,z);
this.addListener(h,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(a,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(w,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(s,this.__og,this);
this.addListener(n,this.__og,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__og:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var t="keypress",s="focusout",r="activate",q="__nQ",p="Tab",o="singleton",n="deactivate",m="focusin",k="qx.ui.core.FocusHandler";
qx.Class.define(k,{extend:qx.core.Object,type:o,construct:function(){qx.core.Object.call(this);
this.__nQ={};
},members:{__nQ:null,__nR:null,__nS:null,__nT:null,connectTo:function(be){be.addListener(t,this.__nU,this);
be.addListener(m,this._onFocusIn,this,true);
be.addListener(s,this._onFocusOut,this,true);
be.addListener(r,this._onActivate,this,true);
be.addListener(n,this._onDeactivate,this,true);
},addRoot:function(T){this.__nQ[T.$$hash]=T;
},removeRoot:function(bh){delete this.__nQ[bh.$$hash];
},getActiveWidget:function(){return this.__nR;
},isActive:function(J){return this.__nR==J;
},getFocusedWidget:function(){return this.__nS;
},isFocused:function(g){return this.__nS==g;
},isFocusRoot:function(U){return !!this.__nQ[U.$$hash];
},_onActivate:function(e){var bg=e.getTarget();
this.__nR=bg;
var bf=this.__nV(bg);

if(bf!=this.__nT){this.__nT=bf;
}},_onDeactivate:function(e){var S=e.getTarget();

if(this.__nR==S){this.__nR=null;
}},_onFocusIn:function(e){var bi=e.getTarget();

if(bi!=this.__nS){this.__nS=bi;
bi.visualizeFocus();
}},_onFocusOut:function(e){var x=e.getTarget();

if(x==this.__nS){this.__nS=null;
x.visualizeBlur();
}},__nU:function(e){if(e.getKeyIdentifier()!=p){return;
}
if(!this.__nT){return;
}e.stopPropagation();
e.preventDefault();
var h=this.__nS;

if(!e.isShiftPressed()){var j=h?this.__oa(h):this.__nX();
}else{var j=h?this.__ob(h):this.__nY();
}if(j){j.tabFocus();
}},__nV:function(d){var f=this.__nQ;

while(d){if(f[d.$$hash]){return d;
}d=d.getLayoutParent();
}return null;
},__nW:function(y,z){if(y===z){return 0;
}var B=y.getTabIndex()||0;
var A=z.getTabIndex()||0;

if(B!=A){return B-A;
}var G=y.getContainerElement().getDomElement();
var F=z.getContainerElement().getDomElement();
var E=qx.bom.element.Location;
var D=E.get(G);
var C=E.get(F);
if(D.top!=C.top){return D.top-C.top;
}if(D.left!=C.left){return D.left-C.left;
}var H=y.getZIndex();
var I=z.getZIndex();

if(H!=I){return H-I;
}return 0;
},__nX:function(){return this.__oe(this.__nT,null);
},__nY:function(){return this.__of(this.__nT,null);
},__oa:function(K){var L=this.__nT;

if(L==K){return this.__nX();
}
while(K&&K.getAnonymous()){K=K.getLayoutParent();
}
if(K==null){return [];
}var M=[];
this.__oc(L,K,M);
M.sort(this.__nW);
var N=M.length;
return N>0?M[0]:this.__nX();
},__ob:function(ba){var bb=this.__nT;

if(bb==ba){return this.__nY();
}
while(ba&&ba.getAnonymous()){ba=ba.getLayoutParent();
}
if(ba==null){return [];
}var bc=[];
this.__od(bb,ba,bc);
bc.sort(this.__nW);
var bd=bc.length;
return bd>0?bc[bd-1]:this.__nY();
},__oc:function(parent,O,P){var Q=parent.getLayoutChildren();
var R;

for(var i=0,l=Q.length;i<l;i++){R=Q[i];
if(!(R instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(R)&&R.isEnabled()&&R.isVisible()){if(R.isTabable()&&this.__nW(O,R)<0){P.push(R);
}this.__oc(R,O,P);
}}},__od:function(parent,V,W){var X=parent.getLayoutChildren();
var Y;

for(var i=0,l=X.length;i<l;i++){Y=X[i];
if(!(Y instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(Y)&&Y.isEnabled()&&Y.isVisible()){if(Y.isTabable()&&this.__nW(V,Y)>0){W.push(Y);
}this.__od(Y,V,W);
}}},__oe:function(parent,a){var b=parent.getLayoutChildren();
var c;

for(var i=0,l=b.length;i<l;i++){c=b[i];
if(!(c instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(c)&&c.isEnabled()&&c.isVisible()){if(c.isTabable()){if(a==null||this.__nW(c,a)<0){a=c;
}}a=this.__oe(c,a);
}}return a;
},__of:function(parent,u){var v=parent.getLayoutChildren();
var w;

for(var i=0,l=v.length;i<l;i++){w=v[i];
if(!(w instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(w)&&w.isEnabled()&&w.isVisible()){if(w.isTabable()){if(u==null||this.__nW(w,u)>0){u=w;
}}u=this.__of(w,u);
}}return u;
}},destruct:function(){this._disposeMap(q);
this.__nS=this.__nR=this.__nT=null;
}});
})();
(function(){var n="qx.client",m="head",l="text/css",k="stylesheet",j="}",h='@import "',g="{",f='";',e="qx.bom.Stylesheet",d="link",c="style";
qx.Class.define(e,{statics:{includeFile:function(B,C){if(!C){C=document;
}var D=C.createElement(d);
D.type=l;
D.rel=k;
D.href=qx.util.ResourceManager.getInstance().toUri(B);
var E=C.getElementsByTagName(m)[0];
E.appendChild(D);
},createElement:qx.core.Variant.select(n,{"mshtml":function(M){var N=document.createStyleSheet();

if(M){N.cssText=M;
}return N;
},"default":function(a){var b=document.createElement(c);
b.type=l;

if(a){b.appendChild(document.createTextNode(a));
}document.getElementsByTagName(m)[0].appendChild(b);
return b.sheet;
}}),addRule:qx.core.Variant.select(n,{"mshtml":function(r,s,t){r.addRule(s,t);
},"default":function(o,p,q){o.insertRule(p+g+q+j,o.cssRules.length);
}}),removeRule:qx.core.Variant.select(n,{"mshtml":function(Q,R){var S=Q.rules;
var T=S.length;

for(var i=T-1;i>=0;--i){if(S[i].selectorText==R){Q.removeRule(i);
}}},"default":function(X,Y){var ba=X.cssRules;
var bb=ba.length;

for(var i=bb-1;i>=0;--i){if(ba[i].selectorText==Y){X.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(n,{"mshtml":function(u){var v=u.rules;
var w=v.length;

for(var i=w-1;i>=0;i--){u.removeRule(i);
}},"default":function(F){var G=F.cssRules;
var H=G.length;

for(var i=H-1;i>=0;i--){F.deleteRule(i);
}}}),addImport:qx.core.Variant.select(n,{"mshtml":function(bc,bd){bc.addImport(bd);
},"default":function(O,P){O.insertRule(h+P+f,O.cssRules.length);
}}),removeImport:qx.core.Variant.select(n,{"mshtml":function(I,J){var K=I.imports;
var L=K.length;

for(var i=L-1;i>=0;i--){if(K[i].href==J){I.removeImport(i);
}}},"default":function(x,y){var z=x.cssRules;
var A=z.length;

for(var i=A-1;i>=0;i--){if(z[i].href==y){x.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(n,{"mshtml":function(U){var V=U.imports;
var W=V.length;

for(var i=W-1;i>=0;i--){U.removeImport(i);
}},"default":function(be){var bf=be.cssRules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].type==bf[i].IMPORT_RULE){be.deleteRule(i);
}}}})}});
})();
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(v,w){var H=this._getLayoutChildren();
var z,G,E;
var J,top,x,y,B,A;
var F,D,I,C;

for(var i=0,l=H.length;i<l;i++){z=H[i];
G=z.getSizeHint();
E=z.getLayoutProperties();
F=z.getMarginTop();
D=z.getMarginRight();
I=z.getMarginBottom();
C=z.getMarginLeft();
J=E.left!=null?E.left:E.edge;

if(qx.lang.Type.isString(J)){J=Math.round(parseFloat(J)*v/100);
}x=E.right!=null?E.right:E.edge;

if(qx.lang.Type.isString(x)){x=Math.round(parseFloat(x)*v/100);
}top=E.top!=null?E.top:E.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*w/100);
}y=E.bottom!=null?E.bottom:E.edge;

if(qx.lang.Type.isString(y)){y=Math.round(parseFloat(y)*w/100);
}if(J!=null&&x!=null){B=v-J-x-C-D;
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}J+=C;
}else{B=E.width;

if(B==null){B=G.width;
}else{B=Math.round(parseFloat(B)*v/100);
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}}
if(x!=null){J=v-B-x-D-C;
}else if(J==null){J=C;
}else{J+=C;
}}if(top!=null&&y!=null){A=w-top-y-F-I;
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}top+=F;
}else{A=E.height;

if(A==null){A=G.height;
}else{A=Math.round(parseFloat(A)*w/100);
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}}
if(y!=null){top=w-A-y-I-F;
}else if(top==null){top=F;
}else{top+=F;
}}z.renderLayout(J,top,B,A);
}},_computeSizeHint:function(){var t=0,s=0;
var q=0,o=0;
var m,k;
var j,g;
var c=this._getLayoutChildren();
var f,r,e;
var u,top,d,h;

for(var i=0,l=c.length;i<l;i++){f=c[i];
r=f.getLayoutProperties();
e=f.getSizeHint();
var p=f.getMarginLeft()+f.getMarginRight();
var n=f.getMarginTop()+f.getMarginBottom();
m=e.width+p;
k=e.minWidth+p;
u=r.left!=null?r.left:r.edge;

if(u&&typeof u===b){m+=u;
k+=u;
}d=r.right!=null?r.right:r.edge;

if(d&&typeof d===b){m+=d;
k+=d;
}t=Math.max(t,m);
s=Math.max(s,k);
j=e.height+n;
g=e.minHeight+n;
top=r.top!=null?r.top:r.edge;

if(top&&typeof top===b){j+=top;
g+=top;
}h=r.bottom!=null?r.bottom:r.edge;

if(h&&typeof h===b){j+=h;
g+=h;
}q=Math.max(q,j);
o=Math.max(o,g);
}return {width:t,minWidth:s,height:q,minHeight:o};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(c){qx.html.Element.call(this);

if(c!=null){this.useElement(c);
}},members:{useElement:function(b){qx.html.Element.prototype.useElement.call(this,b);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var d="maxWidth",c="qx.ui.progressive.renderer.table.Widths",b="minWidth",a="width";
qx.Class.define(c,{extend:qx.core.Object,construct:function(e){qx.core.Object.call(this);
this.__MR=[];

for(var i=0;i<e;i++){this.__MR[i]=new qx.ui.core.ColumnData();
}},members:{__MR:null,getData:function(){return this.__MR;
},set:function(f,g){for(var h in g){switch(h){case a:this.setWidth(f,g[h]);
break;
case b:this.setMinWidth(f,g[h]);
break;
case d:this.setMaxWidth(f,g[h]);
break;
default:throw new Error("Unrecognized key: "+h);
}}},setWidth:function(l,m){if(l>this.__MR.length-1||l<0){throw new Error("Column number out of range");
}this.__MR[l].setColumnWidth(m);
},setMinWidth:function(n,o){if(n>this.__MR.length-1||n<0){throw new Error("Column number out of range");
}this.__MR[n].setMinWidth(o);
},setMaxWidth:function(j,k){if(j>this.__MR.length-1||j<0){throw new Error("Column number out of range");
}this.__MR[j].setMaxWidth(k);
}}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){qx.ui.core.LayoutItem.call(this);
this.setColumnWidth(e);
},members:{__mJ:null,renderLayout:function(j,top,k,l){this.__mJ=k;
},getComputedWidth:function(){return this.__mJ;
},getFlex:function(){return this.getLayoutProperties().flex||0;
},setColumnWidth:function(f,g){var g=g||0;
var h=null;

if(typeof f==c){this.setWidth(f);
}else if(typeof f==d){if(f==e){g=1;
}else{var i=f.match(/^[0-9]+(?:\.[0-9]+)?([%\*])$/);

if(i){if(i[1]==b){g=parseFloat(f);
}else{h=f;
}}}}this.setLayoutProperties({flex:g,width:h});
}},settings:{"qx.tableResizeDebug":false}});
})();
(function(){var b="qx.ui.progressive.headfoot.Abstract",a="abstract";
qx.Class.define(b,{type:a,extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this,new qx.ui.layout.HBox());
},members:{__MS:null,join:function(c){this.__MS=c;
}},destruct:function(){this.__MS=null;
}});
})();
(function(){var f="progressive-table-header-cell",d="resize",c="progressive-table-header",b="_layout",a="qx.ui.progressive.headfoot.TableHeading";
qx.Class.define(a,{extend:qx.ui.progressive.headfoot.Abstract,construct:function(g,h){qx.ui.progressive.headfoot.Abstract.call(this);
this.__No=g;
var k=g.getData();
this.__Np=[];
for(var i=0;i<k.length;i++){var l=new qx.ui.basic.Atom(h[i]);
l.setAppearance(f);
this.add(l);
this.__Np[i]=l;
}var j=new qx.ui.core.Widget();
j.set({height:16,appearance:f,minWidth:0,width:0});
this.add(j,{flex:1});
this.addListener(d,this._resizeColumns,this);
this.__Nq=new qx.ui.layout.HBox();
this.__Nq.connectToWidget(this);
},properties:{appearance:{refine:true,init:c}},members:{__No:null,__Nr:null,__Np:null,__Nq:null,join:function(m){qx.ui.progressive.headfoot.Abstract.prototype.join.call(this,m);
},getLayoutChildren:function(){if(this.__Nr){return this.__No.getData();
}else{return qx.ui.progressive.headfoot.Abstract.prototype.getLayoutChildren.call(this);
}},_resizeColumns:function(e){var n=this.getBounds().width-qx.bom.element.Overflow.getScrollbarWidth();
this.__Nr=true;
this.__Nq.renderLayout(n,100);
this.__Nr=false;
var o=this.__No.getData();
for(var i=0;i<o.length;i++){this.__Np[i].setWidth(o[i].getComputedWidth());
}}},destruct:function(){this.__No=this.__Np=null;
this._disposeObjects(b);
}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(bi,bj,bk){qx.ui.layout.Abstract.call(this);

if(bi){this.setSpacing(bi);
}
if(bj){this.setAlignX(bj);
}
if(bk){this.setSeparator(bk);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__lo:null,__lp:null,__lq:null,__lr:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__ls:function(){var t=this._getLayoutChildren();
var length=t.length;
var q=false;
var o=this.__lo&&this.__lo.length!=length&&this.__lp&&this.__lo;
var r;
var p=o?this.__lo:new Array(length);
var s=o?this.__lp:new Array(length);
if(this.getReversed()){t=t.concat().reverse();
}for(var i=0;i<length;i++){r=t[i].getLayoutProperties();

if(r.width!=null){p[i]=parseFloat(r.width)/100;
}
if(r.flex!=null){s[i]=r.flex;
q=true;
}else{s[i]=0;
}}if(!o){this.__lo=p;
this.__lp=s;
}this.__lq=q;
this.__lr=t;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(u,v){if(this._invalidChildrenCache){this.__ls();
}var B=this.__lr;
var length=B.length;
var K=qx.ui.layout.Util;
var J=this.getSpacing();
var N=this.getSeparator();

if(N){var y=K.computeHorizontalSeparatorGaps(B,J,N);
}else{var y=K.computeHorizontalGaps(B,J,true);
}var i,w,H,G;
var M=[];
var C=y;

for(i=0;i<length;i+=1){G=this.__lo[i];
H=G!=null?Math.floor((u-y)*G):B[i].getSizeHint().width;
M.push(H);
C+=H;
}if(this.__lq&&C!=u){var E={};
var I,L;

for(i=0;i<length;i+=1){I=this.__lp[i];

if(I>0){D=B[i].getSizeHint();
E[i]={min:D.minWidth,value:M[i],max:D.maxWidth,flex:I};
}}var z=K.computeFlexOffsets(E,u,C);

for(i in z){L=z[i].offset;
M[i]+=L;
C+=L;
}}var R=B[0].getMarginLeft();
if(C<u&&this.getAlignX()!=m){R=u-C;

if(this.getAlignX()===k){R=Math.round(R/2);
}}var D,top,x,H,A,P,F;
var J=this.getSpacing();
this._clearSeparators();
if(N){var O=qx.theme.manager.Decoration.getInstance().resolve(N).getInsets();
var Q=O.left+O.right;
}for(i=0;i<length;i+=1){w=B[i];
H=M[i];
D=w.getSizeHint();
P=w.getMarginTop();
F=w.getMarginBottom();
x=Math.max(D.minHeight,Math.min(v-P-F,D.maxHeight));
top=K.computeVerticalAlignOffset(w.getAlignY()||this.getAlignY(),x,v,P,F);
if(i>0){if(N){R+=A+J;
this._renderSeparator(N,{left:R,top:0,width:Q,height:v});
R+=Q+J+w.getMarginLeft();
}else{R+=K.collapseMargins(J,A,w.getMarginLeft());
}}w.renderLayout(R,top,H,x);
R+=H;
A=w.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ls();
}var Y=qx.ui.layout.Util;
var bh=this.__lr;
var S=0,ba=0,W=0;
var V=0,X=0;
var be,T,bg;
for(var i=0,l=bh.length;i<l;i+=1){be=bh[i];
T=be.getSizeHint();
ba+=T.width;
var bd=this.__lp[i];
var U=this.__lo[i];

if(bd){S+=T.minWidth;
}else if(U){W=Math.max(W,Math.round(T.minWidth/U));
}else{S+=T.width;
}bg=be.getMarginTop()+be.getMarginBottom();
if((T.height+bg)>X){X=T.height+bg;
}if((T.minHeight+bg)>V){V=T.minHeight+bg;
}}S+=W;
var bc=this.getSpacing();
var bf=this.getSeparator();

if(bf){var bb=Y.computeHorizontalSeparatorGaps(bh,bc,bf);
}else{var bb=Y.computeHorizontalGaps(bh,bc,true);
}{};
return {minWidth:S+bb,width:ba+bb,minHeight:V,height:X};
}},destruct:function(){this.__lo=this.__lp=this.__lr=null;
}});
})();
(function(){var q="progressive-progressbar-indicator-undone",p="__MU",o="progress",n="%",m="progressive-progressbar-indicator-done",l="__MV",k="progressive-progressbar-percent-text",j="renderStart",i="progressive-progressbar-background",h="qx.ui.progressive.headfoot.Progress",f="progressive-progressbar-percent-background",g="renderEnd";
qx.Class.define(h,{extend:qx.ui.progressive.headfoot.Abstract,construct:function(a,b){qx.ui.progressive.headfoot.Abstract.call(this);
this.setHeight(16);
this.setPadding(0);
this.__MT={};
var c=qx.theme.manager.Color.getInstance();
this.__MT.background=c.resolve(i);
this.__MT.indicatorDone=c.resolve(m);
this.__MT.indicatorUndone=c.resolve(q);
this.__MT.percentBackground=c.resolve(f);
this.__MT.percentText=c.resolve(k);
this.set({backgroundColor:this.__MT.background});
this.__MU=new qx.ui.core.Widget();
this.__MU.set({width:0,backgroundColor:this.__MT.indicatorDone});
this.add(this.__MU);
var d=new qx.ui.core.Widget();
d.set({backgroundColor:this.__MT.indicatorUndone});
this.add(d,{flex:1});
this.__MV=new qx.ui.basic.Atom("0%");
this.__MV.set({width:100,backgroundColor:this.__MT.percentBackground,textColor:this.__MT.percentText});
this.add(this.__MV);
this.exclude();
},members:{__MW:null,__MT:null,__MU:null,__MV:null,join:function(r){qx.ui.progressive.headfoot.Abstract.prototype.join.call(this,r);
r.addListener(j,function(e){this.__MW=e.getData().initial;
this.show();
},this);
r.addListener(o,function(e){var u=1.0-(e.getData().remaining/this.__MW);
var v=this.getBounds();

if(v){var s=Math.floor((v.width-this.__MV.getBounds().width)*u);
var t=Math.floor(u*100)+n;

if(!isNaN(s)){this.__MU.setMinWidth(s);
this.__MV.setLabel(t);
}}},this);
r.addListener(g,function(e){this.exclude();
},this);
}},destruct:function(){this.__MT=null;
this._disposeObjects(p,l);
}});
})();
(function(){var d="abstract",c="qx.ui.progressive.structure.Abstract",b="overflowY",a="auto";
qx.Class.define(c,{type:d,extend:qx.core.Object,construct:function(f){qx.core.Object.call(this);
if(!f){this.__MX=new qx.ui.core.Widget();
this.__MY=this.__MX;
}else{this.__MX=null;
this.__MY=f;
}this.__MY.getContentElement().setStyle(b,a);
},members:{__MX:null,__MY:null,applyStructure:function(e){throw new Error("applyStructure() is abstract");
},getPane:function(){return this.__MY;
}},destruct:function(){if(this.__MX){this.__MX.dispose();
}this.__MX=this.__MY=null;
}});
})();
(function(){var b="qx.ui.progressive.structure.Default";
qx.Class.define(b,{extend:qx.ui.progressive.structure.Abstract,construct:function(c,d,e){qx.ui.progressive.structure.Abstract.call(this,e);
if(!c){this.__Na=new qx.ui.progressive.headfoot.Null();
this.__Nb=this.__Na;
}else{this.__Na=null;
this.__Nb=c;
}if(!d){this.__Nc=new qx.ui.progressive.headfoot.Null();
this.__Nd=this.__Nc;
}else{this.__Nc=null;
this.__Nd=d;
}},members:{__Nb:null,__Nd:null,__Na:null,__Nc:null,applyStructure:function(a){this.__Nb.join(a);
this.__Nd.join(a);
a.add(this.__Nb);
a.add(this.getPane(),{flex:1});
a.add(this.__Nd);
},getHeader:function(){return this.__Nb;
},getFooter:function(){return this.__Nd;
}},destruct:function(){if(this.__Na){this.__Na.dispose();
this.__Na=null;
}
if(this.__Nc){this.__Nc.dispose();
this.__Nc=null;
}this.__Nb=this.__Nd=null;
}});
})();
(function(){var a="qx.ui.progressive.headfoot.Null";
qx.Class.define(a,{extend:qx.ui.progressive.headfoot.Abstract,construct:function(){qx.ui.progressive.headfoot.Abstract.call(this);
this.exclude();
}});
})();
(function(){var n="qx.event.type.Data",m="dataAvailable",l="renderStart",k="Integer",j="_applyDataModel",h="Boolean",g="qx.ui.progressive.model.Abstract",f="progress",d="white",c="qx.ui.progressive.Progressive",a="progressDetail",b="renderEnd";
qx.Class.define(c,{extend:qx.ui.container.Composite,construct:function(o){qx.ui.container.Composite.call(this,new qx.ui.layout.VBox());
this.__Ne={};
this.set({backgroundColor:d});
if(!o){o=new qx.ui.progressive.structure.Default();
}this.__Nf=o;
o.applyStructure(this);
this.__Ng=false;
this.__Nh=false;
this.__Ni=0;
},events:{"renderStart":n,"renderEnd":n,"progress":n,"progressDetail":n},properties:{dataModel:{check:g,apply:j},batchSize:{check:k,init:20},flushWidgetQueueAfterBatch:{check:h,init:false},interElementTimeout:{check:k,init:0}},members:{__Ne:null,__Nh:null,__Nj:null,__Ni:null,__Ng:null,__Nf:null,getStructure:function(){return this.__Nf;
},addRenderer:function(name,v){this.__Ne[name]=v;
v.join(this,name);
},removeRenderer:function(name){if(!this.__Ne[name]){throw new Error("No existing renderer named "+name);
}delete this.__Ne[name];
},render:function(){if(this.__Nh){return;
}this.__Nh=true;
var x=new qx.ui.progressive.State({progressive:this,model:this.getDataModel(),pane:this.__Nf.getPane(),batchSize:this.getBatchSize(),rendererData:this.__Nl(),userData:{}});
this.__Nj=new Date();
if(this.__Ng){this.__Ni=x.getModel().getElementCount();
this.fireDataEvent(l,{state:x,initial:this.__Ni});
this.__Nk(x);
}else{qx.event.Timer.once(function(){this.__Ni=x.getModel().getElementCount();
this.fireDataEvent(l,{state:x,initial:this.__Ni});
this.__Nk(x);
this.__Ng=true;
},this,10);
}},_applyDataModel:function(p,q){if(q){q.removeListener(m,this.__Nm,this);
q.dispose();
}p.addListener(m,this.__Nm,this);
},__Nk:function(r){var s;
var u;
var t;

for(var i=r.getBatchSize();i>0;i--){s=r.getModel().getNextElement();

if(!s){this.debug("Render time: "+(new Date()-this.__Nj)+"ms");
this.__Nh=false;
this.fireDataEvent(b,r);
r.dispose();
return ;
}u=s.element;
t=this.__Ne[u.renderer];
t.render(r,u);
this.fireDataEvent(a,{initial:this.__Ni,remaining:s.remaining,element:u});
}this.fireDataEvent(f,{initial:this.__Ni,remaining:s.remaining});
if(this.getFlushWidgetQueueAfterBatch()){qx.ui.core.queue.Manager.flush();
}qx.event.Timer.once(function(){this.__Nk(r);
},this,this.getInterElementTimeout());
},__Nl:function(){var w={};

for(var name in this.__Ne){w[name]={};
}return w;
},__Nm:function(e){this.__Ni=e.getData();
this.render();
}},destruct:function(){for(var name in this.__Ne){this.__Ne[name].dispose();
}this.__Nj=this.__Ne=this.__Nf=null;
}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(u,v,w){qx.ui.layout.Abstract.call(this);

if(u){this.setSpacing(u);
}
if(v){this.setAlignY(v);
}
if(w){this.setSeparator(w);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__kg:null,__kh:null,__ki:null,__kj:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__kk:function(){var t=this._getLayoutChildren();
var length=t.length;
var p=false;
var o=this.__kg&&this.__kg.length!=length&&this.__kh&&this.__kg;
var r;
var q=o?this.__kg:new Array(length);
var s=o?this.__kh:new Array(length);
if(this.getReversed()){t=t.concat().reverse();
}for(var i=0;i<length;i++){r=t[i].getLayoutProperties();

if(r.height!=null){q[i]=parseFloat(r.height)/100;
}
if(r.flex!=null){s[i]=r.flex;
p=true;
}else{s[i]=0;
}}if(!o){this.__kg=q;
this.__kh=s;
}this.__ki=p;
this.__kj=t;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__kk();
}var F=this.__kj;
var length=F.length;
var P=qx.ui.layout.Util;
var O=this.getSpacing();
var S=this.getSeparator();

if(S){var C=P.computeVerticalSeparatorGaps(F,O,S);
}else{var C=P.computeVerticalGaps(F,O,true);
}var i,A,B,J;
var K=[];
var Q=C;

for(i=0;i<length;i+=1){J=this.__kg[i];
B=J!=null?Math.floor((y-C)*J):F[i].getSizeHint().height;
K.push(B);
Q+=B;
}if(this.__ki&&Q!=y){var H={};
var N,R;

for(i=0;i<length;i+=1){N=this.__kh[i];

if(N>0){G=F[i].getSizeHint();
H[i]={min:G.minHeight,value:K[i],max:G.maxHeight,flex:N};
}}var D=P.computeFlexOffsets(H,y,Q);

for(i in D){R=D[i].offset;
K[i]+=R;
Q+=R;
}}var top=F[0].getMarginTop();
if(Q<y&&this.getAlignY()!=m){top=y-Q;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var G,U,L,B,I,M,E;
this._clearSeparators();
if(S){var T=qx.theme.manager.Decoration.getInstance().resolve(S).getInsets();
var z=T.top+T.bottom;
}for(i=0;i<length;i+=1){A=F[i];
B=K[i];
G=A.getSizeHint();
M=A.getMarginLeft();
E=A.getMarginRight();
L=Math.max(G.minWidth,Math.min(x-M-E,G.maxWidth));
U=P.computeHorizontalAlignOffset(A.getAlignX()||this.getAlignX(),L,x,M,E);
if(i>0){if(S){top+=I+O;
this._renderSeparator(S,{top:top,left:0,height:z,width:x});
top+=z+O+A.getMarginTop();
}else{top+=P.collapseMargins(O,I,A.getMarginTop());
}}A.renderLayout(U,top,L,B);
top+=B;
I=A.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kk();
}var bc=qx.ui.layout.Util;
var bk=this.__kj;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__kh[i];
var Y=this.__kg[i];

if(bg){X+=W.minHeight;
}else if(Y){ba=Math.max(ba,Math.round(W.minHeight/Y));
}else{X+=W.height;
}bj=bh.getMarginLeft()+bh.getMarginRight();
if((W.width+bj)>bd){bd=W.width+bj;
}if((W.minWidth+bj)>V){V=W.minWidth+bj;
}}X+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeVerticalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeVerticalGaps(bk,bf,true);
}{};
return {minHeight:X+be,height:bb+be,minWidth:V,width:bd};
}},destruct:function(){this.__kg=this.__kh=this.__kj=null;
}});
})();
(function(){var a="qx.ui.progressive.State";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b){qx.core.Object.call(this);
this.setProgressive(b.progressive);
this.setModel(b.model);
this.setPane(b.pane);
this.setBatchSize(b.batchSize);
this.setRendererData(b.rendererData);
this.setUserData(b.userData);
},properties:{progressive:{nullable:true},model:{nullable:true},pane:{nullable:true},batchSize:{},rendererData:{},userData:{}},destruct:function(){this.setProgressive(null);
this.setModel(null);
this.setPane(null);
}});
})();
(function(){var c="abstract",b="qx.ui.progressive.model.Abstract",a="qx.event.type.Data";
qx.Class.define(b,{type:c,extend:qx.core.Object,events:{"dataAvailable":a},members:{getElementCount:function(){throw new Error("getElementCount() is abstract");
},getNextElement:function(){throw new Error("getNextElement() is abstract");
}}});
})();
(function(){var b="dataAvailable",a="qx.ui.progressive.model.Default";
qx.Class.define(a,{extend:qx.ui.progressive.model.Abstract,construct:function(){qx.ui.progressive.model.Abstract.call(this);
this.__Nn=[];
},members:{__Nn:null,addElements:function(c){this.__Nn=this.__Nn.concat(c);
this.fireDataEvent(b,this.__Nn.length);
},addElement:function(d){this.__Nn.push(d);
this.fireDataEvent(b,this.__Nn.length);
},getElementCount:function(){return this.__Nn.length;
},getNextElement:function(){if(this.__Nn.length>0){return ({element:this.__Nn.shift(),remaining:this.__Nn.length});
}return null;
}},destruct:function(){this.__Nn=null;
}});
})();
(function(){var b="qx.ui.progressive.renderer.Abstract",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,members:{render:function(d,e){throw new Error("render() is abstract");
},join:function(c,name){}}});
})();
(function(){var l=".qx-progressive-",k="-col-",j="px;",h="-row",g="}",f="width: ",d="0px ",c="qx-progressive-",b="px",a="padding: ",C="px ",B="__Nx",A="end",z="div",y="  width : 100%;",x=" {",w="__columnData",v="relative",u="-row {",t="resize",r="start",s="",p="qx.ui.progressive.renderer.table.Row",q="progressive-table-row-background-odd",n="__Nu",o="progressive-table-row-background-even",m="left: ";
qx.Class.define(p,{extend:qx.ui.progressive.renderer.Abstract,construct:function(D){qx.ui.progressive.renderer.Abstract.call(this);
this.__Ns=D;
this.__Nt={};
this.__Nu=new qx.ui.progressive.renderer.table.cell.Default();
this.__Nv=null;
this.__Nw={};
var E=qx.theme.manager.Color.getInstance();
this.__Nw.bgcol=[];
this.__Nw.bgcol[0]=E.resolve(o);
this.__Nw.bgcol[1]=E.resolve(q);
this.__Nx=new qx.ui.layout.HBox();
this.__Nx.connectToWidget(this);
},statics:{__Ny:null,__Nz:6,__NA:"  position: absolute;"+"  top: 0px;"+"  height: 100%;"+"  overflow:hidden;"+"  text-overflow:ellipsis;"+"  -o-text-overflow: ellipsis;"+"  white-space:nowrap;"+"  border-right:1px solid #f2f2f2;"+"  border-bottom:1px solid #eeeeee;"+"  padding : 0px 6px 0px 6px;"+"  cursor:default;"+"  font-size: 11px;"+"  font-family: 'Segoe UI', Corbel, Calibri, Tahoma, 'Lucida Sans Unicode', sans-serif;"+(qx.core.Variant.isSet("qx.client","mshtml")?'':';-moz-user-select:none;')},properties:{defaultRowHeight:{init:16}},members:{__Nv:null,__NB:null,__NC:null,__Ns:null,__Nt:null,__Nu:null,__Nw:null,__Nx:null,join:function(P,name){if(this.__Nv){throw new Error("Renderer is already joined to a Progressive.");
}this.__Nv=P;
this.__NB=name;
var R=qx.ui.progressive.renderer.table.Row;

if(!R.__Ny){R.__Ny={};
}var Q=P.toHashCode();

if(!R.__Ny[Q]){R.__Ny[Q]={rowstylesheet:null,cellstylesheet:[]};
var S=l+Q+u+y+g;
R.__Ny[Q].rowstylesheet=qx.bom.Stylesheet.createElement(S);
var T=this.__Ns.getData();

for(var i=0;i<T.length;i++){var S=l+Q+k+i+x+R.__NA+g;
R.__Ny[Q].cellstylesheet[i]=qx.bom.Stylesheet.createElement(S);
}this.__NC=Q;
var U=P.getStructure().getPane();
U.addListener(t,this._resizeColumns,this);
}},addRenderer:function(F,G){var H=this.__Ns.getData();

if(F<0||F>=H.length){throw new Error("Column "+F+" out of range (max: "+(H.length-1)+")");
}this.__Nt[F]=G;
},removeRenderer:function(N){var O=this.__Ns.getData();

if(N<0||N>=O.length){throw new Error("Column "+N+" out of range (max: "+(O.length-1)+")");
}
if(!this.__Nt[N]){throw new Error("No existing renderer for column "+N);
}delete this.__Nt[N];
},render:function(V,W){var bh=W.data;
var bc=[];
var be;
var bd;
var ba=0;
if(V.getRendererData()[this.__NB].end===undefined){V.getRendererData()[this.__NB]={end:0,start:1,rows:0,totalHeight:0};
}var bg=document.createElement(z);
for(var i=0;i<bh.length;i++){var bb=c+this.__NC+k+i;
bd=this.__Nt[i]||this.__Nu;
be={state:V,rowDiv:bg,stylesheet:bb,element:W,dataIndex:i,cellData:bh[i],height:ba};
bc.push(bd.render(be));
if(be.height>ba){ba=be.height;
}}ba=(ba>0?ba:this.getDefaultRowHeight());
var bf=V.getRendererData()[this.__NB];
bf.totalHeight+=ba;
bg.style.position=v;
bg.style.height=ba+b;
bg.className=c+this.__NC+h;
bg.innerHTML=bc.join(s);
switch(W.location){case A:var X=bf.end||0;
bg.style.backgroundColor=this.__Nw.bgcol[X];
bf.end=(X==0?1:0);
V.getPane().getContentElement().getDomElement().appendChild(bg);
break;
case r:var Y=V.getPane().getContentElement().getDomElement();
var bi=Y.childNodes;
if(bi.length>0){var X=bf.start;
bg.style.backgroundColor=this.__Nw.bgcol[X];
bf.start=(X==0?1:0);
Y.insertBefore(bg,bi[0]);
break;
}else{Y.appendChild(bg);
}break;
default:throw new Error("Invalid location: "+W.location);
}++bf.rows;
},getLayoutChildren:function(){return this.__Ns.getData();
},_resizeColumns:function(e){var bq=this.__Nv.getStructure().getPane();
var bn=bq.getBounds().width-qx.bom.element.Overflow.getScrollbarWidth();
var bo=l+this.__NC+h;
var bk=qx.ui.progressive.renderer.table.Row;
qx.bom.Stylesheet.removeRule(bk.__Ny[this.__NC].rowstylesheet,bo);
var bm=f+bn+j;
qx.bom.Stylesheet.addRule(bk.__Ny[this.__NC].rowstylesheet,bo,bm);
this.__Nx.renderLayout(bn,100);
var bp=this.__Ns.getData();
for(var i=0,bt=0;i<bp.length;i++,bt+=bn){var bo=l+this.__NC+k+i;
var bk=qx.ui.progressive.renderer.table.Row;
qx.bom.Stylesheet.removeRule(bk.__Ny[this.__NC].cellstylesheet[i],bo);
bn=bp[i].getComputedWidth();
{};
var bl;

if(qx.bom.client.Feature.CONTENT_BOX){bl=qx.ui.progressive.renderer.table.Row.__Nz*2;
}else{bl=-1;
}var bs=(bn-bl)+j;
var br=d+qx.ui.progressive.renderer.table.Row.__Nz+C+d+qx.ui.progressive.renderer.table.Row.__Nz+j;
var bj=bt+j;
var bm=bk.__NA+f+bs+m+bj+a+br;
qx.bom.Stylesheet.addRule(bk.__Ny[this.__NC].cellstylesheet[i],bo,bm);
}}},destruct:function(){var name;

for(name in this.__Nt){this.__Nt[name]=null;
}var J=qx.ui.progressive.renderer.table.Row;
var I=this.__Nv.toHashCode();

if(J.__Ny&&J.__Ny[I]){if(J.__Ny[I].rowstylesheet){var L=l+this.__NC+h;
var J=qx.ui.progressive.renderer.table.Row;
qx.bom.Stylesheet.removeRule(J.__Ny[this.__NC].rowstylesheet,L);
}if(J.__Ny[I].cellstylesheet){for(var i=J.__Ny[I].cellstylesheet.length-1;i>=0;i--){var L=l+this.__NC+k+i;
var K=J.__Ny[this.__NC].cellstylesheet[i];
var J=qx.ui.progressive.renderer.table.Row;
qx.bom.Stylesheet.removeRule(K,L);
}}}
if(this.__Nv&&this.__Nv.getRendererData){var M=this.__Nv.getRendererData();

if(M&&M[this.__NB]&&M[this.__NB].end!==undefined){M[this.__NB]=null;
}}this.__Nw=this.__Nt=this.__Nv=this.__Ns=null;
this._disposeObjects(B,n,w);
}});
})();
(function(){var j="",i="'",h="abstract",g=">",f="</div>",e="<div ",d="' ",c="style='",b="qx.ui.progressive.renderer.table.cell.Abstract",a="class='";
qx.Class.define(b,{type:h,extend:qx.core.Object,members:{_getCellStyle:function(l){return j;
},_getCellExtras:function(k){return j;
},_getContentHtml:function(p){return p.cellData||j;
},render:function(m){var o=[];
var n=this._getCellStyle(m);
o.push(e,a,m.stylesheet,d);

if(n){o.push(c,n,i);
}o.push(this._getCellExtras(m),g,this._getContentHtml(m),f);
return o.join(j);
}}});
})();
(function(){var d="number",c="qx.ui.progressive.renderer.table.cell.Default",b="",a="string";
qx.Class.define(c,{extend:qx.ui.progressive.renderer.table.cell.Abstract,construct:function(){qx.ui.progressive.renderer.table.cell.Abstract.call(this);
},members:{_getContentHtml:function(e){return qx.bom.String.escape(this._formatValue(e.cellData));
},_formatValue:function(f){var h;

if(f==null){return b;
}
if(typeof f==a){return f;
}else if(typeof f==d){if(!qx.ui.progressive.renderer.table.Row._numberFormat){var g=new qx.util.format.NumberFormat();
g.setMaximumFractionDigits(2);
qx.ui.progressive.renderer.table.Row._numberFormat=g;
}h=qx.ui.progressive.renderer.table.Row._numberFormat.format(f);
}else if(f instanceof Date){h=qx.util.format.DateFormat.getDateInstance().format(f);
}else{h=f;
}return h;
}}});
})();
(function(){var g="",f="<br",e=" &nbsp;",d="<br>",c=" ",b="\n",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(i){return qx.util.StringEscape.escape(i,qx.bom.String.FROM_CHARCODE);
},unescape:function(o){return qx.util.StringEscape.unescape(o,qx.bom.String.TO_CHARCODE);
},fromText:function(h){return qx.bom.String.escape(h).replace(/(  |\n)/g,function(j){var k={"  ":e,"\n":d};
return k[j]||j;
});
},toText:function(n){return qx.bom.String.unescape(n.replace(/\s+|<([^>])+>/gi,function(m){if(m.indexOf(f)===0){return b;
}else if(m.length>0&&m.replace(/^\s*/,g).replace(/\s*$/,g)==g){return c;
}else{return g;
}}));
}},defer:function(l){l.FROM_CHARCODE=qx.lang.Object.invert(l.TO_CHARCODE);
}});
})();
(function(){var g=";",f="&",e='X',d="",c='#',b="&#",a="qx.util.StringEscape";
qx.Class.define(a,{statics:{escape:function(o,p){var r,t=d;

for(var i=0,l=o.length;i<l;i++){var s=o.charAt(i);
var q=s.charCodeAt(0);

if(p[q]){r=f+p[q]+g;
}else{if(q>0x7F){r=b+q+g;
}else{r=s;
}}t+=r;
}return t;
},unescape:function(h,j){return h.replace(/&[#\w]+;/gi,function(k){var m=k;
var k=k.substring(1,k.length-1);
var n=j[k];

if(n){m=String.fromCharCode(n);
}else{if(k.charAt(0)==c){if(k.charAt(1).toUpperCase()==e){n=k.substring(2);
if(n.match(/^[0-9A-Fa-f]+$/gi)){m=String.fromCharCode(parseInt(n,16));
}}else{n=k.substring(1);
if(n.match(/^\d+$/gi)){m=String.fromCharCode(parseInt(n,10));
}}}}return m;
});
}}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(b){},parse:function(c){}}});
})();
(function(){var t="",s="Number",r="-",q="0",p="String",o="changeNumberFormat",n='(',m="g",l="Boolean",k="$",d="NaN",j='([0-9]{1,3}(?:',g='{0,1}[0-9]{3}){0,})',c='\\d+){0,1}',b="qx.util.format.NumberFormat",f="Infinity",e="^",h=".",a="-Infinity",i='([-+]){0,1}';
qx.Class.define(b,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(E){qx.core.Object.call(this);
this.__jK=E;
},statics:{getIntegerInstance:function(){var u=qx.util.format.NumberFormat;

if(u._integerInstance==null){u._integerInstance=new u();
u._integerInstance.setMaximumFractionDigits(0);
}return u._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__jK:null,format:function(F){switch(F){case Infinity:return f;
case -Infinity:return a;
case NaN:return d;
}var J=(F<0);

if(J){F=-F;
}
if(this.getMaximumFractionDigits()!=null){var Q=Math.pow(10,this.getMaximumFractionDigits());
F=Math.round(F*Q)/Q;
}var P=String(Math.floor(F)).length;
var G=t+F;
var M=G.substring(0,P);

while(M.length<this.getMinimumIntegerDigits()){M=q+M;
}
if(this.getMaximumIntegerDigits()!=null&&M.length>this.getMaximumIntegerDigits()){M=M.substring(M.length-this.getMaximumIntegerDigits());
}var L=G.substring(P+1);

while(L.length<this.getMinimumFractionDigits()){L+=q;
}
if(this.getMaximumFractionDigits()!=null&&L.length>this.getMaximumFractionDigits()){L=L.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var I=M;
M=t;
var O;

for(O=I.length;O>3;O-=3){M=t+qx.locale.Number.getGroupSeparator(this.__jK)+I.substring(O-3,O)+M;
}M=I.substring(0,O)+M;
}var K=this.getPrefix()?this.getPrefix():t;
var H=this.getPostfix()?this.getPostfix():t;
var N=K+(J?r:t)+M;

if(L.length>0){N+=t+qx.locale.Number.getDecimalSeparator(this.__jK)+L;
}N+=H;
return N;
},parse:function(v){var A=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__jK)+t);
var y=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__jK)+t);
var w=new RegExp(e+qx.lang.String.escapeRegexpChars(this.getPrefix())+i+j+A+g+n+y+c+qx.lang.String.escapeRegexpChars(this.getPostfix())+k);
var z=w.exec(v);

if(z==null){throw new Error("Number string '"+v+"' does not match the number format");
}var B=(z[1]==r);
var D=z[2];
var C=z[3];
D=D.replace(new RegExp(A,m),t);
var x=(B?r:t)+D;

if(C!=null&&C.length!=0){C=C.replace(new RegExp(y),t);
x+=h+C;
}return parseFloat(x);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().localize(d,[],e);
},getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(a,[],f);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
}}});
})();
(function(){var bH="(\\d\\d?)",bG="format",bF="",bE="abbreviated",bD="wide",bC="(",bB=")",bA="|",bz="stand-alone",by="wildcard",bn="default",bm="literal",bl="'",bk="hour",bj="(\\d\\d?\\d?)",bi="ms",bh="narrow",bg="-",bf="quoted_literal",be='a',bO="HH:mm:ss",bP="+",bM="HHmmss",bN="long",bK='z',bL="0",bI="sec",bJ="day",bQ='Z',bR=" ",br="min",bq="mm",bt="(\\d+)",bs="h",bv="KK",bu='L',bx="Z",bw="(\\d\\d+)",bp="EEEE",bo="^",e=":",f='y',g="K",h="a",j="([\\+\\-]\\d\\d:?\\d\\d)",k="GMT",l="dd",m="qx.util.format.DateFormat",n="yyy",o="H",bV="YYYY",bU="y",bT="HH",bS="EE",ca='h',bY="S",bX='s',bW='A',cc="yyyyyy",cb="kk",N="ss",O='H',L='S',M="MMMM",R='c',S="d",P="([a-zA-Z]+)",Q='k',J="m",K='Y',w='D',v="yyyyy",y='K',x="hh",s="SSS",r="MM",u="yy",t="(\\d\\d\\d\\d\\d\\d+)",q="yyyy-MM-dd HH:mm:ss",p="(\\d\\d\\d\\d\\d+)",X="short",Y='d',ba="unkown",bb='m',T="(\\d\\d\\d\\d)",U="(\\d\\d\\d+)",V="k",W='M',bc="(\\d\\d\\d\\d+)",bd="SS",G="MMM",F="s",E="M",D='w',C="EEE",B="$",A="?",z='E',I="z",H="yyyy";
qx.Class.define(m,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(eb,ec){qx.core.Object.call(this);

if(!ec){this.__mw=qx.locale.Manager.getInstance().getLocale();
}else{this.__mw=ec;
}
if(eb!=null){this.__mx=eb.toString();
}else{this.__mx=qx.locale.Date.getDateFormat(bN,this.__mw)+bR+qx.locale.Date.getDateTimeFormat(bM,bO,this.__mw);
}},statics:{getDateTimeInstance:function(){var cn=qx.util.format.DateFormat;
var cm=qx.locale.Date.getDateFormat(bN)+bR+qx.locale.Date.getDateTimeFormat(bM,bO);

if(cn._dateInstance==null||cn._dateInstance.__mx!=cm){cn._dateTimeInstance=new cn();
}return cn._dateTimeInstance;
},getDateInstance:function(){var cX=qx.util.format.DateFormat;
var cW=qx.locale.Date.getDateFormat(X)+bF;

if(cX._dateInstance==null||cX._dateInstance.__mx!=cW){cX._dateInstance=new cX(cW);
}return cX._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:q,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__mw:null,__mx:null,__my:null,__mz:null,__mA:null,__mB:function(db,dc){var dd=bF+db;

while(dd.length<dc){dd=bL+dd;
}return dd;
},__mC:function(dX){var dY=new Date(dX.getTime());
var ea=dY.getDate();

while(dY.getMonth()!=0){dY.setDate(-1);
ea+=dY.getDate()+1;
}return ea;
},__mD:function(cs){return new Date(cs.getTime()+(3-((cs.getDay()+6)%7))*86400000);
},__mE:function(cd){var cf=this.__mD(cd);
var cg=cf.getFullYear();
var ce=this.__mD(new Date(cg,0,4));
return Math.floor(1.5+(cf.getTime()-ce.getTime())/86400000/7);
},format:function(ct){if(ct==null){return null;
}var cz=qx.util.format.DateFormat;
var cA=this.__mw;
var cK=ct.getFullYear();
var cE=ct.getMonth();
var cM=ct.getDate();
var cu=ct.getDay();
var cF=ct.getHours();
var cB=ct.getMinutes();
var cG=ct.getSeconds();
var cI=ct.getMilliseconds();
var cL=ct.getTimezoneOffset();
var cx=cL>0?1:-1;
var cv=Math.floor(Math.abs(cL)/60);
var cC=Math.abs(cL)%60;
this.__mF();
var cJ=bF;

for(var i=0;i<this.__mA.length;i++){var cH=this.__mA[i];

if(cH.type==bm){cJ+=cH.text;
}else{var cy=cH.character;
var cD=cH.size;
var cw=A;

switch(cy){case f:case K:if(cD==2){cw=this.__mB(cK%100,2);
}else{cw=cK+bF;

if(cD>cw.length){for(var i=cw.length;i<cD;i++){cw=bL+cw;
}}}break;
case w:cw=this.__mB(this.__mC(ct),cD);
break;
case Y:cw=this.__mB(cM,cD);
break;
case D:cw=this.__mB(this.__mE(ct),cD);
break;
case z:if(cD==2){cw=qx.locale.Date.getDayName(bh,cu,cA,bG);
}else if(cD==3){cw=qx.locale.Date.getDayName(bE,cu,cA,bG);
}else if(cD==4){cw=qx.locale.Date.getDayName(bD,cu,cA,bG);
}break;
case R:if(cD==2){cw=qx.locale.Date.getDayName(bh,cu,cA,bz);
}else if(cD==3){cw=qx.locale.Date.getDayName(bE,cu,cA,bz);
}else if(cD==4){cw=qx.locale.Date.getDayName(bD,cu,cA,bz);
}break;
case W:if(cD==1||cD==2){cw=this.__mB(cE+1,cD);
}else if(cD==3){cw=qx.locale.Date.getMonthName(bE,cE,cA,bG);
}else if(cD==4){cw=qx.locale.Date.getMonthName(bD,cE,cA,bG);
}break;
case bu:if(cD==1||cD==2){cw=this.__mB(cE+1,cD);
}else if(cD==3){cw=qx.locale.Date.getMonthName(bE,cE,cA,bz);
}else if(cD==4){cw=qx.locale.Date.getMonthName(bD,cE,cA,bz);
}break;
case be:cw=(cF<12)?qx.locale.Date.getAmMarker(cA):qx.locale.Date.getPmMarker(cA);
break;
case O:cw=this.__mB(cF,cD);
break;
case Q:cw=this.__mB((cF==0)?24:cF,cD);
break;
case y:cw=this.__mB(cF%12,cD);
break;
case ca:cw=this.__mB(((cF%12)==0)?12:(cF%12),cD);
break;
case bb:cw=this.__mB(cB,cD);
break;
case bX:cw=this.__mB(cG,cD);
break;
case L:cw=this.__mB(cI,cD);
break;
case bK:if(cD==1){cw=k+((cx>0)?bg:bP)+this.__mB(Math.abs(cv))+e+this.__mB(cC,2);
}else if(cD==2){cw=cz.MEDIUM_TIMEZONE_NAMES[cv];
}else if(cD==3){cw=cz.FULL_TIMEZONE_NAMES[cv];
}break;
case bQ:cw=((cx>0)?bg:bP)+this.__mB(Math.abs(cv),2)+this.__mB(cC,2);
break;
}cJ+=cw;
}}return cJ;
},parse:function(cP){this.__mG();
var cV=this.__my.regex.exec(cP);

if(cV==null){throw new Error("Date string '"+cP+"' does not match the date format: "+this.__mx);
}var cQ={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var cR=1;

for(var i=0;i<this.__my.usedRules.length;i++){var cT=this.__my.usedRules[i];
var cS=cV[cR];

if(cT.field!=null){cQ[cT.field]=parseInt(cS,10);
}else{cT.manipulator(cQ,cS);
}cR+=(cT.groups==null)?1:cT.groups;
}var cU=new Date(cQ.year,cQ.month,cQ.day,(cQ.ispm)?(cQ.hour+12):cQ.hour,cQ.min,cQ.sec,cQ.ms);

if(cQ.month!=cU.getMonth()||cQ.year!=cU.getFullYear()){throw new Error("Error parsing date '"+cP+"': the value for day or month is too large");
}return cU;
},__mF:function(){if(this.__mA!=null){return;
}this.__mA=[];
var dv;
var dt=0;
var dx=bF;
var dr=this.__mx;
var du=bn;
var i=0;

while(i<dr.length){var dw=dr.charAt(i);

switch(du){case bf:if(dw==bl){if(i+1>=dr.length){i++;
break;
}var ds=dr.charAt(i+1);

if(ds==bl){dx+=dw;
i++;
}else{i++;
du=ba;
}}else{dx+=dw;
i++;
}break;
case by:if(dw==dv){dt++;
i++;
}else{this.__mA.push({type:by,character:dv,size:dt});
dv=null;
dt=0;
du=bn;
}break;
default:if((dw>=be&&dw<=bK)||(dw>=bW&&dw<=bQ)){dv=dw;
du=by;
}else if(dw==bl){if(i+1>=dr.length){dx+=dw;
i++;
break;
}var ds=dr.charAt(i+1);

if(ds==bl){dx+=dw;
i++;
}i++;
du=bf;
}else{du=bn;
}
if(du!=bn){if(dx.length>0){this.__mA.push({type:bm,text:dx});
dx=bF;
}}else{dx+=dw;
i++;
}break;
}}if(dv!=null){this.__mA.push({type:by,character:dv,size:dt});
}else if(dx.length>0){this.__mA.push({type:bm,text:dx});
}},__mG:function(){if(this.__my!=null){return ;
}var dh=this.__mx;
this.__mH();
this.__mF();
var dn=[];
var dj=bo;

for(var df=0;df<this.__mA.length;df++){var dp=this.__mA[df];

if(dp.type==bm){dj+=qx.lang.String.escapeRegexpChars(dp.text);
}else{var dg=dp.character;
var dk=dp.size;
var di;

for(var dq=0;dq<this.__mz.length;dq++){var dl=this.__mz[dq];

if(dg==dl.pattern.charAt(0)&&dk==dl.pattern.length){di=dl;
break;
}}if(di==null){var dm=bF;

for(var i=0;i<dk;i++){dm+=dg;
}throw new Error("Malformed date format: "+dh+". Wildcard "+dm+" is not supported");
}else{dn.push(di);
dj+=di.regex;
}}}dj+=B;
var de;

try{de=new RegExp(dj);
}catch(cj){throw new Error("Malformed date format: "+dh);
}this.__my={regex:de,"usedRules":dn,pattern:dj};
},__mH:function(){var dH=qx.util.format.DateFormat;
var dN=qx.lang.String;

if(this.__mz!=null){return ;
}var dI=this.__mz=[];
var dU=function(dy,dz){dz=parseInt(dz,10);

if(dz<dH.ASSUME_YEAR_2000_THRESHOLD){dz+=2000;
}else if(dz<100){dz+=1900;
}dy.year=dz;
};
var dO=function(a,b){a.month=parseInt(b,10)-1;
};
var dL=function(dV,dW){dV.ispm=(dW==dH.PM_MARKER);
};
var dK=function(ck,cl){ck.hour=parseInt(cl,10)%24;
};
var dJ=function(cY,da){cY.hour=parseInt(da,10)%12;
};
var dR=function(dA,dB){return;
};
var dP=qx.locale.Date.getMonthNames(bE,this.__mw,bG);

for(var i=0;i<dP.length;i++){dP[i]=dN.escapeRegexpChars(dP[i].toString());
}var dQ=function(ch,ci){ci=dN.escapeRegexpChars(ci);
ch.month=dP.indexOf(ci);
};
var dE=qx.locale.Date.getMonthNames(bD,this.__mw,bG);

for(var i=0;i<dE.length;i++){dE[i]=dN.escapeRegexpChars(dE[i].toString());
}var dD=function(co,cp){cp=dN.escapeRegexpChars(cp);
co.month=dE.indexOf(cp);
};
var dG=qx.locale.Date.getDayNames(bh,this.__mw,bG);

for(var i=0;i<dG.length;i++){dG[i]=dN.escapeRegexpChars(dG[i].toString());
}var dC=function(cN,cO){cO=dN.escapeRegexpChars(cO);
cN.month=dG.indexOf(cO);
};
var dS=qx.locale.Date.getDayNames(bE,this.__mw,bG);

for(var i=0;i<dS.length;i++){dS[i]=dN.escapeRegexpChars(dS[i].toString());
}var dM=function(c,d){d=dN.escapeRegexpChars(d);
c.month=dS.indexOf(d);
};
var dT=qx.locale.Date.getDayNames(bD,this.__mw,bG);

for(var i=0;i<dT.length;i++){dT[i]=dN.escapeRegexpChars(dT[i].toString());
}var dF=function(cq,cr){cr=dN.escapeRegexpChars(cr);
cq.month=dT.indexOf(cr);
};
dI.push({pattern:bV,regex:T,manipulator:dU});
dI.push({pattern:bU,regex:bt,manipulator:dU});
dI.push({pattern:u,regex:bw,manipulator:dU});
dI.push({pattern:n,regex:U,manipulator:dU});
dI.push({pattern:H,regex:bc,manipulator:dU});
dI.push({pattern:v,regex:p,manipulator:dU});
dI.push({pattern:cc,regex:t,manipulator:dU});
dI.push({pattern:E,regex:bH,manipulator:dO});
dI.push({pattern:r,regex:bH,manipulator:dO});
dI.push({pattern:G,regex:bC+dP.join(bA)+bB,manipulator:dQ});
dI.push({pattern:M,regex:bC+dE.join(bA)+bB,manipulator:dD});
dI.push({pattern:l,regex:bH,field:bJ});
dI.push({pattern:S,regex:bH,field:bJ});
dI.push({pattern:bS,regex:bC+dG.join(bA)+bB,manipulator:dC});
dI.push({pattern:C,regex:bC+dS.join(bA)+bB,manipulator:dM});
dI.push({pattern:bp,regex:bC+dT.join(bA)+bB,manipulator:dF});
dI.push({pattern:h,regex:bC+dH.AM_MARKER+bA+dH.PM_MARKER+bB,manipulator:dL});
dI.push({pattern:bT,regex:bH,field:bk});
dI.push({pattern:o,regex:bH,field:bk});
dI.push({pattern:cb,regex:bH,manipulator:dK});
dI.push({pattern:V,regex:bH,manipulator:dK});
dI.push({pattern:bv,regex:bH,field:bk});
dI.push({pattern:g,regex:bH,field:bk});
dI.push({pattern:x,regex:bH,manipulator:dJ});
dI.push({pattern:bs,regex:bH,manipulator:dJ});
dI.push({pattern:bq,regex:bH,field:br});
dI.push({pattern:J,regex:bH,field:br});
dI.push({pattern:N,regex:bH,field:bI});
dI.push({pattern:F,regex:bH,field:bI});
dI.push({pattern:s,regex:bj,field:bi});
dI.push({pattern:bd,regex:bj,field:bi});
dI.push({pattern:bY,regex:bj,field:bi});
dI.push({pattern:bx,regex:j,manipulator:dR});
dI.push({pattern:I,regex:P,manipulator:dR});
}},destruct:function(){this.__mA=this.__my=this.__mz=null;
}});
})();
(function(){var l="_",k="format",j="thu",h="sat",g="cldr_day_",f="cldr_month_",e="wed",d="fri",c="tue",b="mon",C="sun",B="short",A="HH:mm",z="HHmmsszz",y="HHmm",x="HHmmss",w="cldr_date_format_",v="HH:mm:ss zz",u="full",t="cldr_pm",r="long",s="medium",p="cldr_am",q="qx.locale.Date",n="cldr_date_time_format_",o="cldr_time_format_",m="HH:mm:ss";
qx.Class.define(q,{statics:{__mI:qx.locale.Manager.getInstance(),getAmMarker:function(bl){return this.__mI.localize(p,[],bl);
},getPmMarker:function(a){return this.__mI.localize(t,[],a);
},getDayNames:function(length,G,H){var H=H?H:k;
{};
var J=[C,b,c,e,j,d,h];
var K=[];

for(var i=0;i<J.length;i++){var I=g+H+l+length+l+J[i];
K.push(this.__mI.localize(I,[],G));
}return K;
},getDayName:function(length,bq,br,bs){var bs=bs?bs:k;
{};
var bu=[C,b,c,e,j,d,h];
var bt=g+bs+l+length+l+bu[bq];
return this.__mI.localize(bt,[],br);
},getMonthNames:function(length,V,W){var W=W?W:k;
{};
var Y=[];

for(var i=0;i<12;i++){var X=f+W+l+length+l+(i+1);
Y.push(this.__mI.localize(X,[],V));
}return Y;
},getMonthName:function(length,bh,bi,bj){var bj=bj?bj:k;
{};
var bk=f+bj+l+length+l+(bh+1);
return this.__mI.localize(bk,[],bi);
},getDateFormat:function(bv,bw){{};
var bx=w+bv;
return this.__mI.localize(bx,[],bw);
},getDateTimeFormat:function(Q,R,S){var U=n+Q;
var T=this.__mI.localize(U,[],S);

if(T==U){T=R;
}return T;
},getTimeFormat:function(ba,bb){{};
var bd=o+ba;
var bc=this.__mI.localize(bd,[],bb);

if(bc!=bd){return bc;
}
switch(ba){case B:case s:return qx.locale.Date.getDateTimeFormat(y,A);
case r:return qx.locale.Date.getDateTimeFormat(x,m);
case u:return qx.locale.Date.getDateTimeFormat(z,v);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(be){var bf={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var bg=qx.locale.Date._getTerritory(be);
return bf[bg]!=null?bf[bg]:1;
},getWeekendStart:function(N){var P={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var O=qx.locale.Date._getTerritory(N);
return P[O]!=null?P[O]:6;
},getWeekendEnd:function(D){var E={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var F=qx.locale.Date._getTerritory(D);
return E[F]!=null?E[F]:0;
},isWeekend:function(bm,bn){var bp=qx.locale.Date.getWeekendStart(bn);
var bo=qx.locale.Date.getWeekendEnd(bn);

if(bo>bp){return ((bm>=bp)&&(bm<=bo));
}else{return ((bm>=bp)||(bm<=bo));
}},_getTerritory:function(L){if(L){var M=L.split(l)[1]||L;
}else{M=this.__mI.getTerritory()||this.__mI.getLanguage();
}return M.toUpperCase();
}}});
})();
(function(){var u="px'",t='" ',s='src="',r="mshtml",q="vertical-align:middle;",p="text-align:center;",o="abstract",n="",m='<img ',l=" height='",e='" style="filter:',k=" title='",h=" width='",c="qx.ui.progressive.renderer.table.cell.Icon",b=" style='padding-top:2px;'",g="qx.client",f="'",i=">",a="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",j="qx/static/blank.gif",d="',sizingMethod='scale')";
qx.Class.define(c,{type:o,extend:qx.ui.progressive.renderer.table.cell.Abstract,construct:function(){qx.ui.progressive.renderer.table.cell.Abstract.call(this);
var v=qx.util.AliasManager.getInstance();
var w=qx.util.ResourceManager.getInstance();
var x=v.resolve(j);
this.__ND=w.toUri(x);
},members:{__ND:null,getBlankImage:function(){return this.__ND;
},_identifyImage:function(D){throw new Error("_identifyImage() is abstract");
},_getCellStyle:function(E){var F=qx.ui.progressive.renderer.table.cell.Abstract.prototype._getCellStyle.call(this,E)+p+q;
return F;
},_getContentHtml:function(y){var z=[];
var A=this.__NE(y);
z.push(m);
if(qx.core.Variant.isSet(g,r)&&/\.png$/i.test(A.url)){z.push(s,this.__ND,e,a,A.url,d,t);
}else{z.push(s,A.url,t);
}if(A.imageWidth){z.push(h,A.imageWidth,u);
}if(A.imageHeight){z.push(l,A.imageHeight,u);
}z.push(b);
if(A.tooltip){z.push(k,A.tooltip,f);
}if(A.extras){z.push(A.extras);
}z.push(i);
return z.join(n);
},__NE:function(B){var C=this._identifyImage(B);
if(C==null||typeof C=="string"){C={url:C,tooltip:null};
}if(C.url==null){C.url=this.__ND;
}return C;
}}});
})();
(function(){var j="'; ",i="  this.src='",h="  var filters = this.filters.item(loader); ",g="qx.client",f="}",e="{",d="  var loader = 'DXImageTransform.Microsoft.AlphaImageLoader'; ",c="mshtml",b="  filters.sizingMethod = 'scale'; ",a="  filters.src='",F="\"",E="Boolean",D="  this.attributes.setNamedItem(namedItem); ",C="} catch (e) { ",B="var node = this.attributes.getNamedItem('celldata'); ",A="qx.ui.progressive.renderer.table.cell.Boolean",z="decoration/table/boolean-true.png",y="var value = node.nodeValue; ",x="decoration/table/boolean-false.png",w="celldata='1' ",q="  node.nodeValue='0'; ",r="  this.attributes.setNamedItem(node); ",o="if (value == '0') ",p="celldata='0' ",m="  node.nodeValue='1'; ",n="onclick=\"",k="  namedItem.value = node.nodeValue; ",l="var src; ",s="try { ",t="  var namedItem = document.createAttribute('celldata'); ",v="} ",u="else ";
qx.Class.define(A,{extend:qx.ui.progressive.renderer.table.cell.Icon,construct:function(){qx.ui.progressive.renderer.table.cell.Icon.call(this);
var K=qx.util.AliasManager.getInstance();
var L=qx.util.ResourceManager.getInstance();
var J=K.resolve(z);
var I=K.resolve(x);
this.__NF=L.toUri(J);
this.__NG=L.toUri(I);
},properties:{allowToggle:{check:E,init:false}},members:{__NF:null,__NG:null,__NH:null,__NI:null,__NJ:null,__NK:null,__NL:null,__NM:null,_identifyImage:function(M){var N={imageWidth:11,imageHeight:11};

switch(M.cellData){case true:N.url=this.__NF;
N.extras=w;
break;
case false:N.url=this.__NG;
N.extras=p;
break;
default:N.url=null;
break;
}
if(this.getAllowToggle()){N.extras+=n+B+y+l+o+e;

if(qx.core.Variant.isSet(g,c)&&/\.png$/i.test(this.__NF)){N.extras+=i+this.getBlankImage()+j+d+h+a+this.__NF+j+b;
}else{N.extras+=i+this.__NF+j;
}N.extras+=m+v+u+e;

if(qx.core.Variant.isSet(g,c)&&/\.png$/i.test(this.__NG)){N.extras+=i+this.getBlankImage()+j+d+h+a+this.__NG+j+b;
}else{N.extras+=i+this.__NG+j;
}N.extras+=q+f;
N.extras+=s+r+C+t+k+D+f+F;
}return N;
},_getCellStyle:function(G){var H=qx.ui.progressive.renderer.table.cell.Icon.prototype._getCellStyle.call(this,G);
return H;
}},destruct:function(){this.__NF=this.__NG=null;
}});
})();
(function(){var m="'>",l="[",k=", ",h="</span>",g="<span class='type-",f="</span> ",e="}",d="",c="]",b="{",J="map",I="<span class='object'>",H="]:",G="&gt;",F="<span class='object' title='Object instance with hash code: ",E="string",D="level-",C="0",B="&lt;",A="<span class='offset'>",t=":",u="qx.log.appender.Util",r="&amp;",s="&#39;",p="DIV",q="<span>",n="&quot;",o="<span class='type-key'>",v="</span>:<span class='type-",w="</span>: ",y=" ",x="]</span>: ",z="?";
qx.Class.define(u,{statics:{toHtml:function(bb){var bl=[];
var bi,bk,bd,bf;
bl.push(A,this.formatOffset(bb.offset,6),f);

if(bb.object){var bc=bb.win.qx.core.ObjectRegistry.fromHashCode(bb.object);

if(bc){bl.push(F+bc.$$hash+m,bc.classname,l,bc.$$hash,x);
}}else if(bb.clazz){bl.push(I+bb.clazz.classname,w);
}var be=bb.items;

for(var i=0,bj=be.length;i<bj;i++){bi=be[i];
bk=bi.text;

if(bk instanceof Array){var bf=[];

for(var j=0,bh=bk.length;j<bh;j++){bd=bk[j];

if(typeof bd===E){bf.push(q+this.escapeHTML(bd)+h);
}else if(bd.key){bf.push(o+bd.key+v+bd.type+m+this.escapeHTML(bd.text)+h);
}else{bf.push(g+bd.type+m+this.escapeHTML(bd.text)+h);
}}bl.push(g+bi.type+m);

if(bi.type===J){bl.push(b,bf.join(k),e);
}else{bl.push(l,bf.join(k),c);
}bl.push(h);
}else{bl.push(g+bi.type+m+this.escapeHTML(bk)+f);
}}var bg=document.createElement(p);
bg.innerHTML=bl.join(d);
bg.className=D+bb.level;
return bg;
},formatOffset:function(L,length){var O=L.toString();
var M=(length||6)-O.length;
var N=d;

for(var i=0;i<M;i++){N+=C;
}return N+O;
},escapeHTML:function(K){return String(K).replace(/[<>&"']/g,this.__sy);
},__sy:function(P){var Q={"<":B,">":G,"&":r,"'":s,'"':n};
return Q[P]||z;
},toText:function(a){return this.toTextArray(a).join(y);
},toTextArray:function(R){var ba=[];
ba.push(this.formatOffset(R.offset,6));

if(R.object){var S=R.win.qx.core.ObjectRegistry.fromHashCode(R.object);

if(S){ba.push(S.classname+l+S.$$hash+H);
}}else if(R.clazz){ba.push(R.clazz.classname+t);
}var T=R.items;
var W,Y;

for(var i=0,X=T.length;i<X;i++){W=T[i];
Y=W.text;

if(Y instanceof Array){var U=[];

for(var j=0,V=Y.length;j<V;j++){U.push(Y[j].text);
}
if(W.type===J){ba.push(b,U.join(k),e);
}else{ba.push(l,U.join(k),c);
}}else{ba.push(Y);
}}return ba;
}}});
})();
(function(){var b="qx.log.appender.Native",a="log";
qx.Class.define(b,{statics:{process:function(c){var d=window.debug||window.console||(window.air&&window.air.Introspector.Console);

if(d){var e=c.level;

if(!(e in d)){e=a;
}d[e](qx.log.appender.Util.toText(c));
}}},defer:function(f){qx.log.Logger.register(f);
}});
})();
(function(){var l="",k='</div>',j="Up",i="none",h="keypress",g='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',f="Enter",d="px",c='.qxconsole .messages .user-result{background:white}',b='.qxconsole .messages .level-error{background:#FFE2D5}',W="div",V="user-command",U='<div class="command">',T='.qxconsole .command input:focus{outline:none;}',S='.qxconsole .messages .type-key{color:#565656;font-style:italic}',R='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',Q='.qxconsole .messages div{padding:0px 4px;}',P='.qxconsole .messages .level-debug{background:white}',O='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',N="DIV",s='.qxconsole .messages .level-user{background:#E3EFE9}',t='<div class="qxconsole">',q="D",r='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',o='.qxconsole .messages .type-string{color:black;font-weight:normal;}',p='.qxconsole .control a{text-decoration:none;color:black;}',m='<div class="messages">',n='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',u='<input type="text"/>',v="clear",C='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',A='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',G='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',E='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',J='.qxconsole .messages .user-command{color:blue}',I="F7",x="qx.log.appender.Console",M='.qxconsole .messages .level-info{background:#DEEDFA}',L="block",K='.qxconsole .messages .level-warn{background:#FFF7D5}',w='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',y='.qxconsole .messages .user-error{background:#FFE2D5}',z='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',B='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',D=">>> ",F="Down",H='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(x,{statics:{init:function(){var bd=[G,z,p,g,Q,J,c,y,P,M,K,b,s,o,H,n,A,r,S,O,R,w,E,C,T];
qx.bom.Stylesheet.createElement(bd.join(l));
var bf=[t,B,m,k,U,u,k,k];
var bg=document.createElement(N);
bg.innerHTML=bf.join(l);
var be=bg.firstChild;
document.body.appendChild(bg.firstChild);
this.__xg=be;
this.__xh=be.childNodes[1];
this.__xi=be.childNodes[2].firstChild;
this.__xn();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,h,this.__xo,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__xh.innerHTML=l;
},process:function(Y){this.__xh.appendChild(qx.log.appender.Util.toHtml(Y));
this.__xj();
},__xj:function(){this.__xh.scrollTop=this.__xh.scrollHeight;
},__xk:true,toggle:function(){if(!this.__xg){this.init();
}else if(this.__xg.style.display==i){this.show();
}else{this.__xg.style.display=i;
}},show:function(){if(!this.__xg){this.init();
}else{this.__xg.style.display=L;
this.__xh.scrollTop=this.__xh.scrollHeight;
}},__xl:[],execute:function(){var bc=this.__xi.value;

if(bc==l){return;
}
if(bc==v){return this.clear();
}var ba=document.createElement(W);
ba.innerHTML=qx.log.appender.Util.escapeHTML(D+bc);
ba.className=V;
this.__xl.push(bc);
this.__xm=this.__xl.length;
this.__xh.appendChild(ba);
this.__xj();

try{var bb=window.eval(bc);
}catch(a){qx.log.Logger.error(a);
}
if(bb!==undefined){qx.log.Logger.debug(bb);
}},__xn:function(e){this.__xh.style.height=(this.__xg.clientHeight-this.__xg.firstChild.offsetHeight-this.__xg.lastChild.offsetHeight)+d;
},__xo:function(e){var bi=e.getKeyIdentifier();
if((bi==I)||(bi==q&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__xg){return;
}if(!qx.dom.Hierarchy.contains(this.__xg,e.getTarget())){return;
}if(bi==f&&this.__xi.value!=l){this.execute();
this.__xi.value=l;
}if(bi==j||bi==F){this.__xm+=bi==j?-1:1;
this.__xm=Math.min(Math.max(0,this.__xm),this.__xl.length);
var bh=this.__xl[this.__xm];
this.__xi.value=bh||l;
this.__xi.select();
}}},defer:function(X){qx.event.Registration.addListener(document.documentElement,h,X.__xo,X);
}});
})();
(function(){var l=": ",k="Summary: (",j="qx.dev.ObjectSummary",h="\n",g=" Objects)\n\n",f=")\r\n",e=" (",d=" Objects)\r\n\r\n",c=", ";
qx.Class.define(j,{statics:{getInfo:function(){var y={};
var F=0;
var z;
var B=qx.core.ObjectRegistry.getRegistry();

for(var C in B){z=B[C];

if(z&&z.isDisposed()===false){if(y[z.classname]==null){y[z.classname]=1;
}else{y[z.classname]++;
}F++;
}}var E=[];

for(var A in y){E.push({classname:A,number:y[A]});
}E.sort(function(a,b){return b.number-a.number;
});
var D=k+F+g;

for(var i=0;i<E.length;i++){D+=E[i].number+l+E[i].classname+h;
}return D;
},getNewObjects:function(){var n={};
var x=0;
var o;
var s=qx.core.ObjectRegistry.getRegistry();
var q={};
var w;

for(var t in s){o=s[t];

if(o&&o.__disposed===false){var r=o.classname;

if(n[r]==null){n[r]=1;
}else{n[r]++;
}w=q[r];

if(w==null){w=q[r]=new Array();
}w[w.length]=o.toHashCode();
x++;
}}
if(!this._m_dObjectList){this._m_dObjectList={};
}var m={};

for(var r in n){if(!(r in this._m_dObjectList)){this._m_dObjectList[r]=0;
}
if(this._m_dObjectList[r]>=0&&this._m_dObjectList[r]<n[r]){m[r]=n[r]-this._m_dObjectList[r];
}}this._m_dObjectList=n;
var v=[];

for(var p in m){v.push({classname:p,number:m[p],aHashCode:q[p]});
}v.sort(function(a,b){return b.number-a.number;
});
var u=k+x+d;

for(var i=0;i<v.length;i++){u+=v[i].number+l+v[i].classname+e+v[i].aHashCode.join(c)+f;
}return u;
}}});
})();
(function(){var cl="window",ck="",cj="childNodes",ci="nodeName",ch="nodeType",cg="document",cf="function",ce="firstChild",cd="qx.client",cc="external",bt="location",bs="[native code]",br="lastChild",bq="scrollY",bp="scrollWidth",bo="defaultView",bn="closed",bm="content",bl="qx",bk="</td><td>",cs="filters",ct="locationbar",cq="screenX",cr="previousSibling",co="scrollX",cp="Global namespace is polluted by the following unknown objects:\n\n",cm="doctype",cn="parent",cu="qx.dev.Pollution",cv="outerText",bR="applets",bQ="parentElement",bT="designMode",bS="cookie",bV="fullScreen",bU="links",bX="pageXOffset",bW="frames",bP="documentElement",bO="screenY",a="statusbar",b="history",c="sun",d="pkcs11",e="java",f="style",g="innerWidth",h="plugins",j="implementation",k="clientWidth",cz="compatMode",cy="length",cx="textContent",cw="controllers",cD="netscape",cC="self",cB="domConfig",cA="attributes",cF="clientHeight",cE="outerHeight",J="parentNode",K="innerHeight",H="title",I="ownerDocument",N="<table>",O="globalStorage",L="Global namespace is not polluted by any unknown objects.",M="toolbar",F="outerHTML",G="crypto",s="forms",r="scrollbars",u="frameElement",t="Components",o="body",n="clientInformation",q="offscreenBuffering",p="embeds",m="localName",l="scrollTop",T="isMultiLine",U="scrollLeft",V="images",W="event",P="offsetHeight",Q="scrollMaxY",R="sessionStorage",S="screen",X="name",Y="offsetLeft",C="console",B="XMLHttpRequest",A="mshtml",z="nextSibling",y="innerText",x="menubar",w="scopeName",v="top",E="outerWidth",D=": ",ba="\n",bb="status",bc="contentEditable",bd="anchors",be="</table>",bf="<tr style='vertical-align:top'><td>",bg="scrollMaxX",bh="screenTop",bi="defaultStatus",bj="styleSheets",bx="className",bw="personalbar",bv="</td></tr>",bu="currentStyle",bB="directories",bA="navigator",bz="pageYOffset",by="screenLeft",bD="opener",bC="scrollHeight",bK="__firebug__",bL="Option",bI="innerHTML",bJ="tabIndex",bG="offsetTop",bH="[function]",bE="clipboardData",bF="Packages",bM="tagName",bN="offsetWidth",ca="mshtml|opera",bY="undefined",cb="Image";
qx.Class.define(cu,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bl,e,c,bF,bK,t,cw,R,O,C,W,q,bE,n,bL,cb,cc,bh,by,cy,cl,cg,bt,bA,cD,cn,bW,v,r,X,co,bq,cC,S,b,bm,x,M,ct,bw,a,bB,bn,G,d,bD,bb,bi,g,K,E,cE,cq,bO,bX,bz,bg,Q,bV,u,B],"document":[cB,bt,cz,j,bo,H,o,bj,bP,ci,ch,ce,br,cm,V,bR,bU,s,bd,bS,p,h,bT,cj],"body":[cx,bI,F,y,cv,w,bQ,bM,cs,bc,cg,bu,T,cF,k,br,ce,bG,Y,bN,P,bJ,bx,cA,cr,z,I,m,cj,J,ch,ci,f,l,U,bp,bC]},getInfo:function(cS){var cT=qx.dev.Pollution.getTextList(cS||cl);

if(cT){return cp+cT;
}else{return L;
}},extract:function(cG){var cI=[];
var cH=qx.dev.Pollution.ignore[cG];
if(qx.core.Variant.isSet(cd,A)){if(cG==cl){cH=cH.slice(0);

for(var cJ=0;cJ<window.length;cJ++){cH.push(ck+cJ);
}}}var cK=qx.dev.Pollution.names[cG];

for(var cL in cK){try{if(qx.core.Variant.isSet(cd,ca)){if(cG==cl&&cL==cc){continue;
}}if(typeof cK[cL]==bY||cK[cL]===null){continue;
}if(typeof cK[cL]==cf&&cK[cL].toString().indexOf(bs)!=-1){continue;
}if(typeof cK[cL].constructor==cf){if((cK[cL].constructor.toString().indexOf(bs)!=-1)||(cK[cL].constructor.toString().indexOf(bH)!=-1)){continue;
}}if(qx.lang.Array.contains(cH,cL)){continue;
}}catch(cU){continue;
}cI.push({"key":cL,"value":cK[cL]});
}return cI;
},getHtmlTable:function(cM){var cO=[];
var cN=bf;
var cQ=bk;
var cR=bv;
cO.push(N);
var cP=this.extract(cM);

for(var i=0;i<cP.length;i++){cO.push(cN+cP[i].key+cQ+cP[i].value+cR);
}cO.push(be);
return cO.join(ck);
},getTextList:function(cV){var cX=[];
var cY=D;
var da=ba;
var cW=this.extract(cV);

for(var i=0;i<cW.length;i++){cX.push(cW[i].key+cY+cW[i].value+da);
}return cX.join(ck);
}}});
})();
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
})();
(function(){var h="Number",g="_applyInsets",f="abstract",e="insetRight",d="insetTop",c="insetBottom",b="qx.ui.decoration.Abstract",a="insetLeft";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:f,properties:{insetLeft:{check:h,nullable:true,apply:g},insetRight:{check:h,nullable:true,apply:g},insetBottom:{check:h,nullable:true,apply:g},insetTop:{check:h,nullable:true,apply:g},insets:{group:[d,e,c,a],shorthand:true}},members:{__sg:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__sg=null;
},getInsets:function(){if(this.__sg){return this.__sg;
}var i=this._getDefaultInsets();
return this.__sg={left:this.getInsetLeft()==null?i.left:this.getInsetLeft(),right:this.getInsetRight()==null?i.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?i.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?i.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__sg=null;
}},destruct:function(){this.__sg=null;
}});
})();
(function(){var q="_applyBackground",p="repeat",o="mshtml",n="backgroundPositionX",m="",l="backgroundPositionY",k="no-repeat",j="scale",i=" ",h="repeat-x",c="qx.client",g="repeat-y",f="hidden",b="qx.ui.decoration.MBackgroundImage",a="String",e='"></div>',d='<div style="';
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:q},backgroundRepeat:{check:[p,h,g,k,j],init:p,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[l,n]}},members:{_generateBackgroundMarkup:function(r){var v=m;
var u=this.getBackgroundImage();
var t=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var w=this.getBackgroundPositionX();

if(w==null){w=0;
}r.backgroundPosition=w+i+top;
if(u){var s=qx.util.AliasManager.getInstance().resolve(u);
v=qx.bom.element.Decoration.create(s,t,r);
}else{if(r){if(qx.core.Variant.isSet(c,o)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){r.overflow=f;
}}v=d+qx.bom.element.Style.compile(r)+e;
}}return v;
},_applyBackground:function(){{};
}}});
})();
(function(){var p="_applyStyle",o="",n="Color",m="px",l="solid",k="dotted",j="double",i="dashed",h="_applyWidth",g="qx.ui.decoration.Uniform",d="px ",f=" ",e="scale",c="PositiveInteger",b="absolute";
qx.Class.define(g,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(z,A,B){qx.ui.decoration.Abstract.call(this);
if(z!=null){this.setWidth(z);
}
if(A!=null){this.setStyle(A);
}
if(B!=null){this.setColor(B);
}},properties:{width:{check:c,init:0,apply:h},style:{nullable:true,check:[l,k,i,j],init:l,apply:p},color:{nullable:true,check:n,apply:p},backgroundColor:{check:n,nullable:true,apply:p}},members:{__sh:null,_getDefaultInsets:function(){var a=this.getWidth();
return {top:a,right:a,bottom:a,left:a};
},_isInitialized:function(){return !!this.__sh;
},getMarkup:function(){if(this.__sh){return this.__sh;
}var q={position:b,top:0,left:0};
var r=this.getWidth();
{};
var t=qx.theme.manager.Color.getInstance();
q.border=r+d+this.getStyle()+f+(t.resolve(this.getColor())||o);
var s=this._generateBackgroundMarkup(q);
return this.__sh=s;
},resize:function(u,v,w){var y=this.getBackgroundImage()&&this.getBackgroundRepeat()==e;

if(y||qx.bom.client.Feature.CONTENT_BOX){var x=this.getWidth()*2;
v-=x;
w-=x;
if(v<0){v=0;
}
if(w<0){w=0;
}}u.style.width=v+m;
u.style.height=w+m;
},tint:function(C,D){var E=qx.theme.manager.Color.getInstance();

if(D==null){D=this.getBackgroundColor();
}C.style.backgroundColor=E.resolve(D)||o;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__sh=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px",d="px ",c="dotted",b="_applyWidth",a="dashed",D="Number",C=" ",B="widthTop",A="styleRight",z="styleLeft",y="widthLeft",x="widthBottom",w="styleTop",v="colorBottom",u="styleBottom",q="widthRight",r="colorLeft",o="colorRight",p="colorTop",m="border-top",n="border-left",k="border-right",l="qx.ui.decoration.Single",s="border-bottom",t="absolute";
qx.Class.define(l,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(L,M,N){qx.ui.decoration.Abstract.call(this);
if(L!=null){this.setWidth(L);
}
if(M!=null){this.setStyle(M);
}
if(N!=null){this.setColor(N);
}},properties:{widthTop:{check:D,init:0,apply:b},widthRight:{check:D,init:0,apply:b},widthBottom:{check:D,init:0,apply:b},widthLeft:{check:D,init:0,apply:b},styleTop:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleRight:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,c,a,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[y,z,r]},right:{group:[q,A,o]},top:{group:[B,w,p]},bottom:{group:[x,u,v]},width:{group:[B,q,x,y],shorthand:true},style:{group:[w,A,u,z],shorthand:true},color:{group:[p,o,v,r],shorthand:true}},members:{__sj:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__sj;
},getMarkup:function(O){if(this.__sj){return this.__sj;
}var P=qx.theme.manager.Color.getInstance();
var Q={};
var S=this.getWidthTop();

if(S>0){Q[m]=S+d+this.getStyleTop()+C+(P.resolve(this.getColorTop())||g);
}var S=this.getWidthRight();

if(S>0){Q[k]=S+d+this.getStyleRight()+C+(P.resolve(this.getColorRight())||g);
}var S=this.getWidthBottom();

if(S>0){Q[s]=S+d+this.getStyleBottom()+C+(P.resolve(this.getColorBottom())||g);
}var S=this.getWidthLeft();

if(S>0){Q[n]=S+d+this.getStyleLeft()+C+(P.resolve(this.getColorLeft())||g);
}{};
Q.position=t;
Q.top=0;
Q.left=0;
var R=this._generateBackgroundMarkup(Q);
return this.__sj=R;
},resize:function(E,F,G){var H=this.getInsets();
F-=H.left+H.right;
G-=H.top+H.bottom;
if(F<0){F=0;
}
if(G<0){G=0;
}E.style.width=F+e;
E.style.height=G+e;
E.style.left=(parseInt(E.style.left)+H.left-this.getWidthLeft())+e;
E.style.top=(parseInt(E.style.top)+H.top-this.getWidthTop())+e;
},tint:function(I,J){var K=qx.theme.manager.Color.getInstance();

if(J==null){J=this.getBackgroundColor();
}I.style.backgroundColor=K.resolve(J)||g;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__sj=null;
}});
})();
(function(){var j="px ",i=" ",h="px",g="Color",f="Number",e=";",d="innerWidthRight",c="border-left:",b='<div style="position:absolute;top:0;left:0;',a="innerColorBottom",D='</div>',C='',B="scale",A="border-top",z="innerWidthTop",y="border-left",x="innerColorRight",w="innerColorTop",v="relative",u="border-top:",q="qx.ui.decoration.Double",r="border-right:",o='line-height:0;',p="innerColorLeft",m="border-bottom",n='">',k="innerWidthBottom",l="innerWidthLeft",s="border-bottom:",t="border-right";
qx.Class.define(q,{extend:qx.ui.decoration.Single,construct:function(J,K,L,innerWidth,M){qx.ui.decoration.Single.call(this,J,K,L,innerWidth,M);
if(innerWidth!=null){this.setInnerWidth(innerWidth);
}
if(M!=null){this.setInnerColor(M);
}},properties:{innerWidthTop:{check:f,init:0},innerWidthRight:{check:f,init:0},innerWidthBottom:{check:f,init:0},innerWidthLeft:{check:f,init:0},innerWidth:{group:[z,d,k,l],shorthand:true},innerColorTop:{nullable:true,check:g},innerColorRight:{nullable:true,check:g},innerColorBottom:{nullable:true,check:g},innerColorLeft:{nullable:true,check:g},innerColor:{group:[w,x,a,p],shorthand:true}},members:{__xH:null,_getDefaultInsets:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
},_isInitialized:function(){return !!this.__xH;
},getMarkup:function(){if(this.__xH){return this.__xH;
}var E=qx.theme.manager.Color.getInstance();
var H={position:v};
var F=this.getInnerWidthTop();

if(F>0){H[A]=F+j+this.getStyleTop()+i+E.resolve(this.getInnerColorTop());
}var F=this.getInnerWidthRight();

if(F>0){H[t]=F+j+this.getStyleRight()+i+E.resolve(this.getInnerColorRight());
}var F=this.getInnerWidthBottom();

if(F>0){H[m]=F+j+this.getStyleBottom()+i+E.resolve(this.getInnerColorBottom());
}var F=this.getInnerWidthLeft();

if(F>0){H[y]=F+j+this.getStyleLeft()+i+E.resolve(this.getInnerColorLeft());
}{};
var I=this._generateBackgroundMarkup(H);
var G=o;
if((qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION<8)||(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.DOCUMENT_MODE<8)){G=C;
}var F=this.getWidthTop();

if(F>0){G+=u+F+j+this.getStyleTop()+i+E.resolve(this.getColorTop())+e;
}var F=this.getWidthRight();

if(F>0){G+=r+F+j+this.getStyleRight()+i+E.resolve(this.getColorRight())+e;
}var F=this.getWidthBottom();

if(F>0){G+=s+F+j+this.getStyleBottom()+i+E.resolve(this.getColorBottom())+e;
}var F=this.getWidthLeft();

if(F>0){G+=c+F+j+this.getStyleLeft()+i+E.resolve(this.getColorLeft())+e;
}{};
return this.__xH=b+G+n+I+D;
},resize:function(N,O,P){var U=this.getBackgroundImage()&&this.getBackgroundRepeat()==B;
var S=this.getInsets();

if(U||qx.bom.client.Feature.CONTENT_BOX){var innerWidth=O-S.left-S.right;
var innerHeight=P-S.top-S.bottom;
}else{var Q=S.top-this.getInnerWidthTop();
var V=S.bottom-this.getInnerWidthBottom();
var R=S.left-this.getInnerWidthLeft();
var T=S.right-this.getInnerWidthRight();
var innerWidth=O-R-T;
var innerHeight=P-Q-V;
}if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}N.firstChild.style.width=innerWidth+h;
N.firstChild.style.height=innerHeight+h;
N.style.left=(parseInt(N.style.left)+S.left-this.getWidthLeft()-this.getInnerWidthLeft())+h;
N.style.top=(parseInt(N.style.top)+S.top-this.getWidthTop()-this.getInnerWidthTop())+h;
}},destruct:function(){this.__xH=null;
}});
})();
(function(){var o="Number",n="_applyInsets",m="-l",l="insetRight",k="insetTop",j="_applyBaseImage",i="insetBottom",h="set",g="-t",f="insetLeft",d="String",e="qx.ui.decoration.Grid";
qx.Class.define(e,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(E,F){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__sk=new qx.ui.decoration.css3.BorderImage();

if(E){this.__sl(E);
}}else{this.__sk=new qx.ui.decoration.GridDiv(E);
}
if(F!=null){this.__sk.setInsets(F);
}},properties:{baseImage:{check:d,nullable:true,apply:j},insetLeft:{check:o,nullable:true,apply:n},insetRight:{check:o,nullable:true,apply:n},insetBottom:{check:o,nullable:true,apply:n},insetTop:{check:o,nullable:true,apply:n},insets:{group:[k,l,i,f],shorthand:true}},members:{__sk:null,getMarkup:function(){return this.__sk.getMarkup();
},resize:function(a,b,c){this.__sk.resize(a,b,c);
},tint:function(p,q){},getInsets:function(){return this.__sk.getInsets();
},_applyInsets:function(B,C,name){var D=h+qx.lang.String.firstUp(name);
this.__sk[D](B);
},_applyBaseImage:function(G,H){if(this.__sk instanceof qx.ui.decoration.GridDiv){this.__sk.setBaseImage(G);
}else{this.__sl(G);
}},__sl:function(r){var t,v;
this.__sk.setBorderImage(r);
var x=qx.util.AliasManager.getInstance().resolve(r);
var y=/(.*)(\.[a-z]+)$/.exec(x);
var u=y[1];
var w=y[2];
var s=qx.util.ResourceManager.getInstance();
var z=s.getImageHeight(u+g+w);
var A=s.getImageWidth(u+m+w);
{};
this.__sk.setSlice([z,A]);
}},destruct:function(){this.__sk=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(K,L,M){qx.ui.decoration.Abstract.call(this);
if(K!=null){this.setOuterColor(K);
}
if(L!=null){this.setInnerColor(L);
}
if(M!=null){this.setInnerOpacity(M);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__sm:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__sm;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__sm){return this.__sm;
}var N=qx.theme.manager.Color.getInstance();
var O=[];
var R=d+N.resolve(this.getOuterColor())+b;
var Q=d+N.resolve(this.getInnerColor())+b;
O.push(k);
O.push(f);
O.push(e,R);
O.push(qx.bom.element.Opacity.compile(0.35));
O.push(i);
O.push(n);
O.push(q,R);
O.push(r,R);
O.push(i);
O.push(f);
O.push(m);
O.push(p,R);
O.push(s,R);
O.push(i);
var P={position:l,top:g,left:g};
O.push(this._generateBackgroundMarkup(P));
O.push(t);
O.push(e,Q);
O.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
O.push(i);
O.push(v);
return this.__sm=O.join(c);
},resize:function(w,x,y){if(x<4){x=4;
}
if(y<4){y=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=x-2;
var outerHeight=y-2;
var E=outerWidth;
var D=outerHeight;
var innerWidth=x-4;
var innerHeight=y-4;
}else{var outerWidth=x;
var outerHeight=y;
var E=x-2;
var D=y-2;
var innerWidth=E;
var innerHeight=D;
}var G=a;
var C=w.childNodes[0].style;
C.width=outerWidth+G;
C.height=outerHeight+G;
var B=w.childNodes[1].style;
B.width=outerWidth+G;
B.height=D+G;
var A=w.childNodes[2].style;
A.width=E+G;
A.height=outerHeight+G;
var z=w.childNodes[3].style;
z.width=E+G;
z.height=D+G;
var F=w.childNodes[4].style;
F.width=innerWidth+G;
F.height=innerHeight+G;
},tint:function(H,I){var J=qx.theme.manager.Color.getInstance();

if(I==null){I=this.getBackgroundColor();
}H.childNodes[3].style.backgroundColor=J.resolve(I)||c;
}},destruct:function(){this.__sm=null;
}});
})();
(function(){var j="border-dark-shadow",i="border-light",h="border-dark",g="border-light-shadow",f="solid",e="gray",d="border-focused-light",c="border-focused-dark",b="border-focused-light-shadow",a="border-focused-dark-shadow",y="table-header-border",x="dotted",w="border-separator",v="tooltip-text",u="invalid",t="white",s="decoration/shadow/shadow.png",r="black",q="effect",p="table-focus-indicator",n="border-focused-invalid",o="qx/decoration/Classic",l="border-lead",m="decoration/shadow/shadow-small.png",k="qx.theme.classic.Decoration";
qx.Theme.define(k,{aliases:{decoration:o},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:h}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:r,style:x}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[h,g,g,h]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[g,h,h,g],innerColor:[i,j,j,i]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[i,j,j,i]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[i,j,j,i],innerColor:[j,i,i,j]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[j,i,i,j]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[i,j,j,i]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[a,d,d,a],innerColor:[c,b,b,c]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[b,c,c,b],innerColor:[d,a,a,d]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:u}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:w}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:w}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:[4,8,8,4]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:m,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:u,innerColor:n,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:x,color:l}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:j}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:f,colorTop:t,colorLeft:t,colorRight:j,colorBottom:j}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:h,colorBottom:i}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:e,style:f}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,style:f}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:e,style:f}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,widthRight:1,colorRight:e,style:f}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:j,styleTop:f}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:y,styleBottom:f}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:p,style:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f,widthBottom:2,colorBottom:q,styleBottom:f}}}});
})();
(function(){var i="Liberation Sans",h="Verdana",g="Bitstream Vera Sans",f="Lucida Grande",e="Tahoma",d="monospace",c="qx.theme.classic.Font",b="Courier New",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:11,lineHeight:1.4,family:[f,e,h,g,i]},"bold":{size:11,lineHeight:1.4,family:[f,e,h,g,i],bold:true},"small":{size:10,lineHeight:1.4,family:[f,e,h,g,i]},"monospace":{size:11,lineHeight:1.4,family:[a,b,d]}}});
})();
(function(){var fE="button",fD="widget",fC="background",fB="atom",fA="inset-thin",fz="outset",fy="text-disabled",fx="text-selected",fw="inset",fv="image",ey="groupbox",ex="cell",ew="focused-inset",ev="tooltip",eu="menu-button",et="middle",es="decoration/arrows/down.gif",er="spinner",eq="background-selected",ep="list",fL="button-hovered",fM="checkbox",fJ="toolbar-button",fK="button-frame",fH="popup",fI="textfield",fF="label",fG="background-invalid",fN="background-disabled",fO="bold",fe="white",fd="shadow-small",fg="invalid",ff="scrollbar",fi="center",fh="datechooser/button",fk="button-abandoned",fj="background-light",fc="main",fb="date-chooser",cO="date-chooser-title",cP="radiobutton",cQ="default",cR="combobox",cS="background-field",cT="outset-thin",cU="menu-slidebar-button",cV="scrollbar/button",cW="combobox/button",cX="table-header-cell",gd="decoration/arrows/right.gif",gc="decoration/arrows/up.gif",gb="text",ga="decoration/arrows/down-small.gif",gh="icon/16/places/folder.png",gg="tree-folder",gf="slidebar/button-forward",ge="icon/16/mimetypes/text-plain.png",gj="right-top",gi="button-checked",dL=".png",dM="background-focused",dJ="datechooser",dK="slidebar/button-backward",dP="selectbox",dQ="treevirtual-folder",dN="decoration/form/",dO="decoration/tree/minus.gif",dH="",dI="decoration/tree/plus.gif",dr="-invalid",dq="decoration/arrows/left.gif",dt="icon/16/places/folder-open.png",ds="table-row-background-even",dm="decoration/treevirtual/cross_minus.gif",dl="radiobutton-hovered",dp="keyboard-focus",dn="decoration/treevirtual/start_plus.gif",dk="decoration/cursors/",dj="icon/16/actions/dialog-ok.png",dV="slidebar",dW="table-scroller-focus-indicator",dX="move-frame",dY="nodrop",dR="tabview-page-button-left",dS="decoration/arrows/up-small.gif",dT="move",dU="radiobutton-checked-focused",ea="qx.theme.classic.Appearance",eb="decoration/menu/checkbox.gif",dC="tooltip-error",dB="right",dA="decoration/arrows/rewind.gif",dz="table-scroller-header",dy="table-pane",dx="focused-outset",dw="checkbox-hovered",dv="icon/16/actions/dialog-cancel.png",dG="menu-slidebar",dF="datechooser-date-pane",ec="background-pane",ed="decoration/treevirtual/cross_plus.gif",ee="qx/icon/Oxygen/16/actions/window-close.png",ef="datechooser-week",eg="icon/16/apps/office-calendar.png",eh="datechooser-weekday",ei="table-header-border",ej="table-header-cell-hover",ek="window-active-caption-text",el="window-active-caption",eF="icon",eE="checkbox-checked-focused",eD="toolbar-separator",eC="groove",eJ="checkbox-pressed",eI="tooltip-invalid",eH="decoration/window/restore.gif",eG="decoration/menu/checkbox-invert.gif",eM="scrollarea",eL="window-inactive-caption-text",eW="best-fit",eX="up.gif",eU="keep-align",eV="tabview-page-button-right",eS="tabview-page-button-top",eT="tabview-page-button-bottom",eQ="row-layer",eR="decoration/menu/radiobutton.gif",eY="decoration/arrows/",fa="decoration/table/descending.png",fo="tooltip-text",fn="checkbox-checked-hovered",fq="left.gif",fp="decoration/arrows/up-invert.gif",fs="alias",fr="checkbox-checked-disabled",fu="decoration/arrows/right-invert.gif",ft="radiobutton-checked-disabled",fm="lead-item",fl="checkbox-focused",fV="border-dark",fW="decoration/treevirtual/end_plus.gif",fX="decoration/treevirtual/start_minus.gif",fY="radiobutton-checked-hovered",fR="decoration/window/minimize.gif",fS="checkbox-checked",fT="table-header-cell-hovered",fU="down.gif",fP="decoration/treevirtual/end.gif",fQ="decoration/treevirtual/end_minus.gif",cN="window-inactive-caption",cM="decoration/menu/radiobutton-invert.gif",cL="text-placeholder",cK="slider",cJ="decoration/table/select-column-order.png",cI="decoration/arrows/next.gif",cH="table-header",cG="decoration/treevirtual/only_minus.gif",cF="datechooser-week-header",cE="decoration/window/maximize.gif",db="decoration/treevirtual/only_plus.gif",dc="checkbox-checked-pressed",cY="decoration/arrows/down-invert.gif",da="menu-separator",df="decoration/splitpane/knob-vertical.png",dg=".gif",dd="decoration/arrows/forward.gif",de="radiobutton-checked-pressed",dh="table-statusbar",di="radiobutton-pressed",eN="copy",eK="table-row-background-selected",eP="radiobutton-focused",eO="decoration/splitpane/knob-horizontal.png",eA="right.gif",ez="radiobutton-checked",du="decoration/treevirtual/cross.gif",eB="decoration/table/ascending.png",dE="decoration/treevirtual/line.gif",dD="date-chooser-selected",em="toolbar-part-handle",en="decoration/window/close.gif",eo="icon/16/actions/view-refresh.png";
qx.Theme.define(ea,{appearances:{"widget":{},"label":{style:function(bb){return {textColor:bb.disabled?fy:undefined};
}},"image":{style:function(ct){return {opacity:!ct.replacement&&ct.disabled?0.3:undefined};
}},"atom":{},"atom/label":fF,"atom/icon":fv,"root":{style:function(gS){return {backgroundColor:fC,textColor:gb,font:cQ};
}},"popup":{style:function(bS){return {decorator:fc,backgroundColor:ec,shadow:fd};
}},"tooltip":{include:fH,style:function(gV){return {backgroundColor:ev,textColor:fo,decorator:ev,shadow:fd,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":fB,"tooltip-error":{include:ev,style:function(ci){return {textColor:fx,showTimeout:100,hideTimeout:10000,decorator:dC,font:fO,backgroundColor:eI};
}},"tooltip-error/atom":fB,"iframe":{style:function(gk){return {backgroundColor:fe,decorator:fw};
}},"move-frame":{style:function(hb){return {decorator:fc};
}},"resize-frame":dX,"dragdrop-cursor":{style:function(gt){var gu=dY;

if(gt.copy){gu=eN;
}else if(gt.move){gu=dT;
}else if(gt.alias){gu=fs;
}return {source:dk+gu+dg,position:gj,offset:[2,16,2,6]};
}},"button-frame":{alias:fB,style:function(S){if(S.pressed||S.abandoned||S.checked){var U=!S.inner&&S.focused?ew:fw;
var T=[4,3,2,5];
}else{var U=!S.inner&&S.focused?dx:fz;
var T=[3,4];
}return {backgroundColor:S.abandoned?fk:S.hovered?fL:S.checked?gi:fE,decorator:U,padding:T};
}},"button":{alias:fK,include:fK,style:function(j){return {center:true};
}},"hover-button":{alias:fB,include:fB,style:function(cA){return {backgroundColor:cA.hovered?eq:undefined,textColor:cA.hovered?fx:undefined};
}},"splitbutton":{},"splitbutton/button":fE,"splitbutton/arrow":{alias:fE,include:fE,style:function(k){return {icon:es};
}},"scrollarea/corner":{style:function(){return {backgroundColor:fC};
}},"scrollarea":fD,"scrollarea/pane":fD,"scrollarea/scrollbar-x":ff,"scrollarea/scrollbar-y":ff,"list":{alias:eM,style:function(cv){var cz;
var cx=!!cv.focused;
var cy=!!cv.invalid;
var cw=!!cv.disabled;

if(cy&&!cw){cz=fG;
}else if(cx&&!cy&&!cw){cz=dM;
}else if(cw){cz=fN;
}else{cz=fe;
}return {decorator:cv.focused?ew:fw,backgroundColor:cz};
}},"listitem":{alias:fB,style:function(gl){return {gap:4,padding:gl.lead?[2,4]:[3,5],backgroundColor:gl.selected?eq:undefined,textColor:gl.selected?fx:undefined,decorator:gl.lead?fm:undefined};
}},"textfield":{style:function(ca){var cf;
var cd=!!ca.focused;
var ce=!!ca.invalid;
var cb=!!ca.disabled;

if(ce&&!cb){cf=fG;
}else if(cd&&!ce&&!cb){cf=dM;
}else if(cb){cf=fN;
}else{cf=cS;
}var cc;

if(ca.disabled){cc=fy;
}else if(ca.showingPlaceholder){cc=cL;
}else{cc=undefined;
}return {decorator:ca.focused?ew:fw,padding:[2,3],textColor:cc,backgroundColor:cf};
}},"textarea":fI,"checkbox":{alias:fB,style:function(cB){var cD;

if(cB.checked&&cB.focused){cD=eE;
}else if(cB.checked&&cB.disabled){cD=fr;
}else if(cB.checked&&cB.pressed){cD=dc;
}else if(cB.checked&&cB.hovered){cD=fn;
}else if(cB.checked){cD=fS;
}else if(cB.focused){cD=fl;
}else if(cB.pressed){cD=eJ;
}else if(cB.hovered){cD=dw;
}else{cD=fM;
}var cC=cB.invalid&&!cB.disabled?dr:dH;
return {icon:dN+cD+cC+dL,gap:6};
}},"radiobutton":{alias:fM,include:fM,style:function(bW){var bY;

if(bW.checked&&bW.focused){bY=dU;
}else if(bW.checked&&bW.disabled){bY=ft;
}else if(bW.checked&&bW.pressed){bY=de;
}else if(bW.checked&&bW.hovered){bY=fY;
}else if(bW.checked){bY=ez;
}else if(bW.focused){bY=eP;
}else if(bW.pressed){bY=di;
}else if(bW.hovered){bY=dl;
}else{bY=cP;
}var bX=bW.invalid&&!bW.disabled?dr:dH;
return {icon:dN+bY+bX+dL,shadow:undefined};
}},"spinner":{style:function(F){return {decorator:F.focused?ew:fw,textColor:F.disabled?fy:undefined};
}},"spinner/textfield":{include:fI,style:function(bf){return {decorator:undefined,padding:[2,3]};
}},"spinner/upbutton":{alias:fE,include:fE,style:function(bD){return {icon:dS,padding:bD.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:bD.hovered?fL:fE};
}},"spinner/downbutton":{alias:fE,include:fE,style:function(f){return {icon:ga,padding:f.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:f.hovered?fL:fE};
}},"datefield":cR,"datefield/button":{alias:cW,include:cW,style:function(gW){return {icon:eg,padding:[0,3],backgroundColor:undefined,decorator:undefined};
}},"datefield/list":{alias:dJ,include:dJ,style:function(y){return {decorator:y.focused?ew:fw};
}},"groupbox":{style:function(bU){return {backgroundColor:fC};
}},"groupbox/legend":{alias:fB,style:function(bL){return {backgroundColor:fC,textColor:bL.invalid?fg:undefined,paddingRight:4,paddingLeft:4,marginRight:10,marginLeft:10};
}},"groupbox/frame":{style:function(z){return {padding:[12,9],decorator:eC};
}},"check-groupbox":ey,"check-groupbox/legend":{alias:fM,include:fM,style:function(G){return {backgroundColor:fC,textColor:G.invalid?fg:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"radio-groupbox":ey,"radio-groupbox/legend":{alias:cP,include:cP,style:function(l){return {backgroundColor:fC,textColor:l.invalid?fg:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"toolbar":{style:function(gG){return {backgroundColor:fC};
}},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(bT){return {decorator:em,backgroundColor:fC,padding:[0,1],margin:[3,2],allowGrowY:true};
}},"toolbar-separator":{style:function(bs){return {margin:[3,2],decorator:eD};
}},"toolbar-button":{alias:fB,style:function(cj){if(cj.pressed||cj.checked||cj.abandoned){var cl=fA;
var ck=[3,2,1,4];
}else if(cj.hovered){var cl=cT;
var ck=[2,3];
}else{var cl=undefined;
var ck=[3,4];
}return {cursor:cQ,decorator:cl,padding:ck,backgroundColor:cj.abandoned?fk:cj.checked?fj:fE};
}},"toolbar-menubutton":{alias:fJ,include:fJ,style:function(gH){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:fv,include:fv,style:function(be){return {source:ga};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":fJ,"toolbar-splitbutton/arrow":{alias:fJ,include:fJ,style:function(cr){return {icon:es};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:fE,include:fE,style:function(u){return {icon:u.vertical?es:cI};
}},"slidebar/button-backward":{alias:fE,include:fE,style:function(gO){return {icon:gO.vertical?gc:dq};
}},"tabview":{},"tabview/bar":{alias:dV,style:function(n){var o=0,r=0,p=0,q=0;

if(n.barTop){p=-2;
}else if(n.barBottom){o=-2;
}else if(n.barRight){q=-2;
}else{r=-2;
}return {marginBottom:p,marginTop:o,marginLeft:q,marginRight:r};
}},"tabview/bar/button-forward":{include:gf,alias:gf,style:function(br){if(br.barTop||br.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:dK,alias:dK,style:function(bq){if(bq.barTop||bq.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/pane":{style:function(hc){return {backgroundColor:fC,decorator:fz,padding:10};
}},"tabview-page":fD,"tabview-page/button":{style:function(bt){var bC;
var bA=0,by=0,bv=0,bx=0;

if(bt.barTop||bt.barBottom){var bw=2,bu=2,bz=6,bB=6;
}else{var bw=6,bu=6,bz=6,bB=6;
}
if(bt.barTop){bC=eS;
}else if(bt.barRight){bC=eV;
}else if(bt.barBottom){bC=eT;
}else{bC=dR;
}
if(bt.checked){if(bt.barTop||bt.barBottom){bz+=2;
bB+=2;
}else{bw+=2;
bu+=2;
}}else{if(bt.barTop||bt.barBottom){bv+=2;
bA+=2;
}else if(bt.barLeft||bt.barRight){by+=2;
bx+=2;
}}
if(bt.checked){if(!bt.firstTab){if(bt.barTop||bt.barBottom){bx=-4;
}else{bA=-4;
}}
if(!bt.lastTab){if(bt.barTop||bt.barBottom){by=-4;
}else{bv=-4;
}}}return {zIndex:bt.checked?10:5,decorator:bC,backgroundColor:fC,padding:[bw,bB,bu,bz],margin:[bA,by,bv,bx]};
}},"tabview-page/button/label":{alias:fF,style:function(R){return {padding:[0,1,0,1],margin:R.focused?0:1,decorator:R.focused?dp:undefined};
}},"tabview-page/button/icon":fv,"tabview-page/button/close-button":{alias:fB,style:function(bg){return {icon:ee};
}},"scrollbar":{},"scrollbar/slider":{alias:cK,style:function(ha){return {backgroundColor:fj};
}},"scrollbar/slider/knob":{include:fK,style:function(e){return {height:14,width:14,minHeight:e.horizontal?undefined:9,minWidth:e.horizontal?9:undefined};
}},"scrollbar/button":{alias:fE,include:fE,style:function(bF){var bG;

if(bF.up||bF.down){if(bF.pressed||bF.abandoned||bF.checked){bG=[5,2,3,4];
}else{bG=[4,3];
}}else{if(bF.pressed||bF.abandoned||bF.checked){bG=[4,3,2,5];
}else{bG=[3,4];
}}var bH=eY;

if(bF.left){bH+=fq;
}else if(bF.right){bH+=eA;
}else if(bF.up){bH+=eX;
}else{bH+=fU;
}return {padding:bG,icon:bH};
}},"scrollbar/button-begin":cV,"scrollbar/button-end":cV,"slider":{style:function(gD){var gE;

if(gD.disabled){gE=fN;
}else if(gD.invalid){gE=fG;
}else if(gD.focused){gE=fj;
}else{gE=cS;
}return {backgroundColor:gE,decorator:gD.focused?ew:fw};
}},"slider/knob":{include:fK,style:function(gR){return {width:14,height:14,decorator:fz};
}},"tree-folder/open":{style:function(bd){return {source:bd.opened?dO:dI};
}},"tree-folder":{style:function(gv){return {padding:[2,3,2,0],icon:gv.opened?dt:gh};
}},"tree-folder/icon":{style:function(bK){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(bj){return {padding:[1,2],backgroundColor:bj.selected?eq:undefined,textColor:bj.selected?fx:undefined};
}},"tree-file":{include:gg,alias:gg,style:function(W){return {icon:ge};
}},"tree":{include:ep,alias:ep,style:function(x){return {contentPadding:[4,4,4,4]};
}},"treevirtual":{style:function(bI){return {decorator:fc};
}},"treevirtual-folder":{style:function(gK){return {icon:(gK.opened?dt:gh)};
}},"treevirtual-file":{include:dQ,alias:dQ,style:function(t){return {icon:ge};
}},"treevirtual-line":{style:function(gw){return {icon:dE};
}},"treevirtual-contract":{style:function(bQ){return {icon:dO};
}},"treevirtual-expand":{style:function(b){return {icon:dI};
}},"treevirtual-only-contract":{style:function(bi){return {icon:cG};
}},"treevirtual-only-expand":{style:function(cm){return {icon:db};
}},"treevirtual-start-contract":{style:function(gz){return {icon:fX};
}},"treevirtual-start-expand":{style:function(gJ){return {icon:dn};
}},"treevirtual-end-contract":{style:function(bl){return {icon:fQ};
}},"treevirtual-end-expand":{style:function(bn){return {icon:fW};
}},"treevirtual-cross-contract":{style:function(gQ){return {icon:dm};
}},"treevirtual-cross-expand":{style:function(gT){return {icon:ed};
}},"treevirtual-end":{style:function(v){return {icon:fP};
}},"treevirtual-cross":{style:function(gm){return {icon:du};
}},"window":{style:function(gL){return {contentPadding:[10,10,10,10],backgroundColor:fC,decorator:gL.maximized?undefined:fz,shadow:gL.maximized?undefined:fd};
}},"window/pane":{},"window/captionbar":{style:function(C){return {padding:1,backgroundColor:C.active?el:cN,textColor:C.active?ek:eL};
}},"window/icon":{style:function(cq){return {marginRight:4};
}},"window/title":{style:function(D){return {cursor:cQ,font:fO,marginRight:20,alignY:et};
}},"window/minimize-button":{include:fE,alias:fE,style:function(bm){return {icon:fR,padding:bm.pressed||bm.abandoned?[2,1,0,3]:[1,2]};
}},"window/restore-button":{include:fE,alias:fE,style:function(E){return {icon:eH,padding:E.pressed||E.abandoned?[2,1,0,3]:[1,2]};
}},"window/maximize-button":{include:fE,alias:fE,style:function(cs){return {icon:cE,padding:cs.pressed||cs.abandoned?[2,1,0,3]:[1,2]};
}},"window/close-button":{include:fE,alias:fE,style:function(cp){return {marginLeft:2,icon:en,padding:cp.pressed||cp.abandoned?[2,1,0,3]:[1,2]};
}},"window/statusbar":{style:function(K){return {decorator:fA,padding:[2,6]};
}},"window/statusbar-text":fF,"resizer":{style:function(gY){return {decorator:fz};
}},"splitpane":{},"splitpane/splitter":{style:function(cg){return {backgroundColor:fC};
}},"splitpane/splitter/knob":{style:function(ba){return {source:ba.horizontal?eO:df,padding:2};
}},"splitpane/slider":{style:function(bJ){return {backgroundColor:fV,opacity:0.3};
}},"selectbox":{include:fK,style:function(I){var J=fE;

if(I.invalid&&!I.disabled){J=fG;
}else if(I.abandoned){J=fk;
}else if(!I.abandoned&&I.hovered){J=fL;
}else if(!I.abandoned&&!I.hovered&&I.checked){J=gi;
}return {backgroundColor:J};
}},"selectbox/atom":fB,"selectbox/popup":fH,"selectbox/list":ep,"selectbox/arrow":{include:fv,style:function(bP){return {source:es,paddingRight:4,paddingLeft:5};
}},"datechooser":{style:function(Q){return {decorator:fz};
}},"datechooser/navigation-bar":{style:function(gP){return {backgroundColor:fb,textColor:gP.disabled?fy:gP.invalid?fg:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":ev,"datechooser/last-month-button-tooltip":ev,"datechooser/next-year-button-tooltip":ev,"datechooser/next-month-button-tooltip":ev,"datechooser/last-year-button":fh,"datechooser/last-month-button":fh,"datechooser/next-year-button":fh,"datechooser/next-month-button":fh,"datechooser/button/icon":{},"datechooser/button":{style:function(g){var h={width:17,show:eF};

if(g.lastYear){h.icon=dA;
}else if(g.lastMonth){h.icon=dq;
}else if(g.nextYear){h.icon=dd;
}else if(g.nextMonth){h.icon=gd;
}
if(g.pressed||g.checked||g.abandoned){h.decorator=fA;
}else if(g.hovered){h.decorator=cT;
}else{h.decorator=undefined;
}
if(g.pressed||g.checked||g.abandoned){h.padding=[2,0,0,2];
}else if(g.hovered){h.padding=1;
}else{h.padding=2;
}return h;
}},"datechooser/month-year-label":{style:function(X){return {font:fO,textAlign:fi};
}},"datechooser/date-pane":{style:function(L){return {decorator:dF,backgroundColor:fb};
}},"datechooser/weekday":{style:function(bV){return {decorator:eh,font:fO,textAlign:fi,textColor:bV.disabled?fy:bV.weekend?cO:fb,backgroundColor:bV.weekend?fb:cO};
}},"datechooser/day":{style:function(bR){return {textAlign:fi,decorator:bR.today?fc:undefined,textColor:bR.disabled?fy:bR.selected?fx:bR.otherMonth?fy:undefined,backgroundColor:bR.disabled?undefined:bR.selected?dD:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(bo){return {textAlign:fi,textColor:cO,padding:[2,4],decorator:bo.header?cF:ef};
}},"combobox":{style:function(gx){var gy;

if(gx.disabled){gy=fN;
}else if(gx.invalid){gy=fG;
}else if(gx.focused){gy=fj;
}else{gy=cS;
}return {decorator:gx.focused?ew:fw,textColor:gx.disabled?fy:undefined,backgroundColor:gy};
}},"combobox/button":{alias:fE,include:fE,style:function(Y){return {icon:es,backgroundColor:Y.hovered?fL:fE};
}},"combobox/popup":fH,"combobox/list":ep,"combobox/textfield":{include:fI,style:function(gn){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};
}},"menu":{style:function(cn){var co={backgroundColor:fC,shadow:fd,decorator:fz,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:cn.submenu||cn.contextmenu?eW:eU};

if(cn.submenu){co.position=gj;
co.offset=[-2,-3];
}
if(cn.contextmenu){co.offset=4;
}return co;
}},"menu/slidebar":dG,"menu-slidebar":fD,"menu-slidebar-button":{style:function(bN){return {backgroundColor:bN.hovered?eq:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:cU,style:function(ch){return {icon:ch.hovered?fp:gc};
}},"menu-slidebar/button-forward":{include:cU,style:function(gr){return {icon:gr.hovered?cY:es};
}},"menu-separator":{style:function(cu){return {height:0,decorator:da,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:fB,style:function(gB){return {backgroundColor:gB.selected?eq:undefined,textColor:gB.selected?fx:undefined,padding:[2,6]};
}},"menu-button/icon":{include:fv,style:function(gC){return {alignY:et};
}},"menu-button/label":{include:fF,style:function(bk){return {alignY:et,padding:1};
}},"menu-button/shortcut":{include:fF,style:function(m){return {alignY:et,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:fv,style:function(gX){return {source:gX.selected?fu:gd,alignY:et};
}},"menu-checkbox":{alias:eu,include:eu,style:function(hd){return {icon:!hd.checked?undefined:hd.selected?eG:eb};
}},"menu-radiobutton":{alias:eu,include:eu,style:function(gq){return {icon:!gq.checked?undefined:gq.selected?cM:eR};
}},"menubar":{style:function(A){return {backgroundColor:fC,decorator:fz};
}},"menubar-button":{alias:fB,style:function(gF){return {padding:[2,6],backgroundColor:gF.pressed||gF.hovered?eq:undefined,textColor:gF.pressed||gF.hovered?fx:undefined};
}},"colorselector":fD,"colorselector/control-bar":fD,"colorselector/visual-pane":ey,"colorselector/control-pane":fD,"colorselector/preset-grid":fD,"colorselector/colorbucket":{style:function(gs){return {decorator:fA,width:16,height:16};
}},"colorselector/preset-field-set":ey,"colorselector/input-field-set":ey,"colorselector/preview-field-set":ey,"colorselector/hex-field-composite":fD,"colorselector/hex-field":fI,"colorselector/rgb-spinner-composite":fD,"colorselector/rgb-spinner-red":er,"colorselector/rgb-spinner-green":er,"colorselector/rgb-spinner-blue":er,"colorselector/hsb-spinner-composite":fD,"colorselector/hsb-spinner-hue":er,"colorselector/hsb-spinner-saturation":er,"colorselector/hsb-spinner-brightness":er,"colorselector/preview-content-old":{style:function(bc){return {decorator:fA,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(bO){return {decorator:fA,backgroundColor:fe,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(go){return {decorator:fA,margin:5};
}},"colorselector/brightness-field":{style:function(bp){return {decorator:fA,margin:[5,7]};
}},"colorselector/hue-saturation-pane":fD,"colorselector/hue-saturation-handle":fD,"colorselector/brightness-pane":fD,"colorselector/brightness-handle":fD,"table":fD,"table/statusbar":{style:function(d){return {decorator:dh,paddingLeft:2,paddingRight:2};
}},"table/column-button":{alias:fE,style:function(M){var O,N;

if(M.pressed||M.checked||M.abandoned){O=fA;
N=[3,2,1,4];
}else if(M.hovered){O=cT;
N=[2,3];
}else{O=undefined;
N=[3,4];
}return {decorator:O,padding:N,backgroundColor:M.abandoned?fk:fE,icon:cJ};
}},"table-column-reset-button":{extend:eu,alias:eu,style:function(){return {icon:eo};
}},"table-scroller/scrollbar-x":ff,"table-scroller/scrollbar-y":ff,"table-scroller":fD,"table-scroller/header":{style:function(gI){return {decorator:dz,backgroundColor:cH};
}},"table-scroller/pane":{style:function(gA){return {backgroundColor:dy};
}},"table-scroller/focus-indicator":{style:function(a){return {decorator:dW};
}},"table-scroller/resize-line":{style:function(bM){return {backgroundColor:ei,width:3};
}},"table-header-cell":{alias:fB,style:function(i){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:i.hovered?0:2,decorator:i.hovered?fT:cX,backgroundColor:i.hovered?ej:cX,sortIcon:i.sorted?(i.sortedAscending?eB:fa):undefined};
}},"table-header-cell/sort-icon":{style:function(V){return {alignY:et};
}},"table-editor-textfield":{include:fI,style:function(s){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:dP,alias:dP,style:function(w){return {padding:[0,2]};
}},"table-editor-combobox":{include:cR,alias:cR,style:function(gN){return {decorator:undefined};
}},"colorpopup":{alias:fH,include:fH,style:function(P){return {decorator:fz,padding:5,backgroundColor:fC};
}},"colorpopup/field":{style:function(bE){return {decorator:fA,margin:2,width:14,height:14,backgroundColor:fC};
}},"colorpopup/selector-button":fE,"colorpopup/auto-button":fE,"colorpopup/preview-pane":ey,"colorpopup/current-preview":{style:function(gp){return {height:20,padding:4,marginLeft:4,decorator:fA,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(gU){return {height:20,padding:4,marginRight:4,decorator:fA,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:fE,include:fE,style:function(bh){return {icon:dj};
}},"colorpopup/colorselector-cancelbutton":{alias:fE,include:fE,style:function(c){return {icon:dv};
}},"virtual-list":ep,"virtual-list/row-layer":eQ,"row-layer":fD,"column-layer":fD,"cell":{style:function(gM){return {backgroundColor:gM.selected?eK:ds,textColor:gM.selected?fx:gb,padding:[3,6]};
}},"cell-string":ex,"cell-number":{include:ex,style:function(H){return {textAlign:dB};
}},"cell-image":ex,"cell-boolean":ex,"cell-atom":ex,"cell-date":ex,"cell-html":ex,"htmlarea":{"include":fD,style:function(B){return {backgroundColor:fe};
}}}});
})();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";
qx.Theme.define(b,{title:c,aliases:{"icon":a},icons:{}});
})();
(function(){var b="Classic Windows",a="qx.theme.Classic";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="px ",b="sliceBottom",a=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',o="sliceTop",m='url("',n="hidden",k="repeatY",l="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(F,G){qx.ui.decoration.Abstract.call(this);
if(F!=null){this.setBorderImage(F);
}
if(G!=null){this.setSlice(G);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[o,v,b,w],shorthand:true},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,k],shorthand:true}},members:{__sn:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__sn;
},getMarkup:function(){if(this.__sn){return this.__sn;
}var y=this._resolveImageUrl(this.getBorderImage());
var z=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var A=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__sn=[x,qx.bom.element.Style.compile({"borderImage":m+y+p+z.join(f)+f+A,position:l,lineHeight:0,fontSize:0,overflow:n,boxSizing:r,borderWidth:z.join(c)+g}),a].join(q);
return this.__sn;
},resize:function(B,C,D){B.style.width=C+g;
B.style.height=D+g;
},tint:function(H,I){},_applyStyle:function(){{};
},_resolveImageUrl:function(E){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(E));
}},destruct:function(){this.__sn=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",b='</div>',a="scale",x="qx.client",w="-br",v="-t",u="-tl",t="-r",s='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',r="_applyBaseImage",q="-b",p="String",o="",m="-bl",n="qx.ui.decoration.GridDiv",k="-c",l="mshtml";
qx.Class.define(n,{extend:qx.ui.decoration.Abstract,construct:function(D,E){qx.ui.decoration.Abstract.call(this);
if(D!=null){this.setBaseImage(D);
}
if(E!=null){this.setInsets(E);
}},properties:{baseImage:{check:p,nullable:true,apply:r}},members:{__so:null,__sp:null,__sq:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__so;
},getMarkup:function(){if(this.__so){return this.__so;
}var J=qx.bom.element.Decoration;
var K=this.__sp;
var L=this.__sq;
var M=[];
M.push(s);
M.push(J.create(K.tl,g,{top:0,left:0}));
M.push(J.create(K.t,f,{top:0,left:L.left+j}));
M.push(J.create(K.tr,g,{top:0,right:0}));
M.push(J.create(K.bl,g,{bottom:0,left:0}));
M.push(J.create(K.b,f,{bottom:0,left:L.left+j}));
M.push(J.create(K.br,g,{bottom:0,right:0}));
M.push(J.create(K.l,e,{top:L.top+j,left:0}));
M.push(J.create(K.c,a,{top:L.top+j,left:L.left+j}));
M.push(J.create(K.r,e,{top:L.top+j,right:0}));
M.push(b);
return this.__so=M.join(o);
},resize:function(F,G,H){var I=this.__sq;
var innerWidth=G-I.left-I.right;
var innerHeight=H-I.top-I.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}F.style.width=G+j;
F.style.height=H+j;
F.childNodes[1].style.width=innerWidth+j;
F.childNodes[4].style.width=innerWidth+j;
F.childNodes[7].style.width=innerWidth+j;
F.childNodes[6].style.height=innerHeight+j;
F.childNodes[7].style.height=innerHeight+j;
F.childNodes[8].style.height=innerHeight+j;

if(qx.core.Variant.isSet(x,l)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(G%2==1){F.childNodes[2].style.marginRight=h;
F.childNodes[5].style.marginRight=h;
F.childNodes[8].style.marginRight=h;
}else{F.childNodes[2].style.marginRight=i;
F.childNodes[5].style.marginRight=i;
F.childNodes[8].style.marginRight=i;
}
if(H%2==1){F.childNodes[3].style.marginBottom=h;
F.childNodes[4].style.marginBottom=h;
F.childNodes[5].style.marginBottom=h;
}else{F.childNodes[3].style.marginBottom=i;
F.childNodes[4].style.marginBottom=i;
F.childNodes[5].style.marginBottom=i;
}}}},tint:function(y,z){},_applyBaseImage:function(N,O){{};

if(N){var S=this._resolveImageUrl(N);
var T=/(.*)(\.[a-z]+)$/.exec(S);
var R=T[1];
var Q=T[2];
var P=this.__sp={tl:R+u+Q,t:R+v+Q,tr:R+d+Q,bl:R+m+Q,b:R+q+Q,br:R+w+Q,l:R+c+Q,c:R+k+Q,r:R+t+Q};
this.__sq=this._computeEdgeSizes(P);
}},_resolveImageUrl:function(A){return qx.util.AliasManager.getInstance().resolve(A);
},_computeEdgeSizes:function(B){var C=qx.util.ResourceManager.getInstance();
return {top:C.getImageHeight(B.t),bottom:C.getImageHeight(B.b),left:C.getImageWidth(B.l),right:C.getImageWidth(B.r)};
}},destruct:function(){this.__so=this.__sp=this.__sq=null;
}});
})();


qx.$$loader.init();

