/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2011 Sebastian Fastner, Mainz, Germany, http://www.sebastianfastner.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Fastner (fastner)

************************************************************************ */

/**
 * This class is responsible for the detection of the runtime the application
 * is running in. This is in particular usefull on mobile devices to detect
 * the runtime platform. In some cases this is equal to the operating system.
 *
 * This class is used by {@link qx.core.Environment} and should not be used
 * directly. Please check its class comment for details how to use it.
 *
 * @internal
 */
qx.Bootstrap.define("qx.bom.client.DeviceRuntime",
{
  statics :
  {
    userAgent : navigator.userAgent,
    
    /**
     * Returns the device's runtime name
     * 
     * @return {String} Runtime name
     */
    getName : function() 
    {
      var agent = qx.bom.client.DeviceRuntime.userAgent;
      
      if (/iPad|iPhone|iPod/.test(agent)) {
        return "ios";
      } else if (agent.indexOf("webOS") != -1) {
        return "webos";
      } else if (agent.indexOf("Symbian") != -1) {
        return "symbian";
      } else if (agent.indexOf("RIM Tablet OS") != -1) {
        return "rim_tabletos";
      } else if (agent.indexOf("Android") != -1) {
        return "android";
      }
      
      // don't know
      return "";
    },
    
    /**
     * Returns the device's runtime version
     * 
     * @return {String[]} Runtime version
     */
    getVersion : function() 
    {
      var runtime = qx.bom.client.DeviceRuntime.getName();
      var agent = qx.bom.client.DeviceRuntime.userAgent;
      var version;
      
      if (runtime == "ios") {
        // Example agent strings:
        // Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10
        // Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420 (KHTML, like Gecko) Version/3.0 Mobile/1C28 Safari/419.3
        // Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Geckto) Version/3.0 Mobile/3A101a Safari/419.3
        agent = agent.replace(/_/g, ".");
        var match=/OS (\d+(?:\.\d+)*) like/.exec(agent);
        if (match) {
          version = match[1];
        }
      } else if (runtime == "webos") {
        // Example agent strings:
        // Mozilla/5.0 (webOS/2.0.0; U; en-GB) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.2
        var match = /webOS\/([\.0-9]+)/.exec(agent);
        if (match) {
          version = match[1];
        }
      } else if (runtime == "symbian") {
        // Example agent strings:
        // Mozilla/5.0 (SymbianOS/9.1; U; [en-us]) AppleWebKit/413 (KHTML, like Gecko) Safari/413
        // Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.025; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413
        var match = /SymbianOS\/([\.0-9]+)/.exec(agent);
        if (match) {
          version = match[1];
        }
      } else if (runtime == "rim_tabletos") {
        // Example agent strings:
        // Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+
        var match = /RIM Tablet OS ([\.0-9]+)/.exec(agent);
        if (match) {
          version = match[1];
        }
      } else if (runtime == "android") {
        // Example agent strings:
        // Mozilla/5.0 (Linux; U; Android 1.0; en-us; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2
        // Mozilla/5.0 (Linux; U; Android 1.0; en-us; generic) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2
        // Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; Milestone Build/SHOLS_U2_02.36.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17
        // Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13
        agent = agent.replace(/-|_/g, ".");
        var match = /Android ([\.\d\w]+)/.exec(agent);
        if (match) {
          version = match[1];
        }
      }
      
      return version ? version.split(".") : [];
    }
  }
});