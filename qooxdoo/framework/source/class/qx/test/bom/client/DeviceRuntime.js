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

qx.Class.define("qx.test.bom.element.Class",
{
  extend : qx.dev.unit.TestCase,

  members :
  {
    setUp : function()
    {
      if (!navigator) {
        window.navigator = {};
      }
    },
    
    "test: check if user agent string is parsed correctly for runtime name" : function()
    {
      var DeviceRuntime = qx.bom.client.DeviceRuntime;
      
      // iPad
      navigator.userAgent = "Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10";
      this.assertEquals("ios", DeviceRuntime.getName(), "Failed testing user agent string of ipad : " + navigator.userAgent);
      
      // iPhone
      navigator.userAgent = "Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420 (KHTML, like Gecko) Version/3.0 Mobile/1C28 Safari/419.3";
      this.assertEquals("ios", DeviceRuntime.getName(), "Failed testing user agent string of iphone : " + navigator.userAgent);
      
      // iPod
      navigator.userAgent = "Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Geckto) Version/3.0 Mobile/3A101a Safari/419.3";
      this.assertEquals("ios", DeviceRuntime.getName(), "Failed testing user agent string of ipod : " + navigator.userAgent);
      
      // webOS
      navigator.userAgent = "Mozilla/5.0 (webOS/2.0.0; U; en-GB) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.2";
      this.assertEquals("webos", DeviceRuntime.getName(), "Failed testing user agent string of webOS : " + navigator.userAgent);
      
      // Symbian 9.1
      navigator.userAgent = "Mozilla/5.0 (SymbianOS/9.1; U; [en-us]) AppleWebKit/413 (KHTML, like Gecko) Safari/413";
      this.assertEquals("symbian", DeviceRuntime.getName(), "Failed testing user agent string of symbian : " + navigator.userAgent);
      
      // Symbian 9.4
      navigator.userAgent = "Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.025; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413";
      this.assertEquals("symbian", DeviceRuntime.getName(), "Failed testing user agent string of symbian : " + navigator.userAgent);
      
      // RIM PlayBook
      navigator.userAgent = "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+";
      this.assertEquals("rim_tabletos", DeviceRuntime.getName(), "Failed testing user agent string of rim playbook : " + navigator.userAgent);
      
      // Android Xoom
      navigator.userAgent = "Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13";
      this.assertEquals("android", DeviceRuntime.getName(), "Failed testing user agent string of android : " + navigator.userAgent);
      
      // Android Milestone
      navigator.userAgent = "Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; Milestone Build/SHOLS_U2_02.36.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17";
      this.assertEquals("android", DeviceRuntime.getName(), "Failed testing user agent string of android : " + navigator.userAgent);
      
      // Android Dream
      navigator.userAgent = "Mozilla/5.0 (Linux; U; Android 1.0; en-us; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2";
      this.assertEquals("android", DeviceRuntime.getName(), "Failed testing user agent string of android : " + navigator.userAgent);
    },
    
    "test: check if user agent string is parsed correctly for runtime version" : function()
    {
      var DeviceRuntime = qx.bom.client.DeviceRuntime;
      
      // iPad
      navigator.userAgent = "Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10";
      this.assertArrayEquals([3,2], DeviceRuntime.getName(), "Failed testing user agent string of ipad : " + navigator.userAgent);
      
      // iPhone
      navigator.userAgent = "Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420 (KHTML, like Gecko) Version/3.0 Mobile/1C28 Safari/419.3";
      this.assertArrayEquals([], DeviceRuntime.getName(), "Failed testing user agent string of iphone : " + navigator.userAgent);
      
      // iPod
      navigator.userAgent = "Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Geckto) Version/3.0 Mobile/3A101a Safari/419.3";
      this.assertArrayEquals([], DeviceRuntime.getName(), "Failed testing user agent string of ipod : " + navigator.userAgent);
      
      // webOS
      navigator.userAgent = "Mozilla/5.0 (webOS/2.0.0; U; en-GB) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.2";
      this.assertArrayEquals([2,0,0], DeviceRuntime.getName(), "Failed testing user agent string of webOS : " + navigator.userAgent);
      
      // Symbian 9.1
      navigator.userAgent = "Mozilla/5.0 (SymbianOS/9.1; U; [en-us]) AppleWebKit/413 (KHTML, like Gecko) Safari/413";
      this.assertArrayEquals([9,1], DeviceRuntime.getName(), "Failed testing user agent string of symbian : " + navigator.userAgent);
      
      // Symbian 9.4
      navigator.userAgent = "Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 Nokia5800d-1/21.0.025; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413";
      this.assertArrayEquals([9,4], DeviceRuntime.getName(), "Failed testing user agent string of symbian : " + navigator.userAgent);
      
      // RIM PlayBook
      navigator.userAgent = "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+";
      this.assertArrayEquals([1,0,0], DeviceRuntime.getName(), "Failed testing user agent string of rim playbook : " + navigator.userAgent);
      
      // Android Xoom
      navigator.userAgent = "Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13";
      this.assertArrayEquals([3,0], DeviceRuntime.getName(), "Failed testing user agent string of android : " + navigator.userAgent);
      
      // Android Milestone
      navigator.userAgent = "Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; Milestone Build/SHOLS_U2_02.36.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17";
      this.assertArrayEquals([2,1,"update1"], DeviceRuntime.getName(), "Failed testing user agent string of android : " + navigator.userAgent);
      
      // Android Dream
      navigator.userAgent = "Mozilla/5.0 (Linux; U; Android 1.0; en-us; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2";
      this.assertArrayEquals([1,0], DeviceRuntime.getName(), "Failed testing user agent string of android : " + navigator.userAgent);
    }
  }
});
