/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)

************************************************************************ */

/**
 * Processes the incoming log entry and displays it by means of the native
 * logging capabilities of the client.
 *
 * Supported browsers:
 * * Firefox using an installed FireBug.
 * * Safari using newer features of Web Inspector.
 * * Internet Explorer 8.
 * 
 * Inclusive PhoneGap support
 * Inclusive Adobe AIR support
 *
 * Currently unsupported browsers:
 * * Opera using the <code>postError</code> (disabled due to missing
 *     functionality in opera as of version 9.6).
 */
qx.Class.define("qx.log.appender.Native",
{
  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */

  statics :
  {
    /**
     * Processes a single log entry
     *
     * @param entry {Map} The entry to process
     * @return {void}
     */
    process : function(entry)
    {
      // Prefer PhoneGap interface over Firebug interface (fixes iOS 4.0 logging)
      // Prefer Firebug over native AIR console if available
      var obj = window.debug || window.console || (window.air && window.air.Introspector.Console);
      if (obj)
      {
        var level = entry.level;
        if (!(level in obj)) {
          level = "log";
        }
        
        obj[level](qx.log.appender.Util.toText(entry));
      }
    }
  },




  /*
  *****************************************************************************
     DEFER
  *****************************************************************************
  */

  defer : function(statics) {
    qx.log.Logger.register(statics);
  }
});
