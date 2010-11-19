/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2010 1&1 Internet AG, Germany, http://www.1and1.org

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Daniel Wagner (d_wagner)

************************************************************************ */

/**
 * Provides event testing support.
 */

qx.Mixin.define("simulator.MEventSupport",
{
  members:
  {
    /**
     * Adds utility functions to the AUT that allow attaching and removing event
     * listeners to qooxdoo objects identified by their object registry hash. 
     * 
     * @lint ignoreUndefined(selenium)
     */
    _addListenerSupport : function()
    {
      var addListener = function(objectHash, event, callback, context) {
        var context = context || selenium.qxStoredVars['autWindow'].qx.core.Init.getApplication();
        var qxObj = selenium.qxStoredVars['autWindow'].qx.core.ObjectRegistry.fromHashCode(objectHash);
        return qxObj.addListener(event, callback, context);
      };
      this.addOwnFunction("addListener", addListener);
      
      var removeListenerById = function(objectHash, listenerId) {
        var qxObj = selenium.qxStoredVars['autWindow'].qx.core.ObjectRegistry.fromHashCode(objectHash);
        return qxObj.removeListenerById(listenerId);
      };
      this.addOwnFunction("removeListenerById", removeListenerById);
    },

    /**
     * Adds an event listener to a qooxdoo object in the AUT.
     * 
     * @param locator {String} A (Qx)Selenium locator string that finds a 
     * qooxdoo widget
     * @param event {String} Name of the event to listen for
     * @param callback {Function} Javascript code to be executed if the event is
     * fired
     * @param script {String?} JavaScript snippet to be executed in the context 
     * of the widget determined by the locator. The listener will be attached 
     * to the object returned by this snippet 
     * @return {String} the generated listener's ID
     */
    addListener : function(locator, event, callback, script)
    {
      if (script) {
        var objectHash = this.qxSelenium.getQxObjectHash(locator, script);
      } else {
        var objectHash = this.qxSelenium.getQxObjectHash(locator);
      }
      var callbackName = event + "_" + new Date().getTime(); 
      this.addOwnFunction(callbackName, callback);
      var callbackInContext = 'selenium.qxStoredVars["autWindow"].qx.Simulation["' + callbackName + '"]';  
      var cmd = 'selenium.qxStoredVars["autWindow"].qx.Simulation.addListener("' + objectHash + '", "' + event + '", ' + callbackInContext + ')';
      return this.qxSelenium.getEval(cmd);
    },

    /**
     * Removes an event listener from a qooxdoo widget in the AUT.
     * 
     * @param locator {String} A (Qx)Selenium locator string that finds a 
     * qooxdoo widget
     * @param listenerId {String}  The listener's ID as returned by 
     * {@see #addListener}
     * @return {Boolean} Whether the listener was
     * removed successfully
     */
    removeListenerById : function(locator, listenerId)
    {
      listenerId = String(listenerId).replace(/"/, '\\"');
      var objectHash = this.qxSelenium.getQxObjectHash(locator);
      var cmd = 'selenium.qxStoredVars["autWindow"].qx.Simulation.removeListenerById("' + objectHash + '", "' + listenerId + '")';
      var result = this.qxSelenium.getEval(cmd);
      return String(result) == "true";
    },

    /**
     * Attaches a listener to a qooxdoo object that clones the incoming event 
     * object and adds it to the event store.
     * 
     * @param locator {String} A (Qx)Selenium locator string that finds a 
     * qooxdoo widget
     * @param event {String} The name of the event to listen for
     * @param script {String?} Javascript snippet to be executed in the widget's
     * context
     * @return {String} The listener's ID as returned by addListener
     * 
     * @lint ignoreUndefined(selenium)
     */
    storeEvent : function(locator, event, script)
    {
      var callback = function(ev)
      {
        selenium.qxStoredVars["eventStore"].push(ev.clone());
      };
      return this.addListener(locator, event, callback, script);
    },

    /**
     * Executes a JavaScript snippet on a stored event and returns the result.
     * 
     * @param index {Integer} Index of the event in the store
     * @param detailString {String} Code snippet to execute, e.g. 
     * "getTarget().classname" 
     * @return {String} The result of the executed code
     */
    getStoredEventDetail : function(index, detailString)
    {
      var cmd = 'selenium.qxStoredVars["eventStore"][' + index + ']';
      if (detailString[0] != "[" && detailString[0] != ".") {
        cmd += ".";
      }
      cmd += detailString;
      return this.qxSelenium.getEval(cmd);
    },

    /**
     * Empties the event store.
     */
    clearEventStore : function()
    {
      this.qxSelenium.getEval('selenium.qxStoredVars["eventStore"] = []');
    },

    /**
     * Returns the number of entries in the event store.
     * 
     * @return {Integer} The event count
     */
    getStoredEventCount : function()
    {
      var storedEvents = this.qxSelenium.getEval('selenium.qxStoredVars["eventStore"].length');
      return parseInt(storedEvents, 10);
    }
  }
});