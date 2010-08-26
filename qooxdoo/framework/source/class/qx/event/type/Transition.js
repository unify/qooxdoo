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
 * 
 */
qx.Class.define("qx.event.type.Transition",
{
  extend : qx.event.type.Dom,
  


  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * Initialize the fields of the event.
     *
     * @param domEvent {Event} DOM event
     * @param target {Object} The event target
     * @param property {String} Name of the property
     * @return {qx.event.type.Transition} The initialized key event instance
     */
    init : function(domEvent, target, property)
    {
      this.base(arguments, domEvent, target, null, true, true);

      this.__propertyName = property;

      return this;
    },


    // overridden
    clone : function(embryo)
    {
      var clone = this.base(arguments, embryo);

      clone.__propertyName = this.__propertyName;

      return clone;
    },    


    /**
     * Unicode number of the pressed character.
     *
     * @return {Integer} Unicode number of the pressed character
     */
    getProperty : function() {
      return this.__propertyName;
    }
  }  
});
