/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
     2009-2010 Sebastian Werner, http://sebastian-werner.net

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/**
 * This helper class is only included into debug builds and do the 
 * generic property checks defined using the property configuration.
 */
qx.Bootstrap.define("qx.core.property.Debug",
{
  statics :
  {
    /**
     * {Map} Built-in checks. The keys could be used in the check of the properties
     */
    CHECKS :
    {
      "Boolean"   : 'qx.core.Assert.assertBoolean(value, msg) || true',
      "String"    : 'qx.core.Assert.assertString(value, msg) || true',

      "Number"    : 'qx.core.Assert.assertNumber(value, msg) || true',
      "Integer"   : 'qx.core.Assert.assertInteger(value, msg) || true',
      "PositiveNumber" : 'qx.core.Assert.assertPositiveNumber(value, msg) || true',
      "PositiveInteger" : 'qx.core.Assert.assertPositiveInteger(value, msg) || true',

      "Error"     : 'qx.core.Assert.assertInstance(value, Error, msg) || true',
      "RegExp"    : 'qx.core.Assert.assertInstance(value, RegExp, msg) || true',

      "Object"    : 'qx.core.Assert.assertObject(value, msg) || true',
      "Array"     : 'qx.core.Assert.assertArray(value, msg) || true',
      "Map"       : 'qx.core.Assert.assertMap(value, msg) || true',

      "Function"  : 'qx.core.Assert.assertFunction(value, msg) || true',
      "Date"      : 'qx.core.Assert.assertInstance(value, Date, msg) || true',
      "Node"      : 'value !== null && value.nodeType !== undefined',
      "Element"   : 'value !== null && value.nodeType === 1 && value.attributes',
      "Document"  : 'value !== null && value.nodeType === 9 && value.documentElement',
      "Window"    : 'value !== null && value.document',
      "Event"     : 'value !== null && value.type !== undefined',

      "Class"     : 'value !== null && value.$$type === "Class"',
      "Mixin"     : 'value !== null && value.$$type === "Mixin"',
      "Interface" : 'value !== null && value.$$type === "Interface"',
      "Theme"     : 'value !== null && value.$$type === "Theme"',

      "Color"     : 'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',
      "Decorator" : 'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',
      "Font"      : 'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'
    },
    
    
    /**
     * Validates the incoming parameters of a setter method
     * 
     * @param obj {qx.core.Object} Object which is modified
     * @param config {Map} Property configuration
     * @param args {arguments} List of all arguments send to the setter
     */
    checkSetter : function(obj, config, args)
    {
      if (args.length == 0) {
        throw new Error("Called set method of property " + config.name + " with no arguments!");
      }
      
      if (args.length > 1) 
      {
        obj.warn("Called set method of property " + config.name + " with too many arguments!");
        obj.trace();
      }
      
      // TODO: Type checks
      //obj.debug("Check: " + config.check); 
    },
    

    /**
     * Validates the incoming parameters of a resetter method
     * 
     * @param obj {qx.core.Object} Object which is modified
     * @param config {Map} Property configuration
     * @param args {arguments} List of all arguments send to the setter
     */
    checkResetter : function(obj, config, args)
    {
      if (args.length != 0) 
      {
        obj.warn("Called reset method of property " + config.name + " with too many arguments!");
        obj.trace();
      }      
    },
    
    
    /**
     * Validates the incoming parameters of a getter method
     * 
     * @param obj {qx.core.Object} Object which is queried
     * @param config {Map} Property configuration
     * @param args {arguments} List of all arguments send to the setter
     */
    checkGetter : function(obj, config, args)
    {
      if (args.length != 0) 
      {
        obj.warn("Called get method of property " + config.name + " with too many arguments!");
        obj.trace();
      }      
    }
  }
});
