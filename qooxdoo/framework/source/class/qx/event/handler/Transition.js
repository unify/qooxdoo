/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2010 Deutsche Telekom AG, http://www.telekom.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)

************************************************************************ */

/**
 * This class provides support for HTML5 transition events.
 *
 * Supported event types are: transitionEnd, animationStart, animationIteration and animationEnd.
 *
 * Currently only working on recent Webkit versions with transition support.
 */
qx.Class.define("qx.event.handler.Transition",
{
  extend : qx.core.Object,
  implement : qx.event.IEventHandler,




  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * Create a new instance
   *
   * @param manager {qx.event.Manager} Event manager for the window to use
   */
  construct : function(manager)
  {
    this.base(arguments);

    // Define shorthands
    this.__window = manager.getWindow();
    this.__root = this.__window.document.documentElement;

    // Wrap functions
    this.__onEventWrapper = qx.lang.Function.listener(this.__onEvent, this);
  },




  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */

  statics :
  {
    /** {Integer} Priority of this handler */
    PRIORITY : qx.event.Registration.PRIORITY_NORMAL,

    /** {Map} Supported event types */
    SUPPORTED_TYPES :
    {
      transitionEnd : 1,
      animationEnd : 1,
      animationStart : 1,
      animationIteration : 1
    },

    /** {Integer} Which target check to use */
    TARGET_CHECK : qx.event.IEventHandler.TARGET_DOMNODE,

    /** {Integer} Whether the method "canHandleEvent" must be called */
    IGNORE_CAN_HANDLE : true
  },





  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members:
  {
    __onEventWrapper : null,
    __window : null,
    __root : null,

    __nativeTypes : qx.core.Variant.select("qx.client",
    {
      "webkit" :
      {
        transitionEnd : "webkitTransitionEnd",
        animationEnd : "webkitAnimationEnd",
        animationStart : "webkitAnimationStart",
        animationIteration : "webkitAnimationIteration"
      },

      "gecko" :
      {
        // needs to be completely lowercase as of Firefox 4.0 beta 4
        transitionEnd : "transitionend",
        animationEnd : "animationEnd",
        animationStart : "animationStart",
        animationIteration : "animationIteration"
      },

      "default" : null
    }),

    __publicTypes : qx.core.Variant.select("qx.client",
    {
      "webkit" :
      {
        webkitTransitionEnd : "transitionEnd",
        webkitAnimationEnd : "animationEnd",
        webkitAnimationStart : "animationStart",
        webkitAnimationIteration : "animationIteration"
      },

      "gecko" :
      {
        // needs to be completely lowercase as of Firefox 4.0 beta 4
        transitionend : "transitionEnd",
        animationEnd : "animationEnd",
        animationStart : "animationStart",
        animationIteration : "animationIteration"
      },

      "default" : null
    }),




    /*
    ---------------------------------------------------------------------------
      EVENT HANDLER INTERFACE
    ---------------------------------------------------------------------------
    */

    // interface implementation
    canHandleEvent: function(target, type) {
      // Nothing needs to be done here
    },


    // interface implementation
    /**
     * @signature function(target, type, capture)
     */
    registerEvent: qx.core.Variant.select("qx.client",
    {
      "webkit|gecko" : function(target, type, capture) {
        qx.bom.Event.addNativeListener(target, this.__nativeTypes[type], this.__onEventWrapper);
      },

      "default" : function() {}
    }),


    // interface implementation
    /**
     * @signature function(target, type, capture)
     */
    unregisterEvent: qx.core.Variant.select("qx.client",
    {
      "webkit|gecko" : function(target, type, capture) {
        qx.bom.Event.removeNativeListener(target, this.__nativeTypes[type], this.__onEventWrapper);
      },

      "default" : function() {}
    }),



    /*
    ---------------------------------------------------------------------------
      NATIVE EVENT OBSERVERS
    ---------------------------------------------------------------------------
    */

    /**
     * Global handler for the touch event.
     *
     * @signature function(domEvent)
     * @param domEvent {Event} DOM event
     */
    __onEvent : qx.event.GlobalError.observeMethod(function(nativeEvent) 
    {
      // Filter name to be non-browser specific
      var property = nativeEvent.propertyName;
      if (property.charAt(0) == "-") {
        property = property.substring(property.indexOf("-", 1)+1);
      }
      
      var args = [nativeEvent, nativeEvent.target, property];
      qx.event.Registration.fireEvent(nativeEvent.target, this.__publicTypes[nativeEvent.type], qx.event.type.Transition, args);
    })
  },



  /*
  *****************************************************************************
     DEFER
  *****************************************************************************
  */

  defer : function(statics) {
    qx.event.Registration.addHandler(statics);
  }
});
