/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2010 Sebastian Werner, http://sebastian-werner.net

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)

************************************************************************ */

/**
 * Convenient type check API with focus on small base set features, mainly as
 * used by the property system, and an additional possibility to register
 * new types dynamically.
 */
qx.Class.define("qx.core.Type",
{
  statics :
  {
    // TODO
    // "Window"    : 'value !== null && value.document',
    // "Event"     : 'value !== null && value.type !== undefined',
    // "Decorator" : 'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',
    // "Font"      : 'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'

    __hacks :
    {
      "String" : "$$isString"
    },
    
    __native :
    {
      "String" : 1,
      "Number" : 1,
      "Function" : 1,
      "RegExp" : 1,
      "Date" : 1,
      "Boolean" : 1,
      "Array" : 1,
      "Object" : 1,
      "Error" : 1
    },
    
    __nativeVariations :
    {
      "Integer" : "Number",
      "PositiveNumber" : "Number",
      "PositiveInteger" : "Number"
    },
    
    __primitive :
    {
      "String" : "string",
      "Number" : "number",
      "Boolean" : "boolean"
    },
    
    __stringToClass :
    {
      "[object String]": "String",
      "[object Array]": "Array",
      "[object Object]": "Object",
      "[object RegExp]": "RegExp",
      "[object Number]": "Number",
      "[object Boolean]": "Boolean",
      "[object Date]": "Date",
      "[object Function]": "Function",
      "[object Error]": "Error"
    },    
    
    __classLike :
    {
      "Class" : 1,
      "Mixin" : 1,
      "Interface" : 1,
      "Theme" : 1
    },
    
    __nodeLike :
    {
      "Node" : 1,
      "Element" : 1,
      "Document" : 1
    },
    
    __addons : {},
        
    
    /**
     * Registers new types to the class.
     * 
     * The function should return <code>false</code> whenever the value is invalid.
     * 
     * @param type {String} Identifier of the type. Should be camel-case (with first character being uppercase)
     * @param method {Function} Pointer to function to call
     * @param context {Object} Context to call the function in
     */
    add : function(type, method, context)
    {
      var db = this.__addons;
      
      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        if (db[type]) {
          throw new Error("Type if already registered by another class: " + type);
        }
      }
      
      qx.log.Logger.info(this, "Add check for type: " + type);
      db[type] = 
      {
        method : method,
        context : context
      };
    },
    
    
    /**
     * Advanced type checks offered by the property system, made available
     * widely for usage in other scenarios as well. 
     * 
     * Just call the method with the value and any of the property 
     * system supported checks and the method throws an error whenever
     * the incoming value does not conform.
     * 
     * @param value {var} Any value
     * @param check {String} Any supported check e.g. native type, class name, ...
     */
    check : function(value, check)
    {
      var result;
      
      if (value == null) {
        result = check == "Object" || check == "Null";
      }
      
      else if (typeof check == "string")
      {
        // Check basic native types
        if (this.__native[check] || this.__nativeVariations[check]) 
        {
          var nativeCheck = this.__nativeVariations[check];
          if (nativeCheck)
          {
            var variant = check;
            check = nativeCheck;
          }

          var type = this.__primitive[check];
          if (type) {
            result = typeof value == type;
          } 

          if (!result) {
            result = this.__stringToClass[Object.prototype.toString.call(value)] == check;
          }

          var hack = this.__hacks[check];
          if (!result && hack) {
            result = hack in value; 
          }

          if (result && check == "Number") {
            result = isFinite(value);
          }

          if (variant) 
          {
            check = variant;

            if (result)
            {
              if (check == "Integer") {
                result = value % 1 == 0;
              } else if (check == "PositiveInteger") {
                result = value % 1 == 0 && value >= 0;
              } else if (check == "PositiveNumber") {
                result = value >= 0;
              }
            }
          }
        }   

        // Check node types
        else if (this.__nodeLike[check])
        {
          result = value.nodeType != null && (check == "Node" || (check == "Element" && value.nodeType == 1) || (check == "Document" && value.nodeType == 9));
        }

        // Check class like types
        else if (this.__classLike[check]) 
        {
          result = value.$$type == check;
        } 

        else
        {
          // Check classes, interfaces, mixins
          var clazz = qx.Class.getByName(check);
          if (clazz) {
            result = value.hasOwnProperty && value instanceof clazz;
          }
          else
          {
            var iface = qx.Interface.getByName(check);
            if (iface) {
              result = qx.Bootstrap.hasInterface(value.constructor, iface);
            } 
            else
            {
              var mixin = qx.Mixin.getByName(check);
              if (mixin) {
                result = qx.Class.hasMixin(value.constructor, mixin);
              }
            }          
          }        
        } 
        
        // Support dynamically added checks as well
        if (result == null)
        {
          var addon = this.__addons[check];
          if (addon) {
            result = addon.method.call(addon.context||window, value);
          }
        }       
      }
          
      // Multi value lists 
      else if (check instanceof Array)
      {
        if (check.indexOf) 
        {
          result = check.indexOf(value) != -1;
        }
        else
        {
          result = false;
          for (var i=0, l=check.length; i<l; i++) 
          {
            if (value === check[i]) 
            {
              result = true;
              break;
            }
          }
        }
      }
      
      // Custom functions
      else if (check instanceof Function) 
      {
        result = check(value);
      }      
      

      // Done
      if (result == null) {
        qx.log.Logger.warn("Unsupported check: " + check)
      } else if (result == false) {
        qx.log.Logger.error("Value: '" + value + "' does not validates as: " + check);
        //throw new Error("Value: '" + value + "' does not validates as: " + check);
      }
    }    
  }
});