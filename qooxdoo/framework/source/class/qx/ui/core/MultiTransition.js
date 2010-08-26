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
 * A multi transition can combine single transitions into one instance
 * which may be used for the {@link qx.ui.core.Widget#transition} as
 * it offers the same interface as single transitions.
 */
qx.Class.define("qx.ui.core.MultiTransition",
{
  extend : qx.core.Object,
  implement : qx.ui.core.ITransition,
  
  
  
  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */
    
  construct : function()
  {
    this.base(arguments);
    
    // Create internal data structure
    this.__transitions = [];
  },
  
  
  
  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */
    
  members :
  {
    /** {Array} List of single transitions */
    __transitions : null,
    
    
    /**
     * Adds a new transition
     * 
     * @param transition {Transition} Transition to add
     */
    add : function(transition) 
    {
      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        if (qx.Class.hasInterface(transition, qx.ui.core.ITransition)) {
          throw new Error("Transition to add does not implements the interface qx.ui.core.ITransition: " + transition);
        }
      }
      
      this.__transitions.push(transition);
    },
    
    
    /**
     * Removes the transition
     * 
     * @param transition {Transition} Transition to add
     */
    remove : function(transition) 
    {
      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        if (qx.Class.hasInterface(transition, qx.ui.core.ITransition)) {
          throw new Error("Transition to remove does not implements the interface qx.ui.core.ITransition: " + transition);
        }
      }

      qx.lang.Array.remove(this.__transitions, transition);
    },
    
    
    // interface implementation
    getStyle : function()
    {
      var style = [];
      var all = this.__transitions;
      for (var i=0, l=all.length; i<l; i++) {
        style.push(all[i].getStyle());
      }
      
      return style.join(",");
    },
    
    
    // interface implementation    
    controlsOpacity : function()
    {
      var all = this.__transitions;
      var controls = false;
      for (var i=0, l=all.length; i<l; i++) 
      {
        controls = all[i].controlsOpacity();
        if(controls) {
          break;
        }
      }
      
      return controls;      
    }
  }
});
