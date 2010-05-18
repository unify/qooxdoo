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
    },
    
    
    /**
     * Supported keys for property defintions
     *
     * @internal
     */
    __propertyKeys :qx.core.Variant.select("qx.debug",
    {
      "on" : 
      {
        name         : "string",   // String
        dispose      : "boolean",  // Boolean
        dereference  : "boolean",  // Boolean
        inheritable  : "boolean",  // Boolean
        nullable     : "boolean",  // Boolean
        themeable    : "boolean",  // Boolean
        refine       : "boolean",  // Boolean
        init         : null,       // var
        apply        : "string",   // String
        event        : "string",   // String
        check        : null,       // Array, String, Function
        transform    : "string",   // String
        deferredInit : "boolean",  // Boolean
        validate     : null,       // String, Function,
        up           : "string"    // Name (Dynamically created)  
      },

      "default" : null
    }),


    /**
     * Supported keys for property group definitions
     *
     * @internal
     */
    __propertyGroupKeys : qx.core.Variant.select("qx.debug",
    {
      "on" : {
        name      : "string",   // String
        group     : "object",   // Array
        shorthand : "boolean",  // Boolean
        themeable : "boolean"   // Boolean
      },

      "default" : null
    }),


    /**
     * Validates a property configuration
     * 
     * @signature function(clazz, name, config, patch)
     * @param clazz {Class} class to add property to
     * @param name {String} name of the property
     * @param config {Map} configuration map
     * @param patch {Boolean ? false} enable refine/patch?
     */
    validateConfig : qx.core.Variant.select("qx.debug",
    {
      "on": function(clazz, name, config, patch)
      {
        var Class = qx.Class;
        var has = Class.hasProperty(clazz, name);

        if (has)
        {
          var existingProperty = Class.getPropertyDefinition(clazz, name);

          if (config.refine && existingProperty.init === undefined) {
            throw new Error("Could not refine a init value if there was previously no init value defined. Property '" + name + "' of class '" + clazz.classname + "'.");
          }
        }

        if (!has && config.refine) {
          throw new Error("Could not refine non-existent property: " + name + "!");
        }

        if (has && !patch) {
          throw new Error("Class " + clazz.classname + " already has a property: " + name + "!");
        }

        if (has && patch)
        {
          if (!config.refine) {
            throw new Error('Could not refine property "' + name + '" without a "refine" flag in the property definition! This class: ' + clazz.classname + ', original class: ' + qx.core.property.Util.getByProperty(clazz, name).classname + '.');
          }

          for (var key in config)
          {
            if (key !== "init" && key !== "refine") {
              throw new Error("Class " + clazz.classname + " could not refine property: " + name + "! Key: " + key + " could not be refined!");
            }
          }
        }

        var allowed = config.group ? this.__propertyGroupKeys : this.__propertyKeys;
        for (var key in config)
        {
          if (allowed[key] === undefined) {
            throw new Error('The configuration key "' + key + '" of property "' + name + '" in class "' + clazz.classname + '" is not allowed!');
          }

          if (config[key] === undefined) {
            throw new Error('Invalid key "' + key + '" of property "' + name + '" in class "' + clazz.classname + '"! The value is undefined: ' + config[key]);
          }

          if (allowed[key] !== null && typeof config[key] !== allowed[key]) {
            throw new Error('Invalid type of key "' + key + '" of property "' + name + '" in class "' + clazz.classname + '"! The type of the key must be "' + allowed[key] + '"!');
          }
        }

        if (config.transform != null)
        {
          if (typeof config.transform !== "string") {
            throw new Error('Invalid transform definition of property "' + name + '" in class "' + clazz.classname + '"! Needs to be a String.');
          }
        }

        if (config.check != null)
        {
          if (
            !qx.lang.Type.isString(config.check) &&
            !qx.lang.Type.isArray(config.check) &&
            !qx.lang.Type.isFunction(config.check)
          ) {
            throw new Error('Invalid check definition of property "' + name + '" in class "' + clazz.classname + '"! Needs to be a String, Array or Function.');
          }
        }
      },

      "default" : null
    })    
  }
});
