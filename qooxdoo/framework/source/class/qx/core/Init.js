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
 * This is the base class for all qooxdoo applications.
 */
qx.Class.define("qx.core.Init",
{
  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */

  statics :
  {
    /**
     * Returns the instantiated qooxdoo application.
     *
     * @return {qx.core.Object} The application instance.
     */
    getApplication : function() {
      return this.__application || null;
    },


    /**
     * Runs when the application is loaded. Automatically creates an instance
     * of the class defined by the setting <code>qx.application</code>.
     *
     * @param appClass {Class} Application class to boot
     * @return {void}
     */
    boot : function(appClass)
    {
      if (this.__application) {
        return;
      }

      var app = this.__application = new appClass;
      app.main();
      app.finalize();
    },


    /**
     * Runs before the document is unloaded. Calls the application's close
     * method to check if the unload process should be stopped.
     *
     * @param e {qx.event.type.Native} Incoming beforeunload event.
     * @return {void}
     */
    __close : function(e)
    {
      var app = this.__application;
      if (app) {
        e.setReturnValue(app.close());
      }
    },


    /**
     * Runs when the document is unloaded. Automatically terminates a previously
     * created application instance.
     *
     * @return {void}
     */
    __shutdown : function()
    {
      var app = this.__application;

      if (app) {
        app.terminate();
      }
    }
  },




  /*
  *****************************************************************************
     DEFER
  *****************************************************************************
  */

  defer : function(statics)
  {
    qx.event.Registration.addListener(window, "shutdown", statics.__shutdown, statics);
    qx.event.Registration.addListener(window, "beforeunload", statics.__close, statics);
  }
});
