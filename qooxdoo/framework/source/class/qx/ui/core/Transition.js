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

qx.Class.define("qx.ui.core.Transition",
{
  extend : qx.core.Object,
  implement : qx.ui.core.ITransition,
  
  
  
  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */
    
  /**
   * @param property {String} Property to animate
   * @param duration {Integer} Duration to animate property in
   * @param timing {String} Name of timing function to use
   * @param delay {Integer} Delay to start animation
   */
  construct : function(property, duration, timing, delay)
  {
    this.base(arguments);
    
    if (property != null) {
      this.setProperty(property);
    }
    
    if (duration != null) {
      this.setDuration(duration);
    }
    
    if (timing != null) {
      this.setTiming(timing);
    }
    
    if (delay != null) {
      this.setDelay(delay);
    }
  },
  
  
  
  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */
    
  properties : 
  {
    /** Specifies the name of the CSS property to which the transition is applied. */
    property : 
    {
      check : ["top","left","opacity"],
      nullable : true,
      apply : "_applyTransition"
    },
    
    /** Defines how long the transition from the old value to the new value should take. */
    duration :
    {
      check : "Integer",
      init : 300,
      apply : "_applyTransition"      
    },
    
    /** Specifies how the intermediate values used during a transition are calculated. */
    timing : 
    {
      check : ["ease", "linear", "ease-in", "ease-out", "ease-in-out"],
      init : "ease",
      apply : "_applyTransition"      
    },
    
    /** Defines when the transition starts. */
    delay : 
    {
      check : "Integer",
      init : 0,
      apply : "_applyTransition"
    }
  },
  
  
  
  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */
    
  members :
  {
    /** {String} Computed style for transition */
    __computedValue : null,
    
    
    // property apply
    _applyTransition : function(value, old, prop) {
      this.__computedValue = null;
    },
    
    
    // interface method
    getStyle : function()
    {
      var value = this.__computedValue;
      if (value == null) {
        value = this.__computedValue = this.__computeStyle();
      }
      return value;
    },
    
    
    /**
     * Computes the style value to apply
     * 
     * @return {String} CSS style to apply to the transition property
     */
    __computeStyle : function() {
      return (this.getProperty() || "all") + " " + this.getDuration() + "ms " + this.getTiming() + " " + this.getDelay() + "ms";
    }
  }
});
