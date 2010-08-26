(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date().valueOf();
qx.$$build = 1282828202697;
qx.$$type = "build";
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.bom.Selector","qx.theme":"qx.theme.Classic"};
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
  uris : [["__out__:demobrowser.demo.bom.Selector-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"cad72cdb5bf1"},
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

qx.$$packageData['cad72cdb5bf1']={"locales":{},"resources":{"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"]},"translations":{}};
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
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var k="ul",j="li",i="select",h="input",g="h2",f="ul,ol",e="color",d="field-title",c="center",b="title",bl="field-mail",bk=":contains('List Item 1')",bj="fontWeight",bi="p",bh="bold",bg="h1,h2",bf="#detail1,#detail2,#detail3",be="text",bd="backgroundColor",bc="<li>inserted via after()</li>",r=":first-child,:last-child",s="underline",p="green",q="<option>Mrs</option>",n="<option>Prof</option>",o="<option>Mr</option>",l="for",m="<li>inserted via append()</li>",x="<h3>Dynamically Inserted H3</h3>",y="opacity",H=" Title ",E="li:first-child",P="#detail2",K="li a",X='<div style="border:2px solid red"><div style="border:2px solid blue"></div></div>',U="h1",A="#eee",bb="0.5",ba="[type=submit]",Y="header",z="name",C="textAlign",D='<div style="background:#FFFFBB"></div>',G="<script type='text/javascript'>qx.log.Logger.debug('Globally executed script');</script>",I="<li>inserted via before()</li>",L="click",R="form",W="label[for=field-mail]",t="<option>Dr</option>",u="submit",B="demobrowser.demo.bom.Selector",O="ul li:contains('List Item 3')",N="<b></b>",M="p:eq(1)",T="label",S="red",J="Click to follow the link",Q="input[type=submit]",a="a",V="<li>inserted via prepend()</li>",v="orange",w="li:last-child",F="id";
qx.Class.define(B,{extend:qx.application.Native,members:{main:function(){qx.application.Native.prototype.main.call(this);
var br=qx.log.Logger;
var bn=qx.bom.Collection;
bn.query(bi).setStyle(e,S);
bn.query(M).setStyle(bj,bh).setStyle(y,bb);
bn.query(U).setStyles({"textAlign":c,"textDecoration":s,"color":p});
br.debug("href of first link: "+bn.query("a").getAttribute("href"));
bn.query(a).setAttribute(b,J);
bn.query(bg).addClass(Y);
bn.query(bi).addListener(L,function(){alert(this.innerHTML);
});
(new qx.bom.Collection).add(g).setStyle(e,v).add(j).setStyle(bd,A).end().setStyle(C,c);
br.debug("Found "+qx.bom.Collection.query("ul,ol").children().length+" children of ul/ol elements using children().");
br.debug("Found "+qx.bom.Collection.query("ul,ol").children(":first-child").length+" first children of ul/ol elements using children(selector)");
br.debug("Number of ul/ol elements which are closest to a li element: "+qx.bom.Collection.query("li").closest("ul,ol").length);
br.debug("Number of child nodes of the body: "+new qx.bom.Collection(document.body).contents().length);
var bm=qx.bom.Collection.query(k).find(j);
br.debug("Found "+bm.length+" li elements in uls using find()");
var bm=new qx.bom.Collection(document.body).find(bg);
br.debug("Found "+bm.length+" headers using find()");
var bm=qx.bom.Collection.query(k).next()[0].tagName;
br.debug("Tag following the UL element: "+bm);
var bm=qx.bom.Collection.query(k).nextAll().length;
br.debug("Number of elements following the UL: "+bm);
var bm=qx.bom.Collection.query(j).parent().length;
br.debug("Number of parent elements of all li elems: "+bm);
var bm=qx.bom.Collection.query(Q).parents().length;
br.debug("Number of all parent elements of the submit button: "+bm);
var bm=qx.bom.Collection.query(k).prev()[0].tagName;
br.debug("Tag before the UL element: "+bm);
var bm=qx.bom.Collection.query(k).prevAll().length;
br.debug("Number of elements preceding the UL: "+bm);
var bm=qx.bom.Collection.query(O).siblings().length;
br.debug("List Item 3 has "+bm+" siblings");
var bm=qx.bom.Collection.query(i).getOffsetParent()[0].tagName;
br.debug("Offset parent of select box: "+bm);
var bm=qx.bom.Collection.query(i).getOffset();
br.debug("Offset of select box: ");
br.debug(bm);
bn.query(K).eq(1).setStyle(bj,bh);
var bm=qx.bom.Collection.query(h).filter(ba);
br.debug("Found "+bm.length+" submit buttons using filter(selector)");
var bm=qx.bom.Collection.query(h).filter(function(bu,bv,bw){return bu.type===u;
});
br.debug("Found "+bm.length+" submit button using filter(function)");
var bm=qx.bom.Collection.query(g).hasClass(R);
br.debug("Any H2 with form has a class 'form': "+bm);
var bm=qx.bom.Collection.query(k).find(j).is(bk);
br.debug("Found li element with text 'List Item 1': "+bm);
var bm=qx.bom.Collection.query(k).find(j).not(bk);
br.debug("Number of found li elements without text 'List Item 1': "+bm.length);
var bm=qx.bom.Collection.query(k).find(j).not(r);
br.debug("Number of found li elements in the middle: "+bm.length);
qx.bom.Collection.query(f).append(m);
qx.bom.Collection.query(f).prepend(V);
qx.bom.Collection.query(k).append(G);
qx.bom.Collection.query(E).after(bc);
qx.bom.Collection.query(w).before(I);
var bt=document.createElement(i);
var bs=document.createElement(T);
var bo=new qx.bom.Collection(bt).setAttribute(F,d).setAttribute(z,b);
new qx.bom.Collection(bs).setAttribute(l,d).setAttribute(be,H);
qx.bom.Collection.query(i).after(bs,bt);
bo.append(o,q,t,n);
$(x).insertAfter(g);
qx.bom.Collection.id(bl).addListener(h,function(){br.debug("Typing in e-mail field...");
});
var bp=qx.bom.Collection.id(bl);
var bq=bp.add(W).reverse();
bp.after(bq.clone(true));
qx.bom.Collection.query(bf).wrapAll(X);
qx.bom.Collection.query(bf).wrapInner(N);
qx.bom.Collection.query(P).wrap(D);
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
(function(){var c=" ",b="qx.bom.element2.Class",a="";
qx.Class.define(b,{statics:{__yd:/[\n\t]/g,__ye:/\s+/,has:function(o,p){{};

if((c+o.className+c).replace(this.__yd,c).indexOf(c+p+c)>-1){return true;
}return false;
},add:function(h,j){{};

if(!h.className){h.className=j;
}else{var n=j.split(this.__ye);
var k=c+h.className+c;
var m=h.className;

for(var i=0,l=n.length;i<l;i++){if(k.indexOf(c+n[i]+c)<0){m+=c+n[i];
}}h.className=qx.lang.String.trim(m);
}return h.className;
},remove:function(d,e){{};

if(!d.className){return;
}
if(e){var g=e.split(this.__ye);
var f=(c+d.className+c).replace(this.__yd,c);

for(var i=0,l=g.length;i<l;i++){f=f.replace(c+g[i]+c,c);
}d.className=qx.lang.String.trim(f);
}else{d.className=a;
}return d.className;
}}});
})();
(function(){var q="",p="qx.client",o="styleFloat",n="Webkit",m="cssFloat",l="Ms",k="div",j="Moz",i="float",h="O",f="qx.bom.element2.Style",g="string";
qx.Class.define(f,{statics:{__tl:document.createElement(k),__tm:{},__tn:qx.core.Variant.select(p,{"mshtml":l,"gecko":j,"webkit":n,"opera":h}),get:function(x,name,y){var z=x.style;
name=z[name]!==undefined&&name||this.__tm[name]||this.property(name);
if(!y){return z[name];
}var A=x.ownerDocument.defaultView;

if(A){return A.getComputedStyle(x,null)[name];
}else if(x.currentStyle){return x.currentStyle[name];
}},set:function(s,name,t){var u=s.style;
var v=this.__tm;

if(typeof name==g){name=name in u&&name||v[name]||this.property(name);

if(name){u[name]=t==null?q:t;
}}else{for(var w in name){t=name[w];
w=w in u&&w||v[w]||this.property(w);

if(w){u[w]=t==null?q:t;
}}}return this;
},property:function(name){var b=this.__tl.style;
var c;
if(b[name]!==c){return name;
}var a=this.__tm;
var d=a[name];

if(d!==c){return d;
}var e=this.__tn+name.charAt(0).toUpperCase()+name.substring(1);

if(b[e]!==c){return a[name]=e;
}{};
}},defer:function(r){r.__tm[i]=qx.core.Variant.select(p,{"mshtml":o,"default":m});
}});
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
(function(){var t=function(bp,bq){return function(D,E,F,G,H,I){var length=this.length;

if(length>0){var J=bp[bq];

for(var i=0;i<length;i++){if(this[i].nodeType===1){J.call(bp,this[i],D,E,F,G,H,I);
}}}return this;
};
};
var o=function(bm,bn){return function(u,v,w,x,y,z){if(this.length>0){var A=this[0].nodeType===1?bm[bn](this[0],u,v,w,x,y,z):null;

if(A&&A.nodeType){return this.__yj([A]);
}else{return A;
}}return null;
};
};
var s=qx.bom.element2.Class;
var q=qx.bom.element.Attribute;
var r=qx.bom.Input;
var p=qx.bom.element2.Style;
var n=qx.bom.Selector;
qx.Class.define("qx.bom.Collection",{extend:qx.type.BaseArray,statics:{query:function(bI,bJ){var bK=n.query(bI,bJ);
return qx.lang.Array.cast(bK,qx.bom.Collection);
},id:function(cb){var cc=document.getElementById(cb);
if(cc&&cc.id!=cb){return qx.bom.Collection.query("#"+cb);
}if(cc){return new qx.bom.Collection(cc);
}else{return new qx.bom.Collection();
}},html:function(br,bs){var bt=qx.bom.Html.clean([br],bs);
return qx.lang.Array.cast(bt,qx.bom.Collection);
},__yf:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(cx,cy){var cA=qx.bom.Collection;
if(cx.nodeType){return new cA(cx);
}else if(typeof cx==="string"){var cz=cA.__yf.exec(cx);

if(cz){return cz[1]?cA.html(cz[1],cy):cA.id(cz[3].substring(1));
}else{return cA.query(cx,cy);
}}else{return qx.lang.Array.cast(cx,qx.bom.Collection);
}}},members:{__yg:null,setAttribute:t(q,"set"),resetAttribute:t(q,"reset"),getAttribute:o(q,"get"),addClass:t(s,"add"),getClass:o(s,"get"),hasClass:o(s,"has"),removeClass:t(s,"remove"),replaceClass:t(s,"replace"),toggleClass:t(s,"toggle"),setValue:t(r,"setValue"),getValue:o(r,"getValue"),setStyle:t(p,"set"),getStyle:o(p,"get"),eq:function(bw){return this.slice(bw,+bw+1);
},filter:function(L,M){var N;

if(qx.lang.Type.isFunction(L)){N=qx.type.BaseArray.prototype.filter.call(this,L,M);
}else{N=n.matches(L,this);
}return this.__yj(N);
},is:function(m){return !!m&&n.matches(m,this).length>0;
},__yh:/^.[^:#\[\.,]*$/,not:function(cv){if(this.__yh.test(cv)){var cw=n.matches(":not("+cv+")",this);
return this.__yj(cw);
}var cw=n.matches(cv,this);
return this.filter(function(R){return cw.indexOf(R)===-1;
});
},add:function(bN,bO){var bP=n.query(bN,bO);
var bQ=qx.lang.Array.unique(this.concat(bP));
return this.__yj(bQ);
},children:function(cp){var cq=[];

for(var i=0,l=this.length;i<l;i++){cq.push.apply(cq,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(cp){cq=n.matches(cp,cq);
}return this.__yj(cq);
},closest:function(bf){var bg=new qx.bom.Collection(1);
var bh=this.map(function(bG){while(bG&&bG.ownerDocument){bg[0]=bG;

if(n.matches(bf,bg).length>0){return bG;
}bG=bG.parentNode;
}});
return this.__yj(qx.lang.Array.unique(bh));
},contents:function(){var by=[];
var bx=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){by.push.apply(by,bx.fromCollection(this[i].childNodes));
}return this.__yj(by);
},find:function(cn){if(this.length===1){return this.__yj(n.query(cn,this[0]));
}else{var co=[];

for(var i=0,l=this.length;i<l;i++){co.push.apply(co,n.query(cn,this[i]));
}return this.__yj(qx.lang.Array.unique(co));
}},next:function(bj){var bk=qx.dom.Hierarchy;
var bl=this.map(bk.getNextElementSibling,bk);
if(bj){bl=n.matches(bj,bl);
}return this.__yj(bl);
},nextAll:function(bi){return this.__yi("getNextSiblings",bi);
},prev:function(cj){var ck=qx.dom.Hierarchy;
var cl=this.map(ck.getPreviousElementSibling,ck);
if(cj){cl=n.matches(cj,cl);
}return this.__yj(cl);
},prevAll:function(bL){return this.__yi("getPreviousSiblings",bL);
},parent:function(cf){var Element=qx.dom.Element;
var cg=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(cf){cg=n.matches(cf,cg);
}return this.__yj(cg);
},parents:function(Q){return this.__yi("getAncestors",Q);
},siblings:function(b){return this.__yi("getSiblings",b);
},__yi:function(bR,bS){var bU=[];
var bT=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){bU.push.apply(bU,bT[bR](this[i]));
}var bV=qx.lang.Array.unique(bU);
if(bS){bV=n.matches(bS,bV);
}return this.__yj(bV);
},__yj:function(ch){var ci=new qx.bom.Collection;
ci.__yg=this;
ch=Array.prototype.slice.call(ch,0);
ci.push.apply(ci,ch);
return ci;
},andSelf:function(){return this.add(this.__yg);
},end:function(){return this.__yg||new qx.bom.Collection();
},__yk:function(X,Y){var bd=this[0];
var bc=bd.ownerDocument||bd;
var bb=qx.bom.Html.clean(X,bc,true);
var be=bb.firstChild;

if(be){var ba=this.length-1;

for(var i=0,l=ba;i<l;i++){Y.call(this,this[i],bb.cloneNode(true));
}Y.call(this,this[ba],bb);
}return this;
},__yl:function(d,e){var f=qx.lang.Array;
var h=[];

for(var i=0,l=d.length;i<l;i++){{};
h.push.apply(h,n.query(d[i]));
}h=f.cast(f.unique(h),qx.bom.Collection);
for(var i=0,g=this.length;i<g;i++){h[e](this[i]);
}return this;
},append:function(bv){return this.__yk(arguments,this.__ym);
},prepend:function(a){return this.__yk(arguments,this.__yn);
},__ym:function(O,P){O.appendChild(P);
},__yn:function(U,V){U.insertBefore(V,U.firstChild);
},appendTo:function(bM){return this.__yl(arguments,"append");
},prependTo:function(cm){return this.__yl(arguments,"prepend");
},before:function(B){return this.__yk(arguments,this.__yo);
},after:function(bH){return this.__yk(arguments,this.__yp);
},__yo:function(cr,cs){cr.parentNode.insertBefore(cs,cr);
},__yp:function(cd,ce){cd.parentNode.insertBefore(ce,cd.nextSibling);
},insertBefore:function(k){return this.__yl(arguments,"before");
},insertAfter:function(K){return this.__yl(arguments,"after");
},wrapAll:function(content){var cu=this[0];

if(cu){var ct=qx.bom.Collection.create(content,cu.ownerDocument).clone();
if(cu.parentNode){cu.parentNode.insertBefore(ct[0],cu);
}ct.map(this.__yq).append(this);
}return this;
},__yq:function(c){while(c.firstChild){c=c.firstChild;
}return c;
},wrapInner:function(content){var S=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){S[0]=this[i];
S.contents().wrapAll(content);
}return this;
},wrap:function(content){var W=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){W[0]=this[i];
W.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(T){return this.__yl(arguments,"replaceWith");
},remove:function(bW){var bY=this;

if(bW){bY=this.filter(bW);

if(bY.length==0){return this;
}}for(var i=0,ca=bY.length,bX;i<ca;i++){bX=bY[i];

if(bX.parentNode){bX.parentNode.removeChild(bX);
}}return bY;
},destroy:function(bz){if(this.length==0){return this;
}var bD=this;

if(bz){bD=this.filter(bz);

if(bD.length==0){return this;
}}var bB=qx.event.Registration.getManager(this[0]);

for(var i=0,l=bD.length,bC,bE;i<l;i++){bC=bD[i];
bB.removeAllListeners(bC);
bE=n.query("*",bC);

for(var j=0,bA=bE.length;j<bA;j++){bB.removeAllListeners(bE[j]);
}if(bC.parentNode){bC.parentNode.removeChild(bC);
}}if(bz){bD.end();
qx.lang.Array.exclude(this,bD);
}else{this.length=0;
}return this;
},empty:function(){var bo=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){bo.query(">*",this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(bu){var Element=qx.Class.getByName("qx.bom.Element");

if(!Element){throw new Error("Missing class: qx.bom.Element!");
}return bu?
this.map(function(C){return Element.clone(C,true);
}):this.map(Element.clone,Element);
}},defer:function(bF){if(window.$==null){window.$=bF.create;
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
(function(){var E="",D="select",C="soft",B="off",A="qx.client",z="wrap",y="text",x="mshtml",w="number",v="checkbox",o="select-one",u="input",r="option",n="value",m="radio",q="qx.bom.Input",p="nowrap",s="textarea",k="auto",t="normal";
qx.Class.define(q,{statics:{__lV:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(T,U,V){{};
var U=U?qx.lang.Object.clone(U):{};
var W;

if(T===s||T===D){W=T;
}else{W=u;
U.type=T;
}return qx.bom.Element.create(W,U,V);
},setValue:function(a,b){var g=a.nodeName.toLowerCase();
var d=a.type;
var Array=qx.lang.Array;
var h=qx.lang.Type;

if(typeof b===w){b+=E;
}
if((d===v||d===m)){if(h.isArray(b)){a.checked=Array.contains(b,a.value);
}else{a.checked=a.value==b;
}}else if(g===D){var c=h.isArray(b);
var j=a.options;
var e,f;

for(var i=0,l=j.length;i<l;i++){e=j[i];
f=e.getAttribute(n);

if(f==null){f=e.text;
}e.selected=c?Array.contains(b,f):b==f;
}
if(c&&b.length==0){a.selectedIndex=-1;
}}else if(d===y&&qx.core.Variant.isSet(A,x)){a.$$inValueSet=true;
a.value=b;
a.$$inValueSet=null;
}else{a.value=b;
}},getValue:function(H){var N=H.nodeName.toLowerCase();

if(N===r){return (H.attributes.value||{}).specified?H.value:H.text;
}
if(N===D){var I=H.selectedIndex;
if(I<0){return null;
}var O=[];
var Q=H.options;
var P=H.type==o;
var M=qx.bom.Input;
var L;
for(var i=P?I:0,K=P?I+1:Q.length;i<K;i++){var J=Q[i];

if(J.selected){L=M.getValue(J);
if(P){return L;
}O.push(L);
}}return O;
}else{return (H.value||E).replace(/\r/g,E);
}},setWrap:qx.core.Variant.select(A,{"mshtml":function(R,S){R.wrap=S?C:B;
},"gecko|webkit":function(X,Y){var bb=Y?C:B;
var ba=Y?E:k;
X.setAttribute(z,bb);
X.style.overflow=ba;
},"default":function(F,G){F.style.whiteSpace=G?t:p;
}})}});
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
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(j){return (j!==null&&(this.getClass(j)==b||j instanceof Number));
},isBoolean:function(k){return (k!==null&&(this.getClass(k)==a||k instanceof Boolean));
},isDate:function(h){return (h!==null&&(this.getClass(h)==c||h instanceof Date));
},isError:function(i){return (i!==null&&(this.getClass(i)==e||i instanceof Error));
}}});
})();
(function(){var m="qx.client",k="<table>",h="<fieldset>",g="<select multiple='multiple'>",f="</div>",e="</select>",d="</tr></tbody></table>",c="<col",b="div",a="<table><tbody><tr>",H="string",G=">",F="<table><tbody></tbody><colgroup>",E="<th",D="</tbody></table>",C="<td",B="</colgroup></table>",A="<opt",z="",y="</fieldset>",t="<table><tbody>",u="div<div>",r="<table",s="mshtml",p="qx.bom.Html",q="<leg",n="tbody",o="<tr",v="</table>",w="undefined",x="></";
qx.Class.define(p,{statics:{__yr:function(I,J,K){return K.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?I:J+x+K+G;
},__ys:{opt:[1,g,e],leg:[1,h,y],table:[1,k,v],tr:[2,t,D],td:[3,a,d],col:[2,F,B],def:qx.core.Variant.select(m,{"mshtml":[1,u,f],"default":null})},__yt:function(R,S){var Y=S.createElement(b);
R=R.replace(/(<(\w+)[^>]*?)\/>/g,this.__yr);
var U=R.replace(/^\s+/,z).substring(0,5).toLowerCase();
var X,T=this.__ys;

if(!U.indexOf(A)){X=T.opt;
}else if(!U.indexOf(q)){X=T.leg;
}else if(U.match(/^<(thead|tbody|tfoot|colg|cap)/)){X=T.table;
}else if(!U.indexOf(o)){X=T.tr;
}else if(!U.indexOf(C)||!U.indexOf(E)){X=T.td;
}else if(!U.indexOf(c)){X=T.col;
}else{X=T.def;
}if(X){Y.innerHTML=X[1]+R+X[2];
var W=X[0];

while(W--){Y=Y.lastChild;
}}else{Y.innerHTML=R;
}if(qx.core.Variant.isSet(m,s)){var ba=/<tbody/i.test(R);
var V=!U.indexOf(r)&&!ba?Y.firstChild&&Y.firstChild.childNodes:X[1]==k&&!ba?Y.childNodes:[];

for(var j=V.length-1;j>=0;--j){if(V[j].tagName.toLowerCase()===n&&!V[j].childNodes.length){V[j].parentNode.removeChild(V[j]);
}}if(/^\s/.test(R)){Y.insertBefore(S.createTextNode(R.match(/^\s*/)[0]),Y.firstChild);
}}return qx.lang.Array.fromCollection(Y.childNodes);
},clean:function(L,M,N){M=M||document;
if(typeof M.createElement===w){M=M.ownerDocument||M[0]&&M[0].ownerDocument||document;
}var P,Q=[];

for(var i=0,l=L.length;i<l;i++){P=L[i];
if(typeof P===H){P=this.__yt(P,M);
}if(P.nodeType){Q.push(P);
}else if(P instanceof qx.type.BaseArray){Q.push.apply(Q,Array.prototype.slice.call(P,0));
}else if(P.toElement){Q.push(P.toElement());
}else{Q.push.apply(Q,P);
}}if(N){var O=document.createDocumentFragment();

for(var i=0;Q[i];i++){O.appendChild(Q[i]);
}return O;
}return Q;
}}});
})();
(function(){var b="qx.dom.Element";
qx.Class.define(b,{statics:{hasChild:function(parent,q){return q.parentNode===parent;
},hasChildren:function(d){return !!d.firstChild;
},hasChildElements:function(c){c=c.firstChild;

while(c){if(c.nodeType===1){return true;
}c=c.nextSibling;
}return false;
},getParentElement:function(r){return r.parentNode;
},isEmpty:function(e){e=e.firstChild;

while(e){if(e.nodeType===1||e.nodeType===3){return false;
}e=e.nextSibling;
}return true;
},cleanWhitespace:function(k){var l=k.firstChild;

while(l){var m=l.nextSibling;

if(l.nodeType==3&&!/\S/.test(l.nodeValue)){k.removeChild(l);
}l=m;
}},insertAt:function(y,parent,z){var A=parent.childNodes[z];

if(A){parent.insertBefore(y,A);
}else{parent.appendChild(y);
}return true;
},insertBegin:function(a,parent){if(parent.firstChild){this.insertBefore(a,parent.firstChild);
}else{parent.appendChild(a);
}},insertEnd:function(x,parent){parent.appendChild(x);
},insertBefore:function(h,i){i.parentNode.insertBefore(h,i);
return true;
},insertAfter:function(f,g){var parent=g.parentNode;

if(g==parent.lastChild){parent.appendChild(f);
}else{return this.insertBefore(f,g.nextSibling);
}return true;
},remove:function(p){if(!p.parentNode){return false;
}p.parentNode.removeChild(p);
return true;
},removeChild:function(j,parent){if(j.parentNode!==parent){return false;
}parent.removeChild(j);
return true;
},removeChildAt:function(n,parent){var o=parent.childNodes[n];

if(!o){return false;
}parent.removeChild(o);
return true;
},replaceChild:function(s,t){if(!t.parentNode){return false;
}t.parentNode.replaceChild(s,t);
return true;
},replaceAt:function(u,v,parent){var w=parent.childNodes[v];

if(!w){return false;
}parent.replaceChild(u,w);
return true;
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
(function(){var b="qx.event.handler.UserAction";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){qx.core.Object.call(this);
this.__bY=a;
this.__ca=a.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__bY:null,__ca:null,canHandleEvent:function(f,g){},registerEvent:function(h,i,j){},unregisterEvent:function(c,d,e){}},destruct:function(){this.__bY=this.__ca=null;
},defer:function(k){qx.event.Registration.addHandler(k);
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
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
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
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
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

