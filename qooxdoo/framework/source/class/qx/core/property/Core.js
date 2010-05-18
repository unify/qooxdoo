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
 * Core features for qooxdoo's property system which generates setter/getter
 * pairs with a lot of convenient features.
 */
qx.Bootstrap.define("qx.core.property.Core",
{
  statics :
  {
    RUNTIME_OVERRIDE : false,
    ID : 0,
    
    /**
     * Expand shorthand definition to a four element list.
     * This is an utility function for padding/margin and all other shorthand handling.
     *
     * @param input {Array|arguments} array or arguments object with one to four elements
     * @return {Array} an array with four elements
     */
    expandShortHand : function(input)
    {
      var lArray = qx.lang.Array;
      var result = input instanceof Array ? lArray.clone(input) : lArray.fromArguments(input);

      // Copy Values (according to the length)
      switch(result.length)
      {
        case 1:
          result[1] = result[2] = result[3] = result[0];
          break;

        case 2:
          result[2] = result[0];
          // no break here

        case 3:
          result[3] = result[1];
      }

      // Return list with 4 items
      return result;
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
     *
     * @param clazz {Class} class to add property to
     * @param name {String} name of the property
     * @param config {Map} configuration map
     * @param patch {Boolean ? false} enable refine/patch?
     */
    validateProperty : qx.core.Variant.select("qx.debug",
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
            throw new Error('Could not refine property "' + name + '" without a "refine" flag in the property definition! This class: ' + clazz.classname + ', original class: ' + Class.getByProperty(clazz, name).classname + '.');
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
