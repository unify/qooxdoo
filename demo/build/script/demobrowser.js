(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date().valueOf();
qx.$$build = 1282826865334;
qx.$$type = "build";
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"demobrowser.Application","qx.theme":"demobrowser.Theme","qx.version":"1.3-pre"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.contrib":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"demobrowser":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.3-pre"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.js"]],
  urisBefore : [],
  packageHashes : {"0":"45a12fee3671"},
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

qx.$$packageData['45a12fee3671']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}},"resources":{"demobrowser/backend/remote_table.php":"demobrowser","demobrowser/css/sourceview.css":"demobrowser","demobrowser/css/style.css":"demobrowser","demobrowser/demo/background/gradient-pressed.png":[250,18,"png","demobrowser"],"demobrowser/demo/background/gradient.png":[250,34,"png","demobrowser"],"demobrowser/demo/background/gradients.svg":"demobrowser","demobrowser/demo/flash/FlashVersion.swf":"demobrowser","demobrowser/demo/flash/TestFlash.mxml":"demobrowser","demobrowser/demo/flash/TestFlash.swf":"demobrowser","demobrowser/demo/flash/build.xml":"demobrowser","demobrowser/demo/flash/fo_tester.fla":"demobrowser","demobrowser/demo/flash/fo_tester.swf":"demobrowser","demobrowser/demo/html/ModalWindow.html":"demobrowser","demobrowser/demo/icons/feed-reader.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/format-indent-less.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-indent-more.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-center.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-fill.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-left.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-right.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format.png":[96,16,"png","demobrowser"],"demobrowser/demo/icons/graphics-viewer-document.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-fill-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-ordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-unordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-text-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-horizontal-rule.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-table.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-text.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/qooxdoo_logo.png":[136,41,"png","demobrowser"],"demobrowser/demo/icons/imicons/christian_schmidt.png":[52,64,"png","demobrowser"],"demobrowser/demo/icons/imicons/fabian_jakobs.png":[70,70,"png","demobrowser"],"demobrowser/demo/icons/imicons/jonathan_weiss.png":[218,218,"png","demobrowser"],"demobrowser/demo/icons/imicons/martin_wittemann.png":[52,52,"png","demobrowser"],"demobrowser/demo/icons/imicons/readme.txt":"demobrowser","demobrowser/demo/icons/imicons/status_away.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_busy.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_offline.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_online.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_add.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_delete.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player-disabled.png":[128,128,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player.png":[128,128,"png","demobrowser"],"demobrowser/demo/test/alphaPNG.png":[20,20,"png","demobrowser"],"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser"],"demobrowser/demo/test/combined/thumbs.png":[218,65,"png","demobrowser"],"demobrowser/demo/test/demobrowser_thumb.png":[113,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",-105,0],"demobrowser/demo/test/feedreader_thumb.png":[105,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",0,0],"demobrowser/demo/test/logo.gif":[136,41,"gif","demobrowser"],"demobrowser/demo/theme/tag-hor-c.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-l.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-r.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor.png":[18,12,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-b.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-c.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-t.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert.png":[12,18,"png","demobrowser"],"demobrowser/welcome/feedreader.png":[250,185,"png","demobrowser"],"demobrowser/welcome/playground.png":[250,185,"png","demobrowser"],"demobrowser/welcome/portal.png":[250,185,"png","demobrowser"],"demobrowser/welcome/showcase.png":[250,185,"png","demobrowser"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/actions/application-exit.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-clear.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-redo.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-next.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-previous.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/help-faq.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-start.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-stop.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-web-browser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-spreadsheet.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-color-chooser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-log-viewer.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/executable.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-44],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-22],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.html":"qx"},"translations":{"C":{}}};
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
(function(){var o="on",n="qx.debug",m="|",k="default",j="off",h="gecko",g="$",f="qx.dynlocale",e="webkit",d="opera",a="qx.client",c="qx.core.Variant",b="mshtml";
qx.Bootstrap.define(c,{statics:{__K:{},__L:{},compilerIsSet:function(){return true;
},define:function(G,H,I){if(qx.core.Variant.compilerIsSet(n,o)){if(!this.__O(H)){throw new Error('Allowed values of variant "'+G+'" must be defined!');
}
if(I===undefined){throw new Error('Default value of variant "'+G+'" must be defined!');
}}
if(!this.__K[G]){this.__K[G]={};
}else if(qx.core.Variant.compilerIsSet(n,o)){if(this.__K[G].defaultValue!==undefined){throw new Error('Variant "'+G+'" is already defined!');
}}this.__K[G].allowedValues=H;
this.__K[G].defaultValue=I;
},get:function(E){var F=this.__K[E];

if(qx.core.Variant.compilerIsSet(n,o)){if(F===undefined){throw new Error('Variant "'+E+'" is not defined.');
}}
if(F.value!==undefined){return F.value;
}return F.defaultValue;
},__M:function(){if(window.qxvariants){for(var s in qxvariants){if(qx.core.Variant.compilerIsSet("qx.debug","on")){if((s.split(".")).length<2){throw new Error('Malformed settings key "'+s+'". Must be following the schema "namespace.key".');
}}
if(!this.__K[s]){this.__K[s]={};
}this.__K[s].value=qxvariants[s];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(t){}this.__N(this.__K);
}},__N:function(){if(qx.core.Setting.get("qx.allowUrlVariants")!=true){return;
}var A=document.location.search.slice(1).split("&");

for(var i=0;i<A.length;i++){var B=A[i].split(":");

if(B.length!=3||B[0]!="qxvariant"){continue;
}var C=B[1];

if(!this.__K[C]){this.__K[C]={};
}this.__K[C].value=decodeURIComponent(B[2]);
}},select:function(p,q){if(qx.core.Variant.compilerIsSet(n,o)){if(!this.__P(this.__K[p])){throw new Error("Variant \""+p+"\" is not defined");
}
if(!this.__P(q)){throw new Error("the second parameter must be a map!");
}}
for(var r in q){if(this.isSet(p,r)){return q[r];
}}
if(q[k]!==undefined){return q[k];
}
if(qx.core.Variant.compilerIsSet(n,o)){throw new Error('No match for variant "'+p+'" in variants ['+qx.Bootstrap.getKeysAsString(q)+'] found, and no default ("default") given');
}},isSet:function(u,w){var x=u+g+w;

if(this.__L[x]!==undefined){return this.__L[x];
}var z=false;
if(w.indexOf(m)<0){z=this.get(u)===w;
}else{var y=w.split(m);

for(var i=0,l=y.length;i<l;i++){if(this.get(u)===y[i]){z=true;
break;
}}}this.__L[x]=z;
return z;
},__O:function(v){return typeof v==="object"&&v!==null&&v instanceof Array;
},__P:function(v){return typeof v==="object"&&v!==null&&!(v instanceof Array);
},__Q:function(J,K){for(var i=0,l=J.length;i<l;i++){if(J[i]==K){return true;
}}return false;
}},defer:function(D){D.define(a,[h,b,d,e],qx.bom.client.Engine.NAME);
D.define(n,[o,j],o);
D.define(f,[o,j],o);
D.__M();
}});
})();
(function(){var u="qx.debug",t="object",s="Interface",r="on",q="string",p="function",o="Boolean",n="qx.Interface",m="events",k="toggle",d="properties",j="]",g="members",c="number",b="boolean",f="is",e="[Interface ",h="statics";
qx.Bootstrap.define(n,{statics:{define:function(name,I){if(I){if(I.extend&&!(I.extend instanceof Array)){I.extend=[I.extend];
}if(qx.core.Variant.isSet(u,r)){this.__l(name,I);
}var J=I.statics?I.statics:{};
if(I.extend){J.$$extends=I.extend;
}
if(I.properties){J.$$properties=I.properties;
}
if(I.members){J.$$members=I.members;
}
if(I.events){J.$$events=I.events;
}}else{var J={};
}J.$$type=s;
J.name=name;
J.toString=this.genericToString;
J.basename=qx.Bootstrap.createNamespace(name,J);
qx.Interface.$$registry[name]=J;
return J;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(bb){if(!bb){return [];
}var bc=bb.concat();

for(var i=0,l=bb.length;i<l;i++){if(bb[i].$$extends){bc.push.apply(bc,this.flatten(bb[i].$$extends));
}}return bc;
},__f:function(bd,be,bf,bg){var bk=bf.$$members;

if(bk){for(var bj in bk){if(qx.Bootstrap.isFunction(bk[bj])){var bi=this.__g(be,bj);
var bh=bi||qx.Bootstrap.isFunction(bd[bj]);

if(!bh){throw new Error('Implementation of method "'+bj+'" is missing in class "'+be.classname+'" required by interface "'+bf.name+'"');
}var bl=bg===true&&!bi&&!qx.Bootstrap.hasInterface(be,bf);

if(bl){bd[bj]=this.__j(bf,bd[bj],bj,bk[bj]);
}}else{if(typeof bd[bj]===undefined){if(typeof bd[bj]!==p){throw new Error('Implementation of member "'+bj+'" is missing in class "'+be.classname+'" required by interface "'+bf.name+'"');
}}}}}},__g:function(y,z){var D=z.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!D){return false;
}var A=qx.Bootstrap.firstLow(D[2]);
var B=qx.core.property.Util.getPropertyDefinition(y,A);

if(!B){return false;
}var C=D[0]==f||D[0]==k;

if(C){return qx.core.property.Util.getPropertyDefinition(y,A).check==o;
}return true;
},__h:function(v,w){if(w.$$properties){for(var x in w.$$properties){if(!qx.core.property.Util.getPropertyDefinition(v,x)){throw new Error('The property "'+x+'" is not supported by Class "'+v.classname+'"!');
}}}},__i:function(T,U){if(U.$$events){for(var V in U.$$events){if(!qx.Bootstrap.supportsEvent(T,V)){throw new Error('The event "'+V+'" is not supported by Class "'+T.classname+'"!');
}}}},assertObject:function(E,F){var H=E.constructor;
this.__f(E,H,F,false);
this.__h(H,F);
this.__i(H,F);
var G=F.$$extends;

if(G){for(var i=0,l=G.length;i<l;i++){this.assertObject(E,G[i]);
}}},assert:function(W,X,Y){this.__f(W.prototype,W,X,Y);
this.__h(W,X);
this.__i(W,X);
var ba=X.$$extends;

if(ba){for(var i=0,l=ba.length;i<l;i++){this.assert(W,ba[i],Y);
}}},genericToString:function(){return e+this.name+j;
},$$registry:{},__j:qx.core.Variant.select(u,{"on":function(O,P,Q,R){function S(){R.apply(this,arguments);
return P.apply(this,arguments);
}P.wrapper=S;
return S;
},"default":function(){}}),__k:qx.core.Variant.select(u,{"on":{"extend":t,"statics":t,"members":t,"properties":t,"events":t},"default":null}),__l:qx.core.Variant.select(u,{"on":function(name,K){if(qx.core.Variant.isSet(u,r)){var N=this.__k;

for(var M in K){if(N[M]===undefined){throw new Error('The configuration key "'+M+'" in class "'+name+'" is not allowed!');
}
if(K[M]==null){throw new Error("Invalid key '"+M+"' in interface '"+name+"'! The value is undefined/null!");
}
if(N[M]!==null&&typeof K[M]!==N[M]){throw new Error('Invalid type of key "'+M+'" in interface "'+name+'"! The type of the key must be "'+N[M]+'"!');
}}var L=[h,g,d,m];

for(var i=0,l=L.length;i<l;i++){var M=L[i];

if(K[M]!==undefined&&(K[M] instanceof Array||K[M] instanceof RegExp||K[M] instanceof Date||K[M].classname!==undefined)){throw new Error('Invalid key "'+M+'" in interface "'+name+'"! The value needs to be a map!');
}}if(K.extend){for(var i=0,a=K.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");
}
if(a[i].$$type!==s){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");
}}}if(K.statics){for(var M in K.statics){if(M.toUpperCase()!==M){throw new Error('Invalid key "'+M+'" in interface "'+name+'"! Static constants must be all uppercase.');
}
switch(typeof K.statics[M]){case b:case q:case c:break;
default:throw new Error('Invalid key "'+M+'" in interface "'+name+'"! Static constants must be all of a primitive type.');
}}}}},"default":function(){}})}});
})();
(function(){var r="object",q="qx.debug",p="function",o="Mixin",n="qx.Mixin",m=".prototype",k="constructor",j="[Mixin ",h="]",g="members",d="destruct",f="events",e="on",c="properties",b="statics";
qx.Bootstrap.define(n,{statics:{define:function(name,s){if(s){if(s.include&&!(s.include instanceof Array)){s.include=[s.include];
}if(qx.core.Variant.isSet(q,e)){this.__n(name,s);
}var u=s.statics?s.statics:{};
qx.Bootstrap.setDisplayNames(u,name);

for(var t in u){if(u[t] instanceof Function){u[t].$$mixin=u;
}}if(s.construct){u.$$constructor=s.construct;
qx.Bootstrap.setDisplayName(s.construct,name,k);
}
if(s.include){u.$$includes=s.include;
}
if(s.properties){u.$$properties=s.properties;
}
if(s.members){u.$$members=s.members;
qx.Bootstrap.setDisplayNames(s.members,name+m);
}
for(var t in u.$$members){if(u.$$members[t] instanceof Function){u.$$members[t].$$mixin=u;
}}
if(s.events){u.$$events=s.events;
}
if(s.destruct){u.$$destructor=s.destruct;
qx.Bootstrap.setDisplayName(s.destruct,name,d);
}}else{var u={};
}u.$$type=o;
u.name=name;
u.toString=this.genericToString;
u.basename=qx.Bootstrap.createNamespace(name,u);
this.$$registry[name]=u;
return u;
},checkCompatibility:function(B){var E=this.flatten(B);
var F=E.length;

if(F<2){return true;
}var I={};
var H={};
var G={};
var D;

for(var i=0;i<F;i++){D=E[i];

for(var C in D.events){if(G[C]){throw new Error('Conflict between mixin "'+D.name+'" and "'+G[C]+'" in member "'+C+'"!');
}G[C]=D.name;
}
for(var C in D.properties){if(I[C]){throw new Error('Conflict between mixin "'+D.name+'" and "'+I[C]+'" in property "'+C+'"!');
}I[C]=D.name;
}
for(var C in D.members){if(H[C]){throw new Error('Conflict between mixin "'+D.name+'" and "'+H[C]+'" in member "'+C+'"!');
}H[C]=D.name;
}}return true;
},isCompatible:function(J,K){var L=qx.Bootstrap.getMixins(K);
L.push(J);
return qx.Mixin.checkCompatibility(L);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(z){if(!z){return [];
}var A=z.concat();

for(var i=0,l=z.length;i<l;i++){if(z[i].$$includes){A.push.apply(A,this.flatten(z[i].$$includes));
}}return A;
},genericToString:function(){return j+this.name+h;
},$$registry:{},__m:qx.core.Variant.select(q,{"on":{"include":r,"statics":r,"members":r,"properties":r,"events":r,"destruct":p,"construct":p},"default":null}),__n:qx.core.Variant.select(q,{"on":function(name,v){var y=this.__m;

for(var x in v){if(!y[x]){throw new Error('The configuration key "'+x+'" in mixin "'+name+'" is not allowed!');
}
if(v[x]==null){throw new Error('Invalid key "'+x+'" in mixin "'+name+'"! The value is undefined/null!');
}
if(y[x]!==null&&typeof v[x]!==y[x]){throw new Error('Invalid type of key "'+x+'" in mixin "'+name+'"! The type of the key must be "'+y[x]+'"!');
}}var w=[b,g,c,f];

for(var i=0,l=w.length;i<l;i++){var x=w[i];

if(v[x]!==undefined&&(v[x] instanceof Array||v[x] instanceof RegExp||v[x] instanceof Date||v[x].classname!==undefined)){throw new Error('Invalid key "'+x+'" in mixin "'+name+'"! The value needs to be a map!');
}}if(v.include){for(var i=0,a=v.include,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is undefined/null!");
}
if(a[i].$$type!==o){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is not a mixin!");
}}this.checkCompatibility(v.include);
}},"default":function(){}})}});
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
(function(){var h="boolean",g="string",f="qx.debug",e="qx.core.property.Debug",d="refine",c="init",b="object";
qx.Bootstrap.define(e,{statics:{checkSetter:function(i,j,k){var name=j.name;

if(k.length==0){throw new Error("Called set() method of property "+name+" with no arguments!");
}
if(k.length>1){i.warn("Called set() method of property "+name+" with too many arguments!");
i.trace();
}var l=k[0];

if(l==null){if(!j.nullable){throw new Error("Property "+name+" is not nullable!");
}}else{var m=j.check;

if(m){try{qx.core.Type.check(l,m,i);
}catch(a){throw new Error("Could not set() property "+name+": "+a);
}}}},checkResetter:function(n,o,p){if(p.length!=0){n.warn("Called reset method of property "+o.name+" with too many arguments!");
n.trace();
}},checkGetter:function(q,r,s){if(s.length!=0){q.warn("Called get method of property "+r.name+" with too many arguments!");
q.trace();
}},__wG:qx.core.Variant.select(f,{"on":{name:g,inheritable:h,nullable:h,themeable:h,refine:h,init:null,apply:g,event:g,check:null,validate:null},"default":null}),__wH:qx.core.Variant.select(f,{"on":{name:g,group:b,shorthand:h,themeable:h},"default":null}),validateConfig:qx.core.Variant.select(f,{"on":function(t,name,u,v){var w=qx.core.property.Util;
var y=w.hasProperty(t,name);

if(y){var x=w.getPropertyDefinition(t,name);

if(u.refine&&x.init===undefined){throw new Error("Could not refine a init value if there was previously no init value defined. Property '"+name+"' of class '"+t.classname+"'.");
}}
if(!y&&u.refine){throw new Error("Could not refine non-existent property: "+name+"!");
}
if(y&&!v){throw new Error("Class "+t.classname+" already has a property: "+name+"!");
}
if(y&&v){if(!u.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+t.classname+', original class: '+w.getByProperty(t,name).classname+'.');
}
for(var z in u){if(z!==c&&z!==d){throw new Error("Class "+t.classname+" could not refine property: "+name+"! Key: "+z+" could not be refined!");
}}}var A=u.group?this.__wH:this.__wG;

for(var z in u){if(A[z]===undefined){throw new Error('The configuration key "'+z+'" of property "'+name+'" in class "'+t.classname+'" is not allowed!');
}
if(u[z]===undefined){throw new Error('Invalid key "'+z+'" of property "'+name+'" in class "'+t.classname+'"! The value is undefined: '+u[z]);
}
if(A[z]!==null&&typeof u[z]!==A[z]){throw new Error('Invalid type of key "'+z+'" of property "'+name+'" in class "'+t.classname+'"! The type of the key must be "'+A[z]+'"!');
}}},"default":null})}});
})();
(function(){var bO="qx.debug",bN="object",bM="on",bL="function",bK=".",bJ="static",bI="string",bH="abstract",bG="singleton",bF="_",cj=".prototype",ci="constructor",ch="extend",cg="$$init-",cf="qx.event.type.Data",ce="members",cd="variants",cc="properties",cb="statics",ca="toString",bV="events",bW="]",bT="Class",bU="Interface",bR="qx.Class",bS="Mixin",bP="settings",bQ='Assumed static class because no "extend" key was found. ',bX="[Class ",bY="destruct";
qx.Bootstrap.define(bR,{statics:{define:function(name,ck){if(!ck){var ck={};
}if(ck.include&&!(ck.include instanceof Array)){ck.include=[ck.include];
}if(ck.implement&&!(ck.implement instanceof Array)){ck.implement=[ck.implement];
}var cl=false;

if(!ck.hasOwnProperty(ch)&&!ck.type){ck.type=bJ;
cl=true;
}if(qx.core.Variant.isSet(bO,bM)){try{this.__q(name,ck);
}catch(S){if(cl){S.message=bQ+S.message;
}throw S;
}}var cm=this.__s(name,ck.type,ck.extend,ck.statics,ck.construct,ck.destruct,ck.include);
if(ck.extend){if(ck.properties){this.__u(cm,ck.properties,true);
}if(ck.members){this.__v(cm,ck.members,true,true,false);
}if(ck.events){this.__t(cm,ck.events,true);
}if(ck.include){for(var i=0,l=ck.include.length;i<l;i++){this.__z(cm,ck.include[i],false);
}}}if(ck.settings){for(var cn in ck.settings){qx.core.Setting.define(cn,ck.settings[cn]);
}}if(ck.variants){for(var cn in ck.variants){qx.core.Variant.define(cn,ck.variants[cn].allowedValues,ck.variants[cn].defaultValue);
}}if(ck.implement){for(var i=0,l=ck.implement.length;i<l;i++){this.__x(cm,ck.implement[i]);
}}
if(qx.core.Variant.isSet(bO,bM)){this.__r(cm);
}if(ck.defer){ck.defer.self=cm;
ck.defer(cm,cm.prototype,{add:function(name,A){var B={};
B[name]=A;
qx.Class.__u(cm,B,true);
}});
}return cm;
},undefine:function(name){delete this.$$registry[name];
var co=name.split(bK);
var cq=[window];

for(var i=0;i<co.length;i++){cq.push(cq[i][co[i]]);
}for(var i=cq.length-1;i>=1;i--){var cp=cq[i];
var parent=cq[i-1];

if(qx.Bootstrap.isFunction(cp)||qx.Bootstrap.objectGetLength(cp)===0){delete parent[co[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(bC,bD){if(qx.core.Variant.isSet(bO,bM)){if(!bD){throw new Error("The mixin to include into class '"+bC.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(bD,bC);
}qx.Class.__z(bC,bD,false);
},patch:function(bm,bn){if(qx.core.Variant.isSet(bO,bM)){if(!bn){throw new Error("The mixin to patch class '"+bm.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(bn,bm);
}qx.Class.__z(bm,bn,true);
},isSubClassOf:function(Q,R){if(!Q){return false;
}
if(Q==R){return true;
}
if(Q.prototype instanceof R){return true;
}return false;
},getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(k,m){return k.$$includes&&k.$$includes.indexOf(m)!==-1;
},getByMixin:function(K,L){var M,i,l;

while(K){if(K.$$includes){M=K.$$flatIncludes;

for(i=0,l=M.length;i<l;i++){if(M[i]===L){return K;
}}}K=K.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(ct,cu){return !!this.getByMixin(ct,cu);
},hasOwnInterface:function(cr,cs){return cr.$$implements&&cr.$$implements.indexOf(cs)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(I){var J=[];

while(I){if(I.$$implements){J.push.apply(J,I.$$flatImplements);
}I=I.superclass;
}return J;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(be,bf){var bg=be.constructor;

if(this.hasInterface(bg,bf)){return true;
}
try{qx.Interface.assertObject(be,bf);
return true;
}catch(H){}
try{qx.Interface.assert(bg,bf,false);
return true;
}catch(br){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bX+this.classname+bW;
},$$registry:qx.Bootstrap.$$registry,__o:qx.core.Variant.select(bO,{"on":{"type":bI,"extend":bL,"implement":bN,"include":bN,"construct":bL,"statics":bN,"properties":bN,"members":bN,"settings":bN,"variants":bN,"events":bN,"defer":bL,"destruct":bL},"default":null}),__p:qx.core.Variant.select(bO,{"on":{"type":bI,"statics":bN,"settings":bN,"variants":bN,"defer":bL},"default":null}),__q:qx.core.Variant.select(bO,{"on":function(name,bh){if(bh.type&&!(bh.type===bJ||bh.type===bH||bh.type===bG)){throw new Error('Invalid type "'+bh.type+'" definition for class "'+name+'"!');
}if(bh.type&&bh.type!==bJ&&!bh.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var bk=bh.type===bJ?this.__p:this.__o;

for(var bj in bh){if(!bk[bj]){throw new Error('The configuration key "'+bj+'" in class "'+name+'" is not allowed!');
}
if(bh[bj]==null){throw new Error('Invalid key "'+bj+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof bh[bj]!==bk[bj]){throw new Error('Invalid type of key "'+bj+'" in class "'+name+'"! The type of the key must be "'+bk[bj]+'"!');
}}var bi=[cb,cc,ce,bP,cd,bV];

for(var i=0,l=bi.length;i<l;i++){var bj=bi[i];

if(bh[bj]!==undefined&&(bh[bj].$$hash!==undefined||!qx.Bootstrap.isObject(bh[bj]))){throw new Error('Invalid key "'+bj+'" in class "'+name+'"! The value needs to be a map!');
}}if(bh.include){if(bh.include instanceof Array){for(var i=0,a=bh.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==bS){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(bh.implement){if(bh.implement instanceof Array){for(var i=0,a=bh.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==bU){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(bh.include){try{qx.Mixin.checkCompatibility(bh.include);
}catch(bl){throw new Error('Error in include definition of class "'+name+'"! '+bl.message);
}}if(bh.settings){for(var bj in bh.settings){if(bj.substr(0,bj.indexOf(bK))!=name.substr(0,name.indexOf(bK))){throw new Error('Forbidden setting "'+bj+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(bh.variants){for(var bj in bh.variants){if(bj.substr(0,bj.indexOf(bK))!=name.substr(0,name.indexOf(bK))){throw new Error('Forbidden variant "'+bj+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__r:qx.core.Variant.select(bO,{"on":function(n){var p=n.superclass;

while(p){if(p.$$classtype!==bH){break;
}var o=p.$$implements;

if(o){for(var i=0;i<o.length;i++){qx.Interface.assert(n,o[i],true);
}}p=p.superclass;
}},"default":function(){}}),__s:function(name,bs,bt,bu,bv,bw,bx){var bA;

if(!bt){bA=bu||{};
qx.Bootstrap.setDisplayNames(bA,name);
}else{bA={};

if(bt){if(!bv){bv=this.__A();
}
if(this.__C(bt,bx)){bA=this.__D(bv,name,bs);
}else{bA=bv;
}if(bs===bG){bA.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bv,name,ci);
}if(bu){qx.Bootstrap.setDisplayNames(bu,name);
var bB;

for(var i=0,a=qx.Bootstrap.getKeys(bu),l=a.length;i<l;i++){bB=a[i];
var by=bu[bB];
bA[bB]=by;
}}}var bz=qx.Bootstrap.createNamespace(name,bA);
bA.name=bA.classname=name;
bA.basename=bz;
bA.$$type=bT;

if(bs){bA.$$classtype=bs;
}if(!bA.hasOwnProperty(ca)){bA.toString=this.genericToString;
}
if(bt){qx.Bootstrap.extendClass(bA,bv,bt,name,bz);
if(bw){bA.$$destructor=bw;
qx.Bootstrap.setDisplayName(bw,name,bY);
}}this.$$registry[name]=bA;
return bA;
},__t:function(q,r,s){if(qx.core.Variant.isSet(bO,bM)){if(typeof r!==bN||r instanceof Array){throw new Error(q.classname+": the events must be defined as map!");
}
for(var t in r){if(typeof r[t]!==bI){throw new Error(q.classname+"/"+t+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(q.$$events&&s!==true){for(var t in r){if(q.$$events[t]!==undefined&&q.$$events[t]!==r[t]){throw new Error(q.classname+"/"+t+": the event value/type cannot be changed from "+q.$$events[t]+" to "+r[t]);
}}}}
if(q.$$events){for(var t in r){q.$$events[t]=r[t];
}}else{q.$$events=r;
}},__u:function(b,c,d){var j;

if(d===undefined){d=false;
}var e=qx.core.property.Simple;
var g=qx.core.property.Multi;
var f=qx.core.property.Group;
var h;

for(var name in c){j=c[name];
if(qx.core.Variant.isSet(bO,bM)){qx.core.property.Debug.validateConfig(b,name,j,d);
}j.name=name;
if(!j.refine){if(b.$$properties===undefined){b.$$properties={};
}b.$$properties[name]=j;
}if(j.event){h={};
h[j.event]=cf;
this.__t(b,h,d);
}if(j.refine){b.prototype[cg+name]=j.init;
}else if(j.group){f.add(b,name,j);
}else if(j.themeable||j.inheritable||qx.core.property.Core.RUNTIME_OVERRIDE){g.add(b,name,j);
}else{e.add(b,name,j);
}}},__v:function(T,U,V,W,X){var Y=T.prototype;
var bb,ba;
qx.Bootstrap.setDisplayNames(U,T.classname+cj);

for(var i=0,a=qx.Bootstrap.getKeys(U),l=a.length;i<l;i++){bb=a[i];
ba=U[bb];

if(qx.core.Variant.isSet(bO,bM)){if(Y[bb]!==undefined&&bb.charAt(0)==bF&&bb.charAt(1)==bF){throw new Error('Overwriting private member "'+bb+'" of Class "'+T.classname+'" is not allowed!');
}
if(V!==true&&Y.hasOwnProperty(bb)){throw new Error('Overwriting member "'+bb+'" of Class "'+T.classname+'" is not allowed!');
}}if(W!==false&&ba instanceof Function&&ba.$$type==null){if(X==true){ba=this.__w(ba,Y[bb]);
}else{if(Y[bb]){ba.base=Y[bb];
}ba.self=T;
}}Y[bb]=ba;
}},__w:function(C,D){if(D){return function(){var bd=C.base;
C.base=D;
var bc=C.apply(this,arguments);
C.base=bd;
return bc;
};
}else{return C;
}},__x:function(bo,bp){if(qx.core.Variant.isSet(bO,bM)){if(!bo||!bp){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(bo,bp)){throw new Error('Interface "'+bp.name+'" is already used by Class "'+bo.classname+'!');
}if(bo.$$classtype!==bH){qx.Interface.assert(bo,bp,true);
}}var bq=qx.Interface.flatten([bp]);

if(bo.$$implements){bo.$$implements.push(bp);
bo.$$flatImplements.push.apply(bo.$$flatImplements,bq);
}else{bo.$$implements=[bp];
bo.$$flatImplements=bq;
}},__y:function(u){var name=u.classname;
var v=this.__D(u,name,u.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(u),l=a.length;i<l;i++){w=a[i];
v[w]=u[w];
}v.prototype=u.prototype;
var y=u.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(y),l=a.length;i<l;i++){w=a[i];
var z=y[w];
if(z&&z.self==u){z.self=v;
}}for(var w in this.$$registry){var x=this.$$registry[w];

if(!x){continue;
}
if(x.base==u){x.base=v;
}
if(x.superclass==u){x.superclass=v;
}
if(x.$$original){if(x.$$original.base==u){x.$$original.base=v;
}
if(x.$$original.superclass==u){x.$$original.superclass=v;
}}}qx.Bootstrap.createNamespace(name,v);
this.$$registry[name]=v;
return v;
},__z:function(cz,cA,cB){if(qx.core.Variant.isSet(bO,bM)){if(!cz||!cA){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(cz,cA)){return;
}var cE=cz.$$original;

if(cA.$$constructor&&!cE){cz=this.__y(cz);
}var cD=qx.Mixin.flatten([cA]);
var cC;

for(var i=0,l=cD.length;i<l;i++){cC=cD[i];
if(cC.$$events){this.__t(cz,cC.$$events,cB);
}if(cC.$$properties){this.__u(cz,cC.$$properties,cB);
}if(cC.$$members){this.__v(cz,cC.$$members,cB,cB,cB);
}}if(cz.$$includes){cz.$$includes.push(cA);
cz.$$flatIncludes.push.apply(cz.$$flatIncludes,cD);
}else{cz.$$includes=[cA];
cz.$$flatIncludes=cD;
}},__A:function(){function bE(){bE.base.apply(this,arguments);
}return bE;
},__B:function(){return function(){};
},__C:function(cv,cw){if(qx.core.Variant.isSet("qx.debug","on")){return true;
}if(cv&&cv.$$includes){var cx=cv.$$flatIncludes;

for(var i=0,l=cx.length;i<l;i++){if(cx[i].$$constructor){return true;
}}}if(cw){var cy=qx.Mixin.flatten(cw);

for(var i=0,l=cy.length;i<l;i++){if(cy[i].$$constructor){return true;
}}}return false;
},__D:function(E,name,F){var G=function(){var P=G;

if(qx.core.Variant.isSet("qx.debug","on")){if(!(this instanceof P)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(F==="abstract"){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(F==="singleton"){if(!P.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}var O=P.$$original.apply(this,arguments);
if(P.$$includes){var N=P.$$flatIncludes;

for(var i=0,l=N.length;i<l;i++){if(N[i].$$constructor){N[i].$$constructor.apply(this,arguments);
}}}
if(qx.core.Variant.isSet("qx.debug","on")){if(this.classname===name){this.$$initialized=true;
}}return O;
};
G.$$original=E;
E.wrapper=G;
return G;
}}});
if(qx.core.Variant.isSet(bO,bM)){qx.core.property.Debug;
}})();
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
(function(){var bB="qx.debug",bA="on",bz="|bubble",by="|capture",bx="|",bw="': ",bv="'",bu="",bt="_",bs="Invalid Target.",cb="Invalid event type.",ca="Invalid event target.",bY=" from the target '",bX="Invalid callback function",bW="unload",bV="Failed to remove event listener for id '",bU="Invalid context for callback.",bT="Invalid capture flag.",bS="Failed to add event listener for type '",bR="UNKNOWN_",bI="capture",bJ="__V",bG="qx.event.Manager",bH="Could not dispatch event '",bE="__W",bF="DOM_",bC="QX_",bD=" to the target '",bK="Failed to remove event listener for type '",bL="Invalid capture falg.",bN="c",bM="Invalid id type.",bP="' on target '",bO="WIN_",bQ="Invalid event object.";
qx.Class.define(bG,{extend:Object,construct:function(k,m){this.__R=k;
this.__S=qx.core.ObjectRegistry.toHashCode(k);
this.__T=m;
if(k.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(k,bW,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(k,bW,arguments.callee);
self.dispose();
}));
}this.__U={};
this.__V={};
this.__W={};
this.__X={};
},statics:{__Y:0,getNextUniqueId:function(){return (this.__Y++)+bu;
}},members:{__T:null,__U:null,__W:null,__ba:null,__V:null,__X:null,__R:null,__S:null,getWindow:function(){return this.__R;
},getWindowId:function(){return this.__S;
},getHandler:function(n){var o=this.__V[n.classname];

if(o){return o;
}return this.__V[n.classname]=new n(this);
},getDispatcher:function(bc){var bd=this.__W[bc.classname];

if(bd){return bd;
}return this.__W[bc.classname]=new bc(this,this.__T);
},getListeners:function(U,V,W){var X=U.$$hash||qx.core.ObjectRegistry.toHashCode(U);
var ba=this.__U[X];

if(!ba){return null;
}var bb=V+(W?by:bz);
var Y=ba[bb];
return Y?Y.concat():null;
},serializeListeners:function(be){var bl=be.$$hash||qx.core.ObjectRegistry.toHashCode(be);
var bn=this.__U[bl];
var bj=[];

if(bn){var bh,bm,bf,bi,bk;

for(var bg in bn){bh=bg.indexOf(bx);
bm=bg.substring(0,bh);
bf=bg.charAt(bh+1)==bN;
bi=bn[bg];

for(var i=0,l=bi.length;i<l;i++){bk=bi[i];
bj.push({self:bk.context,handler:bk.handler,type:bm,capture:bf});
}}}return bj;
},toggleAttachedEvents:function(a,b){var g=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var j=this.__U[g];

if(j){var d,h,c,e;

for(var f in j){d=f.indexOf(bx);
h=f.substring(0,d);
c=f.charCodeAt(d+1)===99;
e=j[f];

if(b){this.__bb(a,h,c);
}else{this.__bc(a,h,c);
}}}},hasListener:function(q,r,s){if(qx.core.Variant.isSet(bB,bA)){if(q==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+q);
}}var t=q.$$hash||qx.core.ObjectRegistry.toHashCode(q);
var v=this.__U[t];

if(!v){return false;
}var w=r+(s?by:bz);
var u=v[w];
return u&&u.length>0;
},importListeners:function(x,y){if(qx.core.Variant.isSet(bB,bA)){if(x==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+x);
}}var E=x.$$hash||qx.core.ObjectRegistry.toHashCode(x);
var F=this.__U[E]={};
var B=qx.event.Manager;

for(var z in y){var C=y[z];
var D=C.type+(C.capture?by:bz);
var A=F[D];

if(!A){A=F[D]=[];
this.__bb(x,C.type,C.capture);
}A.push({handler:C.listener,context:C.self,unique:C.unique||(B.__Y++)+bu});
}},addListener:function(cp,cq,cr,self,cs){if(qx.core.Variant.isSet(bB,bA)){var cw=bS+cq+bv+bD+cp.classname+bw;
qx.core.Assert.assertObject(cp,cw+bs);
qx.core.Assert.assertString(cq,cw+cb);
qx.core.Assert.assertFunction(cr,cw+bX);

if(cs!==undefined){qx.core.Assert.assertBoolean(cs,bT);
}}var cx=cp.$$hash||qx.core.ObjectRegistry.toHashCode(cp);
var cz=this.__U[cx];

if(!cz){cz=this.__U[cx]={};
}var cv=cq+(cs?by:bz);
var cu=cz[cv];

if(!cu){cu=cz[cv]=[];
}if(cu.length===0){this.__bb(cp,cq,cs);
}var cy=(qx.event.Manager.__Y++)+bu;
var ct={handler:cr,context:self,unique:cy};
cu.push(ct);
return cv+bx+cy;
},findHandler:function(cc,cd){var cn=false,cg=false,co=false;
var cm;

if(cc.nodeType===1){cn=true;
cm=bF+cc.tagName.toLowerCase()+bt+cd;
}else if(cc==this.__R){cg=true;
cm=bO+cd;
}else if(cc.classname){co=true;
cm=bC+cc.classname+bt+cd;
}else{cm=bR+cc+bt+cd;
}var ci=this.__X;

if(ci[cm]){return ci[cm];
}var cl=this.__T.getHandlers();
var ch=qx.event.IEventHandler;
var cj,ck,cf,ce;

for(var i=0,l=cl.length;i<l;i++){cj=cl[i];
cf=cj.SUPPORTED_TYPES;

if(cf&&!cf[cd]){continue;
}ce=cj.TARGET_CHECK;

if(ce){if(!cn&&ce===ch.TARGET_DOMNODE){continue;
}else if(!cg&&ce===ch.TARGET_WINDOW){continue;
}else if(!co&&ce===ch.TARGET_OBJECT){continue;
}}ck=this.getHandler(cl[i]);

if(cj.IGNORE_CAN_HANDLE||ck.canHandleEvent(cc,cd)){ci[cm]=ck;
return ck;
}}return null;
},__bb:function(bo,bp,bq){var br=this.findHandler(bo,bp);

if(br){br.registerEvent(bo,bp,bq);
return;
}
if(qx.core.Variant.isSet(bB,bA)){qx.log.Logger.warn(this,"There is no event handler for the event '"+bp+"' on target '"+bo+"'!");
}},removeListener:function(cE,cF,cG,self,cH){if(qx.core.Variant.isSet(bB,bA)){var cL=bK+cF+bv+bY+cE.classname+bw;
qx.core.Assert.assertObject(cE,cL+bs);
qx.core.Assert.assertString(cF,cL+cb);
qx.core.Assert.assertFunction(cG,cL+bX);

if(self!==undefined){qx.core.Assert.assertObject(self,bU);
}
if(cH!==undefined){qx.core.Assert.assertBoolean(cH,bL);
}}var cM=cE.$$hash||qx.core.ObjectRegistry.toHashCode(cE);
var cN=this.__U[cM];

if(!cN){return false;
}var cI=cF+(cH?by:bz);
var cJ=cN[cI];

if(!cJ){return false;
}var cK;

for(var i=0,l=cJ.length;i<l;i++){cK=cJ[i];

if(cK.handler===cG&&cK.context===self){qx.lang.Array.removeAt(cJ,i);

if(cJ.length==0){this.__bc(cE,cF,cH);
}return true;
}}return false;
},removeListenerById:function(cO,cP){if(qx.core.Variant.isSet(bB,bA)){var cV=bV+cP+bv+bY+cO.classname+bw;
qx.core.Assert.assertObject(cO,cV+bs);
qx.core.Assert.assertString(cP,cV+bM);
}var cT=cP.split(bx);
var cY=cT[0];
var cQ=cT[1].charCodeAt(0)==99;
var cX=cT[2];
var cW=cO.$$hash||qx.core.ObjectRegistry.toHashCode(cO);
var da=this.__U[cW];

if(!da){return false;
}var cU=cY+(cQ?by:bz);
var cS=da[cU];

if(!cS){return false;
}var cR;

for(var i=0,l=cS.length;i<l;i++){cR=cS[i];

if(cR.unique===cX){qx.lang.Array.removeAt(cS,i);

if(cS.length==0){this.__bc(cO,cY,cQ);
}return true;
}}return false;
},removeAllListeners:function(N){var R=N.$$hash||qx.core.ObjectRegistry.toHashCode(N);
var T=this.__U[R];

if(!T){return false;
}var P,S,O;

for(var Q in T){if(T[Q].length>0){P=Q.split(bx);
S=P[0];
O=P[1]===bI;
this.__bc(N,S,O);
}}delete this.__U[R];
return true;
},deleteAllListeners:function(p){delete this.__U[p];
},__bc:function(cA,cB,cC){var cD=this.findHandler(cA,cB);

if(cD){cD.unregisterEvent(cA,cB,cC);
return;
}
if(qx.core.Variant.isSet(bB,bA)){qx.log.Logger.warn(this,"There is no event handler for the event '"+cB+"' on target '"+cA+"'!");
}},dispatchEvent:function(G,event){if(qx.core.Variant.isSet(bB,bA)){var L=bH+event+bP+G.classname+bw;
qx.core.Assert.assertNotUndefined(G,L+ca);
qx.core.Assert.assertNotNull(G,L+ca);
qx.core.Assert.assertInstance(event,qx.event.type.Event,L+bQ);
}var M=event.getType();

if(!event.getBubbles()&&!this.hasListener(G,M)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(G);
}var K=this.__T.getDispatchers();
var J;
var I=false;

for(var i=0,l=K.length;i<l;i++){J=this.getDispatcher(K[i]);
if(J.canDispatchEvent(G,event,M)){J.dispatchEvent(G,event,M);
I=true;
break;
}}
if(!I){if(qx.core.Variant.isSet(bB,bA)){qx.log.Logger.error(this,"No dispatcher can handle event of type "+M+" on "+G);
}return true;
}var H=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !H;
},dispose:function(){this.__T.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,bJ);
qx.util.DisposeUtil.disposeMap(this,bE);
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
(function(){var bf="qx.debug",be="on",bd="The second parameter must be an array.",bc="mshtml",bb="The first parameter must be an array.",ba="Parameter must be an array.",Y="qx.client",X="[object Array]",W="qx.lang.Array",V="qx",T="number",U="string";
qx.Class.define(W,{statics:{toArray:function(v,w){return this.cast(v,Array,w);
},cast:function(bl,bm,bn){if(bl.constructor===bm){return bl;
}var bo=new bm;
if(qx.core.Variant.isSet(Y,bc)){if(bl.item){for(var i=bn||0,l=bl.length;i<l;i++){bo.push(bl[i]);
}return bo;
}}if(Object.prototype.toString.call(bl)===X&&bn==null){bo.push.apply(bo,bl);
}else{bo.push.apply(bo,Array.prototype.slice.call(bl,bn||0));
}return bo;
},fromArguments:function(P,Q){return Array.prototype.slice.call(P,Q||0);
},fromCollection:function(e){if(qx.core.Variant.isSet(Y,bc)){if(e.item){var f=[];

for(var i=0,l=e.length;i<l;i++){f[i]=e[i];
}return f;
}}return Array.prototype.slice.call(e,0);
},clone:function(bs){return bs.concat();
},insertAt:function(bi,bj,i){bi.splice(i,0,bj);
return bi;
},insertBefore:function(s,t,u){var i=s.indexOf(u);

if(i==-1){s.push(t);
}else{s.splice(i,0,t);
}return s;
},insertAfter:function(g,h,j){var i=g.indexOf(j);

if(i==-1||i==(g.length-1)){g.push(h);
}else{g.splice(i+1,0,h);
}return g;
},removeAt:function(d,i){return d.splice(i,1)[0];
},removeAll:function(c){c.length=0;
return this;
},append:function(y,z){if(qx.core.Variant.isSet(bf,be)){qx.core.Assert&&qx.core.Assert.assertArray(y,bb);
qx.core.Assert&&qx.core.Assert.assertArray(z,bd);
}Array.prototype.push.apply(y,z);
return y;
},exclude:function(k,m){if(qx.core.Variant.isSet(bf,be)){qx.core.Assert&&qx.core.Assert.assertArray(k,bb);
qx.core.Assert&&qx.core.Assert.assertArray(m,bd);
}
for(var i=0,o=m.length,n;i<o;i++){n=k.indexOf(m[i]);

if(n!=-1){k.splice(n,1);
}}return k;
},remove:function(bg,bh){var i=bg.indexOf(bh);

if(i!=-1){bg.splice(i,1);
return bh;
}},contains:function(a,b){return a.indexOf(b)!==-1;
},equals:function(R,S){var length=R.length;

if(length!==S.length){return false;
}
for(var i=0;i<length;i++){if(R[i]!==S[i]){return false;
}}return true;
},sum:function(N){var O=0;

for(var i=0,l=N.length;i<l;i++){O+=N[i];
}return O;
},max:function(bp){if(qx.core.Variant.isSet(bf,be)){qx.core.Assert&&qx.core.Assert.assertArray(bp,ba);
}var i,br=bp.length,bq=bp[0];

for(i=1;i<br;i++){if(bp[i]>bq){bq=bp[i];
}}return bq===undefined?null:bq;
},min:function(p){if(qx.core.Variant.isSet(bf,be)){qx.core.Assert&&qx.core.Assert.assertArray(p,ba);
}var i,r=p.length,q=p[0];

for(i=1;i<r;i++){if(p[i]<q){q=p[i];
}}return q===undefined?null:q;
},unique:function(A){var K=[],C={},F={},H={};
var G,B=0;
var L=V+qx.lang.Date.now();
var D=false,J=false,M=false;
for(var i=0,I=A.length;i<I;i++){G=A[i];
if(G===null){if(!D){D=true;
K.push(G);
}}else if(G===undefined){}else if(G===false){if(!J){J=true;
K.push(G);
}}else if(G===true){if(!M){M=true;
K.push(G);
}}else if(typeof G===U){if(!C[G]){C[G]=1;
K.push(G);
}}else if(typeof G===T){if(!F[G]){F[G]=1;
K.push(G);
}}else{E=G[L];

if(E==null){E=G[L]=B++;
}
if(!H[E]){H[E]=G;
K.push(G);
}}}for(var E in H){try{delete H[E][L];
}catch(x){try{H[E][L]=null;
}catch(bk){throw new Error("Cannot clean-up map entry doneObjects["+E+"]["+L+"]");
}}}return K;
}}});
})();
(function(){var m="()",l="qx.debug",k=".",j=".prototype.",i="on",h="Invalid parameter 'func'.",g='anonymous()',f="Trying to call a bound function with a disposed object as context: ",e=" :: ",d="qx.lang.Function",c=".constructor()";
qx.Class.define(d,{statics:{getCaller:function(F){return F.caller?F.caller.callee:F.callee.caller;
},getName:function(x){if(x.displayName){return x.displayName;
}
if(x.$$original||x.wrapper||x.classname){return x.classname+c;
}
if(x.$$mixin){for(var z in x.$$mixin.$$members){if(x.$$mixin.$$members[z]==x){return x.$$mixin.name+j+z+m;
}}for(var z in x.$$mixin){if(x.$$mixin[z]==x){return x.$$mixin.name+k+z+m;
}}}
if(x.self){var A=x.self.constructor;

if(A){for(var z in A.prototype){if(A.prototype[z]==x){return A.classname+j+z+m;
}}for(var z in A){if(A[z]==x){return A.classname+k+z+m;
}}}}var y=x.toString().match(/function\s*(\w*)\s*\(.*/);

if(y&&y.length>=1&&y[1]){return y[1]+m;
}return g;
},globalEval:function(r){if(window.execScript){return window.execScript(r);
}else{return eval.call(window,r);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(n,o){if(qx.core.Variant.isSet(l,i)){qx.core.Assert&&qx.core.Assert.assertFunction(n,h);
}if(!o){return n;
}if(!(o.self||o.args||o.delay!=null||o.periodical!=null||o.attempt)){return n;
}return function(event){if(qx.core.Variant.isSet(l,i)){if(o.self instanceof qx.core.Object){qx.core.Assert&&qx.core.Assert.assertFalse(o.self.isDisposed(),f+o.self.toString()+e+qx.lang.Function.getName(n));
}}var v=qx.lang.Array.fromArguments(arguments);
if(o.args){v=o.args.concat(v);
}
if(o.delay||o.periodical){var u=qx.event.GlobalError.observeMethod(function(){return n.apply(o.self||this,v);
});

if(o.delay){return window.setTimeout(u,o.delay);
}
if(o.periodical){return window.setInterval(u,o.periodical);
}}else if(o.attempt){var w=false;

try{w=n.apply(o.self||this,v);
}catch(B){}return w;
}else{return n.apply(o.self||this,v);
}};
},bind:function(p,self,q){return this.create(p,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(s,t){return this.create(s,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(G,self,H){if(arguments.length<3){return function(event){return G.call(self||this,event||window.event);
};
}else{var I=qx.lang.Array.fromArguments(arguments,2);
return function(event){var M=[event||window.event];
M.push.apply(M,I);
G.apply(self||this,M);
};
}},attempt:function(a,self,b){return this.create(a,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(C,D,self,E){return this.create(C,{delay:D,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(J,K,self,L){return this.create(J,{periodical:K,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var p="qx.debug",o="on",n="Invalid event target.",m="Invalid event dispatcher!",l="': ",k="Invalid event handler.",j="' on target '",i="Could not fire event '",h="undefined",g="qx.event.Registration";
qx.Class.define(g,{statics:{__bd:{},getManager:function(Y){if(Y==null){if(qx.core.Variant.isSet(p,o)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}Y=window;
}else if(Y.nodeType){Y=qx.dom.Node.getWindow(Y);
}else if(!qx.dom.Node.isWindow(Y)){Y=window;
}var bb=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var ba=this.__bd[bb];

if(!ba){ba=new qx.event.Manager(Y,this);
this.__bd[bb]=ba;
}return ba;
},removeManager:function(y){var z=y.getWindowId();
delete this.__bd[z];
},addListener:function(c,d,e,self,f){return this.getManager(c).addListener(c,d,e,self,f);
},removeListener:function(H,I,J,self,K){return this.getManager(H).removeListener(H,I,J,self,K);
},removeListenerById:function(O,P){return this.getManager(O).removeListenerById(O,P);
},removeAllListeners:function(q){return this.getManager(q).removeAllListeners(q);
},deleteAllListeners:function(Q){var R=Q.$$hash;

if(R){this.getManager(Q).deleteAllListeners(R);
}},hasListener:function(L,M,N){return this.getManager(L).hasListener(L,M,N);
},serializeListeners:function(E){return this.getManager(E).serializeListeners(E);
},createEvent:function(A,B,C){if(qx.core.Variant.isSet(p,o)){if(arguments.length>1&&B===undefined){throw new Error("Create event of type "+A+" with undefined class. Please use null to explicit fallback to default event type!");
}}if(B==null){B=qx.event.type.Event;
}var D=qx.event.Pool.getInstance().getObject(B);
C?D.init.apply(D,C):D.init();
if(A){D.setType(A);
}return D;
},dispatchEvent:function(bc,event){return this.getManager(bc).dispatchEvent(bc,event);
},fireEvent:function(r,s,t,u){if(qx.core.Variant.isSet(p,o)){if(arguments.length>2&&t===undefined&&u!==undefined){throw new Error("Create event of type "+s+" with undefined class. Please use null to explicit fallback to default event type!");
}var v=i+s+j+(r?r.classname:h)+l;
qx.core.Assert.assertNotUndefined(r,v+n);
qx.core.Assert.assertNotNull(r,v+n);
}var w=this.createEvent(s,t||null,u);
return this.getManager(r).dispatchEvent(r,w);
},fireNonBubblingEvent:function(S,T,U,V){if(qx.core.Variant.isSet(p,o)){if(arguments.length>2&&U===undefined&&V!==undefined){throw new Error("Create event of type "+T+" with undefined class. Please use null to explicit fallback to default event type!");
}}var W=this.getManager(S);

if(!W.hasListener(S,T,false)){return true;
}var X=this.createEvent(T,U||null,V);
return W.dispatchEvent(S,X);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__be:[],addHandler:function(x){if(qx.core.Variant.isSet(p,o)){qx.core.Assert.assertInterface(x,qx.event.IEventHandler,k);
}this.__be.push(x);
this.__be.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__be;
},__bf:[],addDispatcher:function(F,G){if(qx.core.Variant.isSet(p,o)){qx.core.Assert.assertInterface(F,qx.event.IEventDispatcher,m);
}this.__bf.push(F);
this.__bf.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bf;
}}});
})();
(function(){var a="qx.core.property.Core";
qx.Bootstrap.define(a,{statics:{RUNTIME_OVERRIDE:false,ID:0}});
})();
(function(){var m="on",l="qx.debug",k="get",j="set",i="Boolean",h="qx.core.property.Simple",g="fireDataEvent",f="$$data",e="is",d="init",a="toggle",c="$$init-",b="reset";
qx.Bootstrap.define(h,{statics:{__E:0,__F:{},add:function(n,name,o){var t;
var v=this;
var q=g;
var B=f;
var w,C,z,s;
v.__E++;
w=v.__F;
C=w[name];

if(!C){C=w[name]=qx.core.property.Core.ID;
qx.core.property.Core.ID++;
}z=n.prototype;

if(o.init!==t){s=c+name;
z[s]=o.init;
}var r=qx.Bootstrap,x=(r.$$firstUp[name]||r.firstUp(name));
var p=o.nullable,u=o.event,A=o.apply,y=o.validate;
z[k+x]=function(){var N,L,M;
N=this;

if(qx.core.Variant.isSet(l,m)){qx.core.property.Debug.checkGetter(N,o,arguments);
}L=N[B];

if(L){M=L[C];
}
if(M===t){if(s){return N[s];
}
if(qx.core.Variant.isSet(l,m)){if(!p){N.error("Missing value for: "+name+" (during get())");
}}M=null;
}return M;
};
if(s){z[d+x]=function(){var P=this,O=P[B];
if(!O||O[C]===t){if(A){P[A](P[s],t,name);
}if(u){P[q](u,P[s],t);
}}};
}z[j+x]=function(H){var K,J,I;
K=this;

if(qx.core.Variant.isSet(l,m)){qx.core.property.Debug.checkSetter(K,o,arguments);
}
if(y){qx.core.Type.check(H,y,K,qx.core.ValidationError);
}J=K[B];

if(!J){J=K[B]={};
}else{I=J[C];
}
if(H!==I){if(I===t&&s){I=K[s];
}J[C]=H;

if(A){K[A](H,I,name);
}
if(u){K[q](u,H,I);
}}return H;
};
z[b+x]=function(){var G,E,D,F;
G=this;

if(qx.core.Variant.isSet(l,m)){qx.core.property.Debug.checkResetter(G,o,arguments);
}E=G[B];

if(!E){return;
}D=E[C];
F=t;

if(D!==F){E[C]=F;

if(s){F=G[s];
}else if(qx.core.Variant.isSet(l,m)){if(!p){G.error("Missing value for: "+name+" (during reset())");
}}
if(A){G[A](F,D,name);
}
if(u){G[q](u,F,D);
}}};
if(o.check===i){z[a+x]=function(){this[j+x](!this[k+x]());
};
z[e+x]=z[k+x];
}}}});
})();
(function(){var h="on",g="qx.debug",f="$$hash",e="",d="qx.core.ObjectRegistry";
qx.Class.define(d,{statics:{inShutDown:false,__G:{},__H:0,__I:[],register:function(o){var r=this.__G;

if(!r){return;
}var q=o.$$hash;

if(q==null){var p=this.__I;

if(p.length>0){q=p.pop();
}else{q=(this.__H++)+e;
}o.$$hash=q;
}
if(qx.core.Variant.isSet(g,h)){if(!o.dispose){throw new Error("Invalid object: "+o);
}}r[q]=o;
},unregister:function(s){var t=s.$$hash;

if(t==null){return;
}var u=this.__G;

if(u&&u[t]){delete u[t];
this.__I.push(t);
}try{delete s.$$hash;
}catch(c){if(s.removeAttribute){s.removeAttribute(f);
}}},toHashCode:function(x){if(qx.core.Variant.isSet(g,h)){if(x==null){throw new Error("Invalid object: "+x);
}}var z=x.$$hash;

if(z!=null){return z;
}var y=this.__I;

if(y.length>0){z=y.pop();
}else{z=(this.__H++)+e;
}return x.$$hash=z;
},clearHashCode:function(A){if(qx.core.Variant.isSet(g,h)){if(A==null){throw new Error("Invalid object: "+A);
}}var B=A.$$hash;

if(B!=null){this.__I.push(B);
try{delete A.$$hash;
}catch(C){if(A.removeAttribute){A.removeAttribute(f);
}}}},fromHashCode:function(w){return this.__G[w]||null;
},shutdown:function(){this.inShutDown=true;
var k=this.__G;
var n=[];

for(var m in k){n.push(m);
}n.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var j,i=0,l=n.length;

while(true){try{for(;i<l;i++){m=n[i];
j=k[m];

if(j&&j.dispose){j.dispose();
}}}catch(v){qx.Bootstrap.error(this,"Could not dispose object "+j.toString()+": "+v);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__G;
},getRegistry:function(){return this.__G;
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
(function(){var cr="",cq="!",cp="'!",co="'",cn="Expected '",cm="' (rgb(",cl=",",ck=")), but found value '",cj="Event (",ci="Expected value to be the CSS color '",dz="' but found ",dy="The value '",dx=" != ",dw="qx.core.Object",dv="Expected value to be an array but found ",du=") was fired.",dt="Expected value to be an integer >= 0 but found ",ds="' to be not equal with '",dr="' to '",dq="qx.ui.core.Widget",cy="Called assertTrue with '",cz="Expected value to be a map but found ",cw="The function did not raise an exception!",cx="Expected value to be undefined but found ",cu="Expected value to be a DOM element but found  '",cv="Expected value to be a regular expression but found ",cs="' to implement the interface '",ct="Expected value to be null but found ",cG="Invalid argument 'type'",cH="Called assert with 'false'",cT="Assertion error! ",cP="Expected value to be a string but found ",dc="null",cW="' but found '",dl="' must must be a key of the map '",dh="The String '",cL="Expected value not to be undefined but found ",dp="qx.util.ColorUtil",dn=": ",dm="The raised exception does not have the expected type! ",cK=") not fired.",cN="qx.core.Assert",cO="Expected value to be typeof object but found ",cR="' (identical) but found '",cU="' must have any of the values defined in the array '",cX="Expected value to be a number but found ",de="Called assertFalse with '",dj="]",cA="Expected value to be a qooxdoo object but found ",cB="' arguments.",cM="Expected value not to be null but found ",db="Array[",da="' does not match the regular expression '",cY="' to be not identical with '",dg="' arguments but found '",df="', which cannot be converted to a CSS color!",cV="Expected object '",dd="qx.core.AssertionError",cf="Expected value to be a boolean but found ",di="))!",cC="Expected value to be a qooxdoo widget but found ",cD="Expected value '%1' to be in the range '%2'..'%3'!",cQ="Expected value to be typeof '",cg="Expected value to be typeof function but found ",ch="Expected value to be an integer but found ",cJ="Called fail().",cE="The parameter 're' must be a string or a regular expression.",cF="Expected value to be a number >= 0 but found ",cI="Expected value to be instanceof '",cS="Wrong number of arguments given. Expected '",dk="object";
qx.Class.define(cN,{statics:{__qe:true,__qf:function(C,D){var E=cr;

for(var i=1,l=arguments.length;i<l;i++){E=E+this.__qg(arguments[i]);
}var G=cT+C+dn+E;

if(this.__qe){qx.Bootstrap.error(G);
}
if(qx.Class.isDefined(dd)){var F=new qx.core.AssertionError(C,E);

if(this.__qe){qx.Bootstrap.error("Stack trace: \n"+F.getStackTrace());
}throw F;
}else{throw new Error(G);
}},__qg:function(bw){var bx;

if(bw===null){bx=dc;
}else if(qx.lang.Type.isArray(bw)&&bw.length>10){bx=db+bw.length+dj;
}else if((bw instanceof Object)&&(bw.toString==null)){bx=qx.lang.Json.stringify(bw,null,2);
}else{try{bx=bw.toString();
}catch(e){bx=cr;
}}return bx;
},assert:function(d,f){d==true||this.__qf(f||cr,cH);
},fail:function(dV){this.__qf(dV||cr,cJ);
},assertTrue:function(dY,ea){(dY===true)||this.__qf(ea||cr,cy,dY,co);
},assertFalse:function(bc,bd){(bc===false)||this.__qf(bd||cr,de,bc,co);
},assertEquals:function(Q,R,S){Q==R||this.__qf(S||cr,cn,Q,cW,R,cp);
},assertNotEquals:function(k,m,n){k!=m||this.__qf(n||cr,cn,k,ds,m,cp);
},assertIdentical:function(u,v,w){u===v||this.__qf(w||cr,cn,u,cR,v,cp);
},assertNotIdentical:function(be,bf,bg){be!==bf||this.__qf(bg||cr,cn,be,cY,bf,cp);
},assertNotUndefined:function(bP,bQ){bP!==undefined||this.__qf(bQ||cr,cL,bP,cq);
},assertUndefined:function(bu,bv){bu===undefined||this.__qf(bv||cr,cx,bu,cq);
},assertNotNull:function(cb,cc){cb!==null||this.__qf(cc||cr,cM,cb,cq);
},assertNull:function(bR,bS){bR===null||this.__qf(bS||cr,ct,bR,cq);
},assertJsonEquals:function(a,b,c){this.assertEquals(qx.lang.Json.stringify(a),qx.lang.Json.stringify(b),c);
},assertMatch:function(dS,dT,dU){this.assertString(dS);
this.assert(qx.lang.Type.isRegExp(dT)||qx.lang.Type.isString(dT),cE);
dS.search(dT)>=0||this.__qf(dU||cr,dh,dS,da,dT.toString(),cp);
},assertArgumentsCount:function(bH,bI,bJ,bK){var bL=bH.length;
(bL>=bI&&bL<=bJ)||this.__qf(bK||cr,cS,bI,dr,bJ,dg,arguments.length,cB);
},assertEventFired:function(by,event,bz,bA,bB){var bD=false;
var bC=function(e){if(bA){bA.call(by,e);
}bD=true;
};
var bE;

try{bE=by.addListener(event,bC,by);
bz.call();
}catch(H){throw H;
}finally{try{by.removeListenerById(bE);
}catch(o){}}bD===true||this.__qf(bB||cr,cj,event,cK);
},assertEventNotFired:function(I,event,J,K){var M=false;
var L=function(e){M=true;
};
var N=I.addListener(event,L,I);
J.call();
M===false||this.__qf(K||cr,cj,event,du);
I.removeListenerById(N);
},assertException:function(p,q,r,s){var q=q||Error;
var t;

try{this.__qe=false;
p();
}catch(z){t=z;
}finally{this.__qe=true;
}
if(t==null){this.__qf(s||cr,cw);
}t instanceof q||this.__qf(s||cr,dm,q,dx,t);

if(r){this.assertMatch(t.toString(),r,s);
}},assertInArray:function(bM,bN,bO){bN.indexOf(bM)!==-1||this.__qf(bO||cr,dy,bM,cU,bN,co);
},assertArrayEquals:function(Y,ba,bb){this.assertArray(Y,bb);
this.assertArray(ba,bb);
this.assertEquals(Y.length,ba.length,bb);

for(var i=0;i<Y.length;i++){this.assertIdentical(Y[i],ba[i],bb);
}},assertKeyInMap:function(g,h,j){h[g]!==undefined||this.__qf(j||cr,dy,g,dl,h,co);
},assertFunction:function(T,U){qx.lang.Type.isFunction(T)||this.__qf(U||cr,cg,T,cq);
},assertString:function(bj,bk){qx.lang.Type.isString(bj)||this.__qf(bk||cr,cP,bj,cq);
},assertBoolean:function(A,B){qx.lang.Type.isBoolean(A)||this.__qf(B||cr,cf,A,cq);
},assertNumber:function(bF,bG){(qx.lang.Type.isNumber(bF)&&isFinite(bF))||this.__qf(bG||cr,cX,bF,cq);
},assertPositiveNumber:function(dH,dI){(qx.lang.Type.isNumber(dH)&&isFinite(dH)&&dH>=0)||this.__qf(dI||cr,cF,dH,cq);
},assertInteger:function(dN,dO){(qx.lang.Type.isNumber(dN)&&isFinite(dN)&&dN%1===0)||this.__qf(dO||cr,ch,dN,cq);
},assertPositiveInteger:function(dP,dQ){var dR=(qx.lang.Type.isNumber(dP)&&isFinite(dP)&&dP%1===0&&dP>=0);
dR||this.__qf(dQ||cr,dt,dP,cq);
},assertInRange:function(bq,br,bs,bt){(bq>=br&&bq<=bs)||this.__qf(bt||cr,qx.lang.String.format(cD,[bq,br,bs]));
},assertObject:function(dK,dL){var dM=dK!==null&&(qx.lang.Type.isObject(dK)||typeof dK===dk);
dM||this.__qf(dL||cr,cO,(dK),cq);
},assertArray:function(cd,ce){qx.lang.Type.isArray(cd)||this.__qf(ce||cr,dv,cd,cq);
},assertMap:function(bl,bm){qx.lang.Type.isObject(bl)||this.__qf(bm||cr,cz,bl,cq);
},assertRegExp:function(bh,bi){qx.lang.Type.isRegExp(bh)||this.__qf(bi||cr,cv,bh,cq);
},assertType:function(bX,bY,ca){this.assertString(bY,cG);
typeof (bX)===bY||this.__qf(ca||cr,cQ,bY,dz,bX,cq);
},assertInstance:function(bT,bU,bV){var bW=bU.classname||bU+cr;
bT instanceof bU||this.__qf(bV||cr,cI,bW,dz,bT,cq);
},assertInterface:function(bn,bo,bp){qx.Class.implementsInterface(bn,bo)||this.__qf(bp||cr,cV,bn,cs,bo,cp);
},assertCssColor:function(dA,dB,dC){var dD=qx.Class.getByName(dp);

if(!dD){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dF=dD.stringToRgb(dA);

try{var dE=dD.stringToRgb(dB);
}catch(dJ){this.__qf(dC||cr,ci,dA,cm,dF.join(cl),ck,dB,df);
}var dG=dF[0]==dE[0]&&dF[1]==dE[1]&&dF[2]==dE[2];
dG||this.__qf(dC||cr,ci,dF,cm,dF.join(cl),ck,dB,cm,dE.join(cl),di);
},assertElement:function(x,y){!!(x&&x.nodeType===1)||this.__qf(y||cr,cu,x,cp);
},assertQxObject:function(dW,dX){this.__qh(dW,dw)||this.__qf(dX||cr,cA,dW,cq);
},assertQxWidget:function(O,P){this.__qh(O,dq)||this.__qf(P||cr,cC,O,cq);
},__qh:function(V,W){if(!V){return false;
}var X=V.constructor;

while(X){if(X.classname===W){return true;
}X=X.superclass;
}return false;
}}});
})();
(function(){var br="qx.core.MAssert";
qx.Mixin.define(br,{members:{assert:function(bw,bx){qx.core.Assert.assert(bw,bx);
},fail:function(S){qx.core.Assert.fail(S);
},assertTrue:function(k,l){qx.core.Assert.assertTrue(k,l);
},assertFalse:function(bQ,bR){qx.core.Assert.assertFalse(bQ,bR);
},assertEquals:function(r,s,t){qx.core.Assert.assertEquals(r,s,t);
},assertNotEquals:function(bi,bj,bk){qx.core.Assert.assertNotEquals(bi,bj,bk);
},assertIdentical:function(T,U,V){qx.core.Assert.assertIdentical(T,U,V);
},assertNotIdentical:function(N,O,P){qx.core.Assert.assertNotIdentical(N,O,P);
},assertNotUndefined:function(d,e){qx.core.Assert.assertNotUndefined(d,e);
},assertUndefined:function(m,n){qx.core.Assert.assertUndefined(m,n);
},assertNotNull:function(be,bf){qx.core.Assert.assertNotNull(be,bf);
},assertNull:function(Q,R){qx.core.Assert.assertNull(Q,R);
},assertJsonEquals:function(o,p,q){qx.core.Assert.assertJsonEquals(o,p,q);
},assertMatch:function(C,D,E){qx.core.Assert.assertMatch(C,D,E);
},assertArgumentsCount:function(W,X,Y,ba){qx.core.Assert.assertArgumentsCount(W,X,Y,ba);
},assertEventFired:function(bn,event,bo,bp,bq){qx.core.Assert.assertEventFired(bn,event,bo,bp,bq);
},assertEventNotFired:function(bW,event,bX,bY){qx.core.Assert.assertEventNotFired(bW,event,bX,bY);
},assertException:function(H,I,J,K){qx.core.Assert.assertException(H,I,J,K);
},assertInArray:function(bL,bM,bN){qx.core.Assert.assertInArray(bL,bM,bN);
},assertArrayEquals:function(bb,bc,bd){qx.core.Assert.assertArrayEquals(bb,bc,bd);
},assertKeyInMap:function(z,A,B){qx.core.Assert.assertKeyInMap(z,A,B);
},assertFunction:function(bu,bv){qx.core.Assert.assertFunction(bu,bv);
},assertString:function(bS,bT){qx.core.Assert.assertString(bS,bT);
},assertBoolean:function(f,g){qx.core.Assert.assertBoolean(f,g);
},assertNumber:function(bH,bI){qx.core.Assert.assertNumber(bH,bI);
},assertPositiveNumber:function(L,M){qx.core.Assert.assertPositiveNumber(L,M);
},assertInteger:function(bO,bP){qx.core.Assert.assertInteger(bO,bP);
},assertPositiveInteger:function(bs,bt){qx.core.Assert.assertPositiveInteger(bs,bt);
},assertInRange:function(bA,bB,bC,bD){qx.core.Assert.assertInRange(bA,bB,bC,bD);
},assertObject:function(by,bz){qx.core.Assert.assertObject(by,bz);
},assertArray:function(x,y){qx.core.Assert.assertArray(x,y);
},assertMap:function(F,G){qx.core.Assert.assertMap(F,G);
},assertRegExp:function(bl,bm){qx.core.Assert.assertRegExp(bl,bm);
},assertType:function(h,i,j){qx.core.Assert.assertType(h,i,j);
},assertInstance:function(u,v,w){qx.core.Assert.assertInstance(u,v,w);
},assertInterface:function(bE,bF,bG){qx.core.Assert.assertInterface(bE,bF,bG);
},assertCssColor:function(a,b,c){qx.core.Assert.assertCssColor(a,b,c);
},assertElement:function(bJ,bK){qx.core.Assert.assertElement(bJ,bK);
},assertQxObject:function(bU,bV){qx.core.Assert.assertQxObject(bU,bV);
},assertQxWidget:function(bg,bh){qx.core.Assert.assertQxWidget(bg,bh);
}}});
})();
(function(){var w="qx.debug",v="on",u="qx.disposerDebugging",t="set",s="qx.core.Object",r="]",q="get",p="[",o="object",n="reset",k="string",m="Object";
qx.Class.define(s,{extend:Object,construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:m},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+p+this.$$hash+r;
},base:function(x,y){if(qx.core.Variant.isSet(w,v)){if(!qx.Bootstrap.isFunction(x.callee.base)){throw new Error("Cannot call super class. Method is not derived: "+x.callee.displayName);
}}
if(arguments.length===1){return x.callee.base.call(this);
}else{return x.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bc){return bc.callee.self;
},set:function(bh,bi){var bj=qx.Bootstrap;
var bk;
var self=this;

if(typeof bh===k){bk=t+(bj.$$firstUp[bh]||bj.firstUp(bh));

if(qx.core.Variant.isSet(w,v)){if(!self[bk]){throw new Error(this.toString()+" Could not find generic setter for: "+bh);
}}return self[bk](bi);
}else{for(var bl in bh){bk=t+(bj.$$firstUp[bl]||bj.firstUp(bl));

if(qx.core.Variant.isSet(w,v)){if(!self[bk]){throw new Error(this.toString()+" Could not find generic setter for: "+bl);
}}self[bk](bh[bl]);
}return self;
}},reset:function(be){var bf=qx.Bootstrap;
var bg=n+(bf.$$firstUp[be]||bf.firstUp(be));

if(qx.core.Variant.isSet(w,v)){if(!this[bg]){throw new Error(this.toString()+" Could not find generic resetter for: "+be);
}}return this[bg]();
},get:function(N){var O=qx.Bootstrap;
var P=q+(O.$$firstUp[N]||qx.Bootstrap.firstUp(N));

if(qx.core.Variant.isSet(w,v)){if(!this[P]){throw new Error(this.toString()+" Could not find generic getter for: "+N);
}}return this[P]();
},__bg:qx.event.Registration,addListener:function(z,A,self,B){if(!this.$$disposed){return this.__bg.addListener(this,z,A,self,B);
}return null;
},addListenerOnce:function(bn,bo,self,bp){var bq=function(e){bo.call(self||this,e);
this.removeListener(bn,bq,this,bp);
};
return this.addListener(bn,bq,this,bp);
},removeListener:function(g,h,self,j){if(!this.$$disposed){return this.__bg.removeListener(this,g,h,self,j);
}return false;
},removeListenerById:function(V){if(!this.$$disposed){return this.__bg.removeListenerById(this,V);
}return false;
},hasListener:function(L,M){return this.__bg.hasListener(this,L,M);
},dispatchEvent:function(bm){if(!this.$$disposed){return this.__bg.dispatchEvent(this,bm);
}return true;
},fireEvent:function(I,J,K){if(!this.$$disposed){return this.__bg.fireEvent(this,I,J,K);
}return true;
},fireNonBubblingEvent:function(b,c,d){if(!this.$$disposed){return this.__bg.fireNonBubblingEvent(this,b,c,d);
}return true;
},fireDataEvent:function(X,Y,ba,bb){if(!this.$$disposed){if(ba===undefined){ba=null;
}return this.__bg.fireNonBubblingEvent(this,X,qx.event.type.Data,[Y,ba,!!bb]);
}return true;
},__bh:null,setUserData:function(bs,bt){if(!this.__bh){this.__bh={};
}this.__bh[bs]=bt;
},getUserData:function(S){var T=this.__bh&&this.__bh[S];
return T===undefined?null:T;
},debug:function(G){qx.log.Logger.debug(this,G);
},info:function(U){qx.log.Logger.info(this,U);
},warn:function(a){qx.log.Logger.warn(this,a);
},error:function(bd){qx.log.Logger.error(this,bd);
},trace:function(){qx.log.Logger.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
if(qx.core.Variant.isSet(w,v)){if(qx.core.Setting.get(u)){qx.Bootstrap.debug(this,"Disposing "+this);
}}var E=this.constructor;
var C;

while(E.superclass){if(E.$$destructor){E.$$destructor.call(this);
}if(E.$$includes){C=E.$$flatIncludes;

for(var i=0,l=C.length;i<l;i++){if(C[i].$$destructor){C[i].$$destructor.call(this);
}}}E=E.superclass;
}if(this.$$data){this.$$data=null;
}if(qx.core.Variant.isSet(w,v)){if(qx.core.Setting.get(u)){var F,D;

for(F in this){if(this.hasOwnProperty(F)){D=this[F];

if(D!=null&&typeof D==o){qx.Bootstrap.warn(this,"Missing destruct definition for '"+F+"' in "+this.classname+"["+this.toHashCode()+"]: "+D);
this[F]=null;
}}}}}},_disposeObjects:function(br){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(H){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(W){qx.util.DisposeUtil.disposeArray(this,W);
},_disposeMap:function(f){qx.util.DisposeUtil.disposeMap(this,f);
}},settings:{"qx.disposerDebugging":false},defer:function(Q,R){if(qx.core.Variant.isSet(w,v)){qx.Class.include(Q,qx.core.MAssert);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
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
(function(){var j="on",h="qx.debug",g="qx.event.dispatch.Direct";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(k){this._manager=k;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(m,event,n){return !event.getBubbles();
},dispatchEvent:function(a,event,b){if(qx.core.Variant.isSet(h,j)){if(a instanceof qx.core.Object){var e=qx.Class.getEventType(a.constructor,b);
var c=qx.Class.getByName(e);

if(!c){this.error("The event type '"+b+"' declared in the class '"+a.constructor+" is not an available class': "+e);
}else if(!(event instanceof c)){this.error("Expected event type to be instanceof '"+e+"' but found '"+event.classname+"'");
}}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
var f=this._manager.getListeners(a,b,false);

if(f){for(var i=0,l=f.length;i<l;i++){var d=f[i].context||a;
f[i].handler.call(d,event);
}}}},defer:function(o){qx.event.Registration.addDispatcher(o);
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
(function(){var g="demobrowser.Application",f="viewer",e="qx.debug",d="demobrowser/css/sourceview.css",c="script/demodata.json",b="on",a="demobrowser/css/style.css";
qx.Class.define(g,{extend:qx.application.Standalone,construct:function(){qx.application.Standalone.call(this);
qx.bom.Stylesheet.includeFile(a);
qx.bom.Stylesheet.includeFile(d);
},members:{main:function(){qx.application.Standalone.prototype.main.call(this);
if(qx.core.Variant.isSet(e,b)){qx.log.appender.Native;
qx.log.appender.Console;
}this.viewer=new demobrowser.DemoBrowser;
this.getRoot().add(this.viewer,{edge:0});
},finalize:function(){qx.application.Standalone.prototype.finalize.call(this);
this.viewer.dataLoader(c);
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var k="on",j="qx.debug",h="Value: '",g="!",f="Number",e="string",d="' is not type of ",c="String",b="' is not listed in possible values: ",a="Boolean",M="Unsupported check: ",L="RegExp",K="PositiveNumber",J="' is not an instance of ",I="' is not accepted by check routine: ",H="Integer",G="Object",F="Function",E="' is null but needs to be: ",D="Array",s="' does not validates as: ",t="$$isString",q="' does not match regular expression: ",r="Node",o="Null",p="Error",m="number",n="PositiveInteger",u="Element",v="' is not type of: ",y="Document",x="boolean",A="qx.core.Type",z="' is not accepted by check routine.",C="Date",B="' do not implement interface: ",w="' does not include mixin: ";
qx.Class.define(A,{statics:{__by:{"String":t},__bz:{"String":1,"Number":1,"Function":1,"RegExp":1,"Date":1,"Boolean":1,"Array":1,"Object":1,"Error":1},__bA:{"Integer":f,"PositiveNumber":f,"PositiveInteger":f},__bB:{"String":e,"Number":m,"Boolean":x},__bC:{"[object String]":c,"[object Array]":D,"[object Object]":G,"[object RegExp]":L,"[object Number]":f,"[object Boolean]":a,"[object Date]":C,"[object Function]":F,"[object Error]":p},__bD:{"Class":1,"Mixin":1,"Interface":1,"Theme":1},__bE:{"Node":1,"Element":1,"Document":1},__bF:{},add:function(be,bf,bg){var bh=this.__bF;

if(qx.core.Variant.isSet(j,k)){if(bh[be]){throw new Error("Type if already registered by another class: "+be);
}}bh[be]={method:bf,context:bg};
},check:function(O,P,Q,R){var Y,X,U,bc,bb,T,W,V,S,ba,bd,i,l;

if(!R){R=Error;
}
if(O==null){Y=P==o;

if(qx.core.Variant.isSet(j,k)){if(Y==false){throw new R(h+O+E+P+g);
}}}else if(typeof P==e){if(this.__bz[P]||this.__bA[P]){X=this.__bA[P];

if(X){U=P;
P=X;
}bc=this.__bB[P];

if(bc){Y=typeof O==bc;
}
if(!Y){Y=this.__bC[Object.prototype.toString.call(O)]==P;
}bb=this.__by[P];

if(!Y&&bb){Y=bb in O;
}
if(Y&&P==f){Y=isFinite(O);
}
if(U){P=U;

if(Y){if(P==H){Y=O%1==0;
}else if(P==n){Y=O%1==0&&O>=0;
}else if(P==K){Y=O>=0;
}}}
if(qx.core.Variant.isSet(j,k)){if(Y==false){throw new R(h+O+v+P+g);
}}}else if(this.__bE[P]){T=O.nodeType;
Y=T!=null&&(P==r||(T==1&&P==u)||(T==9&&P==y));

if(qx.core.Variant.isSet(j,k)){if(Y==false){throw new R(h+O+d+P+g);
}}}else if(this.__bD[P]){Y=O.$$type==P;

if(qx.core.Variant.isSet(j,k)){if(Y==false){throw new R(h+O+d+P+g);
}}}else{W=qx.Class.getByName(P);

if(W){Y=O.hasOwnProperty&&O instanceof W;

if(qx.core.Variant.isSet(j,k)){if(Y==false){throw new R(h+O+J+P+g);
}}}else{V=O.constructor;
S=qx.Interface.getByName(P);

if(S){Y=qx.Bootstrap.hasInterface(V,S);

if(qx.core.Variant.isSet(j,k)){if(Y==false){throw new R(h+O+B+P+g);
}}}else{ba=qx.Mixin.getByName(P);

if(ba){Y=qx.Class.hasMixin(V,ba);

if(qx.core.Variant.isSet(j,k)){if(Y==false){throw new R(h+O+w+P+g);
}}}}}}if(Y==null){bd=this.__bF[P];

if(bd){Y=bd.method.call(bd.context||window,O);
}}}else if(P instanceof Array){if(P.indexOf){Y=P.indexOf(O)!=-1;
}else{Y=false;

for(i=0,l=P.length;i<l;i++){if(O===P[i]){Y=true;
break;
}}}
if(qx.core.Variant.isSet(j,k)){if(Y==false){throw new R(h+O+b+P);
}}}else if(P instanceof RegExp){qx.core.Type.check(O,c);
Y=P.match(O);

if(qx.core.Variant.isSet(j,k)){if(Y==false){throw new R(h+O+q+P);
}}}else if(P instanceof Function){try{Y=P.call(Q||window,O);
if(Y==null){Y=true;
}}catch(N){if(qx.core.Variant.isSet(j,k)){throw new R(h+O+I+N);
}else{Y=false;
}}
if(qx.core.Variant.isSet(j,k)){if(Y==false){throw new R(h+O+z);
}}}if(Y==null||Y==false){if(!R){R=Error;
}
if(Y==null){throw new R(M+P);
}else{throw new R(h+O+s+P);
}}}}});
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
(function(){var d="on",c="qx.debug",b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(e,f){if(qx.core.Variant.isSet(c,d)){qx.core.Assert.assertNotUndefined(e);
}this.__bu=b+(e&&e.message?e.message:e);
Error.call(this,this.__bu);
this.__bv=f;
this.__bw=e;
},members:{__bw:null,__bv:null,__bu:null,toString:function(){return this.__bu;
},getArguments:function(){return this.__bv;
},getSourceException:function(){return this.__bw;
}},destruct:function(){this.__bw=null;
this.__bv=null;
this.__bu=null;
}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bG=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bG:null,message:null,getComment:function(){return this.__bG;
},toString:function(){return this.__bG+c+this.message;
}}});
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
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var m="qx.debug",l="on",k="Cannot stop propagation on a non bubbling event: ",j="Invalid argument value 'cancelable'.",i="Cannot prevent default action on a non cancelable event: ",h="Invalid argument value 'canBubble'.",g="qx.event.type.Event";
qx.Class.define(g,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(n,o){if(qx.core.Variant.isSet(m,l)){if(n!==undefined){qx.core.Assert.assertBoolean(n,h);
}
if(o!==undefined){qx.core.Assert.assertBoolean(o,j);
}}this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!n;
this._cancelable=!!o;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(r){if(r){var s=r;
}else{var s=qx.event.Pool.getInstance().getObject(this.constructor);
}s._type=this._type;
s._target=this._target;
s._currentTarget=this._currentTarget;
s._relatedTarget=this._relatedTarget;
s._originalTarget=this._originalTarget;
s._stopPropagation=this._stopPropagation;
s._bubbles=this._bubbles;
s._preventDefault=this._preventDefault;
s._cancelable=this._cancelable;
return s;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){if(qx.core.Variant.isSet(m,l)){this.assertTrue(this._bubbles,k+this.getType());
}this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){if(qx.core.Variant.isSet(m,l)){this.assertTrue(this._cancelable,i+this.getType());
}this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(b){this._type=b;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(p){this._eventPhase=p;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(a){this._target=a;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(c){this._currentTarget=c;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(e){this._relatedTarget=e;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(f){this._originalTarget=f;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(q){this._bubbles=q;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(d){this._cancelable=d;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
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
(function(){var z="qx.debug",y="on",x="unknown",w="node",v="error",u="...(+",t="array",s=")",r="info",q="instance",W="string",V="null",U="class",T="number",S="stringify",R="]",Q="function",P="boolean",O="debug",N="map",G="undefined",H="qx.log.Logger",E=")}",F="#",C="warn",D="document",A="{...(",B="[",I="text[",J="[...(",L="\n",K=")]",M="object";
qx.Class.define(H,{statics:{__bQ:O,setLevel:function(bu){this.__bQ=bu;
},getLevel:function(){return this.__bQ;
},setTreshold:function(bF){this.__bT.setMaxMessages(bF);
},getTreshold:function(){return this.__bT.getMaxMessages();
},__bR:{},__bS:0,register:function(br){if(br.$$id){return;
}var bs=this.__bS++;
this.__bR[bs]=br;
br.$$id=bs;
var bt=this.__bT.getAllLogEvents();

for(var i=0,l=bt.length;i<l;i++){br.process(bt[i]);
}},unregister:function(bp){var bq=bp.$$id;

if(bq==null){return;
}delete this.__bR[bq];
delete bp.$$id;
},debug:function(bG,bH){qx.log.Logger.__bV(O,arguments);
},info:function(bd,be){qx.log.Logger.__bV(r,arguments);
},warn:function(bn,bo){qx.log.Logger.__bV(C,arguments);
},error:function(d,e){qx.log.Logger.__bV(v,arguments);
},trace:qx.core.Variant.select(z,{"on":function(bf){qx.log.Logger.__bV(r,[bf,qx.dev.StackTrace.getStackTrace().join(L)]);
},"off":function(){}}),deprecatedMethodWarning:function(a,b){if(qx.core.Variant.isSet(z,y)){var c=qx.lang.Function.getName(a);
this.warn("The method '"+c+"' is deprecated: "+(b||"Please consult the API documentation of this method for alternatives."));
this.trace();
}},deprecatedClassWarning:function(by,bz){if(qx.core.Variant.isSet(z,y)){var bA=by.classname||x;
this.warn("The class '"+bA+"' is deprecated: "+(bz||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedEventWarning:function(X,event,Y){if(qx.core.Variant.isSet(z,y)){var ba=X.self?X.self.classname:x;
this.warn("The event '"+(event||"unknown")+"' from class '"+ba+"' is deprecated: "+(Y||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedMixinWarning:function(bv,bw){if(qx.core.Variant.isSet(z,y)){var bx=bv?bv.name:x;
this.warn("The mixin '"+bx+"' is deprecated: "+(bw||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedConstantWarning:function(bB,bC,bD){if(qx.core.Variant.isSet(z,y)){if(bB.__defineGetter__){var self=this;
var bE=bB[bC];
bB.__defineGetter__(bC,function(){self.warn("The constant '"+bC+"' is deprecated: "+(bD||"Please consult the API documentation for alternatives."));
self.trace();
return bE;
});
}}},deprecateMethodOverriding:function(bg,bh,bi,bj){if(qx.core.Variant.isSet(z,y)){var bk=bg.constructor;

while(bk.classname!==bh.classname){if(bk.prototype.hasOwnProperty(bi)){this.warn("The method '"+qx.lang.Function.getName(bg[bi])+"' overrides a deprecated method: "+(bj||"Please consult the API documentation for alternatives."));
this.trace();
break;
}bk=bk.superclass;
}}},clear:function(){this.__bT.clearHistory();
},__bT:new qx.log.appender.RingBuffer(50),__bU:{debug:0,info:1,warn:2,error:3},__bV:function(bI,bJ){var bO=this.__bU;

if(bO[bI]<bO[this.__bQ]){return;
}var bL=bJ.length<2?null:bJ[0];
var bN=bL?1:0;
var bK=[];

for(var i=bN,l=bJ.length;i<l;i++){bK.push(this.__bX(bJ[i],true));
}var bP=new Date;
var bQ={time:bP,offset:bP-qx.Bootstrap.LOADSTART,level:bI,items:bK,win:window};
if(bL){if(bL instanceof qx.core.Object){bQ.object=bL.$$hash;
}else if(bL.$$type){bQ.clazz=bL;
}}this.__bT.process(bQ);
var bR=this.__bR;

for(var bM in bR){bR[bM].process(bQ);
}},__bW:function(bb){if(bb===undefined){return G;
}else if(bb===null){return V;
}
if(bb.$$type){return U;
}var bc=typeof bb;

if(bc===Q||bc==W||bc===T||bc===P){return bc;
}else if(bc===M){if(bb.nodeType){return w;
}else if(bb.classname){return q;
}else if(bb instanceof Array){return t;
}else if(bb instanceof Error){return v;
}else{return N;
}}
if(bb.toString){return S;
}return x;
},__bX:function(f,g){var p=this.__bW(f);
var k=x;
var j=[];

switch(p){case V:case G:k=p;
break;
case W:case T:case P:k=f;
break;
case w:if(f.nodeType===9){k=D;
}else if(f.nodeType===3){k=I+f.nodeValue+R;
}else if(f.nodeType===1){k=f.nodeName.toLowerCase();

if(f.id){k+=F+f.id;
}}else{k=w;
}break;
case Q:k=qx.lang.Function.getName(f)||p;
break;
case q:k=f.basename+B+f.$$hash+R;
break;
case U:case S:k=f.toString();
break;
case v:if(qx.core.Variant.isSet(z,y)){j=qx.dev.StackTrace.getStackTraceFromError(f);
}k=f.toString();
break;
case t:if(g){k=[];

for(var i=0,l=f.length;i<l;i++){if(k.length>20){k.push(u+(l-i)+s);
break;
}k.push(this.__bX(f[i],false));
}}else{k=J+f.length+K;
}break;
case N:if(g){var h;
var o=[];

for(var n in f){o.push(n);
}o.sort();
k=[];

for(var i=0,l=o.length;i<l;i++){if(k.length>20){k.push(u+(l-i)+s);
break;
}n=o[i];
h=this.__bX(f[n],false);
h.key=n;
k.push(h);
}}else{var m=0;

for(var n in f){m++;
}k=A+m+E;
}break;
}return {type:p,text:k,trace:j};
}},defer:function(bl){var bm=qx.Bootstrap.$$logs;

for(var i=0;i<bm.length;i++){bl.__bV(bm[i][0],bm[i][1]);
}qx.Bootstrap.debug=bl.debug;
qx.Bootstrap.info=bl.info;
qx.Bootstrap.warn=bl.warn;
qx.Bootstrap.error=bl.error;
qx.Bootstrap.trace=bl.trace;
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
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__qi:null,__qj:null,__qk:null,__ql:null,stringify:function(bb,bc,bd){this.__qi=p;
this.__qj=p;
this.__ql=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__qj+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__qj=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__qk=bc;
}else{this.__qk=null;
}return this.__qm(p,{'':bb});
},__qm:function(bp,bq){var bt=this.__qi,br,bu=bq[bp];
if(bu&&qx.lang.Type.isFunction(bu.toJSON)){bu=bu.toJSON(bp);
}else if(qx.lang.Type.isDate(bu)){bu=this.dateToJSON(bu);
}if(typeof this.__qk===e){bu=this.__qk.call(bq,bp,bu);
}
if(bu===null){return h;
}
if(bu===undefined){return undefined;
}switch(qx.lang.Type.getClass(bu)){case R:return this.__qn(bu);
case B:return isFinite(bu)?String(bu):h;
case Q:return String(bu);
case J:this.__qi+=this.__qj;
br=[];

if(this.__ql.indexOf(bu)!==-1){throw new TypeError(V);
}this.__ql.push(bu);
var length=bu.length;

for(var i=0;i<length;i+=1){br[i]=this.__qm(i,bu)||h;
}this.__ql.pop();
if(br.length===0){var bs=s;
}else if(this.__qi){bs=E+this.__qi+br.join(Y+this.__qi)+b+bt+l;
}else{bs=N+br.join(d)+l;
}this.__qi=bt;
return bs;
case z:this.__qi+=this.__qj;
br=[];

if(this.__ql.indexOf(bu)!==-1){throw new TypeError(V);
}this.__ql.push(bu);
if(this.__qk&&typeof this.__qk===f){var length=this.__qk.length;

for(var i=0;i<length;i+=1){var k=this.__qk[i];

if(typeof k===W){var v=this.__qm(k,bu);

if(v){br.push(this.__qn(k)+(this.__qi?g:m)+v);
}}}}else{for(var k in bu){if(Object.hasOwnProperty.call(bu,k)){var v=this.__qm(k,bu);

if(v){br.push(this.__qn(k)+(this.__qi?g:m)+v);
}}}}this.__ql.pop();
if(br.length===0){var bs=A;
}else if(this.__qi){bs=w+this.__qi+br.join(Y+this.__qi)+b+bt+S;
}else{bs=C+br.join(d)+S;
}this.__qi=bt;
return bs;
}},dateToJSON:function(bv){var bw=function(n){return n<10?U+n:n;
};
var bx=function(n){var bo=bw(n);
return n<100?U+bo:bo;
};
return isFinite(bv.valueOf())?bv.getUTCFullYear()+T+bw(bv.getUTCMonth()+1)+T+bw(bv.getUTCDate())+M+bw(bv.getUTCHours())+m+bw(bv.getUTCMinutes())+m+bw(bv.getUTCSeconds())+F+bx(bv.getUTCMilliseconds())+q:null;
},__qn:function(bi){var bj={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bk=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bk.lastIndex=0;

if(bk.test(bi)){return o+
bi.replace(bk,function(a){var c=bj[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bi+o;
}},parse:function(bl,bm){var bn=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bn.lastIndex=0;
if(bn.test(bl)){bl=bl.replace(bn,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(bl.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+bl+D);
return typeof bm===e?this.__qo({'':j},p,bm):j;
}throw new SyntaxError(P);
},__qo:function(be,bf,bg){var bh=be[bf];

if(bh&&typeof bh===f){for(var k in bh){if(Object.hasOwnProperty.call(bh,k)){var v=this.__qo(bh,k,bg);

if(v!==undefined){bh[k]=v;
}else{delete bh[k];
}}}}return bg.call(be,bf,bh);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
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
(function(){var p="qx.debug",o="on",n="Invalid argument 'map'",m="Invalid argument 'minLength'",k="function",j="Invalid argument 'array'",h="Invalid argument 'source'",g="qx.lang.Object",f="Invalid argument 'target'",e="undefined",d="object";
qx.Class.define(g,{statics:{empty:function(v){if(qx.core.Variant.isSet(p,o)){qx.core.Assert&&qx.core.Assert.assertMap(v,n);
}
for(var w in v){if(v.hasOwnProperty(w)){delete v[w];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(K){if(qx.core.Variant.isSet(p,o)){qx.core.Assert&&qx.core.Assert.assertMap(K,n);
}return K.__count__===0;
}:
function(t){if(qx.core.Variant.isSet(p,o)){qx.core.Assert&&qx.core.Assert.assertMap(t,n);
}
for(var u in t){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(x,y){if(qx.core.Variant.isSet(p,o)){qx.core.Assert&&qx.core.Assert.assertMap(x,n);
qx.core.Assert&&qx.core.Assert.assertInteger(y,m);
}return x.__count__>=y;
}:
function(q,r){if(qx.core.Variant.isSet(p,o)){qx.core.Assert&&qx.core.Assert.assertMap(q,n);
qx.core.Assert&&qx.core.Assert.assertInteger(r,m);
}
if(r<=0){return true;
}var length=0;

for(var s in q){if((++length)>=r){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,findWinnerKey:function(G,H,I){if(!(H in G)){return I in G?I:null;
}
if(!(I in G)){return H in G?H:null;
}
for(var J in G){if(J==H){return H;
}else if(J==I){return I;
}}return null;
},getValues:function(Q){if(qx.core.Variant.isSet(p,o)){qx.core.Assert&&qx.core.Assert.assertMap(Q,n);
}var S=[];
var R=this.getKeys(Q);

for(var i=0,l=R.length;i<l;i++){S.push(Q[R[i]]);
}return S;
},merge:function(z,A){if(qx.core.Variant.isSet(p,o)){qx.core.Assert&&qx.core.Assert.assertMap(z,f);
}var D=arguments.length;
var B,C;

for(var i=1;i<D;i++){B=arguments[i];

for(C in B){z[C]=B[C];
}}return z;
},clone:function(V){if(qx.core.Variant.isSet(p,o)){qx.core.Assert&&qx.core.Assert.assertMap(V,h);
}var W={};

for(var X in V){W[X]=V[X];
}return W;
},invert:function(N){if(qx.core.Variant.isSet(p,o)){qx.core.Assert&&qx.core.Assert.assertMap(N,n);
}var O={};

for(var P in N){O[N[P].toString()]=P;
}return O;
},getKeyFromValue:function(a,b){if(qx.core.Variant.isSet(p,o)){qx.core.Assert&&qx.core.Assert.assertMap(a,n);
}
for(var c in a){if(a.hasOwnProperty(c)&&a[c]===b){return c;
}}return null;
},contains:function(L,M){if(qx.core.Variant.isSet(p,o)){qx.core.Assert&&qx.core.Assert.assertMap(L,n);
}return this.getKeyFromValue(L,M)!==null;
},select:function(E,F){if(qx.core.Variant.isSet(p,o)){qx.core.Assert&&qx.core.Assert.assertMap(F,n);
}return F[E];
},fromArray:function(T){if(qx.core.Variant.isSet(p,o)){qx.core.Assert&&qx.core.Assert.assertArray(T,j);
}var U={};

for(var i=0,l=T.length;i<l;i++){if(qx.core.Variant.isSet(p,o)){switch(typeof T[i]){case d:case k:case e:throw new Error("Could not convert complex objects like "+T[i]+" at array index "+i+" to map syntax");
}}U[T[i].toString()]=true;
}return U;
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
(function(){var w="object",v="qx.debug",u="Theme",t="widgets",s="undefined",r="fonts",q="string",p="colors",o="decorations",n="on",f="meta",m="appearances",j="borders",e="icons",d="other",h="qx.Theme",g="]",k="[Theme ";
qx.Bootstrap.define(h,{statics:{define:function(name,x){if(!x){var x={};
}x.include=this.__rh(x.include);
x.patch=this.__rh(x.patch);
if(qx.core.Variant.isSet(v,n)){this.__ro(name,x);
}var y={$$type:u,name:name,title:x.title,toString:this.genericToString};
if(x.extend){y.supertheme=x.extend;
}y.basename=qx.Bootstrap.createNamespace(name,y);
this.__rk(y,x);
this.__ri(y,x);
this.$$registry[name]=y;
for(var i=0,a=x.include,l=a.length;i<l;i++){this.include(y,a[i]);
}
for(var i=0,a=x.patch,l=a.length;i<l;i++){this.patch(y,a[i]);
}},__rh:function(R){if(!R){return [];
}
if(qx.Bootstrap.isArray(R)){return R;
}else{return [R];
}},__ri:function(M,N){var Q=N.aliases||{};

if(N.extend&&N.extend.aliases){var O=N.extend.aliases;

for(var P in O){if(!(P in Q)){Q[P]=O[P];
}}}M.aliases=Q;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return k+this.name+g;
},__rj:function(b){for(var i=0,c=this.__rl,l=c.length;i<l;i++){if(b[c[i]]){return c[i];
}}},__rk:function(z,A){var D=this.__rj(A);
if(A.extend&&!D){D=A.extend.type;
}z.type=D||d;
if(!D){return;
}var F=function(){};
if(A.extend){F.prototype=new A.extend.$$clazz;
}var E=F.prototype;
var C=A[D];
for(var B in C){E[B]=C[B];
if(E[B].base){if(qx.core.Variant.isSet(v,n)){if(!A.extend){throw new Error("Found base flag in entry '"+B+"' of theme '"+A.name+"'. Base flags are not allowed for themes without a valid super theme!");
}}E[B].base=A.extend;
}}z.$$clazz=F;
z[D]=new F;
},$$registry:{},__rl:[p,j,o,r,e,t,m,f],__rm:qx.core.Variant.select(v,{"on":{"title":q,"aliases":w,"type":q,"extend":w,"colors":w,"borders":w,"decorations":w,"fonts":w,"icons":w,"widgets":w,"appearances":w,"meta":w,"include":w,"patch":w},"default":null}),__rn:qx.core.Variant.select(v,{"on":{"color":w,"border":w,"decoration":w,"font":w,"icon":w,"appearance":w,"widget":w},"default":null}),__ro:qx.core.Variant.select(v,{"on":function(name,Y){var be=this.__rm;

for(var bd in Y){if(be[bd]===undefined){throw new Error('The configuration key "'+bd+'" in theme "'+name+'" is not allowed!');
}
if(Y[bd]==null){throw new Error('Invalid key "'+bd+'" in theme "'+name+'"! The value is undefined/null!');
}
if(be[bd]!==null&&typeof Y[bd]!==be[bd]){throw new Error('Invalid type of key "'+bd+'" in theme "'+name+'"! The type of the key must be "'+be[bd]+'"!');
}}var bc=[p,j,o,r,e,t,m,f];

for(var i=0,l=bc.length;i<l;i++){var bd=bc[i];

if(Y[bd]!==undefined&&(Y[bd] instanceof Array||Y[bd] instanceof RegExp||Y[bd] instanceof Date||Y[bd].classname!==undefined)){throw new Error('Invalid key "'+bd+'" in theme "'+name+'"! The value needs to be a map!');
}}var ba=0;

for(var i=0,l=bc.length;i<l;i++){var bd=bc[i];

if(Y[bd]){ba++;
}
if(ba>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(!Y.extend&&ba===0){throw new Error("You must define at least one entry in your theme configuration :"+name);
}if(Y.meta){var bb;

for(var bd in Y.meta){bb=Y.meta[bd];

if(this.__rn[bd]===undefined){throw new Error('The key "'+bd+'" is not allowed inside a meta theme block.');
}
if(typeof bb!==this.__rn[bd]){throw new Error('The type of the key "'+bd+'" inside the meta block is wrong.');
}
if(!(typeof bb===w&&bb!==null&&bb.$$type===u)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+bd+'" in theme "'+name+'" is invalid: '+bb);
}}}if(Y.extend&&Y.extend.$$type!==u){throw new Error('Invalid extend in theme "'+name+'": '+Y.extend);
}if(Y.include){for(var i=0,l=Y.include.length;i<l;i++){if(typeof (Y.include[i])==s||Y.include[i].$$type!==u){throw new Error('Invalid include in theme "'+name+'": '+Y.include[i]);
}}}if(Y.patch){for(var i=0,l=Y.patch.length;i<l;i++){if(typeof (Y.patch[i])==s||Y.patch[i].$$type!==u){throw new Error('Invalid patch in theme "'+name+'": '+Y.patch[i]);
}}}},"default":function(){}}),patch:function(S,T){var V=this.__rj(T);

if(V!==this.__rj(S)){throw new Error("The mixins '"+S.name+"' are not compatible '"+T.name+"'!");
}var U=T[V];
var W=S.$$clazz.prototype;

for(var X in U){W[X]=U[X];
}},include:function(G,H){var J=H.type;

if(J!==G.type){throw new Error("The mixins '"+G.name+"' are not compatible '"+H.name+"'!");
}var I=H[J];
var K=G.$$clazz.prototype;

for(var L in I){if(K[L]!==undefined){continue;
}K[L]=I[L];
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
(function(){var y=0;
var z={};
var B={4:{},3:{},2:{get:"getThemedValue"},1:{get:"getInheritedValue"}};
var D={inherited:1,theme:2,user:3,override:4};
var A="$$init-";
var C="$$data";
var t;
var x=qx.Bootstrap;
var w=qx.core.Type;
var s=qx.core.property.Util;
var u=qx.core.ValidationError;
var v=function(V,W,X,Y){if(!V._getChildren){return;
}var bm=V._getChildren();
var length=bm.length;

if(!length){return;
}var bl=D.inherited;
var bd=Y.name,bk=Y.apply,be=Y.event;
var bn=z[bd];
var bh=A+bd;
var bj,ba,bc,bf,bb,bi;
var bg=qx.core.property.Util;

for(var i=0,l=bm.length;i<l;i++){bj=bm[i];
if(!bg.getPropertyDefinition(bj.constructor,bd)){continue;
}ba=bj[C];

if(!ba){ba=bj[C]={};
}bc=ba[bn];

if(bc!==t&&bc>bl){continue;
}if(bc===bl){bf=X;
}else if(bc!==t){bb=B[bc].get;

if(bb){bf=bj[bb](bd);
}else{bf=bj[bn+bc];
}}else{bf=bj[bh];
}bi=W;

if(bi===t){bi=bj[bh];
ba[bn]=t;
}else{ba[bn]=bl;
}if(bi!==bf){if(bk){bj[bk](bi,bf,bd);
}if(be){bj.fireDataEvent(be,bi,bf);
}v(bj,bi,bf,Y);
}}};
qx.Bootstrap.define("qx.core.property.Multi",{statics:{add:function(bJ,name,bK){y++;
var bV=z[name];

if(!bV){bV=z[name]=qx.core.property.Core.ID;
qx.core.property.Core.ID+=5;
}var bR=bJ.prototype;

if(bK.init!==t){var bQ=A+name;
bR[bQ]=bK.init;
}var bO=x.$$firstUp[name]||x.firstUp(name);
var bL=bK.nullable,bN=bK.event,bT=bK.apply,bU=bK.validate,bS=bK.inheritable;
var bW=function(bI){return function(J){var N=this;

if(qx.core.Variant.isSet("qx.debug","on")){qx.core.property.Debug.checkSetter(N,bK,arguments);
}
if(bU){w.check(J,bU,N,u);
}var L=N[C];

if(!L){L=N[C]={};
}else{var K=L[bV];

if(K!==t){var O=B[K].get;

if(O){var M=N[O](name);
}else{var M=L[bV+K];
}}}L[bV+bI]=J;
if(K===t||K<=bI){if(K!==bI){L[bV]=bI;
}if(M===t&&bQ){M=N[bQ];
}if(J!==M){if(bT){N[bT](J,M,bK.name);
}if(bN){N.fireDataEvent(bN,J,M);
}if(bS){v(N,J,M,bK);
}}}return J;
};
};
var bM=function(U){return function(cc){var cd=this;

if(qx.core.Variant.isSet("qx.debug","on")){qx.core.property.Debug.checkResetter(cd,bK,arguments);
}var ci=cd[C];
var cf=ci[bV];

if(cf===U){var ch=ci[bV+cf];
var cj,ce;

for(var cg=U-1;cg>0;cg--){ce=B[cg].get;

if(ce){cj=cd[ce]?cd[ce](name):t;
}else{cj=ci[bV+cg];
}
if(cj!==t){break;
}}if(cj===t){cg=t;
if(bQ){cj=cd[bQ];
}else if(qx.core.Variant.isSet("qx.debug","on")){if(!bL){cd.error("Missing value for: "+name+" (during reset())");
}}}ci[bV]=cg;
}ci[bV+U]=t;
if(cf===U&&ch!==cj){if(bT){cd[bT](cj,ch,bK.name);
}if(bN){cd.fireDataEvent(bN,cj,ch);
}if(bS){v(cd,cj,ch,bK);
}}};
};
var bP=function(){var I=this;

if(qx.core.Variant.isSet("qx.debug","on")){qx.core.property.Debug.checkGetter(I,bK,arguments);
}var G=I[C];
var E=G&&G[bV];

if(E===t){if(bQ){return I[bQ];
}if(bL){return null;
}
if(qx.core.Variant.isSet("qx.debug","on")){I.error("Missing value for: "+name+" (during get()). Either define an init value, make the property nullable or define a fallback value.");
}return;
}var F=B[E].get;

if(F){if(qx.core.Variant.isSet("qx.debug","on")){var H=I[F](name);

if(H===t){throw new Error("Ooops. Invalid value at getter: "+name+" in "+I+" via getter: "+F);
}return H;
}else{return I[F](name);
}}else{return G[bV+E];
}};
bR["get"+bO]=bP;
if(bQ){bR["init"+bO]=function(){var bq=this;
var bp=bq[C];

if(bp){var bo=bp[bV];

if(bo!==t){return;
}}if(bT){bq[bT](bq[bQ],t,bK.name);
}if(bN){bq.fireDataEvent(bN,bq[bQ],t);
}if(bS){v(bq,bq[bQ],t,bK);
}};
}bR["set"+bO]=bW(3);
bR["reset"+bO]=bM(3);

if(this.RUNTIME_OVERRIDE){bR["setRuntime"+bO]=bW(4);
bR["resetRuntime"+bO]=bM(4);
}if(bK.check==="Boolean"){bR["toggle"+bO]=function(){this["set"+bO](!this["get"+bO]());
};
bR["is"+bO]=bP;
}},getSingleValue:function(bX,bY,ca){var cb=z[bY]+D[ca];

if(qx.core.Variant.isSet("qx.debug","on")){if(typeof cb!="number"||isNaN(cb)){throw new Error("Invalid property or field: "+bY+", "+ca);
}}return bX[C][cb];
},importData:function(a,b,c,d){var p=a[C];

if(!p){p=a[C]={};
}var g=D[d];
var j,r,q,o,m,n;
for(j in b){r=z[j];
m=p[r];

if(m>g){continue;
}q=b[j];
if(m===t&&q===t){continue;
}if(m!=null){if(c&&m==g){o=c[j];
}else{var k=B[m].get;

if(k){o=a[k]?a[k](j):t;
}else{o=p[r+m];
}}}else{o=t;
}if(o===q){continue;
}if(q===t){var q,e;

for(var f=g-1;f>0;f--){e=B[f].get;

if(e){q=a[e]?a[e](j):t;
}else{q=p[r+f];
}
if(q!==t){break;
}}if(q===t){f=t;
n=A+j;

if(n){q=a[n];
}else if(qx.core.Variant.isSet("qx.debug","on")){var h=s.getPropertyDefinition(a.constructor,j);

if(!h.nullable){a.error("Missing value for: "+j+" (during reset() - from theme system)");
}}}p[r]=f;
}else if(m!=g){p[r]=g;
}if(q!==o){var h=s.getPropertyDefinition(a.constructor,j);
if(h.apply){a[h.apply](q,o,h.name);
}if(h.event){a.fireDataEvent(h.event,q,o);
}if(h.inheritable){v(a,q,o,h);
}}}},getInheritableProperties:function(P){var S=P.$$inheritables;

if(S){if(qx.core.Variant.isSet("qx.debug","on")){qx.log.Logger.debug(this,"You may choose to access inheritable properties via: obj.$$inheritables || qx.core.property.Multi.getInheritableProperties(obj) for better performance.");
}return S;
}S=P.$$inheritables={};
var T=P.$$properties;

if(T){for(var name in T){if(T[name].inheritable){S[name]=T[name];
}}}var Q=P.superclass;

if(Q&&Q!==Object){var R=Q.$$inheritables||this.getInheritableProperties(Q);

for(var name in R){S[name]=R[name];
}}return S;
},moveObject:function(br,bs,bt){if(bs==bt){return;
}var bE,by,bG,bw,bH,bC,bA,bF,bv,bB,bD,bu,bx,bz;
bE=D.inherited;
bF=br[C];

if(!bF){bF=br[C]={};
}bu=bs?bs[C]:t;
by=br.constructor;
bG=by.$$inheritables||this.getInheritableProperties(by);

for(bw in bG){bH=z[bw];
bA=A+bw;
bv=bF?bF[bH]:t;

if(bv===t){bB=br[bA];
}else if(bv==bE){bB=bt.get(bw);
}else{continue;
}bD=t;

if(bs){bx=bu?bu[bH]:t;

if(bx===t){bD=bs[bA];
}else{bz=B[bx].get;

if(bz){bD=bs[bz]?bs[bz](bw):t;
}else{bD=bu[bH+bx];
}
if(bD===t){bD=bs[bA];
}}}if(bD===t){bD=br[bA];

if(bF[bH]!==t){bF[bH]=t;
}}else{bF[bH]=bE;
}if(bD!==bB){bC=bG[bw];
if(bC.apply){br[bC.apply](bD,bB,bw);
}if(bC.event){br.fireDataEvent(bC.event,bD,bB);
}v(br,bD,bB,bC);
}}}}});
})();
(function(){var z="Integer",y="_applyDimension",x="Boolean",w="_applyStretching",v="_applyMargin",u="_applyAlign",t="qx.debug",s="on",r="allowShrinkY",q="Wrong 'top' value. ",U="Wrong 'width' value. ",T="Something went wrong with the layout of ",S="bottom",R="baseline",Q="marginBottom",P="qx.ui.core.LayoutItem",O="center",N="marginTop",M="!",L="allowGrowX",G="middle",H="marginLeft",E="Wrong 'height' value. ",F="allowShrinkX",C="top",D="right",A="marginRight",B="abstract",I="Wrong 'left' value. ",J="allowGrowY",K="left";
qx.Class.define(P,{type:B,extend:qx.core.Object,properties:{minWidth:{check:z,nullable:true,apply:y,init:null,themeable:true},width:{check:z,nullable:true,apply:y,init:null,themeable:true},maxWidth:{check:z,nullable:true,apply:y,init:null,themeable:true},minHeight:{check:z,nullable:true,apply:y,init:null,themeable:true},height:{check:z,nullable:true,apply:y,init:null,themeable:true},maxHeight:{check:z,nullable:true,apply:y,init:null,themeable:true},allowGrowX:{check:x,apply:w,init:true,themeable:true},allowShrinkX:{check:x,apply:w,init:true,themeable:true},allowGrowY:{check:x,apply:w,init:true,themeable:true},allowShrinkY:{check:x,apply:w,init:true,themeable:true},allowStretchX:{group:[L,F],shorthand:true,themeable:true},allowStretchY:{group:[J,r],shorthand:true,themeable:true},marginTop:{check:z,init:0,apply:v,themeable:true},marginRight:{check:z,init:0,apply:v,themeable:true},marginBottom:{check:z,init:0,apply:v,themeable:true},marginLeft:{check:z,init:0,apply:v,themeable:true},margin:{group:[N,A,Q,H],shorthand:true,themeable:true},alignX:{check:[K,O,D],nullable:true,apply:u,themeable:true},alignY:{check:[C,G,S,R],nullable:true,apply:u,themeable:true}},members:{__et:null,__eu:null,__ev:null,__ew:null,__ex:null,__ey:null,__ez:null,getBounds:function(){return this.__ey||this.__eu||null;
},clearSeparators:function(){},renderSeparator:function(o,p){},renderLayout:function(f,top,g,h){if(qx.core.Variant.isSet(t,s)){var i=T+this.toString()+M;
this.assertInteger(f,I+i);
this.assertInteger(top,q+i);
this.assertInteger(g,U+i);
this.assertInteger(h,E+i);
}var j=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var j=this._getHeightForWidth(g);
}
if(j!=null&&j!==this.__et){this.__et=j;
qx.ui.core.queue.Layout.add(this);
return null;
}var l=this.__eu;

if(!l){l=this.__eu={};
}var k={};

if(f!==l.left||top!==l.top){k.position=true;
l.left=f;
l.top=top;
}
if(g!==l.width||h!==l.height){k.size=true;
l.width=g;
l.height=h;
}if(this.__ev){k.local=true;
delete this.__ev;
}
if(this.__ex){k.margin=true;
delete this.__ex;
}return k;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__ev;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__ev=true;
this.__ew=null;
},getSizeHint:function(d){var e=this.__ew;

if(e){return e;
}
if(d===false){return null;
}e=this.__ew=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__et&&this.getHeight()==null){e.height=this.__et;
}if(e.minWidth>e.width){e.width=e.minWidth;
}
if(e.maxWidth<e.width){e.width=e.maxWidth;
}
if(!this.getAllowGrowX()){e.maxWidth=e.width;
}
if(!this.getAllowShrinkX()){e.minWidth=e.width;
}if(e.minHeight>e.height){e.height=e.minHeight;
}
if(e.maxHeight<e.height){e.height=e.maxHeight;
}
if(!this.getAllowGrowY()){e.maxHeight=e.height;
}
if(!this.getAllowShrinkY()){e.minHeight=e.height;
}return e;
},_computeSizeHint:function(){var ba=this.getMinWidth()||0;
var W=this.getMinHeight()||0;
var bb=this.getWidth()||ba;
var Y=this.getHeight()||W;
var V=this.getMaxWidth()||Infinity;
var X=this.getMaxHeight()||Infinity;
return {minWidth:ba,width:bb,maxWidth:V,minHeight:W,height:Y,maxHeight:X};
},_hasHeightForWidth:function(){var bf=this._getLayout();

if(bf){return bf.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(m){var n=this._getLayout();

if(n&&n.hasHeightForWidth()){return n.getHeightForWidth(m);
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
},setUserBounds:function(bg,top,bh,bi){this.__ey={left:bg,top:top,width:bh,height:bi};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__ey;
qx.ui.core.queue.Layout.add(this);
},__eA:{},setLayoutProperties:function(a){if(a==null){return;
}var b=this.__ez;

if(!b){b=this.__ez={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(a);
}for(var c in a){if(a[c]==null){delete b[c];
}else{b[c]=a[c];
}}},getLayoutProperties:function(){return this.__ez||this.__eA;
},clearLayoutProperties:function(){delete this.__ez;
},updateLayoutProperties:function(bc){var bd=this._getLayout();

if(bd){if(qx.core.Variant.isSet(t,s)){if(bc){for(var be in bc){if(bc[be]!==null){bd.verifyLayoutProperty(this,be,bc[be]);
}}}}bd.invalidateChildrenCache();
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
},clone:function(){var bj=qx.core.Object.prototype.clone.call(this);
var bk=this.__ez;

if(bk){bj.__ez=qx.lang.Object.clone(bk);
}return bj;
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
(function(){var k="qx.debug",j="qx.ui.core.DecoratorFactory",i="qxType",h="",g="decorator",f="$$nopool$$",e="qx.ui.core.DecoratorFactory[",d="] ",c="on",b="keys: ",a=", elements: ";
qx.Class.define(j,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__eB={};
},statics:{MAX_SIZE:15,__eC:f},members:{__eB:null,getDecoratorElement:function(o){var t=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(o)){var r=o;
var q=qx.theme.manager.Decoration.getInstance().resolve(o);
}else{var r=t.__eC;
q=o;
}var s=this.__eB;

if(s[r]&&s[r].length>0){var p=s[r].pop();
}else{var p=this._createDecoratorElement(q,r);
}p.$$pooled=false;
return p;
},poolDecorator:function(z){if(!z||z.$$pooled||z.isDisposed()){return;
}var C=qx.ui.core.DecoratorFactory;
var A=z.getId();

if(A==C.__eC){z.dispose();
return;
}var B=this.__eB;

if(!B[A]){B[A]=[];
}
if(B[A].length>C.MAX_SIZE){z.dispose();
}else{z.$$pooled=true;
B[A].push(z);
}},_createDecoratorElement:function(u,v){var w=new qx.html.Decorator(u,v);

if(qx.core.Variant.isSet(k,c)){w.setAttribute(i,g);
}return w;
},toString:qx.core.Variant.select(k,{"on":function(){var l=0;
var m=0;

for(var n in this.__eB){l+=1;
m+=this.__eB[n].length;
}return [e,this.$$hash,d,b,l,a,m].join(h);
},"off":function(){return qx.core.Object.prototype.toString.call(this);
}})},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var y=this.__eB;

for(var x in y){qx.util.DisposeUtil.disposeArray(y,x);
}}this.__eB=null;
}});
})();
(function(){var em="on",ek="px",ej="visible",ei="qx.debug",eh="Boolean",eg="qx.event.type.Mouse",ef="qx.event.type.Drag",ee="qx.event.type.Focus",ed="excluded",ec="Integer",dl="hidden",dk="_applyPadding",dj="qx.event.type.Event",di="opacity",dh="contextmenu",dg="String",df="tabIndex",de="qx.event.type.Touch",dd="qx.event.type.Data",dc="focused",et="changeVisibility",eu="mshtml",er="qx.event.type.KeySequence",es="qx.client",ep=".",eq="absolute",en="backgroundColor",eo="drag",ev="div",ew="disabled",dK="move",dJ="dragstart",dM="qx.dynlocale",dL="dragchange",dO="dragend",dN="transitionEnd",dQ="resize",dP="Decorator",dI="zIndex",dH="object",bS="default",bT="Color",bU="qxType",bV="",bW="changeToolTipText",bX="appear",bY="beforeContextmenuOpen",ca="__eK",cb="qx.ui.core.Transform",cc="_applyNativeContextMenu",eH="Wrong 'height' value. ",eG="content",eF="_applyBackgroundColor",eE="_applyFocusable",eL="changeShadow",eK="__eD",eJ="qx.event.type.KeyInput",eI="createChildControl",eN="__eJ",eM="Invalid left decorator inset detected: ",cB="_applyTransform",cC="Font",cz="theme",cA="_applyShadow",cF="Invalid layout data: ",cG="Could not add widget to itself: ",cD="_applyEnabled",cE="_applySelectable",cx="Number",cy="_applyKeepActive",ck="transition",cj="transform",cm="_applyVisibility",cl="_applyTransparentVisibility",cg="__eI",cf="repeat",ci="qxDraggable",ch="__eR",ce="paddingLeft",cd="_applyDroppable",cL="_applyTransition",cM="protector",cN="#",cO="cursor",cH="qx.event.type.MouseWheel",cI="_applyCursor",cJ="_applyDraggable",cK="changeTextColor",cP="$$widget",cQ="changeContextMenu",cu="paddingTop",ct="The 'after' widget is not a child of this widget!",cs="changeSelectable",cr=" of the widget ",cq="hideFocus",cp="Invalid top decorator inset detected: ",co="none",cn="outline",cw="The 'before' widget is not a child of this widget!",cv="_applyAppearance",cR="hovered",cS="_applyOpacity",cT="url(",cU=")",cV="qx.ui.core.Widget",cW="minHeight is larger than maxHeight!",cX="__eP",cY="_applyFont",da="qx.ui.core.ITransition",db="qxDroppable",dq="The layout ",dp="changeZIndex",dn="changeTransition",dm="changeEnabled",du="__eN",dt="changeFont",ds="_applyDecorator",dr="_applyZIndex",dw="_applyTextColor",dv="qx.ui.menu.Menu",dD="Invalid right decorator inset detected: ",dE="Invalid widget to add: ",dB="changeDecorator",dC="_applyToolTipText",dz=" returned an invalid size hint!",dA="true",dx="widget",dy="changeBackgroundColor",dF="_applyTabIndex",dG="Invalid bottom decorator inset detected: ",dU="changeAppearance",dT="/",dW="qxKeepFocus",dV="_applyContextMenu",dY="container",dX="paddingBottom",eb="changeNativeContextMenu",ea="qx.ui.tooltip.ToolTip",dS="qxKeepActive",dR="_applyKeepFocus",eA="__eE",eB="paddingRight",eC="minWidth is larger than maxWidth!",eD="changeLocale",ex="Wrong 'width' value. ",ey="changeTransform",ez="qx/static/blank.gif";
qx.Class.define(cV,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation,qx.data.MBinding],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__eD=this._createContainerElement();
this.__eE=this.__eQ();
this.__eD.add(this.__eE);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:dj,disappear:dj,createChildControl:dd,resize:dd,move:dd,mousemove:eg,mouseover:eg,mouseout:eg,mousedown:eg,mouseup:eg,click:eg,dblclick:eg,contextmenu:eg,beforeContextmenuOpen:eg,mousewheel:cH,touchstart:de,touchend:de,touchmove:de,touchcancel:de,keyup:er,keydown:er,keypress:er,keyinput:eJ,focus:ee,blur:ee,focusin:ee,focusout:ee,activate:ee,deactivate:ee,capture:dj,losecapture:dj,drop:ef,dragleave:ef,dragover:ef,drag:ef,dragstart:ef,dragend:ef,dragchange:ef,droprequest:ef},properties:{paddingTop:{check:ec,init:0,apply:dk,themeable:true},paddingRight:{check:ec,init:0,apply:dk,themeable:true},paddingBottom:{check:ec,init:0,apply:dk,themeable:true},paddingLeft:{check:ec,init:0,apply:dk,themeable:true},padding:{group:[cu,eB,dX,ce],shorthand:true,themeable:true},transition:{check:da,nullable:true,event:dn,apply:cL},transform:{check:cb,nullable:true,event:ey,apply:cB},zIndex:{nullable:true,init:null,apply:dr,event:dp,check:ec,themeable:true},decorator:{nullable:true,init:null,apply:ds,event:dB,check:dP,themeable:true},shadow:{nullable:true,init:null,apply:cA,event:eL,check:dP,themeable:true},backgroundColor:{nullable:true,check:bT,apply:eF,event:dy,themeable:true},textColor:{nullable:true,check:bT,apply:dw,event:cK,themeable:true,inheritable:true},font:{nullable:true,apply:cY,check:cC,event:dt,themeable:true,inheritable:true},opacity:{check:cx,apply:cS,themeable:true,nullable:true,init:null},cursor:{check:dg,apply:cI,themeable:true,inheritable:true,nullable:true},toolTip:{check:ea,nullable:true},toolTipText:{check:dg,nullable:true,event:bW,apply:dC},toolTipIcon:{check:dg,nullable:true,event:bW},blockToolTip:{check:eh,init:false},visibility:{check:[ej,dl,ed],init:ej,apply:cm,event:et},transparentVisibility:{check:[ej,dl,ed],init:ej,apply:cl},enabled:{check:eh,inheritable:true,apply:cD,event:dm,init:true},anonymous:{init:false,check:eh},tabIndex:{check:ec,nullable:true,apply:dF},focusable:{check:eh,init:false,apply:eE},keepFocus:{check:eh,init:false,apply:dR},keepActive:{check:eh,init:false,apply:cy},draggable:{check:eh,init:false,apply:cJ},droppable:{check:eh,init:false,apply:cd},selectable:{check:eh,init:false,event:cs,apply:cE},contextMenu:{check:dv,apply:dV,nullable:true,event:cQ},nativeContextMenu:{check:eh,init:false,themeable:true,event:eb,apply:cc},appearance:{check:dg,init:dx,apply:cv,event:dU}},statics:{__eF:{},DEBUG:false,getWidgetByElement:function(eW,eX){while(eW){var eY=eW.$$widget;
if(eY!=null){var fa=qx.core.ObjectRegistry.fromHashCode(eY);
if(!eX||!fa.getAnonymous()){return fa;
}}try{eW=eW.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,fT){while(fT){if(parent==fT){return true;
}fT=fT.getLayoutParent();
}return false;
},__eG:new qx.ui.core.DecoratorFactory(),__eH:new qx.ui.core.DecoratorFactory()},members:{__eD:null,__eE:null,__eI:null,__eJ:null,__eK:null,__eL:null,__eM:null,__eN:null,_getLayout:function(){return this.__eN;
},_setLayout:function(bP){if(qx.core.Variant.isSet(ei,em)){if(bP){this.assertInstance(bP,qx.ui.layout.Abstract);
}}
if(this.__eN){this.__eN.connectToWidget(null);
}
if(bP){bP.connectToWidget(this);
}this.__eN=bP;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var hE=this.getContainerElement();
var hD=this.$$parent;
qx.core.property.Multi.moveObject(this,parent,hD);

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(hE);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(hE);
}qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__eO:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var fg=qx.theme.manager.Decoration.getInstance();
var fi=fg.resolve(a).getInsets();
var fh=fg.resolve(b).getInsets();

if(fi.top!=fh.top||fi.right!=fh.right||fi.bottom!=fh.bottom||fi.left!=fh.left){return true;
}return false;
},renderLayout:function(hl,top,hm,hn){var hw=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,hl,top,hm,hn);
if(!hw){return;
}var hp=this.getContainerElement();
var content=this.getContentElement();
var ht=hw.size||this._updateInsets;
var hx=ek;
var hu={};
if(hw.position){hu.left=hl+hx;
hu.top=top+hx;
}if(hw.size){hu.width=hm+hx;
hu.height=hn+hx;
}
if(hw.position||hw.size){hp.setStyles(hu);
}
if(ht||hw.local||hw.margin){var ho=this.getInsets();
var innerWidth=hm-ho.left-ho.right;
var innerHeight=hn-ho.top-ho.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var hr={};

if(this._updateInsets){hr.left=ho.left+hx;
hr.top=ho.top+hx;
}
if(ht){hr.width=innerWidth+hx;
hr.height=innerHeight+hx;
}
if(ht||this._updateInsets){content.setStyles(hr);
}
if(hw.size){var hv=this.__eK;

if(hv){hv.setStyles({width:hm+ek,height:hn+ek});
}}
if(hw.size||this._updateInsets){if(this.__eI){this.__eI.resize(hm,hn);
}}
if(hw.size){if(this.__eJ){var ho=this.__eJ.getInsets();
var hs=hm+ho.left+ho.right;
var hq=hn+ho.top+ho.bottom;
this.__eJ.resize(hs,hq);
}}
if(ht||hw.local||hw.margin){if(this.__eN&&this.hasLayoutChildren()){this.__eN.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(hw.position&&this.hasListener(dK)){this.fireDataEvent(dK,this.getBounds());
}
if(hw.size&&this.hasListener(dQ)){this.fireDataEvent(dQ,this.getBounds());
}delete this._updateInsets;
return hw;
},__eP:null,clearSeparators:function(){var fF=this.__eP;

if(!fF){return;
}var fG=qx.ui.core.Widget.__eG;
var content=this.getContentElement();
var fE;

for(var i=0,l=fF.length;i<l;i++){fE=fF[i];
fG.poolDecorator(fE);
content.remove(fE);
}fF.length=0;
},renderSeparator:function(ba,bb){var bc=qx.ui.core.Widget.__eG.getDecoratorElement(ba);
this.getContentElement().add(bc);
bc.resize(bb.width,bb.height);
bc.setStyles({left:bb.left+ek,top:bb.top+ek});
if(!this.__eP){this.__eP=[bc];
}else{this.__eP.push(bc);
}},_computeSizeHint:function(){var hL=this.getWidth();
var hK=this.getMinWidth();
var hG=this.getMaxWidth();
var hJ=this.getHeight();
var hH=this.getMinHeight();
var hI=this.getMaxHeight();

if(qx.core.Variant.isSet(ei,em)){if(hK!==null&&hG!==null){this.assert(hK<=hG,eC);
}
if(hH!==null&&hI!==null){this.assert(hH<=hI,cW);
}}var hM=this._getContentHint();
var hF=this.getInsets();
var hO=hF.left+hF.right;
var hN=hF.top+hF.bottom;

if(hL==null){hL=hM.width+hO;
}
if(hJ==null){hJ=hM.height+hN;
}
if(hK==null){hK=hO;

if(hM.minWidth!=null){hK+=hM.minWidth;
}}
if(hH==null){hH=hN;

if(hM.minHeight!=null){hH+=hM.minHeight;
}}
if(hG==null){if(hM.maxWidth==null){hG=Infinity;
}else{hG=hM.maxWidth+hO;
}}
if(hI==null){if(hM.maxHeight==null){hI=Infinity;
}else{hI=hM.maxHeight+hN;
}}return {width:hL,minWidth:hK,maxWidth:hG,height:hJ,minHeight:hH,maxHeight:hI};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__eN){this.__eN.invalidateLayoutCache();
}},_getContentHint:function(){var gc=this.__eN;

if(gc){if(this.hasLayoutChildren()){var gd=gc.getSizeHint();

if(qx.core.Variant.isSet(ei,em)){var gb=dq+gc.toString()+cr+this.toString()+dz;
this.assertInteger(gd.width,ex+gb);
this.assertInteger(gd.height,eH+gb);
}return gd;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(c){var h=this.getInsets();
var m=h.left+h.right;
var k=h.top+h.bottom;
var j=c-m;
var f=this._getLayout();

if(f&&f.hasHeightForWidth()){var d=f.getHeightForWidth(c);
}else{d=this._getContentHeightForWidth(j);
}var g=d+k;
return g;
},_getContentHeightForWidth:function(gT){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var fx=this.getPaddingRight();
var fz=this.getPaddingBottom();
var fy=this.getPaddingLeft();

if(this.__eI){var fw=this.__eI.getInsets();

if(qx.core.Variant.isSet(ei,em)){this.assertNumber(fw.top,cp+fw.top);
this.assertNumber(fw.right,dD+fw.right);
this.assertNumber(fw.bottom,dG+fw.bottom);
this.assertNumber(fw.left,eM+fw.left);
}top+=fw.top;
fx+=fw.right;
fz+=fw.bottom;
fy+=fw.left;
}return {"top":top,"right":fx,"bottom":fz,"left":fy};
},getInnerSize:function(){var gX=this.getBounds();

if(!gX){return null;
}var gW=this.getInsets();
return {width:gX.width-gW.left-gW.right,height:gX.height-gW.top-gW.bottom};
},show:function(){this.setVisibility(ej);
},hide:function(){this.setVisibility(dl);
},exclude:function(){this.setVisibility(ed);
},isVisible:function(){return this.getVisibility()===ej;
},isHidden:function(){return this.getVisibility()!==ej;
},isExcluded:function(){return this.getVisibility()===ed;
},isSeeable:function(){var y=this.getContainerElement().getDomElement();

if(y){return y.offsetWidth>0;
}var x=this;

do{if(!x.isVisible()){return false;
}
if(x.isRootWidget()){return true;
}x=x.getLayoutParent();
}while(x);
return false;
},_createContainerElement:function(){var fr={"$$widget":this.toHashCode()};

if(qx.core.Variant.isSet(ei,em)){fr.qxType=dY;
fr.qxClass=this.classname;
}var fq={zIndex:0,position:eq};
return new qx.html.Element(ev,fq,fr);
},__eQ:function(){var gs=this._createContentElement();

if(qx.core.Variant.isSet(ei,em)){gs.setAttribute(bU,eG);
}gs.setStyles({"position":eq,"zIndex":10});
return gs;
},_createContentElement:function(){return new qx.html.Element(ev,{overflowX:dl,overflowY:dl});
},getContainerElement:function(){return this.__eD;
},getContentElement:function(){return this.__eE;
},getDecoratorElement:function(){return this.__eI||null;
},getShadowElement:function(){return this.__eJ||null;
},__eR:null,getLayoutChildren:function(){var fo=this.__eR;

if(!fo){return this.__eS;
}var fp;

for(var i=0,l=fo.length;i<l;i++){var fn=fo[i];

if(fn.hasUserBounds()||fn.isExcluded()){if(fp==null){fp=fo.concat();
}qx.lang.Array.remove(fp,fn);
}}return fp||fo;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var gr=this.__eN;

if(gr){gr.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var eQ=this.__eR;

if(!eQ){return false;
}var eR;

for(var i=0,l=eQ.length;i<l;i++){eR=eQ[i];

if(!eR.hasUserBounds()&&!eR.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__eS:[],_getChildren:function(){return this.__eR||this.__eS;
},_indexOf:function(v){var w=this.__eR;

if(!w){return -1;
}return w.indexOf(v);
},_hasChildren:function(){var Y=this.__eR;
return Y!=null&&(!!Y[0]);
},addChildrenToQueue:function(fK){var fL=this.__eR;

if(!fL){return;
}var fM;

for(var i=0,l=fL.length;i<l;i++){fM=fL[i];
fK[fM.$$hash]=fM;
fM.addChildrenToQueue(fK);
}},_add:function(fj,fk){if(fj.getLayoutParent()==this){qx.lang.Array.remove(this.__eR,fj);
}
if(this.__eR){this.__eR.push(fj);
}else{this.__eR=[fj];
}this.__eT(fj,fk);
},_addAt:function(fA,fB,fC){if(!this.__eR){this.__eR=[];
}if(fA.getLayoutParent()==this){qx.lang.Array.remove(this.__eR,fA);
}var fD=this.__eR[fB];

if(fD===fA){return fA.setLayoutProperties(fC);
}
if(fD){qx.lang.Array.insertBefore(this.__eR,fA,fD);
}else{this.__eR.push(fA);
}this.__eT(fA,fC);
},_addBefore:function(gC,gD,gE){if(qx.core.Variant.isSet(ei,em)){this.assertInArray(gD,this._getChildren(),cw);
}
if(gC==gD){return;
}
if(!this.__eR){this.__eR=[];
}if(gC.getLayoutParent()==this){qx.lang.Array.remove(this.__eR,gC);
}qx.lang.Array.insertBefore(this.__eR,gC,gD);
this.__eT(gC,gE);
},_addAfter:function(R,S,T){if(qx.core.Variant.isSet(ei,em)){this.assertInArray(S,this._getChildren(),ct);
}
if(R==S){return;
}
if(!this.__eR){this.__eR=[];
}if(R.getLayoutParent()==this){qx.lang.Array.remove(this.__eR,R);
}qx.lang.Array.insertAfter(this.__eR,R,S);
this.__eT(R,T);
},_remove:function(t){if(!this.__eR){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__eR,t);
this.__eU(t);
},_removeAt:function(p){if(!this.__eR){throw new Error("This widget has no children!");
}var q=this.__eR[p];
qx.lang.Array.removeAt(this.__eR,p);
this.__eU(q);
return q;
},_removeAll:function(){if(!this.__eR){return;
}var fS=this.__eR.concat();
this.__eR.length=0;

for(var i=fS.length-1;i>=0;i--){this.__eU(fS[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__eT:function(gO,gP){if(qx.core.Variant.isSet(ei,em)){this.assertInstance(gO,qx.ui.core.LayoutItem,dE+gO);
this.assertNotIdentical(gO,this,cG+gO);

if(gP!=null){this.assertType(gP,dH,cF+gP);
}}var parent=gO.getLayoutParent();

if(parent&&parent!=this){parent._remove(gO);
}gO.setLayoutParent(this);
if(gP){gO.setLayoutProperties(gP);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(gO);
}},__eU:function(fX){if(qx.core.Variant.isSet(ei,em)){this.assertNotUndefined(fX);
}
if(fX.getLayoutParent()!==this){throw new Error("Remove Error: "+fX+" is not a child of this widget!");
}fX.setLayoutParent(null);
if(this.__eN){this.__eN.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(fX);
}},capture:function(fU){this.getContainerElement().capture(fU);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(n,o,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__eK){return;
}var eU=this.__eK=new qx.html.Element;

if(qx.core.Variant.isSet(ei,em)){eU.setAttribute(bU,cM);
}eU.setStyles({position:eq,top:0,left:0,zIndex:7});
var eV=this.getBounds();

if(eV){this.__eK.setStyles({width:eV.width+ek,height:eV.height+ek});
}if(qx.core.Variant.isSet(es,eu)){eU.setStyles({backgroundImage:cT+qx.util.ResourceManager.getInstance().toUri(ez)+cU,backgroundRepeat:cf});
}this.getContainerElement().add(eU);
},_applyDecorator:function(gF,gG){if(qx.core.Variant.isSet(ei,em)){if(gF&&typeof gF===dH){if(qx.ui.core.Widget.DEBUG){this.warn("Decorator instances may increase memory usage and processing time. Often it is better to lay them out to a theme file. Hash code of decorator object: "+gF);
}}}var gJ=qx.ui.core.Widget.__eG;
var gH=this.getContainerElement();
if(!this.__eK&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(gG){gH.remove(this.__eI);
gJ.poolDecorator(this.__eI);
}if(gF){var gI=this.__eI=gJ.getDecoratorElement(gF);
gI.setStyle(dI,5);
gH.add(gI);
}else{delete this.__eI;
}this._applyBackgroundColor(this.getBackgroundColor());
this._applyOpacity(this.getOpacity());
if(this.__eO(gG,gF)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(gF){var gK=this.getBounds();

if(gK){gI.resize(gK.width,gK.height);
this.__eK&&
this.__eK.setStyles({width:gK.width+ek,height:gK.height+ek});
}}},_applyShadow:function(F,G){var N=qx.ui.core.Widget.__eH;
var I=this.getContainerElement();
if(G){I.remove(this.__eJ);
N.poolDecorator(this.__eJ);
}if(F){var K=this.__eJ=N.getDecoratorElement(F);
I.add(K);
var M=K.getInsets();
K.setStyles({left:(-M.left)+ek,top:(-M.top)+ek});
var L=this.getBounds();

if(L){var J=L.width+M.left+M.right;
var H=L.height+M.top+M.bottom;
K.resize(J,H);
}K.tint(null);
}else{delete this.__eJ;
}},_applyToolTipText:function(hX,hY){if(qx.core.Variant.isSet(dM,em)){if(this.__eM){return;
}var ia=qx.locale.Manager.getInstance();
this.__eM=ia.addListener(eD,function(){if(hX&&hX.translate){this.setToolTipText(hX.translate());
}},this);
}},_applyTextColor:function(fN,fO){},_applyTransition:function(ig,ih){var ii=ih&&ih.controlsOpacity();

if(this.getTransparentVisibility()!=ej){if(ig){if(!ii&&ig.controlsOpacity()){this.addListener(dN,this.__ut);
this.addListener(bX,this.__uu);
}}else if(ii){this.removeListener(dN,this.__onTransitionEndOpacityHelper);
this.removeListener(bX,this.__uu);
}}
if(ig){ig=ig.getStyle();
}this.getContainerElement().setStyle(ck,ig);
},__ut:function(e){if(e.getProperty()!=di){return;
}
if(this.getOpacity()==0){this.setVisibility(this.getTransparentVisibility());
}},__uu:function(e){if(this.getOpacity()!=0&&this.getTransparentVisibility()!=ej){this._applyOpacity(this.getOpacity());
}},_applyTransparentVisibility:function(P,Q){},_applyOpacity:function(hb,hc){if(hc==0&&this.getTransparentVisibility()!=ej&&!this.isVisible()){this.show();
return;
}this.getContainerElement().setStyle(di,hb==1?null:hb);

if(qx.core.Variant.isSet(es,eu)){if(this.__eI){this.__eI.setStyle(di,hb==1?null:hb);
}if(qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var hd=(hb==1||hb==null)?null:0.99;
this.getContentElement().setStyle(di,hd);
}}}},_applyTransform:function(r,s){this.getContainerElement().setStyle(cj,r==null?null:r.getStyle());
},_applyZIndex:function(fY,ga){this.getContainerElement().setStyle(dI,fY==null?0:fY);
},_applyVisibility:function(bd,be){var bf=this.getContainerElement();

if(bd===ej){bf.show();
}else{bf.hide();
}var parent=this.$$parent;

if(parent&&(be==null||bd==null||be===ed||bd===ed)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyCursor:function(gA,gB){if(gA==null&&!this.isSelectable()){gA=bS;
}this.getContainerElement().setStyle(cO,gA,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(ge,gf){var gg=this.getBackgroundColor();
var gi=this.getContainerElement();

if(this.__eI){this.__eI.tint(gg);
gi.setStyle(en,null);
}else{var gh=qx.theme.manager.Color.getInstance().resolve(gg);
gi.setStyle(en,gh);
}},_applyFont:function(fV,fW){},__eV:null,$$stateChanges:null,_forwardStates:null,hasState:function(bH){var bI=this.__eV;
return !!bI&&!!bI[bH];
},addState:function(he){var hf=this.__eV;

if(!hf){hf=this.__eV={};
}
if(hf[he]){return;
}this.__eV[he]=true;
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var hi=this.__eY;

if(forward&&forward[he]&&hi){var hg;

for(var hh in hi){hg=hi[hh];

if(hg instanceof qx.ui.core.Widget){hi[hh].addState(he);
}}}},removeState:function(hy){var hz=this.__eV;

if(!hz||!hz[hy]){return;
}delete this.__eV[hy];
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var hC=this.__eY;

if(forward&&forward[hy]&&hC){for(var hB in hC){var hA=hC[hB];

if(hA instanceof qx.ui.core.Widget){hA.removeState(hy);
}}}},replaceState:function(z,A){var B=this.__eV;

if(!B){B=this.__eV={};
}
if(!B[A]){B[A]=true;
}
if(B[z]){delete B[z];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var E=this.__eY;

if(forward&&forward[A]&&E){for(var D in E){var C=E[D];

if(C instanceof qx.ui.core.Widget){C.replaceState(z,A);
}}}},__eW:null,__eX:null,__uj:null,syncAppearance:function(){var bj=qx.theme.manager.Appearance.getInstance();
var bi=this.__eV;
var bw=this.__uj;
if(!bw){if(this.$$subparent){var bv=this;
var bl=[];

do{bl.push(bv.$$subcontrol||bv.getAppearance());
}while(bv=bv.$$subparent);
bw=bl.reverse().join(dT).replace(/#[0-9]+/g,bV);
}else{bw=this.getAppearance();
}}var bk=bV;

if(bi){var bm=qx.Bootstrap.getKeys(bi);
var bn=bm.length;

if(bn==1){bk=ep+bm[0];
}else if(bn>1){bk=ep+bm.sort().join(ep);
}}var bo=qx.ui.core.Widget.__eF;
var bq=bw+bk;
var bu=bo[bq];

if(!bu){bu=bo[bq]=bj.styleFrom(bw,bi,null,this.getAppearance());
var by;
var bg=qx.core.property.Group;

for(var bp in bu){var bx=qx.core.property.Util.getPropertyDefinition(this.constructor,bp);
if(bx.group){if(bx.shorthand){var bz=bu[bp];

if(bz instanceof Array){bu[bp]=bz.length==4?bz:bg.expandShortHand(bz);
}else{bu[bp]=[bz,bz,bz,bz];
}}by=bx.group;

for(var i=0,l=by.length;i<l;i++){var br=by[i];
var bt=bu[br];

if(bt===undefined||qx.lang.Object.findWinnerKey(bu,bp,br)===br){bu[by[i]]=bu[bp][i];
}}delete bu[bp];
}}}var bh=this.__eW;

if(bh){var bs=bo[bh];
}this.__eW=bq;
qx.core.property.Multi.importData(this,bu,bs,cz);
},getThemedValue:function(hT){var hU=this.__eW;
return hU?qx.ui.core.Widget.__eF[hU][hT]:undefined;
},getInheritedValue:function(ib){var ie=this.constructor;
var ic=ie.$$inheritables||qx.core.property.Multi.getInheritableProperties(ie);

if(ic[ib]){var parent=this.$$parent;
return parent&&parent.get(ib);
}},_applyAppearance:function(gn,go){this.debug("Appearance changed: "+go+" => "+gn);
this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__eL){qx.ui.core.queue.Appearance.add(this);
this.__eL=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__eX=true;
qx.ui.core.queue.Appearance.add(this);
var fd=this.__eY;

if(fd){var fb;

for(var fc in fd){fb=fd[fc];

if(fb instanceof qx.ui.core.Widget){fb.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var gq=this;

while(gq.getAnonymous()){gq=gq.getLayoutParent();

if(!gq){return null;
}}return gq;
},getFocusTarget:function(){var O=this;

if(!O.getEnabled()){return null;
}
while(O.getAnonymous()||!O.getFocusable()){O=O.getLayoutParent();

if(!O||!O.getEnabled()){return null;
}}return O;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(U,V){var W=this.getFocusElement();
if(U){var X=this.getTabIndex();

if(X==null){X=1;
}W.setAttribute(df,X);
if(qx.core.Variant.isSet(es,eu)){W.setAttribute(cq,dA);
}else{W.setStyle(cn,co);
}}else{if(W.isNativelyFocusable()){W.setAttribute(df,-1);
}else if(V){W.setAttribute(df,null);
}}},_applyKeepFocus:function(hP){var hQ=this.getFocusElement();
hQ.setAttribute(dW,hP?em:null);
},_applyKeepActive:function(gR){var gS=this.getContainerElement();
gS.setAttribute(dS,gR?em:null);
},_applyTabIndex:function(gp){if(gp==null){gp=1;
}else if(gp<1||gp>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&gp!=null){this.getFocusElement().setAttribute(df,gp);
}},_applySelectable:function(eO,eP){if(eP!==null){this._applyCursor(this.getCursor());
}this.getContainerElement().setSelectable(eO);
this.getContentElement().setSelectable(eO);
},_applyEnabled:function(gY,ha){if(gY===false){this.addState(ew);
this.removeState(cR);
if(this.isFocusable()){this.removeState(dc);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(ew);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(bQ,bR,name){},_applyContextMenu:function(gt,gu){if(gu){gu.removeState(dh);

if(gu.getOpener()==this){gu.resetOpener();
}
if(!gt){this.removeListener(dh,this._onContextMenuOpen);
gu.removeListener(et,this._onBeforeContextMenuOpen,this);
}}
if(gt){gt.setOpener(this);
gt.addState(dh);

if(!gu){this.addListener(dh,this._onContextMenuOpen);
gt.addListener(et,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==ej&&this.hasListener(bY)){this.fireDataEvent(bY,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(eS,eT){if(!this.isEnabled()&&eS===true){eS=false;
}qx.ui.core.DragDropCursor.getInstance();
if(eS){this.addListener(dJ,this._onDragStart);
this.addListener(eo,this._onDrag);
this.addListener(dO,this._onDragEnd);
this.addListener(dL,this._onDragChange);
}else{this.removeListener(dJ,this._onDragStart);
this.removeListener(eo,this._onDrag);
this.removeListener(dO,this._onDragEnd);
this.removeListener(dL,this._onDragChange);
}this.getContainerElement().setAttribute(ci,eS?em:null);
},_applyDroppable:function(fu,fv){if(!this.isEnabled()&&fu===true){fu=false;
}this.getContainerElement().setAttribute(db,fu?em:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bS);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var hR=qx.ui.core.DragDropCursor.getInstance();
var hS=e.getCurrentAction();
hS?hR.setAction(hS):hR.resetAction();
},visualizeFocus:function(){this.addState(dc);
},visualizeBlur:function(){this.removeState(dc);
},scrollChildIntoView:function(bA,bB,bC,bD){this.scrollChildIntoViewX(bA,bB,bD);
this.scrollChildIntoViewY(bA,bC,bD);
},scrollChildIntoViewX:function(fP,fQ,fR){this.getContentElement().scrollChildIntoViewX(fP.getContainerElement(),fQ,fR);
},scrollChildIntoViewY:function(gL,gM,gN){this.getContentElement().scrollChildIntoViewY(gL.getContainerElement(),gM,gN);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(u){if(!this.__eY){return false;
}return !!this.__eY[u];
},__eY:null,_getCreatedChildControls:function(){return this.__eY;
},getChildControl:function(bE,bF){if(!this.__eY){if(bF){return null;
}this.__eY={};
}var bG=this.__eY[bE];

if(bG){return bG;
}
if(bF===true){return null;
}return this._createChildControl(bE);
},_showChildControl:function(fe){var ff=this.getChildControl(fe);
ff.show();
return ff;
},_excludeChildControl:function(fI){var fJ=this.getChildControl(fI,true);

if(fJ){fJ.exclude();
}},_isChildControlVisible:function(gl){var gm=this.getChildControl(gl,true);

if(gm){return gm.isVisible();
}return false;
},_createChildControl:function(gv){if(!this.__eY){this.__eY={};
}else if(this.__eY[gv]){throw new Error("Child control '"+gv+"' already created!");
}var gz=gv.indexOf(cN);

if(gz==-1){var gw=this._createChildControlImpl(gv);
}else{var gw=this._createChildControlImpl(gv.substring(0,gz));
}
if(!gw){throw new Error("Unsupported control: "+gv);
}gw.$$subcontrol=gv;
gw.$$subparent=this;
var gx=this.__eV;
var forward=this._forwardStates;

if(gx&&forward&&gw instanceof qx.ui.core.Widget){for(var gy in gx){if(forward[gy]){gw.addState(gy);
}}}this.fireDataEvent(eI,gw);
return this.__eY[gv]=gw;
},_createChildControlImpl:function(gQ){return null;
},_disposeChildControls:function(){var bM=this.__eY;

if(!bM){return;
}var bK=qx.ui.core.Widget;

for(var bL in bM){var bJ=bM[bL];

if(!bK.contains(this,bJ)){bJ.destroy();
}else{bJ.dispose();
}}delete this.__eY;
},_findTopControl:function(){var fH=this;

while(fH){if(!fH.$$subparent){return fH;
}fH=fH.$$subparent;
}return null;
},getContainerLocation:function(hV){var hW=this.getContainerElement().getDomElement();
return hW?qx.bom.element.Location.get(hW,hV):null;
},getContentLocation:function(fl){var fm=this.getContentElement().getDomElement();
return fm?qx.bom.element.Location.get(fm,fl):null;
},setDomLeft:function(hj){var hk=this.getContainerElement().getDomElement();

if(hk){hk.style.left=hj+ek;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(gU){var gV=this.getContainerElement().getDomElement();

if(gV){gV.style.top=gU+ek;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(bN,top){var bO=this.getContainerElement().getDomElement();

if(bO){bO.style.left=bN+ek;
bO.style.top=top+ek;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var fs=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var ft=this.getChildren();

for(var i=0,l=ft.length;i<l;i++){fs.add(ft[i].clone());
}}return fs;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(dM,em)){if(this.__eM){qx.locale.Manager.getInstance().removeListenerById(this.__eM);
}}this.getContainerElement().setAttribute(cP,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var gk=qx.ui.core.Widget;
var gj=this.getContainerElement();

if(this.__eI){gj.remove(this.__eI);
gk.__eG.poolDecorator(this.__eI);
}
if(this.__eJ){gj.remove(this.__eJ);
gk.__eH.poolDecorator(this.__eJ);
}this.clearSeparators();
this.__eI=this.__eJ=this.__eP=null;
}else{this._disposeArray(cX);
this._disposeObjects(cg,eN);
}this._disposeArray(ch);
this.__eV=this.__eY=null;
this._disposeObjects(du,eK,eA,ca);
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
(function(){var w="on",v="element",u="qx.debug",t="qx.client",s="capture",r="qxSelectable",q="off",p="': ",o="Invalid context for callback.",n="div",bd="'",bc="Invalid event type.",bb="releaseCapture",ba="Invalid callback function",Y="",X="mshtml",W="none",V="scroll",U="text",T="|bubble|",F="qx.html.Element",G="|capture|",D="Invalid capture flag.",E="focus",B="Failed to add event listener for type '",C="blur",z="deactivate",A="userSelect",H=" from the target '",I="-moz-none",L="visible",K="__cG",N="tabIndex",M="activate",P="MozUserSelect",O="normal",J=" to the target '",S="Failed to remove event listener for type '",R="Invalid capture falg.",Q="hidden";
qx.Class.define(F,{extend:qx.core.Object,construct:function(cP,cQ,cR){qx.core.Object.call(this);
this.__ck=cP||n;
this.__cl=cQ||null;
this.__cm=cR||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__cn:{},_scheduleFlush:function(eb){qx.html.Element.__cR.schedule();
},flush:function(){var cB;

if(qx.core.Variant.isSet(u,w)){if(this.DEBUG){qx.log.Logger.debug(this,"Flushing elements...");
}}var cs=this.__co();
var cr=cs.getFocus();

if(cr&&this.__cs(cr)){cs.blur(cr);
}var cI=cs.getActive();

if(cI&&this.__cs(cI)){cs.deactivate(cI);
}var cv=this.__cq();

if(cv&&this.__cs(cv)){qx.event.Registration.getManager(cv).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(cv);
}var cC=[];
var cD=this._modified;

for(var cA in cD){cB=cD[cA];
if(cB.__cK()){if(cB.__ct&&qx.dom.Hierarchy.isRendered(cB.__ct)){cC.push(cB);
}else{if(qx.core.Variant.isSet(u,w)){if(this.DEBUG){cB.debug("Flush invisible element");
}}cB.__cJ();
}delete cD[cA];
}}
for(var i=0,l=cC.length;i<l;i++){cB=cC[i];

if(qx.core.Variant.isSet(u,w)){if(this.DEBUG){cB.debug("Flush rendered element");
}}cB.__cJ();
}var cy=this._visibility;

for(var cA in cy){cB=cy[cA];
var cE=cB.__ct;

if(!cE){delete cy[cA];
continue;
}
if(qx.core.Variant.isSet(u,w)){if(this.DEBUG){qx.log.Logger.debug(this,"Switching visibility to: "+cB.__cw);
}}if(!cB.$$disposed){cE.style.display=cB.__cw?Y:W;
if(qx.core.Variant.isSet(t,X)){if(!(document.documentMode>=8)){cE.style.visibility=cB.__cw?L:Q;
}}}delete cy[cA];
}var scroll=this._scroll;

for(var cA in scroll){cB=scroll[cA];
var cJ=cB.__ct;

if(cJ&&cJ.offsetWidth){var cu=true;
if(cB.__cz!=null){cB.__ct.scrollLeft=cB.__cz;
delete cB.__cz;
}if(cB.__cA!=null){cB.__ct.scrollTop=cB.__cA;
delete cB.__cA;
}var cF=cB.__cx;

if(cF!=null){var cz=cF.element.getDomElement();

if(cz&&cz.offsetWidth){qx.bom.element.Scroll.intoViewX(cz,cJ,cF.align);
delete cB.__cx;
}else{cu=false;
}}var cG=cB.__cy;

if(cG!=null){var cz=cG.element.getDomElement();

if(cz&&cz.offsetWidth){qx.bom.element.Scroll.intoViewY(cz,cJ,cG.align);
delete cB.__cy;
}else{cu=false;
}}if(cu){delete scroll[cA];
}}}var ct={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var cH=this._actions[i];
var cE=cH.element.__ct;

if(!cE||!ct[cH.type]&&!cH.element.__cK()){continue;
}var cx=cH.args;
cx.unshift(cE);

if(cH.type==s||cH.type==bb){var cw=qx.event.Registration.getManager(cE).getDispatcher(qx.event.dispatch.MouseCapture);

if(cH.type==s){cw.activateCapture(cE);
}else{cw.releaseCapture(cE);
}}else{var cs=qx.event.Registration.getManager(cE).getHandler(qx.event.handler.Focus);
cs[cH.type](cE);
}}this._actions=[];
for(var cA in this.__cn){var cq=this.__cn[cA];
var cJ=cq.element.__ct;

if(cJ){qx.bom.Selection.set(cJ,cq.start,cq.end);
delete this.__cn[cA];
}}qx.event.handler.Appear.refresh();
},__co:function(){if(!this.__cp){var be=qx.event.Registration.getManager(window);
this.__cp=be.getHandler(qx.event.handler.Focus);
}return this.__cp;
},__cq:function(){if(!this.__cr){var cb=qx.event.Registration.getManager(window);
this.__cr=cb.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__cr.getCaptureElement();
},__cs:function(dd){var de=qx.core.ObjectRegistry.fromHashCode(dd.$$element);
return de&&!de.__cK();
}},members:{__ck:null,__ct:null,__cu:false,__cv:true,__cw:true,__cx:null,__cy:null,__cz:null,__cA:null,__cB:null,__cC:null,__cD:null,__cl:null,__cm:null,__cE:null,__cF:null,__cG:null,__cH:null,__cI:null,_scheduleChildrenUpdate:function(){if(this.__cH){return;
}this.__cH=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(v);
},_createDomElement:function(){return qx.bom.Element.create(this.__ck);
},__cJ:function(){if(qx.core.Variant.isSet(u,w)){if(this.DEBUG){this.debug("Flush: "+this.getAttribute("id"));
}}var dQ=this.__cG;

if(dQ){var length=dQ.length;
var dR;

for(var i=0;i<length;i++){dR=dQ[i];

if(dR.__cw&&dR.__cv&&!dR.__ct){dR.__cJ();
}}}
if(!this.__ct){this.__ct=this._createDomElement();
this.__ct.$$element=this.$$hash;
this._copyData(false);

if(dQ&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__cH){this._syncChildren();
}}delete this.__cH;
},_insertChildren:function(){var dA=this.__cG;
var length=dA.length;
var dC;

if(length>2){var dB=document.createDocumentFragment();

for(var i=0;i<length;i++){dC=dA[i];

if(dC.__ct&&dC.__cv){dB.appendChild(dC.__ct);
}}this.__ct.appendChild(dB);
}else{var dB=this.__ct;

for(var i=0;i<length;i++){dC=dA[i];

if(dC.__ct&&dC.__cv){dB.appendChild(dC.__ct);
}}}},_syncChildren:function(){var m=qx.core.ObjectRegistry;
var a=this.__cG;
var j=a.length;
var b;
var g;
var d=this.__ct;
var h=d.childNodes;
var c=0;
var f;

if(qx.core.Variant.isSet(u,w)){var k=0;
}for(var i=h.length-1;i>=0;i--){f=h[i];
g=m.fromHashCode(f.$$element);

if(!g||!g.__cv||g.__cI!==this){d.removeChild(f);

if(qx.core.Variant.isSet(u,w)){k++;
}}}for(var i=0;i<j;i++){b=a[i];
if(b.__cv){g=b.__ct;
f=h[c];

if(!g){continue;
}if(g!=f){if(f){d.insertBefore(g,f);
}else{d.appendChild(g);
}
if(qx.core.Variant.isSet(u,w)){k++;
}}c++;
}}if(qx.core.Variant.isSet(u,w)){if(qx.html.Element.DEBUG){this.debug("Synced DOM with "+k+" operations");
}}},_copyData:function(bC){var bG=this.__ct;
var bF=this.__cm;

if(bF){var bD=qx.bom.element.Attribute;

for(var bH in bF){bD.set(bG,bH,bF[bH]);
}}var bF=this.__cl;

if(bF){var bE=qx.bom.element.Style;

if(bC){bE.setStyles(bG,bF);
}else{bE.setCss(bG,bE.compile(bF));
}}var bF=this.__cE;

if(bF){for(var bH in bF){this._applyProperty(bH,bF[bH]);
}}var bF=this.__cF;

if(bF){qx.event.Registration.getManager(bG).importListeners(bG,bF);
delete this.__cF;
}},_syncData:function(){var dM=this.__ct;
var dL=qx.bom.element.Attribute;
var dJ=qx.bom.element.Style;
var dK=this.__cC;

if(dK){var dP=this.__cm;

if(dP){var dN;

for(var dO in dK){dN=dP[dO];

if(dN!==undefined){dL.set(dM,dO,dN);
}else{dL.reset(dM,dO);
}}}this.__cC=null;
}var dK=this.__cB;

if(dK){var dP=this.__cl;

if(dP){var dI={};

for(var dO in dK){dI[dO]=dP[dO];
}dJ.setStyles(dM,dI);
}this.__cB=null;
}var dK=this.__cD;

if(dK){var dP=this.__cE;

if(dP){var dN;

for(var dO in dK){this._applyProperty(dO,dP[dO]);
}}this.__cD=null;
}},__cK:function(){var bn=this;
while(bn){if(bn.__cu){return true;
}
if(!bn.__cv||!bn.__cw){return false;
}bn=bn.__cI;
}return false;
},__cL:function(cS){if(cS.__cI===this){throw new Error("Child is already in: "+cS);
}
if(cS.__cu){throw new Error("Root elements could not be inserted into other ones.");
}if(cS.__cI){cS.__cI.remove(cS);
}cS.__cI=this;
if(!this.__cG){this.__cG=[];
}if(this.__ct){this._scheduleChildrenUpdate();
}},__cM:function(dj){if(dj.__cI!==this){throw new Error("Has no child: "+dj);
}if(this.__ct){this._scheduleChildrenUpdate();
}delete dj.__cI;
},__cN:function(cK){if(cK.__cI!==this){throw new Error("Has no child: "+cK);
}if(this.__ct){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__cG||null;
},getChild:function(ci){var cj=this.__cG;
return cj&&cj[ci]||null;
},hasChildren:function(){var di=this.__cG;
return di&&di[0]!==undefined;
},indexOf:function(bA){var bB=this.__cG;
return bB?bB.indexOf(bA):-1;
},hasChild:function(ck){var cl=this.__cG;
return cl&&cl.indexOf(ck)!==-1;
},add:function(bT){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__cL(arguments[i]);
}this.__cG.push.apply(this.__cG,arguments);
}else{this.__cL(bT);
this.__cG.push(bT);
}return this;
},addAt:function(ei,ej){this.__cL(ei);
qx.lang.Array.insertAt(this.__cG,ei,ej);
return this;
},remove:function(dS){var dT=this.__cG;

if(!dT){return;
}
if(arguments[1]){var dU;

for(var i=0,l=arguments.length;i<l;i++){dU=arguments[i];
this.__cM(dU);
qx.lang.Array.remove(dT,dU);
}}else{this.__cM(dS);
qx.lang.Array.remove(dT,dS);
}return this;
},removeAt:function(bU){var bV=this.__cG;

if(!bV){throw new Error("Has no children!");
}var bW=bV[bU];

if(!bW){throw new Error("Has no child at this position!");
}this.__cM(bW);
qx.lang.Array.removeAt(this.__cG,bU);
return this;
},removeAll:function(){var dn=this.__cG;

if(dn){for(var i=0,l=dn.length;i<l;i++){this.__cM(dn[i]);
}dn.length=0;
}return this;
},getParent:function(){return this.__cI||null;
},insertInto:function(parent,bw){parent.__cL(this);

if(bw==null){parent.__cG.push(this);
}else{qx.lang.Array.insertAt(this.__cG,this,bw);
}return this;
},insertBefore:function(dD){var parent=dD.__cI;
parent.__cL(this);
qx.lang.Array.insertBefore(parent.__cG,this,dD);
return this;
},insertAfter:function(en){var parent=en.__cI;
parent.__cL(this);
qx.lang.Array.insertAfter(parent.__cG,this,en);
return this;
},moveTo:function(cd){var parent=this.__cI;
parent.__cN(this);
var ce=parent.__cG.indexOf(this);

if(ce===cd){throw new Error("Could not move to same index!");
}else if(ce<cd){cd--;
}qx.lang.Array.removeAt(parent.__cG,ce);
qx.lang.Array.insertAt(parent.__cG,this,cd);
return this;
},moveBefore:function(ek){var parent=this.__cI;
return this.moveTo(parent.__cG.indexOf(ek));
},moveAfter:function(cn){var parent=this.__cI;
return this.moveTo(parent.__cG.indexOf(cn)+1);
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
},setRoot:function(cT){this.__cu=cT;
},useMarkup:function(bi){if(this.__ct){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(t,X)){var bj=document.createElement(n);
}else{var bj=qx.bom.Element.getHelperElement();
}bj.innerHTML=bi;
this.useElement(bj.firstChild);
return this.__ct;
},useElement:function(bR){if(this.__ct){throw new Error("Could not overwrite existing element!");
}this.__ct=bR;
this.__ct.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var cg=this.getAttribute(N);

if(cg>=1){return true;
}var cf=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(cg>=0&&cf[this.__ck]){return true;
}return false;
},setSelectable:qx.core.Variant.select(t,{"webkit":function(dw){this.setAttribute(r,dw?w:q);
this.setStyle(A,dw?O:W);
},"gecko":function(eh){this.setAttribute(r,eh?w:q);
this.setStyle(P,eh?U:I);
},"default":function(bh){this.setAttribute(r,bh?w:q);
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
qx.html.Element._scheduleFlush(v);
}if(this.__cI){this.__cI._scheduleChildrenUpdate();
}delete this.__cw;
},hide:function(){if(!this.__cw){return;
}
if(this.__ct){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(v);
}this.__cw=false;
},isVisible:function(){return this.__cw===true;
},scrollChildIntoViewX:function(ec,ed,ee){var ef=this.__ct;
var eg=ec.getDomElement();

if(ee!==false&&ef&&ef.offsetWidth&&eg&&eg.offsetWidth){qx.bom.element.Scroll.intoViewX(eg,ef,ed);
}else{this.__cx={element:ec,align:ed};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(v);
}delete this.__cz;
},scrollChildIntoViewY:function(dq,dr,ds){var dt=this.__ct;
var du=dq.getDomElement();

if(ds!==false&&dt&&dt.offsetWidth&&du&&du.offsetWidth){qx.bom.element.Scroll.intoViewY(du,dt,dr);
}else{this.__cy={element:dq,align:dr};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(v);
}delete this.__cA;
},scrollToX:function(x,co){var cp=this.__ct;

if(co!==true&&cp&&cp.offsetWidth){cp.scrollLeft=x;
}else{this.__cz=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(v);
}delete this.__cx;
},getScrollX:function(){var dc=this.__ct;

if(dc){return dc.scrollLeft;
}return this.__cz||0;
},scrollToY:function(y,dg){var dh=this.__ct;

if(dg!==true&&dh&&dh.offsetWidth){dh.scrollTop=y;
}else{this.__cA=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(v);
}delete this.__cy;
},getScrollY:function(){var dE=this.__ct;

if(dE){return dE.scrollTop;
}return this.__cA||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(V,this.__cP,this);
},enableScrolling:function(){this.removeListener(V,this.__cP,this);
},__cO:null,__cP:function(e){if(!this.__cO){this.__cO=true;
this.__ct.scrollTop=0;
this.__ct.scrollLeft=0;
delete this.__cO;
}},getTextSelection:function(){var cc=this.__ct;

if(cc){return qx.bom.Selection.get(cc);
}return null;
},getTextSelectionLength:function(){var dv=this.__ct;

if(dv){return qx.bom.Selection.getLength(dv);
}return null;
},getTextSelectionStart:function(){var bo=this.__ct;

if(bo){return qx.bom.Selection.getStart(bo);
}return null;
},getTextSelectionEnd:function(){var bS=this.__ct;

if(bS){return qx.bom.Selection.getEnd(bS);
}return null;
},setTextSelection:function(dk,dl){var dm=this.__ct;

if(dm){qx.bom.Selection.set(dm,dk,dl);
return;
}qx.html.Element.__cn[this.toHashCode()]={element:this,start:dk,end:dl};
qx.html.Element._scheduleFlush(v);
},clearTextSelection:function(){var cL=this.__ct;

if(cL){qx.bom.Selection.clear(cL);
}delete qx.html.Element.__cn[this.toHashCode()];
},__cQ:function(bx,by){var bz=qx.html.Element._actions;
bz.push({type:bx,element:this,args:by||[]});
qx.html.Element._scheduleFlush(v);
},focus:function(){this.__cQ(E);
},blur:function(){this.__cQ(C);
},activate:function(){this.__cQ(M);
},deactivate:function(){this.__cQ(z);
},capture:function(df){this.__cQ(s,[df!==false]);
},releaseCapture:function(){this.__cQ(bb);
},setStyle:function(dx,dy,dz){if(!this.__cl){this.__cl={};
}
if(this.__cl[dx]==dy){return;
}
if(dy==null){delete this.__cl[dx];
}else{this.__cl[dx]=dy;
}if(this.__ct){if(dz){qx.bom.element.Style.set(this.__ct,dx,dy);
return this;
}if(!this.__cB){this.__cB={};
}this.__cB[dx]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(v);
}return this;
},setStyles:function(dV,dW){var dX=qx.bom.element.Style;

if(!this.__cl){this.__cl={};
}
if(this.__ct){if(!this.__cB){this.__cB={};
}
for(var ea in dV){var dY=dV[ea];

if(this.__cl[ea]==dY){continue;
}
if(dY==null){delete this.__cl[ea];
}else{this.__cl[ea]=dY;
}if(dW){dX.set(this.__ct,ea,dY);
continue;
}this.__cB[ea]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(v);
}else{for(var ea in dV){var dY=dV[ea];

if(this.__cl[ea]==dY){continue;
}
if(dY==null){delete this.__cl[ea];
}else{this.__cl[ea]=dY;
}}}return this;
},removeStyle:function(bf,bg){this.setStyle(bf,null,bg);
},getStyle:function(cm){return this.__cl?this.__cl[cm]:null;
},getAllStyles:function(){return this.__cl||null;
},setAttribute:function(bX,bY,ca){if(!this.__cm){this.__cm={};
}
if(this.__cm[bX]==bY){return;
}
if(bY==null){delete this.__cm[bX];
}else{this.__cm[bX]=bY;
}if(this.__ct){if(ca){qx.bom.element.Attribute.set(this.__ct,bX,bY);
return this;
}if(!this.__cC){this.__cC={};
}this.__cC[bX]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(v);
}return this;
},setAttributes:function(dF,dG){for(var dH in dF){this.setAttribute(dH,dF[dH],dG);
}return this;
},removeAttribute:function(bP,bQ){this.setAttribute(bP,null,bQ);
},getAttribute:function(em){return this.__cm?this.__cm[em]:null;
},_applyProperty:function(name,dp){},_setProperty:function(cM,cN,cO){if(!this.__cE){this.__cE={};
}
if(this.__cE[cM]==cN){return;
}
if(cN==null){delete this.__cE[cM];
}else{this.__cE[cM]=cN;
}if(this.__ct){if(cO){this._applyProperty(cM,cN);
return this;
}if(!this.__cD){this.__cD={};
}this.__cD[cM]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(v);
}return this;
},_removeProperty:function(eo,ep){this._setProperty(eo,null,ep);
},_getProperty:function(bk){var bl=this.__cE;

if(!bl){return null;
}var bm=bl[bk];
return bm==null?null:bm;
},addListener:function(cU,cV,self,cW){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(u,w)){var cX=B+cU+bd+J+this+p;
this.assertString(cU,cX+bc);
this.assertFunction(cV,cX+ba);

if(self!==undefined){this.assertObject(self,o);
}
if(cW!==undefined){this.assertBoolean(cW,R);
}}
if(this.__ct){return qx.event.Registration.addListener(this.__ct,cU,cV,self,cW);
}
if(!this.__cF){this.__cF={};
}
if(cW==null){cW=false;
}var cY=qx.event.Manager.getNextUniqueId();
var da=cU+(cW?G:T)+cY;
this.__cF[da]={type:cU,listener:cV,self:self,capture:cW,unique:cY};
return da;
},removeListener:function(bp,bq,self,br){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(u,w)){var bs=S+bp+bd+H+this+p;
this.assertString(bp,bs+bc);
this.assertFunction(bq,bs+ba);

if(self!==undefined){this.assertObject(self,o);
}
if(br!==undefined){this.assertBoolean(br,D);
}}
if(this.__ct){qx.event.Registration.removeListener(this.__ct,bp,bq,self,br);
}else{var bu=this.__cF;
var bt;

if(br==null){br=false;
}
for(var bv in bu){bt=bu[bv];
if(bt.listener===bq&&bt.self===self&&bt.capture===br&&bt.type===bp){delete bu[bv];
break;
}}}return this;
},removeListenerById:function(bN){if(this.$$disposed){return null;
}
if(this.__ct){qx.event.Registration.removeListenerById(this.__ct,bN);
}else{delete this.__cF[bN];
}return this;
},hasListener:function(bI,bJ){if(this.$$disposed){return false;
}
if(this.__ct){return qx.event.Registration.hasListener(this.__ct,bI,bJ);
}var bL=this.__cF;
var bK;

if(bJ==null){bJ=false;
}
for(var bM in bL){bK=bL[bM];
if(bK.capture===bJ&&bK.type===bI){return true;
}}return false;
}},defer:function(ch){ch.__cR=new qx.util.DeferredCall(ch.flush,ch);
},destruct:function(){var bO=this.__ct;

if(bO){qx.event.Registration.getManager(bO).removeAllListeners(bO);
bO.$$element=Y;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__cI;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(K);
this.__cm=this.__cl=this.__cF=this.__cE=this.__cC=this.__cB=this.__cD=this.__ct=this.__cI=this.__cx=this.__cy=null;
}});
})();
(function(){var d="qx.debug",c="on",b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__cS:false,__cT:{},__cU:0,MAX_RETRIES:10,scheduleFlush:function(i){var self=qx.ui.core.queue.Manager;
self.__cT[i]=true;

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
},__cW:qx.core.Variant.select(d,{"on":function(g,h){g();
h();
},"off":function(k,l){var self=qx.ui.core.queue.Manager;

try{k();
}catch(e){if(qx.core.Variant.isSet(d,c)){qx.log.Logger.error("Error while layout flush: "+e+"\n"+"Stack trace: \n"+qx.dev.StackTrace.getStackTraceFromError(e));
}self.__cS=false;
self.__cV=false;
self.__cU+=1;

if(self.__cU<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__cU-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{l();
}}})},defer:function(j){j.__cX=new qx.util.DeferredCall(j.flush);
qx.html.Element._scheduleFlush=j.scheduleFlush;
qx.event.Registration.addListener(window,a,j.flush);
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
(function(){var s="qx.client",r="",q="qx.debug",p="boxSizing",o="on",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",c="-moz-box-sizing",g="WebkitBoxSizing",f=";",b="-khtml-box-sizing",a="content-box",e="-webkit-box-sizing",d="MozBoxSizing";
qx.Class.define(j,{statics:{__dO:qx.core.Variant.select(s,{"mshtml":null,"webkit":[p,h,g],"gecko":[d],"opera":[p]}),__dP:qx.core.Variant.select(s,{"mshtml":null,"webkit":[n,b,e],"gecko":[c],"opera":[n]}),__dQ:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dR:function(C){var D=this.__dQ;
return D.tags[C.tagName.toLowerCase()]||D.types[C.type];
},compile:qx.core.Variant.select(s,{"mshtml":function(H){if(qx.core.Variant.isSet(q,o)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
qx.log.Logger.trace();
}},"default":function(t){var v=this.__dP;
var u=r;

if(v){for(var i=0,l=v.length;i<l;i++){u+=v[i]+m+t+f;
}}return u;
}}),get:qx.core.Variant.select(s,{"mshtml":function(G){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(G))){if(!this.__dR(G)){return a;
}}return k;
},"default":function(z){var B=this.__dO;
var A;

if(B){for(var i=0,l=B.length;i<l;i++){A=qx.bom.element.Style.get(z,B[i],null,false);

if(A!=null&&A!==r){return A;
}}}return r;
}}),set:qx.core.Variant.select(s,{"mshtml":function(E,F){if(qx.core.Variant.isSet(q,o)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
}},"default":function(w,x){var y=this.__dO;

if(y){for(var i=0,l=y.length;i<l;i++){w.style[y[i]]=x;
}}}}),reset:function(I){this.set(I,r);
}}});
})();
(function(){var m="",k="qx.client",h="userSelect",g="qx.debug",f="on",e="Invalid argument 'smart'",d="style",c="Invalid argument 'element'",b="MozUserModify",a="px",N="float",M="borderImage",L="styleFloat",K="appearance",J="pixelHeight",I='Ms',H=":",G="cssFloat",F="pixelTop",E="Invalid argument 'name'",t="pixelLeft",u='O',r="textOverflow",s="Invalid argument 'styles'",p="qx.bom.element.Style",q='Khtml',n='string',o="pixelRight",v='Moz',w="pixelWidth",z="pixelBottom",y="transition",B=";",A="transform",D="userModify",C='Webkit',x="WebkitUserModify";
qx.Class.define(p,{statics:{__dS:function(){var O=[K,h,r,M,y,A];
var S={};
var P=document.documentElement.style;
var T=[v,C,q,u,I];

for(var i=0,l=O.length;i<l;i++){var U=O[i];
var Q=U;

if(P[U]){S[Q]=U;
continue;
}U=qx.lang.String.firstUp(U);

for(var j=0,V=T.length;j<V;j++){var R=T[j]+U;

if(typeof P[R]==n){S[Q]=R;
break;
}}}this.__dT=S;
this.__dT[D]=qx.core.Variant.select(k,{"gecko":b,"webkit":x,"default":h});
this.__dU={};

for(var Q in S){this.__dU[Q]=this.__dY(S[Q]);
}this.__dT[N]=qx.core.Variant.select(k,{"mshtml":L,"default":G});
},__dV:{width:w,height:J,left:t,right:o,top:F,bottom:z},__dW:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(bm){var bo=[];
var bq=this.__dW;
var bp=this.__dU;
var name,bn;

for(name in bm){bn=bm[name];

if(bn==null){continue;
}name=bp[name]||name;
if(bq[name]){bo.push(bq[name].compile(bn));
}else{bo.push(this.__dY(name),H,bn,B);
}}return bo.join(m);
},__dX:{},__dY:function(bH){var bI=this.__dX;
var bJ=bI[bH];

if(!bJ){bJ=bI[bH]=qx.lang.String.hyphenate(bH);
}return bJ;
},setCss:qx.core.Variant.select(k,{"mshtml":function(br,bs){br.style.cssText=bs;
},"default":function(X,Y){X.setAttribute(d,Y);
}}),getCss:qx.core.Variant.select(k,{"mshtml":function(W){return W.style.cssText.toLowerCase();
},"default":function(bA){return bA.getAttribute(d);
}}),isPropertySupported:function(bB){return (this.__dW[bB]||this.__dT[bB]||bB in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(ba,name,bb,bc){if(qx.core.Variant.isSet(g,f)){qx.core.Assert.assertElement(ba,c);
qx.core.Assert.assertString(name,E);

if(bc!==undefined){qx.core.Assert.assertBoolean(bc,e);
}}name=this.__dT[name]||name;
if(bc!==false&&this.__dW[name]){return this.__dW[name].set(ba,bb);
}else{ba.style[name]=bb!==null?bb:m;
}},setStyles:function(be,bf,bg){if(qx.core.Variant.isSet(g,f)){qx.core.Assert.assertElement(be,c);
qx.core.Assert.assertMap(bf,s);

if(bg!==undefined){qx.core.Assert.assertBoolean(bg,e);
}}var bj=this.__dT;
var bl=this.__dW;
var bh=be.style;

for(var bk in bf){var bi=bf[bk];
var name=bj[bk]||bk;

if(bi===undefined){if(bg!==false&&bl[name]){bl[name].reset(be);
}else{bh[name]=m;
}}else{if(bg!==false&&bl[name]){bl[name].set(be,bi);
}else{bh[name]=bi!==null?bi:m;
}}}},reset:function(bK,name,bL){name=this.__dT[name]||name;
if(bL!==false&&this.__dW[name]){return this.__dW[name].reset(bK);
}else{bK.style[name]=m;
}},get:qx.core.Variant.select(k,{"mshtml":function(bt,name,bu,bv){name=this.__dT[name]||name;
if(bv!==false&&this.__dW[name]){return this.__dW[name].get(bt,bu);
}if(!bt.currentStyle){return bt.style[name]||m;
}switch(bu){case this.LOCAL_MODE:return bt.style[name]||m;
case this.CASCADED_MODE:return bt.currentStyle[name]||m;
default:var bz=bt.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bz)){return bz;
}var by=this.__dV[name];

if(by){var bw=bt.style[name];
bt.style[name]=bz||0;
var bx=bt.style[by]+a;
bt.style[name]=bw;
return bx;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bz)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bz;
}},"default":function(bC,name,bD,bE){name=this.__dT[name]||name;
if(bE!==false&&this.__dW[name]){return this.__dW[name].get(bC,bD);
}switch(bD){case this.LOCAL_MODE:return bC.style[name]||m;
case this.CASCADED_MODE:if(bC.currentStyle){return bC.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bF=qx.dom.Node.getDocument(bC);
var bG=bF.defaultView.getComputedStyle(bC,null);
return bG?bG[name]:m;
}}})},defer:function(bd){bd.__dS();
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
(function(){var cE="get",cD="",cC="[",cB=".",cA="last",cz="change",cy="]",cx="Number",cw="String",cv="set",db="deepBinding",da="item",cY="reset",cX="qx.debug",cW="' (",cV="on",cU="Boolean",cT=") to the object '",cS="Integer",cR=" of object ",cL="qx.event.type.Data",cM="qx.data.SingleValueBinding",cJ="Binding property ",cK="Can not remove the bindings for null object!",cH="Binding from '",cI="PositiveNumber",cF=" not possible: No event available. ",cG="PositiveInteger",cN="Binding does not exist!",cO=" is not an data (qx.event.type.Data) event on ",cQ=").",cP="Date";
qx.Class.define(cM,{statics:{DEBUG_ON:false,__fn:{},bind:function(bg,bh,bi,bj,bk){var bu=this.__fp(bg,bh,bi,bj,bk);
var bp=bh.split(cB);
var bm=this.__fw(bp);
var bt=[];
var bq=[];
var br=[];
var bn=[];
var bo=bg;
for(var i=0;i<bp.length;i++){if(bm[i]!==cD){bn.push(cz);
}else{bn.push(this.__fr(bo,bp[i]));
}bt[i]=bo;
if(i==bp.length-1){if(bm[i]!==cD){var bx=bm[i]===cA?bo.length-1:bm[i];
var bl=bo.getItem(bx);
this.__fv(bl,bi,bj,bk,bg);
br[i]=this.__fx(bo,bn[i],bi,bj,bk,bm[i]);
}else{if(bp[i]!=null&&bo[cE+qx.lang.String.firstUp(bp[i])]!=null){var bl=bo[cE+qx.lang.String.firstUp(bp[i])]();
this.__fv(bl,bi,bj,bk,bg);
}br[i]=this.__fx(bo,bn[i],bi,bj,bk);
}}else{var bv={index:i,propertyNames:bp,sources:bt,listenerIds:br,arrayIndexValues:bm,targetObject:bi,targetPropertyChain:bj,options:bk,listeners:bq};
var bs=qx.lang.Function.bind(this.__fo,this,bv);
bq.push(bs);
br[i]=bo.addListener(bn[i],bs);
}if(bo[cE+qx.lang.String.firstUp(bp[i])]==null){bo=null;
}else if(bm[i]!==cD){bo=bo[cE+qx.lang.String.firstUp(bp[i])](bm[i]);
}else{bo=bo[cE+qx.lang.String.firstUp(bp[i])]();
}
if(!bo){break;
}}var bw={type:db,listenerIds:br,sources:bt,targetListenerIds:bu.listenerIds,targets:bu.targets};
this.__fy(bw,bg,bh,bi,bj);
return bw;
},__fo:function(H){if(H.options&&H.options.onUpdate){H.options.onUpdate(H.sources[H.index],H.targetObject);
}for(var j=H.index+1;j<H.propertyNames.length;j++){var L=H.sources[j];
H.sources[j]=null;

if(!L){continue;
}L.removeListenerById(H.listenerIds[j]);
}var L=H.sources[H.index];
for(var j=H.index+1;j<H.propertyNames.length;j++){if(H.arrayIndexValues[j-1]!==cD){L=L[cE+qx.lang.String.firstUp(H.propertyNames[j-1])](H.arrayIndexValues[j-1]);
}else{L=L[cE+qx.lang.String.firstUp(H.propertyNames[j-1])]();
}H.sources[j]=L;
if(!L){this.__fs(H.targetObject,H.targetPropertyChain);
break;
}if(j==H.propertyNames.length-1){if(qx.Class.implementsInterface(L,qx.data.IListData)){var M=H.arrayIndexValues[j]===cA?L.length-1:H.arrayIndexValues[j];
var J=L.getItem(M);
this.__fv(J,H.targetObject,H.targetPropertyChain,H.options,H.sources[H.index]);
H.listenerIds[j]=this.__fx(L,cz,H.targetObject,H.targetPropertyChain,H.options,H.arrayIndexValues[j]);
}else{if(H.propertyNames[j]!=null&&L[cE+qx.lang.String.firstUp(H.propertyNames[j])]!=null){var J=L[cE+qx.lang.String.firstUp(H.propertyNames[j])]();
this.__fv(J,H.targetObject,H.targetPropertyChain,H.options,H.sources[H.index]);
}var K=this.__fr(L,H.propertyNames[j]);
H.listenerIds[j]=this.__fx(L,K,H.targetObject,H.targetPropertyChain,H.options);
}}else{if(H.listeners[j]==null){var I=qx.lang.Function.bind(this.__fo,this,H);
H.listeners.push(I);
}if(qx.Class.implementsInterface(L,qx.data.IListData)){var K=cz;
}else{var K=this.__fr(L,H.propertyNames[j]);
}H.listenerIds[j]=L.addListener(K,H.listeners[j]);
}}},__fp:function(s,t,u,v,w){var A=v.split(cB);
var y=this.__fw(A);
var F=[];
var E=[];
var C=[];
var B=[];
var z=u;
for(var i=0;i<A.length-1;i++){if(y[i]!==cD){B.push(cz);
}else{try{B.push(this.__fr(z,A[i]));
}catch(e){break;
}}F[i]=z;
var D=function(){for(var j=i+1;j<A.length-1;j++){var bV=F[j];
F[j]=null;

if(!bV){continue;
}bV.removeListenerById(C[j]);
}var bV=F[i];
for(var j=i+1;j<A.length-1;j++){var bT=qx.lang.String.firstUp(A[j-1]);
if(y[j-1]!==cD){var bW=y[j-1]===cA?bV.getLength()-1:y[j-1];
bV=bV[cE+bT](bW);
}else{bV=bV[cE+bT]();
}F[j]=bV;
if(E[j]==null){E.push(D);
}if(qx.Class.implementsInterface(bV,qx.data.IListData)){var bU=cz;
}else{try{var bU=qx.data.SingleValueBinding.__fr(bV,A[j]);
}catch(e){break;
}}C[j]=bV.addListener(bU,E[j]);
}qx.data.SingleValueBinding.__fq(s,t,u,v,w);
};
E.push(D);
C[i]=z.addListener(B[i],D);
var x=qx.lang.String.firstUp(A[i]);
if(z[cE+x]==null){z=null;
}else if(y[i]!==cD){z=z[cE+x](y[i]);
}else{z=z[cE+x]();
}
if(!z){break;
}}return {listenerIds:C,targets:F};
},__fq:function(bX,bY,ca,cb,cc){var cg=this.__fu(bX,bY);

if(cg!=null){var ci=bY.substring(bY.lastIndexOf(cB)+1,bY.length);
if(ci.charAt(ci.length-1)==cy){var cd=ci.substring(ci.lastIndexOf(cC)+1,ci.length-1);
var cf=ci.substring(0,ci.lastIndexOf(cC));
var ch=cg[cE+qx.lang.String.firstUp(cf)]();

if(cd==cA){cd=ch.length-1;
}
if(ch!=null){var ce=ch.getItem(cd);
}}else{var ce=cg[cE+qx.lang.String.firstUp(ci)]();
}}ce=qx.data.SingleValueBinding.__fz(ce,ca,cb,cc);
this.__ft(ca,cb,ce);
},__fr:function(df,dg){var dh=this.__fA(df,dg);
if(dh==null){if(qx.Class.supportsEvent(df.constructor,dg)){dh=dg;
}else if(qx.Class.supportsEvent(df.constructor,cz+qx.lang.String.firstUp(dg))){dh=cz+qx.lang.String.firstUp(dg);
}else{throw new qx.core.AssertionError(cJ+dg+cR+df+cF);
}}return dh;
},__fs:function(di,dj){var dk=this.__fu(di,dj);

if(dk!=null){var dl=dj.substring(dj.lastIndexOf(cB)+1,dj.length);
if(dl.charAt(dl.length-1)==cy){this.__ft(di,dj,null);
return;
}if(dk[cY+qx.lang.String.firstUp(dl)]!=undefined){dk[cY+qx.lang.String.firstUp(dl)]();
}else{dk[cv+qx.lang.String.firstUp(dl)](null);
}}},__ft:function(cj,ck,cl){var cp=this.__fu(cj,ck);

if(cp!=null){var cq=ck.substring(ck.lastIndexOf(cB)+1,ck.length);
if(cq.charAt(cq.length-1)==cy){var cm=cq.substring(cq.lastIndexOf(cC)+1,cq.length-1);
var co=cq.substring(0,cq.lastIndexOf(cC));
var cn=cp[cE+qx.lang.String.firstUp(co)]();

if(cm==cA){cm=cn.length-1;
}
if(cn!=null){cn.setItem(cm,cl);
}}else{cp[cv+qx.lang.String.firstUp(cq)](cl);
}}},__fu:function(f,g){var l=g.split(cB);
var m=f;
for(var i=0;i<l.length-1;i++){try{var k=l[i];
if(k.indexOf(cy)==k.length-1){var h=k.substring(k.indexOf(cC)+1,k.length-1);
k=k.substring(0,k.indexOf(cC));
}m=m[cE+qx.lang.String.firstUp(k)]();

if(h!=null){if(h==cA){h=m.length-1;
}m=m.getItem(h);
h=null;
}}catch(cu){return null;
}}return m;
},__fv:function(n,o,p,q,r){n=this.__fz(n,o,p,q);
if(n===undefined){this.__fs(o,p);
}if(n!==undefined){try{this.__ft(o,p,n);
if(q&&q.onUpdate){q.onUpdate(r,o,n);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(q&&q.onSetFail){q.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+n+" on "+o+". Error message: "+e);
}}}},__fw:function(W){var X=[];
for(var i=0;i<W.length;i++){var name=W[i];
if(qx.lang.String.endsWith(name,cy)){var Y=name.substring(name.indexOf(cC)+1,name.indexOf(cy));
if(name.indexOf(cy)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(Y!==cA){if(Y==cD||isNaN(parseInt(Y))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(cC)!=0){W[i]=name.substring(0,name.indexOf(cC));
X[i]=cD;
X[i+1]=Y;
W.splice(i+1,0,da);
i++;
}else{X[i]=Y;
W.splice(i,1,da);
}}else{X[i]=cD;
}}return X;
},__fx:function(by,bz,bA,bB,bC,bD){if(qx.core.Variant.isSet(cX,cV)){var bE=qx.Class.getEventType(by.constructor,bz);
qx.core.Assert.assertEquals(cL,bE,bz+cO+by+cB);
}var bG=function(bc,e){if(bc!==cD){if(bc===cA){bc=by.length-1;
}var bf=by.getItem(bc);
if(bf===undefined){qx.data.SingleValueBinding.__fs(bA,bB);
}var bd=e.getData().start;
var be=e.getData().end;

if(bc<bd||bc>be){return;
}}else{var bf=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+by+" by "+bz+" to "+bA+" ("+bB+")");
qx.log.Logger.debug("Data before conversion: "+bf);
}bf=qx.data.SingleValueBinding.__fz(bf,bA,bB,bC);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+bf);
}try{if(bf!==undefined){qx.data.SingleValueBinding.__ft(bA,bB,bf);
}else{qx.data.SingleValueBinding.__fs(bA,bB);
}if(bC&&bC.onUpdate){bC.onUpdate(by,bA,bf);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bC&&bC.onSetFail){bC.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+bf+" on "+bA+". Error message: "+e);
}}};
if(!bD){bD=cD;
}bG=qx.lang.Function.bind(bG,by,bD);
var bF=by.addListener(bz,bG);
return bF;
},__fy:function(bO,bP,bQ,bR,bS){if(this.__fn[bP.toHashCode()]===undefined){this.__fn[bP.toHashCode()]=[];
}this.__fn[bP.toHashCode()].push([bO,bP,bQ,bR,bS]);
},__fz:function(N,O,P,Q){if(Q&&Q.converter){var S;

if(O.getModel){S=O.getModel();
}return Q.converter(N,S);
}else{var U=this.__fu(O,P);
var V=P.substring(P.lastIndexOf(cB)+1,P.length);
if(U==null){return N;
}var T=qx.core.property.Util.getPropertyDefinition(U.constructor,V);
var R=T==null?cD:T.check;
return this.__fB(N,R);
}},__fA:function(bL,bM){var bN=qx.core.property.Util.getPropertyDefinition(bL.constructor,bM);

if(bN==null){return null;
}return bN.event;
},__fB:function(cr,cs){var ct=qx.lang.Type.getClass(cr);
if((ct==cx||ct==cw)&&(cs==cS||cs==cG)){cr=parseInt(cr);
}if((ct==cU||ct==cx||ct==cP)&&cs==cw){cr=cr+cD;
}if((ct==cx||ct==cw)&&(cs==cx||cs==cI)){cr=parseFloat(cr);
}return cr;
},removeBindingFromObject:function(dc,dd){if(dd.type==db){for(var i=0;i<dd.sources.length;i++){if(dd.sources[i]){dd.sources[i].removeListenerById(dd.listenerIds[i]);
}}for(var i=0;i<dd.targets.length;i++){if(dd.targets[i]){dd.targets[i].removeListenerById(dd.targetListenerIds[i]);
}}}else{dc.removeListenerById(dd);
}var de=this.__fn[dc.toHashCode()];
if(de!=undefined){for(var i=0;i<de.length;i++){if(de[i][0]==dd){qx.lang.Array.remove(de,de[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(ba){if(qx.core.Variant.isSet(cX,cV)){qx.core.Assert.assertNotNull(ba,cK);
}var bb=this.__fn[ba.toHashCode()];

if(bb!=undefined){for(var i=bb.length-1;i>=0;i--){this.removeBindingFromObject(ba,bb[i][0]);
}}},getAllBindingsForObject:function(G){if(this.__fn[G.toHashCode()]===undefined){this.__fn[G.toHashCode()]=[];
}return this.__fn[G.toHashCode()];
},removeAllBindings:function(){for(var bI in this.__fn){var bH=qx.core.ObjectRegistry.fromHashCode(bI);
if(bH==null){delete this.__fn[bI];
continue;
}this.removeAllBindingsForObject(bH);
}this.__fn={};
},getAllBindings:function(){return this.__fn;
},showBindingInLog:function(a,b){var d;
for(var i=0;i<this.__fn[a.toHashCode()].length;i++){if(this.__fn[a.toHashCode()][i][0]==b){d=this.__fn[a.toHashCode()][i];
break;
}}
if(d===undefined){var c=cN;
}else{var c=cH+d[1]+cW+d[2]+cT+d[3]+cW+d[4]+cQ;
}qx.log.Logger.debug(c);
},showAllBindingsInLog:function(){for(var bK in this.__fn){var bJ=qx.core.ObjectRegistry.fromHashCode(bK);

for(var i=0;i<this.__fn[bK].length;i++){this.showBindingInLog(bJ,this.__fn[bK][i][0]);
}}}}});
})();
(function(){var f="qx.event.type.Data",e="qx.event.type.Event",d="qx.data.IListData";
qx.Interface.define(d,{events:{"change":f,"changeLength":e},members:{getItem:function(j){},setItem:function(h,i){},splice:function(a,b,c){},contains:function(g){},getLength:function(){},toArray:function(){}}});
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
(function(){var e="abstract",d="qx.debug",c="qx.ui.layout.Abstract";
qx.Class.define(c,{type:e,extend:qx.core.Object,members:{__io:null,_invalidChildrenCache:null,__ip:null,invalidateLayoutCache:function(){this.__io=null;
},renderLayout:function(a,b){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__io){return this.__io;
}return this.__io=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(f){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:qx.core.Variant.select(d,{"on":function(g,name,h){},"off":null}),_clearSeparators:function(){var l=this.__ip;

if(l instanceof qx.ui.core.LayoutItem){l.clearSeparators();
}},_renderSeparator:function(j,k){this.__ip.renderSeparator(j,k);
},connectToWidget:function(i){if(i&&this.__ip){throw new Error("It is not possible to manually set the connected widget.");
}this.__ip=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__ip;
},_applyLayoutChange:function(){if(this.__ip){this.__ip.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__ip.getLayoutChildren();
}},destruct:function(){this.__ip=this.__io=null;
}});
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
(function(){var x="",w='indexOf',v='slice',u='concat',t='toLocaleLowerCase',s="qx.type.BaseString",r='match',q="qx.debug",p='search',o='replace',f='toLowerCase',n='charCodeAt',j='split',e='substring',d='lastIndexOf',h="on",g='substr',k='toLocaleUpperCase',c='toUpperCase',m='charAt';
qx.Class.define(s,{extend:Object,construct:function(y){var y=y||x;
this.__gO=y;
this.length=y.length;
},members:{$$isString:true,length:0,__gO:null,toString:function(){return this.__gO;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(a,b){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(z,A){if(qx.core.Variant.isSet(q,h)){qx.Class.include(z,qx.core.MAssert);
}var B=[m,n,u,w,d,r,o,p,v,j,g,e,f,c,t,k];
A.valueOf=A.toString;

if(new z(x).valueOf()==null){delete A.valueOf;
}
for(var i=0,l=B.length;i<l;i++){A[B[i]]=String.prototype[B[i]];
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
(function(){var k="px",j="qx.client",i="div",h="img",g="",f="no-repeat",d="qx.debug",c="scale-x",b="mshtml",a="on",I="repeat",H="scale",G="scale-y",F="qx/icon",E=".png",D="crop",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",z='<img src="',r="qx.bom.element.Decoration",s="', sizingMethod='",p="png",q="')",n='"></div>',o='"/>',l='" style="',m="none",t="webkit",u=" ",w="repeat-x",v="DXImageTransform.Microsoft.AlphaImageLoader",y="qx/static/blank.gif",x="absolute";
qx.Class.define(r,{statics:{DEBUG:false,__gY:{},__ha:qx.core.Variant.isSet(j,b),__hb:qx.core.Variant.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hc:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(P,Q,R,S){var U=this.getTagName(R,Q);

if(U!=P.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var V=this.getAttributes(Q,R,S);

if(U===h){P.src=V.src||qx.util.ResourceManager.getInstance().toUri(y);
}if(P.style.backgroundPosition!=g&&V.style.backgroundPosition===undefined){V.style.backgroundPosition=null;
}if(P.style.clip!=g&&V.style.clip===undefined){V.style.clip=null;
}var T=qx.bom.element.Style;
T.setStyles(P,V.style);
if(this.__ha){try{P.filters[v].apply();
}catch(e){}}},create:function(J,K,L){var M=this.getTagName(K,J);
var O=this.getAttributes(J,K,L);
var N=qx.bom.element.Style.compile(O.style);

if(M===h){return z+O.src+l+N+o;
}else{return B+N+n;
}},getTagName:function(br,bs){if(qx.core.Variant.isSet(j,b)){if(bs&&this.__ha&&this.__hb[br]&&qx.lang.String.endsWith(bs,E)){return i;
}}return this.__hc[br];
},getAttributes:function(bd,be,bf){if(!bf){bf={};
}
if(!bf.position){bf.position=x;
}
if(qx.core.Variant.isSet(j,b)){bf.fontSize=0;
bf.lineHeight=0;
}else if(qx.core.Variant.isSet(j,t)){bf.WebkitUserDrag=m;
}var bi=qx.util.ResourceManager.getInstance().getImageFormat(bd)||qx.io.ImageLoader.getFormat(bd);

if(qx.core.Variant.isSet(d,a)){if(bd!=null&&bi==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+bd+"'!");
}}var bh;
if(this.__ha&&this.__hb[be]&&bi===p){bh=this.__hf(bf,be,bd);
}else{if(be===H){bh=this.__hg(bf,be,bd);
}else if(be===c||be===G){bh=this.__hh(bf,be,bd);
}else{bh=this.__hk(bf,be,bd);
}}return bh;
},__hd:function(ba,bb,bc){if(ba.width==null&&bb!=null){ba.width=bb+k;
}
if(ba.height==null&&bc!=null){ba.height=bc+k;
}return ba;
},__he:function(W){var X=qx.util.ResourceManager.getInstance().getImageWidth(W)||qx.io.ImageLoader.getWidth(W);
var Y=qx.util.ResourceManager.getInstance().getImageHeight(W)||qx.io.ImageLoader.getHeight(W);
return {width:X,height:Y};
},__hf:function(bS,bT,bU){var bX=this.__he(bU);
bS=this.__hd(bS,bX.width,bX.height);
var bW=bT==f?D:H;
var bV=C+qx.util.ResourceManager.getInstance().toUri(bU)+s+bW+q;
bS.filter=bV;
bS.backgroundImage=bS.backgroundRepeat=g;
return {style:bS};
},__hg:function(bB,bC,bD){var bE=qx.util.ResourceManager.getInstance().toUri(bD);
var bF=this.__he(bD);
bB=this.__hd(bB,bF.width,bF.height);
return {src:bE,style:bB};
},__hh:function(bG,bH,bI){var bM=qx.util.ResourceManager.getInstance();
var bL=bM.isClippedImage(bI);
var bN=this.__he(bI);

if(bL){var bK=bM.getData(bI);
var bJ=bM.toUri(bK[4]);

if(bH===c){bG=this.__hi(bG,bK,bN.height);
}else{bG=this.__hj(bG,bK,bN.width);
}return {src:bJ,style:bG};
}else{if(qx.core.Variant.isSet(d,a)){this.__hm(bI);
}
if(bH==c){bG.height=bN.height==null?null:bN.height+k;
}else if(bH==G){bG.width=bN.width==null?null:bN.width+k;
}var bJ=bM.toUri(bI);
return {src:bJ,style:bG};
}},__hi:function(bY,ca,cb){var cc=qx.util.ResourceManager.getInstance().getImageHeight(ca[4]);
bY.clip={top:-ca[6],height:cb};
bY.height=cc+k;
if(bY.top!=null){bY.top=(parseInt(bY.top,10)+ca[6])+k;
}else if(bY.bottom!=null){bY.bottom=(parseInt(bY.bottom,10)+cb-cc-ca[6])+k;
}return bY;
},__hj:function(bO,bP,bQ){var bR=qx.util.ResourceManager.getInstance().getImageWidth(bP[4]);
bO.clip={left:-bP[5],width:bQ};
bO.width=bR+k;
if(bO.left!=null){bO.left=(parseInt(bO.left,10)+bP[5])+k;
}else if(bO.right!=null){bO.right=(parseInt(bO.right,10)+bQ-bR-bP[5])+k;
}return bO;
},__hk:function(bt,bu,bv){var bA=qx.util.ResourceManager.getInstance().isClippedImage(bv);
var bz=this.__he(bv);
if(bA&&bu!==I){var by=qx.util.ResourceManager.getInstance().getData(bv);
var bx=qx.bom.element.Background.getStyles(by[4],bu,by[5],by[6]);

for(var bw in bx){bt[bw]=bx[bw];
}
if(bz.width!=null&&bt.width==null&&(bu==A||bu===f)){bt.width=bz.width+k;
}
if(bz.height!=null&&bt.height==null&&(bu==w||bu===f)){bt.height=bz.height+k;
}return {style:bt};
}else{if(qx.core.Variant.isSet(d,a)){if(bu!==I){this.__hm(bv);
}}bt=this.__hd(bt,bz.width,bz.height);
bt=this.__hl(bt,bv,bu);
return {style:bt};
}},__hl:function(bk,bl,bm){var top=null;
var bq=null;

if(bk.backgroundPosition){var bn=bk.backgroundPosition.split(u);
bq=parseInt(bn[0]);

if(isNaN(bq)){bq=bn[0];
}top=parseInt(bn[1]);

if(isNaN(top)){top=bn[1];
}}var bp=qx.bom.element.Background.getStyles(bl,bm,bq,top);

for(var bo in bp){bk[bo]=bp[bo];
}if(bk.filter){bk.filter=g;
}return bk;
},__hm:function(bj){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bj)&&bj.indexOf(F)==-1){if(!this.__gY[bj]){qx.log.Logger.debug("Potential clipped image candidate: "+bj);
this.__gY[bj]=true;
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
(function(){var L="nonScaled",K="scaled",J="alphaScaled",I=".png",H="qx.client",G="div",F="replacement",E="qx.event.type.Event",D="hidden",C="Boolean",be="px",bd="http",bc="scale",bb="changeSource",ba="__hE",Y="qx.ui.basic.Image",X="qx.debug",W="loaded",V="-disabled.$1",U="loadingFailed",S="String",T="_applySource",Q="img",R="image",O="mshtml",P="_applyScale",M="no-repeat",N="on";
qx.Class.define(Y,{extend:qx.ui.core.Widget,construct:function(bf){this.__hE={};
qx.ui.core.Widget.call(this);

if(bf){this.setSource(bf);
}},properties:{source:{check:S,init:null,nullable:true,event:bb,apply:T,themeable:true},scale:{check:C,init:false,themeable:true,apply:P},appearance:{refine:true,init:R},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:E,loaded:E},members:{__hF:null,__hG:null,__hH:null,__hE:null,getContentElement:function(){return this.__hL();
},_createContentElement:function(){return this.__hL();
},_getContentHint:function(){return {width:this.__hF||0,height:this.__hG||0};
},_applyEnabled:function(w,x){qx.ui.core.Widget.prototype._applyEnabled.call(this,w,x);

if(this.getSource()){this._styleSource();
}},_applySource:function(b){this._styleSource();
},_applyScale:function(bs){this._styleSource();
},__hI:function(y){this.__hH=y;
},__hJ:function(){if(this.__hH==null){var bm=this.getSource();
var bl=false;

if(bm!=null){bl=qx.lang.String.endsWith(bm,I);
}
if(this.getScale()&&bl&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__hH=J;
}else if(this.getScale()){this.__hH=K;
}else{this.__hH=L;
}}return this.__hH;
},__hK:function(g){var h;
var i;

if(g==J){h=true;
i=G;
}else if(g==L){h=false;
i=G;
}else{h=true;
i=Q;
}var j=new qx.html.Image(i);
j.setScale(h);
j.setStyles({"overflowX":D,"overflowY":D});
return j;
},__hL:function(){var a=this.__hJ();

if(this.__hE[a]==null){this.__hE[a]=this.__hK(a);
}return this.__hE[a];
},_styleSource:function(){var bg=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!bg){this.getContentElement().resetSource();
return;
}this.__hM(bg);

if(qx.core.Variant.isSet(H,O)){var bh=this.getScale()?bc:M;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(bh,bg);
}if(qx.util.ResourceManager.getInstance().has(bg)){this.__hO(this.getContentElement(),bg);
}else if(qx.io.ImageLoader.isLoaded(bg)){this.__hP(this.getContentElement(),bg);
}else{this.__hQ(this.getContentElement(),bg);
}},__hM:qx.core.Variant.select(H,{"mshtml":function(z){var B=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var A=qx.lang.String.endsWith(z,I);

if(B&&A){if(this.getScale()&&this.__hJ()!=J){this.__hI(J);
}else if(!this.getScale()&&this.__hJ()!=L){this.__hI(L);
}}else{if(this.getScale()&&this.__hJ()!=K){this.__hI(K);
}else if(!this.getScale()&&this.__hJ()!=L){this.__hI(L);
}}this.__hN(this.__hL());
},"default":function(bk){if(this.getScale()&&this.__hJ()!=K){this.__hI(K);
}else if(!this.getScale()&&this.__hJ(L)){this.__hI(L);
}this.__hN(this.__hL());
}}),__hN:function(k){var n=this.getContainerElement();
var o=n.getChild(0);

if(o!=k){if(o!=null){var q=be;
var l={};
var m=this.getInnerSize();

if(m!=null){l.width=m.width+q;
l.height=m.height+q;
}var p=this.getInsets();
l.left=p.left+q;
l.top=p.top+q;
l.zIndex=10;
k.setStyles(l,true);
k.setSelectable(this.getSelectable());
}n.removeAt(0);
n.addAt(k,0);
}},__hO:function(c,d){var f=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var e=d.replace(/\.([a-z]+)$/,V);

if(f.has(e)){d=e;
this.addState(F);
}else{this.removeState(F);
}}if(c.getSource()===d){return;
}c.setSource(d);
this.__hS(f.getImageWidth(d),f.getImageHeight(d));
},__hP:function(r,s){var u=qx.io.ImageLoader;
r.setSource(s);
var t=u.getWidth(s);
var v=u.getHeight(s);
this.__hS(t,v);
},__hQ:function(bn,bo){var bp=qx.io.ImageLoader;

if(qx.core.Variant.isSet(X,N)){if(!qx.lang.String.startsWith(bo.toLowerCase(),bd)){var self=this.self(arguments);

if(!self.__wJ){self.__wJ={};
}
if(!self.__wJ[bo]){this.debug("try to load a unmanaged relative image: "+bo);
self.__wJ[bo]=true;
}}}if(!bp.isFailed(bo)){bp.load(bo,this.__hR,this);
}else{if(bn!=null){bn.resetSource();
}}},__hR:function(bq,br){if(this.$$disposed===true){return;
}if(bq!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(br.failed){this.warn("Image could not be loaded: "+bq);
this.fireEvent(U);
}else{this.fireEvent(W);
}this._styleSource();
},__hS:function(bi,bj){if(bi!==this.__hF||bj!==this.__hG){this.__hF=bi;
this.__hG=bj;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(ba);
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
(function(){var j="top",i="right",h="bottom",g="left",f="edge-start",e="align-start",d="align-end",c="edge-end",b="qx.util.placement.AbstractAxis",a="-",G="best-fit",F="size",E="target.bottom",D="offsets",C="size.width",B='__ic',A="offsets.bottom",z="qx.util.placement.Placement",y="qx.debug",x="keep-align",q="target.right",r="direct",o="offsets.right",p="target",m="offsets.left",n="area",k="target.top",l="area.height",s="target.left",t="area.width",v="on",u="size.height",w="offsets.top";
qx.Class.define(z,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__ic=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:b},axisY:{check:b},edge:{check:[j,i,h,g],init:j},align:{check:[j,i,h,g],init:i}},statics:{__id:null,compute:function(R,S,T,U,V,W,X){this.__id=this.__id||new qx.util.placement.Placement();
var bb=V.split(a);
var ba=bb[0];
var Y=bb[1];
this.__id.set({axisX:this.__ih(W),axisY:this.__ih(X),edge:ba,align:Y});
return this.__id.compute(R,S,T,U);
},__ie:null,__if:null,__ig:null,__ih:function(J){switch(J){case r:this.__ie=this.__ie||new qx.util.placement.DirectAxis();
return this.__ie;
case x:this.__if=this.__if||new qx.util.placement.KeepAlignAxis();
return this.__if;
case G:this.__ig=this.__ig||new qx.util.placement.BestFitAxis();
return this.__ig;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__ic:null,compute:function(K,L,M,N){if(qx.core.Variant.isSet(y,v)){this.assertObject(K,F);
this.assertNumber(K.width,C);
this.assertNumber(K.height,u);
this.assertObject(L,n);
this.assertNumber(L.width,t);
this.assertNumber(L.height,l);
this.assertObject(M,p);
this.assertNumber(M.top,k);
this.assertNumber(M.right,q);
this.assertNumber(M.bottom,E);
this.assertNumber(M.left,s);
this.assertObject(N,D);
this.assertNumber(N.top,w);
this.assertNumber(N.right,o);
this.assertNumber(N.bottom,A);
this.assertNumber(N.left,m);
}var O=this.getAxisX()||this.__ic;
var Q=O.computeStart(K.width,{start:M.left,end:M.right},{start:N.left,end:N.right},L.width,this.__ii());
var P=this.getAxisY()||this.__ic;
var top=P.computeStart(K.height,{start:M.top,end:M.bottom},{start:N.top,end:N.bottom},L.height,this.__ij());
return {left:Q,top:top};
},__ii:function(){var bd=this.getEdge();
var bc=this.getAlign();

if(bd==g){return f;
}else if(bd==i){return c;
}else if(bc==g){return e;
}else if(bc==i){return d;
}},__ij:function(){var I=this.getEdge();
var H=this.getAlign();

if(I==j){return f;
}else if(I==h){return c;
}else if(H==j){return e;
}else if(H==h){return d;
}}},destruct:function(){this._disposeObjects(B);
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
(function(){var h="blur",g="mousedown",f="qx.debug",d="on",c="qx.ui.popup.Manager",b="__mt",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__mt={};
qx.event.Registration.addListener(document.documentElement,g,this.__mv,this,true);
qx.event.Registration.addListener(window,h,this.hideAll,this);
},members:{__mt:null,add:function(u){if(qx.core.Variant.isSet(f,d)){if(!(u instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+u);
}}this.__mt[u.$$hash]=u;
this.__mu();
},remove:function(s){if(qx.core.Variant.isSet(f,d)){if(!(s instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+s);
}}var t=this.__mt;

if(t){delete t[s.$$hash];
this.__mu();
}},hideAll:function(){var j=this.__mt;

if(j){for(var i in j){j[i].exclude();
}}},__mu:function(){var r=1e7;
var q=this.__mt;

for(var p in q){q[p].setZIndex(r++);
}},__mv:function(e){var n=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var o=this.__mt;

for(var m in o){var l=o[m];

if(!l.getAutoHide()||n==l||qx.ui.core.Widget.contains(l,n)){continue;
}l.exclude();
}}},destruct:function(){var k=qx.event.Registration;
k.removeListener(document.documentElement,g,this.__mv,this,true);
k.removeListener(window,h,this.hideAll,this);
this._disposeMap(b);
}});
})();
(function(){var d="' is not supported by the Grow layout!",c="qx.ui.layout.Grow",b="qx.debug",a="The property '";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(b,{"on":function(w,name,x){this.assert(false,a+name+d);
},"off":null}),renderLayout:function(p,q){var u=this._getLayoutChildren();
var t,v,s,r;
for(var i=0,l=u.length;i<l;i++){t=u[i];
v=t.getSizeHint();
s=p;

if(s<v.minWidth){s=v.minWidth;
}else if(s>v.maxWidth){s=v.maxWidth;
}r=q;

if(r<v.minHeight){r=v.minHeight;
}else if(r>v.maxHeight){r=v.maxHeight;
}t.renderLayout(0,0,s,r);
}},_computeSizeHint:function(){var m=this._getLayoutChildren();
var j,o;
var n=0,k=0;
var h=0,f=0;
var e=Infinity,g=Infinity;
for(var i=0,l=m.length;i<l;i++){j=m[i];
o=j.getSizeHint();
n=Math.max(n,o.width);
k=Math.max(k,o.height);
h=Math.max(h,o.minWidth);
f=Math.max(f,o.minHeight);
e=Math.min(e,o.maxWidth);
g=Math.min(g,o.maxHeight);
}return {width:n,height:k,minWidth:h,minHeight:f,maxWidth:e,maxHeight:g};
}}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",y="changeIcon",x="qx.ui.basic.Atom",w="changeLabel",v="Integer",u="_applyIconPosition",t="qx.debug",s="top",r="right",q="_applyRich",p="_applyIcon",n="_applyShow",o="on",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(S,T){if(qx.core.Variant.isSet(t,o)){this.assertArgumentsCount(arguments,0,2);
}qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(S!=null){this.setLabel(S);
}
if(T!=null){this.setIcon(T);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:w},rich:{check:h,init:false,apply:q},icon:{check:f,apply:p,nullable:true,themeable:true,event:y},gap:{check:v,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:n,event:c},iconPosition:{init:e,check:[s,r,b,e],themeable:true,apply:u},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(L){var M;

switch(L){case j:M=new qx.ui.basic.Label(this.getLabel());
M.setAnonymous(true);
M.setRich(this.getRich());
this._add(M);

if(this.getLabel()==null||this.getShow()===i){M.exclude();
}break;
case i:M=new qx.ui.basic.Image(this.getIcon());
M.setAnonymous(true);
this._addAt(M,0);

if(this.getIcon()==null||this.getShow()===j){M.exclude();
}break;
}return M||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,L);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(I,J){var K=this.getChildControl(j,true);

if(K){K.setValue(I);
}this._handleLabel();
},_applyRich:function(P,Q){var R=this.getChildControl(j,true);

if(R){R.setRich(P);
}},_applyIcon:function(F,G){var H=this.getChildControl(i,true);

if(H){H.setSource(F);
}this._handleIcon();
},_applyGap:function(D,E){this._getLayout().setGap(D);
},_applyShow:function(B,C){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(N,O){this._getLayout().setIconPosition(N);
},_applyCenter:function(z,A){this._getLayout().setCenter(z);
}}});
})();
(function(){var n="bottom",m="_applyLayoutChange",l="top",k="left",j="right",h="middle",g="' is not supported by the Atom layout!",f="qx.debug",e="center",d="qx.ui.layout.Atom",a="Integer",c="The property '",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,properties:{gap:{check:a,init:4,apply:m},iconPosition:{check:[k,l,j,n],init:k,apply:m},center:{check:b,init:false,apply:m}},members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(z,name,A){this.assert(false,c+name+g);
},"off":null}),renderLayout:function(B,C){var L=qx.ui.layout.Util;
var E=this.getIconPosition();
var H=this._getLayoutChildren();
var length=H.length;
var V,top,M,F;
var R,K;
var P=this.getGap();
var U=this.getCenter();
if(E===n||E===j){var N=length-1;
var I=-1;
var G=-1;
}else{var N=0;
var I=length;
var G=1;
}if(E==l||E==n){if(U){var Q=0;

for(var i=N;i!=I;i+=G){F=H[i].getSizeHint().height;

if(F>0){Q+=F;

if(i!=N){Q+=P;
}}}top=Math.round((C-Q)/2);
}else{top=0;
}
for(var i=N;i!=I;i+=G){R=H[i];
K=R.getSizeHint();
M=Math.min(K.maxWidth,Math.max(B,K.minWidth));
F=K.height;
V=L.computeHorizontalAlignOffset(e,M,B);
R.renderLayout(V,top,M,F);
if(F>0){top+=F+P;
}}}else{var J=B;
var D=null;
var T=0;

for(var i=N;i!=I;i+=G){R=H[i];
M=R.getSizeHint().width;

if(M>0){if(!D&&R instanceof qx.ui.basic.Label){D=R;
}else{J-=M;
}T++;
}}
if(T>1){var S=(T-1)*P;
J-=S;
}
if(D){var K=D.getSizeHint();
var O=Math.max(K.minWidth,Math.min(J,K.maxWidth));
J-=O;
}
if(U&&J>0){V=Math.round(J/2);
}else{V=0;
}
for(var i=N;i!=I;i+=G){R=H[i];
K=R.getSizeHint();
F=Math.min(K.maxHeight,Math.max(C,K.minHeight));

if(R===D){M=O;
}else{M=K.width;
}top=L.computeVerticalAlignOffset(h,K.height,C);
R.renderLayout(V,top,M,F);
if(M>0){V+=M+P;
}}}},_computeSizeHint:function(){var y=this._getLayoutChildren();
var length=y.length;
var q,w;
if(length===1){var q=y[0].getSizeHint();
w={width:q.width,height:q.height,minWidth:q.minWidth,minHeight:q.minHeight};
}else{var u=0,v=0;
var r=0,t=0;
var s=this.getIconPosition();
var x=this.getGap();

if(s===l||s===n){var o=0;

for(var i=0;i<length;i++){q=y[i].getSizeHint();
v=Math.max(v,q.width);
u=Math.max(u,q.minWidth);
if(q.height>0){t+=q.height;
r+=q.minHeight;
o++;
}}
if(o>1){var p=(o-1)*x;
t+=p;
r+=p;
}}else{var o=0;

for(var i=0;i<length;i++){q=y[i].getSizeHint();
t=Math.max(t,q.height);
r=Math.max(r,q.minHeight);
if(q.width>0){v+=q.width;
u+=q.minWidth;
o++;
}}
if(o>1){var p=(o-1)*x;
v+=p;
u+=p;
}}w={minWidth:u,width:v,minHeight:r,height:t};
}return w;
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
(function(){var l="on",k="qx.dynlocale",j="text",i="Boolean",h="qx.client",g="color",f="userSelect",d="changeLocale",c="qx.debug",b="enabled",K="none",J="_applyTextAlign",I="qx.ui.core.Widget",H="nowrap",G="gecko",F="changeTextAlign",E="_applyWrap",D="changeValue",C="changeContent",B="qx.ui.basic.Label",s="A",t="whiteSpace",q="_applyValue",r="center",o="_applyBuddy",p="String",m="textAlign",n="right",u="changeRich",v="normal",x="_applyRich",w="click",z="label",y="webkit",A="left";
qx.Class.define(B,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(W){qx.ui.core.Widget.call(this);

if(W!=null){this.setValue(W);
}
if(qx.core.Variant.isSet(k,l)){qx.locale.Manager.getInstance().addListener(d,this._onChangeLocale,this);
}},properties:{rich:{check:i,init:false,event:u,apply:x},wrap:{check:i,init:true,apply:E},value:{check:p,apply:q,event:D,nullable:true},buddy:{check:I,apply:o,nullable:true,init:null},textAlign:{check:[A,r,n],nullable:true,themeable:true,apply:J,event:F},appearance:{refine:true,init:z},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__iq:null,__ir:null,__is:null,__it:null,_getContentHint:function(){if(this.__ir){this.__iu=this.__iv();
delete this.__ir;
}return {width:this.__iu.width,height:this.__iu.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(X){if(qx.core.Variant.isSet(h,G)){if(X&&!this.isRich()){if(qx.core.Variant.isSet(c,l)){this.warn("Only rich labels are selectable in browsers with Gecko engine!");
}return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,X);
if(qx.core.Variant.isSet(h,y)){this.getContainerElement().setStyle(f,X?j:K);
this.getContentElement().setStyle(f,X?j:K);
}},_getContentHeightForWidth:function(a){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__iv(a).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(bh,bi){this.getContentElement().setStyle(m,bh);
},_applyTextColor:function(L,M){if(L){this.getContentElement().setStyle(g,qx.theme.manager.Color.getInstance().resolve(L));
}else{this.getContentElement().removeStyle(g);
}},__iu:{width:0,height:0},_applyFont:function(T,U){var V;

if(T){this.__iq=qx.theme.manager.Font.getInstance().resolve(T);
V=this.__iq.getStyles();
}else{this.__iq=null;
V=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(V);
this.__ir=true;
qx.ui.core.queue.Layout.add(this);
},__iv:function(bc){var bg=qx.bom.Label;
var be=this.getFont();
var bd=be?this.__iq.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||s;
var bf=this.getRich();
return bf?bg.getHtmlSize(content,bd,bc):bg.getTextSize(content,bd);
},_applyBuddy:function(R,S){if(S!=null){S.removeBinding(this.__is);
this.__is=null;
this.removeListenerById(this.__it);
this.__it=null;
}
if(R!=null){this.__is=R.bind(b,this,b);
this.__it=this.addListener(w,function(){if(R.isFocusable()){R.focus.apply(R);
}},this);
}},_applyRich:function(N){this.getContentElement().setRich(N);
this.__ir=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(O,P){if(O&&!this.isRich()){if(qx.core.Variant.isSet(c,l)){this.warn("Only rich labels support wrap.");
}}
if(this.isRich()){var Q=O?v:H;
this.getContentElement().setStyle(t,Q);
}},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(ba,bb){this.getContentElement().setValue(ba);
this.__ir=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(C,ba,bb);
}},destruct:function(){if(qx.core.Variant.isSet(k,l)){qx.locale.Manager.getInstance().removeListener(d,this._onChangeLocale,this);
}if(this.__is!=null){var Y=this.getBuddy();

if(Y!=null&&!Y.isDisposed()){Y.removeBinding(this.__is);
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
(function(){var k="number",j="': ",h="width",g="qx.ui.layout.Canvas",f="qx.debug",e="height",d="Bad format of layout property '",c="' is not supported by the Canvas layout!",b=". The value must be either an integer or an percent string.",a="The property '";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(m,name,n){var o={top:1,left:1,bottom:1,right:1,width:1,height:1,edge:1};
this.assert(o[name]==1,a+name+c);

if(name==h||name==e){this.assertMatch(n,qx.ui.layout.Util.PERCENT_VALUE);
}else{if(typeof n===k){this.assertInteger(n);
}else if(qx.lang.Type.isString(n)){this.assertMatch(n,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.fail(d+name+j+n+b);
}}},"off":null}),renderLayout:function(G,H){var S=this._getLayoutChildren();
var K,R,P;
var U,top,I,J,M,L;
var Q,O,T,N;

for(var i=0,l=S.length;i<l;i++){K=S[i];
R=K.getSizeHint();
P=K.getLayoutProperties();
Q=K.getMarginTop();
O=K.getMarginRight();
T=K.getMarginBottom();
N=K.getMarginLeft();
U=P.left!=null?P.left:P.edge;

if(qx.lang.Type.isString(U)){U=Math.round(parseFloat(U)*G/100);
}I=P.right!=null?P.right:P.edge;

if(qx.lang.Type.isString(I)){I=Math.round(parseFloat(I)*G/100);
}top=P.top!=null?P.top:P.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*H/100);
}J=P.bottom!=null?P.bottom:P.edge;

if(qx.lang.Type.isString(J)){J=Math.round(parseFloat(J)*H/100);
}if(U!=null&&I!=null){M=G-U-I-N-O;
if(M<R.minWidth){M=R.minWidth;
}else if(M>R.maxWidth){M=R.maxWidth;
}U+=N;
}else{M=P.width;

if(M==null){M=R.width;
}else{M=Math.round(parseFloat(M)*G/100);
if(M<R.minWidth){M=R.minWidth;
}else if(M>R.maxWidth){M=R.maxWidth;
}}
if(I!=null){U=G-M-I-O-N;
}else if(U==null){U=N;
}else{U+=N;
}}if(top!=null&&J!=null){L=H-top-J-Q-T;
if(L<R.minHeight){L=R.minHeight;
}else if(L>R.maxHeight){L=R.maxHeight;
}top+=Q;
}else{L=P.height;

if(L==null){L=R.height;
}else{L=Math.round(parseFloat(L)*H/100);
if(L<R.minHeight){L=R.minHeight;
}else if(L>R.maxHeight){L=R.maxHeight;
}}
if(J!=null){top=H-L-J-T-Q;
}else if(top==null){top=Q;
}else{top+=Q;
}}K.renderLayout(U,top,M,L);
}},_computeSizeHint:function(){var E=0,D=0;
var B=0,z=0;
var x,w;
var v,t;
var p=this._getLayoutChildren();
var s,C,r;
var F,top,q,u;

for(var i=0,l=p.length;i<l;i++){s=p[i];
C=s.getLayoutProperties();
r=s.getSizeHint();
var A=s.getMarginLeft()+s.getMarginRight();
var y=s.getMarginTop()+s.getMarginBottom();
x=r.width+A;
w=r.minWidth+A;
F=C.left!=null?C.left:C.edge;

if(F&&typeof F===k){x+=F;
w+=F;
}q=C.right!=null?C.right:C.edge;

if(q&&typeof q===k){x+=q;
w+=q;
}E=Math.max(E,x);
D=Math.max(D,w);
v=r.height+y;
t=r.minHeight+y;
top=C.top!=null?C.top:C.edge;

if(top&&typeof top===k){v+=top;
t+=top;
}u=C.bottom!=null?C.bottom:C.edge;

if(u&&typeof u===k){v+=u;
t+=u;
}B=Math.max(B,v);
z=Math.max(z,t);
}return {width:E,minWidth:D,height:B,minHeight:z};
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
(function(){var da="execute",cY="auto",cX="value",cW="/",cV="",cU="current",cT="excluded",cS="visible",cR="modelLink",cQ="changeSelection",ca="tags",bY="white",bX="html",bW="category",bV="all",bU="monospace",bT="div",bS="right",bR="qx.version",bQ="id",dh="node",di="_blank",df="_demoView",dg="qx.theme.Modern",dd="horizontal",de="~",db="main",dc="qx_srcview",dj="js",dk="widget",cz="interval",cy="log",cB="separator-vertical",cA="request",cD="icon/22/actions/edit-clear.png",cC="Demos",cF="^.*",cE="filled",cx="Clear log",cv="changeValue",H="dblclick",I="icon/22/actions/media-playback-start.png",J="<div class='script'>The sample JS source will be displayed here.</div>",K="__Kk",L="demobrowser.DemoBrowser",M="HTML Code",N="load",O="Run previous demo",P="_history",Q='_cmdNamespacePollution',dz="_leftComposite",dy="__Ke",dx="icon/22/apps/utilities-color-chooser.png",dw="_status",dD="Ctrl+N",dC="completed",dB="Previous",dA="Run",dF="failed",dE="<div class='script'>The sample source will be displayed here.</div>",bq="_searchTextField",br="__Kj",bo="Open demo in the playground",bp="tree1",bu="f1",bv="Debug",bs="Display log file",bt="icon/22/actions/media-playback-stop.png",bm="icon/22/apps/utilities-log-viewer.png",bn="Ctrl+O",Y="__Kd",X="Log File",bb="Stop playback after current demo",ba="qx.theme.Classic",U="__Kl",T='"',W="logappender",V="_runbutton",S="Choose theme",R=".html",bA="icon/22/apps/internet-web-browser.png",bB="#",bC="f2",bD="_stopbutton",bw="JS Code",bx="icon/22/mimetypes/executable.png",by="ig",bz="middle",bE="noPlayground",bF="Stop",bj='"}',bi="animation",bh="icon/22/actions/edit-redo.png",bg='_cmdDisposeSample',bf="toolbar",be="icon/22/apps/office-spreadsheet.png",bd="mshtml",bc="To Playground",bl="demo/welcome.html",bk='_cmdSampleInOwnWindow',bG=".*",bH=" ",bI="background-splitpane",bJ='demo/',bK="__Kf",bL="Debugging options",bM="Ctrl+P",bN="Filter...",bO="app-header",bP="/playground/",ce="Dispose Demo",cd='{"code": ',cc="Classic Theme",cb="Global Namespace Pollution",ci="viewGroup",ch="icon/16/actions/edit-find.png",cg="_",cf="treeview.flat",ck="qooxdoo ",cj="Own Window",cr="Display HTML source",cs='_cmdObjectSummary',cp='_cmdNextSample',cq="outputviews.sourcepage.html.page",cn=".",co="Run next demo",cl='_cmdPrevSample',cm="background-medium",ct="Ctrl+Left",cu="demo-tree",cJ="Display JavaScript source",cI='_cmdRunSample',cL="Next",cK="qx.client",cN="F5",cM="http://demo.qooxdoo.org/",cP="Modern Theme",cO="Open demo in new window",cH="_infosplit",cG="runbutton",ds="outputviews.sourcepage.js.page",dt="8px",du="Ctrl+Right",dv="_navPart",dn="?qx.theme=",dp="textfield",dq="Ctrl+D",dr="mainsplit",dl="icon/22/actions/go-previous.png",dm="Object Summary",G="_tree",F="Demo Browser",E="icon/22/actions/application-exit.png",D="Run the selected demo(s)",C="left",B="icon/22/actions/go-next.png",A="Theme",z="_iframe";
qx.Class.define(L,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
var fs=new qx.ui.layout.VBox;
fs.setSeparator(cB);
this.setLayout(fs);
this.add(this._createHeader());
this.widgets={};
this.tests={};
this.__Kc=dg;
this.__Kn();
this.__Kd=this.__Ku();
this.add(this.__Kd);
var fw=new qx.ui.splitpane.Pane(dd);
this.mainsplit=fw;
var ft=new qx.ui.splitpane.Pane(dd);
ft.setDecorator(null);
this._infosplit=ft;
this.add(fw,{flex:1});
var fy=this._leftComposite=new qx.ui.container.Composite();
fy.setLayout(new qx.ui.layout.VBox(3));
fy.setBackgroundColor(bI);
fw.add(fy,0);
{};
var fr=new qx.ui.container.Composite();
fr.setLayout(new qx.ui.layout.HBox(3));
fr.setAppearance(dp);
fy.add(fr);
var fz=new qx.ui.basic.Image(ch);
fr.add(fz);
this._searchTextField=new qx.ui.form.TextField();
this._searchTextField.setLiveUpdate(true);
this._searchTextField.setAppearance(dk);
this._searchTextField.setPlaceholder(bN);
var fx=new qx.event.Timer(500);
fx.addListener(cz,function(dQ){this.filter(this._searchTextField.getValue());
fx.stop();
},this);
this._searchTextField.addListener(cv,function(gc){fx.restart();
},this);
fr.add(this._searchTextField,{flex:1});
this._status=new qx.ui.basic.Label(cV);
this._status.setAppearance(dk);
this._status.setWidth(80);
this._status.setTextAlign(bS);
fr.add(this._status);
fw.add(ft,1);
this._tree=this.__Kz();
fy.add(this._tree,{flex:1});
this._demoView=this.__Kv();
{ft.add(this._demoView,2);
};
var fp=this.__Kx();
var fq=this.__Ky();
var fu=this.__Kw();
var fv=new qx.ui.container.Stack;
fv.setDecorator(db);
fv.add(fp);
fv.add(fq);
fv.add(fu);
this.viewGroup.addListener(cQ,function(e){var eF=e.getData()[0];
var eG=eF!=null?eF.getUserData(cX):cV;

switch(eG){case bX:this.setSelection([fp]);
fv.show();
break;
case dj:this.setSelection([fq]);
fv.show();
break;
case cy:this.setSelection([fu]);
fv.show();
break;
default:this.resetSelection();
fv.exclude();
}},fv);
ft.add(fv,1);
fv.resetSelection();
fv.exclude();
this._history=qx.bom.History.getInstance();
this._history.addListener(cA,function(e){var gd=e.getData().replace(de,cW);

if(this._currentSample!=gd){this.setCurrentSample(gd);
}},this);
this.__Ke=[this.__Kj,this.__Kk,this.__Kl];
{this.__Ke.push(this.__Kh);
};
this.__Kf=new qx.event.Timer(250);
this.__Kf.addListener(cz,this.__KB,this);
this.__Kf.start();
},properties:{playDemos:{check:[bV,bW,cU],init:cU}},members:{_iframe:null,__Kc:null,__Kf:null,__Kg:null,_tree:null,_status:null,_searchTextField:null,__Kh:null,__Ki:null,__Ke:null,_versionFilter:null,__Kj:null,__Kk:null,__Kl:null,__Km:null,__Kd:null,_leftComposite:null,_infosplit:null,_demoView:null,defaultUrl:bl,playgroundUrl:cM+qx.core.Setting.get(bR)+bP,__Kn:function(){this._cmdObjectSummary=new qx.ui.core.Command(bn);
this._cmdObjectSummary.addListener(da,this.__Ko,this);
this._cmdRunSample=new qx.ui.core.Command(cN);
this._cmdRunSample.addListener(da,this.runSample,this);
this._cmdPrevSample=new qx.ui.core.Command(ct);
this._cmdPrevSample.addListener(da,this.playPrev,this);
this._cmdNextSample=new qx.ui.core.Command(du);
this._cmdNextSample.addListener(da,this.playNext,this);
this._cmdSampleInOwnWindow=new qx.ui.core.Command(dD);
this._cmdSampleInOwnWindow.addListener(da,this.__Kp,this);
this._cmdDisposeSample=new qx.ui.core.Command(dq);
this._cmdDisposeSample.addListener(da,this.__Ks,this);
this._cmdNamespacePollution=new qx.ui.core.Command(bM);
this._cmdNamespacePollution.addListener(da,this.__Kt,this);
},__Ko:function(){var dH=this._iframe.getWindow();

if(dH&&dH.qx){alert(dH.qx.dev.ObjectSummary.getInfo());
}else{alert("Unable to access namespace. Maybe no demo loaded.");
}},__Kp:function(){var b=this._iframe.getSource();
window.open(b,di);
},__Kq:function(dU){var dV=!!dU;
var dW=this._tree.getSelection()[0].getUserData(ca);

if(dW){dV=dV&&!qx.lang.Array.contains(dW,bE);
}this.__Ki=dU;
},__Kr:function(){if(this.__Ki){var ey=this.__Ki;
var ew=cd+T+encodeURIComponent(ey)+bj;
var eu=this.playgroundUrl+bB+encodeURIComponent(ew);
window.open(eu,di);
}else{alert(this.tr("Could not open the Playground."));
}},__Ks:function(e){var gn=this._iframe.getWindow();

if(gn&&gn.qx){gn.qx.core.ObjectRegistry.shutdown();
alert("Done!");
}else{alert("Unable to access application.");
}},__Kt:function(e){var gb=this._iframe.getWindow();

if(gb&&gb.qx){alert(gb.qx.dev.Pollution.getInfo());
}else{alert("Unable to access application.");
}},__Ku:function(){var eO=new qx.ui.toolbar.ToolBar();
this._navPart=new qx.ui.toolbar.Part();
eO.add(this._navPart);
this._runbutton=new qx.ui.toolbar.Button(this.tr(dA),I);
this._runbutton.addListener(da,this.runSample,this);
this._runbutton.setToolTipText(D);
this._navPart.add(this._runbutton);
this._stopbutton=new qx.ui.toolbar.Button(this.tr(bF),bt);
this._stopbutton.addListener(da,this.stopSample,this);
this._stopbutton.setToolTipText(bb);
this._navPart.add(this._stopbutton);
this._stopbutton.setVisibility(cT);
this._runbutton.setMinWidth(60);
this._stopbutton.setMinWidth(60);
var fc=new qx.ui.toolbar.Button(this.tr(dB),dl);
fc.addListener(da,this.playPrev,this);
fc.setToolTipText(O);
this._navPart.add(fc);
var ff=new qx.ui.toolbar.Button(this.tr(cL),B);
ff.addListener(da,this.playNext,this);
ff.setToolTipText(co);
this._navPart.add(ff);
var eX=new qx.ui.toolbar.Button(this.tr(cj),bh);
eX.addListener(da,this.__Kp,this);
eX.setToolTipText(cO);
this.__Kj=eX;
this._navPart.add(eX);
{var eN=new qx.ui.toolbar.Button(this.tr(bc),E);
eN.addListener(da,this.__Kr,this);
eN.setToolTipText(bo);
eN.setEnabled(false);
if(qx.core.Variant.isSet(cK,bd)){eN.exclude();
}this.__Kh=eN;
this._navPart.add(eN);
};
var eP=new qx.ui.toolbar.Part;
this.__Kl=eP;
eO.add(eP);
{var fb=new qx.ui.menu.Menu;
this.__Km=fb;
var eV=new qx.ui.menu.RadioButton(cP);
var eT=new qx.ui.menu.RadioButton(cc);
eV.setUserData(cX,dg);
eV.setValue(true);
eT.setUserData(cX,ba);
var fd=new qx.ui.form.RadioGroup(eV,eT);
fd.addListener(cQ,this.__KG,this);
fb.add(eV);
fb.add(eT);
var eL=new qx.ui.toolbar.MenuButton(this.tr(A),dx,fb);
eL.setToolTipText(S);
eP.add(eL);
};
var eR=new qx.ui.menu.Menu;
{var eS=new qx.ui.menu.Button(this.tr(dm));
eS.setCommand(this._cmdObjectSummary);
eR.add(eS);
var fe=new qx.ui.menu.Button(this.tr(cb));
fe.setCommand(this._cmdNamespacePollution);
eR.add(fe);
};
var eY=new qx.ui.menu.Button(this.tr(ce));
eY.setCommand(this._cmdDisposeSample);
eR.add(eY);
var fa=new qx.ui.toolbar.MenuButton(this.tr(bv),be,eR);
fa.setToolTipText(bL);
eP.add(fa);
var eM=new qx.ui.toolbar.Part;
this.__Kk=eM;
eO.addSpacer();
eO.add(eM);
{var fg=new qx.ui.toolbar.RadioButton(M,bA);
fg.setToolTipText(cr);
var eW=new qx.ui.toolbar.RadioButton(bw,bx);
eW.setToolTipText(cJ);
fg.setUserData(cX,bX);
eW.setUserData(cX,dj);
eM.add(fg);
eM.add(eW);
};
var eU=new qx.ui.toolbar.RadioButton(X,bm);
eU.setToolTipText(bs);
eU.setUserData(cX,cy);
eM.add(eU);
var eQ=this.viewGroup=new qx.ui.form.RadioGroup;
eQ.setAllowEmptySelection(true);
eQ.add(eU);
{eQ.add(fg,eW);
};
return eO;
},__Kv:function(){var ei=new qx.ui.embed.Iframe().set({nativeContextMenu:true});
ei.addListener(N,this.__KA,this);
this._iframe=ei;
return ei;
},__Kw:function(){var fm=new qx.ui.layout.VBox(0,bz,db);
fm.setAlignX(bS);
var fo=new qx.ui.container.Composite(fm);
var fk=new qx.ui.decoration.Background().set({backgroundColor:cm});
fo.setDecorator(fk);
var fn=new qx.ui.form.Button(this.tr(cx),cD);
fn.setAllowGrowX(false);
fn.setMargin(5);
fn.addListener(da,function(){this.logappender.clear();
},this);
fo.add(fn,{flex:0});
this.f2=new qx.ui.embed.Html();
this.f2.setOverflow(cY,cY);
this.f2.setFont(bU);
this.f2.setBackgroundColor(bY);
this.logappender=new qx.log.appender.Element();
qx.log.Logger.unregister(this.logappender);
var fl=document.createElement(bT);
this.logelem=document.createElement(bT);
this.logelem.style.padding=dt;
this.logappender.setElement(this.logelem);
fl.appendChild(this.logelem);
this.f2.getContentElement().useElement(fl);
fo.add(this.f2,{flex:1});
return fo;
},__Kx:function(){var gp=new qx.ui.embed.Html(dE);
gp.setOverflow(cY,cY);
gp.setFont(bU);
gp.setBackgroundColor(bY);
this.widgets[cq]=gp;
gp.getContentElement().setAttribute(bQ,dc);
return gp;
},__Ky:function(){var fK=new qx.ui.embed.Html(J);
fK.setOverflow(cY,cY);
fK.setFont(bU);
fK.setBackgroundColor(bY);
this.widgets[ds]=fK;
fK.getContentElement().setAttribute(bQ,dc);
return fK;
},__Kz:function(){var ef=new qx.ui.tree.Tree();
var ee=new qx.ui.tree.TreeFolder(cC);
ef.setAppearance(cu);
ef.setRoot(ee);
ef.setSelection([ee]);
this.tree=this.widgets[cf]=ef;
ef.addListener(cQ,this.treeGetSelection,this);
ef.addListener(H,function(e){qx.event.Timer.once(this.runSample,this,50);
},this);
return ef;
},treeGetSelection:function(e){var f=this.tree.getSelection()[0];
var g=f.getUserData(cR);
this.tests.selected=this.tests.handler.getFullName(g);
},leftReloadTree:function(e){this._sampleToTreeNodeMap={};
var ej=this._sampleToTreeNodeMap;
var ep=null;
var es=null;
var er;
{er=/\?autorun=true/.test(location.href);
};
var eo=this._history.getState();
var em=eo.match(/([^~]+)~/);

if(em){ep=em[1];
}else{var ek=eo.match(/([^~][\w]*)/);

if(ek){ep=ek[1];

if(er){this.setPlayDemos(bW);
}}else{ep=bi;

if(er){this.setPlayDemos(bV);
}}}function eq(ez,eA){var eE=eA.getChildren();
var t;

for(var i=0;i<eE.length;i++){var eB=eE[i];

if(eB.hasChildren()){t=new qx.ui.tree.TreeFolder(el.polish(eB.label));
t.setUserData(cE,false);
t.setUserData(dh,eB);
eq(t,t.getUserData(dh));

if(eB.label==ep){es=t;
t.setOpen(true);
}}else{t=new qx.ui.tree.TreeFile(el.polish(eB.label));
var eD=eB.pwd().slice(1).join(cW)+cW+eB.label;

if(eB.tags){var j,m,eC;
t.setUserData(ca,eB.tags);
{};
}ej[eD]=t;
}ez.add(t);
t.setUserData(cR,eB);
eB.widgetLinkFull=t;
}}var en=this.tests.handler.ttree;
var el=this;
this.tree.setUserData(cR,en);
this.tree.getRoot().setOpen(true);
eq(this.tree.getRoot(),en);
{};

if(es!=null){this.tree.setSelection([es]);
}},runSample:function(e){if(e&&e.getType()===da){if(this.tests.selected===cV){this.setPlayDemos(bV);
}else if(this.tests.selected.indexOf(bX)>0){this.setPlayDemos(cU);
}else{this.setPlayDemos(bW);
}}this._runbutton.setVisibility(cT);
this._stopbutton.setVisibility(cS);

if(this.tests.selected!=cV){var dT=this.tests.selected.replace(cn,cW);
this.setCurrentSample(dT);
}else{this.playNext();
}},stopSample:function(e){this.setPlayDemos(cU);
this._stopbutton.setVisibility(cT);
this._runbutton.setVisibility(cS);
},setCurrentSample:function(dI){if(!dI){return;
}
if(!this._sampleToTreeNodeMap){return;
}var dJ;
var dK=this._sampleToTreeNodeMap[dI];

if(dK){dK.getTree().setSelection([dK]);
dJ=bJ+dI;
{dJ+=dn+this.__Kc;
};
}else{dJ=this.defaultUrl;
}
if(this._iframe.getSource()==dJ){this._iframe.reload();
}else{this.__Kg=false;
this._iframe.setSource(dJ);
}if(dJ==this.defaultUrl){this.disableMenuButtons();
}else{this.enableMenuButtons();
}this._currentSample=dI;
this._currentSampleUrl=dJ;
},__KA:function(){var fO=this._iframe.getWindow();
var fU=this._iframe.getSource();

if(fU!=null&&fU!=this.defaultUrl){var fN;

try{fN=fO.location.href;
}catch(eb){fN=window.location.href;
var fV=fN.lastIndexOf("/");

if(fV!=-1){fN=fN.substring(0,fV+1);
}fN+=fU;
}var fS=fN.indexOf("/demo/")+6;
var fP=fN.indexOf("?");
fP=fP==-1?fN.length:fP;
var fQ=fN.substring(fS,fP).split("/");
var fT=String.fromCharCode(187);

if(fQ.length==2){var fL=fQ[0];
fL=fL.charAt(0).toUpperCase()+fL.substring(1);
var fR=fQ[1].replace(".html","").replace("_"," ");
fR=fR.charAt(0).toUpperCase()+fR.substring(1);
var fM="qooxdoo "+fT+" Demo Browser "+fT+" "+fL+" "+fT+" "+fR;
}else{var fM="qooxdoo "+fT+" Demo Browser "+fT+" Start";
}document.title=fM;
}if(this.getPlayDemos()!="current"){if(!fR){this.playNext();
}else{var self=this;
qx.event.Timer.once(this.playNext,self,5000);
}}else{this._stopbutton.setVisibility("excluded");
this._runbutton.setVisibility("visible");
}},__KB:function(e){var go=this._iframe.getWindow();

try{if(go&&go.qx&&go.qx.log&&go.qx.log.appender){if(!this.__Kg){this.__Kg=true;
this.debug("Demo loaded: "+this._currentSample);
this.logappender.$$id=null;
this.logappender.clear();

try{go.qx.log.Logger.register(this.logappender);
}catch(e){return ;
}this._history.addToHistory(this._currentSample.replace("/","~"),document.title);
if(this._currentSampleUrl!=this.defaultUrl){this.__KC(this._currentSampleUrl);
}}}else{this.__Kg=false;
}}catch(ea){this.__Kg=false;
}},filter:function(fA){var fI=new RegExp(cF+fA+bG,by);
var fG=this._tree.getRoot().getItems(true,true);
var fH=0;
var fB=0;

for(var i=0;i<fG.length;i++){var fJ=fG[i];
var parent=fJ.getParent();
var fF=fJ.getUserData(ca);
var fC=false;

if(fF!=null){for(var j=0;j<fF.length;j++){fC=!!fF[j].match(fI);

if(fC){break;
}}}
if(fJ.getChildren().length==0){fB++;
}
if((fC||(fJ.getLabel().search(fI)!=-1)||(parent.getLabel().search(fI)!=-1))){if(fJ.getChildren().length==0){fH++;
}fJ.show();
fJ.getParent().setOpen(true);
fJ.getParent().show();
}else{fJ.exclude();
}}if(fA==cV){var fE=this._tree.getRoot().getItems(false,true);
var fD=this._tree.getSelection();
for(var i=0;i<fE.length;i++){if(fE[i]==fD[0]||fE[i]==fD[0].getParent()){continue;
}fE[i].setOpen(false);
}}this._status.setValue(fH+cW+fB);
},__KC:function(eg){if(typeof (eg)!="string"){return;
}var eh=new qx.io.remote.Request(eg);
eh.setTimeout(180000);
eh.setProhibitCaching(false);
eh.addListener("completed",function(h){var content=h.getContent();
if(content){{var n=content.indexOf("<script",content.indexOf("<script")+7);
var y=content.indexOf("src",n);
var l=content.indexOf("\"",y+5);
var o=content.substring(y+5,l);
var v=o.substring(4,o.length-3)+".src.js";
var u="script/demobrowser.demo";
var q=eg.split('/');
var p=q[1];
var x=q[2];
x=x.substr(0,x.indexOf('.html'));
u+="."+p+"."+x+".src.js";
v=u;
var k=new qx.io.remote.Request(v);
k.setTimeout(180000);
k.setProhibitCaching(false);
k.addListener("completed",function(dR){var dS=dR.getContent();
this.__Kq(dS);

if(dS){this.widgets["outputviews.sourcepage.js.page"].setHtml(this.__KD(dS,"javascript"));
}},this);
k.addListener("failed",function(a){this.error("Couldn't load file: "+eg);
},this);
k.send();
this.widgets["outputviews.sourcepage.html.page"].setHtml(this.__KD(content));
};
}},this);
eh.addListener("failed",function(dY){this.error("Couldn't load file: "+eg);
},this);
eh.send();
},dataLoader:function(ec){var ed=new qx.io.remote.Request(ec);
ed.setTimeout(180000);
ed.setProhibitCaching(false);
ed.addListener(dC,function(dL){var content=dL.getContent();
var dM=eval(content);
qx.event.Timer.once(function(){this.tests.handler=new demobrowser.TreeDataHandler(dM);
this.leftReloadTree();
var c=this._history.getState();

if(c){this.setCurrentSample(c.replace(de,cW));
}else{this.setCurrentSample(this.defaultUrl);
}},this,0);
},this);
ed.addListener(dF,function(ge){this.error("Couldn't load file: "+ec);
},this);
ed.send();
},playPrev:function(e){this.setPlayDemos(cU);
var ga=this.tree.getSelection()[0];

if(ga){var fW=this.tree.getPreviousNodeOf(ga,false);

if(!fW||fW==this.tree.getRoot()){return;
}
while(fW.isVisible&&!fW.isVisible()){fW=this.tree.getPreviousNodeOf(fW,false);
}
if(fW.getParent()==this.tree.getRoot()){var fY=this.tree.getPreviousNodeOf(fW,false);

while(fY.isVisible&&!fY.isVisible()){fY=this.tree.getPreviousNodeOf(fY,false);
}
if(fY.getParent()==this.tree.getRoot()){fY.setOpen(true);
var fX=this.tree.getPreviousNodeOf(fW,false);

while(fX.isVisible&&!fX.isVisible()){fX=this.tree.getPreviousNodeOf(fX,false);
}
if(fY!==fX){fW=fX;
}}else{fW=fY;
}}
if(!fW||fW===ga){this._stopbutton.setVisibility(cT);
this._runbutton.setVisibility(cS);
return;
}else{this.tree.setSelection([fW]);
this.runSample();
}}},playNext:function(e){var fj=this.tree.getSelection()[0];

if(fj){var fh=this.tree.getNextNodeOf(fj,false);

if(!fh){return;
}
if(fh.getParent()==this.tree.getRoot()){fh.setOpen(true);
fh=this.tree.getNextNodeOf(fh,false);
}
if(!fh){return;
}
while(!fh.isVisible()){var fi=this.tree.getNextNodeOf(fh,false);

if(!fi){return ;
}
if(fi.getParent()==this.tree.getRoot()){fh.setOpen(true);
var fi=this.tree.getNextNodeOf(fi,false);
}fh=fi;
}
if(fh){this.tree.setSelection([fh]);
this.runSample();
}else{this._stopbutton.setVisibility(cT);
this._runbutton.setVisibility(cS);
}}},__KD:function(gf,gg){var gh=new qx.util.StringBuilder("<pre class='script'>");
var gj=[];
var gk=new qx.util.StringBuilder();
var gl=/^\s*<script\b[^>]*?(?!\bsrc\s*=)[^>]*?>\s*$/i;
var gi=/^\s*<\/script>\s*$/i;
gf=gf.replace(/\r\n/g,"\n").replace(/\r/g,"\n");
var gj=gf.split('\n');
if(gg=="javascript"){return "<pre ><div class='script'>"+qx.dev.Tokenizer.javaScriptToHtml(gf)+"</div></pre>";
}
for(var i=0;i<gj.length;i++){if(gl.exec(gj[i])){gh.add(this.__KE(qx.bom.String.escape(gk.get()+gj[i])));
gk.clear();
}else if(gi.exec(gj[i])){var gm=qx.dev.Tokenizer.javaScriptToHtml(gk.get());
gh.add('<div class="script">',gm,'</div>');
gk.clear();
gk.add(gj[i],'\n');
}else{gk.add(gj[i],'\n');
}}gh.add(this.__KE(qx.bom.String.escape(gk.get())),"</pre>");
return gh.get();
},disableMenuButtons:function(){var d=this.__Ke;

for(var i=0;i<d.length;i++){d[i].setEnabled(false);
}},enableMenuButtons:function(){var dG=this.__Ke;

for(var i=0;i<dG.length;i++){dG[i].setEnabled(true);
}},__KE:function(gq){var gs=gq;
function gr(dN){var s=new qx.util.StringBuilder(arguments[1],'<span class="html-tag-name">',arguments[2],'</span>');
var dO;
var dP=false;
if(arguments.length-2>3){for(var i=3;i<arguments.length-2;i++){dO=arguments[i];

if(dO=="/"){dP=true;
break;
}else{var m=/\s*([^=]+?)\s*=\s*((?!&quot;)\S+|&quot;.*?&quot;)\s*/g;
var r;

while((r=m.exec(dO))!=null){s.add(' <span class="keyword">',r[1],'</span>=<span class="string">',r[2].replace(/\s*$/,""),'</span>');
}}}s.add((dP?"/":""));
}s.add('&gt;');
return s.get();
}gs=gs.replace(/(&lt;\/?)([a-zA-Z]+)(.*?)(\/?)&gt;/g,gr);
return gs;
},polish:function(dX){return dX.replace(R,cV).replace(cg,bH);
},__KF:function(){var w=this._iframe.getWindow();
var et;

if(w.qx&&w.qx.log&&w.qx.log.Logger){et=w.qx.log.Logger;
et.register(this.logappender);
et.clear();
et.unregister(this.logappender);
}},__KG:function(e){this.__Kc=e.getData()[0].getUserData("value");
this.runSample();
},_createHeader:function(){var eJ=new qx.ui.layout.HBox();
var eH=new qx.ui.container.Composite(eJ);
eH.setAppearance(bO);
var eK=new qx.ui.basic.Label(F);
var eI=new qx.ui.basic.Label(ck+qx.core.Setting.get(bR));
eH.add(eK);
eH.add(new qx.ui.core.Spacer,{flex:1});
eH.add(eI);
return eH;
}},destruct:function(){this.widgets=this.tests=this._sampleToTreeNodeMap=this.tree=this.logelem=null;
this._disposeObjects(dr,bp,C,cG,bf,bu,bC,P,W,cs,cI,cl,cp,bk,bg,Q,dv,V,bD,br,U,K,ci,Y,cH,bq,dw,G,z,df,dy,bK,dz,df);
}});
})();
(function(){var w="_applyLayoutChange",v="top",u="qx.debug",t="left",s="height",r="middle",q="Decorator",p="center",o="_applyReversed",n="bottom",f="' is not supported by the VBox layout!",m="on",j="qx.ui.layout.VBox",e="flex",d="Integer",h="Layout utility returned invalid gaps. Used separator: ",g="The property '",k="right",c="Boolean";
qx.Class.define(j,{extend:qx.ui.layout.Abstract,construct:function(x,y,z){qx.ui.layout.Abstract.call(this);

if(x){this.setSpacing(x);
}
if(y){this.setAlignY(y);
}
if(z){this.setSeparator(z);
}},properties:{alignY:{check:[v,r,n],init:v,apply:w},alignX:{check:[t,p,k],init:t,apply:w},spacing:{check:d,init:0,apply:w},separator:{check:q,nullable:true,apply:w},reversed:{check:c,init:false,apply:o}},members:{__kg:null,__kh:null,__ki:null,__kj:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__kk:function(){var U=this._getLayoutChildren();
var length=U.length;
var Q=false;
var P=this.__kg&&this.__kg.length!=length&&this.__kh&&this.__kg;
var S;
var R=P?this.__kg:new Array(length);
var T=P?this.__kh:new Array(length);
if(this.getReversed()){U=U.concat().reverse();
}for(var i=0;i<length;i++){S=U[i].getLayoutProperties();

if(S.height!=null){R[i]=parseFloat(S.height)/100;
}
if(S.flex!=null){T[i]=S.flex;
Q=true;
}else{T[i]=0;
}}if(!P){this.__kg=R;
this.__kh=T;
}this.__ki=Q;
this.__kj=U;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(u,{"on":function(a,name,b){this.assert(name===e||name===s,g+name+f);

if(name==s){this.assertMatch(b,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(b);
this.assert(b>=0);
}},"off":null}),renderLayout:function(V,W){if(this._invalidChildrenCache){this.__kk();
}var be=this.__kj;
var length=be.length;
var bo=qx.ui.layout.Util;
var bn=this.getSpacing();
var br=this.getSeparator();

if(br){var bb=bo.computeVerticalSeparatorGaps(be,bn,br);
}else{var bb=bo.computeVerticalGaps(be,bn,true);
}var i,Y,ba,bi;
var bj=[];
var bp=bb;

for(i=0;i<length;i+=1){bi=this.__kg[i];
ba=bi!=null?Math.floor((W-bb)*bi):be[i].getSizeHint().height;
bj.push(ba);
bp+=ba;
}if(this.__ki&&bp!=W){var bg={};
var bm,bq;

for(i=0;i<length;i+=1){bm=this.__kh[i];

if(bm>0){bf=be[i].getSizeHint();
bg[i]={min:bf.minHeight,value:bj[i],max:bf.maxHeight,flex:bm};
}}var bc=bo.computeFlexOffsets(bg,W,bp);

for(i in bc){bq=bc[i].offset;
bj[i]+=bq;
bp+=bq;
}}var top=be[0].getMarginTop();
if(bp<W&&this.getAlignY()!=v){top=W-bp;

if(this.getAlignY()===r){top=Math.round(top/2);
}}var bf,bt,bk,ba,bh,bl,bd;
this._clearSeparators();
if(br){var bs=qx.theme.manager.Decoration.getInstance().resolve(br).getInsets();
var X=bs.top+bs.bottom;
}for(i=0;i<length;i+=1){Y=be[i];
ba=bj[i];
bf=Y.getSizeHint();
bl=Y.getMarginLeft();
bd=Y.getMarginRight();
bk=Math.max(bf.minWidth,Math.min(V-bl-bd,bf.maxWidth));
bt=bo.computeHorizontalAlignOffset(Y.getAlignX()||this.getAlignX(),bk,V,bl,bd);
if(i>0){if(br){top+=bh+bn;
this._renderSeparator(br,{top:top,left:0,height:X,width:V});
top+=X+bn+Y.getMarginTop();
}else{top+=bo.collapseMargins(bn,bh,Y.getMarginTop());
}}Y.renderLayout(bt,top,bk,ba);
top+=ba;
bh=Y.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kk();
}var G=qx.ui.layout.Util;
var O=this.__kj;
var C=0,F=0,E=0;
var A=0,H=0;
var L,B,N;
for(var i=0,l=O.length;i<l;i+=1){L=O[i];
B=L.getSizeHint();
F+=B.height;
var K=this.__kh[i];
var D=this.__kg[i];

if(K){C+=B.minHeight;
}else if(D){E=Math.max(E,Math.round(B.minHeight/D));
}else{C+=B.height;
}N=L.getMarginLeft()+L.getMarginRight();
if((B.width+N)>H){H=B.width+N;
}if((B.minWidth+N)>A){A=B.minWidth+N;
}}C+=E;
var J=this.getSpacing();
var M=this.getSeparator();

if(M){var I=G.computeVerticalSeparatorGaps(O,J,M);
}else{var I=G.computeVerticalGaps(O,J,true);
}if(qx.core.Variant.isSet(u,m)){this.assertInteger(I,h+M);
}return {minHeight:C+I,height:F+I,minWidth:A,width:H};
}},destruct:function(){this.__kg=this.__kh=this.__kj=null;
}});
})();
(function(){var k="splitter",j="slider",i="mousedown",h="mouseout",g="mousemove",f="mouseup",d="losecapture",c="active",b="horizontal",a="vertical",C="knob",B="Integer",A="height",z="row-resize",w="move",v="maxHeight",u="width",t="_applyOrientation",s="mouseover",r="splitpane",p="qx.ui.splitpane.Pane",q="_applyOffset",n="minHeight",o="minWidth",l="col-resize",m="maxWidth";
qx.Class.define(p,{extend:qx.ui.core.Widget,construct:function(D){qx.ui.core.Widget.call(this);
this.__qW=[];
if(D){this.setOrientation(D);
}else{this.initOrientation();
}this.addListener(i,this._onMouseDown);
this.addListener(f,this._onMouseUp);
this.addListener(g,this._onMouseMove);
this.addListener(h,this._onMouseOut);
this.addListener(d,this._onMouseUp);
},properties:{appearance:{refine:true,init:r},offset:{check:B,init:6,apply:q},orientation:{init:b,check:[b,a],apply:t}},members:{__qX:null,__qY:false,__ra:null,__rb:null,__rc:null,__rd:null,__re:null,__qW:null,_createChildControlImpl:function(bu){var bv;

switch(bu){case j:bv=new qx.ui.splitpane.Slider(this);
bv.exclude();
this._add(bv,{type:bu});
break;
case k:bv=new qx.ui.splitpane.Splitter(this);
this._add(bv,{type:bu});
bv.addListener(w,this._onSplitterMove,this);
if(qx.bom.client.Engine.OPERA){bv.addListener(s,this._onSplitterMouseOver,bv);
}break;
}return bv||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bu);
},_applyOrientation:function(bl,bm){var bn=this.getChildControl(j);
var bq=this.getChildControl(k);
this.__rc=bl===b;
var bp=this._getLayout();

if(bp){bp.dispose();
}var bo=bl===a?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(bo);
bq.removeState(bm);
bq.addState(bl);
bq.getChildControl(C).removeState(bm);
bq.getChildControl(C).addState(bl);
bn.removeState(bm);
bn.addState(bl);
},_applyOffset:function(E,F){var G=this.getChildControl(k);

if(F===0){G.removeListener(i,this._onMouseDown,this);
G.removeListener(g,this._onMouseMove,this);
G.removeListener(h,this._onMouseOut,this);
G.removeListener(f,this._onMouseUp,this);
G.removeListener(d,this._onMouseUp,this);
this.addListener(i,this._onMouseDown);
this.addListener(f,this._onMouseUp);
this.addListener(g,this._onMouseMove);
this.addListener(h,this._onMouseOut);
this.addListener(d,this._onMouseUp);
}
if(E===0){this.removeListener(i,this._onMouseDown);
this.removeListener(f,this._onMouseUp);
this.removeListener(g,this._onMouseMove);
this.removeListener(h,this._onMouseOut);
this.removeListener(d,this._onMouseUp);
G.addListener(i,this._onMouseDown,this);
G.addListener(g,this._onMouseMove,this);
G.addListener(h,this._onMouseOut,this);
G.addListener(f,this._onMouseUp,this);
G.addListener(d,this._onMouseUp,this);
}},add:function(bz,bA){if(bA==null){this._add(bz);
}else{this._add(bz,{flex:bA});
}this.__qW.push(bz);
},remove:function(br){this._remove(br);
qx.lang.Array.remove(this.__qW,br);
},getChildren:function(){return this.__qW;
},_onMouseDown:function(e){if(!e.isLeftPressed()||!this._isNear()){return;
}var O=this.getChildControl(k);
var Q=O.getContainerLocation();
var P=this.getContentLocation();
this.__qX=this.__rc?e.getDocumentLeft()-Q.left+P.left:e.getDocumentTop()-Q.top+P.top;
var S=this.getChildControl(j);
var R=O.getBounds();
S.setUserBounds(R.left,R.top,R.width,R.height);
S.setZIndex(O.getZIndex()+1);
S.show();
this.__qY=true;
e.getCurrentTarget().capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__qY){this.__rg();
var bs=this.getChildControl(j);
var bt=this.__rd;

if(this.__rc){bs.setDomLeft(bt);
}else{bs.setDomTop(bt);
}e.stop();
}else{this.__rf();
}},_onMouseOut:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
this.__rf();
},_onMouseUp:function(e){if(!this.__qY){return;
}this._finalizeSizes();
var bB=this.getChildControl(j);
bB.exclude();
this.__qY=false;
this.releaseCapture();
this.__rf();
e.stop();
},_onSplitterMove:function(){this.__rf();
},_onSplitterMouseOver:function(){this.addState(c);
},_finalizeSizes:function(){var bh=this.__rd;
var be=this.__re;

if(bh==null){return;
}var bj=this._getChildren();
var bi=bj[2];
var bf=bj[3];
var bg=bi.getLayoutProperties().flex;
var bk=bf.getLayoutProperties().flex;
if((bg!=0)&&(bk!=0)){bi.setLayoutProperties({flex:bh});
bf.setLayoutProperties({flex:be});
}else{if(this.__rc){bi.setWidth(bh);
bf.setWidth(be);
}else{bi.setHeight(bh);
bf.setHeight(be);
}}},_isNear:function(){var H=this.getChildControl(k);
var J=H.getBounds();
var L=H.getContainerLocation();
var I=this.getOffset();
if(!L){return false;
}var M=this.__ra;
var N=J.width;
var K=L.left;

if(N<I){K-=Math.floor((I-N)/2);
N=I;
}
if(M<K||M>(K+N)){return false;
}var M=this.__rb;
var N=J.height;
var K=L.top;

if(N<I){K-=Math.floor((I-N)/2);
N=I;
}
if(M<K||M>(K+N)){return false;
}return true;
},__rf:function(){var bx=this.getChildControl(k);
var by=this.getApplicationRoot();
if(this.__qY||this._isNear()){var bw=this.__rc?l:z;
this.setCursor(bw);
by.setGlobalCursor(bw);
bx.addState(c);
}else if(bx.hasState(c)){this.resetCursor();
by.resetGlobalCursor();
bx.removeState(c);
}},__rg:function(){if(this.__rc){var V=o,bd=u,W=m,bb=this.__ra;
}else{var V=n,bd=A,W=v,bb=this.__rb;
}var bc=this._getChildren();
var T=bc[2].getSizeHint();
var Y=bc[3].getSizeHint();
var ba=bc[2].getBounds()[bd]+bc[3].getBounds()[bd];
var X=bb-this.__qX;
var U=ba-X;
if(X<T[V]){U-=T[V]-X;
X=T[V];
}else if(U<Y[V]){X-=Y[V]-U;
U=Y[V];
}if(X>T[W]){U+=X-T[W];
X=T[W];
}else if(U>Y[W]){X+=U-Y[W];
U=Y[W];
}this.__rd=X;
this.__re=U;
},_isActiveDragSession:function(){return this.__qY;
},_setLastMousePosition:function(x,y){this.__ra=x;
this.__rb=y;
}},destruct:function(){this.__qW=null;
}});
})();
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var e="center",d="knob",c="middle",b="qx.ui.splitpane.Splitter",a="vertical";
qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
if(f.getOrientation()==a){this._setLayout(new qx.ui.layout.HBox(0,e));
this._getLayout().setAlignY(c);
}else{this._setLayout(new qx.ui.layout.VBox(0,c));
this._getLayout().setAlignX(e);
}this._createChildControl(d);
},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(g){var h;

switch(g){case d:h=new qx.ui.basic.Image;
this._add(h);
break;
}return h||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var u="_applyLayoutChange",t="left",s="width",r="qx.debug",q="center",p="top",o="Decorator",n="middle",m="_applyReversed",k="bottom",d="' is not supported by the HBox layout!",j="on",g="Boolean",c="flex",b="right",f="Integer",e="Layout utility returned invalid gaps. Used separator: ",h="The property '",a="qx.ui.layout.HBox";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,construct:function(bl,bm,bn){qx.ui.layout.Abstract.call(this);

if(bl){this.setSpacing(bl);
}
if(bm){this.setAlignX(bm);
}
if(bn){this.setSeparator(bn);
}},properties:{alignX:{check:[t,q,b],init:t,apply:u},alignY:{check:[p,n,k],init:p,apply:u},spacing:{check:f,init:0,apply:u},separator:{check:o,nullable:true,apply:u},reversed:{check:g,init:false,apply:m}},members:{__lo:null,__lp:null,__lq:null,__lr:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__ls:function(){var bt=this._getLayoutChildren();
var length=bt.length;
var bq=false;
var bo=this.__lo&&this.__lo.length!=length&&this.__lp&&this.__lo;
var br;
var bp=bo?this.__lo:new Array(length);
var bs=bo?this.__lp:new Array(length);
if(this.getReversed()){bt=bt.concat().reverse();
}for(var i=0;i<length;i++){br=bt[i].getLayoutProperties();

if(br.width!=null){bp[i]=parseFloat(br.width)/100;
}
if(br.flex!=null){bs[i]=br.flex;
bq=true;
}else{bs[i]=0;
}}if(!bo){this.__lo=bp;
this.__lp=bs;
}this.__lq=bq;
this.__lr=bt;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(r,{"on":function(bj,name,bk){this.assert(name===c||name===s,h+name+d);

if(name==s){this.assertMatch(bk,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(bk);
this.assert(bk>=0);
}},"off":null}),renderLayout:function(K,L){if(this._invalidChildrenCache){this.__ls();
}var R=this.__lr;
var length=R.length;
var bb=qx.ui.layout.Util;
var ba=this.getSpacing();
var be=this.getSeparator();

if(be){var O=bb.computeHorizontalSeparatorGaps(R,ba,be);
}else{var O=bb.computeHorizontalGaps(R,ba,true);
}var i,M,X,W;
var bd=[];
var S=O;

for(i=0;i<length;i+=1){W=this.__lo[i];
X=W!=null?Math.floor((K-O)*W):R[i].getSizeHint().width;
bd.push(X);
S+=X;
}if(this.__lq&&S!=K){var U={};
var Y,bc;

for(i=0;i<length;i+=1){Y=this.__lp[i];

if(Y>0){T=R[i].getSizeHint();
U[i]={min:T.minWidth,value:bd[i],max:T.maxWidth,flex:Y};
}}var P=bb.computeFlexOffsets(U,K,S);

for(i in P){bc=P[i].offset;
bd[i]+=bc;
S+=bc;
}}var bi=R[0].getMarginLeft();
if(S<K&&this.getAlignX()!=t){bi=K-S;

if(this.getAlignX()===q){bi=Math.round(bi/2);
}}var T,top,N,X,Q,bg,V;
var ba=this.getSpacing();
this._clearSeparators();
if(be){var bf=qx.theme.manager.Decoration.getInstance().resolve(be).getInsets();
var bh=bf.left+bf.right;
}for(i=0;i<length;i+=1){M=R[i];
X=bd[i];
T=M.getSizeHint();
bg=M.getMarginTop();
V=M.getMarginBottom();
N=Math.max(T.minHeight,Math.min(L-bg-V,T.maxHeight));
top=bb.computeVerticalAlignOffset(M.getAlignY()||this.getAlignY(),N,L,bg,V);
if(i>0){if(be){bi+=Q+ba;
this._renderSeparator(be,{left:bi,top:0,width:bh,height:L});
bi+=bh+ba+M.getMarginLeft();
}else{bi+=bb.collapseMargins(ba,Q,M.getMarginLeft());
}}M.renderLayout(bi,top,X,N);
bi+=X;
Q=M.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ls();
}var B=qx.ui.layout.Util;
var J=this.__lr;
var v=0,C=0,z=0;
var y=0,A=0;
var G,w,I;
for(var i=0,l=J.length;i<l;i+=1){G=J[i];
w=G.getSizeHint();
C+=w.width;
var F=this.__lp[i];
var x=this.__lo[i];

if(F){v+=w.minWidth;
}else if(x){z=Math.max(z,Math.round(w.minWidth/x));
}else{v+=w.width;
}I=G.getMarginTop()+G.getMarginBottom();
if((w.height+I)>A){A=w.height+I;
}if((w.minHeight+I)>y){y=w.minHeight+I;
}}v+=z;
var E=this.getSpacing();
var H=this.getSeparator();

if(H){var D=B.computeHorizontalSeparatorGaps(J,E,H);
}else{var D=B.computeHorizontalGaps(J,E,true);
}if(qx.core.Variant.isSet(r,j)){this.assertInteger(D,e+H);
}return {minWidth:v+D,width:C+D,minHeight:y,height:A};
}},destruct:function(){this.__lo=this.__lp=this.__lr=null;
}});
})();
(function(){var h="slider",g="type",f="flex",e="splitter",d="qx.ui.splitpane.VLayout",c="qx.debug",b="' is not supported by the split layout!",a="The property '";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(c,{"on":function(N,name,O){this.assert(name===g||name===f,a+name+b);

if(name==f){this.assertNumber(O);
}
if(name==g){this.assertString(O);
}},"off":null}),renderLayout:function(j,k){var A=this._getLayoutChildren();
var length=A.length;
var w,z;
var m,l,u,n;

for(var i=0;i<length;i++){w=A[i];
z=w.getLayoutProperties().type;

if(z===e){l=w;
}else if(z===h){u=w;
}else if(!m){m=w;
}else{n=w;
}}
if(m&&n){var C=m.getLayoutProperties().flex;
var p=n.getLayoutProperties().flex;

if(C==null){C=1;
}
if(p==null){p=1;
}var B=m.getSizeHint();
var s=l.getSizeHint();
var t=n.getSizeHint();
var o=B.height;
var x=s.height;
var y=t.height;

if(C>0&&p>0){var q=C+p;
var r=k-x;
var o=Math.round((r/q)*C);
var y=r-o;
var v=qx.ui.layout.Util.arrangeIdeals(B.minHeight,o,B.maxHeight,t.minHeight,y,t.maxHeight);
o=v.begin;
y=v.end;
}else if(C>0){o=k-x-y;

if(o<B.minHeight){o=B.minHeight;
}
if(o>B.maxHeight){o=B.maxHeight;
}}else if(p>0){y=k-o-x;

if(y<t.minHeight){y=t.minHeight;
}
if(y>t.maxHeight){y=t.maxHeight;
}}m.renderLayout(0,0,j,o);
l.renderLayout(0,o,j,x);
n.renderLayout(0,o+x,j,y);
}else{l.renderLayout(0,0,0,0);
if(m){m.renderLayout(0,0,j,k);
}else if(n){n.renderLayout(0,0,j,k);
}}},_computeSizeHint:function(){var M=this._getLayoutChildren();
var length=M.length;
var F,E,L;
var G=0,I=0,H=0;
var J=0,K=0,D=0;

for(var i=0;i<length;i++){F=M[i];
L=F.getLayoutProperties();
if(L.type===h){continue;
}E=F.getSizeHint();
G+=E.minHeight;
I+=E.height;
H+=E.maxHeight;

if(E.minWidth>J){J=E.minWidth;
}
if(E.width>K){K=E.width;
}
if(E.maxWidth>D){D=E.maxWidth;
}}return {minHeight:G,height:I,maxHeight:H,minWidth:J,width:K,maxWidth:D};
}}});
})();
(function(){var h="slider",g="type",f="flex",e="splitter",d="qx.ui.splitpane.HLayout",c="' is not supported by the split layout!",b="The property '",a="qx.debug";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(a,{"on":function(j,name,k){this.assert(name===g||name===f,b+name+c);

if(name==f){this.assertNumber(k);
}
if(name==g){this.assertString(k);
}},"off":null}),renderLayout:function(v,w){var M=this._getLayoutChildren();
var length=M.length;
var J,L;
var y,x,G,z;

for(var i=0;i<length;i++){J=M[i];
L=J.getLayoutProperties().type;

if(L===e){x=J;
}else if(L===h){G=J;
}else if(!y){y=J;
}else{z=J;
}}
if(y&&z){var O=y.getLayoutProperties().flex;
var A=z.getLayoutProperties().flex;

if(O==null){O=1;
}
if(A==null){A=1;
}var N=y.getSizeHint();
var D=x.getSizeHint();
var F=z.getSizeHint();
var K=N.width;
var I=D.width;
var H=F.width;

if(O>0&&A>0){var B=O+A;
var C=v-I;
var K=Math.round((C/B)*O);
var H=C-K;
var E=qx.ui.layout.Util.arrangeIdeals(N.minWidth,K,N.maxWidth,F.minWidth,H,F.maxWidth);
K=E.begin;
H=E.end;
}else if(O>0){K=v-I-H;

if(K<N.minWidth){K=N.minWidth;
}
if(K>N.maxWidth){K=N.maxWidth;
}}else if(A>0){H=v-K-I;

if(H<F.minWidth){H=F.minWidth;
}
if(H>F.maxWidth){H=F.maxWidth;
}}y.renderLayout(0,0,K,w);
x.renderLayout(K,0,I,w);
z.renderLayout(K+I,0,H,w);
}else{x.renderLayout(0,0,0,0);
if(y){y.renderLayout(0,0,v,w);
}else if(z){z.renderLayout(0,0,v,w);
}}},_computeSizeHint:function(){var u=this._getLayoutChildren();
var length=u.length;
var n,m,t;
var r=0,s=0,l=0;
var o=0,q=0,p=0;

for(var i=0;i<length;i++){n=u[i];
t=n.getLayoutProperties();
if(t.type===h){continue;
}m=n.getSizeHint();
r+=m.minWidth;
s+=m.width;
l+=m.maxWidth;

if(m.minHeight>o){o=m.minHeight;
}
if(m.height>q){q=m.height;
}
if(m.maxHeight>p){p=m.maxHeight;
}}return {minWidth:r,width:s,maxWidth:l,minHeight:o,height:q,maxHeight:p};
}}});
})();
(function(){var i="Boolean",h="changeInvalidMessage",g="String",f="invalid",e="qx.ui.form.MForm",d="_applyValid",c="",b="changeRequired",a="changeValid";
qx.Mixin.define(e,{properties:{valid:{check:i,init:true,apply:d,event:a},required:{check:i,init:false,event:b},invalidMessage:{check:g,init:c,event:h},requiredInvalidMessage:{check:g,nullable:true,event:h}},members:{_applyValid:function(j,k){j?this.removeState(f):this.addState(f);
}}});
})();
(function(){var t="showingPlaceholder",s="color",r="",q="none",p="qx.dynlocale",o="Boolean",n="qx.client",m="qx.event.type.Data",l="readonly",k="input",bh="focusin",bg="visibility",bf="focusout",be="changeLocale",bd="hidden",bc="on",bb="absolute",ba="readOnly",Y="text",X="_applyTextAlign",A="px",B="RegExp",y=")",z="changeValue",w="A",x="change",u="textAlign",v="focused",D="center",E="visible",L="disabled",J="url(",P="off",N="String",T="resize",R="qx.ui.form.AbstractField",G="transparent",W="spellcheck",V="false",U="right",F="PositiveInteger",H="mshtml",I="abstract",K="block",M="webkit",O="_applyReadOnly",Q="_applyPlaceholder",S="left",C="qx/static/blank.gif";
qx.Class.define(R,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:I,construct:function(bi){qx.ui.core.Widget.call(this);

if(bi!=null){this.setValue(bi);
}this.getContentElement().addListener(x,this._onChangeContent,this);
if(qx.core.Variant.isSet(p,bc)){qx.locale.Manager.getInstance().addListener(be,this._onChangeLocale,this);
}},events:{"input":m,"changeValue":m},properties:{textAlign:{check:[S,D,U],nullable:true,themeable:true,apply:X},readOnly:{check:o,apply:O,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:F,init:Infinity},liveUpdate:{check:o,init:false},placeholder:{check:N,nullable:true,apply:Q},filter:{check:B,nullable:true,init:null}},members:{__lF:true,__lG:null,__lH:null,__lI:null,getFocusElement:function(){var a=this.getContentElement();

if(a){return a;
}},_createInputElement:function(){return new qx.html.Input(Y);
},renderLayout:function(bv,top,bw,bx){var by=this._updateInsets;
var bC=qx.ui.core.Widget.prototype.renderLayout.call(this,bv,top,bw,bx);
if(!bC){return;
}var bA=bC.size||by;
var bD=A;

if(bA||bC.local||bC.margin){var bz=this.getInsets();
var innerWidth=bw-bz.left-bz.right;
var innerHeight=bx-bz.top-bz.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bB=this.getContentElement();

if(by){this.__lL().setStyles({"left":bz.left+bD,"top":bz.top+bD});
}
if(bA){this.__lL().setStyles({"width":innerWidth+bD,"height":innerHeight+bD});
bB.setStyles({"width":innerWidth+bD,"height":innerHeight+bD});
}},_createContentElement:function(){var b=this._createInputElement();
b.setStyles({"border":q,"padding":0,"margin":0,"display":K,"background":G,"outline":q,"appearance":q,"position":bb,"autoComplete":P});
b.setSelectable(this.getSelectable());
b.setEnabled(this.getEnabled());
b.addListener(k,this._onHtmlInput,this);
b.setAttribute(W,V);
if(qx.core.Variant.isSet(n,M)){b.setStyle(T,q);
}if(qx.core.Variant.isSet(n,H)){b.setStyles({backgroundImage:J+qx.util.ResourceManager.getInstance().toUri(C)+y});
}return b;
},_applyEnabled:function(bM,bN){qx.ui.core.Widget.prototype._applyEnabled.call(this,bM,bN);
this.getContentElement().setEnabled(bM);

if(bM){this._showPlaceholder();
}else{this._removePlaceholder();
}},__lJ:{width:16,height:16},_getContentHint:function(){return {width:this.__lJ.width*10,height:this.__lJ.height||16};
},_applyFont:function(bj,bk){var bl;

if(bj){var bm=qx.theme.manager.Font.getInstance().resolve(bj);
bl=bm.getStyles();
}else{bl=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bl);
this.__lL().setStyles(bl);
if(bj){this.__lJ=qx.bom.Label.getTextSize(w,bl);
}else{delete this.__lJ;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bG,bH){if(bG){this.getContentElement().setStyle(s,qx.theme.manager.Color.getInstance().resolve(bG));
this.__lL().setStyle(s,qx.theme.manager.Color.getInstance().resolve(bG));
}else{this.getContentElement().removeStyle(s);
this.__lL().removeStyle(s);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__lJ;
},_onHtmlInput:function(e){var bs=e.getData();
var br=true;
this.__lF=false;
if(this.getFilter()!=null){var bt=r;
var bp=bs.search(this.getFilter());
var bq=bs;

while(bp>=0){bt=bt+(bq.charAt(bp));
bq=bq.substring(bp+1,bq.length);
bp=bq.search(this.getFilter());
}
if(bt!=bs){br=false;
bs=bt;
this.getContentElement().setValue(bs);
}}if(bs.length>this.getMaxLength()){var br=false;
this.getContentElement().setValue(bs.substr(0,this.getMaxLength()));
}if(br){this.fireDataEvent(k,bs,this.__lI);
this.__lI=bs;
if(this.getLiveUpdate()){this.__lK(bs);
}}},__lK:function(bu){if(this.__lH!=bu){this.fireNonBubblingEvent(z,qx.event.type.Data,[bu,this.__lH]);
this.__lH=bu;
}},setValue:function(g){if(g===null){if(this.__lF){return g;
}g=r;
this.__lF=true;
}else{this.__lF=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(g)){var i=this.getContentElement();

if(g.length>this.getMaxLength()){g=g.substr(0,this.getMaxLength());
}
if(i.getValue()!=g){var j=i.getValue();
i.setValue(g);
var h=this.__lF?null:g;
this.__lH=j;
this.__lK(h);
}this._showPlaceholder();
return g;
}throw new Error("Invalid value type: "+g);
},getValue:function(){var bO=this.getContentElement().getValue();
return this.__lF?null:bO;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__lF=e.getData()===null;
this.__lK(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bn,bo){this.getContentElement().setTextSelection(bn,bo);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bF=this.getValue()||r;
var bE=this.getPlaceholder();

if(bE!=null&&bF==r&&!this.hasState(v)&&!this.hasState(L)){if(this.hasState(t)){this._syncPlaceholder();
}else{this.addState(t);
}}},_removePlaceholder:function(){if(this.hasState(t)){this.__lL().setStyle(bg,bd);
this.removeState(t);
}},_syncPlaceholder:function(){if(this.hasState(t)){this.__lL().setStyle(bg,E);
}},__lL:function(){if(this.__lG==null){this.__lG=new qx.html.Label();
this.__lG.setStyles({"visibility":bd,"zIndex":6,"position":bb});
this.getContainerElement().add(this.__lG);
}return this.__lG;
},_onChangeLocale:qx.core.Variant.select(p,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bK,bL){this.__lL().setValue(bK);

if(bK!=null){this.addListener(bh,this._removePlaceholder,this);
this.addListener(bf,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bh,this._removePlaceholder,this);
this.removeListener(bf,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(bI,bJ){this.getContentElement().setStyle(u,bI);
},_applyReadOnly:function(c,d){var f=this.getContentElement();
f.setAttribute(ba,c);

if(c){this.addState(l);
this.setFocusable(false);
}else{this.removeState(l);
this.setFocusable(true);
}}},destruct:function(){this.__lG=null;

if(qx.core.Variant.isSet(p,bc)){qx.locale.Manager.getInstance().removeListener(be,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var q="none",p="wrap",o="value",n="qx.client",m="textarea",l="off",k="on",j="qxSelectable",i="",h="webkit",d="input",g="qx.html.Input",f="select",c="disabled",b="read-only",e="userSelect";
qx.Class.define(g,{extend:qx.html.Element,construct:function(r,s,t){if(r===f||r===m){var u=r;
}else{u=d;
}qx.html.Element.call(this,u,s,t);
this.__lM=r;
},members:{__lM:null,__lN:null,__lO:null,_createDomElement:function(){return qx.bom.Input.create(this.__lM);
},_applyProperty:function(name,A){qx.html.Element.prototype._applyProperty.call(this,name,A);
var B=this.getDomElement();

if(name===o){qx.bom.Input.setValue(B,A);
}else if(name===p){qx.bom.Input.setWrap(B,A);
}},setEnabled:qx.core.Variant.select(n,{"webkit":function(a){this.__lO=a;

if(!a){this.setStyles({"userModify":b,"userSelect":q});
}else{this.setStyles({"userModify":null,"userSelect":this.__lN?null:q});
}},"default":function(x){this.setAttribute(c,x===false);
}}),setSelectable:qx.core.Variant.select(n,{"webkit":function(D){this.__lN=D;
this.setAttribute(j,D?k:l);
if(qx.core.Variant.isSet(n,h)){var E=this.__lO?D?null:q:q;
this.setStyle(e,E);
}},"default":function(w){this.setAttribute(j,w?k:l);
}}),setValue:function(y){var z=this.getDomElement();

if(z){if(z.value!=y){qx.bom.Input.setValue(z,y);
}}else{this._setProperty(o,y);
}return this;
},getValue:function(){var C=this.getDomElement();

if(C){return qx.bom.Input.getValue(C);
}return this._getProperty(o)||i;
},setWrap:function(v){if(this.__lM===m){this._setProperty(p,v);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__lM===m){return this._getProperty(p);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var bc="change",bb="input",ba="qx.client",Y="text",X="password",W="checkbox",V="radio",U="textarea",T="keypress",S="opera",M="propertychange",R="blur",P="keydown",L="keyup",K="select-multiple",O="checked",N="value",Q="select",J="qx.event.handler.Input";
qx.Class.define(J,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(ba,S)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__lP:false,__lQ:null,__lR:null,canHandleEvent:function(v,w){var x=v.tagName.toLowerCase();

if(w===bb&&(x===bb||x===U)){return true;
}
if(w===bc&&(x===bb||x===U||x===Q)){return true;
}return false;
},registerEvent:qx.core.Variant.select(ba,{"mshtml":function(y,z,A){if(!y.__lS){var B=y.tagName.toLowerCase();
var C=y.type;

if(C===Y||C===X||B===U||C===W||C===V){qx.bom.Event.addNativeListener(y,M,this._onPropertyWrapper);
}
if(C!==W&&C!==V){qx.bom.Event.addNativeListener(y,bc,this._onChangeValueWrapper);
}
if(C===Y||C===X){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,y);
qx.bom.Event.addNativeListener(y,T,this._onKeyPressWrapped);
}y.__lS=true;
}},"default":function(s,t,u){if(t===bb){this.__lT(s);
}else if(t===bc){if(s.type===V||s.type===W){qx.bom.Event.addNativeListener(s,bc,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(s,bc,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(ba,S)){if(s.type===Y||s.type===X){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,s);
qx.bom.Event.addNativeListener(s,T,this._onKeyPressWrapped);
}}}}}),__lT:qx.core.Variant.select(ba,{"mshtml":null,"webkit":function(b){var c=b.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&c==U){qx.bom.Event.addNativeListener(b,T,this._onInputWrapper);
}qx.bom.Event.addNativeListener(b,bb,this._onInputWrapper);
},"opera":function(h){qx.bom.Event.addNativeListener(h,L,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(h,P,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(h,R,this._onBlurWrapper);
qx.bom.Event.addNativeListener(h,bb,this._onInputWrapper);
},"default":function(bf){qx.bom.Event.addNativeListener(bf,bb,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(ba,{"mshtml":function(D,E){if(D.__lS){var F=D.tagName.toLowerCase();
var G=D.type;

if(G===Y||G===X||F===U||G===W||G===V){qx.bom.Event.removeNativeListener(D,M,this._onPropertyWrapper);
}
if(G!==W&&G!==V){qx.bom.Event.removeNativeListener(D,bc,this._onChangeValueWrapper);
}
if(G===Y||G===X){qx.bom.Event.removeNativeListener(D,T,this._onKeyPressWrapped);
}
try{delete D.__lS;
}catch(r){D.__lS=null;
}}},"default":function(bd,be){if(be===bb){this.__lT(bd);
}else if(be===bc){if(bd.type===V||bd.type===W){qx.bom.Event.removeNativeListener(bd,bc,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(bd,bc,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(ba,S)){if(bd.type===Y||bd.type===X){qx.bom.Event.removeNativeListener(bd,T,this._onKeyPressWrapped);
}}}}),__lU:qx.core.Variant.select(ba,{"mshtml":null,"webkit":function(j){var k=j.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&k==U){qx.bom.Event.removeNativeListener(j,T,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(j,bb,this._onInputWrapper);
},"opera":function(f){qx.bom.Event.removeNativeListener(f,L,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(f,P,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(f,R,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(f,bb,this._onInputWrapper);
},"default":function(p){qx.bom.Event.removeNativeListener(p,bb,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(ba,{"mshtml|opera":function(e,g){if(e.keyCode===13){if(g.value!==this.__lR){this.__lR=g.value;
qx.event.Registration.fireEvent(g,bc,qx.event.type.Data,[g.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(ba,{"opera":function(e){if(e.keyCode===13){this.__lP=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(ba,{"opera":function(e){if(e.keyCode===13){this.__lP=false;
}},"default":null}),_onBlur:qx.core.Variant.select(ba,{"opera":function(e){if(this.__lQ){window.clearTimeout(this.__lQ);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var a=e.target;
if(!this.__lP){if(qx.core.Variant.isSet(ba,S)){this.__lQ=window.setTimeout(function(){qx.event.Registration.fireEvent(a,bb,qx.event.type.Data,[a.value]);
},0);
}else{qx.event.Registration.fireEvent(a,bb,qx.event.type.Data,[a.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var I=e.target||e.srcElement;
var H=I.value;

if(I.type===K){var H=[];

for(var i=0,o=I.options,l=o.length;i<l;i++){if(o[i].selected){H.push(o[i].value);
}}}qx.event.Registration.fireEvent(I,bc,qx.event.type.Data,[H]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var d=e.target;

if(d.type===V){if(d.checked){qx.event.Registration.fireEvent(d,bc,qx.event.type.Data,[d.value]);
}}else{qx.event.Registration.fireEvent(d,bc,qx.event.type.Data,[d.checked]);
}}),_onProperty:qx.core.Variant.select(ba,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var m=e.target||e.srcElement;
var n=e.propertyName;

if(n===N&&(m.type===Y||m.type===X||m.tagName.toLowerCase()===U)){if(!m.$$inValueSet){qx.event.Registration.fireEvent(m,bb,qx.event.type.Data,[m.value]);
}}else if(n===O){if(m.type===W){qx.event.Registration.fireEvent(m,bc,qx.event.type.Data,[m.checked]);
}else if(m.checked){qx.event.Registration.fireEvent(m,bc,qx.event.type.Data,[m.value]);
}}}),"default":function(){}})},defer:function(q){qx.event.Registration.addHandler(q);
}});
})();
(function(){var n="",m="select",k="qx.client",j="soft",h="off",g="text",f="Unsupported input type.",e="nowrap",d="radio",c="textarea",A="auto",z="qx.debug",y="input",x="option",w="value",v="number",u="qx.bom.Input",t="normal",s="mshtml",r="wrap",p="checkbox",q="select-one",o="on";
qx.Class.define(u,{statics:{__lV:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(Y,ba,bb){if(qx.core.Variant.isSet(z,o)){qx.core.Assert.assertKeyInMap(Y,this.__lV,f);
}var ba=ba?qx.lang.Object.clone(ba):{};
var bc;

if(Y===c||Y===m){bc=Y;
}else{bc=y;
ba.type=Y;
}return qx.bom.Element.create(bc,ba,bb);
},setValue:function(P,Q){var V=P.nodeName.toLowerCase();
var S=P.type;
var Array=qx.lang.Array;
var W=qx.lang.Type;

if(typeof Q===v){Q+=n;
}
if((S===p||S===d)){if(W.isArray(Q)){P.checked=Array.contains(Q,P.value);
}else{P.checked=P.value==Q;
}}else if(V===m){var R=W.isArray(Q);
var X=P.options;
var T,U;

for(var i=0,l=X.length;i<l;i++){T=X[i];
U=T.getAttribute(w);

if(U==null){U=T.text;
}T.selected=R?Array.contains(Q,U):Q==U;
}
if(R&&Q.length==0){P.selectedIndex=-1;
}}else if(S===g&&qx.core.Variant.isSet(k,s)){P.$$inValueSet=true;
P.value=Q;
P.$$inValueSet=null;
}else{P.value=Q;
}},getValue:function(F){var L=F.nodeName.toLowerCase();

if(L===x){return (F.attributes.value||{}).specified?F.value:F.text;
}
if(L===m){var G=F.selectedIndex;
if(G<0){return null;
}var M=[];
var O=F.options;
var N=F.type==q;
var K=qx.bom.Input;
var J;
for(var i=N?G:0,I=N?G+1:O.length;i<I;i++){var H=O[i];

if(H.selected){J=K.getValue(H);
if(N){return J;
}M.push(J);
}}return M;
}else{return (F.value||n).replace(/\r/g,n);
}},setWrap:qx.core.Variant.select(k,{"mshtml":function(bd,be){bd.wrap=be?j:h;
},"gecko|webkit":function(B,C){var E=C?j:h;
var D=C?n:A;
B.setAttribute(r,E);
B.style.overflow=D;
},"default":function(a,b){a.style.whiteSpace=b?t:e;
}})}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(c){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(e){return arguments.length==1;
}}});
})();
(function(){var f="qx.ui.core.MSingleSelectionHandling",d="__iM",c="changeSelection",b="changeSelected",a="qx.event.type.Data";
qx.Mixin.define(f,{events:{"changeSelection":a},members:{__iM:null,getSelection:function(){var h=this.__iN().getSelected();

if(h){return [h];
}else{return [];
}},setSelection:function(g){switch(g.length){case 0:this.resetSelection();
break;
case 1:this.__iN().setSelected(g[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+g.length+" items!");
}},resetSelection:function(){this.__iN().resetSelected();
},isSelected:function(n){return this.__iN().isSelected(n);
},isSelectionEmpty:function(){return this.__iN().isSelectionEmpty();
},getSelectables:function(i){return this.__iN().getSelectables(i);
},_onChangeSelected:function(e){var m=e.getData();
var l=e.getOldData();
m==null?m=[]:m=[m];
l==null?l=[]:l=[l];
this.fireDataEvent(c,m,l);
},__iN:function(){if(this.__iM==null){var k=this;
this.__iM=new qx.ui.core.SingleSelectionManager({getItems:function(){return k._getItems();
},isItemSelectable:function(j){if(k._isItemSelectable){return k._isItemSelectable(j);
}else{return j.isVisible();
}}});
this.__iM.addListener(b,this._onChangeSelected,this);
}this.__iM.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__iM;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var d="_applyDynamic",c="changeSelection",b="Boolean",a="qx.ui.container.Stack";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(c,this.__qT,this);
},properties:{dynamic:{check:b,init:false,apply:d}},members:{_applyDynamic:function(n){var p=this._getChildren();
var o=this.getSelection()[0];
var q;

for(var i=0,l=p.length;i<l;i++){q=p[i];

if(q!=o){if(n){p[i].exclude();
}else{p[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(g){return true;
},__qT:function(e){var t=e.getOldData()[0];
var u=e.getData()[0];

if(t){if(this.isDynamic()){t.exclude();
}else{t.hide();
}}
if(u){u.show();
}},add:function(v){this._add(v);
var w=this.getSelection()[0];

if(!w){this.setSelection([v]);
}else if(w!==v){if(this.isDynamic()){v.exclude();
}else{v.hide();
}}},remove:function(r){this._remove(r);

if(this.getSelection()[0]===r){var s=this._getChildren()[0];

if(s){this.setSelection([s]);
}else{this.resetSelection();
}}},indexOf:function(f){return this._indexOf(f);
},getChildren:function(){return this._getChildren();
},previous:function(){var k=this.getSelection()[0];
var h=this._indexOf(k)-1;
var m=this._getChildren();

if(h<0){h=m.length-1;
}var j=m[h];
this.setSelection([j]);
},next:function(){var y=this.getSelection()[0];
var x=this._indexOf(y)+1;
var z=this._getChildren();
var A=z[x]||z[0];
this.setSelection([A]);
}}});
})();
(function(){var k="Boolean",j="qx.ui.core.SingleSelectionManager",h="qx.debug",g="Invalid selectionProvider!",f="changeSelected",e="on",d="__iU",c="__iV",b="__iW",a="qx.event.type.Data";
qx.Class.define(j,{extend:qx.core.Object,construct:function(v){qx.core.Object.call(this);

if(qx.core.Variant.isSet(h,e)){qx.core.Assert.assertInterface(v,qx.ui.core.ISingleSelectionProvider,g);
}this.__iU=v;
},events:{"changeSelected":a},properties:{allowEmptySelection:{check:k,init:true,apply:b}},members:{__iV:null,__iU:null,getSelected:function(){return this.__iV;
},setSelected:function(y){if(!this.__iY(y)){throw new Error("Could not select "+y+", because it is not a child element!");
}this.__iX(y);
},resetSelected:function(){this.__iX(null);
},isSelected:function(u){if(!this.__iY(u)){throw new Error("Could not check if "+u+" is selected,"+" because it is not a child element!");
}return this.__iV===u;
},isSelectionEmpty:function(){return this.__iV==null;
},getSelectables:function(p){var q=this.__iU.getItems();
var r=[];

for(var i=0;i<q.length;i++){if(this.__iU.isItemSelectable(q[i])){r.push(q[i]);
}}if(!p){for(var i=r.length-1;i>=0;i--){if(!r[i].getEnabled()){r.splice(i,1);
}}}return r;
},__iW:function(w,x){if(!w){this.__iX(this.__iV);
}},__iX:function(l){var o=this.__iV;
var n=l;

if(n!=null&&o===n){return;
}
if(!this.isAllowEmptySelection()&&n==null){var m=this.getSelectables(true)[0];

if(m){n=m;
}}this.__iV=n;
this.fireDataEvent(f,n,o);
},__iY:function(s){var t=this.__iU.getItems();

for(var i=0;i<t.length;i++){if(t[i]===s){return true;
}}return false;
}},destruct:function(){if(this.__iU.toHashCode){this._disposeObjects(d);
}else{this.__iU=null;
}this._disposeObjects(c);
}});
})();
(function(){var a="qx.ui.core.ISingleSelectionProvider";
qx.Interface.define(a,{members:{getItems:function(){},isItemSelectable:function(b){}}});
})();
(function(){var m="",l='#',k="String",j="request",i="mshtml",h="changeTitle",g="abstract",f="_applyState",e="qx.client",d="changeState",a="qx.bom.History",c="_applyTitle",b="qx.event.type.Data";
qx.Class.define(a,{extend:qx.core.Object,type:g,construct:function(){qx.core.Object.call(this);
this._baseUrl=window.location.href.split(l)[0]+l;
this.__rQ={};
this._setInitialState();
},events:{"request":b},statics:{SUPPORTS_HASH_CHANGE_EVENT:(qx.bom.client.Engine.MSHTML&&document.documentMode>=8)||(!qx.bom.client.Engine.MSHTML&&document.documentMode&&"onhashchange" in window),getInstance:function(){if(!this.$$instance){if(this.SUPPORTS_HASH_CHANGE_EVENT){this.$$instance=new qx.bom.NativeHistory();
}else if(qx.core.Variant.isSet(e,i)){this.$$instance=new qx.bom.IframeHistory();
}else{this.$$instance=new qx.bom.NativeHistory();
}}return this.$$instance;
}},properties:{title:{check:k,event:h,nullable:true,apply:c},state:{check:k,event:d,nullable:true,apply:f}},members:{__rQ:null,_applyState:function(v,w){this._writeState(v);
},_setInitialState:function(){this.setState(this._readState());
},_encode:function(x){if(qx.lang.Type.isString(x)){return encodeURIComponent(x);
}return m;
},_decode:function(n){if(qx.lang.Type.isString(n)){return decodeURIComponent(n);
}return m;
},_applyTitle:function(r){if(r!=null){document.title=r||m;
}},addToHistory:function(o,p){if(!qx.lang.Type.isString(o)){o=o+m;
}
if(qx.lang.Type.isString(p)){this.setTitle(p);
this.__rQ[o]=p;
}
if(this.getState()!==o){this._writeState(o);
}},navigateBack:function(){qx.event.Timer.once(function(){history.back();
},0);
},navigateForward:function(){qx.event.Timer.once(function(){history.forward();
},0);
},_onHistoryLoad:function(y){this.setState(y);
this.fireDataEvent(j,y);

if(this.__rQ[y]!=null){this.setTitle(this.__rQ[y]);
}},_readState:function(){throw new Error("Abstract method call");
},_writeState:function(){throw new Error("Abstract method call");
},_setHash:function(s){var t=this._baseUrl+(s||m);
var u=window.location;

if(t!=u.href){u.href=t;
}},_getHash:function(){var q=/#(.*)$/.exec(window.location.href);
return q&&q[1]?q[1]:m;
}},destruct:function(){this.__rQ=null;
}});
})();
(function(){var d="hashchange",c="interval",b="qx.bom.NativeHistory",a="qx.client";
qx.Class.define(b,{extend:qx.bom.History,construct:function(){qx.bom.History.call(this);
this.__rS();
},members:{__rR:null,__rS:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){this.__rR=qx.lang.Function.bind(this.__rU,this);
qx.bom.Event.addNativeListener(window,d,this.__rR);
}else{qx.event.Idle.getInstance().addListener(c,this.__rU,this);
}},__rT:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){qx.bom.Event.removeNativeListener(window,d,this.__rR);
}else{qx.event.Idle.getInstance().removeListener(c,this.__rU,this);
}},__rU:function(){var f=this._readState();

if(qx.lang.Type.isString(f)&&f!=this.getState()){this._onHistoryLoad(f);
}},_readState:function(){return this._decode(this._getHash());
},_writeState:qx.core.Variant.select(a,{"opera":function(g){qx.event.Timer.once(function(){this._setHash(this._encode(g));
},this,0);
},"default":function(e){this._setHash(this._encode(e));
}})},destruct:function(){this.__rT();
}});
})();
(function(){var o="interval",n="-1000px",m="mshtml",l="",k="qx.bom.IframeHistory",j="qx/static/blank.html",i="state",h='<html><body><div id="state">',g='</div></body></html>',f="hidden",b="qx.client",d="undefined",c="absolute";
if(qx.core.Variant.isSet(b,m)){qx.Class.define(k,{extend:qx.bom.History,construct:function(){qx.bom.History.call(this);
this.__rY();
},members:{__rV:null,__rW:false,__rX:null,_setInitialState:function(){qx.bom.History.prototype._setInitialState.call(this);
this.__rX=this._getHash();
},_setHash:function(p){qx.bom.History.prototype._setHash.call(this,p);
this.__rX=this._encode(p);
},_readState:function(){if(!this.__rW){return this._decode(this._getHash());
}var t=this.__rV.contentWindow.document;
var u=t.getElementById(i);
return u?this._decode(u.innerText):l;
},_writeState:function(r){var r=this._encode(r);
this._setHash(r);
this.__rX=r;

try{var s=this.__rV.contentWindow.document;
s.open();
s.write(h+r+g);
s.close();
}catch(y){}},__rY:function(){this.__sd(function(){qx.event.Idle.getInstance().addListener(o,this.__sa,this);
});
},__sa:function(e){var B=null;
var A=this._getHash();

if(!this.__sc(A)){B=this.__sb(A);
}else{B=this._readState();
}
if(qx.lang.Type.isString(B)&&B!=this.getState()){this._onHistoryLoad(B);
}},__sb:function(z){z=this._decode(z);
this._writeState(z);
return z;
},__sc:function(C){return qx.lang.Type.isString(C)&&C==this.__rX;
},__sd:function(a){this.__rV=this.__se();
document.body.appendChild(this.__rV);
this.__sf(function(){this._writeState(this.getState());

if(a){a.call(this);
}},this);
},__se:function(){var q=qx.bom.Iframe.create({src:qx.util.ResourceManager.getInstance().toUri(j)});
q.style.visibility=f;
q.style.position=c;
q.style.left=n;
q.style.top=n;
return q;
},__sf:function(v,w,x){if(typeof x===d){x=0;
}
if(!this.__rV.contentWindow||!this.__rV.contentWindow.document){if(x>20){throw new Error("can't initialize iframe");
}qx.event.Timer.once(function(){this.__sf(v,w,++x);
},this,10);
return;
}this.__rW=true;
v.call(w||window);
}},destruct:function(){this.__rV=null;
qx.event.Idle.getInstance().addListener(o,this.__sa,this);
}});
}})();
(function(){var e="qx.event.handler.Iframe",d="load",c="iframe";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(m){qx.event.Registration.fireEvent(m,d);
})},members:{canHandleEvent:function(a,b){return a.tagName.toLowerCase()===c;
},registerEvent:function(j,k,l){},unregisterEvent:function(f,g,h){}},defer:function(i){qx.event.Registration.addHandler(i);
}});
})();
(function(){var f="qx.client",e="webkit",d="body",c="iframe",b="qx.bom.Iframe";
qx.Class.define(b,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(v,w){var v=v?qx.lang.Object.clone(v):{};
var x=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var y in x){if(v[y]==null){v[y]=x[y];
}}return qx.bom.Element.create(c,v,w);
},getWindow:qx.core.Variant.select(f,{"mshtml|gecko":function(p){try{return p.contentWindow;
}catch(s){return null;
}},"default":function(i){try{var j=this.getDocument(i);
return j?j.defaultView:null;
}catch(D){return null;
}}}),getDocument:qx.core.Variant.select(f,{"mshtml":function(k){try{var l=this.getWindow(k);
return l?l.document:null;
}catch(a){return null;
}},"default":function(B){try{return B.contentDocument;
}catch(g){return null;
}}}),getBody:function(z){try{var A=this.getDocument(z);
return A?A.getElementsByTagName(d)[0]:null;
}catch(h){return null;
}},setSource:function(m,n){try{if(this.getWindow(m)&&qx.dom.Hierarchy.isRendered(m)){try{if(qx.core.Variant.isSet(f,e)&&qx.bom.client.Platform.MAC){var o=this.getContentWindow();

if(o){o.stop();
}}this.getWindow(m).location.replace(n);
}catch(u){m.src=n;
}}else{m.src=n;
}}catch(C){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(q){var r=this.getDocument(q);

try{if(r&&r.location){return r.location.href;
}}catch(t){}return null;
}}});
})();
(function(){var p="String",o="execute",n="qx.ui.menu.Menu",m="_shortcut",l="changeEnabled",k="changeToolTipText",j="Boolean",i="qx.ui.core.Command",h="changeLabel",g="changeMenu",d="changeIcon",f="changeValue",e="_applyShortcut",c="_applyEnabled",b="qx.event.type.Data";
qx.Class.define(i,{extend:qx.core.Object,include:qx.data.MBinding,construct:function(a){qx.core.Object.call(this);
this._shortcut=new qx.bom.Shortcut(a);
this._shortcut.addListener(o,this.execute,this);
},events:{"execute":b},properties:{enabled:{init:true,check:j,event:l,apply:c},shortcut:{check:p,apply:e,nullable:true},label:{check:p,nullable:true,event:h},icon:{check:p,nullable:true,event:d},toolTipText:{check:p,nullable:true,event:k},value:{nullable:true,event:f},menu:{check:n,nullable:true,event:g}},members:{_shortcut:null,_applyEnabled:function(q){this._shortcut.setEnabled(q);
},_applyShortcut:function(s){this._shortcut.setShortcut(s);
},execute:function(r){this.fireDataEvent(o,r);
},toString:function(){return this._shortcut.toString();
}},destruct:function(){this._disposeObjects(m);
}});
})();
(function(){var m="Unidentified",l="Boolean",k="+",j="short",h="keydown",g="",f="Control",d="keypress",c="-",b="PageUp",S="Escape",R="qx.event.type.Data",Q="_applyShortcut",P="PrintScreen",O="NumLock",N="5",M="8",L="execute",K="Meta",J="0",t="2",u="Shift",r="You can only specify one non modifier key!",s="3",p="/",q="Delete",n="String",o="changeEnabled",v="*",w="qx.bom.Shortcut",B="6",A="4",D="1",C="Alt",F="Not a valid key name for a shortcut: ",E="PageDown",y="Whitespaces are not allowed within shortcuts",I="_applyEnabled",H="7",G="a",x="z",z="9";
qx.Class.define(w,{extend:qx.core.Object,construct:function(bk){qx.core.Object.call(this);
this.__Er={};
this.__Es=null;

if(bk!=null){this.setShortcut(bk);
}this.initEnabled();
},events:{"execute":R},properties:{enabled:{init:true,check:l,event:o,apply:I},shortcut:{check:n,apply:Q,nullable:true},autoRepeat:{check:l,init:false}},members:{__Er:g,__Es:g,execute:function(bc){this.fireDataEvent(L,bc);
},__Et:function(event){if(this.getEnabled()&&this.__Ev(event)){if(!this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},__Eu:function(event){if(this.getEnabled()&&this.__Ev(event)){if(this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},_applyEnabled:function(ba,bb){if(ba){qx.event.Registration.addListener(document.documentElement,h,this.__Et,this);
qx.event.Registration.addListener(document.documentElement,d,this.__Eu,this);
}else{qx.event.Registration.removeListener(document.documentElement,h,this.__Et,this);
qx.event.Registration.removeListener(document.documentElement,d,this.__Eu,this);
}},_applyShortcut:function(T,U){if(T){if(T.search(/[\s]+/)!=-1){var X=y;
this.error(X);
throw new Error(X);
}this.__Er={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__Es=null;
var V;
var a=[];

while(T.length>0&&V!=-1){V=T.search(/[-+]+/);
a.push((T.length==1||V==-1)?T:T.substring(0,V));
T=T.substring(V+1);
}var W=a.length;

for(var i=0;i<W;i++){var Y=this.__Ex(a[i]);

switch(Y){case f:case u:case K:case C:this.__Er[Y]=true;
break;
case m:var X=F+a[i];
this.error(X);
throw X;
default:if(this.__Es){var X=r;
this.error(X);
throw X;
}this.__Es=Y;
}}}return true;
},__Ev:function(e){var bd=this.__Es;

if(!bd){return ;
}if((!this.__Er.Shift&&e.isShiftPressed())||(this.__Er.Shift&&!e.isShiftPressed())||(!this.__Er.Control&&e.isCtrlPressed())||(this.__Er.Control&&!e.isCtrlPressed())||(!this.__Er.Meta&&e.isMetaPressed())||(this.__Er.Meta&&!e.isMetaPressed())||(!this.__Er.Alt&&e.isAltPressed())||(this.__Er.Alt&&!e.isAltPressed())){return false;
}
if(bd==e.getKeyIdentifier()){return true;
}return false;
},__Ew:{esc:S,ctrl:f,print:P,del:q,pageup:b,pagedown:E,numlock:O,numpad_0:J,numpad_1:D,numpad_2:t,numpad_3:s,numpad_4:A,numpad_5:N,numpad_6:B,numpad_7:H,numpad_8:M,numpad_9:z,numpad_divide:p,numpad_multiply:v,numpad_minus:c,numpad_plus:k},__Ex:function(bh){var bi=qx.event.handler.Keyboard;
var bj=m;

if(bi.isValidKeyIdentifier(bh)){return bh;
}
if(bh.length==1&&bh>=G&&bh<=x){return bh.toUpperCase();
}bh=bh.toLowerCase();
var bj=this.__Ew[bh]||qx.lang.String.firstUp(bh);

if(bi.isValidKeyIdentifier(bj)){return bj;
}else{return m;
}},toString:function(){var bg=this.__Es;
var bf=[];

for(var be in this.__Er){if(this.__Er[be]){bf.push(qx.locale.Key.getKeyName(j,be));
}}
if(bg){bf.push(qx.locale.Key.getKeyName(j,bg));
}return bf.join(k);
}},destruct:function(){this.setEnabled(false);
this.__Er=this.__Es=null;
}});
})();
(function(){var bA="Control",bz="Left",by="Meta",bx="Pause",bw="End",bv="Down",bu="Ctrl",bt="Home",bs="Apps",br="Win",bg="Right",bf="Backspace",be="Space",bd="Up",bc="Shift",bb="Enter",ba="Scroll",Y="Alt",X="Escape",W="key_full_Meta",bH="PrintScreen",bI="NumLock",bF="key_short_Alt",bG="key_short_Control_Mac",bD="key_short_Insert",bE="Del",bB="key_full_Enter",bC="key_full_Control",bJ="qx.locale.Key",bK="Tabulator",bk="key_full_Space",bj="key_short_Meta",bm="key_short_PageUp",bl="key_short_Pause",bo="key_full_Down",bn="key_short_Apps",bq="key_short_Win",bp="key_full_Right",bi="key_short_Up",bh="key_full_PageDown",a="key_full_Alt",b="PgDn",c="Esc",d="key_full_Insert",e="key_short_Space",f="key_short_Backspace",g="key_short_Home",h="full",i="key_short_Down",j="PgUp",bO="_Mac",bN="key_short_CapsLock",bM="PageUp",bL="key_full_Up",bS="key_full_Home",bR="key_full_Backspace",bQ="PageDown",bP="CapsLock",bU="Ins",bT="key_short_PrintScreen",G="Tab",H="key_full_Apps",E="key_short_Tab",F="key_short_End",K="_",L="Caps",I="key_short_NumLock",J="Num",C="key_full_Scroll",D="key_short_Left",r="key_short_Scroll",q="on",t="key_full_Control_Mac",s="key_",n="key_full_Pause",m="key_short_Right",p="key_full_PrintScreen",o="key_full_Win",l="short",k="key_short_Shift",Q="key_short_PageDown",R="key_short_Enter",S="key_short_Control",T="qx.debug",M="Insert",N="key_short_Escape",O="key_full_Tab",P="Print",U="Delete",V="key_full_CapsLock",B="key_full_Escape",A="key_short_Delete",z="key_full_PageUp",y="key_full_Shift",x="key_full_NumLock",w="key_full_Delete",v="key_full_End",u="key_full_Left";
qx.Class.define(bJ,{statics:{getKeyName:function(bY,ca,cb){if(qx.core.Variant.isSet(T,q)){qx.core.Assert.assertInArray(bY,[l,h]);
}var cd=s+bY+K+ca;
if(qx.bom.client.Platform.MAC&&ca==bA){cd+=bO;
}var cc=qx.locale.Manager.getInstance().translate(cd,[],cb);

if(cc==cd){return qx.locale.Key._keyNames[cd]||ca;
}else{return cc;
}}},defer:function(bV){var bX={};
var bW=qx.locale.Manager;
bX[bW.marktr(f)]=bf;
bX[bW.marktr(E)]=G;
bX[bW.marktr(e)]=be;
bX[bW.marktr(R)]=bb;
bX[bW.marktr(k)]=bc;
bX[bW.marktr(S)]=bu;
bX[bW.marktr(bG)]=bu;
bX[bW.marktr(bF)]=Y;
bX[bW.marktr(bN)]=L;
bX[bW.marktr(bj)]=by;
bX[bW.marktr(N)]=c;
bX[bW.marktr(D)]=bz;
bX[bW.marktr(bi)]=bd;
bX[bW.marktr(m)]=bg;
bX[bW.marktr(i)]=bv;
bX[bW.marktr(bm)]=j;
bX[bW.marktr(Q)]=b;
bX[bW.marktr(F)]=bw;
bX[bW.marktr(g)]=bt;
bX[bW.marktr(bD)]=bU;
bX[bW.marktr(A)]=bE;
bX[bW.marktr(I)]=J;
bX[bW.marktr(bT)]=P;
bX[bW.marktr(r)]=ba;
bX[bW.marktr(bl)]=bx;
bX[bW.marktr(bq)]=br;
bX[bW.marktr(bn)]=bs;
bX[bW.marktr(bR)]=bf;
bX[bW.marktr(O)]=bK;
bX[bW.marktr(bk)]=be;
bX[bW.marktr(bB)]=bb;
bX[bW.marktr(y)]=bc;
bX[bW.marktr(bC)]=bA;
bX[bW.marktr(t)]=bA;
bX[bW.marktr(a)]=Y;
bX[bW.marktr(V)]=bP;
bX[bW.marktr(W)]=by;
bX[bW.marktr(B)]=X;
bX[bW.marktr(u)]=bz;
bX[bW.marktr(bL)]=bd;
bX[bW.marktr(bp)]=bg;
bX[bW.marktr(bo)]=bv;
bX[bW.marktr(z)]=bM;
bX[bW.marktr(bh)]=bQ;
bX[bW.marktr(v)]=bw;
bX[bW.marktr(bS)]=bt;
bX[bW.marktr(d)]=M;
bX[bW.marktr(w)]=U;
bX[bW.marktr(x)]=bI;
bX[bW.marktr(p)]=bH;
bX[bW.marktr(C)]=ba;
bX[bW.marktr(n)]=bx;
bX[bW.marktr(o)]=br;
bX[bW.marktr(H)]=bs;
bV._keyNames=bX;
}});
})();
(function(){var w="visible",v="excluded",u="resize",t="qx.event.type.Data",s="both",r="qx.ui.menu.Menu",q="_applySpacing",p="showItem",o="Boolean",n="icon",d="label",m="qx.ui.core.Widget",h="_applyOverflowIndicator",c="_applyOverflowHandling",b="changeShow",g="Integer",f="qx.ui.toolbar.ToolBar",j="hideItem",a="toolbar",k="changeOpenMenu";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__oj=[];
this.__ok=[];
},properties:{appearance:{refine:true,init:a},openMenu:{check:r,event:k,nullable:true},show:{init:s,check:[s,d,n],inheritable:true,event:b},spacing:{nullable:true,check:g,themeable:true,apply:q},overflowIndicator:{check:m,nullable:true,apply:h},overflowHandling:{init:false,check:o,apply:c}},events:{"hideItem":t,"showItem":t},members:{__oj:null,__ok:null,_computeSizeHint:function(){var S=qx.ui.core.Widget.prototype._computeSizeHint.call(this);

if(true&&this.getOverflowHandling()){var Q=0;
var R=this.getOverflowIndicator();

if(R){Q=R.getSizeHint().width+this.getSpacing();
}S.minWidth=Q;
}return S;
},_onResize:function(e){this._recalculateOverflow(e.getData().width);
},_recalculateOverflow:function(W){if(!this.getOverflowHandling()){return;
}var Y=this.getSizeHint().width;
var X=this.getOverflowIndicator();
var bc=0;

if(X){bc=X.getSizeHint().width;
}if(W<Y){do{var bd=this._getNextToHide();
if(!bd){return;
}var be=bd.getMarginLeft()+bd.getMarginRight();
var bb=bd.getSizeHint().width+be;
this.__om(bd);
Y-=bb;
if(X&&X.getVisibility()!=w){X.setVisibility(w);
Y+=bc;
}}while(Y>W);
}else{do{var bf=this.__oj[0];
if(bf){var be=bf.getMarginLeft()+bf.getMarginRight();
var ba=bf.getSizeHint().width+be;
if(W>Y+ba+this.getSpacing()||(this.__oj.length==1&&W>Y+ba-bc+this.getSpacing())){this.__ol(bf);
W+=ba;
if(X&&this.__oj.length==0){X.setVisibility(v);
}}else{return;
}}}while(W>=Y&&this.__oj.length>0);
}},__ol:function(U){U.setVisibility(w);
this.__oj.shift();
this.fireDataEvent(p,U);
},__om:function(T){if(!T){return;
}this.__oj.unshift(T);
T.setVisibility(v);
this.fireDataEvent(j,T);
},_getNextToHide:function(){for(var i=this.__ok.length-1;i>=0;i--){var x=this.__ok[i];
if(x&&x.getVisibility&&x.getVisibility()==w){return x;
}}var y=this._getChildren();

for(var i=y.length-1;i>=0;i--){var z=y[i];
if(z==this.getOverflowIndicator()){continue;
}if(z.getVisibility&&z.getVisibility()==w){return z;
}}},setRemovePriority:function(A,B,C){if(!C&&this.__ok[B]!=undefined){throw new Error("Priority already in use!");
}this.__ok[B]=A;
},_applyOverflowHandling:function(M,N){this.invalidateLayoutCache();
var parent=this.getLayoutParent();

if(parent){parent.invalidateLayoutCache();
}var P=this.getBounds();

if(P&&P.width){this._recalculateOverflow(P.width);
}if(M){this.addListener(u,this._onResize,this);
}else{this.removeListener(u,this._onResize,this);
var O=this.getOverflowIndicator();

if(O){O.setVisibility(v);
}for(var i=0;i<this.__oj.length;i++){this.__oj[i].setVisibility(w);
}this.__oj=[];
}},_applyOverflowIndicator:function(H,I){if(I){this._remove(I);
}
if(H){if(this._indexOf(H)==-1){throw new Error("Widget must be child of the toolbar.");
}H.setVisibility(v);
}},__on:false,_setAllowMenuOpenHover:function(V){this.__on=V;
},_isAllowMenuOpenHover:function(){return this.__on;
},_applySpacing:function(D,E){var F=this._getLayout();
D==null?F.resetSpacing():F.setSpacing(D);
},addSpacer:function(){var G=new qx.ui.core.Spacer;
this._add(G,{flex:1});
return G;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var K=this.getChildren();
var J=[];
var L;

for(var i=0,l=K.length;i<l;i++){L=K[i];

if(L instanceof qx.ui.menubar.Button){J.push(L);
}else if(L instanceof qx.ui.toolbar.Part){J.push.apply(J,L.getMenuButtons());
}}return J;
}},destruct:function(){if(this.hasListener(u)){this.removeListener(u,this._onResize,this);
}}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(b,c){qx.ui.core.LayoutItem.call(this);
this.setWidth(b!=null?b:0);
this.setHeight(c!=null?c:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(d){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__ik:null,__il:false,__im:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__il){this.__il=false;
}else{this.__il=true;
o.execute(this);
}}this.fireEvent(n);
},__in:function(e){if(this.__il){this.__il=false;
return;
}this.__il=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__im);
}
if(p!=null){this.__im=p.addListener(n,this.__in,this);
}var t=this.__ik;

if(t==null){this.__ik=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.core.property.Util.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__ik=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(p,q,r){qx.ui.basic.Atom.call(this,p,q);

if(r!=null){this.setCommand(r);
}this.addListener(f,this._onMouseOver);
this.addListener(b,this._onMouseOut);
this.addListener(g,this._onMouseDown);
this.addListener(h,this._onMouseUp);
this.addListener(d,this._onKeyDown);
this.addListener(a,this._onKeyUp);
this.addListener(j,this._onStopEvent);
},properties:{appearance:{refine:true,init:c},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(n)){return;
}this.addState(o);
},release:function(){if(this.hasState(o)){this.removeState(o);
}},reset___:function(){this.removeState(o);
this.removeState(n);
this.removeState(m);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(n)){this.removeState(n);
this.addState(o);
}this.addState(m);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(m);

if(this.hasState(o)){this.removeState(o);
this.addState(n);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(n);
this.addState(o);
},_onMouseUp:function(e){this.releaseCapture();
var s=this.hasState(o);
var t=this.hasState(n);

if(s){this.removeState(o);
}
if(t){this.removeState(n);
}else{this.addState(m);

if(s){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:case k:this.removeState(n);
this.addState(o);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case l:case k:if(this.hasState(o)){this.removeState(n);
this.removeState(o);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var m="pressed",l="hovered",k="changeVisibility",j="qx.ui.menu.Menu",i="submenu",h="Enter",g="contextmenu",f="changeMenu",d="qx.ui.form.MenuButton",c="abandoned",b="_applyMenu";
qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(r,s,t){qx.ui.form.Button.call(this,r,s);
if(t!=null){this.setMenu(t);
}},properties:{menu:{check:j,nullable:true,apply:b,event:f}},members:{_applyMenu:function(p,q){if(q){q.removeListener(k,this._onMenuChange,this);
q.resetOpener();
}
if(p){p.addListener(k,this._onMenuChange,this);
p.setOpener(this);
p.removeState(i);
p.removeState(g);
}},open:function(u){var v=this.getMenu();

if(v){qx.ui.menu.Manager.getInstance().hideAll();
v.setOpener(this);
v.open();
if(u){var w=v.getSelectables()[0];

if(w){v.setSelectedButton(w);
}}}},_onMenuChange:function(e){var a=this.getMenu();

if(a.isVisible()){this.addState(m);
}else{this.removeState(m);
}},_onMouseDown:function(e){var n=this.getMenu();

if(n){if(!n.isVisible()){this.open();
}else{n.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(l);
},_onMouseOut:function(e){this.removeState(l);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case h:this.removeState(c);
this.addState(m);
var o=this.getMenu();

if(o){if(!o.isVisible()){this.open();
}else{o.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var g="pressed",f="hovered",d="qx.ui.menubar.Button",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,construct:function(h,i,j){qx.ui.form.MenuButton.call(this,h,i,j);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(k){qx.ui.form.MenuButton.prototype.open.call(this,k);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var l=this.getMenu();
var menubar=this.getMenuBar();

if(l.isVisible()){this.addState(g);
if(menubar){menubar.setOpenMenu(l);
}}else{this.removeState(g);
if(menubar&&menubar.getOpenMenu()==l){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){qx.ui.form.MenuButton.prototype._onMouseUp.call(this,e);
var m=this.getMenu();

if(m&&m.isVisible()&&!this.hasState(g)){this.addState(g);
}},_onMouseOver:function(e){this.addState(f);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var w="keypress",v="blur",u="qx.debug",t="interval",s="keydown",r="on",q="mousedown",p="keyup",o="Enter",n="__ni",f="Up",m="__nj",j="__nh",d="Escape",c="qx.ui.menu.Manager",h="Left",g="Down",k="Right",b="singleton",l="Space";
qx.Class.define(c,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nh=[];
var bd=document.body;
var be=qx.event.Registration;
be.addListener(window.document.documentElement,q,this._onMouseDown,this,true);
be.addListener(bd,s,this._onKeyUpDown,this,true);
be.addListener(bd,p,this._onKeyUpDown,this,true);
be.addListener(bd,w,this._onKeyPress,this,true);
qx.event.Registration.addListener(window,v,this.hideAll,this);
this.__ni=new qx.event.Timer;
this.__ni.addListener(t,this._onOpenInterval,this);
this.__nj=new qx.event.Timer;
this.__nj.addListener(t,this._onCloseInterval,this);
},members:{__nk:null,__nl:null,__ni:null,__nj:null,__nh:null,_getChild:function(bf,bg,bh,bi){var bj=bf.getChildren();
var length=bj.length;
var bk;

for(var i=bg;i<length&&i>=0;i+=bh){bk=bj[i];

if(bk.isEnabled()&&!bk.isAnonymous()){return bk;
}}
if(bi){i=i==length?0:length-1;

for(;i!=bg;i+=bh){bk=bj[i];

if(bk.isEnabled()&&!bk.isAnonymous()){return bk;
}}}return null;
},_isInMenu:function(bD){while(bD){if(bD instanceof qx.ui.menu.Menu){return true;
}bD=bD.getLayoutParent();
}return false;
},_getMenuButton:function(D){while(D){if(D instanceof qx.ui.menu.AbstractButton){return D;
}D=D.getLayoutParent();
}return null;
},add:function(bn){if(qx.core.Variant.isSet(u,r)){if(!(bn instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+bn);
}}var bo=this.__nh;
bo.push(bn);
bn.setZIndex(1e6+bo.length);
},remove:function(bp){if(qx.core.Variant.isSet(u,r)){if(!(bp instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+bp);
}}var bq=this.__nh;

if(bq){qx.lang.Array.remove(bq,bp);
}},hideAll:function(){var bl=this.__nh;

if(bl){for(var i=bl.length-1;i>=0;i--){bl[i].exclude();
}}},getActiveMenu:function(){var X=this.__nh;
return X.length>0?X[X.length-1]:null;
},scheduleOpen:function(a){this.cancelClose(a);
if(a.isVisible()){if(this.__nk){this.cancelOpen(this.__nk);
}}else if(this.__nk!=a){this.__nk=a;
this.__ni.restartWith(a.getOpenInterval());
}},scheduleClose:function(bm){this.cancelOpen(bm);
if(!bm.isVisible()){if(this.__nl){this.cancelClose(this.__nl);
}}else if(this.__nl!=bm){this.__nl=bm;
this.__nj.restartWith(bm.getCloseInterval());
}},cancelOpen:function(K){if(this.__nk==K){this.__ni.stop();
this.__nk=null;
}},cancelClose:function(x){if(this.__nl==x){this.__nj.stop();
this.__nl=null;
}},_onOpenInterval:function(e){this.__ni.stop();
this.__nk.open();
this.__nk=null;
},_onCloseInterval:function(e){this.__nj.stop();
this.__nl.exclude();
this.__nl=null;
},_onMouseDown:function(e){var H=e.getTarget();
H=qx.ui.core.Widget.getWidgetByElement(H,true);
if(H==null){this.hideAll();
return;
}if(H.getMenu&&H.getMenu()&&H.getMenu().isVisible()){return;
}if(this.__nh.length>0&&!this._isInMenu(H)){this.hideAll();
}},__nm:{"Enter":1,"Space":1},__nn:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var bE=this.getActiveMenu();

if(!bE){return;
}var bF=e.getKeyIdentifier();

if(this.__nn[bF]||(this.__nm[bF]&&bE.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var y=this.getActiveMenu();

if(!y){return;
}var z=e.getKeyIdentifier();
var B=this.__nn[z];
var A=this.__nm[z];

if(B){switch(z){case f:this._onKeyPressUp(y);
break;
case g:this._onKeyPressDown(y);
break;
case h:this._onKeyPressLeft(y);
break;
case k:this._onKeyPressRight(y);
break;
case d:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(A){var C=y.getSelectedButton();

if(C){switch(z){case o:this._onKeyPressEnter(y,C,e);
break;
case l:this._onKeyPressSpace(y,C,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(br){var bs=br.getSelectedButton();
var bt=br.getChildren();
var bv=bs?br.indexOf(bs)-1:bt.length-1;
var bu=this._getChild(br,bv,-1,true);
if(bu){br.setSelectedButton(bu);
}else{br.resetSelectedButton();
}},_onKeyPressDown:function(Y){var ba=Y.getSelectedButton();
var bc=ba?Y.indexOf(ba)+1:0;
var bb=this._getChild(Y,bc,1,true);
if(bb){Y.setSelectedButton(bb);
}else{Y.resetSelectedButton();
}},_onKeyPressLeft:function(bw){var bB=bw.getOpener();

if(!bB){return;
}if(bB instanceof qx.ui.menu.AbstractButton){var by=bB.getLayoutParent();
by.resetOpenedButton();
by.setSelectedButton(bB);
}else if(bB instanceof qx.ui.menubar.Button){var bA=bB.getMenuBar().getMenuButtons();
var bx=bA.indexOf(bB);
if(bx===-1){return;
}var bC=null;
var length=bA.length;

for(var i=1;i<=length;i++){var bz=bA[(bx-i+length)%length];

if(bz.isEnabled()){bC=bz;
break;
}}
if(bC&&bC!=bB){bC.open(true);
}}},_onKeyPressRight:function(L){var N=L.getSelectedButton();
if(N){var M=N.getMenu();

if(M){L.setOpenedButton(N);
var T=this._getChild(M,0,1);

if(T){M.setSelectedButton(T);
}return;
}}else if(!L.getOpenedButton()){var T=this._getChild(L,0,1);

if(T){L.setSelectedButton(T);

if(T.getMenu()){L.setOpenedButton(T);
}return;
}}var R=L.getOpener();
if(R instanceof qx.ui.menu.Button&&N){while(R){R=R.getLayoutParent();

if(R instanceof qx.ui.menu.Menu){R=R.getOpener();

if(R instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!R){return;
}}if(R instanceof qx.ui.menubar.Button){var Q=R.getMenuBar().getMenuButtons();
var O=Q.indexOf(R);
if(O===-1){return;
}var S=null;
var length=Q.length;

for(var i=1;i<=length;i++){var P=Q[(O+i)%length];

if(P.isEnabled()){S=P;
break;
}}
if(S&&S!=R){S.open(true);
}}},_onKeyPressEnter:function(U,V,e){if(V.hasListener(w)){var W=e.clone();
W.setBubbles(false);
W.setTarget(V);
V.dispatchEvent(W);
}this.hideAll();
},_onKeyPressSpace:function(E,F,e){if(F.hasListener(w)){var G=e.clone();
G.setBubbles(false);
G.setTarget(F);
F.dispatchEvent(G);
}}},destruct:function(){var J=qx.event.Registration;
var I=document.body;
J.removeListener(window,v,this.hideAll,this);
J.removeListener(window.document.documentElement,q,this._onMouseDown,this,true);
J.removeListener(I,s,this._onKeyUpDown,this,true);
J.removeListener(I,p,this._onKeyUpDown,this,true);
J.removeListener(I,w,this._onKeyPress,this,true);
this._disposeObjects(n,m);
this._disposeArray(j);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__no:function(A,B,C,D){var E=this.getChildrenContainer();

if(E===this){A=h+A;
}return (E[A])(B,C,D);
},getChildren:function(){return this.__no(c);
},hasChildren:function(){return this.__no(f);
},add:function(u,v){return this.__no(j,u,v);
},remove:function(z){return this.__no(a,z);
},removeAll:function(){return this.__no(d);
},indexOf:function(m){return this.__no(l,m);
},addAt:function(r,s,t){this.__no(g,r,s,t);
},addBefore:function(w,x,y){this.__no(i,w,x,y);
},addAfter:function(o,p,q){this.__no(k,o,p,q);
},removeAt:function(n){this.__no(e,n);
}}});
})();
(function(){var Q="slidebar",P="Integer",O="resize",N="qx.ui.core.Widget",M="selected",L="visible",K="Boolean",J="mouseout",I="excluded",H="menu",bg="_applySelectedButton",bf="_applyOpenInterval",be="_applySpacingY",bd="_blocker",bc="_applyCloseInterval",bb="_applyBlockerColor",ba="_applyIconColumnWidth",Y="mouseover",X="qx.ui.menu.Menu",W="Color",U="Number",V="_applyOpenedButton",S="_applySpacingX",T="_applyBlockerOpacity",R="_applyArrowColumnWidth";
qx.Class.define(X,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var v=this.getApplicationRoot();
v.add(this);
this.addListener(Y,this._onMouseOver);
this.addListener(J,this._onMouseOut);
this.addListener(O,this._onResize,this);
v.addListener(O,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(v);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:H},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:I},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:P,apply:S,init:0,themeable:true},spacingY:{check:P,apply:be,init:0,themeable:true},iconColumnWidth:{check:P,init:0,themeable:true,apply:ba},arrowColumnWidth:{check:P,init:0,themeable:true,apply:R},blockerColor:{check:W,init:null,nullable:true,apply:bb,themeable:true},blockerOpacity:{check:U,init:1,apply:T,themeable:true},selectedButton:{check:N,nullable:true,apply:bg},openedButton:{check:N,nullable:true,apply:V},opener:{check:N,nullable:true},openInterval:{check:P,themeable:true,init:250,apply:bf},closeInterval:{check:P,themeable:true,init:250,apply:bc},blockBackground:{check:K,themeable:true,init:false}},members:{__np:null,__nq:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__ns();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__ns();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(k){this.placeToPoint(k);
this.__ns();
this.show();
this._placementTarget=k;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var q=[];
var r=this.getChildren();

for(var i=0;i<r.length;i++){if(r[i].isEnabled()){q.push(r[i]);
}}return q;
},_applyIconColumnWidth:function(w,x){this._getMenuLayout().setIconColumnWidth(w);
},_applyArrowColumnWidth:function(t,u){this._getMenuLayout().setArrowColumnWidth(t);
},_applySpacingX:function(l,m){this._getMenuLayout().setColumnSpacing(l);
},_applySpacingY:function(h,j){this._getMenuLayout().setSpacing(h);
},_applyVisibility:function(y,z){qx.ui.core.Widget.prototype._applyVisibility.call(this,y,z);
var A=qx.ui.menu.Manager.getInstance();

if(y===L){A.add(this);
var B=this.getParentMenu();

if(B){B.setOpenedButton(this.getOpener());
}}else if(z===L){A.remove(this);
var B=this.getParentMenu();

if(B&&B.getOpenedButton()==this.getOpener()){B.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__nr();
},__nr:function(){if(this.isVisible()){if(this.getBlockBackground()){var bm=this.getZIndex();
this._blocker.blockContent(bm-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var s=this.getOpener();

if(!s||!(s instanceof qx.ui.menu.AbstractButton)){return null;
}
while(s&&!(s instanceof qx.ui.menu.Menu)){s=s.getLayoutParent();
}return s;
},_applySelectedButton:function(bn,bo){if(bo){bo.removeState(M);
}
if(bn){bn.addState(M);
}},_applyOpenedButton:function(bk,bl){if(bl){bl.getMenu().exclude();
}
if(bk){bk.getMenu().open();
}},_applyBlockerColor:function(bi,bj){this._blocker.setColor(bi);
},_applyBlockerOpacity:function(bp,bq){this._blocker.setOpacity(bp);
},getChildrenContainer:function(){return this.getChildControl(Q,true)||this;
},_createChildControlImpl:function(C){var D;

switch(C){case Q:var D=new qx.ui.menu.MenuSlideBar();
var F=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var E=D.getLayout();
D.setLayout(F);
E.dispose();
var G=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<G.length;i++){D.add(G[i]);
}this.removeListener(O,this._onResize,this);
D.getChildrenContainer().addListener(O,this._onResize,this);
this._add(D);
break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,C);
},_getMenuLayout:function(){if(this.hasChildControl(Q)){return this.getChildControl(Q).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(Q)){return this.getChildControl(Q).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__ns:function(){var o=this._getMenuBounds();

if(!o){this.addListenerOnce(O,this.__ns,this);
return;
}var n=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var p=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(o.height+top);
this.moveTo(p,0);
});
}else if(top+o.height>n){this._assertSlideBar(function(){this.setHeight(n-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(br){if(this.hasChildControl(Q)){return br.call(this);
}this.__nq=br;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(Q);

if(this.__nq){this.__nq.call(this);
delete this.__nq;
}},_onResize:function(){if(this.isVisible()){var bh=this._placementTarget;

if(!bh){return;
}else if(bh instanceof qx.ui.core.Widget){this.placeToWidget(bh);
}else if(bh.top!==undefined){this.placeToPoint(bh);
}else{throw new Error("Unknown target: "+bh);
}this.__ns();
}},_onMouseOver:function(e){var d=qx.ui.menu.Manager.getInstance();
d.cancelClose(this);
var f=e.getTarget();

if(f.isEnabled()&&f instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(f);
var c=f.getMenu&&f.getMenu();

if(c){c.setOpener(f);
d.scheduleOpen(c);
this.__np=c;
}else{var g=this.getOpenedButton();

if(g){d.scheduleClose(g.getMenu());
}
if(this.__np){d.cancelOpen(this.__np);
this.__np=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var a=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var b=this.getOpenedButton();
b?this.setSelectedButton(b):this.resetSelectedButton();
if(b){a.cancelClose(b.getMenu());
}if(this.__np){a.cancelOpen(this.__np);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(O,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(bd);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__nt:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__nt=[0,0,0,0];
var m=this.getColumnSpacing();
var k=0;
var f=0;
for(var i=0,l=q.length;i<l;i++){o=q[i];

if(o.isAnonymous()){continue;
}g=o.getChildrenSizes();

for(var n=0;n<g.length;n++){if(e!=null&&n==e&&g[e+1]==0){k=Math.max(k,g[n]);
}else{h[n]=Math.max(h[n],g[n]);
}}var d=q[i].getInsets();
f=Math.max(f,d.left+d.right);
}if(e!=null&&h[e]+m+h[e+1]<k){h[e]=k-h[e+1]-m;
}if(k==0){j=m*2;
}else{j=m*3;
}if(h[0]==0){h[0]=this.getIconColumnWidth();
}if(h[3]==0){h[3]=this.getArrowColumnWidth();
}var p=qx.ui.layout.VBox.prototype._computeSizeHint.call(this).height;
return {minHeight:p,height:p,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__nt||null;
}},destruct:function(){this.__nt=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var t="icon",s="label",r="arrow",q="shortcut",p="changeLocale",o="qx.dynlocale",n="submenu",m="on",l="String",k="qx.ui.menu.Menu",d="qx.ui.menu.AbstractButton",j="keypress",h="",c="_applyIcon",b="mouseup",g="abstract",f="_applyLabel",i="_applyMenu",a="changeCommand";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:g,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(b,this._onMouseUp);
this.addListener(j,this._onKeyPress);
this.addListener(a,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(v){var w;

switch(v){case t:w=new qx.ui.basic.Image;
w.setAnonymous(true);
this._add(w,{column:0});
break;
case s:w=new qx.ui.basic.Label;
w.setAnonymous(true);
this._add(w,{column:1});
break;
case q:w=new qx.ui.basic.Label;
w.setAnonymous(true);
this._add(w,{column:2});
break;
case r:w=new qx.ui.basic.Image;
w.setAnonymous(true);
this._add(w,{column:3});
break;
}return w||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,v);
},_forwardStates:{selected:1},getChildrenSizes:function(){var C=0,D=0,E=0,I=0;

if(this._isChildControlVisible(t)){var J=this.getChildControl(t);
C=J.getMarginLeft()+J.getSizeHint().width+J.getMarginRight();
}
if(this._isChildControlVisible(s)){var G=this.getChildControl(s);
D=G.getMarginLeft()+G.getSizeHint().width+G.getMarginRight();
}
if(this._isChildControlVisible(q)){var F=this.getChildControl(q);
E=F.getMarginLeft()+F.getSizeHint().width+F.getMarginRight();
}
if(this._isChildControlVisible(r)){var H=this.getChildControl(r);
I=H.getMarginLeft()+H.getSizeHint().width+H.getMarginRight();
}return [C,D,E,I];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var z=e.getData();

if(qx.core.Variant.isSet(o,m)){var x=e.getOldData();

if(!x){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!z){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var y=z!=null?z.toString():h;
this.getChildControl(q).setValue(y);
},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var u=this.getCommand();

if(u!=null){this.getChildControl(q).setValue(u.toString());
}},"off":null}),_applyIcon:function(K,L){if(K){this._showChildControl(t).setSource(K);
}else{this._excludeChildControl(t);
}},_applyLabel:function(A,B){if(A){this._showChildControl(s).setValue(A);
}else{this._excludeChildControl(s);
}},_applyMenu:function(M,N){if(N){N.resetOpener();
N.removeState(n);
}
if(M){this._showChildControl(r);
M.setOpener(this);
M.addState(n);
}else{this._excludeChildControl(r);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(o,m)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var g="qx.ui.menu.ButtonLayout",f="qx.debug",e="column",d="left",c="middle",b="' is not supported by the MenuButton layout!",a="The property '";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(C,name,D){this.assert(name==e,a+name+b);
},"off":null}),renderLayout:function(n,o){var y=this._getLayoutChildren();
var x;
var q;
var r=[];

for(var i=0,l=y.length;i<l;i++){x=y[i];
q=x.getLayoutProperties().column;
r[q]=x;
}var w=this.__oh(y[0]);
var z=w.getColumnSizes();
var t=w.getSpacingX();
var s=qx.lang.Array.sum(z)+t*(z.length-1);

if(s<n){z[1]+=n-s;
}var A=0,top=0;
var u=qx.ui.layout.Util;

for(var i=0,l=z.length;i<l;i++){x=r[i];

if(x){var p=x.getSizeHint();
var top=u.computeVerticalAlignOffset(x.getAlignY()||c,p.height,o,0,0);
var v=u.computeHorizontalAlignOffset(x.getAlignX()||d,p.width,z[i],x.getMarginLeft(),x.getMarginRight());
x.renderLayout(A+v,top,p.width,p.height);
}A+=z[i]+t;
}},__oh:function(B){while(!(B instanceof qx.ui.menu.Menu)){B=B.getLayoutParent();
}return B;
},_computeSizeHint:function(){var k=this._getLayoutChildren();
var j=0;
var m=0;

for(var i=0,l=k.length;i<l;i++){var h=k[i].getSizeHint();
m+=h.width;
j=Math.max(j,h.height);
}return {width:m,height:j};
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var q="horizontal",p="scrollpane",o="vertical",n="button-backward",m="button-forward",l="content",k="execute",j="qx.ui.container.SlideBar",i="scrollY",h="removeChildWidget",c="scrollX",g="_applyOrientation",f="mousewheel",b="Integer",a="slidebar",d="update";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(A){qx.ui.core.Widget.call(this);
var B=this.getChildControl(p);
this._add(B,{flex:1});

if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}this.addListener(f,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:a},orientation:{check:[q,o],init:q,apply:g},scrollStep:{check:b,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(l);
},_createChildControlImpl:function(w){var x;

switch(w){case m:x=new qx.ui.form.RepeatButton;
x.addListener(k,this._onExecuteForward,this);
x.setFocusable(false);
this._addAt(x,2);
break;
case n:x=new qx.ui.form.RepeatButton;
x.addListener(k,this._onExecuteBackward,this);
x.setFocusable(false);
this._addAt(x,0);
break;
case l:x=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){x.addListener(h,this._onRemoveChild,this);
}this.getChildControl(p).add(x);
break;
case p:x=new qx.ui.core.scroll.ScrollPane();
x.addListener(d,this._onResize,this);
x.addListener(c,this._onScroll,this);
x.addListener(i,this._onScroll,this);
break;
}return x||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,w);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(r){var s=this.getChildControl(p);

if(this.getOrientation()===q){s.scrollByX(r);
}else{s.scrollByY(r);
}},scrollTo:function(y){var z=this.getChildControl(p);

if(this.getOrientation()===q){z.scrollToX(y);
}else{z.scrollToY(y);
}},_applyOrientation:function(C,D){var G=[this.getLayout(),this._getLayout()];
var F=this.getChildControl(m);
var E=this.getChildControl(n);
if(D==o){F.removeState(o);
E.removeState(o);
F.addState(q);
E.addState(q);
}else if(D==q){F.removeState(q);
E.removeState(q);
F.addState(o);
E.addState(o);
}
if(C==q){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(G[0]){G[0].dispose();
}
if(G[1]){G[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(p).getChildren()[0];

if(!content){return;
}var H=this.getInnerSize();
var J=content.getBounds();
var I=(this.getOrientation()===q)?J.width>H.width:J.height>H.height;

if(I){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(p).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var u=this.getChildControl(p);

if(this.getOrientation()===q){var t=u.getScrollX();
var v=u.getScrollMaxX();
}else{var t=u.getScrollY();
var v=u.getScrollMaxY();
}this.getChildControl(n).setEnabled(t>0);
this.getChildControl(m).setEnabled(t<v);
},_showArrows:function(){this._showChildControl(m);
this._showChildControl(n);
},_hideArrows:function(){this._excludeChildControl(m);
this._excludeChildControl(n);
this.scrollTo(0);
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){qx.ui.container.SlideBar.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g){var h;

switch(g){case c:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteForward,this);
this._addAt(h,2);
break;
case e:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteBackward,this);
this._addAt(h,0);
break;
}return h||qx.ui.container.SlideBar.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__li",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(r,s){qx.ui.form.Button.call(this,r,s);
this.__li=new qx.event.AcceleratingTimer();
this.__li.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__lj:null,__li:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__lk();
}this.removeState(m);
this.addState(n);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__lj){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__ll();
},_applyEnabled:function(o,p){qx.ui.form.Button.prototype._applyEnabled.call(this,o,p);

if(!o){this.removeState(n);
this.removeState(m);
this.__ll();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__li.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__li.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__lk();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__lj){this.execute();
}}this.__ll();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__lj){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__ll();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__lk();
}},_onInterval:function(e){this.__lj=true;
this.fireEvent(b);
},__lk:function(){this.fireEvent(g);
this.__lj=false;
this.__li.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__ll:function(){this.fireEvent(d);
this.__li.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var e="Integer",d="interval",c="__lm",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__lm=new qx.event.Timer(this.getInterval());
this.__lm.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__lm:null,__ln:null,start:function(){this.__lm.setInterval(this.getFirstInterval());
this.__lm.start();
},stop:function(){this.__lm.stop();
this.__ln=null;
},_onInterval:function(){this.__lm.stop();

if(this.__ln==null){this.__ln=this.getInterval();
}this.__ln=Math.max(this.getMinimum(),this.__ln-this.getDecrease());
this.__lm.setInterval(this.__ln);
this.__lm.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var L="resize",K="Integer",J="scrollY",I="update",H="scrollX",G="_applyScrollX",F="_applyScrollY",E="appear",D="qx.event.type.Event",C="qx.ui.core.scroll.ScrollPane",B="scroll";
qx.Class.define(C,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(L,this._onUpdate);
var w=this.getContentElement();
w.addListener(B,this._onScroll,this);
w.addListener(E,this._onAppear,this);
},events:{update:D},properties:{scrollX:{check:function(c){qx.core.Type.check(c,K);
return c<=this.getScrollMaxX();
},apply:G,event:H,init:0},scrollY:{check:function(f){qx.core.Type.check(f,K);
return f<=this.getScrollMaxY();
},apply:F,event:J,init:0}},members:{add:function(z){var A=this._getChildren()[0];

if(A){this._remove(A);
A.removeListener(L,this._onUpdate,this);
}
if(z){this._add(z);
z.addListener(L,this._onUpdate,this);
}},remove:function(v){if(v){this._remove(v);
v.removeListener(L,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(I);
},_onScroll:function(e){var d=this.getContentElement();
this.setScrollX(d.getScrollX());
this.setScrollY(d.getScrollY());
},_onAppear:function(e){var q=this.getContentElement();
var n=this.getScrollX();
var o=q.getScrollX();

if(n!=o){q.scrollToX(n);
}var r=this.getScrollY();
var p=q.getScrollY();

if(r!=p){q.scrollToY(r);
}},getItemTop:function(u){var top=0;

do{top+=u.getBounds().top;
u=u.getLayoutParent();
}while(u&&u!==this);
return top;
},getItemBottom:function(h){return this.getItemTop(h)+h.getBounds().height;
},getItemLeft:function(N){var O=0;
var parent;

do{O+=N.getBounds().left;
parent=N.getLayoutParent();

if(parent){O+=parent.getInsets().left;
}N=parent;
}while(N&&N!==this);
return O;
},getItemRight:function(g){return this.getItemLeft(g)+g.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var t=this.getInnerSize();
var s=this.getScrollSize();

if(t&&s){return Math.max(0,s.width-t.width);
}return 0;
},getScrollMaxY:function(){var b=this.getInnerSize();
var a=this.getScrollSize();

if(b&&a){return Math.max(0,a.height-b.height);
}return 0;
},scrollToX:function(l){var m=this.getScrollMaxX();

if(l<0){l=0;
}else if(l>m){l=m;
}this.setScrollX(l);
},scrollToY:function(i){var j=this.getScrollMaxY();

if(i<0){i=0;
}else if(i>j){i=j;
}this.setScrollY(i);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(k){this.getContentElement().scrollToX(k);
},_applyScrollY:function(M){this.getContentElement().scrollToY(M);
}}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="interval",d="mouseover",c="mouseout",b="__oi",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(d,this._onMouseOver,this);
this.addListener(c,this._onMouseOut,this);
this.__oi=new qx.event.AcceleratingTimer();
this.__oi.addListener(f,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__oi:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__oi.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__oi.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__oi.stop();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var b="qx.ui.menu.Button",a="menu-button";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(c,d,f,g){qx.ui.menu.AbstractButton.call(this);
if(c!=null){this.setLabel(c);
}
if(d!=null){this.setIcon(d);
}
if(f!=null){this.setCommand(f);
}
if(g!=null){this.setMenu(g);
}},properties:{appearance:{refine:true,init:a}},members:{_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var m="container",k="handle",j="both",h="Integer",g="middle",f="qx.ui.toolbar.Part",e="icon",d="label",c="changeShow",b="_applySpacing",a="toolbar/part";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,d,e],inheritable:true,event:c},spacing:{nullable:true,check:h,themeable:true,apply:b}},members:{_createChildControlImpl:function(n){var o;

switch(n){case k:o=new qx.ui.basic.Image();
o.setAlignY(g);
this._add(o);
break;
case m:o=new qx.ui.toolbar.PartContainer;
this._add(o);
break;
}return o||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,n);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(s,t){var u=this.getChildControl(m).getLayout();
s==null?u.resetSpacing():u.setSpacing(s);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var q=this.getChildren();
var p=[];
var r;

for(var i=0,l=q.length;i<l;i++){r=q[i];

if(r instanceof qx.ui.menubar.Button){p.push(r);
}}return p;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(e,f,g){qx.ui.form.Button.call(this,e,f,g);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},focusable:{refine:true,init:false}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b}}});
})();
(function(){var c="qx.ui.form.IRadioItem",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"changeValue":b},members:{setValue:function(a){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var j="checked",i="qx.ui.form.RadioGroup",h="Boolean",g="menu-radiobutton",f="_applyValue",d="qx.ui.menu.RadioButton",c="changeValue",b="_applyGroup",a="execute";
qx.Class.define(d,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(k,l){qx.ui.menu.AbstractButton.call(this);
if(k!=null){this.setLabel(k);
}
if(l!=null){this.setMenu(l);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:h,nullable:true,event:c,apply:f,init:false},group:{check:i,nullable:true,apply:b}},members:{_applyValue:function(o,p){o?this.addState(j):this.removeState(j);
},_applyGroup:function(m,n){if(n){n.remove(this);
}
if(m){m.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var h="Please use an array as parameter.",g="qx.ui.form.MModelSelection",f="change",e="qx.debug",d="__iO",c="changeSelection",b="on",a="qx.event.type.Data";
qx.Mixin.define(g,{construct:function(){this.__iO=new qx.data.Array();
this.__iO.addListener(f,this.__iR,this);
this.addListener(c,this.__iQ,this);
},events:{changeModelSelection:a},members:{__iO:null,__iP:false,__iQ:function(){if(this.__iP){return;
}var o=this.getSelection();
var m=[];

for(var i=0;i<o.length;i++){var p=o[i];
var n=p.getModel?p.getModel():null;

if(n!==null){m.push(n);
}}if(m.length===o.length){this.setModelSelection(m);
}},__iR:function(){this.__iP=true;
var r=this.getSelectables(true);
var t=[];
var s=this.__iO.toArray();

for(var i=0;i<s.length;i++){var v=s[i];

for(var j=0;j<r.length;j++){var w=r[j];
var q=w.getModel?w.getModel():null;

if(v===q){t.push(w);
break;
}}}this.setSelection(t);
this.__iP=false;
var u=this.getSelection();

if(!qx.lang.Array.equals(u,t)){this.__iQ();
}},getModelSelection:function(){return this.__iO;
},setModelSelection:function(k){if(!k){this.__iO.removeAll();
return;
}
if(qx.core.Variant.isSet(e,b)){this.assertArray(k,h);
}k.unshift(this.__iO.getLength());
k.unshift(0);
var l=this.__iO.splice.apply(this.__iO,k);
l.dispose();
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var t="Boolean",s="changeInvalidMessage",r="changeValue",q="String",p="__iS",o="_applyAllowEmptySelection",n="_applyInvalidMessage",m="qx.ui.form.RadioGroup",k="_applyValid",j="",f="changeRequired",h="changeValid",g="changeEnabled",d="changeSelection",c="_applyEnabled";
qx.Class.define(m,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(y){qx.core.Object.call(this);
this.__iS=[];
this.addListener(d,this.__iT,this);

if(y!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:t,apply:c,event:g,init:true},wrap:{check:t,init:true},allowEmptySelection:{check:t,init:false,apply:o},valid:{check:t,init:true,apply:k,event:h},required:{check:t,init:false,event:f},invalidMessage:{check:q,init:j,event:s,apply:n},requiredInvalidMessage:{check:q,nullable:true,event:s}},members:{__iS:null,getItems:function(){return this.__iS;
},add:function(M){var N=this.__iS;
var O;

for(var i=0,l=arguments.length;i<l;i++){O=arguments[i];

if(qx.lang.Array.contains(N,O)){continue;
}O.addListener(r,this._onItemChangeChecked,this);
N.push(O);
O.setGroup(this);
if(O.getValue()){this.setSelection([O]);
}}if(!this.isAllowEmptySelection()&&N.length>0&&!this.getSelection()[0]){this.setSelection([N[0]]);
}},remove:function(a){var b=this.__iS;

if(qx.lang.Array.contains(b,a)){qx.lang.Array.remove(b,a);
if(a.getGroup()===this){a.resetGroup();
}a.removeListener(r,this._onItemChangeChecked,this);
if(a.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__iS;
},_onItemChangeChecked:function(e){var P=e.getTarget();

if(P.getValue()){this.setSelection([P]);
}else if(this.getSelection()[0]==P){this.resetSelection();
}},_applyInvalidMessage:function(u,v){for(var i=0;i<this.__iS.length;i++){this.__iS[i].setInvalidMessage(u);
}},_applyValid:function(E,F){for(var i=0;i<this.__iS.length;i++){this.__iS[i].setValid(E);
}},_applyEnabled:function(J,K){var L=this.__iS;

if(J==null){for(var i=0,l=L.length;i<l;i++){L[i].resetEnabled();
}}else{for(var i=0,l=L.length;i<l;i++){L[i].setEnabled(J);
}}},_applyAllowEmptySelection:function(w,x){if(!w&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var B=this.getSelection()[0];
var D=this.__iS;
var C=D.indexOf(B);

if(C==-1){return;
}var i=0;
var length=D.length;
if(this.getWrap()){C=(C+1)%length;
}else{C=Math.min(C+1,length-1);
}
while(i<length&&!D[C].getEnabled()){C=(C+1)%length;
i++;
}this.setSelection([D[C]]);
},selectPrevious:function(){var G=this.getSelection()[0];
var I=this.__iS;
var H=I.indexOf(G);

if(H==-1){return;
}var i=0;
var length=I.length;
if(this.getWrap()){H=(H-1+length)%length;
}else{H=Math.max(H-1,0);
}
while(i<length&&!I[H].getEnabled()){H=(H-1+length)%length;
i++;
}this.setSelection([I[H]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__iT:function(e){var A=e.getData()[0];
var z=e.getOldData()[0];

if(z){z.setValue(false);
}
if(A){A.setValue(true);
}}},destruct:function(){this._disposeArray(p);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(m,n,name){this.fireDataEvent(c,{value:m,name:name,old:n});
this._registerEventChaining(m,n,name);
},_registerEventChaining:function(i,j,name){if((i instanceof qx.core.Object)&&qx.Class.hasMixin(i.constructor,qx.data.marshal.MEventBubbling)){var k=qx.lang.Function.bind(this.__ja,this,name);
var l=i.addListener(c,k,this);
i.setUserData(d,l);
}if(j!=null&&j.getUserData&&j.getUserData(d)!=null){j.removeListenerById(j.getUserData(d));
}},__ja:function(name,e){var v=e.getData();
var r=v.value;
var p=v.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(v.name.indexOf){var u=v.name.indexOf(f)!=-1?v.name.indexOf(f):v.name.length;
var s=v.name.indexOf(h)!=-1?v.name.indexOf(h):v.name.length;

if(u<s){var o=v.name.substring(0,u);
var t=v.name.substring(u+1,v.name.length);

if(t[0]!=h){t=f+t;
}var q=name+h+o+g+t;
}else if(s<u){var o=v.name.substring(0,s);
var t=v.name.substring(s,v.name.length);
var q=name+h+o+g+t;
}else{var q=name+h+v.name+g;
}}else{var q=name+h+v.name+g;
}}else{var q=name+f+v.name;
}this.fireDataEvent(c,{value:r,name:q,old:p});
}}});
})();
(function(){var u="change",t="add",s="remove",r="order",q="qx.event.type.Data",p="The parameter must be an array.",o="",n="qx.data.Array",m="?",l="changeBubble",h="number",k="on",j="changeLength",g="qx.debug";
qx.Class.define(n,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(W){qx.core.Object.call(this);
if(W==undefined){this.__jb=[];
}else if(arguments.length>1){this.__jb=[];

for(var i=0;i<arguments.length;i++){this.__jb.push(arguments[i]);
}}else if(typeof W==h){this.__jb=new Array(W);
}else if(W instanceof Array){this.__jb=qx.lang.Array.clone(W);
}else{this.__jb=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__jb.length;i++){this._applyEventPropagation(this.__jb[i],null,i);
}this.__jc();
},events:{"change":q,"changeLength":q},members:{__jb:null,concat:function(bj){if(bj){var bk=this.__jb.concat(bj);
}else{var bk=this.__jb.concat();
}return new qx.data.Array(bk);
},join:function(X){return this.__jb.join(X);
},pop:function(){var G=this.__jb.pop();
this.__jc();
this._applyEventPropagation(null,G,this.length-1);
this.fireDataEvent(u,{start:this.length-1,end:this.length-1,type:s,items:[G]},null);
return G;
},push:function(S){for(var i=0;i<arguments.length;i++){this.__jb.push(arguments[i]);
this.__jc();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(u,{start:this.length-1,end:this.length-1,type:t,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__jb.reverse();
this.fireDataEvent(u,{start:0,end:this.length-1,type:r,items:null},null);
},shift:function(){var y=this.__jb.shift();
this.__jc();
this._applyEventPropagation(null,y,this.length-1);
this.fireDataEvent(u,{start:0,end:this.length-1,type:s,items:[y]},null);
return y;
},slice:function(H,I){return new qx.data.Array(this.__jb.slice(H,I));
},splice:function(Y,ba,bb){var bh=this.__jb.length;
var be=this.__jb.splice.apply(this.__jb,arguments);
if(this.__jb.length!=bh){this.__jc();
}var bf=ba>0;
var bc=arguments.length>2;
var bd=null;

if(bf||bc){if(this.__jb.length>bh){var bg=t;
}else if(this.__jb.length<bh){var bg=s;
bd=be;
}else{var bg=r;
}this.fireDataEvent(u,{start:Y,end:this.length-1,type:bg,items:bd},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,Y+i);
}this.fireDataEvent(l,{value:this,name:m,old:be});
for(var i=0;i<be.length;i++){this._applyEventPropagation(null,be[i],i);
}return (new qx.data.Array(be));
},sort:function(bl){this.__jb.sort.apply(this.__jb,arguments);
this.fireDataEvent(u,{start:0,end:this.length-1,type:r,items:null},null);
},unshift:function(M){for(var i=arguments.length-1;i>=0;i--){this.__jb.unshift(arguments[i]);
this.__jc();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(u,{start:0,end:this.length-1,type:t,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__jb;
},getItem:function(C){return this.__jb[C];
},setItem:function(v,w){var x=this.__jb[v];
this.__jb[v]=w;
this._applyEventPropagation(w,x,v);
if(this.length!=this.__jb.length){this.__jc();
}this.fireDataEvent(u,{start:v,end:v,type:t,items:[w]},null);
},getLength:function(){return this.length;
},indexOf:function(B){return this.__jb.indexOf(B);
},toString:function(){if(this.__jb!=null){return this.__jb.toString();
}return o;
},contains:function(O){return this.__jb.indexOf(O)!==-1;
},copy:function(){return this.concat();
},insertAt:function(T,U){this.splice(T,0,U);
},insertBefore:function(d,e){var f=this.indexOf(d);

if(f==-1){this.push(e);
}else{this.splice(f,0,e);
}},insertAfter:function(a,b){var c=this.indexOf(a);

if(c==-1||c==(this.length-1)){this.push(b);
}else{this.splice(c+1,0,b);
}},removeAt:function(V){return this.splice(V,1).getItem(0);
},removeAll:function(){for(var i=0;i<this.__jb.length;i++){this._applyEventPropagation(null,this.__jb[i],i);
}var F=this.getLength();
var E=this.__jb.concat();
this.__jb.length=0;
this.__jc();
this.fireDataEvent(u,{start:0,end:F-1,type:s,items:E},null);
},append:function(P){if(P instanceof qx.data.Array){P=P.toArray();
}if(qx.core.Variant.isSet(g,k)){qx.core.Assert.assertArray(P,p);
}for(var i=0;i<P.length;i++){this._applyEventPropagation(P[i],null,this.__jb.length+i);
}Array.prototype.push.apply(this.__jb,P);
var Q=this.length;
this.__jc();
this.fireDataEvent(u,{start:Q,end:this.length-1,type:t,items:P},null);
},remove:function(J){var K=this.indexOf(J);

if(K!=-1){this.splice(K,1);
return J;
}},equals:function(R){if(this.length!==R.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==R.getItem(i)){return false;
}}return true;
},sum:function(){var bi=0;

for(var i=0;i<this.length;i++){bi+=this.getItem(i);
}return bi;
},max:function(){var D=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>D){D=this.getItem(i);
}}return D===undefined?null:D;
},min:function(){var N=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<N){N=this.getItem(i);
}}return N===undefined?null:N;
},forEach:function(z,A){for(var i=0;i<this.__jb.length;i++){z.call(A,this.__jb[i]);
}},__jc:function(){var L=this.length;
this.length=this.__jb.length;
this.fireDataEvent(j,this.length,L);
}},destruct:function(){for(var i=0;i<this.__jb.length;i++){this._applyEventPropagation(null,this.__jb[i],i);
}this.__jb=null;
}});
})();
(function(){var e="arrow",d="qx.ui.toolbar.MenuButton",c="Boolean",b="_applyShowArrow",a="toolbar-menubutton";
qx.Class.define(d,{extend:qx.ui.menubar.Button,properties:{appearance:{refine:true,init:a},showArrow:{check:c,init:false,themeable:true,apply:b}},members:{_createChildControlImpl:function(f){var g;

switch(f){case e:g=new qx.ui.basic.Image();
g.setAnonymous(true);
this._addAt(g,10);
break;
}return g||qx.ui.menubar.Button.prototype._createChildControlImpl.call(this,f);
},_applyShowArrow:function(h,i){if(h){this._showChildControl(e);
}else{this._excludeChildControl(e);
}}}});
})();
(function(){var s="pressed",r="abandoned",q="hovered",p="checked",o="Space",n="Enter",m="mouseup",l="mousedown",k="Boolean",j="_applyValue",c="mouseover",i="mouseout",g="qx.ui.form.ToggleButton",b="keydown",a="changeValue",f="button",d="keyup",h="execute";
qx.Class.define(g,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable],construct:function(v,w){qx.ui.basic.Atom.call(this,v,w);
this.addListener(c,this._onMouseOver);
this.addListener(i,this._onMouseOut);
this.addListener(l,this._onMouseDown);
this.addListener(m,this._onMouseUp);
this.addListener(b,this._onKeyDown);
this.addListener(d,this._onKeyUp);
this.addListener(h,this._onExecute,this);
},properties:{appearance:{refine:true,init:f},focusable:{refine:true,init:true},value:{check:k,nullable:true,event:a,apply:j,init:false}},members:{_applyValue:function(t,u){t?this.addState(p):this.removeState(p);
},_onExecute:function(e){this.toggleValue();
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(q);

if(this.hasState(r)){this.removeState(r);
this.addState(s);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(q);

if(this.hasState(s)){if(!this.getValue()){this.removeState(s);
}this.addState(r);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(r);
this.addState(s);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(r)){this.removeState(r);
}else if(this.hasState(s)){this.execute();
}this.removeState(s);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case n:case o:this.removeState(r);
this.addState(s);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(s)){return;
}
switch(e.getKeyIdentifier()){case n:case o:this.removeState(r);
this.execute();
this.removeState(s);
e.stopPropagation();
}}}});
})();
(function(){var d="toolbar-button",c="qx.ui.toolbar.CheckBox",b="keydown",a="keyup";
qx.Class.define(c,{extend:qx.ui.form.ToggleButton,construct:function(e,f){qx.ui.form.ToggleButton.call(this,e,f);
this.removeListener(b,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},focusable:{refine:true,init:false}}});
})();
(function(){var c="qx.ui.form.RadioGroup",b="_applyGroup",a="qx.ui.toolbar.RadioButton";
qx.Class.define(a,{extend:qx.ui.toolbar.CheckBox,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel,qx.ui.form.IRadioItem],properties:{group:{check:c,apply:b,nullable:true}},members:{_applyValue:function(f,g){qx.ui.toolbar.CheckBox.prototype._applyValue.call(this,f,g);

if(f){var h=this.getGroup();

if(h){h.setSelection([this]);
}}},_applyGroup:function(d,e){if(e){e.remove(this);
}
if(d){d.add(this);
}}}});
})();
(function(){var g="String",f="qx.ui.embed.AbstractIframe",e="name",d="",c="_applySource",b="qx.event.type.Event",a="_applyFrameName";
qx.Class.define(f,{extend:qx.ui.core.Widget,construct:function(l){qx.ui.core.Widget.call(this);

if(l){this.setSource(l);
}},events:{"load":b},properties:{source:{check:g,apply:c,nullable:true},frameName:{check:g,init:d,apply:a}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(j,k){this._getIframeElement().setSource(j);
},_applyFrameName:function(h,i){this._getIframeElement().setAttribute(e,h);
},getWindow:function(){return this._getIframeElement().getWindow();
},getDocument:function(){return this._getIframeElement().getDocument();
},getBody:function(){return this._getIframeElement().getBody();
},getName:function(){return this._getIframeElement().getName();
},reload:function(){this._getIframeElement().reload();
}}});
})();
(function(){var m="qx.client",l="mousedown",k="load",j="help",i="mouseup",h="losecapture",g="contextmenu",f="none",d="display",c="no",I="Boolean",H="px",G="url(",F=")",E="gecko",D="repeat",C="div",B="auto",A="_applyScrollbar",z="DOMNodeInserted",t="__wF",u="_applyNativeHelp",r="yes",s="scrolling",p="/",q="appear",n="mshtml",o="block",v="qx.ui.embed.Iframe",w="iframe",y="qx/static/blank.gif",x="absolute";
qx.Class.define(v,{extend:qx.ui.embed.AbstractIframe,construct:function(P){if(P!=null){this.__wE=P;
}qx.ui.embed.AbstractIframe.call(this,P);
qx.event.Registration.addListener(document.body,l,this.block,this,true);
qx.event.Registration.addListener(document.body,i,this.release,this,true);
qx.event.Registration.addListener(document.body,h,this.release,this,true);
this.__wF=this._createBlockerElement();
this.getContainerElement().add(this.__wF);

if(qx.core.Variant.isSet(m,E)){this.addListenerOnce(q,function(e){var S=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(S,z,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:w},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:I,init:false,apply:u},scrollbar:{check:[B,c,r],nullable:true,themeable:true,apply:A}},members:{__wE:null,__wF:null,renderLayout:function(T,top,U,V){qx.ui.embed.AbstractIframe.prototype.renderLayout.call(this,T,top,U,V);
var X=H;
var W=this.getInsets();
this.__wF.setStyles({"left":W.left+X,"top":W.top+X,"width":(U-W.left-W.right)+X,"height":(V-W.top-W.bottom)+X});
},_createContentElement:function(){var J=new qx.html.Iframe(this.__wE);
J.addListener(k,this._onIframeLoad,this);
return J;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var Y=new qx.html.Element(C);
Y.setStyles({"zIndex":20,"position":x,"display":f});
if(qx.core.Variant.isSet(m,n)){Y.setStyles({backgroundImage:G+qx.util.ResourceManager.getInstance().toUri(y)+F,backgroundRepeat:D});
}return Y;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(k);
},block:function(){this.__wF.setStyle(d,o);
},release:function(){this.__wF.setStyle(d,f);
},_applyNativeContextMenu:function(L,M){if(L!==false&&M!==false){return;
}var N=this.getDocument();

if(!N){return;
}
try{var O=N.documentElement;
}catch(e){return ;
}
if(M===false){qx.event.Registration.removeListener(O,g,this._onNativeContextMenu,this,true);
}
if(L===false){qx.event.Registration.addListener(O,g,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(m,{"mshtml":function(Q,R){var document=this.getDocument();

if(!document){return;
}
try{if(R===false){qx.bom.Event.removeNativeListener(document,j,qx.lang.Function.returnFalse);
}
if(Q===false){qx.bom.Event.addNativeListener(document,j,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}}),_syncSourceAfterDOMMove:function(){var b=this.getContentElement().getDomElement();
var a=b.src;
if(a.charAt(a.length-1)==p){a=a.substring(0,a.length-1);
}
if(a!=this.getSource()){qx.bom.Iframe.getWindow(b).stop();
b.src=this.getSource();
}},_applyScrollbar:function(K){this.getContentElement().setAttribute(s,K);
}},destruct:function(){this._disposeObjects(t);
qx.event.Registration.removeListener(document.body,l,this.block,this,true);
qx.event.Registration.removeListener(document.body,i,this.release,this,true);
qx.event.Registration.removeListener(document.body,h,this.release,this,true);
}});
})();
(function(){var f="source",e="name",d="qx.html.Iframe",c="qx.event.type.Event",b="iframe";
qx.Class.define(d,{extend:qx.html.Element,construct:function(l,m,n){qx.html.Element.call(this,b,m,n);
this._setProperty(f,l);
},events:{"load":c},members:{_applyProperty:function(name,o){qx.html.Element.prototype._applyProperty.call(this,name,o);

if(name==f){var p=this.getDomElement();
qx.bom.Iframe.setSource(p,o);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var h=this.getDomElement();

if(h){return qx.bom.Iframe.getWindow(h);
}else{return null;
}},getDocument:function(){var a=this.getDomElement();

if(a){return qx.bom.Iframe.getDocument(a);
}else{return null;
}},getBody:function(){var g=this.getDomElement();

if(g){return qx.bom.Iframe.getBody(g);
}else{return null;
}},setSource:function(k){this._setProperty(f,k);
return this;
},getSource:function(){return this._getProperty(f);
},setName:function(name){this.setAttribute(e,name);
return this;
},getName:function(){return this.getAttribute(e);
},reload:function(){var j=this.getDomElement();

if(j){var i=this.getSource();
this.setSource(null);
this.setSource(i);
}}}});
})();
(function(){var j="Number",i="_applyInsets",h="abstract",g="insetRight",f="insetTop",e="qx.debug",d="insetBottom",c="qx.ui.decoration.Abstract",b="on",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:h,properties:{insetLeft:{check:j,nullable:true,apply:i},insetRight:{check:j,nullable:true,apply:i},insetBottom:{check:j,nullable:true,apply:i},insetTop:{check:j,nullable:true,apply:i},insets:{group:[f,g,d,a],shorthand:true}},members:{__sg:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__sg=null;
},getInsets:function(){if(this.__sg){return this.__sg;
}var k=this._getDefaultInsets();
return this.__sg={left:this.getInsetLeft()==null?k.left:this.getInsetLeft(),right:this.getInsetRight()==null?k.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?k.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?k.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Variant.isSet(e,b)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__sg=null;
}},destruct:function(){this.__sg=null;
}});
})();
(function(){var s="_applyBackground",r="repeat",q="mshtml",p="on",o="backgroundPositionX",n="",m="backgroundPositionY",l="qx.debug",k="no-repeat",j="scale",d=" ",i="repeat-x",g="qx.client",c="repeat-y",b="hidden",f="qx.ui.decoration.MBackgroundImage",e="String",h='"></div>',a='<div style="';
qx.Mixin.define(f,{properties:{backgroundImage:{check:e,nullable:true,apply:s},backgroundRepeat:{check:[r,i,c,k,j],init:r,apply:s},backgroundPositionX:{nullable:true,apply:s},backgroundPositionY:{nullable:true,apply:s},backgroundPosition:{group:[m,o]}},members:{_generateBackgroundMarkup:function(t){var x=n;
var w=this.getBackgroundImage();
var v=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var y=this.getBackgroundPositionX();

if(y==null){y=0;
}t.backgroundPosition=y+d+top;
if(w){var u=qx.util.AliasManager.getInstance().resolve(w);
x=qx.bom.element.Decoration.create(u,v,t);
}else{if(t){if(qx.core.Variant.isSet(g,q)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){t.overflow=b;
}}x=a+qx.bom.element.Style.compile(t)+h;
}}return x;
},_applyBackground:function(){if(qx.core.Variant.isSet(l,p)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var h="px",g="qx.ui.decoration.Background",f="",e="qx.debug",d="_applyStyle",c="on",b="Color",a="absolute";
qx.Class.define(g,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(i){qx.ui.decoration.Abstract.call(this);

if(i!=null){this.setBackgroundColor(i);
}},properties:{backgroundColor:{check:b,nullable:true,apply:d}},members:{__si:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__si;
},getMarkup:function(){if(this.__si){return this.__si;
}var m={position:a,top:0,left:0};
var n=this._generateBackgroundMarkup(m);
return this.__si=n;
},resize:function(o,p,q){var r=this.getInsets();
o.style.width=(p-r.left-r.right)+h;
o.style.height=(q-r.top-r.bottom)+h;
o.style.left=r.left+h;
o.style.top=r.top+h;
},tint:function(j,k){var l=qx.theme.manager.Color.getInstance();

if(k==null){k=this.getBackgroundColor();
}j.style.backgroundColor=l.resolve(k)||f;
},_applyStyle:function(){if(qx.core.Variant.isSet(e,c)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__si=null;
}});
})();
(function(){var i="auto",h="overflowX",g="visible",f="hidden",e="scroll",d="overflowY",c="_applyOverflowX",b="_applyOverflowY",a="qx.ui.core.MNativeOverflow";
qx.Mixin.define(a,{properties:{overflowX:{check:[f,g,e,i],nullable:true,apply:c},overflowY:{check:[f,g,e,i],nullable:true,apply:b},overflow:{group:[h,d]}},members:{_applyOverflowX:function(j){this.getContentElement().setStyle(h,j);
},_applyOverflowY:function(k){this.getContentElement().setStyle(d,k);
}}});
})();
(function(){var q="none",p="text",o="",n="userSelect",m="color",l="String",k="0px",j="webkit",i="changeHtml",h="_applyCssClass",e="class",g="qx.ui.embed.Html",f="_applyHtml",d="qx.client",c="html";
qx.Class.define(g,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(w){qx.ui.core.Widget.call(this);

if(w!=null){this.setHtml(w);
}},properties:{html:{check:l,apply:f,event:i,nullable:true},cssClass:{check:l,init:o,apply:h},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(y,z){var A=this.getContentElement();
A.setAttribute(c,y||o);
A.setStyles({"padding":k,"border":q});
},_applyCssClass:function(a,b){this.getContentElement().setAttribute(e,a);
},_applySelectable:function(x){qx.ui.core.Widget.prototype._applySelectable.call(this,x);
if(qx.core.Variant.isSet(d,j)){this.getContainerElement().setStyle(n,x?p:q);
this.getContentElement().setStyle(n,x?p:q);
}},_applyFont:function(r,s){var t=r?qx.theme.manager.Font.getInstance().resolve(r).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(t);
},_applyTextColor:function(u,v){if(u){this.getContentElement().setStyle(m,qx.theme.manager.Color.getInstance().resolve(u));
}else{this.getContentElement().removeStyle(m);
}}}});
})();
(function(){var q="",p='.qxappender .type-array{color:#CC3E8A;font-weight:bold;}',o='.qxappender .type-instance{color:#565656;font-weight:bold}',n="qx.log.appender.Element",m='.qxappender .level-info{background:#DEEDFA}',l='.qxappender .type-stringify{color:#565656;font-weight:bold}',k='.qxappender .type-number{color:#155791;font-weight:normal;}',j="qxappender",i='.qxappender .type-map{color:#CC3E8A;font-weight:bold;}',h='.qxappender .type-class{color:#5F3E8A;font-weight:bold}',c='.qxappender .type-boolean{color:#15BC91;font-weight:normal;}',g='.qxappender .level-error{background:#FFE2D5}',f='.qxappender .level-debug{background:white}',b='.qxappender .type-key{color:#565656;font-style:italic}',a='.qxappender .level-user{background:#E3EFE9}',e='.qxappender .level-warn{background:#FFF7D5}',d='.qxappender .type-string{color:black;font-weight:normal;}';
qx.Class.define(n,{extend:qx.core.Object,construct:function(u){qx.core.Object.call(this);
var v=[f,m,e,g,a,d,k,c,p,i,b,h,o,l];
qx.bom.Stylesheet.createElement(v.join(q));
qx.log.Logger.register(this);
},members:{__xy:null,setElement:function(t){this.clear();
if(t){qx.bom.element.Class.add(t,j);
}this.__xy=t;
},clear:function(){var w=this.__xy;
if(w){w.innerHTML=q;
}},process:function(r){var s=this.__xy;

if(!s){return;
}s.appendChild(qx.log.appender.Util.toHtml(r));
s.scrollTop=s.scrollHeight;
}},destruct:function(){this.__xy=null;
}});
})();
(function(){var n="default",m="native",k="",j=" ",h="\\b",g="(\\s|$)",f="(^|\\s)",e="g",d="qx.bom.element.Class",c="$2",b="\\b|\\b";
qx.Class.define(d,{statics:{__xz:/\s+/g,__xA:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(r,name){r.classList.add(name);
return name;
},"default":function(N,name){if(!this.has(N,name)){N.className+=(N.className?j:k)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(E,F){for(var i=0;i<F.length;i++){E.classList.add(F[i]);
}return E.className;
},"default":function(G,H){var I={};
var K;
var J=G.className;

if(J){K=J.split(this.__xz);

for(var i=0,l=K.length;i<l;i++){I[K[i]]=true;
}
for(var i=0,l=H.length;i<l;i++){if(!I[H[i]]){K.push(H[i]);
}}}else{K=H;
}return G.className=K.join(j);
}}),get:function(a){return a.className;
},has:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(O,name){return O.classList.contains(name);
},"default":function(z,name){var A=new RegExp(f+name+g);
return A.test(z.className);
}}),remove:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(o,name){o.classList.remove(name);
return name;
},"default":function(p,name){var q=new RegExp(f+name+g);
p.className=p.className.replace(q,c);
return name;
}}),removeClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(L,M){for(var i=0;i<M.length;i++){L.classList.remove(M[i]);
}return L.className;
},"default":function(B,C){var D=new RegExp(h+C.join(b)+h,e);
return B.className=B.className.replace(D,k).replace(this.__xA,k).replace(this.__xz,j);
}}),replace:function(w,x,y){this.remove(w,x);
return this.add(w,y);
},toggle:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(u,name,v){if(v===undefined){u.classList.toggle(name);
}else{v?this.add(u,name):this.remove(u,name);
}return name;
},"default":function(s,name,t){if(t==null){t=!this.has(s,name);
}t?this.add(s,name):this.remove(s,name);
return name;
}})}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var q="scrollbar-y",p="scrollbar-x",o="pane",n="auto",m="corner",l="scrollbar-",k="on",j="scrollY",i="_computeScrollbars",h="qx.event.type.Data",I="scrollX",H="changeVisibility",G="getPage",F="off",E="scroll",D="touchmove",C="mousewheel",B="scrollbarX",A="scrollarea",z="y",x="vertical",y="touchstart",v="horizontal",w="qx.ui.core.scroll.AbstractScrollArea",t="abstract",u="update",r="scrollbarY",s="x";
qx.Class.define(w,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:t,construct:function(){qx.ui.core.Widget.call(this);
var bg=new qx.ui.layout.Grid();
bg.setColumnFlex(0,1);
bg.setRowFlex(0,1);
this._setLayout(bg);
this.addListener(C,this._onMouseWheel,this);
if(qx.bom.client.Feature.TOUCH){this.addListener(D,this._onTouchMove,this);
this.addListener(y,function(){this.__uh={"x":0,"y":0};
},this);
this.__uh={};
this.__ui={};
}},events:{"scrollX":h,"scrollY":h},properties:{appearance:{refine:true,init:A},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[n,k,F],init:n,themeable:true,apply:i},scrollbarY:{check:[n,k,F],init:n,themeable:true,apply:i},scrollbar:{group:[B,r]}},members:{__uh:null,__ui:null,_createChildControlImpl:function(c){var d;

switch(c){case o:d=new qx.ui.core.scroll.ScrollPane();
d.addListener(u,this._computeScrollbars,this);
d.addListener(I,this._onScrollPaneX,this);
d.addListener(j,this._onScrollPaneY,this);
this._add(d,{row:0,column:0});
break;
case p:d=this._createScrollBar(v);
d.setMinWidth(0);
d.exclude();
d.addListener(E,this._onScrollBarX,this);
d.addListener(H,this._onChangeScrollbarXVisibility,this);
this._add(d,{row:1,column:0});
break;
case q:d=this._createScrollBar(x);
d.setMinHeight(0);
d.exclude();
d.addListener(E,this._onScrollBarY,this);
d.addListener(H,this._onChangeScrollbarYVisibility,this);
this._add(d,{row:0,column:1});
break;
case m:d=new qx.ui.core.Widget();
d.setWidth(0);
d.setHeight(0);
d.exclude();
this._add(d,{row:1,column:1});
break;
}return d||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,c);
},getPaneSize:function(){return this.getChildControl(o).getInnerSize();
},getItemTop:function(bf){return this.getChildControl(o).getItemTop(bf);
},getItemBottom:function(g){return this.getChildControl(o).getItemBottom(g);
},getItemLeft:function(bc){return this.getChildControl(o).getItemLeft(bc);
},getItemRight:function(bh){return this.getChildControl(o).getItemRight(bh);
},scrollToX:function(bv){qx.ui.core.queue.Manager.flush();
this.getChildControl(p).scrollTo(bv);
},scrollByX:function(Y){qx.ui.core.queue.Manager.flush();
this.getChildControl(p).scrollBy(Y);
},getScrollX:function(){var be=this.getChildControl(p,true);
return be?be.getPosition():0;
},scrollToY:function(f){qx.ui.core.queue.Manager.flush();
this.getChildControl(q).scrollTo(f);
},scrollByY:function(bp){qx.ui.core.queue.Manager.flush();
this.getChildControl(q).scrollBy(bp);
},getScrollY:function(){var bu=this.getChildControl(q,true);
return bu?bu.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(o).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(o).scrollToY(e.getData());
},_onScrollPaneX:function(e){var X=e.getData();
this.scrollToX(X);
this.fireDataEvent(I,X);
},_onScrollPaneY:function(e){var bd=e.getData();
this.scrollToY(bd);
this.fireDataEvent(j,bd);
},_onMouseWheel:function(e){var bs=this._isChildControlVisible(p);
var bt=this._isChildControlVisible(q);
var br=(bt)?this.getChildControl(q,true):(bs?this.getChildControl(p,true):null);

if(br){br.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onTouchMove:function(e){this._onTouchMoveDirectional(s,e);
this._onTouchMoveDirectional(z,e);
e.stop();
},_onTouchMoveDirectional:function(bk,e){var bm=bk.toUpperCase();
var bn=this.getChildControl(l+bk,true);
var bo=this._isChildControlVisible(l+bk);

if(bo&&bn){if(this.__uh[bk]==0){var bl=0;
}else{var bl=-(e[G+bm]()-this.__uh[bk]);
}this.__uh[bk]=e[G+bm]();
bn.scrollBy(bl);
if(this.__ui[bk]){clearTimeout(this.__ui[bk]);
this.__ui[bk]=null;
}this.__ui[bk]=setTimeout(qx.lang.Function.bind(function(bq){this.__sx(bq,bk);
},this,bl),100);
}},__sx:function(J,K){this.__ui[K]=null;
var M=this._isChildControlVisible(l+K);

if(J==0||!M){return;
}if(J>0){J=Math.max(0,J-3);
}else{J=Math.min(0,J+3);
}this.__ui[K]=setTimeout(qx.lang.Function.bind(function(ba,bb){this.__sx(ba,bb);
},this,J,K),20);
var L=this.getChildControl(l+K,true);
L.scrollBy(J);
},_onChangeScrollbarXVisibility:function(e){var bi=this._isChildControlVisible(p);
var bj=this._isChildControlVisible(q);

if(!bi){this.scrollToX(0);
}bi&&bj?this._showChildControl(m):this._excludeChildControl(m);
},_onChangeScrollbarYVisibility:function(e){var a=this._isChildControlVisible(p);
var b=this._isChildControlVisible(q);

if(!b){this.scrollToY(0);
}a&&b?this._showChildControl(m):this._excludeChildControl(m);
},_computeScrollbars:function(){var T=this.getChildControl(o);
var content=T.getChildren()[0];

if(!content){this._excludeChildControl(p);
this._excludeChildControl(q);
return;
}var N=this.getInnerSize();
var S=T.getInnerSize();
var Q=T.getScrollSize();
if(!S||!Q){return;
}var U=this.getScrollbarX();
var V=this.getScrollbarY();

if(U===n&&V===n){var R=Q.width>N.width;
var W=Q.height>N.height;
if((R||W)&&!(R&&W)){if(R){W=Q.height>S.height;
}else if(W){R=Q.width>S.width;
}}}else{var R=U===k;
var W=V===k;
if(Q.width>(R?S.width:N.width)&&U===n){R=true;
}
if(Q.height>(R?S.height:N.height)&&V===n){W=true;
}}if(R){var P=this.getChildControl(p);
P.show();
P.setMaximum(Math.max(0,Q.width-S.width));
P.setKnobFactor((Q.width===0)?0:S.width/Q.width);
}else{this._excludeChildControl(p);
}
if(W){var O=this.getChildControl(q);
O.show();
O.setMaximum(Math.max(0,Q.height-S.height));
O.setKnobFactor((Q.height===0)?0:S.height/Q.height);
}else{this._excludeChildControl(q);
}}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(b){return arguments.length==1;
}}});
})();
(function(){var F="single",E="Boolean",D="one",C="changeSelection",B="mouseup",A="mousedown",z="losecapture",y="multi",x="_applyQuickSelection",w="__kl",p="mouseover",v="_applySelectionMode",s="_applyDragSelection",o="qx.ui.core.MMultiSelectionHandling",n="removeItem",r="keypress",q="qx.event.type.Data",t="addItem",m="additive",u="mousemove";
qx.Mixin.define(o,{construct:function(){var H=this.SELECTION_MANAGER;
var G=this.__kl=new H(this);
this.addListener(A,G.handleMouseDown,G);
this.addListener(B,G.handleMouseUp,G);
this.addListener(p,G.handleMouseOver,G);
this.addListener(u,G.handleMouseMove,G);
this.addListener(z,G.handleLoseCapture,G);
this.addListener(r,G.handleKeyPress,G);
this.addListener(t,G.handleAddItem,G);
this.addListener(n,G.handleRemoveItem,G);
G.addListener(C,this._onSelectionChange,this);
},events:{"changeSelection":q},properties:{selectionMode:{check:[F,y,m,D],init:F,apply:v},dragSelection:{check:E,init:false,apply:s},quickSelection:{check:E,init:false,apply:x}},members:{__kl:null,selectAll:function(){this.__kl.selectAll();
},isSelected:function(b){if(!qx.ui.core.Widget.contains(this,b)){throw new Error("Could not test if "+b+" is selected, because it is not a child element!");
}return this.__kl.isItemSelected(b);
},addToSelection:function(M){if(!qx.ui.core.Widget.contains(this,M)){throw new Error("Could not add + "+M+" to selection, because it is not a child element!");
}this.__kl.addItem(M);
},removeFromSelection:function(a){if(!qx.ui.core.Widget.contains(this,a)){throw new Error("Could not remove "+a+" from selection, because it is not a child element!");
}this.__kl.removeItem(a);
},selectRange:function(K,L){this.__kl.selectItemRange(K,L);
},resetSelection:function(){this.__kl.clearSelection();
},setSelection:function(h){for(var i=0;i<h.length;i++){if(!qx.ui.core.Widget.contains(this,h[i])){throw new Error("Could not select "+h[i]+", because it is not a child element!");
}}
if(h.length===0){this.resetSelection();
}else{var j=this.getSelection();

if(!qx.lang.Array.equals(j,h)){this.__kl.replaceSelection(h);
}}},getSelection:function(){return this.__kl.getSelection();
},getSortedSelection:function(){return this.__kl.getSortedSelection();
},isSelectionEmpty:function(){return this.__kl.isSelectionEmpty();
},getSelectionContext:function(){return this.__kl.getSelectionContext();
},_getManager:function(){return this.__kl;
},getSelectables:function(d){return this.__kl.getSelectables(d);
},invertSelection:function(){this.__kl.invertSelection();
},_getLeadItem:function(){var c=this.__kl.getMode();

if(c===F||c===D){return this.__kl.getSelectedItem();
}else{return this.__kl.getLeadItem();
}},_applySelectionMode:function(I,J){this.__kl.setMode(I);
},_applyDragSelection:function(f,g){this.__kl.setDrag(f);
},_applyQuickSelection:function(k,l){this.__kl.setQuick(k);
},_onSelectionChange:function(e){this.fireDataEvent(C,e.getData());
}},destruct:function(){this._disposeObjects(w);
}});
})();
(function(){var o="Integer",n="_applyContentPadding",m="resetPaddingRight",l="setPaddingBottom",k="resetPaddingTop",j="qx.ui.core.MContentPadding",i="resetPaddingLeft",h="setPaddingTop",g="resetPaddingBottom",f="contentPaddingLeft",c="setPaddingLeft",e="contentPaddingTop",d="setPaddingRight",b="contentPaddingRight",a="contentPaddingBottom";
qx.Mixin.define(j,{properties:{contentPaddingTop:{check:o,init:0,apply:n,themeable:true},contentPaddingRight:{check:o,init:0,apply:n,themeable:true},contentPaddingBottom:{check:o,init:0,apply:n,themeable:true},contentPaddingLeft:{check:o,init:0,apply:n,themeable:true},contentPadding:{group:[e,b,a,f],shorthand:true,themeable:true}},members:{__km:{contentPaddingTop:h,contentPaddingRight:d,contentPaddingBottom:l,contentPaddingLeft:c},__kn:{contentPaddingTop:k,contentPaddingRight:m,contentPaddingBottom:g,contentPaddingLeft:i},_applyContentPadding:function(p,q,name){var r=this._getContentPaddingTarget();

if(p==null){var s=this.__kn[name];
r[s]();
}else{var t=this.__km[name];
r[t](p);
}}}});
})();
(function(){var w="one",v="single",u="selected",t="additive",s="multi",r="PageUp",q="under",p="Left",o="lead",n="Down",U="Up",T="Boolean",S="PageDown",R="anchor",Q="End",P="Home",O="Right",N="right",M="click",L="above",D="left",E="Escape",B="A",C="Space",z="_applyMode",A="interval",x="changeSelection",y="qx.event.type.Data",F="quick",G="key",I="__kr",H="abstract",K="drag",J="qx.ui.core.selection.Abstract";
qx.Class.define(J,{type:H,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__ko={};
},events:{"changeSelection":y},properties:{mode:{check:[v,s,t,w],init:v,apply:z},drag:{check:T,init:false},quick:{check:T,init:false}},members:{__kp:0,__kq:0,__kr:null,__ks:null,__kt:null,__ku:null,__kv:null,__kw:null,__kx:null,__ky:null,__kz:null,__kA:null,__kB:null,__kC:null,__kD:null,__kE:null,__kF:null,__ko:null,__kG:null,__kH:null,_userInteraction:false,getSelectionContext:function(){return this.__kE;
},selectAll:function(){var ci=this.getMode();

if(ci==v||ci==w){throw new Error("Can not select all items in selection mode: "+ci);
}this._selectAllItems();
this._fireChange();
},selectItem:function(bN){this._setSelectedItem(bN);
var bO=this.getMode();

if(bO!==v&&bO!==w){this._setLeadItem(bN);
this._setAnchorItem(bN);
}this._scrollItemIntoView(bN);
this._fireChange();
},addItem:function(cd){var ce=this.getMode();

if(ce===v||ce===w){this._setSelectedItem(cd);
}else{if(!this._getAnchorItem()){this._setAnchorItem(cd);
}this._setLeadItem(cd);
this._addToSelection(cd);
}this._scrollItemIntoView(cd);
this._fireChange();
},removeItem:function(cA){this._removeFromSelection(cA);

if(this.getMode()===w&&this.isSelectionEmpty()){var cB=this._getFirstSelectable();

if(cB){this.addItem(cB);
}if(cB==cA){return;
}}
if(this.getLeadItem()==cA){this._setLeadItem(null);
}
if(this._getAnchorItem()==cA){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(bp,bq){var br=this.getMode();

if(br==v||br==w){throw new Error("Can not select multiple items in selection mode: "+br);
}this._selectItemRange(bp,bq);
this._setAnchorItem(bp);
this._setLeadItem(bq);
this._scrollItemIntoView(bq);
this._fireChange();
},clearSelection:function(){if(this.getMode()==w){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(cF){var cG=this.getMode();

if(cG==w||cG===v){if(cF.length>1){throw new Error("Could not select more than one items in mode: "+cG+"!");
}
if(cF.length==1){this.selectItem(cF[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(cF);
}},getSelectedItem:function(){var f=this.getMode();

if(f===v||f===w){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__ko);
},getSortedSelection:function(){var cM=this.getSelectables();
var cL=qx.lang.Object.getValues(this.__ko);
cL.sort(function(a,b){return cM.indexOf(a)-cM.indexOf(b);
});
return cL;
},isItemSelected:function(cC){var cD=this._selectableToHashCode(cC);
return this.__ko[cD]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__ko);
},invertSelection:function(){var cc=this.getMode();

if(cc===v||cc===w){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var cb=this.getSelectables();

for(var i=0;i<cb.length;i++){this._toggleInSelection(cb[i]);
}this._fireChange();
},_setLeadItem:function(cH){var cI=this.__kF;

if(cI!==null){this._styleSelectable(cI,o,false);
}
if(cH!==null){this._styleSelectable(cH,o,true);
}this.__kF=cH;
},getLeadItem:function(){return this.__kF!==null?this.__kF:null;
},_setAnchorItem:function(bU){var bV=this.__kG;

if(bV){this._styleSelectable(bV,R,false);
}
if(bU){this._styleSelectable(bU,R,true);
}this.__kG=bU;
},_getAnchorItem:function(){return this.__kG!==null?this.__kG:null;
},_isSelectable:function(cK){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var cJ=event.getTarget();
return this._isSelectable(cJ)?cJ:null;
},_selectableToHashCode:function(bo){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(bf,bg,bh){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bw){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(cY){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(cy,cz){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(cx){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(cV){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(bk,bl){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bi,bj){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(k,m){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(g,h){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(g===w){var j=this._getFirstSelectable();

if(j){this._setSelectedItem(j);
this._scrollItemIntoView(j);
}}this._fireChange();
},handleMouseOver:function(event){this._userInteraction=true;

if(!this.getQuick()){this._userInteraction=false;
return;
}var d=this.getMode();

if(d!==w&&d!==v){this._userInteraction=false;
return;
}var c=this._getSelectableFromMouseEvent(event);

if(c===null){this._userInteraction=false;
return;
}this._setSelectedItem(c);
this._fireChange(F);
this._userInteraction=false;
},handleMouseDown:function(event){this._userInteraction=true;
var bz=this._getSelectableFromMouseEvent(event);

if(bz===null){this._userInteraction=false;
return;
}var bB=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var by=event.isShiftPressed();
if(this.isItemSelected(bz)&&!by&&!bB&&!this.getDrag()){this.__kH=bz;
this._userInteraction=false;
return;
}else{this.__kH=null;
}this._scrollItemIntoView(bz);
switch(this.getMode()){case v:case w:this._setSelectedItem(bz);
break;
case t:this._setLeadItem(bz);
this._setAnchorItem(bz);
this._toggleInSelection(bz);
break;
case s:this._setLeadItem(bz);
if(by){var bA=this._getAnchorItem();

if(bA===null){bA=this._getFirstSelectable();
this._setAnchorItem(bA);
}this._selectItemRange(bA,bz,bB);
}else if(bB){this._setAnchorItem(bz);
this._toggleInSelection(bz);
}else{this._setAnchorItem(bz);
this._setSelectedItem(bz);
}break;
}var bC=this.getMode();

if(this.getDrag()&&bC!==v&&bC!==w&&!by&&!bB){this.__kv=this._getLocation();
this.__ks=this._getScroll();
this.__kw=event.getDocumentLeft()+this.__ks.left;
this.__kx=event.getDocumentTop()+this.__ks.top;
this.__ky=true;
this._capture();
}this._fireChange(M);
this._userInteraction=false;
},handleMouseUp:function(event){this._userInteraction=true;
var ca=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bW=event.isShiftPressed();

if(!ca&&!bW&&this.__kH){var bX=this._getSelectableFromMouseEvent(event);

if(bX===null||!this.isItemSelected(bX)){this._userInteraction=false;
return;
}var bY=this.getMode();

if(bY===t){this._removeFromSelection(bX);
}else{this._setSelectedItem(bX);

if(this.getMode()===s){this._setLeadItem(bX);
this._setAnchorItem(bX);
}}this._userInteraction=false;
}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__ky){return;
}this.__kz=event.getDocumentLeft();
this.__kA=event.getDocumentTop();
this._userInteraction=true;
var bv=this.__kz+this.__ks.left;

if(bv>this.__kw){this.__kB=1;
}else if(bv<this.__kw){this.__kB=-1;
}else{this.__kB=0;
}var bu=this.__kA+this.__ks.top;

if(bu>this.__kx){this.__kC=1;
}else if(bu<this.__kx){this.__kC=-1;
}else{this.__kC=0;
}var location=this.__kv;

if(this.__kz<location.left){this.__kp=this.__kz-location.left;
}else if(this.__kz>location.right){this.__kp=this.__kz-location.right;
}else{this.__kp=0;
}
if(this.__kA<location.top){this.__kq=this.__kA-location.top;
}else if(this.__kA>location.bottom){this.__kq=this.__kA-location.bottom;
}else{this.__kq=0;
}if(!this.__kr){this.__kr=new qx.event.Timer(100);
this.__kr.addListener(A,this._onInterval,this);
}this.__kr.start();
this._autoSelect();
event.stopPropagation();
this._userInteraction=false;
},handleAddItem:function(e){var cE=e.getData();

if(this.getMode()===w&&this.isSelectionEmpty()){this.addItem(cE);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__ky){return;
}if(this.__kD){this._fireChange(M);
}delete this.__ky;
delete this.__kt;
delete this.__ku;
this._releaseCapture();
if(this.__kr){this.__kr.stop();
}},_onInterval:function(e){this._scrollBy(this.__kp,this.__kq);
this.__ks=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var ct=this._getDimension();
var cm=Math.max(0,Math.min(this.__kz-this.__kv.left,ct.width))+this.__ks.left;
var cl=Math.max(0,Math.min(this.__kA-this.__kv.top,ct.height))+this.__ks.top;
if(this.__kt===cm&&this.__ku===cl){return;
}this.__kt=cm;
this.__ku=cl;
var cv=this._getAnchorItem();
var co=cv;
var cr=this.__kB;
var cu,cn;

while(cr!==0){cu=cr>0?this._getRelatedSelectable(co,N):this._getRelatedSelectable(co,D);
if(cu!==null){cn=this._getSelectableLocationX(cu);
if((cr>0&&cn.left<=cm)||(cr<0&&cn.right>=cm)){co=cu;
continue;
}}break;
}var cs=this.__kC;
var cq,cp;

while(cs!==0){cq=cs>0?this._getRelatedSelectable(co,q):this._getRelatedSelectable(co,L);
if(cq!==null){cp=this._getSelectableLocationY(cq);
if((cs>0&&cp.top<=cl)||(cs<0&&cp.bottom>=cl)){co=cq;
continue;
}}break;
}var cw=this.getMode();

if(cw===s){this._selectItemRange(cv,co);
}else if(cw===t){if(this.isItemSelected(cv)){this._selectItemRange(cv,co,true);
}else{this._deselectItemRange(cv,co);
}this._setAnchorItem(co);
}this._fireChange(K);
},__kI:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;
var bb,ba;
var bd=event.getKeyIdentifier();
var bc=this.getMode();
var W=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var X=event.isShiftPressed();
var Y=false;

if(bd===B&&W){if(bc!==v&&bc!==w){this._selectAllItems();
Y=true;
}}else if(bd===E){if(bc!==v&&bc!==w){this._clearSelection();
Y=true;
}}else if(bd===C){var V=this.getLeadItem();

if(V&&!X){if(W||bc===t){this._toggleInSelection(V);
}else{this._setSelectedItem(V);
}Y=true;
}}else if(this.__kI[bd]){Y=true;

if(bc===v||bc==w){bb=this._getSelectedItem();
}else{bb=this.getLeadItem();
}
if(bb!==null){switch(bd){case P:ba=this._getFirstSelectable();
break;
case Q:ba=this._getLastSelectable();
break;
case U:ba=this._getRelatedSelectable(bb,L);
break;
case n:ba=this._getRelatedSelectable(bb,q);
break;
case p:ba=this._getRelatedSelectable(bb,D);
break;
case O:ba=this._getRelatedSelectable(bb,N);
break;
case r:ba=this._getPage(bb,true);
break;
case S:ba=this._getPage(bb,false);
break;
}}else{switch(bd){case P:case n:case O:case S:ba=this._getFirstSelectable();
break;
case Q:case U:case p:case r:ba=this._getLastSelectable();
break;
}}if(ba!==null){switch(bc){case v:case w:this._setSelectedItem(ba);
break;
case t:this._setLeadItem(ba);
break;
case s:if(X){var be=this._getAnchorItem();

if(be===null){this._setAnchorItem(be=this._getFirstSelectable());
}this._setLeadItem(ba);
this._selectItemRange(be,ba,W);
}else{this._setAnchorItem(ba);
this._setLeadItem(ba);

if(!W){this._setSelectedItem(ba);
}}break;
}this._scrollItemIntoView(ba);
}}
if(Y){event.stop();
this._fireChange(G);
}this._userInteraction=false;
},_selectAllItems:function(){var cX=this.getSelectables();

for(var i=0,l=cX.length;i<l;i++){this._addToSelection(cX[i]);
}},_clearSelection:function(){var bs=this.__ko;

for(var bt in bs){this._removeFromSelection(bs[bt]);
}this.__ko={};
},_selectItemRange:function(bD,bE,bF){var bI=this._getSelectableRange(bD,bE);
if(!bF){var bH=this.__ko;
var bJ=this.__kJ(bI);

for(var bG in bH){if(!bJ[bG]){this._removeFromSelection(bH[bG]);
}}}for(var i=0,l=bI.length;i<l;i++){this._addToSelection(bI[i]);
}},_deselectItemRange:function(cf,cg){var ch=this._getSelectableRange(cf,cg);

for(var i=0,l=ch.length;i<l;i++){this._removeFromSelection(ch[i]);
}},__kJ:function(bP){var bR={};
var bQ;

for(var i=0,l=bP.length;i<l;i++){bQ=bP[i];
bR[this._selectableToHashCode(bQ)]=bQ;
}return bR;
},_getSelectedItem:function(){for(var bx in this.__ko){return this.__ko[bx];
}return null;
},_setSelectedItem:function(bK){if(this._isSelectable(bK)){var bL=this.__ko;
var bM=this._selectableToHashCode(bK);

if(!bL[bM]||qx.lang.Object.hasMinLength(bL,2)){this._clearSelection();
this._addToSelection(bK);
}}},_addToSelection:function(bS){var bT=this._selectableToHashCode(bS);

if(!this.__ko[bT]&&this._isSelectable(bS)){this.__ko[bT]=bS;
this._styleSelectable(bS,u,true);
this.__kD=true;
}},_toggleInSelection:function(cj){var ck=this._selectableToHashCode(cj);

if(!this.__ko[ck]){this.__ko[ck]=cj;
this._styleSelectable(cj,u,true);
}else{delete this.__ko[ck];
this._styleSelectable(cj,u,false);
}this.__kD=true;
},_removeFromSelection:function(bm){var bn=this._selectableToHashCode(bm);

if(this.__ko[bn]!=null){delete this.__ko[bn];
this._styleSelectable(bm,u,false);
this.__kD=true;
}},_replaceMultiSelection:function(cN){var cQ=false;
var cT,cS;
var cO={};

for(var i=0,l=cN.length;i<l;i++){cT=cN[i];

if(this._isSelectable(cT)){cS=this._selectableToHashCode(cT);
cO[cS]=cT;
}}var cU=cN[0];
var cP=cT;
var cR=this.__ko;

for(var cS in cR){if(cO[cS]){delete cO[cS];
}else{cT=cR[cS];
delete cR[cS];
this._styleSelectable(cT,u,false);
cQ=true;
}}for(var cS in cO){cT=cR[cS]=cO[cS];
this._styleSelectable(cT,u,true);
cQ=true;
}if(!cQ){return false;
}this._scrollItemIntoView(cP);
this._setLeadItem(cU);
this._setAnchorItem(cU);
this.__kD=true;
this._fireChange();
},_fireChange:function(cW){if(this.__kD){this.__kE=cW||null;
this.fireDataEvent(x,this.getSelection());
delete this.__kD;
}}},destruct:function(){this._disposeObjects(I);
this.__ko=this.__kH=this.__kG=null;
this.__kF=null;
}});
})();
(function(){var I="vertical",H="under",G="above",F="qx.ui.core.selection.Widget",E="left",D="right";
qx.Class.define(F,{extend:qx.ui.core.selection.Abstract,construct:function(t){qx.ui.core.selection.Abstract.call(this);
this.__kK=t;
},members:{__kK:null,_isSelectable:function(K){return this._isItemSelectable(K)&&K.getLayoutParent()===this.__kK;
},_selectableToHashCode:function(w){return w.$$hash;
},_styleSelectable:function(c,d,e){e?c.addState(d):c.removeState(d);
},_capture:function(){this.__kK.capture();
},_releaseCapture:function(){this.__kK.releaseCapture();
},_isItemSelectable:function(b){if(this._userInteraction){return b.isVisible()&&b.isEnabled();
}else{return b.isVisible();
}},_getWidget:function(){return this.__kK;
},_getLocation:function(){var A=this.__kK.getContentElement().getDomElement();
return A?qx.bom.element.Location.get(A):null;
},_getDimension:function(){return this.__kK.getInnerSize();
},_getSelectableLocationX:function(y){var z=y.getBounds();

if(z){return {left:z.left,right:z.left+z.width};
}},_getSelectableLocationY:function(B){var C=B.getBounds();

if(C){return {top:C.top,bottom:C.top+C.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(u,v){},_scrollItemIntoView:function(x){this.__kK.scrollChildIntoView(x);
},getSelectables:function(L){var M=false;

if(!L){M=this._userInteraction;
this._userInteraction=true;
}var P=this.__kK.getChildren();
var N=[];
var O;

for(var i=0,l=P.length;i<l;i++){O=P[i];

if(this._isItemSelectable(O)){N.push(O);
}}this._userInteraction=M;
return N;
},_getSelectableRange:function(n,o){if(n===o){return [n];
}var s=this.__kK.getChildren();
var p=[];
var r=false;
var q;

for(var i=0,l=s.length;i<l;i++){q=s[i];

if(q===n||q===o){if(r){p.push(q);
break;
}else{r=true;
}}
if(r&&this._isItemSelectable(q)){p.push(q);
}}return p;
},_getFirstSelectable:function(){var a=this.__kK.getChildren();

for(var i=0,l=a.length;i<l;i++){if(this._isItemSelectable(a[i])){return a[i];
}}return null;
},_getLastSelectable:function(){var J=this.__kK.getChildren();

for(var i=J.length-1;i>0;i--){if(this._isItemSelectable(J[i])){return J[i];
}}return null;
},_getRelatedSelectable:function(f,g){var k=this.__kK.getOrientation()===I;
var j=this.__kK.getChildren();
var h=j.indexOf(f);
var m;

if((k&&g===G)||(!k&&g===E)){for(var i=h-1;i>=0;i--){m=j[i];

if(this._isItemSelectable(m)){return m;
}}}else if((k&&g===H)||(!k&&g===D)){for(var i=h+1;i<j.length;i++){m=j[i];

if(this._isItemSelectable(m)){return m;
}}}return null;
},_getPage:function(Q,R){if(R){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__kK=null;
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(e){return this._isItemSelectable(e)&&e.getLayoutParent()===this._getWidget().getChildrenContainer();
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var f=this._getWidget();
return {left:f.getScrollX(),top:f.getScrollY()};
},_scrollBy:function(b,c){var d=this._getWidget();
d.scrollByX(b);
d.scrollByY(c);
},_getPage:function(g,h){var m=this.getSelectables();
var length=m.length;
var p=m.indexOf(g);
if(p===-1){throw new Error("Invalid lead item: "+g);
}var j=this._getWidget();
var r=j.getScrollY();
var innerHeight=j.getInnerSize().height;
var top,l,q;

if(h){var o=r;
var i=p;
while(1){for(;i>=0;i--){top=j.getItemTop(m[i]);
if(top<o){q=i+1;
break;
}}if(q==null){var s=this._getFirstSelectable();
return s==g?null:s;
}if(q>=p){o-=innerHeight+r-j.getItemBottom(g);
q=null;
continue;
}return m[q];
}}else{var n=innerHeight+r;
var i=p;
while(1){for(;i<length;i++){l=j.getItemBottom(m[i]);
if(l>n){q=i-1;
break;
}}if(q==null){var k=this._getLastSelectable();
return k==g?null:k;
}if(q<=p){n+=j.getItemTop(g)-r;
q=null;
continue;
}return m[q];
}}}}});
})();
(function(){var e="right",d="above",c="left",b="under",a="qx.ui.tree.SelectionManager";
qx.Class.define(a,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(s){var t=s.getBounds();

if(t){var top=this._getWidget().getItemTop(s);
return {top:top,bottom:top+t.height};
}},_isSelectable:function(f){return this._isItemSelectable(f)&&f instanceof qx.ui.tree.AbstractTreeItem;
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(g){var k=false;

if(!g){k=this._userInteraction;
this._userInteraction=true;
}var j=this._getWidget();
var l=[];

if(j.getRoot()!=null){var h=j.getRoot().getItems(true,!!g,j.getHideRoot());

for(var i=0;i<h.length;i++){if(this._isSelectable(h[i])){l.push(h[i]);
}}}this._userInteraction=k;
return l;
},_getSelectableRange:function(m,n){if(m===n){return [m];
}var o=this.getSelectables();
var p=o.indexOf(m);
var q=o.indexOf(n);

if(p<0||q<0){return [];
}
if(p<q){return o.slice(p,q+1);
}else{return o.slice(q,p+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var r=this.getSelectables();

if(r.length>0){return r[r.length-1];
}else{return null;
}},_getRelatedSelectable:function(u,v){var w=this._getWidget();
var x=null;

switch(v){case d:x=w.getPreviousNodeOf(u,false);
break;
case b:x=w.getNextNodeOf(u,false);
break;
case c:case e:break;
}
if(!x){return null;
}
if(this._isSelectable(x)){return x;
}else{return this._getRelatedSelectable(x,v);
}}}});
})();
(function(){var r="dblclick",q="click",p="Boolean",o="excluded",n="visible",m="qx.event.type.Data",l="_applyOpenMode",k="Space",j="Left",h="Enter",F="changeOpenMode",E="_applyRootOpenClose",D="changeSelection",C="qx.ui.tree.Tree",B="tree",A="_applyHideRoot",z="changeRoot",y="_applyRoot",x="__kL",w="keypress",u="none",v="pane",s="Right",t="qx.ui.tree.AbstractTreeItem";
qx.Class.define(C,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection,qx.ui.form.IForm],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection,qx.ui.form.MForm],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__kL=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(v).add(this.__kL);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(D,this._onChangeSelection,this);
this.addListener(w,this._onKeyPress,this);
},events:{addItem:m,removeItem:m},properties:{openMode:{check:[q,r,u],init:r,apply:l,event:F,themeable:true},root:{check:t,init:null,nullable:true,event:z,apply:y},hideRoot:{check:p,init:false,apply:A},rootOpenClose:{check:p,init:false,apply:E},appearance:{refine:true,init:B},focusable:{refine:true,init:true}},members:{__kL:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__kL;
},_applyRoot:function(Y,ba){var bb=this.getChildrenContainer();

if(ba){bb.remove(ba);

if(ba.hasChildren()){bb.remove(ba.getChildrenContainer());
}}
if(Y){bb.add(Y);

if(Y.hasChildren()){bb.add(Y.getChildrenContainer());
}Y.setVisibility(this.getHideRoot()?o:n);
Y.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(bc,bd){var be=this.getRoot();

if(!be){return;
}be.setVisibility(bc?o:n);
be.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(J,K){var L=this.getRoot();

if(!L){return;
}L.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__kL;
},getNextNodeOf:function(U,V){if((V!==false||U.isOpen())&&U.hasChildren()){return U.getChildren()[0];
}
while(U){var parent=U.getParent();

if(!parent){return null;
}var X=parent.getChildren();
var W=X.indexOf(U);

if(W>-1&&W<X.length-1){return X[W+1];
}U=parent;
}return null;
},getPreviousNodeOf:function(a,b){var parent=a.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==a){return null;
}}}else{if(a==this.getRoot()){return null;
}}var f=parent.getChildren();
var c=f.indexOf(a);

if(c>0){var d=f[c-1];

while((b!==false||d.isOpen())&&d.hasChildren()){var g=d.getChildren();
d=g[g.length-1];
}return d;
}else{return parent;
}},getNextSiblingOf:function(G){if(G==this.getRoot()){return null;
}var parent=G.getParent();
var H=parent.getChildren();
var I=H.indexOf(G);

if(I<H.length-1){return H[I+1];
}return null;
},getPreviousSiblingOf:function(O){if(O==this.getRoot()){return null;
}var parent=O.getParent();
var P=parent.getChildren();
var Q=P.indexOf(O);

if(Q>0){return P[Q-1];
}return null;
},getItems:function(R,S){if(this.getRoot()!=null){return this.getRoot().getItems(R,S,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(bh){while(bh){if(bh==this){return null;
}
if(bh instanceof qx.ui.tree.AbstractTreeItem){return bh;
}bh=bh.getLayoutParent();
}return null;
},_applyOpenMode:function(M,N){if(N==q){this.removeListener(q,this._onOpen,this);
}else if(N==r){this.removeListener(r,this._onOpen,this);
}
if(M==q){this.addListener(q,this._onOpen,this);
}else if(M==r){this.addListener(r,this._onOpen,this);
}},_onOpen:function(e){var bi=this.getTreeItem(e.getTarget());

if(!bi||!bi.isOpenable()){return;
}bi.setOpen(!bi.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var bg=e.getData();
for(var i=0;i<bg.length;i++){var bf=bg[i];
while(bf.getParent()!=null){bf=bf.getParent();
bf.setOpen(true);
}}},_onKeyPress:function(e){var T=this._getLeadItem();

if(T!==null){switch(e.getKeyIdentifier()){case j:if(T.isOpenable()&&T.isOpen()){T.setOpen(false);
}break;
case s:if(T.isOpenable()&&!T.isOpen()){T.setOpen(true);
}break;
case h:case k:if(T.isOpenable()){T.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(x);
}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var l="horizontal",k="px",j="scroll",i="vertical",h="-1px",g="qx.client",f="0",d="hidden",c="mousedown",b="qx.ui.core.scroll.NativeScrollBar",A="PositiveNumber",z="Integer",y="mousemove",x="_applyMaximum",w="_applyOrientation",v="appear",u="opera",t="PositiveInteger",s="mshtml",r="mouseup",p="Number",q="_applyPosition",n="scrollbar",o="__kQ",m="native";
qx.Class.define(b,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(P){qx.ui.core.Widget.call(this);
this.addState(m);
this.getContentElement().addListener(j,this._onScroll,this);
this.addListener(c,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(y,this._stopPropagation,this);

if(qx.core.Variant.isSet(g,u)){this.addListener(v,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(P!=null){this.setOrientation(P);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[l,i],init:l,apply:w},maximum:{check:t,apply:x,init:100},position:{check:p,init:0,apply:q,event:j},singleStep:{check:z,init:20},knobFactor:{check:A,nullable:true}},members:{__kP:null,__kQ:null,_getScrollPaneElement:function(){if(!this.__kQ){this.__kQ=new qx.html.Element();
}return this.__kQ;
},renderLayout:function(L,top,M,N){var O=qx.ui.core.Widget.prototype.renderLayout.call(this,L,top,M,N);
this._updateScrollBar();
return O;
},_getContentHint:function(){var B=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__kP?100:B,maxWidth:this.__kP?null:B,minWidth:this.__kP?null:B,height:this.__kP?B:100,maxHeight:this.__kP?B:null,minHeight:this.__kP?B:null};
},_applyEnabled:function(G,H){qx.ui.core.Widget.prototype._applyEnabled.call(this,G,H);
this._updateScrollBar();
},_applyMaximum:function(S){this._updateScrollBar();
},_applyPosition:function(K){var content=this.getContentElement();

if(this.__kP){content.scrollToX(K);
}else{content.scrollToY(K);
}},_applyOrientation:function(C,D){var E=this.__kP=C===l;
this.set({allowGrowX:E,allowShrinkX:E,allowGrowY:!E,allowShrinkY:!E});

if(E){this.replaceState(i,l);
}else{this.replaceState(l,i);
}this.getContentElement().setStyles({overflowX:E?j:d,overflowY:E?d:j});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var U=this.__kP;
var V=this.getBounds();

if(!V){return;
}
if(this.isEnabled()){var W=U?V.width:V.height;
var T=this.getMaximum()+W;
}else{T=0;
}if(qx.core.Variant.isSet(g,s)){var V=this.getBounds();
this.getContentElement().setStyles({left:U?f:h,top:U?h:f,width:(U?V.width:V.width+1)+k,height:(U?V.height+1:V.height)+k});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(U?T:1)+k,height:(U?1:T)+k});
this.scrollTo(this.getPosition());
},scrollTo:function(F){this.setPosition(Math.max(0,Math.min(this.getMaximum(),F)));
},scrollBy:function(a){this.scrollTo(this.getPosition()+a);
},scrollBySteps:function(I){var J=this.getSingleStep();
this.scrollBy(I*J);
},_onScroll:function(e){var R=this.getContentElement();
var Q=this.__kP?R.getScrollX():R.getScrollY();
this.setPosition(Q);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(o);
}});
})();
(function(){var l="slider",k="horizontal",j="button-begin",i="vertical",h="button-end",g="Integer",f="execute",d="right",c="PositiveInteger",b="left",z="down",y="up",x="PositiveNumber",w="changeValue",v="_applyKnobFactor",u="knob",t="qx.ui.core.scroll.ScrollBar",s="resize",r="_applyOrientation",q="_applyPageStep",o="scroll",p="_applyPosition",m="scrollbar",n="_applyMaximum";
qx.Class.define(t,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(L){qx.ui.core.Widget.call(this);
this._createChildControl(j);
this._createChildControl(l).addListener(s,this._onResizeSlider,this);
this._createChildControl(h);
if(L!=null){this.setOrientation(L);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:m},orientation:{check:[k,i],init:k,apply:r},maximum:{check:c,apply:n,init:100},position:{check:function(a){qx.core.Type.check(a,c);
return a<=this.getMaximum();
},init:0,apply:p,event:o},singleStep:{check:g,init:20},pageStep:{check:g,init:10,apply:q},knobFactor:{check:x,apply:v,nullable:true}},members:{__kR:2,_createChildControlImpl:function(F){var G;

switch(F){case l:G=new qx.ui.core.scroll.ScrollSlider();
G.setPageStep(100);
G.setFocusable(false);
G.addListener(w,this._onChangeSliderValue,this);
this._add(G,{flex:1});
break;
case j:G=new qx.ui.form.RepeatButton();
G.setFocusable(false);
G.addListener(f,this._onExecuteBegin,this);
this._add(G);
break;
case h:G=new qx.ui.form.RepeatButton();
G.setFocusable(false);
G.addListener(f,this._onExecuteEnd,this);
this._add(G);
break;
}return G||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},_applyMaximum:function(M){this.getChildControl(l).setMaximum(M);
},_applyPosition:function(E){this.getChildControl(l).setValue(E);
},_applyKnobFactor:function(R){this.getChildControl(l).setKnobFactor(R);
},_applyPageStep:function(A){this.getChildControl(l).setPageStep(A);
},_applyOrientation:function(B,C){var D=this._getLayout();

if(D){D.dispose();
}if(B===k){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(i,k);
this.getChildControl(j).replaceState(y,b);
this.getChildControl(h).replaceState(z,d);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(k,i);
this.getChildControl(j).replaceState(b,y);
this.getChildControl(h).replaceState(d,z);
}this.getChildControl(l).setOrientation(B);
},scrollTo:function(Q){this.getChildControl(l).slideTo(Q);
},scrollBy:function(N){this.getChildControl(l).slideBy(N);
},scrollBySteps:function(O){var P=this.getSingleStep();
this.getChildControl(l).slideBy(O*P);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var H=this.getChildControl(l).getChildControl(u);
var K=H.getSizeHint();
var I=false;
var J=this.getChildControl(l).getInnerSize();

if(this.getOrientation()==i){if(J.height<K.minHeight+this.__kR){I=true;
}}else{if(J.width<K.minWidth+this.__kR){I=true;
}}
if(I){H.exclude();
}else{H.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IRange";
qx.Interface.define(b,{members:{setMinimum:function(e){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(c){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(a){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var O="knob",N="horizontal",M="vertical",L="Integer",K="hovered",J="left",I="top",H="mouseup",G="pressed",F="px",bz="changeValue",by="interval",bx="mousemove",bw="resize",bv="Number",bu="slider",bt="mousedown",bs="PageUp",br="mouseout",bq='qx.event.type.Data',V="Left",W="Down",T="Up",U="dblclick",R="qx.ui.form.Slider",S="PageDown",P="mousewheel",Q="_applyValue",X="_applyKnobFactor",Y="End",bg="height",be="width",bk="_applyOrientation",bi="Home",bm="mouseover",bl="floor",bb="_applyMinimum",bp="click",bo="Right",bn="keypress",ba="ceil",bc="losecapture",bd="contextmenu",bf="_applyMaximum",bh="changeMaximum",bj="changeMinimum";
qx.Class.define(R,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(bR){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bn,this._onKeyPress);
this.addListener(P,this._onMouseWheel);
this.addListener(bt,this._onMouseDown);
this.addListener(H,this._onMouseUp);
this.addListener(bc,this._onMouseUp);
this.addListener(bw,this._onUpdate);
this.addListener(bd,this._onStopEvent);
this.addListener(bp,this._onStopEvent);
this.addListener(U,this._onStopEvent);
if(bR!=null){this.setOrientation(bR);
}else{this.initOrientation();
}},events:{changeValue:bq},properties:{appearance:{refine:true,init:bu},focusable:{refine:true,init:true},orientation:{check:[N,M],init:N,apply:bk},value:{check:function(E){qx.core.Type.check(E,bv);
return E>=this.getMinimum()&&E<=this.getMaximum();
},init:0,apply:Q,nullable:true},minimum:{check:L,init:0,apply:bb,event:bj},maximum:{check:L,init:100,apply:bf,event:bh},singleStep:{check:L,init:1},pageStep:{check:L,init:10},knobFactor:{check:bv,apply:X,nullable:true}},members:{__kS:null,__kT:null,__kU:null,__kV:null,__kW:null,__kX:null,__kY:null,__la:null,__lb:null,__lc:null,__ld:null,__le:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bU){var bV;

switch(bU){case O:bV=new qx.ui.core.Widget();
bV.addListener(bw,this._onUpdate,this);
bV.addListener(bm,this._onMouseOver);
bV.addListener(br,this._onMouseOut);
this._add(bV);
break;
}return bV||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bU);
},_onMouseOver:function(e){this.addState(K);
},_onMouseOut:function(e){this.removeState(K);
},_onMouseWheel:function(e){var c=e.getWheelDelta()>0?1:-1;
this.slideBy(c*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var b=this.getOrientation()===N;
var a=b?V:T;
var forward=b?bo:W;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case a:this.slideBack();
break;
case S:this.slidePageForward();
break;
case bs:this.slidePageBack();
break;
case bi:this.slideToBegin();
break;
case Y:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__kV){return;
}var bY=this.__lg;
var bW=this.getChildControl(O);
var bX=bY?J:I;
var cb=bY?e.getDocumentLeft():e.getDocumentTop();
var cc=this.__kS=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bX];
var ca=this.__kT=qx.bom.element.Location.get(bW.getContainerElement().getDomElement())[bX];

if(e.getTarget()===bW){this.__kV=true;

if(!this.__lc){this.__lc=new qx.event.Timer(100);
this.__lc.addListener(by,this._fireValue,this);
}this.__lc.start();
this.__kW=cb+cc-ca;
bW.addState(G);
}else{this.__kX=true;
this.__kY=cb<=ca?-1:1;
this.__lh(e);
this._onInterval();
if(!this.__lb){this.__lb=new qx.event.Timer(100);
this.__lb.addListener(by,this._onInterval,this);
}this.__lb.start();
}this.addListener(bx,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__kV){this.releaseCapture();
delete this.__kV;
this.__lc.stop();
this._fireValue();
delete this.__kW;
this.getChildControl(O).removeState(G);
if(e.getType()===H){var bC;
var bD;
var bB;

if(this.__lg){bC=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__kS);
bB=qx.bom.element.Location.get(this.getContentElement().getDomElement())[I];
bD=e.getDocumentTop()-(bB+this.getChildControl(O).getBounds().top);
}else{bC=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__kS);
bB=qx.bom.element.Location.get(this.getContentElement().getDomElement())[J];
bD=e.getDocumentLeft()-(bB+this.getChildControl(O).getBounds().left);
}
if(bD<0||bD>this.__kU||bC<0||bC>this.__kU){this.getChildControl(O).removeState(K);
}}}else if(this.__kX){this.__lb.stop();
this.releaseCapture();
delete this.__kX;
delete this.__kY;
delete this.__la;
}this.removeListener(bx,this._onMouseMove);
if(e.getType()===H){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__kV){var l=this.__lg?e.getDocumentLeft():e.getDocumentTop();
var k=l-this.__kW;
this.slideTo(this._positionToValue(k));
}else if(this.__kX){this.__lh(e);
}e.stopPropagation();
},_onInterval:function(e){var C=this.getValue()+(this.__kY*this.getPageStep());
if(C<this.getMinimum()){C=this.getMinimum();
}else if(C>this.getMaximum()){C=this.getMaximum();
}var D=this.__kY==-1;

if((D&&C<=this.__la)||(!D&&C>=this.__la)){C=this.__la;
}this.slideTo(C);
},_onUpdate:function(e){var h=this.getInnerSize();
var i=this.getChildControl(O).getBounds();
var g=this.__lg?be:bg;
this._updateKnobSize();
this.__lf=h[g]-i[g];
this.__kU=i[g];
this._updateKnobPosition();
},__lg:false,__lf:0,__lh:function(e){var bE=this.__lg;
var bL=bE?e.getDocumentLeft():e.getDocumentTop();
var bN=this.__kS;
var bF=this.__kT;
var bP=this.__kU;
var bM=bL-bN;

if(bL>=bF){bM-=bP;
}var bJ=this._positionToValue(bM);
var bG=this.getMinimum();
var bH=this.getMaximum();

if(bJ<bG){bJ=bG;
}else if(bJ>bH){bJ=bH;
}else{var bK=this.getValue();
var bI=this.getPageStep();
var bO=this.__kY<0?bl:ba;
bJ=bK+(Math[bO]((bJ-bK)/bI)*bI);
}if(this.__la==null||(this.__kY==-1&&bJ<=this.__la)||(this.__kY==1&&bJ>=this.__la)){this.__la=bJ;
}},_positionToValue:function(m){var n=this.__lf;
if(n==null||n==0){return 0;
}var p=m/n;

if(p<0){p=0;
}else if(p>1){p=1;
}var o=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(o*p);
},_valueToPosition:function(w){var x=this.__lf;

if(x==null){return 0;
}var y=this.getMaximum()-this.getMinimum();
if(y==0){return 0;
}var w=w-this.getMinimum();
var z=w/y;

if(z<0){z=0;
}else if(z>1){z=1;
}return Math.round(x*z);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bS){var bT=this.getChildControl(O).getContainerElement();

if(this.__lg){bT.setStyle(J,bS+F,true);
}else{bT.setStyle(I,bS+F,true);
}},_updateKnobSize:function(){var v=this.getKnobFactor();

if(v==null){return;
}var u=this.getInnerSize();

if(u==null){return;
}if(this.__lg){this.getChildControl(O).setWidth(Math.round(v*u.width));
}else{this.getChildControl(O).setHeight(Math.round(v*u.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bA){this.slideTo(this.getValue()+bA);
},slideTo:function(bQ){if(bQ<this.getMinimum()){bQ=this.getMinimum();
}else if(bQ>this.getMaximum()){bQ=this.getMaximum();
}else{bQ=this.getMinimum()+Math.round((bQ-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bQ);
},_applyOrientation:function(cd,ce){var cf=this.getChildControl(O);
this.__lg=cd===N;
if(this.__lg){this.removeState(M);
cf.removeState(M);
this.addState(N);
cf.addState(N);
cf.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(N);
cf.removeState(N);
this.addState(M);
cf.addState(M);
cf.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(q,r){if(q!=null){this._updateKnobSize();
}else{if(this.__lg){this.getChildControl(O).resetWidth();
}else{this.getChildControl(O).resetHeight();
}}},_applyValue:function(A,B){if(A!=null){this._updateKnobPosition();

if(this.__kV){this.__le=[A,B];
}else{this.fireEvent(bz,qx.event.type.Data,[A,B]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__le){return;
}var j=this.__le;
this.__le=null;
this.fireEvent(bz,qx.event.type.Data,j);
},_applyMinimum:function(s,t){if(this.getValue()<s){this.setValue(s);
}this._updateKnobPosition();
},_applyMaximum:function(d,f){if(this.getValue()>d){this.setValue(d);
}this._updateKnobPosition();
}}});
})();
(function(){var d="horizontal",c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(e){qx.ui.form.Slider.call(this,e);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
},members:{getSizeHint:function(f){var g=qx.ui.form.Slider.prototype.getSizeHint.call(this);
if(this.getOrientation()===d){g.width=0;
}else{g.height=0;
}return g;
}}});
})();
(function(){var r="top",q="left",p="qx.debug",o="bottom",n="hAlign",m="vAlign",k="Integer",h="_applyLayoutChange",g="center",f="middle",I="right",H="flex",G="on",F="height",E="' is not supported by the Grid layout!",D="Invalid parameter 'column'",C="The property '",B="Value must be positive",A="qx.ui.layout.Grid",z="maxHeight",v="width",w="minHeight",t="minWidth",u="maxWidth",s="Invalid parameter 'row'";
qx.Class.define(A,{extend:qx.ui.layout.Abstract,construct:function(dR,dS){qx.ui.layout.Abstract.call(this);
this.__jd=[];
this.__je=[];

if(dR){this.setSpacingX(dR);
}
if(dS){this.setSpacingY(dS);
}},properties:{spacingX:{check:k,init:0,apply:h},spacingY:{check:k,init:0,apply:h}},members:{__jf:null,__jd:null,__je:null,__jg:null,__jh:null,__ji:null,__jj:null,__jk:null,__jl:null,verifyLayoutProperty:qx.core.Variant.select(p,{"on":function(a,name,b){var c={"row":1,"column":1,"rowSpan":1,"colSpan":1};
this.assert(c[name]==1,C+name+E);
this.assertInteger(b);
this.assert(b>=0,B);
},"off":null}),__jm:function(){var co=[];
var cn=[];
var cp=[];
var cl=-1;
var ck=-1;
var cr=this._getLayoutChildren();

for(var i=0,l=cr.length;i<l;i++){var cm=cr[i];
var cq=cm.getLayoutProperties();
var cs=cq.row;
var cj=cq.column;
cq.colSpan=cq.colSpan||1;
cq.rowSpan=cq.rowSpan||1;
if(cs==null||cj==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+cm+"' must be defined!");
}
if(co[cs]&&co[cs][cj]){throw new Error("Cannot add widget '"+cm+"'!. "+"There is already a widget '"+co[cs][cj]+"' in this cell ("+cs+", "+cj+")");
}
for(var x=cj;x<cj+cq.colSpan;x++){for(var y=cs;y<cs+cq.rowSpan;y++){if(co[y]==undefined){co[y]=[];
}co[y][x]=cm;
ck=Math.max(ck,x);
cl=Math.max(cl,y);
}}
if(cq.rowSpan>1){cp.push(cm);
}
if(cq.colSpan>1){cn.push(cm);
}}for(var y=0;y<=cl;y++){if(co[y]==undefined){co[y]=[];
}}this.__jf=co;
this.__jg=cn;
this.__jh=cp;
this.__ji=cl;
this.__jj=ck;
this.__jk=null;
this.__jl=null;
delete this._invalidChildrenCache;
},_setRowData:function(cE,cF,cG){var cH=this.__jd[cE];

if(!cH){this.__jd[cE]={};
this.__jd[cE][cF]=cG;
}else{cH[cF]=cG;
}},_setColumnData:function(bQ,bR,bS){var bT=this.__je[bQ];

if(!bT){this.__je[bQ]={};
this.__je[bQ][bR]=bS;
}else{bT[bR]=bS;
}},setSpacing:function(dO){this.setSpacingY(dO);
this.setSpacingX(dO);
return this;
},setColumnAlign:function(bN,bO,bP){if(qx.core.Variant.isSet(p,G)){this.assertInteger(bN,D);
this.assertInArray(bO,[q,g,I]);
this.assertInArray(bP,[r,f,o]);
}this._setColumnData(bN,n,bO);
this._setColumnData(bN,m,bP);
this._applyLayoutChange();
return this;
},getColumnAlign:function(eh){var ei=this.__je[eh]||{};
return {vAlign:ei.vAlign||r,hAlign:ei.hAlign||q};
},setRowAlign:function(ce,cf,cg){if(qx.core.Variant.isSet(p,G)){this.assertInteger(ce,s);
this.assertInArray(cf,[q,g,I]);
this.assertInArray(cg,[r,f,o]);
}this._setRowData(ce,n,cf);
this._setRowData(ce,m,cg);
this._applyLayoutChange();
return this;
},getRowAlign:function(ej){var ek=this.__jd[ej]||{};
return {vAlign:ek.vAlign||r,hAlign:ek.hAlign||q};
},getCellWidget:function(d,e){if(this._invalidChildrenCache){this.__jm();
}var d=this.__jf[d]||{};
return d[e]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__jm();
}return this.__ji+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__jm();
}return this.__jj+1;
},getCellAlign:function(dw,dx){var dD=r;
var dB=q;
var dC=this.__jd[dw];
var dz=this.__je[dx];
var dy=this.__jf[dw][dx];

if(dy){var dA={vAlign:dy.getAlignY(),hAlign:dy.getAlignX()};
}else{dA={};
}if(dA.vAlign){dD=dA.vAlign;
}else if(dC&&dC.vAlign){dD=dC.vAlign;
}else if(dz&&dz.vAlign){dD=dz.vAlign;
}if(dA.hAlign){dB=dA.hAlign;
}else if(dz&&dz.hAlign){dB=dz.hAlign;
}else if(dC&&dC.hAlign){dB=dC.hAlign;
}return {vAlign:dD,hAlign:dB};
},setColumnFlex:function(dT,dU){this._setColumnData(dT,H,dU);
this._applyLayoutChange();
return this;
},getColumnFlex:function(cN){var cO=this.__je[cN]||{};
return cO.flex!==undefined?cO.flex:0;
},setRowFlex:function(en,eo){this._setRowData(en,H,eo);
this._applyLayoutChange();
return this;
},getRowFlex:function(bl){var bm=this.__jd[bl]||{};
var bn=bm.flex!==undefined?bm.flex:0;
return bn;
},setColumnMaxWidth:function(ch,ci){this._setColumnData(ch,u,ci);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(dK){var dL=this.__je[dK]||{};
return dL.maxWidth!==undefined?dL.maxWidth:Infinity;
},setColumnWidth:function(dG,dH){this._setColumnData(dG,v,dH);
this._applyLayoutChange();
return this;
},getColumnWidth:function(dM){var dN=this.__je[dM]||{};
return dN.width!==undefined?dN.width:null;
},setColumnMinWidth:function(bj,bk){this._setColumnData(bj,t,bk);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(el){var em=this.__je[el]||{};
return em.minWidth||0;
},setRowMaxHeight:function(dI,dJ){this._setRowData(dI,z,dJ);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(J){var K=this.__jd[J]||{};
return K.maxHeight||Infinity;
},setRowHeight:function(dP,dQ){this._setRowData(dP,F,dQ);
this._applyLayoutChange();
return this;
},getRowHeight:function(L){var M=this.__jd[L]||{};
return M.height!==undefined?M.height:null;
},setRowMinHeight:function(dE,dF){this._setRowData(dE,w,dF);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(bU){var bV=this.__jd[bU]||{};
return bV.minHeight||0;
},__jn:function(cI){var cM=cI.getSizeHint();
var cL=cI.getMarginLeft()+cI.getMarginRight();
var cK=cI.getMarginTop()+cI.getMarginBottom();
var cJ={height:cM.height+cK,width:cM.width+cL,minHeight:cM.minHeight+cK,minWidth:cM.minWidth+cL,maxHeight:cM.maxHeight+cK,maxWidth:cM.maxWidth+cL};
return cJ;
},_fixHeightsRowSpan:function(bo){var bz=this.getSpacingY();

for(var i=0,l=this.__jh.length;i<l;i++){var br=this.__jh[i];
var bt=this.__jn(br);
var bu=br.getLayoutProperties();
var bq=bu.row;
var bx=bz*(bu.rowSpan-1);
var bp=bx;
var bw={};

for(var j=0;j<bu.rowSpan;j++){var bB=bu.row+j;
var bs=bo[bB];
var bA=this.getRowFlex(bB);

if(bA>0){bw[bB]={min:bs.minHeight,value:bs.height,max:bs.maxHeight,flex:bA};
}bx+=bs.height;
bp+=bs.minHeight;
}if(bx<bt.height){var by=qx.ui.layout.Util.computeFlexOffsets(bw,bt.height,bx);

for(var j=0;j<bu.rowSpan;j++){var bv=by[bq+j]?by[bq+j].offset:0;
bo[bq+j].height+=bv;
}}if(bp<bt.minHeight){var by=qx.ui.layout.Util.computeFlexOffsets(bw,bt.minHeight,bp);

for(var j=0;j<bu.rowSpan;j++){var bv=by[bq+j]?by[bq+j].offset:0;
bo[bq+j].minHeight+=bv;
}}}},_fixWidthsColSpan:function(U){var Y=this.getSpacingX();

for(var i=0,l=this.__jg.length;i<l;i++){var V=this.__jg[i];
var X=this.__jn(V);
var bb=V.getLayoutProperties();
var W=bb.column;
var bh=Y*(bb.colSpan-1);
var ba=bh;
var bc={};
var be;

for(var j=0;j<bb.colSpan;j++){var bi=bb.column+j;
var bg=U[bi];
var bf=this.getColumnFlex(bi);
if(bf>0){bc[bi]={min:bg.minWidth,value:bg.width,max:bg.maxWidth,flex:bf};
}bh+=bg.width;
ba+=bg.minWidth;
}if(bh<X.width){var bd=qx.ui.layout.Util.computeFlexOffsets(bc,X.width,bh);

for(var j=0;j<bb.colSpan;j++){be=bd[W+j]?bd[W+j].offset:0;
U[W+j].width+=be;
}}if(ba<X.minWidth){var bd=qx.ui.layout.Util.computeFlexOffsets(bc,X.minWidth,ba);

for(var j=0;j<bb.colSpan;j++){be=bd[W+j]?bd[W+j].offset:0;
U[W+j].minWidth+=be;
}}}},_getRowHeights:function(){if(this.__jk!=null){return this.__jk;
}var ef=[];
var dX=this.__ji;
var dW=this.__jj;

for(var eg=0;eg<=dX;eg++){var dY=0;
var eb=0;
var ea=0;

for(var ee=0;ee<=dW;ee++){var dV=this.__jf[eg][ee];

if(!dV){continue;
}var ec=dV.getLayoutProperties().rowSpan||0;

if(ec>1){continue;
}var ed=this.__jn(dV);

if(this.getRowFlex(eg)>0){dY=Math.max(dY,ed.minHeight);
}else{dY=Math.max(dY,ed.height);
}eb=Math.max(eb,ed.height);
}var dY=Math.max(dY,this.getRowMinHeight(eg));
var ea=this.getRowMaxHeight(eg);

if(this.getRowHeight(eg)!==null){var eb=this.getRowHeight(eg);
}else{var eb=Math.max(dY,Math.min(eb,ea));
}ef[eg]={minHeight:dY,height:eb,maxHeight:ea};
}
if(this.__jh.length>0){this._fixHeightsRowSpan(ef);
}this.__jk=ef;
return ef;
},_getColWidths:function(){if(this.__jl!=null){return this.__jl;
}var bG=[];
var bD=this.__jj;
var bF=this.__ji;

for(var bL=0;bL<=bD;bL++){var bJ=0;
var bI=0;
var bE=Infinity;

for(var bM=0;bM<=bF;bM++){var bC=this.__jf[bM][bL];

if(!bC){continue;
}var bH=bC.getLayoutProperties().colSpan||0;

if(bH>1){continue;
}var bK=this.__jn(bC);

if(this.getColumnFlex(bL)>0){bI=Math.max(bI,bK.minWidth);
}else{bI=Math.max(bI,bK.width);
}bJ=Math.max(bJ,bK.width);
}var bI=Math.max(bI,this.getColumnMinWidth(bL));
var bE=this.getColumnMaxWidth(bL);

if(this.getColumnWidth(bL)!==null){var bJ=this.getColumnWidth(bL);
}else{var bJ=Math.max(bI,Math.min(bJ,bE));
}bG[bL]={minWidth:bI,width:bJ,maxWidth:bE};
}
if(this.__jg.length>0){this._fixWidthsColSpan(bG);
}this.__jl=bG;
return bG;
},_getColumnFlexOffsets:function(N){var O=this.getSizeHint();
var S=N-O.width;

if(S==0){return {};
}var Q=this._getColWidths();
var P={};

for(var i=0,l=Q.length;i<l;i++){var T=Q[i];
var R=this.getColumnFlex(i);

if((R<=0)||(T.width==T.maxWidth&&S>0)||(T.width==T.minWidth&&S<0)){continue;
}P[i]={min:T.minWidth,value:T.width,max:T.maxWidth,flex:R};
}return qx.ui.layout.Util.computeFlexOffsets(P,N,O.width);
},_getRowFlexOffsets:function(bW){var bX=this.getSizeHint();
var cb=bW-bX.height;

if(cb==0){return {};
}var cc=this._getRowHeights();
var bY={};

for(var i=0,l=cc.length;i<l;i++){var cd=cc[i];
var ca=this.getRowFlex(i);

if((ca<=0)||(cd.height==cd.maxHeight&&cb>0)||(cd.height==cd.minHeight&&cb<0)){continue;
}bY[i]={min:cd.minHeight,value:cd.height,max:cd.maxHeight,flex:ca};
}return qx.ui.layout.Util.computeFlexOffsets(bY,bW,bX.height);
},renderLayout:function(cP,cQ){if(this._invalidChildrenCache){this.__jm();
}var df=qx.ui.layout.Util;
var cS=this.getSpacingX();
var cY=this.getSpacingY();
var dk=this._getColWidths();
var dj=this._getColumnFlexOffsets(cP);
var cT=[];
var dm=this.__jj;
var cR=this.__ji;
var dl;

for(var dn=0;dn<=dm;dn++){dl=dj[dn]?dj[dn].offset:0;
cT[dn]=dk[dn].width+dl;
}var dc=this._getRowHeights();
var de=this._getRowFlexOffsets(cQ);
var du=[];

for(var da=0;da<=cR;da++){dl=de[da]?de[da].offset:0;
du[da]=dc[da].height+dl;
}var dv=0;

for(var dn=0;dn<=dm;dn++){var top=0;

for(var da=0;da<=cR;da++){var dh=this.__jf[da][dn];
if(!dh){top+=du[da]+cY;
continue;
}var cU=dh.getLayoutProperties();
if(cU.row!==da||cU.column!==dn){top+=du[da]+cY;
continue;
}var dt=cS*(cU.colSpan-1);

for(var i=0;i<cU.colSpan;i++){dt+=cT[dn+i];
}var di=cY*(cU.rowSpan-1);

for(var i=0;i<cU.rowSpan;i++){di+=du[da+i];
}var cV=dh.getSizeHint();
var dr=dh.getMarginTop();
var dg=dh.getMarginLeft();
var dd=dh.getMarginBottom();
var cX=dh.getMarginRight();
var db=Math.max(cV.minWidth,Math.min(dt-dg-cX,cV.maxWidth));
var ds=Math.max(cV.minHeight,Math.min(di-dr-dd,cV.maxHeight));
var dp=this.getCellAlign(da,dn);
var dq=dv+df.computeHorizontalAlignOffset(dp.hAlign,db,dt,dg,cX);
var cW=top+df.computeVerticalAlignOffset(dp.vAlign,ds,di,dr,dd);
dh.renderLayout(dq,cW,db,ds);
top+=du[da]+cY;
}dv+=cT[dn]+cS;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__jl=null;
this.__jk=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jm();
}var cx=this._getColWidths();
var cz=0,cA=0;

for(var i=0,l=cx.length;i<l;i++){var cB=cx[i];

if(this.getColumnFlex(i)>0){cz+=cB.minWidth;
}else{cz+=cB.width;
}cA+=cB.width;
}var cC=this._getRowHeights();
var cv=0,cy=0;

for(var i=0,l=cC.length;i<l;i++){var cD=cC[i];

if(this.getRowFlex(i)>0){cv+=cD.minHeight;
}else{cv+=cD.height;
}cy+=cD.height;
}var cu=this.getSpacingX()*(cx.length-1);
var ct=this.getSpacingY()*(cC.length-1);
var cw={minWidth:cz+cu,width:cA+cu,minHeight:cv+ct,height:cy+ct};
return cw;
}},destruct:function(){this.__jf=this.__jd=this.__je=this.__jg=this.__jh=this.__jl=this.__jk=null;
}});
})();
(function(){var bj="open",bi="auto",bh="qx.debug",bg="middle",bf="icon",be="label",bd="on",bc="changeOpen",bb="excluded",ba="visible",bF="String",bE="opened",bD="always",bC="qx.ui.tree.AbstractTreeItem",bB="addItem",bA="Boolean",bz="__lu",by="Invalid child index: ",bx="Integer",bw="_applyIndent",bq="changeOpenSymbolMode",br="_applyOpenSymbolMode",bo="resize",bp="",bm="__lt",bn="removeItem",bk="__lx",bl="abstract",bs="never",bt="_applyIcon",bv="_applyOpen",bu="_applyLabel";
qx.Class.define(bC,{extend:qx.ui.core.Widget,type:bl,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){qx.ui.core.Widget.call(this);
this.__lt=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:bA,init:false,event:bc,apply:bv},openSymbolMode:{check:[bD,bs,bi],init:bi,event:bq,apply:br},indent:{check:bx,init:19,apply:bw,themeable:true},parent:{check:bC,nullable:true},icon:{check:bF,apply:bt,nullable:true,themeable:true},label:{check:bF,apply:bu,init:bp}},members:{__lt:null,__lu:null,__lv:null,__lw:null,__lx:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(b){var c;

switch(b){case be:c=new qx.ui.basic.Label().set({alignY:bg,value:this.getLabel()});
break;
case bf:c=new qx.ui.basic.Image().set({alignY:bg,source:this.getIcon()});
break;
case bj:c=new qx.ui.tree.FolderOpenButton().set({alignY:bg});
c.addListener(bc,this._onChangeOpen,this);
c.addListener(bo,this._updateIndent,this);
break;
}return c||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,b);
},getTree:function(){var L=this;

while(L.getParent()){L=L.getParent();
}var K=L.getLayoutParent()?L.getLayoutParent().getLayoutParent():0;

if(K&&K instanceof qx.ui.core.scroll.ScrollPane){return K.getLayoutParent();
}return null;
},addWidget:function(bY,ca){this._add(bY,ca);
},addSpacer:function(){if(!this.__lx){this.__lx=new qx.ui.core.Spacer();
}else{this._remove(this.__lx);
}this._add(this.__lx);
},addOpenButton:function(){this._add(this.getChildControl(bj));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var y=this.getChildControl(bf);

if(this.__lw){this._remove(y);
}this._add(y);
this.__lw=true;
},addLabel:function(h){var j=this.getChildControl(be);

if(this.__lv){this._remove(j);
}
if(h){this.setLabel(h);
}else{j.setValue(this.getLabel());
}this._add(j);
this.__lv=true;
},addState:function(M){qx.ui.core.Widget.prototype.addState.call(this,M);
var O=this._getChildren();

for(var i=0,l=O.length;i<l;i++){var N=O[i];

if(N.addState){O[i].addState(M);
}}},removeState:function(d){qx.ui.core.Widget.prototype.removeState.call(this,d);
var g=this._getChildren();

for(var i=0,l=g.length;i<l;i++){var f=g[i];

if(f.addState){g[i].removeState(d);
}}},_applyIcon:function(bK,bL){var bM=this.getChildControl(bf,true);

if(bM){bM.setSource(bK);
}},_applyLabel:function(bU,bV){var bW=this.getChildControl(be,true);

if(bW){bW.setValue(bU);
}},_applyOpen:function(X,Y){if(this.hasChildren()){this.getChildrenContainer().setVisibility(X?ba:bb);
}var open=this.getChildControl(bj,true);

if(open){open.setOpen(X);
}X?this.addState(bE):this.removeState(bE);
},isOpenable:function(){var bJ=this.getOpenSymbolMode();
return (bJ===bD||bJ===bi&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(bj,true);

if(!open){return false;
}var bX=this.getTree();

if(!bX.getRootOpenClose()){if(bX.getHideRoot()){if(bX.getRoot()==this.getParent()){return false;
}}else{if(bX.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bN,bO){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var x=0;
var open=this.getChildControl(bj,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var w=open.getBounds();

if(w){x=w.width;
}else{return;
}}else{open.exclude();
}}
if(this.__lx){this.__lx.setWidth((this.getLevel()+1)*this.getIndent()-x);
}},_applyIndent:function(z,A){this._updateIndent();
},getLevel:function(){var bR=this.getTree();

if(!bR){return;
}var bS=this;
var bT=-1;

while(bS){bS=bS.getParent();
bT+=1;
}if(bR.getHideRoot()){bT-=1;
}
if(!bR.getRootOpenClose()){bT-=1;
}return bT;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__lu){this.__lu=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?ba:bb});
}return this.__lu;
},hasChildrenContainer:function(){return this.__lu;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__lt;
},hasChildren:function(){return this.__lt?this.__lt.length>0:false;
},getItems:function(P,Q,R){if(R!==false){var S=[];
}else{var S=[this];
}var V=this.hasChildren()&&(Q!==false||this.isOpen());

if(V){var U=this.getChildren();

if(P===false){S=S.concat(U);
}else{for(var i=0,T=U.length;i<T;i++){S=S.concat(U[i].getItems(P,Q,false));
}}}return S;
},recursiveAddToWidgetQueue:function(){var a=this.getItems(true,true,false);

for(var i=0,l=a.length;i<l;i++){qx.ui.core.queue.Widget.add(a[i]);
}},__ly:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(q){var r=this.getChildrenContainer();
var u=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var v=arguments[i];
var t=v.getParent();

if(t){t.remove(v);
}v.setParent(this);
var s=this.hasChildren();
r.add(v);

if(v.hasChildren()){r.add(v.getChildrenContainer());
}this.__lt.push(v);

if(!s){this.__ly();
}
if(u){v.recursiveAddToWidgetQueue();
u.fireNonBubblingEvent(bB,qx.event.type.Data,[v]);
}}
if(u){qx.ui.core.queue.Widget.add(this);
}},addAt:function(B,C){if(qx.core.Variant.isSet(bh,bd)){this.assert(C<=this.__lt.length&&C>=0,by+C);
}
if(C==this.__lt.length){this.add(B);
return;
}var G=B.getParent();

if(G){G.remove(B);
}var E=this.getChildrenContainer();
B.setParent(this);
var F=this.hasChildren();
var D=this.__lt[C];
E.addBefore(B,D);

if(B.hasChildren()){E.addAfter(B.getChildrenContainer(),B);
}qx.lang.Array.insertAt(this.__lt,B,C);

if(!F){this.__ly();
}
if(this.getTree()){B.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(H,I){if(qx.core.Variant.isSet(bh,bd)){this.assert(this.__lt.indexOf(I)>=0);
}var J=H.getParent();

if(J){J.remove(H);
}this.addAt(H,this.__lt.indexOf(I));
},addAfter:function(bG,bH){if(qx.core.Variant.isSet(bh,bd)){this.assert(this.__lt.indexOf(bH)>=0);
}var bI=bG.getParent();

if(bI){bI.remove(bG);
}this.addAt(bG,this.__lt.indexOf(bH)+1);
},addAtBegin:function(W){this.addAt(W,0);
},remove:function(k){for(var i=0,l=arguments.length;i<l;i++){var p=arguments[i];

if(this.__lt.indexOf(p)==-1){this.warn("Cannot remove treeitem '"+p+"'. It is not a child of this tree item.");
return;
}var m=this.getChildrenContainer();

if(p.hasChildrenContainer()){var o=p.getChildrenContainer();

if(m.getChildren().indexOf(o)>=0){m.remove(o);
}}qx.lang.Array.remove(this.__lt,p);
p.setParent(null);
m.remove(p);
}var n=this.getTree();

if(n){n.fireNonBubblingEvent(bn,qx.event.type.Data,[p]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bP){var bQ=this.__lt[bP];

if(bQ){this.remove(bQ);
}},removeAll:function(){for(var i=this.__lt.length-1;i>=0;i--){this.remove(this.__lt[i]);
}}},destruct:function(){this._disposeArray(bm);
this._disposeObjects(bk,bz);
}});
})();
(function(){var i="opened",h="click",g="changeOpen",f="Boolean",d="qx.ui.tree.FolderOpenButton",c="_applyOpen",b="mouseup",a="mousedown";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){qx.ui.basic.Image.call(this);
this.initOpen();
this.addListener(h,this._onClick);
this.addListener(a,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
},properties:{open:{check:f,init:false,event:g,apply:c}},members:{_applyOpen:function(j,k){j?this.addState(i):this.removeState(i);
this.execute();
},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var b="tree-folder",a="qx.ui.tree.TreeFolder";
qx.Class.define(a,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){qx.ui.tree.AbstractTreeItem.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:b}},members:{_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var b="qx.ui.tree.TreeFile",a="tree-file";
qx.Class.define(b,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){qx.ui.tree.AbstractTreeItem.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:a}},members:{_addWidgets:function(){this.addSpacer();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var m="Boolean",l="qx.event.type.Event",k="queued",j="String",i="sending",h="receiving",g="aborted",f="failed",d="nocache",c="completed",U="qx.io.remote.Response",T="POST",S="configured",R="timeout",Q="GET",P="Pragma",O="no-url-params-on-post",N="PUT",M="no-cache",L="Cache-Control",t="Content-Type",u="text/plain",r="application/xml",s="application/json",p="text/html",q="qx.ioRemoteDebug",n="application/x-www-form-urlencoded",o="qx.io.remote.Exchange",w="Integer",x="X-Qooxdoo-Response-Type",D="HEAD",C="qx.io.remote.Request",F="qx.debug",E="_applyResponseType",H="_applyState",G="text/javascript",z="changeState",K="_applyProhibitCaching",J="",I="_applyMethod",y="DELETE",A="boolean",B="on";
qx.Class.define(C,{extend:qx.core.Object,construct:function(bs,bt,bu){qx.core.Object.call(this);
this.__qw={};
this.__qx={};
this.__qy={};
this.__qz={};

if(bs!==undefined){this.setUrl(bs);
}
if(bt!==undefined){this.setMethod(bt);
}
if(bu!==undefined){this.setResponseType(bu);
}this.setProhibitCaching(true);
this.__qA=++qx.io.remote.Request.__qA;
},events:{"created":l,"configured":l,"sending":l,"receiving":l,"completed":U,"aborted":l,"failed":U,"timeout":U},statics:{__qA:0,methodAllowsRequestBody:function(br){return (br==T)||(br==N);
}},properties:{url:{check:j,init:J},method:{check:[Q,T,N,D,y],apply:I,init:Q},asynchronous:{check:m,init:true},data:{check:j,nullable:true},username:{check:j,nullable:true},password:{check:j,nullable:true},state:{check:[S,k,i,h,c,g,R,f],init:S,apply:H,event:z},responseType:{check:[u,G,s,r,p],init:u,apply:E},timeout:{check:w,nullable:true},prohibitCaching:{check:function(v){return typeof v==A||v===O;
},init:true,apply:K},crossDomain:{check:m,init:false},fileUpload:{check:m,init:false},transport:{check:o,nullable:true},useBasicHttpAuth:{check:m,init:false},parseJson:{check:m,init:true}},members:{__qw:null,__qx:null,__qy:null,__qz:null,__qA:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case i:case h:this.error("Aborting already sent request!");
case k:this.abort();
break;
}},isConfigured:function(){return this.getState()===S;
},isQueued:function(){return this.getState()===k;
},isSending:function(){return this.getState()===i;
},isReceiving:function(){return this.getState()===h;
},isCompleted:function(){return this.getState()===c;
},isAborted:function(){return this.getState()===g;
},isTimeout:function(){return this.getState()===R;
},isFailed:function(){return this.getState()===f;
},__qB:function(e){var Y=e.clone();
Y.setTarget(this);
this.dispatchEvent(Y);
},_onqueued:function(e){this.setState(k);
this.__qB(e);
},_onsending:function(e){this.setState(i);
this.__qB(e);
},_onreceiving:function(e){this.setState(h);
this.__qB(e);
},_oncompleted:function(e){this.setState(c);
this.__qB(e);
this.dispose();
},_onaborted:function(e){this.setState(g);
this.__qB(e);
this.dispose();
},_ontimeout:function(e){this.setState(R);
this.__qB(e);
this.dispose();
},_onfailed:function(e){this.setState(f);
this.__qB(e);
this.dispose();
},_applyState:function(bb,bc){if(qx.core.Variant.isSet(F,B)){if(qx.core.Setting.get(q)){this.debug("State: "+bb);
}}},_applyProhibitCaching:function(bg,bh){if(!bg){this.removeParameter(d);
this.removeRequestHeader(P);
this.removeRequestHeader(L);
return;
}if(bg!==O||this.getMethod()!=T){this.setParameter(d,new Date().valueOf());
}else{this.removeParameter(d);
}this.setRequestHeader(P,M);
this.setRequestHeader(L,M);
},_applyMethod:function(bd,be){if(qx.io.remote.Request.methodAllowsRequestBody(bd)){this.setRequestHeader(t,n);
}else{this.removeRequestHeader(t);
}var bf=this.getProhibitCaching();
this._applyProhibitCaching(bf,bf);
},_applyResponseType:function(bm,bn){this.setRequestHeader(x,bm);
},setRequestHeader:function(bw,bx){this.__qw[bw]=bx;
},removeRequestHeader:function(bq){delete this.__qw[bq];
},getRequestHeader:function(bo){return this.__qw[bo]||null;
},getRequestHeaders:function(){return this.__qw;
},setParameter:function(V,W,X){if(X){this.__qy[V]=W;
}else{this.__qx[V]=W;
}},removeParameter:function(bk,bl){if(bl){delete this.__qy[bk];
}else{delete this.__qx[bk];
}},getParameter:function(a,b){if(b){return this.__qy[a]||null;
}else{return this.__qx[a]||null;
}},getParameters:function(ba){return (ba?this.__qy:this.__qx);
},setFormField:function(bi,bj){this.__qz[bi]=bj;
},removeFormField:function(bv){delete this.__qz[bv];
},getFormField:function(bp){return this.__qz[bp]||null;
},getFormFields:function(){return this.__qz;
},getSequenceNumber:function(){return this.__qA;
}},destruct:function(){this.setTransport(null);
this.__qw=this.__qx=this.__qy=this.__qz=null;
}});
})();
(function(){var b=".",a="qx.bom.client.Transport";
qx.Class.define(a,{statics:{getMaxConcurrentRequestCount:function(){var h;
var c=qx.bom.client.Engine;
var g=c.FULLVERSION.split(b);
var e=0;
var d=0;
var f=0;
if(g[0]){e=g[0];
}if(g[1]){d=g[1];
}if(g[2]){f=g[2];
}if(window.maxConnectionsPerServer){h=window.maxConnectionsPerServer;
}else if(c.OPERA){h=8;
}else if(c.WEBKIT){h=4;
}else if(c.GECKO&&((e>1)||((e==1)&&(d>9))||((e==1)&&(d==9)&&(f>=1)))){h=6;
}else{h=2;
}return h;
}}});
})();
(function(){var o="qx.ioRemoteDebug",n="Integer",m="qx.debug",l="on",k="aborted",j="_onaborted",h="_on",g="Boolean",f="singleton",d="__qF",A="interval",z="__qD",y="receiving",x="Request-Queue Progress: ",w="queued",v="/",u="_applyEnabled",t="sending",s="completed",r="failed",p="qx.io.remote.RequestQueue",q="timeout";
qx.Class.define(p,{type:f,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__qC=[];
this.__qD=[];
this.__qE=0;
this.__qF=new qx.event.Timer(500);
this.__qF.addListener(A,this._oninterval,this);
},properties:{enabled:{init:true,check:g,apply:u},maxTotalRequests:{check:n,nullable:true},maxConcurrentRequests:{check:n,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:n,init:5000}},members:{__qC:null,__qD:null,__qE:null,__qF:null,getRequestQueue:function(){return this.__qC;
},getActiveQueue:function(){return this.__qD;
},_debug:function(){if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(o)){var O=this.__qD.length+v+(this.__qC.length+this.__qD.length);
this.debug("Progress: "+O);
window.status=x+O;
}}},_check:function(){this._debug();
if(this.__qD.length==0&&this.__qC.length==0){this.__qF.stop();
}if(!this.getEnabled()){return;
}if(this.__qC.length==0||(this.__qC[0].isAsynchronous()&&this.__qD.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__qE>=this.getMaxTotalRequests()){return;
}var R=this.__qC.shift();
var S=new qx.io.remote.Exchange(R);
this.__qE++;
this.__qD.push(S);
this._debug();
S.addListener(t,this._onsending,this);
S.addListener(y,this._onreceiving,this);
S.addListener(s,this._oncompleted,this);
S.addListener(k,this._oncompleted,this);
S.addListener(q,this._oncompleted,this);
S.addListener(r,this._oncompleted,this);
S._start=(new Date).valueOf();
S.send();
if(this.__qC.length>0){this._check();
}},_remove:function(P){qx.lang.Array.remove(this.__qD,P);
P.dispose();
this._check();
},__qG:0,_onsending:function(e){if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(o)){this.__qG++;
e.getTarget()._counted=true;
this.debug("ActiveCount: "+this.__qG);
}}e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(o)){if(e.getTarget()._counted){this.__qG--;
this.debug("ActiveCount: "+this.__qG);
}}}var c=e.getTarget().getRequest();
var b=h+e.getType();
try{if(c[b]){c[b](e);
}}catch(E){var a=qx.dev.StackTrace.getStackTraceFromError(E);
this.error("Request "+c+" handler "+b+" threw an error: "+E+"\nStack Trace:\n"+a);
try{if(c[j]){var event=qx.event.Registration.createEvent(k,qx.event.type.Event);
c[j](event);
}}catch(D){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var N=this.__qD;

if(N.length==0){this.__qF.stop();
return;
}var I=(new Date).valueOf();
var L;
var J;
var M=this.getDefaultTimeout();
var K;
var H;

for(var i=N.length-1;i>=0;i--){L=N[i];
J=L.getRequest();

if(J.isAsynchronous()){K=J.getTimeout();
if(K==0){continue;
}
if(K==null){K=M;
}H=I-L._start;

if(H>K){this.warn("Timeout: transport "+L.toHashCode());
this.warn(H+"ms > "+K+"ms");
L.timeout();
}}}},_applyEnabled:function(F,G){if(F){this._check();
}this.__qF.setEnabled(F);
},add:function(Q){Q.setState(w);

if(Q.isAsynchronous()){this.__qC.push(Q);
}else{this.__qC.unshift(Q);
}this._check();

if(this.getEnabled()){this.__qF.start();
}},abort:function(B){var C=B.getTransport();

if(C){C.abort();
}else if(qx.lang.Array.contains(this.__qC,B)){qx.lang.Array.remove(this.__qC,B);
}}},destruct:function(){this._disposeArray(z);
this._disposeObjects(d);
this.__qC=null;
}});
})();
(function(){var R="qx.ioRemoteDebug",Q="qx.debug",P="on",O="failed",N="sending",M="completed",L="receiving",K="aborted",J="timeout",I="qx.event.type.Event",bT="Connection dropped",bS="qx.io.remote.Response",bR="configured",bQ="Unknown status code. ",bP="=",bO="qx.io.remote.transport.XmlHttp",bN="qx.io.remote.transport.Abstract",bM="Request-URL too large",bL="MSHTML-specific HTTP status code",bK="Not available",Y="Precondition failed",ba="Server error",W="&",X="qx.io.remote.Exchange",U="Possibly due to a cross-domain request?",V="Bad gateway",S="Gone",T="See other",bf="Partial content",bg="Server timeout",bq="qx.io.remote.transport.Script",bn="HTTP version not supported",by="Unauthorized",bt="Possibly due to application URL using 'file:' protocol?",bG="Multiple choices",bD="Payment required",bj="Not implemented",bJ="Proxy authentication required",bI="Length required",bH="_applyState",bi="changeState",bl="Not modified",bm="Not acceptable",bp="qx.io.remote.Request",br="Connection closed by server",bu="Moved permanently",bA="_applyImplementation",bF="Method not allowed",bb="Moved temporarily",bc="Forbidden",bk="Use proxy",bx="Ok",bw="Conflict",bv="Not found",bC="Request time-out",bB="Bad request",bs="No content",bz="file:",F="qx.io.remote.transport.Iframe",bE="Request entity too large",bd="Unknown status code",be="Unsupported media type",bo="Gateway time-out",G="created",H="Out of resources",bh="undefined";
qx.Class.define(X,{extend:qx.core.Object,construct:function(cg){qx.core.Object.call(this);
this.setRequest(cg);
cg.setTransport(this);
},events:{"sending":I,"receiving":I,"completed":bS,"aborted":I,"failed":bS,"timeout":bS},statics:{typesOrder:[bO,F,bq],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(D,E){qx.io.remote.Exchange.typesAvailable[E]=D;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var c in qx.io.remote.Exchange.typesAvailable){var b=qx.io.remote.Exchange.typesAvailable[c];

if(b.isSupported()){qx.io.remote.Exchange.typesSupported[c]=b;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(g,h,j){if(!qx.lang.Array.contains(g.handles.responseTypes,j)){return false;
}
for(var k in h){if(!g.handles[k]){return false;
}}return true;
},_nativeMap:{0:G,1:bR,2:N,3:L,4:M},wasSuccessful:function(bU,bV,bW){if(bW){switch(bU){case null:case 0:return true;
case -1:return bV<4;
default:return typeof bU===bh;
}}else{switch(bU){case -1:if(qx.core.Variant.isSet(Q,P)){if(qx.core.Setting.get(R)&&bV>3){qx.log.Logger.debug(this,"Failed with statuscode: -1 at readyState "+bV);
}}return bV<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:if(qx.core.Variant.isSet(Q,P)){if(qx.core.Setting.get(R)&&bV===4){qx.log.Logger.debug(this,"Failed with statuscode: 206 (Partial content while being complete!)");
}}return bV!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:if(qx.core.Variant.isSet(Q,P)){if(qx.core.Setting.get(R)){qx.log.Logger.debug(this,"Failed with typical HTTP statuscode: "+bU);
}}return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:if(qx.core.Variant.isSet(Q,P)){if(qx.core.Setting.get(R)){qx.log.Logger.debug(this,"Failed with MSHTML specific HTTP statuscode: "+bU);
}}return false;
default:if(bU>206&&bU<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bU+" ("+bV+")");
return false;
}}},statusCodeToString:function(d){switch(d){case -1:return bK;
case 0:var f=window.location.href;
if(qx.lang.String.startsWith(f.toLowerCase(),bz)){return (bQ+bt);
}else{return (bQ+U);
}break;
case 200:return bx;
case 304:return bl;
case 206:return bf;
case 204:return bs;
case 300:return bG;
case 301:return bu;
case 302:return bb;
case 303:return T;
case 305:return bk;
case 400:return bB;
case 401:return by;
case 402:return bD;
case 403:return bc;
case 404:return bv;
case 405:return bF;
case 406:return bm;
case 407:return bJ;
case 408:return bC;
case 409:return bw;
case 410:return S;
case 411:return bI;
case 412:return Y;
case 413:return bE;
case 414:return bM;
case 415:return be;
case 500:return ba;
case 501:return bj;
case 502:return V;
case 503:return H;
case 504:return bo;
case 505:return bn;
case 12002:return bg;
case 12029:return bT;
case 12030:return bT;
case 12031:return bT;
case 12152:return br;
case 13030:return bL;
default:return bd;
}}},properties:{request:{check:bp,nullable:true},implementation:{check:bN,nullable:true,apply:bA},state:{check:[bR,N,L,M,K,J,O],init:bR,event:bi,apply:bH}},members:{send:function(){var q=this.getRequest();

if(!q){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var o=qx.io.remote.Exchange.typesOrder;
var n=qx.io.remote.Exchange.typesSupported;
var s=q.getResponseType();
var t={};

if(q.getAsynchronous()){t.asynchronous=true;
}else{t.synchronous=true;
}
if(q.getCrossDomain()){t.crossDomain=true;
}
if(q.getFileUpload()){t.fileUpload=true;
}for(var r in q.getFormFields()){t.programaticFormFields=true;
break;
}var u,p;

for(var i=0,l=o.length;i<l;i++){u=n[o[i]];

if(u){if(!qx.io.remote.Exchange.canHandle(u,t,s)){continue;
}
try{if(qx.core.Variant.isSet(Q,P)){if(qx.core.Setting.get(R)){this.debug("Using implementation: "+u.classname);
}}p=new u;
this.setImplementation(p);
p.setUseBasicHttpAuth(q.getUseBasicHttpAuth());
p.send();
return true;
}catch(B){this.error("Request handler throws error");
this.error(B);
return;
}}}this.error("There is no transport implementation available to handle this request: "+q);
},abort:function(){var m=this.getImplementation();

if(m){if(qx.core.Variant.isSet(Q,P)){if(qx.core.Setting.get(R)){this.debug("Abort: implementation "+m.toHashCode());
}}m.abort();
}else{if(qx.core.Variant.isSet(Q,P)){if(qx.core.Setting.get(R)){this.debug("Abort: forcing state to be aborted");
}}this.setState(K);
}},timeout:function(){var a=this.getImplementation();

if(a){this.warn("Timeout: implementation "+a.toHashCode());
a.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(J);
}this.__qH();
},__qH:function(){var C=this.getRequest();

if(C){C.setTimeout(0);
}},_onsending:function(e){this.setState(N);
},_onreceiving:function(e){this.setState(L);
},_oncompleted:function(e){this.setState(M);
},_onabort:function(e){this.setState(K);
},_onfailed:function(e){this.setState(O);
},_ontimeout:function(e){this.setState(J);
},_applyImplementation:function(bX,bY){if(bY){bY.removeListener(N,this._onsending,this);
bY.removeListener(L,this._onreceiving,this);
bY.removeListener(M,this._oncompleted,this);
bY.removeListener(K,this._onabort,this);
bY.removeListener(J,this._ontimeout,this);
bY.removeListener(O,this._onfailed,this);
}
if(bX){var cb=this.getRequest();
bX.setUrl(cb.getUrl());
bX.setMethod(cb.getMethod());
bX.setAsynchronous(cb.getAsynchronous());
bX.setUsername(cb.getUsername());
bX.setPassword(cb.getPassword());
bX.setParameters(cb.getParameters(false));
bX.setFormFields(cb.getFormFields());
bX.setRequestHeaders(cb.getRequestHeaders());
if(bX instanceof qx.io.remote.transport.XmlHttp){bX.setParseJson(cb.getParseJson());
}var ce=cb.getData();

if(ce===null){var cf=cb.getParameters(true);
var cd=[];

for(var ca in cf){var cc=cf[ca];

if(cc instanceof Array){for(var i=0;i<cc.length;i++){cd.push(encodeURIComponent(ca)+bP+encodeURIComponent(cc[i]));
}}else{cd.push(encodeURIComponent(ca)+bP+encodeURIComponent(cc));
}}
if(cd.length>0){bX.setData(cd.join(W));
}}else{bX.setData(ce);
}bX.setResponseType(cb.getResponseType());
bX.addListener(N,this._onsending,this);
bX.addListener(L,this._onreceiving,this);
bX.addListener(M,this._oncompleted,this);
bX.addListener(K,this._onabort,this);
bX.addListener(J,this._ontimeout,this);
bX.addListener(O,this._onfailed,this);
}},_applyState:function(w,x){if(qx.core.Variant.isSet(Q,P)){if(qx.core.Setting.get(R)){this.debug("State: "+x+" => "+w);
}}
switch(w){case N:this.fireEvent(N);
break;
case L:this.fireEvent(L);
break;
case M:case K:case J:case O:var z=this.getImplementation();

if(!z){break;
}this.__qH();

if(this.hasListener(w)){var A=qx.event.Registration.createEvent(w,qx.io.remote.Response);

if(w==M){var y=z.getResponseContent();
A.setContent(y);
if(y===null){if(qx.core.Variant.isSet(Q,P)){if(qx.core.Setting.get(R)){this.debug("Altered State: "+w+" => failed");
}}w=O;
}}else if(w==O){A.setContent(z.getResponseContent());
}A.setStatusCode(z.getStatusCode());
A.setResponseHeaders(z.getResponseHeaders());
this.dispatchEvent(A);
}this.setImplementation(null);
z.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var v=this.getImplementation();

if(v){this.setImplementation(null);
v.dispose();
}this.setRequest(null);
}});
})();
(function(){var t="qx.event.type.Event",s="String",r="qx.ioRemoteDebug",q="qx.debug",p="failed",o="timeout",n="on",m="created",l="aborted",k="sending",d="configured",j="receiving",g="completed",c="Object",b="Boolean",f="abstract",e="_applyState",h="GET",a="changeState",i="qx.io.remote.transport.Abstract";
qx.Class.define(i,{type:f,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":t,"configured":t,"sending":t,"receiving":t,"completed":t,"aborted":t,"failed":t,"timeout":t},properties:{url:{check:s,nullable:true},method:{check:s,nullable:true,init:h},asynchronous:{check:b,nullable:true,init:true},data:{check:s,nullable:true},username:{check:s,nullable:true},password:{check:s,nullable:true},state:{check:[m,d,k,j,g,l,o,p],init:m,event:a,apply:e},requestHeaders:{check:c,nullable:true},parameters:{check:c,nullable:true},formFields:{check:c,nullable:true},responseType:{check:s,nullable:true},useBasicHttpAuth:{check:b,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){if(qx.core.Variant.isSet(q,n)){if(qx.core.Setting.get(r)){this.warn("Aborting...");
}}this.setState(l);
},timeout:function(){if(qx.core.Variant.isSet(q,n)){if(qx.core.Setting.get(r)){this.warn("Timeout...");
}}this.setState(o);
},failed:function(){if(qx.core.Variant.isSet(q,n)){if(qx.core.Setting.get(r)){this.warn("Failed...");
}}this.setState(p);
},setRequestHeader:function(x,y){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(w){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(u,v){if(qx.core.Variant.isSet(q,n)){if(qx.core.Setting.get(r)){this.debug("State: "+u);
}}
switch(u){case m:this.fireEvent(m);
break;
case d:this.fireEvent(d);
break;
case k:this.fireEvent(k);
break;
case j:this.fireEvent(j);
break;
case g:this.fireEvent(g);
break;
case l:this.fireEvent(l);
break;
case p:this.fireEvent(p);
break;
case o:this.fireEvent(o);
break;
}return true;
}},destruct:function(){this.setRequestHeaders(null);
this.setParameters(null);
this.setFormFields(null);
}});
})();
(function(){var t="qx.debug",s="on",r="qx.ioRemoteDebugData",q="=",p="&",o="application/xml",n="application/json",m="text/html",l="qx.ioRemoteDebug",k="qx.client",R="textarea",Q="none",P="text/plain",O="text/javascript",N="",M="completed",L="?",K="qx.io.remote.transport.Iframe",J="gecko",I="frame_",A="aborted",B="_data_",y="pre",z="javascript:void(0)",w="sending",x="form",u="failed",v='<iframe name="',C="mshtml",D="form_",F='"></iframe>',E="iframe",H="timeout",G="qx/static/blank.gif";
qx.Class.define(K,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var U=(new Date).valueOf();
var V=I+U;
var W=D+U;
if(qx.core.Variant.isSet(k,C)){this.__qI=document.createElement(v+V+F);
}else{this.__qI=document.createElement(E);
}this.__qI.src=z;
this.__qI.id=this.__qI.name=V;
this.__qI.onload=qx.lang.Function.bind(this._onload,this);
this.__qI.style.display=Q;
document.body.appendChild(this.__qI);
this.__qJ=document.createElement(x);
this.__qJ.target=V;
this.__qJ.id=this.__qJ.name=W;
this.__qJ.style.display=Q;
document.body.appendChild(this.__qJ);
this.__qK=document.createElement(R);
this.__qK.id=this.__qK.name=B;
this.__qJ.appendChild(this.__qK);
this.__qI.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[P,O,n,o,m]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__qK:null,__qL:0,__qJ:null,__qI:null,send:function(){var b=this.getMethod();
var d=this.getUrl();
var j=this.getParameters(false);
var h=[];

for(var c in j){var f=j[c];

if(f instanceof Array){for(var i=0;i<f.length;i++){h.push(encodeURIComponent(c)+q+encodeURIComponent(f[i]));
}}else{h.push(encodeURIComponent(c)+q+encodeURIComponent(f));
}}
if(h.length>0){d+=(d.indexOf(L)>=0?p:L)+h.join(p);
}if(this.getData()===null){var j=this.getParameters(true);
var h=[];

for(var c in j){var f=j[c];

if(f instanceof Array){for(var i=0;i<f.length;i++){h.push(encodeURIComponent(c)+q+encodeURIComponent(f[i]));
}}else{h.push(encodeURIComponent(c)+q+encodeURIComponent(f));
}}
if(h.length>0){this.setData(h.join(p));
}}var a=this.getFormFields();

for(var c in a){var g=document.createElement(R);
g.name=c;
g.appendChild(document.createTextNode(a[c]));
this.__qJ.appendChild(g);
}this.__qJ.action=d;
this.__qJ.method=b;
this.__qK.appendChild(document.createTextNode(this.getData()));
this.__qJ.submit();
this.setState(w);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__qJ.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__qI.readyState]);
}),_switchReadyState:function(Y){switch(this.getState()){case M:case A:case u:case H:this.warn("Ignore Ready State Change");
return;
}while(this.__qL<Y){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qL]);
}},setRequestHeader:function(bb,bc){},getResponseHeader:function(X){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return N;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__qI);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__qI);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__qI);
},getIframeTextContent:function(){var bd=this.getIframeBody();

if(!bd){return null;
}
if(!bd.firstChild){return N;
}if(bd.firstChild.tagName&&bd.firstChild.tagName.toLowerCase()==y){return bd.firstChild.innerHTML;
}else{return bd.innerHTML;
}},getIframeHtmlContent:function(){var be=this.getIframeBody();
return be?be.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==M){if(qx.core.Variant.isSet(t,s)){if(qx.core.Setting.get(l)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(t,s)){if(qx.core.Setting.get(l)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var ba=this.getIframeTextContent();

switch(this.getResponseType()){case P:if(qx.core.Variant.isSet(t,s)){if(qx.core.Setting.get(r)){this.debug("Response: "+this._responseContent);
}}return ba;
break;
case m:ba=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(t,s)){if(qx.core.Setting.get(r)){this.debug("Response: "+this._responseContent);
}}return ba;
break;
case n:ba=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(t,s)){if(qx.core.Setting.get(r)){this.debug("Response: "+this._responseContent);
}}
try{return ba&&ba.length>0?qx.util.Json.parse(ba,false):null;
}catch(S){return this.error("Could not execute json: ("+ba+")",S);
}case O:ba=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(t,s)){if(qx.core.Setting.get(r)){this.debug("Response: "+this._responseContent);
}}
try{return ba&&ba.length>0?window.eval(ba):null;
}catch(T){return this.error("Could not execute javascript: ("+ba+")",T);
}case o:ba=this.getIframeDocument();

if(qx.core.Variant.isSet(t,s)){if(qx.core.Setting.get(r)){this.debug("Response: "+this._responseContent);
}}return ba;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,K);
},destruct:function(){if(this.__qI){this.__qI.onload=null;
this.__qI.onreadystatechange=null;
if(qx.core.Variant.isSet(k,J)){this.__qI.src=qx.util.ResourceManager.getInstance().toUri(G);
}document.body.removeChild(this.__qI);
}
if(this.__qJ){document.body.removeChild(this.__qJ);
}this.__qI=this.__qJ=this.__qK=null;
}});
})();
(function(){var p=",",o="",n="string",m="null",k='-',j='"',h=':',g="qx.jsonDebugging",f='\\u00',e="new Date(Date.UTC(",P="__jG",O='\\\\',N='\\f',M='\\"',L='Z',K="))",J='T',I="}",H='(',G="__jy",w="{",x='\\r',u='.',v=":",s='\\t',t="]",q="[",r="__jH",y="__jw",z="qx.jsonEncodeUndefined",B='\\b',A="__jx",D="__jz",C="qx.util.Json",F=')',E='\\n';
qx.Class.define(C,{statics:{__ju:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",CONVERT_DATES:null,__jv:{"function":y,"boolean":A,"number":G,"string":D,"object":P,"undefined":r},__jw:function(c,d){return String(c);
},__jx:function(bu,bv){return String(bu);
},__jy:function(T,U){return isFinite(T)?String(T):m;
},__jz:function(bd,be){var bf;

if(/["\\\x00-\x1f]/.test(bd)){bf=bd.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__jB);
}else{bf=bd;
}return j+bf+j;
},__jA:{'\b':B,'\t':s,'\n':E,'\f':N,'\r':x,'"':M,'\\':O},__jB:function(a,b){var bg=qx.util.Json.__jA[b];

if(bg){return bg;
}bg=b.charCodeAt();
return f+Math.floor(bg/16).toString(16)+(bg%16).toString(16);
},__jC:function(bx,by){var bA=[],bD=true,bC,bz;
var bB=qx.util.Json.__jJ;
bA.push(q);

if(bB){qx.util.Json.__jD+=qx.util.Json.BEAUTIFYING_INDENT;
bA.push(qx.util.Json.__jD);
}
for(var i=0,l=bx.length;i<l;i++){bz=bx[i];
bC=this.__jv[typeof bz];

if(bC){bz=this[bC](bz,i+o);

if(typeof bz==n){if(!bD){bA.push(p);

if(bB){bA.push(qx.util.Json.__jD);
}}bA.push(bz);
bD=false;
}}}
if(bB){qx.util.Json.__jD=qx.util.Json.__jD.substring(0,qx.util.Json.__jD.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bA.push(qx.util.Json.__jD);
}bA.push(t);
return bA.join(o);
},__jE:function(V,W){if(!qx.util.Json.CONVERT_DATES){if(V.toJSON){return V.toJSON();
}var X=qx.util.format.NumberFormat.getInstance();
X.setMinimumIntegerDigits(2);
var ba=V.getUTCFullYear()+k+X.format(V.getUTCMonth()+1)+k+X.format(V.getUTCDate())+J+X.format(V.getUTCHours())+h+X.format(V.getUTCMinutes())+h+X.format(V.getUTCSeconds())+u;
X.setMinimumIntegerDigits(3);
return ba+X.format(V.getUTCMilliseconds())+L;
}else{var Y=V.getUTCFullYear()+p+V.getUTCMonth()+p+V.getUTCDate()+p+V.getUTCHours()+p+V.getUTCMinutes()+p+V.getUTCSeconds()+p+V.getUTCMilliseconds();
return e+Y+K;
}},__jF:function(bj,bk){var bn=[],bp=true,bm,bl;
var bo=qx.util.Json.__jJ;
bn.push(w);

if(bo){qx.util.Json.__jD+=qx.util.Json.BEAUTIFYING_INDENT;
bn.push(qx.util.Json.__jD);
}
for(var bk in bj){bl=bj[bk];
bm=this.__jv[typeof bl];

if(bm){bl=this[bm](bl,bk);

if(typeof bl==n){if(!bp){bn.push(p);

if(bo){bn.push(qx.util.Json.__jD);
}}bn.push(this.__jz(bk),v,bl);
bp=false;
}}}
if(bo){qx.util.Json.__jD=qx.util.Json.__jD.substring(0,qx.util.Json.__jD.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bn.push(qx.util.Json.__jD);
}bn.push(I);
return bn.join(o);
},__jG:function(bE,bF){if(bE){if(qx.lang.Type.isFunction(bE.toJSON)&&bE.toJSON!==this.__ju){return this.__jI(bE.toJSON(bF),bF);
}else if(qx.lang.Type.isDate(bE)){return this.__jE(bE,bF);
}else if(qx.lang.Type.isArray(bE)){return this.__jC(bE,bF);
}else if(qx.lang.Type.isObject(bE)){return this.__jF(bE,bF);
}return o;
}return m;
},__jH:function(bh,bi){if(qx.core.Setting.get(z)){return m;
}},__jI:function(bb,bc){return this[this.__jv[typeof bb]](bb,bc);
},stringify:function(bq,br){this.__jJ=br;
this.__jD=this.BEAUTIFYING_LINE_END;
var bs=this.__jI(bq,o);

if(typeof bs!=n){bs=null;
}if(qx.core.Setting.get(g)){qx.log.Logger.debug(this,"JSON request: "+bs);
}return bs;
},parse:function(Q,R){if(R===undefined){R=true;
}
if(qx.core.Setting.get(g)){qx.log.Logger.debug(this,"JSON response: "+Q);
}
if(R){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(Q.replace(/"(\\.|[^"\\])*"/g,o))){throw new Error("Could not parse JSON string!");
}}
try{var S=(Q&&Q.length>0)?eval(H+Q+F):null;
return S;
}catch(bw){throw new Error("Could not evaluate JSON string: "+bw.message);
}}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bt){bt.__ju=Date.prototype.toJSON;
}});
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
(function(){var x="qx.debug",w="on",v="&",u="=",t="qx.ioRemoteDebug",s="application/json",r="completed",q="text/plain",p="qx.ioRemoteDebugData",o="text/javascript",g="?",n="qx.io.remote.transport.Script",k="",e="_ScriptTransport_data",d="failed",j="script",h="timeout",l="_ScriptTransport_",c="_ScriptTransport_id",m="aborted",f="utf-8";
qx.Class.define(n,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var J=++qx.io.remote.transport.Script.__qM;

if(J>=2000000000){qx.io.remote.transport.Script.__qM=J=1;
}this.__qN=null;
this.__qM=J;
},statics:{__qM:0,_instanceRegistry:{},ScriptTransport_PREFIX:l,ScriptTransport_ID_PARAM:c,ScriptTransport_DATA_PARAM:e,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[q,o,s]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(a,content){var b=qx.io.remote.transport.Script._instanceRegistry[a];

if(b==null){if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(t)){this.warn("Request finished for an unknown instance (probably aborted or timed out before)");
}}}else{b._responseContent=content;
b._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__qO:0,__qN:null,__qM:null,send:function(){var C=this.getUrl();
C+=(C.indexOf(g)>=0?v:g)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+u+this.__qM;
var F=this.getParameters();
var E=[];

for(var B in F){if(B.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var D=F[B];

if(D instanceof Array){for(var i=0;i<D.length;i++){E.push(encodeURIComponent(B)+u+encodeURIComponent(D[i]));
}}else{E.push(encodeURIComponent(B)+u+encodeURIComponent(D));
}}
if(E.length>0){C+=v+E.join(v);
}var A=this.getData();

if(A!=null){C+=v+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+u+encodeURIComponent(A);
}qx.io.remote.transport.Script._instanceRegistry[this.__qM]=this;
this.__qN=document.createElement(j);
this.__qN.charset=f;
this.__qN.src=C;

if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(p)){this.debug("Request: "+C);
}}document.body.appendChild(this.__qN);
},_switchReadyState:function(H){switch(this.getState()){case r:case m:case d:case h:this.warn("Ignore Ready State Change");
return;
}while(this.__qO<H){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qO]);
}},setRequestHeader:function(y,z){},getResponseHeader:function(I){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return k;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==r){if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(t)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(t)){this.debug("Returning content for responseType: "+this.getResponseType());
}}
switch(this.getResponseType()){case q:case s:case o:if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(p)){this.debug("Response: "+this._responseContent);
}}var G=this._responseContent;
return (G===0?0:(G||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,n);
},destruct:function(){if(this.__qN){delete qx.io.remote.transport.Script._instanceRegistry[this.__qM];
document.body.removeChild(this.__qN);
}this.__qN=this._responseContent=null;
}});
})();
(function(){var p="qx.debug",o="on",n="qx.ioRemoteDebugData",m="failed",k="qx.ioRemoteDebug",j="completed",h="=",g="aborted",f="",d="sending",Q="&",P="configured",O="timeout",N="application/xml",M="qx.io.remote.transport.XmlHttp",L="application/json",K="text/html",J="qx.client",I="receiving",H="text/plain",x="text/javascript",y="created",v="?",w="Boolean",t='Referer',u='Basic ',q="\n</pre>",r="string",z='Authorization',A="<pre>Could not execute json: \n",C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",B=':',E="parseerror",D="file:",G="webkit",F="object";
qx.Class.define(M,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[H,x,L,N,K]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(J,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},properties:{parseJson:{check:w,init:true}},members:{__qP:false,__qQ:0,__qR:null,getRequest:function(){if(this.__qR===null){this.__qR=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__qR.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__qR;
},send:function(){this.__qQ=0;
var V=this.getRequest();
var R=this.getMethod();
var Y=this.getAsynchronous();
var X=this.getUrl();
var T=(window.location.protocol===D&&!(/^http(s){0,1}\:/.test(X)));
this.__qP=T;
var bc=this.getParameters();
var ba=[];

for(var S in bc){var W=bc[S];

if(W instanceof Array){for(var i=0;i<W.length;i++){ba.push(encodeURIComponent(S)+h+encodeURIComponent(W[i]));
}}else{ba.push(encodeURIComponent(S)+h+encodeURIComponent(W));
}}
if(ba.length>0){X+=(X.indexOf(v)>=0?Q:v)+ba.join(Q);
}if(this.getData()===null){var bc=this.getParameters();
var ba=[];

for(var S in bc){var W=bc[S];

if(W instanceof Array){for(var i=0;i<W.length;i++){ba.push(encodeURIComponent(S)+h+encodeURIComponent(W[i]));
}}else{ba.push(encodeURIComponent(S)+h+encodeURIComponent(W));
}}
if(ba.length>0){this.setData(ba.join(Q));
}}var bb=function(bf){var bk=C;
var bo=f;
var bi,bh,bg;
var bl,bm,bn,bj;
var i=0;

do{bi=bf.charCodeAt(i++);
bh=bf.charCodeAt(i++);
bg=bf.charCodeAt(i++);
bl=bi>>2;
bm=((bi&3)<<4)|(bh>>4);
bn=((bh&15)<<2)|(bg>>6);
bj=bg&63;

if(isNaN(bh)){bn=bj=64;
}else if(isNaN(bg)){bj=64;
}bo+=bk.charAt(bl)+bk.charAt(bm)+bk.charAt(bn)+bk.charAt(bj);
}while(i<bf.length);
return bo;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){V.open(R,X,Y);
V.setRequestHeader(z,u+bb(this.getUsername()+B+this.getPassword()));
}else{V.open(R,X,Y,this.getUsername(),this.getPassword());
}}else{V.open(R,X,Y);
}}catch(bE){this.error("Failed with exception: "+bE);
this.failed();
return;
}if(!qx.core.Variant.isSet(J,G)){V.setRequestHeader(t,window.location.href);
}var U=this.getRequestHeaders();

for(var S in U){V.setRequestHeader(S,U[S]);
}try{if(qx.core.Variant.isSet(p,o)){if(qx.core.Setting.get(n)){this.debug("Request: "+this.getData());
}}V.send(this.getData());
}catch(bN){if(T){this.failedLocally();
}else{this.error("Failed to send data: "+bN,"send");
this.failed();
}return;
}if(!Y){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===m){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case j:case g:case m:case O:if(qx.core.Variant.isSet(p,o)){if(qx.core.Setting.get(k)){this.warn("Ignore Ready State Change");
}}return;
}var bw=this.getReadyState();

if(bw==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bw,this.__qP)){if(this.getState()===P){this.setState(d);
}this.failed();
return;
}}while(this.__qQ<bw){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qQ]);
}}),getReadyState:function(){var a=null;

try{a=this.getRequest().readyState;
}catch(bz){}return a;
},setRequestHeader:function(br,bs){this.getRequestHeaders()[br]=bs;
},getResponseHeader:function(bG){var bH=null;

try{bH=this.getRequest().getResponseHeader(bG)||null;
}catch(bI){}return bH;
},getStringResponseHeaders:function(){var be=null;

try{var bd=this.getRequest().getAllResponseHeaders();

if(bd){be=bd;
}}catch(bt){}return be;
},getResponseHeaders:function(){var bL=this.getStringResponseHeaders();
var bM={};

if(bL){var bJ=bL.split(/[\r\n]+/g);

for(var i=0,l=bJ.length;i<l;i++){var bK=bJ[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bK){bM[bK[1]]=bK[2];
}}}return bM;
},getStatusCode:function(){var bO=-1;

try{bO=this.getRequest().status;
}catch(bu){}return bO;
},getStatusText:function(){var bF=f;

try{bF=this.getRequest().statusText;
}catch(bS){}return bF;
},getResponseText:function(){var b=null;

try{b=this.getRequest().responseText;
}catch(bq){b=null;
}return b;
},getResponseXml:function(){var bR=null;
var bP=this.getStatusCode();
var bQ=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bP,bQ,this.__qP)){try{bR=this.getRequest().responseXML;
}catch(bT){}}if(typeof bR==F&&bR!=null){if(!bR.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,f);
bR.loadXML(s);
}if(!bR.documentElement){throw new Error("Missing Document Element!");
}
if(bR.documentElement.tagName==E){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bR;
},getFetchedLength:function(){var bD=this.getResponseText();
return typeof bD==r?bD.length:0;
},getResponseContent:function(){var bA=this.getState();

if(bA!==j&&bA!=m){if(qx.core.Variant.isSet(p,o)){if(qx.core.Setting.get(k)){this.warn("Transfer not complete or failed, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(p,o)){if(qx.core.Setting.get(k)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var bC=this.getResponseText();

if(bA==m){if(qx.core.Variant.isSet(p,o)){if(qx.core.Setting.get(n)){this.debug("Failed: "+bC);
}}return bC;
}
switch(this.getResponseType()){case H:case K:if(qx.core.Variant.isSet(p,o)){if(qx.core.Setting.get(n)){this.debug("Response: "+bC);
}}return bC;
case L:if(qx.core.Variant.isSet(p,o)){if(qx.core.Setting.get(n)){this.debug("Response: "+bC);
}}
try{if(bC&&bC.length>0){var bB;

if(this.getParseJson()){bB=qx.util.Json.parse(bC,false);
bB=(bB===0?0:(bB||null));
}else{bB=bC;
}return bB;
}else{return null;
}}catch(bv){this.error("Could not execute json: ["+bC+"]",bv);
return A+bC+q;
}case x:if(qx.core.Variant.isSet(p,o)){if(qx.core.Setting.get(n)){this.debug("Response: "+bC);
}}
try{if(bC&&bC.length>0){var bB=window.eval(bC);
return (bB===0?0:(bB||null));
}else{return null;
}}catch(c){this.error("Could not execute javascript: ["+bC+"]",c);
return null;
}case N:bC=this.getResponseXml();

if(qx.core.Variant.isSet(p,o)){if(qx.core.Setting.get(n)){this.debug("Response: "+bC);
}}return (bC===0?0:(bC||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bx,by){if(qx.core.Variant.isSet(p,o)){if(qx.core.Setting.get(k)){this.debug("State: "+bx);
}}
switch(bx){case y:this.fireEvent(y);
break;
case P:this.fireEvent(P);
break;
case d:this.fireEvent(d);
break;
case I:this.fireEvent(I);
break;
case j:this.fireEvent(j);
break;
case m:this.fireEvent(m);
break;
case g:this.getRequest().abort();
this.fireEvent(g);
break;
case O:this.getRequest().abort();
this.fireEvent(O);
break;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,M);
},destruct:function(){var bp=this.getRequest();

if(bp){bp.onreadystatechange=qx.lang.Function.empty;
switch(bp.readyState){case 1:case 2:case 3:bp.abort();
}}this.__qR=null;
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.setType(this.getType());
g.setState(this.getState());
g.setStatusCode(this.getStatusCode());
g.setContent(this.getContent());
g.setResponseHeaders(this.getResponseHeaders());
return g;
},getResponseHeader:function(d){var e=this.getResponseHeaders();

if(e){return e[d]||null;
}return null;
}}});
})();
(function(){var bd="test",bc="",bb="^",ba="demobrowser.TreeDataHandler",Y="ttree",X="All",W="\\.[^\\.]+$",V=".",U="depth";
qx.Class.define(ba,{extend:qx.core.Object,construct:function(g){qx.core.Object.call(this);
this.tmap=g;
this.ttree=this.__KH(g);
},members:{__KH:function(E){var G=E;
function F(be,bf){var bi=bf.classname;
var bg=bi.split(".");
function bh(parent,bk){if(!bk.length){return parent;
}else{var bl=bk[0];
var bm=bk.slice(1,bk.length);
var bn=null;
var bo=null;
var bp=parent.getChildren();

for(var i=0;i<bp.length;i++){if(bp[i].label==bl){bo=bp[i];
break;
}}if(bo==null){bo=new demobrowser.Tree(bl);
parent.add(bo);
}bn=bh(bo,bm);
return bn;
}}var bj=bh(be,bg);

if(!bj){throw new Error("No target to insert tests");
}H.readTree(bf,bj);
}function I(a,b){return (a.classname<b.classname)?-1:(a.classname>b.classname)?1:0;
}var J=new demobrowser.Tree("All");
var H=this;
G.sort(I);

for(var i=0;i<G.length;i++){F(J,G[i]);
}return J;
},readTree:function(K,L){var N=arguments[1]||new demobrowser.Tree(K.classname);
var L;
function M(a,b){return (a.name<b.name)?-1:(a.name>b.name)?1:0;
}
if(K.tests){K.tests.sort(M);

for(var j=0;j<K.tests.length;j++){L=new demobrowser.Tree(K.tests[j].name);
L.tags=K.tests[j].tags;
L.type=bd;
L.desc=K.tests[j].desc;
L.manifest=K.tests[j].manifest;
N.add(L);
}}if(K.children&&K.children.length){for(var j=0;j<K.children.length;j++){var O=this.readTree(K.children[j]);
{};
N.add(O);
}}{};
return N;
},getRoot:function(){if(!this.Root){var d={classname:bc,tests:[]};
var c=this.tmap;

for(var i=0;i<this.tmap.length;i++){if(d.classname.length>c[i].classname.length){d=c[i];
}}this.Root=d;
}return this.Root.classname;
},getChilds:function(P){var Q=[];
var S=this.tmap;
var R=bb+P+W;
var T=new RegExp(R);

for(var i=0;i<S.length;i++){if(S[i].classname.match(T)){Q.push(S[i]);
}}return Q;
},getTests:function(q){var r=this.tmap;

for(var i=0;i<r.length;i++){if(r[i].classname==q){return r[i].tests;
}}return [];
},getPath:function(e){if(!e){return bc;
}var f=e.pwd();
f.shift();
if(this.isClass(e)){f=f.concat(e.label);
}return f;
},getChildren:function(h){if(h==X){var k=this.tmap;
var l=[];

for(var i=0;i<k.length;i++){l.push(k[i].classname);
}return l;
}else if(this.isClass(h)){return this.getTests(h);
}else{return [];
}},isClass:function(w){if(w.type&&w.type==bd){return false;
}else{return true;
}},hasTests:function(u){if(!this.isClass(u)){return false;
}else{var v=u.getChildren();

for(var i=0;i<v.length;i++){if(v[i].type&&v[i].type==bd){return true;
}}return false;
}},classFromTest:function(z){var A=bc;
var B=[];
classloop:
for(var i=0;i<this.tmap.length;i++){for(var j=0;j<this.tmap[i].tests.length;j++){if(this.tmap[i].tests[j]==z){A=this.tmap[i].classname;
break classloop;
}}}return A;
},getFullName:function(s){if(!s){return bc;
}var t=this.getPath(s);

if(s.type&&s.type==bd){t=t.concat(s.label);
}return t.join(V);
},getPreviousNode:function(C){var D=C.getPrevSibling();

if(D){return D;
}},getNextNode:function(x){var y=x.getNextSibling();

if(y){return y;
}},testCount:function(m){if(m.type&&m.type==bd){return 1;
}else{var n=0;
var p=m.getIterator(U);
var o;

while(o=p()){if(o.type&&o.type==bd){n++;
}}return n;
}}},destruct:function(){this.tmap=null;
this._disposeObjects(Y);
}});
})();
(function(){var k="depth",j="tags",h="",g="widgetLinkFlat",e="widgetLinkFull",d="parent",c="manifest",b="children",a="demobrowser.Tree";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.label=arguments[0]||h;
this.children=[];
this.tags=null;
this.parent=null;
this.manifest=null;
this.readme=null;
},members:{pwd:function(){if(this.parent==null){return [];
}else{return this.parent.pwd().concat(this.parent.label);
}},hasChildren:function(){return this.children.length;
},getChildren:function(){return this.children;
},map:function(x,y){var z=k;
var A=this;
var B=this.getIterator(z);

while(A=B()){x.apply(A,y);
}},print:function(){this.map(function(){this.debug(this.label);
},[]);
},getIterator:function(p){var r=[this];
var q=p==k?1:0;
function f(){var v;

if(r.length){v=r.shift();
var w=v.getChildren();

if(w.length){if(q){r=w.concat(r);
}else{r=r.concat(w);
}}}else{v=null;
}return v;
}return f;
},getPrevSibling:function(){return this.getSibling(-1);
},getNextSibling:function(){return this.getSibling(1);
},getSibling:function(l){var m=this.parent.getChildren();
var n=this.self(arguments).indexOf(m,this);
var o=n+l;

if(m[o]){return m[o];
}},add:function(u){this.children.push(u);
u.parent=this;
}},statics:{indexOf:function(s,t){for(var i=0;i<s.length;i++){if(s[i]==t){return i;
}}}},destruct:function(){this._disposeObjects(e,g,d);
this._disposeArray(b);
this._disposeArray(j);
this._disposeMap(c);
}});
})();
(function(){var f="mshtml",e="pop.push.reverse.shift.sort.splice.unshift.join.slice",d="number",c="qx.type.BaseArray",b="qx.client",a=".";
qx.Class.define(c,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function j(o){if(qx.core.Variant.isSet(b,f)){h.prototype={length:0,$$isArray:true};
var r=e.split(a);

for(var length=r.length;length;){h.prototype[r[--length]]=Array.prototype[r[length]];
}}var s=Array.prototype.slice;
h.prototype.concat=function(){var l=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var k;

if(arguments[i] instanceof h){k=s.call(arguments[i],0);
}else if(arguments[i] instanceof Array){k=arguments[i];
}else{k=[arguments[i]];
}l.push.apply(l,k);
}return l;
};
h.prototype.toString=function(){return s.call(this,0).toString();
};
h.prototype.toLocaleString=function(){return s.call(this,0).toLocaleString();
};
h.prototype.constructor=h;
h.prototype.indexOf=qx.lang.Core.arrayIndexOf;
h.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
h.prototype.forEach=qx.lang.Core.arrayForEach;
h.prototype.some=qx.lang.Core.arraySome;
h.prototype.every=qx.lang.Core.arrayEvery;
var p=qx.lang.Core.arrayFilter;
var q=qx.lang.Core.arrayMap;
h.prototype.filter=function(){var t=new this.constructor;
t.push.apply(t,p.apply(this,arguments));
return t;
};
h.prototype.map=function(){var u=new this.constructor;
u.push.apply(u,q.apply(this,arguments));
return u;
};
h.prototype.slice=function(){var m=new this.constructor;
m.push.apply(m,Array.prototype.slice.apply(this,arguments));
return m;
};
h.prototype.splice=function(){var n=new this.constructor;
n.push.apply(n,Array.prototype.splice.apply(this,arguments));
return n;
};
h.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
h.prototype.valueOf=function(){return this.length;
};
return h;
}function h(length){if(arguments.length===1&&typeof length===d){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function g(){}g.prototype=[];
h.prototype=new g;
h.prototype.length=0;
qx.type.BaseArray=j(h);
})();
})();
(function(){var b="",a="qx.util.StringBuilder";
qx.Class.define(a,{extend:qx.type.BaseArray,members:{clear:function(){this.length=0;
},get:function(){return this.join(b);
},add:null,isEmpty:function(){return this.length===0;
},size:function(){return this.join(b).length;
}},defer:function(c,d){d.add=d.push;
d.toString=d.get;
d.valueOf=d.get;
}});
})();
(function(){var l="</span>",k="sym",j="nl",h="qxkey",g="ws",f=">",e="qqstr",d="<",c="qstr",b="linecomment",bg="ident",bf="keyword",be="regexp",bd="&",bc="|",bb="fullcomment",ba="atom",Y="\\r\\n|\\r|\\n",X="\\s*\\)*",W="\\s",s="^",t='["][^"]*["]',q="real",r="\\s*[,\\)]",o="<span class='string'>",p="[a-zA-Z_][a-zA-Z0-9_]*\\b",m="<span class='comment'>",n="[+-]?\\d+",w="\\s*\\(*\\s*",x="&nbsp;",F="qx.dev.Tokenizer",D="\\t",M="\\s*\\)*\\s*\\)",H="\\.(?:replace)\\s*\\(\\s*\\(*\\s*",S="\\)*\\.(?:test|exec)\\s*\\(\\s*",Q="<span class='regexp'>",z="int",V="'>",U="<span class='",T="(?:\\/(?!\\*)[^\\t\\n\\r\\f\\v\\/]+?\\/[mgi]*)",y=".",B="\\s*\\)*\\s*?,?",C="[\\(,]\\s*",E="<span class='ident'>",G="g",I="[+-]?\\d+(([.]\\d+)*([eE][+-]?\\d+))?",N="\\/\\*(?:.|[\\n\\r])*?\\*\\/",R="\n",u="$",v="['][^']*[']",A="tab",L="\\/\\/.*?[\\n\\r$]",K="<br>",J=" ",P="(?::|=|\\?)\\s*\\(*\\s*",O="\\.(?:match|search|split)\\s*\\(\\s*\\(*\\s*";
qx.Class.define(F,{extend:qx.core.Object,statics:{tokenizeJavaScript:function(bh){var bL={"break":1,"case":1,"catch":1,"continue":1,"default":1,"delete":1,"do":1,"else":1,"finally":1,"for":1,"function":1,"if":1,"in":1,"instanceof":1,"new":1,"return":1,"switch":1,"throw":1,"try":1,"typeof":1,"var":1,"while":1,"with":1};
var bB={"void":1,"null":1,"true":1,"false":1,"NaN":1,"Infinity":1,"this":1};
var bx={"statics":1,"members":1,"construct":1,"destruct":1,"events":1,"properties":1,"extend":1,"implement":1};
var bt=function(bM){return new RegExp(s+bM+u);
};
var bE=L;
var bu=N;
var bo=p;
var bw=n;
var br=I;
var bz=t;
var by=v;
var bm=D;
var bH=Y;
var bJ=W;
var bs=T;
var bv=[O+bs+M,H+bs+B,w+bs+S,P+bs+X,C+bs+r].join(bc);
var bF=bt(bE);
var bp=bt(bu);
var bC=bt(bo);
var bl=bt(bw);
var bI=bt(br);
var bk=bt(bz);
var bj=bt(by);
var bD=bt(bm);
var bq=bt(bH);
var bi=bt(bJ);
var bn=bt(bv);
var bA=new RegExp([bE,bu,bo,bw,br,bz,by,by,bm,bH,bJ,bv,y].join(bc),G);
var bG=[];
var a=bh.match(bA);

for(var i=0;i<a.length;i++){var bK=a[i];

if(bK.match(bF)){bG.push({type:b,value:bK});
}else if(bK.match(bp)){bG.push({type:bb,value:bK});
}else if(bK.match(bn)){bG.push({type:be,value:bK});
}else if(bK.match(bj)){bG.push({type:c,value:bK});
}else if(bK.match(bk)){bG.push({type:e,value:bK});
}else if(bL[bK]){bG.push({type:bf,value:bK});
}else if(bB[bK]){bG.push({type:ba,value:bK});
}else if(bx[bK]){bG.push({type:h,value:bK});
}else if(bK.match(bC)){bG.push({type:bg,value:bK});
}else if(bK.match(bI)){bG.push({type:q,value:bK});
}else if(bK.match(bl)){bG.push({type:z,value:bK});
}else if(bK.match(bq)){bG.push({type:j,value:bK});
}else if(bK.match(bt(bi))){bG.push({type:g,value:bK});
}else if(bK.match(bD)){bG.push({type:A,value:bK});
}else if(bK==f){bG.push({type:k,value:f});
}else if(bK==d){bG.push({type:k,value:d});
}else if(bK==bd){bG.push({type:k,value:bd});
}else{bG.push({type:k,value:bK});
}}return bG;
},javaScriptToHtml:function(bN){var bR=qx.dev.Tokenizer.tokenizeJavaScript(bN);
var bQ=new qx.util.StringBuilder();

for(var i=0;i<bR.length;i++){var bS=bR[i];
var bP=qx.bom.String.escape(bS.value);

switch(bS.type){case be:bQ.add(Q,bP,l);
break;
case bg:bQ.add(E,bP,l);
break;
case b:case bb:bQ.add(m,bP,l);
break;
case c:case e:bQ.add(o,bP,l);
break;
case bf:case ba:case h:bQ.add(U,bS.type,V,bP,l);
break;
case j:var bO=qx.bom.client.Engine.MSHTML?K:R;
bQ.add(bO);
break;
case g:var bT=qx.bom.client.Engine.MSHTML?x:J;
bQ.add(bT);
break;
default:bQ.add(bP);
}}return bQ.get();
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
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var q="qx.debug",p="_applyStyle",o="on",n="",m="Color",l="px",k="solid",j="dotted",i="double",h="dashed",c="_applyWidth",g="qx.ui.decoration.Uniform",f="px ",b=" ",a="scale",e="PositiveInteger",d="absolute";
qx.Class.define(g,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(r,s,t){qx.ui.decoration.Abstract.call(this);
if(r!=null){this.setWidth(r);
}
if(s!=null){this.setStyle(s);
}
if(t!=null){this.setColor(t);
}},properties:{width:{check:e,init:0,apply:c},style:{nullable:true,check:[k,j,h,i],init:k,apply:p},color:{nullable:true,check:m,apply:p},backgroundColor:{check:m,nullable:true,apply:p}},members:{__sh:null,_getDefaultInsets:function(){var G=this.getWidth();
return {top:G,right:G,bottom:G,left:G};
},_isInitialized:function(){return !!this.__sh;
},getMarkup:function(){if(this.__sh){return this.__sh;
}var u={position:d,top:0,left:0};
var v=this.getWidth();

if(qx.core.Variant.isSet(q,o)){if(v===0){throw new Error("Invalid Uniform decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}var x=qx.theme.manager.Color.getInstance();
u.border=v+f+this.getStyle()+b+(x.resolve(this.getColor())||n);
var w=this._generateBackgroundMarkup(u);
return this.__sh=w;
},resize:function(y,z,A){var C=this.getBackgroundImage()&&this.getBackgroundRepeat()==a;

if(C||qx.bom.client.Feature.CONTENT_BOX){var B=this.getWidth()*2;
z-=B;
A-=B;
if(z<0){z=0;
}
if(A<0){A=0;
}}y.style.width=z+l;
y.style.height=A+l;
},tint:function(D,E){var F=qx.theme.manager.Color.getInstance();

if(E==null){E=this.getBackgroundColor();
}D.style.backgroundColor=F.resolve(E)||n;
},_applyWidth:function(){if(qx.core.Variant.isSet(q,o)){if(this.__sh){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(q,o)){if(this.__sh){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__sh=null;
}});
})();
(function(){var n="_applyStyle",m="solid",l="Color",k="",j="double",i="px",h="px ",g="dotted",f="_applyWidth",e="dashed",J="Number",I=" ",H="qx.debug",G="on",F="widthTop",E="styleRight",D="styleLeft",C="widthLeft",B="widthBottom",A="styleTop",u="colorBottom",v="styleBottom",s="widthRight",t="colorLeft",q="colorRight",r="colorTop",o="border-top",p="border-left",w="border-right",x="qx.ui.decoration.Single",z="border-bottom",y="absolute";
qx.Class.define(x,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(K,L,M){qx.ui.decoration.Abstract.call(this);
if(K!=null){this.setWidth(K);
}
if(L!=null){this.setStyle(L);
}
if(M!=null){this.setColor(M);
}},properties:{widthTop:{check:J,init:0,apply:f},widthRight:{check:J,init:0,apply:f},widthBottom:{check:J,init:0,apply:f},widthLeft:{check:J,init:0,apply:f},styleTop:{nullable:true,check:[m,g,e,j],init:m,apply:n},styleRight:{nullable:true,check:[m,g,e,j],init:m,apply:n},styleBottom:{nullable:true,check:[m,g,e,j],init:m,apply:n},styleLeft:{nullable:true,check:[m,g,e,j],init:m,apply:n},colorTop:{nullable:true,check:l,apply:n},colorRight:{nullable:true,check:l,apply:n},colorBottom:{nullable:true,check:l,apply:n},colorLeft:{nullable:true,check:l,apply:n},backgroundColor:{check:l,nullable:true,apply:n},left:{group:[C,D,t]},right:{group:[s,E,q]},top:{group:[F,A,r]},bottom:{group:[B,v,u]},width:{group:[F,s,B,C],shorthand:true},style:{group:[A,E,v,D],shorthand:true},color:{group:[r,q,u,t],shorthand:true}},members:{__sj:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__sj;
},getMarkup:function(N){if(this.__sj){return this.__sj;
}var O=qx.theme.manager.Color.getInstance();
var P={};
var R=this.getWidthTop();

if(R>0){P[o]=R+h+this.getStyleTop()+I+(O.resolve(this.getColorTop())||k);
}var R=this.getWidthRight();

if(R>0){P[w]=R+h+this.getStyleRight()+I+(O.resolve(this.getColorRight())||k);
}var R=this.getWidthBottom();

if(R>0){P[z]=R+h+this.getStyleBottom()+I+(O.resolve(this.getColorBottom())||k);
}var R=this.getWidthLeft();

if(R>0){P[p]=R+h+this.getStyleLeft()+I+(O.resolve(this.getColorLeft())||k);
}if(qx.core.Variant.isSet(H,G)){if(P.length===0){throw new Error("Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}P.position=y;
P.top=0;
P.left=0;
var Q=this._generateBackgroundMarkup(P);
return this.__sj=Q;
},resize:function(a,b,c){var d=this.getInsets();
b-=d.left+d.right;
c-=d.top+d.bottom;
if(b<0){b=0;
}
if(c<0){c=0;
}a.style.width=b+i;
a.style.height=c+i;
a.style.left=(parseInt(a.style.left)+d.left-this.getWidthLeft())+i;
a.style.top=(parseInt(a.style.top)+d.top-this.getWidthTop())+i;
},tint:function(S,T){var U=qx.theme.manager.Color.getInstance();

if(T==null){T=this.getBackgroundColor();
}S.style.backgroundColor=U.resolve(T)||k;
},_applyWidth:function(){if(qx.core.Variant.isSet(H,G)){if(this.__sj){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(H,G)){if(this.__sj){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__sj=null;
}});
})();
(function(){var r="Number",q="_applyInsets",p="-l",o="Please verify the image '",n="' is present.",m="-t",l="insetRight",k="insetTop",j="qx.debug",i="The value of the property 'topSlice' is null! ",c="The value of the property 'leftSlice' is null! ",h="_applyBaseImage",f="insetBottom",b="set",a="insetLeft",e="String",d="qx.ui.decoration.Grid",g="on";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(x,y){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__sk=new qx.ui.decoration.css3.BorderImage();

if(x){this.__sl(x);
}}else{this.__sk=new qx.ui.decoration.GridDiv(x);
}
if(y!=null){this.__sk.setInsets(y);
}},properties:{baseImage:{check:e,nullable:true,apply:h},insetLeft:{check:r,nullable:true,apply:q},insetRight:{check:r,nullable:true,apply:q},insetBottom:{check:r,nullable:true,apply:q},insetTop:{check:r,nullable:true,apply:q},insets:{group:[k,l,f,a],shorthand:true}},members:{__sk:null,getMarkup:function(){return this.__sk.getMarkup();
},resize:function(s,t,u){this.__sk.resize(s,t,u);
},tint:function(M,N){},getInsets:function(){return this.__sk.getInsets();
},_applyInsets:function(J,K,name){var L=b+qx.lang.String.firstUp(name);
this.__sk[L](J);
},_applyBaseImage:function(v,w){if(this.__sk instanceof qx.ui.decoration.GridDiv){this.__sk.setBaseImage(v);
}else{this.__sl(v);
}},__sl:function(z){this.__sk.setBorderImage(z);
var F=qx.util.AliasManager.getInstance().resolve(z);
var G=/(.*)(\.[a-z]+)$/.exec(F);
var C=G[1];
var E=G[2];
var A=qx.util.ResourceManager.getInstance();
var H=A.getImageHeight(C+m+E);
var I=A.getImageWidth(C+p+E);

if(qx.core.Variant.isSet(j,g)){var B=i+o+C+m+E+n;
var D=c+o+C+p+E+n;
qx.core.Assert.assertNotNull(H,B);
qx.core.Assert.assertNotNull(I,D);
}this.__sk.setSlice([H,I]);
}},destruct:function(){this.__sk=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",x='</div>',w="qx.ui.decoration.Beveled",v="qx.debug",u='<div style="position:absolute;top:1px;left:1px;',t='border-bottom:',s='border-right:',r='border-left:',q='border-top:',p="Number",o='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',n='<div style="overflow:hidden;font-size:0;line-height:0;">',k="on",l="absolute";
qx.Class.define(w,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(R,S,T){qx.ui.decoration.Abstract.call(this);
if(R!=null){this.setOuterColor(R);
}
if(S!=null){this.setInnerColor(S);
}
if(T!=null){this.setInnerOpacity(T);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:p,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__sm:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__sm;
},_applyStyle:function(){if(qx.core.Variant.isSet(v,k)){if(this.__sm){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},getMarkup:function(){if(this.__sm){return this.__sm;
}var y=qx.theme.manager.Color.getInstance();
var z=[];
var C=d+y.resolve(this.getOuterColor())+b;
var B=d+y.resolve(this.getInnerColor())+b;
z.push(n);
z.push(f);
z.push(e,C);
z.push(qx.bom.element.Opacity.compile(0.35));
z.push(i);
z.push(o);
z.push(r,C);
z.push(s,C);
z.push(i);
z.push(f);
z.push(m);
z.push(q,C);
z.push(t,C);
z.push(i);
var A={position:l,top:g,left:g};
z.push(this._generateBackgroundMarkup(A));
z.push(u);
z.push(e,B);
z.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
z.push(i);
z.push(x);
return this.__sm=z.join(c);
},resize:function(G,H,I){if(H<4){H=4;
}
if(I<4){I=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=H-2;
var outerHeight=I-2;
var O=outerWidth;
var N=outerHeight;
var innerWidth=H-4;
var innerHeight=I-4;
}else{var outerWidth=H;
var outerHeight=I;
var O=H-2;
var N=I-2;
var innerWidth=O;
var innerHeight=N;
}var Q=a;
var M=G.childNodes[0].style;
M.width=outerWidth+Q;
M.height=outerHeight+Q;
var L=G.childNodes[1].style;
L.width=outerWidth+Q;
L.height=N+Q;
var K=G.childNodes[2].style;
K.width=O+Q;
K.height=outerHeight+Q;
var J=G.childNodes[3].style;
J.width=O+Q;
J.height=N+Q;
var P=G.childNodes[4].style;
P.width=innerWidth+Q;
P.height=innerHeight+Q;
},tint:function(D,E){var F=qx.theme.manager.Color.getInstance();

if(E==null){E=this.getBackgroundColor();
}D.childNodes[3].style.backgroundColor=F.resolve(E)||c;
}},destruct:function(){this.__sm=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bs="decoration/table/header-cell.png",br="decoration/form/input.png",bq="#f8f8f8",bp="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bo="#b6b6b6",bn="background-pane",bm="repeat-y",bl="decoration/form/input-focused.png",bk="#33508D",bj="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="black",p="decoration/form/button-c.png",q="decoration/scrollbar/scrollbar-bg-vertical.png",n="decoration/form/button.png",o="decoration/form/button-checked.png",B="decoration/tabview/tab-button-left-inactive.png",C="decoration/groupbox/groupbox.png",O="#FAFAFA",K="decoration/pane/pane.png",W="dotted",R="decoration/toolbar/toolbar-part.gif",bf="decoration/tabview/tab-button-top-inactive.png",bc="decoration/menu/bar-background.png",G="center",bi="decoration/tabview/tab-button-bottom-active.png",bh="decoration/form/button-hovered.png",bg="decoration/form/tooltip-error-arrow.png",F="decoration/window/captionbar-inactive.png",I="qx/decoration/Modern",J="decoration/menu/background.png",M="decoration/window/statusbar.png",P="border-focused",S="table-focus-indicator",Y="#F2F2F2",be="decoration/form/button-checked-c.png",v="decoration/scrollbar/scrollbar-bg-horizontal.png",w="qx.theme.modern.Decoration",H="#f4f4f4",V="decoration/shadow/shadow-small.png",U="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",bb="decoration/form/tooltip-error.png",ba="decoration/form/button-focused.png",Q="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",a="decoration/tabview/tab-button-right-active.png",bd="decoration/form/button-pressed.png",x="no-repeat",y="decoration/window/captionbar-active.png",L="decoration/tabview/tab-button-left-active.png",b="background-splitpane",c="decoration/form/button-checked-focused.png",E="#C5C5C5",z="decoration/toolbar/toolbar-gradient.png",A="decoration/tabview/tab-button-right-inactive.png",D="#b8b8b8",N="decoration/shadow/shadow.png";
qx.Theme.define(w,{aliases:{decoration:I},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bj,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bj,backgroundRepeat:l,bottom:[2,m,bk]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bk]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:C}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:s,style:W}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bg,backgroundPositionY:G,backgroundRepeat:x,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:v,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:q,backgroundRepeat:bm}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:ba,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bh,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:o,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:c,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:P,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:z,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:p,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:be,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:D,colorRight:H,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:R,backgroundRepeat:bm}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bf}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bi}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Q}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:L}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:a}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:A}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bn,width:3,color:b,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bn,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:y}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:M}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:S,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthRight:1,colorRight:Y,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:E,widthBottom:1,colorBottom:O}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bc,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:l}}}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var eu="button-frame",et="atom",es="widget",er="main",eq="button",ep="text-selected",eo="image",en="bold",em="middle",el="background-light",cX="text-disabled",cW="groupbox",cV="decoration/arrows/down.png",cU="cell",cT="selected",cS="border-invalid",cR="input",cQ="input-disabled",cP="menu-button",cO="input-focused-invalid",eB="toolbar-button",eC="spinner",ez="input-focused",eA="popup",ex="tooltip",ey="label",ev="list",ew="white",eD="tree-item",eE="treevirtual-contract",dT="scrollbar",dS="datechooser/nav-button",dV="text-hovered",dU="center",dX="treevirtual-expand",dW="textfield",ea="decoration/arrows/right.png",dY="background-application",dR="radiobutton",dQ="invalid",V="combobox",W="right-top",X="checkbox",Y="text-title",ba="qx/static/blank.gif",bb="scrollbar/button",bc="right",bd="combobox/button",be="icon/16/places/folder.png",bf="text-label",eS="decoration/tree/closed.png",eR="scrollbar-slider-horizontal",eQ="decoration/arrows/left.png",eP="button-focused",eW="text-light",eV="menu-slidebar-button",eU="text-input",eT="slidebar/button-forward",eY="background-splitpane",eX=".png",bX="decoration/tree/open.png",bY="default",bV="decoration/arrows/down-small.png",bW="datechooser",cc="slidebar/button-backward",cd="selectbox",ca="treevirtual-folder",cb="shadow-popup",bT="icon/16/mimetypes/office-document.png",bU="background-medium",bz="table",by="decoration/arrows/up.png",bB="decoration/form/",bA="",bv="-invalid",bu="icon/16/places/folder-open.png",bx="button-checked",bw="decoration/window/maximize-active-hovered.png",bt="radiobutton-hovered",bs="decoration/cursors/",cj="slidebar",ck="tooltip-error-arrow",cl="table-scroller-focus-indicator",cm="move-frame",cf="nodrop",cg="decoration/table/boolean-true.png",ch="table-header-cell",ci="menu",cn="app-header",co="row-layer",bM="text-inactive",bL="move",bK="radiobutton-checked-focused",bJ="decoration/window/restore-active-hovered.png",bI="shadow-window",bH="table-column-button",bG="right.png",bF="tabview-page-button-bottom-inactive",bQ="tooltip-error",bP="window-statusbar",cp="button-hovered",cq="decoration/scrollbar/scrollbar-",cr="background-tip",cs="scrollbar-slider-horizontal-disabled",ct="table-scroller-header",cu="button-pressed",cv="table-pane",cw="decoration/window/close-active.png",cx="native",cy="checkbox-hovered",dg="button-invalid-shadow",df="checkbox-checked",de="decoration/window/minimize-active-hovered.png",dd="menubar",dk="icon/16/actions/dialog-cancel.png",dj="tabview-page-button-top-inactive",di="tabview-page-button-left-inactive",dh="menu-slidebar",dp="toolbar-button-checked",dn="decoration/tree/open-selected.png",dM="radiobutton-checked",dN="decoration/window/minimize-inactive.png",dK="icon/16/apps/office-calendar.png",dL="group",dI="tabview-page-button-right-inactive",dJ="decoration/window/minimize-active.png",dG="decoration/window/restore-inactive.png",dH="checkbox-checked-focused",dO="splitpane",dP="combobox/textfield",ee="button-preselected-focused",ed="decoration/window/close-active-hovered.png",eg="qx/icon/Tango/16/actions/window-close.png",ef="checkbox-pressed",ei="button-disabled",eh="selected-dragover",ek="border-separator",ej="decoration/window/maximize-inactive.png",ec="dragover",eb="scrollarea",eL="scrollbar-vertical",eM="decoration/menu/checkbox-invert.gif",eN="decoration/toolbar/toolbar-handle-knob.gif",eO="icon/22/mimetypes/office-document.png",eH="button-preselected",eI="button-checked-focused",eJ="up.png",eK="best-fit",eF="decoration/tree/closed-selected.png",eG="qx.theme.modern.Appearance",U="text-active",T="toolbar-button-hovered",S="progressive-table-header",R="decoration/table/select-column-order.png",Q="decoration/menu/radiobutton.gif",P="decoration/arrows/forward.png",O="decoration/table/descending.png",N="window-captionbar-active",M="checkbox-checked-hovered",L="scrollbar-slider-vertical",bi="toolbar",bj="alias",bg="decoration/window/restore-active.png",bh="decoration/table/boolean-false.png",bm="checkbox-checked-disabled",bn="icon/32/mimetypes/office-document.png",bk="radiobutton-checked-disabled",bl="tabview-pane",bp="decoration/arrows/rewind.png",bq="checkbox-focused",dt="top",dm="icon/16/actions/dialog-ok.png",dA="radiobutton-checked-hovered",dw="table-header-cell-hovered",db="window",cY="text-gray",bD="decoration/menu/radiobutton-invert.gif",dc="text-placeholder",bO="slider",bN="keep-align",cG="down.png",cH="tabview-page-button-top-active",cI="icon/32/places/folder-open.png",cJ="icon/22/places/folder.png",cK="decoration/window/maximize-active.png",cL="checkbox-checked-pressed",cM="decoration/window/close-inactive.png",cN="tabview-page-button-left-active",cE="toolbar-part",cF="decoration/splitpane/knob-vertical.png",da=".gif",dz="icon/22/places/folder-open.png",dy="radiobutton-checked-pressed",dx="table-statusbar",dE="radiobutton-pressed",dD="window-captionbar-inactive",dC="copy",dB="radiobutton-focused",dv="decoration/arrows/down-invert.png",du="decoration/menu/checkbox.gif",bo="decoration/splitpane/knob-horizontal.png",bS="icon/32/places/folder.png",bR="toolbar-separator",dl="tabview-page-button-bottom-active",ce="decoration/arrows/up-small.png",ds="decoration/table/ascending.png",dr="decoration/arrows/up-invert.png",dq="small",bC="tabview-page-button-right-active",dF="-disabled",br="scrollbar-horizontal",bE="progressive-table-header-cell",cz="menu-separator",cA="pane",cB="decoration/arrows/right-invert.png",cC="left.png",cD="icon/16/actions/view-refresh.png";
qx.Theme.define(eG,{appearances:{"widget":{},"root":{style:function(hO){return {backgroundColor:dY,textColor:bf,font:bY};
}},"label":{style:function(ga){return {textColor:ga.disabled?cX:undefined};
}},"move-frame":{style:function(g){return {decorator:er};
}},"resize-frame":cm,"dragdrop-cursor":{style:function(hq){var hr=cf;

if(hq.copy){hr=dC;
}else if(hq.move){hr=bL;
}else if(hq.alias){hr=bj;
}return {source:bs+hr+da,position:W,offset:[2,16,2,6]};
}},"image":{style:function(o){return {opacity:!o.replacement&&o.disabled?0.3:1};
}},"atom":{},"atom/label":ey,"atom/icon":eo,"popup":{style:function(gu){return {decorator:er,backgroundColor:el,shadow:cb};
}},"button-frame":{alias:et,style:function(hB){var hD,hC;

if(hB.checked&&hB.focused&&!hB.inner){hD=eI;
hC=undefined;
}else if(hB.disabled){hD=ei;
hC=undefined;
}else if(hB.pressed){hD=cu;
hC=dV;
}else if(hB.checked){hD=bx;
hC=undefined;
}else if(hB.hovered){hD=cp;
hC=dV;
}else if(hB.preselected&&hB.focused&&!hB.inner){hD=ee;
hC=dV;
}else if(hB.preselected){hD=eH;
hC=dV;
}else if(hB.focused&&!hB.inner){hD=eP;
hC=undefined;
}else{hD=eq;
hC=undefined;
}return {decorator:hD,textColor:hC,shadow:hB.invalid&&!hB.disabled?dg:undefined};
}},"button-frame/image":{style:function(ho){return {opacity:!ho.replacement&&ho.disabled?0.5:1};
}},"button":{alias:eu,include:eu,style:function(hP){return {padding:[2,8],center:true};
}},"hover-button":{alias:et,include:et,style:function(fs){return {decorator:fs.hovered?cT:undefined,textColor:fs.hovered?ep:undefined};
}},"splitbutton":{},"splitbutton/button":eq,"splitbutton/arrow":{alias:eq,include:eq,style:function(fj){return {icon:cV,padding:2,marginLeft:1};
}},"checkbox":{alias:et,style:function(hQ){var hS;

if(hQ.checked&&hQ.focused){hS=dH;
}else if(hQ.checked&&hQ.disabled){hS=bm;
}else if(hQ.checked&&hQ.pressed){hS=cL;
}else if(hQ.checked&&hQ.hovered){hS=M;
}else if(hQ.checked){hS=df;
}else if(hQ.focused){hS=bq;
}else if(hQ.pressed){hS=ef;
}else if(hQ.hovered){hS=cy;
}else{hS=X;
}var hR=hQ.invalid&&!hQ.disabled?bv:bA;
return {icon:bB+hS+hR+eX,gap:6};
}},"radiobutton":{alias:et,style:function(fJ){var fL;

if(fJ.checked&&fJ.focused){fL=bK;
}else if(fJ.checked&&fJ.disabled){fL=bk;
}else if(fJ.checked&&fJ.pressed){fL=dy;
}else if(fJ.checked&&fJ.hovered){fL=dA;
}else if(fJ.checked){fL=dM;
}else if(fJ.focused){fL=dB;
}else if(fJ.pressed){fL=dE;
}else if(fJ.hovered){fL=bt;
}else{fL=dR;
}var fK=fJ.invalid&&!fJ.disabled?bv:bA;
return {icon:bB+fL+fK+eX,gap:6};
}},"textfield":{style:function(D){var I;
var G=!!D.focused;
var H=!!D.invalid;
var E=!!D.disabled;

if(G&&H&&!E){I=cO;
}else if(G&&!H&&!E){I=ez;
}else if(E){I=cQ;
}else if(!G&&H&&!E){I=cS;
}else{I=cR;
}var F;

if(D.disabled){F=cX;
}else if(D.showingPlaceholder){F=dc;
}else{F=eU;
}return {decorator:I,padding:[2,4,1],textColor:F};
}},"textarea":{include:dW,style:function(gy){return {padding:4};
}},"spinner":{style:function(q){var u;
var s=!!q.focused;
var t=!!q.invalid;
var r=!!q.disabled;

if(s&&t&&!r){u=cO;
}else if(s&&!t&&!r){u=ez;
}else if(r){u=cQ;
}else if(!s&&t&&!r){u=cS;
}else{u=cR;
}return {decorator:u};
}},"spinner/textfield":{style:function(fm){return {marginRight:2,padding:[2,4,1],textColor:fm.disabled?cX:eU};
}},"spinner/upbutton":{alias:eu,include:eu,style:function(B){return {icon:ce,padding:B.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:eu,include:eu,style:function(gi){return {icon:bV,padding:gi.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":V,"datefield/button":{alias:bd,include:bd,style:function(hf){return {icon:dK,padding:[0,3],decorator:undefined};
}},"datefield/textfield":dP,"datefield/list":{alias:bW,include:bW,style:function(hH){return {decorator:undefined};
}},"groupbox":{style:function(gB){return {legendPosition:dt};
}},"groupbox/legend":{alias:et,style:function(hg){return {padding:[1,0,1,4],textColor:hg.invalid?dQ:Y,font:en};
}},"groupbox/frame":{style:function(w){return {padding:12,decorator:dL};
}},"check-groupbox":cW,"check-groupbox/legend":{alias:X,include:X,style:function(m){return {padding:[1,0,1,4],textColor:m.invalid?dQ:Y,font:en};
}},"radio-groupbox":cW,"radio-groupbox/legend":{alias:dR,include:dR,style:function(gh){return {padding:[1,0,1,4],textColor:gh.invalid?dQ:Y,font:en};
}},"scrollarea":{style:function(hT){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(hY){return {backgroundColor:dY};
}},"scrollarea/pane":es,"scrollarea/scrollbar-x":dT,"scrollarea/scrollbar-y":dT,"scrollbar":{style:function(gf){if(gf[cx]){return {};
}return {width:gf.horizontal?undefined:16,height:gf.horizontal?16:undefined,decorator:gf.horizontal?br:eL,padding:1};
}},"scrollbar/slider":{alias:bO,style:function(fV){return {padding:fV.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:eu,style:function(fx){var fy=fx.horizontal?eR:L;

if(fx.disabled){fy+=dF;
}return {decorator:fy,minHeight:fx.horizontal?undefined:9,minWidth:fx.horizontal?9:undefined};
}},"scrollbar/button":{alias:eu,include:eu,style:function(b){var c=cq;

if(b.left){c+=cC;
}else if(b.right){c+=bG;
}else if(b.up){c+=eJ;
}else{c+=cG;
}
if(b.left||b.right){return {padding:[0,0,0,b.left?3:4],icon:c,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:c,width:14,height:15};
}}},"scrollbar/button-begin":bb,"scrollbar/button-end":bb,"slider":{style:function(gn){var gr;
var gp=!!gn.focused;
var gq=!!gn.invalid;
var go=!!gn.disabled;

if(gp&&gq&&!go){gr=cO;
}else if(gp&&!gq&&!go){gr=ez;
}else if(go){gr=cQ;
}else if(!gp&&gq&&!go){gr=cS;
}else{gr=cR;
}return {decorator:gr};
}},"slider/knob":{include:eu,style:function(hF){return {decorator:hF.disabled?cs:eR,shadow:undefined,height:14,width:14};
}},"list":{alias:eb,style:function(hh){var hl;
var hj=!!hh.focused;
var hk=!!hh.invalid;
var hi=!!hh.disabled;

if(hj&&hk&&!hi){hl=cO;
}else if(hj&&!hk&&!hi){hl=ez;
}else if(hi){hl=cQ;
}else if(!hj&&hk&&!hi){hl=cS;
}else{hl=cR;
}return {backgroundColor:el,decorator:hl};
}},"list/pane":es,"listitem":{alias:et,style:function(ic){var id;

if(ic.dragover){id=ic.selected?eh:ec;
}else{id=ic.selected?cT:undefined;
}return {padding:ic.dragover?[4,4,2,4]:4,textColor:ic.selected?ep:undefined,decorator:id};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:eu,include:eu,style:function(ht){return {padding:5,center:true,icon:ht.vertical?cV:ea};
}},"slidebar/button-backward":{alias:eu,include:eu,style:function(fG){return {padding:5,center:true,icon:fG.vertical?by:eQ};
}},"tabview":{style:function(hJ){return {contentPadding:16};
}},"tabview/bar":{alias:cj,style:function(hm){var hn={marginBottom:hm.barTop?-1:0,marginTop:hm.barBottom?-4:0,marginLeft:hm.barRight?-3:0,marginRight:hm.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(hm.barTop||hm.barBottom){hn.paddingLeft=5;
hn.paddingRight=7;
}else{hn.paddingTop=5;
hn.paddingBottom=7;
}return hn;
}},"tabview/bar/button-forward":{include:eT,alias:eT,style:function(A){if(A.barTop||A.barBottom){return {marginTop:2,marginBottom:2,marginLeft:0,marginRight:0};
}else{return {marginLeft:2,marginRight:2,marginTop:0,marginBottom:0};
}}},"tabview/bar/button-backward":{include:cc,alias:cc,style:function(J){if(J.barTop||J.barBottom){return {marginTop:2,marginBottom:2,marginLeft:0,marginRight:0};
}else{return {marginLeft:2,marginRight:2,marginTop:0,marginBottom:0};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(fv){return {decorator:bl,minHeight:100,marginBottom:fv.barBottom?-1:0,marginTop:fv.barTop?-1:0,marginLeft:fv.barLeft?-1:0,marginRight:fv.barRight?-1:0};
}},"tabview-page":es,"tabview-page/button":{alias:et,style:function(gT){var ha,gV=0;
var gY=0,gU=0,gW=0,gX=0;

if(gT.checked){if(gT.barTop){ha=cH;
gV=[6,14];
gW=gT.firstTab?0:-5;
gX=gT.lastTab?0:-5;
}else if(gT.barBottom){ha=dl;
gV=[6,14];
gW=gT.firstTab?0:-5;
gX=gT.lastTab?0:-5;
}else if(gT.barRight){ha=bC;
gV=[6,13];
gY=gT.firstTab?0:-5;
gU=gT.lastTab?0:-5;
}else{ha=cN;
gV=[6,13];
gY=gT.firstTab?0:-5;
gU=gT.lastTab?0:-5;
}}else{if(gT.barTop){ha=dj;
gV=[4,10];
gY=4;
gW=gT.firstTab?5:1;
gX=1;
}else if(gT.barBottom){ha=bF;
gV=[4,10];
gU=4;
gW=gT.firstTab?5:1;
gX=1;
}else if(gT.barRight){ha=dI;
gV=[4,10];
gX=5;
gY=gT.firstTab?5:1;
gU=1;
gW=1;
}else{ha=di;
gV=[4,10];
gW=5;
gY=gT.firstTab?5:1;
gU=1;
gX=1;
}}return {zIndex:gT.checked?10:5,decorator:ha,padding:gV,marginTop:gY,marginBottom:gU,marginLeft:gW,marginRight:gX,textColor:gT.checked?U:bM};
}},"tabview-page/button/label":{alias:ey,style:function(hd){return {padding:[0,1,0,1]};
}},"tabview-page/button/close-button":{alias:et,style:function(gj){return {icon:eg};
}},"toolbar":{style:function(gw){return {decorator:bi,spacing:2};
}},"toolbar/part":{style:function(fn){return {decorator:cE,spacing:2};
}},"toolbar/part/container":{style:function(gI){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(hM){return {source:eN,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:et,style:function(gx){return {marginTop:2,marginBottom:2,padding:(gx.pressed||gx.checked||gx.hovered)&&!gx.disabled||(gx.disabled&&gx.checked)?3:5,decorator:gx.pressed||(gx.checked&&!gx.hovered)||(gx.checked&&gx.disabled)?dp:gx.hovered&&!gx.disabled?T:undefined};
}},"toolbar-menubutton":{alias:eB,include:eB,style:function(fY){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:eo,include:eo,style:function(gM){return {source:bV};
}},"toolbar-splitbutton":{style:function(fB){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:eB,include:eB,style:function(e){return {icon:cV,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:eB,include:eB,style:function(hV){return {padding:hV.pressed||hV.checked?1:hV.hovered?1:3,icon:cV,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(gJ){return {decorator:bR,margin:7};
}},"tree":ev,"tree-item":{style:function(hK){return {padding:[2,6],textColor:hK.selected?ep:undefined,decorator:hK.selected?cT:undefined};
}},"tree-item/icon":{include:eo,style:function(K){return {paddingRight:5};
}},"tree-item/label":ey,"tree-item/open":{include:eo,style:function(fp){var fq;

if(fp.selected&&fp.opened){fq=dn;
}else if(fp.selected&&!fp.opened){fq=eF;
}else if(fp.opened){fq=bX;
}else{fq=eS;
}return {padding:[0,5,0,2],source:fq};
}},"tree-folder":{include:eD,alias:eD,style:function(gs){var gt;

if(gs.small){gt=gs.opened?bu:be;
}else if(gs.large){gt=gs.opened?cI:bS;
}else{gt=gs.opened?dz:cJ;
}return {icon:gt};
}},"tree-file":{include:eD,alias:eD,style:function(p){return {icon:p.small?bT:p.large?bn:eO};
}},"treevirtual":bz,"treevirtual-folder":{style:function(fd){return {icon:fd.opened?bu:be};
}},"treevirtual-file":{include:ca,alias:ca,style:function(hL){return {icon:bT};
}},"treevirtual-line":{style:function(hc){return {icon:ba};
}},"treevirtual-contract":{style:function(fD){return {icon:bX,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(fg){return {icon:eS,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":eE,"treevirtual-only-expand":dX,"treevirtual-start-contract":eE,"treevirtual-start-expand":dX,"treevirtual-end-contract":eE,"treevirtual-end-expand":dX,"treevirtual-cross-contract":eE,"treevirtual-cross-expand":dX,"treevirtual-end":{style:function(fU){return {icon:ba};
}},"treevirtual-cross":{style:function(z){return {icon:ba};
}},"tooltip":{include:eA,style:function(fW){return {backgroundColor:cr,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":et,"tooltip-error":{include:ex,style:function(k){return {textColor:ep,placeMethod:es,offset:[0,0,0,14],marginTop:-2,position:W,showTimeout:100,hideTimeout:10000,decorator:bQ,shadow:ck,font:en};
}},"tooltip-error/atom":et,"window":{style:function(fC){return {shadow:bI,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(gS){return {decorator:db};
}},"window/captionbar":{style:function(n){return {decorator:n.active?N:dD,textColor:n.active?ew:cY,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(fI){return {margin:[5,0,3,6]};
}},"window/title":{style:function(h){return {alignY:em,font:en,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:et,style:function(gg){return {icon:gg.active?gg.hovered?de:dJ:dN,margin:[4,8,2,0]};
}},"window/restore-button":{alias:et,style:function(i){return {icon:i.active?i.hovered?bJ:bg:dG,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:et,style:function(ia){return {icon:ia.active?ia.hovered?bw:cK:ej,margin:[4,8,2,0]};
}},"window/close-button":{alias:et,style:function(fS){return {icon:fS.active?fS.hovered?ed:cw:cM,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(gN){return {padding:[2,6],decorator:bP,minHeight:18};
}},"window/statusbar-text":{style:function(l){return {font:dq};
}},"iframe":{style:function(gd){return {decorator:er};
}},"resizer":{style:function(fe){return {decorator:cA};
}},"splitpane":{style:function(fX){return {decorator:dO};
}},"splitpane/splitter":{style:function(fh){return {width:fh.horizontal?3:undefined,height:fh.vertical?3:undefined,backgroundColor:eY};
}},"splitpane/splitter/knob":{style:function(fz){return {source:fz.horizontal?bo:cF};
}},"splitpane/slider":{style:function(gK){return {width:gK.horizontal?3:undefined,height:gK.vertical?3:undefined,backgroundColor:eY};
}},"selectbox":{alias:eu,include:eu,style:function(fM){return {padding:[2,8]};
}},"selectbox/atom":et,"selectbox/popup":eA,"selectbox/list":{alias:ev},"selectbox/arrow":{include:eo,style:function(gA){return {source:cV,paddingLeft:5};
}},"datechooser":{style:function(hw){var hA;
var hy=!!hw.focused;
var hz=!!hw.invalid;
var hx=!!hw.disabled;

if(hy&&hz&&!hx){hA=cO;
}else if(hy&&!hz&&!hx){hA=ez;
}else if(hx){hA=cQ;
}else if(!hy&&hz&&!hx){hA=cS;
}else{hA=cR;
}return {padding:2,decorator:hA,backgroundColor:el};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:eu,alias:eu,style:function(gk){var gl={padding:[2,4],shadow:undefined};

if(gk.lastYear){gl.icon=bp;
gl.marginRight=1;
}else if(gk.lastMonth){gl.icon=eQ;
}else if(gk.nextYear){gl.icon=P;
gl.marginLeft=1;
}else if(gk.nextMonth){gl.icon=ea;
}return gl;
}},"datechooser/last-year-button-tooltip":ex,"datechooser/last-month-button-tooltip":ex,"datechooser/next-year-button-tooltip":ex,"datechooser/next-month-button-tooltip":ex,"datechooser/last-year-button":dS,"datechooser/last-month-button":dS,"datechooser/next-month-button":dS,"datechooser/next-year-button":dS,"datechooser/month-year-label":{style:function(gz){return {font:en,textAlign:dU,textColor:gz.disabled?cX:undefined};
}},"datechooser/date-pane":{style:function(fw){return {textColor:fw.disabled?cX:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(fA){return {textColor:fA.disabled?cX:fA.weekend?eW:undefined,textAlign:dU,paddingTop:2,backgroundColor:bU};
}},"datechooser/week":{style:function(fT){return {textAlign:dU,padding:[2,4],backgroundColor:bU};
}},"datechooser/day":{style:function(ib){return {textAlign:dU,decorator:ib.disabled?undefined:ib.selected?cT:undefined,textColor:ib.disabled?cX:ib.selected?ep:ib.otherMonth?eW:undefined,font:ib.today?en:undefined,padding:[2,4]};
}},"combobox":{style:function(gC){var gG;
var gE=!!gC.focused;
var gF=!!gC.invalid;
var gD=!!gC.disabled;

if(gE&&gF&&!gD){gG=cO;
}else if(gE&&!gF&&!gD){gG=ez;
}else if(gD){gG=cQ;
}else if(!gE&&gF&&!gD){gG=cS;
}else{gG=cR;
}return {decorator:gG};
}},"combobox/popup":eA,"combobox/list":{alias:ev},"combobox/button":{include:eu,alias:eu,style:function(hu){var hv={icon:cV,padding:2};

if(hu.selected){hv.decorator=eP;
}return hv;
}},"combobox/textfield":{include:dW,style:function(gv){return {decorator:undefined};
}},"menu":{style:function(hW){var hX={decorator:ci,shadow:cb,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:hW.submenu||hW.contextmenu?eK:bN};

if(hW.submenu){hX.position=W;
hX.offset=[-2,-3];
}return hX;
}},"menu/slidebar":dh,"menu-slidebar":es,"menu-slidebar-button":{style:function(hU){return {decorator:hU.hovered?cT:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:eV,style:function(gR){return {icon:gR.hovered?dr:by};
}},"menu-slidebar/button-forward":{include:eV,style:function(hp){return {icon:hp.hovered?dv:cV};
}},"menu-separator":{style:function(gc){return {height:0,decorator:cz,margin:[4,2]};
}},"menu-button":{alias:et,style:function(fa){return {decorator:fa.selected?cT:undefined,textColor:fa.selected?ep:undefined,padding:[4,6]};
}},"menu-button/icon":{include:eo,style:function(fP){return {alignY:em};
}},"menu-button/label":{include:ey,style:function(gm){return {alignY:em,padding:1};
}},"menu-button/shortcut":{include:ey,style:function(hE){return {alignY:em,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:eo,style:function(hs){return {source:hs.selected?cB:ea,alignY:em};
}},"menu-checkbox":{alias:cP,include:cP,style:function(fO){return {icon:!fO.checked?undefined:fO.selected?eM:du};
}},"menu-radiobutton":{alias:cP,include:cP,style:function(fi){return {icon:!fi.checked?undefined:fi.selected?bD:Q};
}},"menubar":{style:function(fc){return {decorator:dd};
}},"menubar-button":{alias:et,style:function(fR){return {decorator:fR.pressed||fR.hovered?cT:undefined,textColor:fR.pressed||fR.hovered?ep:undefined,padding:[3,8]};
}},"colorselector":es,"colorselector/control-bar":es,"colorselector/control-pane":es,"colorselector/visual-pane":cW,"colorselector/preset-grid":es,"colorselector/colorbucket":{style:function(j){return {decorator:er,width:16,height:16};
}},"colorselector/preset-field-set":cW,"colorselector/input-field-set":cW,"colorselector/preview-field-set":cW,"colorselector/hex-field-composite":es,"colorselector/hex-field":dW,"colorselector/rgb-spinner-composite":es,"colorselector/rgb-spinner-red":eC,"colorselector/rgb-spinner-green":eC,"colorselector/rgb-spinner-blue":eC,"colorselector/hsb-spinner-composite":es,"colorselector/hsb-spinner-hue":eC,"colorselector/hsb-spinner-saturation":eC,"colorselector/hsb-spinner-brightness":eC,"colorselector/preview-content-old":{style:function(fN){return {decorator:er,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(hI){return {decorator:er,backgroundColor:el,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(fF){return {decorator:er,margin:5};
}},"colorselector/brightness-field":{style:function(fE){return {decorator:er,margin:[5,7]};
}},"colorselector/hue-saturation-pane":es,"colorselector/hue-saturation-handle":es,"colorselector/brightness-pane":es,"colorselector/brightness-handle":es,"colorpopup":{alias:eA,include:eA,style:function(a){return {padding:5,backgroundColor:dY};
}},"colorpopup/field":{style:function(d){return {decorator:er,margin:2,width:14,height:14,backgroundColor:el};
}},"colorpopup/selector-button":eq,"colorpopup/auto-button":eq,"colorpopup/preview-pane":cW,"colorpopup/current-preview":{style:function(gb){return {height:20,padding:4,marginLeft:4,decorator:er,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(gP){return {height:20,padding:4,marginRight:4,decorator:er,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:eq,include:eq,style:function(hN){return {icon:dm};
}},"colorpopup/colorselector-cancelbutton":{alias:eq,include:eq,style:function(fr){return {icon:dk};
}},"table":{alias:es,style:function(fk){return {decorator:bz};
}},"table-header":{},"table/statusbar":{style:function(fH){return {decorator:dx,padding:[0,2]};
}},"table/column-button":{alias:eu,style:function(C){return {decorator:bH,padding:3,icon:R};
}},"table-column-reset-button":{include:cP,alias:cP,style:function(){return {icon:cD};
}},"table-scroller":es,"table-scroller/scrollbar-x":dT,"table-scroller/scrollbar-y":dT,"table-scroller/header":{style:function(ff){return {decorator:ct};
}},"table-scroller/pane":{style:function(fo){return {backgroundColor:cv};
}},"table-scroller/focus-indicator":{style:function(gH){return {decorator:cl};
}},"table-scroller/resize-line":{style:function(y){return {backgroundColor:ek,width:2};
}},"table-header-cell":{alias:et,style:function(gO){return {minWidth:13,minHeight:20,padding:gO.hovered?[3,4,2,4]:[3,4],decorator:gO.hovered?dw:ch,sortIcon:gO.sorted?(gO.sortedAscending?ds:O):undefined};
}},"table-header-cell/label":{style:function(fu){return {minWidth:0,alignY:em,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(ge){return {alignY:em,alignX:bc};
}},"table-header-cell/icon":{style:function(hG){return {minWidth:0,alignY:em,paddingRight:5};
}},"table-editor-textfield":{include:dW,style:function(f){return {decorator:undefined,padding:[2,2],backgroundColor:el};
}},"table-editor-selectbox":{include:cd,alias:cd,style:function(gQ){return {padding:[0,2],backgroundColor:el};
}},"table-editor-combobox":{include:V,alias:V,style:function(ft){return {decorator:undefined,backgroundColor:el};
}},"progressive-table-header":{alias:es,style:function(gL){return {decorator:S};
}},"progressive-table-header-cell":{alias:et,style:function(fQ){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:bE};
}},"app-header":{style:function(v){return {font:en,textColor:ep,padding:[8,12],decorator:cn};
}},"virtual-list":ev,"virtual-list/row-layer":co,"row-layer":{style:function(fl){return {colorEven:ew,colorOdd:ew};
}},"column-layer":es,"cell":{style:function(fb){return {textColor:fb.selected?ep:bf,padding:[3,6],font:bY};
}},"cell-string":cU,"cell-number":{include:cU,style:function(x){return {textAlign:bc};
}},"cell-image":cU,"cell-boolean":{include:cU,style:function(he){return {iconTrue:cg,iconFalse:bh};
}},"cell-atom":cU,"cell-date":cU,"cell-html":cU,"htmlarea":{"include":es,style:function(hb){return {backgroundColor:ew};
}}}});
})();
(function(){var d="tree",c="main",b="Demo browser",a="demobrowser.Appearance";
qx.Theme.define(a,{extend:qx.theme.modern.Appearance,title:b,appearances:{"demo-tree":{alias:d,include:d,style:function(){return {width:270,decorator:c};
}}}});
})();
(function(){var b="demobrowser.Theme",a="Demo browser";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,icon:qx.theme.icon.Tango,appearance:demobrowser.Appearance}});
})();
(function(){var l="_applyStyle",k="stretch",j="Integer",i="px",h=" ",g="repeat",f="round",e="px ",d="sliceBottom",c=";'></div>",B="<div style='",A="qx.debug",z="sliceLeft",y="sliceRight",x="repeatX",w="String",v="qx.ui.decoration.css3.BorderImage",u="border-box",t="",s='") ',q="sliceTop",r='url("',o="hidden",p="on",m="repeatY",n="absolute";
qx.Class.define(v,{extend:qx.ui.decoration.Abstract,construct:function(a,b){qx.ui.decoration.Abstract.call(this);
if(a!=null){this.setBorderImage(a);
}
if(b!=null){this.setSlice(b);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:w,nullable:true,apply:l},sliceTop:{check:j,init:0,apply:l},sliceRight:{check:j,init:0,apply:l},sliceBottom:{check:j,init:0,apply:l},sliceLeft:{check:j,init:0,apply:l},slice:{group:[q,y,d,z],shorthand:true},repeatX:{check:[k,g,f],init:k,apply:l},repeatY:{check:[k,g,f],init:k,apply:l},repeat:{group:[x,m],shorthand:true}},members:{__sn:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__sn;
},getMarkup:function(){if(this.__sn){return this.__sn;
}var D=this._resolveImageUrl(this.getBorderImage());
var E=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var F=[this.getRepeatX(),this.getRepeatY()].join(h);
this.__sn=[B,qx.bom.element.Style.compile({"borderImage":r+D+s+E.join(h)+h+F,position:n,lineHeight:0,fontSize:0,overflow:o,boxSizing:u,borderWidth:E.join(e)+i}),c].join(t);
return this.__sn;
},resize:function(I,J,K){I.style.width=J+i;
I.style.height=K+i;
},tint:function(G,H){},_applyStyle:function(){if(qx.core.Variant.isSet(A,p)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},_resolveImageUrl:function(C){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(C));
}},destruct:function(){this.__sn=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",b='</div>',a="scale",z="qx.client",y="-br",x="-t",w="-tl",v="-r",u='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',t="qx.debug",s="_applyBaseImage",r="-b",q="String",o="",p="-bl",m="qx.ui.decoration.GridDiv",n="-c",k="mshtml",l="on";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,construct:function(G,H){qx.ui.decoration.Abstract.call(this);
if(G!=null){this.setBaseImage(G);
}
if(H!=null){this.setInsets(H);
}},properties:{baseImage:{check:q,nullable:true,apply:s}},members:{__so:null,__sp:null,__sq:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__so;
},getMarkup:function(){if(this.__so){return this.__so;
}var C=qx.bom.element.Decoration;
var D=this.__sp;
var E=this.__sq;
var F=[];
F.push(u);
F.push(C.create(D.tl,g,{top:0,left:0}));
F.push(C.create(D.t,f,{top:0,left:E.left+j}));
F.push(C.create(D.tr,g,{top:0,right:0}));
F.push(C.create(D.bl,g,{bottom:0,left:0}));
F.push(C.create(D.b,f,{bottom:0,left:E.left+j}));
F.push(C.create(D.br,g,{bottom:0,right:0}));
F.push(C.create(D.l,e,{top:E.top+j,left:0}));
F.push(C.create(D.c,a,{top:E.top+j,left:E.left+j}));
F.push(C.create(D.r,e,{top:E.top+j,right:0}));
F.push(b);
return this.__so=F.join(o);
},resize:function(S,T,U){var V=this.__sq;
var innerWidth=T-V.left-V.right;
var innerHeight=U-V.top-V.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}S.style.width=T+j;
S.style.height=U+j;
S.childNodes[1].style.width=innerWidth+j;
S.childNodes[4].style.width=innerWidth+j;
S.childNodes[7].style.width=innerWidth+j;
S.childNodes[6].style.height=innerHeight+j;
S.childNodes[7].style.height=innerHeight+j;
S.childNodes[8].style.height=innerHeight+j;

if(qx.core.Variant.isSet(z,k)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(T%2==1){S.childNodes[2].style.marginRight=h;
S.childNodes[5].style.marginRight=h;
S.childNodes[8].style.marginRight=h;
}else{S.childNodes[2].style.marginRight=i;
S.childNodes[5].style.marginRight=i;
S.childNodes[8].style.marginRight=i;
}
if(U%2==1){S.childNodes[3].style.marginBottom=h;
S.childNodes[4].style.marginBottom=h;
S.childNodes[5].style.marginBottom=h;
}else{S.childNodes[3].style.marginBottom=i;
S.childNodes[4].style.marginBottom=i;
S.childNodes[5].style.marginBottom=i;
}}}},tint:function(I,J){},_applyBaseImage:function(K,L){if(qx.core.Variant.isSet(t,l)){if(this.__so){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}
if(K){var P=this._resolveImageUrl(K);
var Q=/(.*)(\.[a-z]+)$/.exec(P);
var O=Q[1];
var N=Q[2];
var M=this.__sp={tl:O+w+N,t:O+x+N,tr:O+d+N,bl:O+p+N,b:O+r+N,br:O+y+N,l:O+c+N,c:O+n+N,r:O+v+N};
this.__sq=this._computeEdgeSizes(M);
}},_resolveImageUrl:function(R){return qx.util.AliasManager.getInstance().resolve(R);
},_computeEdgeSizes:function(A){var B=qx.util.ResourceManager.getInstance();
return {top:B.getImageHeight(A.t),bottom:B.getImageHeight(A.b),left:B.getImageWidth(A.l),right:B.getImageWidth(A.r)};
}},destruct:function(){this.__so=this.__sp=this.__sq=null;
}});
})();


qx.$$loader.init();

