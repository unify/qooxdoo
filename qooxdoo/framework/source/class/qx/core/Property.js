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

/* ************************************************************************

#optional(qx.Interface)
#use(qx.event.dispatch.Direct)

************************************************************************ */

/**
 * Internal class for handling of dynamic properties. Should only be used
 * through the methods provided by {@link qx.Class}.
 * 
 * USAGE
 * 
 * * A property needs to be nullable or must have an init value
 * * Unresolved inheritance falls back to init value or null (if nullable)
 * 
 * INTERNALS
 *
 * * Internally the system now uses crypted storage fields
 * * All data is stored on a $$data object on each instance
 * * Improved inheritance support => Lazy updates on hierarchy updates
 * * AIR support & better compression => No function compilation
 * * Property methods are created at declaration. No more waiting for first instance.
 * 
 * FUNCTIONAL CHANGES
 * 
 * * Inheritance is sorted into priority chain: Has higher priority than init value
 * * There is not "inherit" special value on "init" value anymore!
 * * Deferred init is possible when no init value is given at declaration. No need for deferredInit key anymore!
 *
 * TODO 
 * 
 * * Lay out keywords out of functions e.g. undefined
 * * Move Property checks to qx.core.Property
 * * Split Property Class again into Simple/Complex? Might make sense.
 * 
 * * Add support for special value "inherit" to user/theme/runtime values
 * * Take a look at all open or recently closed bugs on the original Property system.
 * * Add support for check
 * * Add support for verify
 * * Add support for transform
 *  
 * * Fix unit tests
 * * Add new unit tests
 * * Optimize performance
 */ 
 
/**
 * Internal class for handling of dynamic properties. Should only be used
 * through the methods provided by {@link qx.Class}.
 *
 * For a complete documentation of properties take a
 * look at http://qooxdoo.org/documentation/developer_manual/properties.
 *
 * The <code>properties</code> key in the class definition map of {@link qx.Class#define}
 * is used to generate the properties.
 *
 * Valid keys of a property definition are:
 *
 * <table>
 *   <tr><th>Name</th><th>Type</th><th>Description</th></tr>
 *   <tr><th>check</th><td>Array, String, Function</td><td>
 *     The check is used to check the type the incoming value of a property. This will only
 *     be executed in the source version. The build version will not contain the checks.
 *     The check can be:
 *     <ul>
 *       <li>a custom check function. The function takes the incoming value as a parameter and must
 *           return a boolean value to indicate whether the values is valid.
 *       </li>
 *       <li>inline check code as a string e.g. <code>"value &gt; 0 && value &lt; 100"</code></li>
 *       <li>a class name e.g. <code>qx.ui.form.Button</code></li>
 *       <li>a name of an interface the value must implement</li>
 *       <li>an array of all valid values</li>
 *       <li>one of the predefined checks: Boolean, String, Number, Integer, Float, Double,
 *           Object, Array, Map, Class, Mixin, Interface, Theme, Error, RegExp, Function,
 *           Date, Node, Element, Document, Window, Event
 *       </li>
 *     <ul>
 *   </td></tr>
 *   <tr><th>init</th><td>var</td><td>
 *     Sets the default/initial value of the property. If no property value is set or the property
 *     gets reset, the getter will return the <code>init</code> value.
 *   </td></tr>
 *   <tr><th>apply</th><td>String</td><td>
 *     On change of the property value the method of the specified name will be called. The signature of
 *     the method is <code>function(newValue, oldValue)</code>.
 *   </td></tr>
 *   <tr><th>event</th><td>String</td><td>
 *     On change of the property value an event with the given name will be dispached. The event type is
 *     {@link qx.event.type.Data}.
 *   </td></tr>
 *   <tr><th>themeable</th><td>Boolean</td><td>
 *     Whether this property can be set using themes.
 *   </td></tr>
 *   <tr><th>inheritable</th><td>Boolean</td><td>
 *     Whether the property value should be inheritable. If the property does not have a user defined or an
 *     init value, the property will try to get the value from the parent of the current object.
 *   </td></tr>
 *   <tr><th>nullable</th><td>Boolean</td><td>
 *     Whether <code>null</code> is an allowed value of the property. This is complemental to the check
 *     defined using the <code>check</code> key.
 *   </td></tr>
 *   <tr><th>refine</th><td>Boolean</td><td>
 *     Whether the property definition is a refinemnet of a property in one of the super classes of the class.
 *     Only the <code>init</code> value can be changed using refine.
 *   </td></tr>
 *   <tr><th>transform</th><td>String</td><td>
 *     On setting of the property value the method of the specified name will
 *     be called. The signature of the method is <code>function(value)</code>.
 *     The parameter <code>value</code> is the value passed to the setter.
 *     The function must return the modified or unmodified value.
 *     Transformation occurs before the check function, so both may be
 *     specified if desired.  Alternatively, the transform function may throw
 *     an error if the value passed to it is invalid.
 *   </td></tr>
 *   <tr><th>validate</th><td>Function, String</td><td>
 *     On setting of the property value the method of the specified name will
 *     be called. The signature of the method is <code>function(value)</code>.
 *     The parameter <code>value</code> is the value passed to the setter.
 *     If the validation fails, an <code>qx.core.ValidationError</code> should
 *     be thrown by the validation function. Otherwise, just do nothing in the
 *     function.<br>
 *     If a string is given, the string should hold a reference to a member
 *     method.<br>
 *     <code>"<i>methodname</i>"</code> for example
 *     <code>"this.__validateProperty"</code><br>
 *     There are some default validators in the {@link qx.util.Validate} class.
 *     See this documentation for usage examples.
 *   </td></tr>
 * </table>
 *
 * @internal
 */
qx.Bootstrap.define("qx.core.Property",
{
  statics :
  {
    RUNTIME_OVERRIDE : false,
  
    /**
     * Built-in checks
     * The keys could be used in the check of the properties
     */
    __checks :
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


    __propertyNameToId : {},
    __propertyId : 0,

    __getter : {},
    __refresher : {},
    
    __refreshList : {},
        
    
  
    mark : function(obj)
    {
      var db = this.__refreshList;
      var hash = obj.$$hash;      
      if (db[hash]) {
        return;
      }
      
      var clazz = obj.constructor;
      var inheritables = qx.Class.getInheritableProperties(clazz);
      if (inheritables.length == 0) 
      {
        obj.debug("Zero inheritables!");
        return;
      }
      
      db[hash] = obj;
      qx.ui.core.queue.Manager.scheduleFlush("inheritance");
    },
    
    
    flush : function()
    {
      var start = new Date;

      var db = this.__refreshList;
      this.__refreshList = {};
      
      var qxClass = qx.Class;
      var qxBootstrap = qx.Bootstrap;
      var getterDB = this.__getter;
      var refresherDB = this.__refresher;
      var obj, clazz, inheritables, parent, getter, prop, upname;
      for (var key in db) 
      {
        obj = db[key];
        
        clazz = obj.constructor;

        // Shorthand provided by qx.Class to omit function call
        inheritables = clazz.$$inheritables || qxClass.getInheritableProperties(clazz);

        // Loop through properties
        parent = obj.getLayoutParent();
        for (prop in inheritables)
        {
          getter = getterDB[prop] 
          if (!getter) 
          {
            upname = qxBootstrap.firstUp(prop);
            getterDB[prop] = getter = "get" + upname;
            refresherDB[prop] = "refresh" + upname;
          }

          if (parent[getter]) {
            obj[refresherDB[prop]](parent[getter]());
          }
        }
      }
      
      qx.log.Logger.debug(this, "Flushed " + qx.lang.Object.getKeys(db).length + " objects in: " + (new Date - start) + "ms");
    },
    
    
    
    __changeHelper : function(value, oldValue, config)
    {
      // this.debug("Change " + config.name + ": " + oldValue + " => " + value);

      // Call apply
      if (config.apply) {
        this[config.apply](value, oldValue, config.name);
      }

      // Fire event
      if (config.event) {
        this.fireDataEvent(config.event, value, oldValue);
      }
      
      // Inheritance support
      if (config.inheritable)
      {
        // TODO: Replace protected method call
        if (this._getChildren)
        {
          // Clone children for increased runtime security
          var children = this._getChildren().concat();
          var refreshMethod = "refresh" + config.up;
          var child;
          
          for (var i=0, l=children.length; i<l; i++) 
          {
            child = children[i];
            child[refreshMethod] && child[refreshMethod](value);
          }           
        }
        else if (qx.core.Variant.isSet("qx.debug", "on")) {
          this.error("Missing _getChildren() implementation to support property inheritance!");
        }         
      }
    }, 
    
     
    addSimple : function(clazz, name, config)
    {
      /*
      ---------------------------------------------------------------------------
         INTRO: IDENTICAL BETWEEN SIMPLE AND COMPLEX
      ---------------------------------------------------------------------------
      */
            
      // Generate property ID
      var db = this.__propertyNameToId;
      var id = db[name];
      if (!id) {
        id = db[name] = this.__propertyId;
      }
      
      // Store init value (shared data between instances)
      var members = clazz.prototype;
      if (config.init !== undefined) 
      {
        var initField = "$$init" + id;
        members[initField] = config.init;
      }
      
      // Refined properties are only allowed to change the class-wide init value
      // of a previously defined property.
      if (config.refine) {
        return;
      }
      
      // Precalc
      var up = config.up = name.charAt(0).toUpperCase() + name.substring(1);
         
      // Shorthands: Better compression/obfuscation/performance
      var changeHelper = this.__changeHelper;
      var nullable = config.nullable;
      
      
      
            
      /*
      ---------------------------------------------------------------------------
         FACTORY METHODS
      ---------------------------------------------------------------------------
      */      
      
      var id = this.__propertyId++;
      //qx.log.Logger.debug(clazz, "Simple property: " + name + "[" + id + "]");
      
      members["get" + up] = function() 
      {
        var context = this;    
        
        if (qx.core.Variant.isSet("qx.debug", "on")) 
        {
          if (arguments.length != 0) 
          {
            context.warn("Called get method of property " + name + " with too many arguments!");
            context.trace();
          }
        }
         
        var data = context.$$data;
        if (data) {
          var value = data[id];
        }
        
        if (value === undefined) 
        {
          if (initField) {
            return context[initField];
          }            
          
          if (qx.core.Variant.isSet("qx.debug", "on"))
          {
            if (!nullable) {
              context.error("Missing value for: " + name + " (during get())");
            }
          }  
          
          value = null;          
        }
        
        return value;          
      };
      
      if (initField)
      {
        members["init" + up] = function()
        {
          var context = this;
          var data = context.$$data;
          
          // Check whether there is already local data (which is higher prio than init data)
          if (data && data[id] !== undefined) {
            return;
          }
          
          // Call change helper with value from shared class data
          changeHelper.call(context, this[initField], undefined, config);
        };
      }      
      
      members["set" + up] = function(value)
      {
        var context = this;

        if (qx.core.Variant.isSet("qx.debug", "on")) 
        {
          if (arguments.length == 0) {
            throw new Error("Called set method of property " + name + " with no arguments!");
          }
          
          if (arguments.length > 1) 
          {
            context.warn("Called set method of property " + name + " with too many arguments!");
            context.trace();
          }
        }
        
        var data = context.$$data;
        if (!data) {
          data = context.$$data = {};
        } else {
          var old = data[id];
        }

        if (value !== old) 
        {
          if (old === undefined && initField) {
            old = context[initField];
          }
          
          data[id] = value;
          changeHelper.call(context, value, old, config);
        }        
      };
      
      members["reset" + up] = function()
      {
        var context = this;

        if (qx.core.Variant.isSet("qx.debug", "on")) 
        {
          if (arguments.length != 0) 
          {
            context.warn("Called reset method of property " + name + " with too many arguments!");
            context.trace();
          }
        }

        var data = context.$$data;
        if (!data) {
          return;
        }
        
        var old = data[id];
        var value = undefined;

        if (old !== value) 
        {
          data[id] = value;
          
          if (initField) {
            value = context[initField];
          }
          else if (qx.core.Variant.isSet("qx.debug", "on"))
          {
            // Still no value. We warn about that the property is not nullable.
            if (!nullable) {
              context.error("Missing value for: " + name + " (during reset())");
            }
          }    
          
          changeHelper.call(context, value, old, config);
        }             
      };   
      
      if (config.check === "Boolean") 
      {
        members["toggle" + up] = function() {
          this["set" + up](this["get" + up]());
        }

        members["is" + up] = members["get" + up];
      }       
    },
    

    /**
     * Adds a new property to the given class.
     * 
     */
    addComplex : function(clazz, name, config)
    {
      /*
      ---------------------------------------------------------------------------
         INTRO: IDENTICAL BETWEEN SIMPLE AND COMPLEX
      ---------------------------------------------------------------------------
      */
            
      // Generate property ID
      var db = this.__propertyNameToId;
      var id = db[name];
      if (!id) {
        id = db[name] = this.__propertyId;
      }
      
      // Store init value (shared data between instances)
      var members = clazz.prototype;
      if (config.init !== undefined) 
      {
        var initField = "$$init" + id;
        members[initField] = config.init;
      }
      
      // Refined properties are only allowed to change the class-wide init value
      // of a previously defined property.
      if (config.refine) {
        return;
      }
   
      // Precalc
      var up = config.up = name.charAt(0).toUpperCase() + name.substring(1);
         
      // Shorthands: Better compression/obfuscation/performance
      var changeHelper = this.__changeHelper;
      var nullable = config.nullable; 
      
      

              
      /*
      ---------------------------------------------------------------------------
         FACTORY METHODS
      ---------------------------------------------------------------------------
      */

      var setter = function(modifyPriority)
      {
        return function(newValue)
        {
          var context = this;

          if (qx.core.Variant.isSet("qx.debug", "on")) 
          {
            if (arguments.length == 0) {
              throw new Error("Called set method of property " + name + " with no arguments!");
            }
            
            if (arguments.length > 1) 
            {
              context.warn("Called set method of property " + name + " with too many arguments!");
              context.trace();
            }
          }
          
          var current = context.$$current;
          if (!current) {
            current = context.$$current = {};
          }
          var data = context.$$data;
          if (!data) {
            data = context.$$data = {};
          }
          
          // context.debug("Save " + name + "[" + modifyPriority + "]=" + newValue);

          // Read old value
          var oldPriority = current[id];
          if (oldPriority != null) {
            var oldValue = data[id+oldPriority];
          }
          
          // Store new value
          data[id+modifyPriority] = newValue;
          
          // Ignore lower-priority changes
          if (oldPriority == null || oldPriority <= modifyPriority) 
          {
            // Whether the storage field was changed
            if (oldPriority !== modifyPriority) {
              current[id] = modifyPriority;
            }

            // Fallback to init value on prototype chain (when supported)
            // This is always the value on the current class, not explicitely the
            // class which creates the property. This is mainly for supporting
            // init value overrides with "refined" properties
            if (oldValue === undefined && initField) {
              oldValue = context[initField];
            }

            // this.debug("Value Compare: " + newValue + " !== " + oldValue);
            // Whether the value has been modified
            if (newValue !== oldValue) {
              changeHelper.call(context, newValue, oldValue, config);
            }     
          }
        };      
      };

          
      var resetter = function(modifyPriority)
      {
        return function(value)
        {
          var context = this;

          if (qx.core.Variant.isSet("qx.debug", "on")) 
          {
            if (arguments.length != 0) 
            {
              context.warn("Called reset method of property " + name + " with too many arguments!");
              context.trace();
            }
          }
          
          var current = context.$$current;
          if (!current) {
            return;
          }
          var data = context.$$data;        
          
          // context.debug("Delete " + name + "[" + modifyPriority + "]");

          // Only need to react when current field is resetted
          var oldPriority = current[id];
          if (oldPriority === modifyPriority) 
          {
            // Read old value
            var oldValue = data[id+oldPriority];            
            
            // We lost the current value, now we need to find the next stored value
            var newValue;
            for (var newPriority=modifyPriority-1; newPriority>=0; newPriority--)
            {
              newValue = data[id+newPriority];
              if (newValue !== undefined) {
                break;
              }             
            }
            
            // No value has been found
            if (newValue === undefined) 
            {
              newPriority = undefined;
              
              // Let's try the class-wide init value
              if (initField) {
                newValue = context[initField];
              }
              else if (qx.core.Variant.isSet("qx.debug", "on"))
              {
                // Still no value. We warn about that the property is not nullable.
                if (!nullable) {
                  context.error("Missing value for: " + name + " (during reset())");
                }
              }
            }
            
            // Update current field
            current[id] = newPriority;
          }
          
          // Remove value from store
          // This is placed here, because we need to keep the old value first
          // and only want to do this when needed.
          // Do not use delete operator as this is not good for performance:
          // just modifying the value to undefined is enough.
          data[id+modifyPriority] = undefined;

          // Only need to react when current field is resetted
          if (oldPriority === modifyPriority && oldValue !== newValue) {         
            changeHelper.call(context, value, oldValue, config);
          }
        };
      };      
      
      
      
      
      /*
      ---------------------------------------------------------------------------
         ATTACH METHODS
      ---------------------------------------------------------------------------
      */      
      
      // Add getter
      members["get" + up] = function()
      {
        var context = this;

        if (qx.core.Variant.isSet("qx.debug", "on")) 
        {
          if (arguments.length != 0) 
          {
            context.warn("Called get method of property " + name + " with too many arguments!");
            context.trace();
          }
        }
                
        var current = context.$$current;
        if (current) {
          var currentPrio = current[id];
        }        
        
        if (currentPrio == null) 
        {
          // Fallback to init value on prototype chain (when supported)
          // This is always the value on the current class, not explicitely the
          // class which creates the property. This is mainly for supporting
          // init value overrides with "refined" properties
          if (initField) {
            return context[initField];
          }
          
          if (qx.core.Variant.isSet("qx.debug", "on"))
          {
            if (!nullable) {
              context.error("Missing value for: " + name + " (during get())");
            }
          }
                    
          return null;
        }

        return context.$$data[id+currentPrio];
      };
      
      
      var currentPriority = 0;
      
      // There are exactly two types of init methods:
      // 1. Initializing the value given in the property configuration
      //    (calling apply methods, firing events, etc.)
      // 2. Initializing the value during instance creation 
      //    (useful for reference values which should not be shared between all instances)
      if (initField)
      {
        members["init" + up] = function()
        {
          var context = this;
          var current = context.$$current;
          if (current) 
          {
            // Check whether there is already another value assigned.
            // In this case the whole function could be left early.
            var oldPriority = current[id];
            if (oldPriority != null) {
              return;
            }            
          }
          
          // Call change helper with value from shared class data
          changeHelper.call(context, this[initField], undefined, config);
        };
      }
      
      // When we do not have a init value at configuration level, we allow 
      // the user to submit an init value during constructor phase. But as this
      // is not needed very often there is a special option "deferredInit" to enable it.
      else if (config.deferredInit === true) 
      {
        members["init" + up] = setter(currentPriority);
        currentPriority++;
      }
            
      if (config.inheritable) 
      {
        members["refresh" + up] = setter(currentPriority);
        currentPriority++;
      }

      if (config.themeable)
      {
        members["setThemed" + up] = setter(currentPriority);
        members["resetThemed" + up] = resetter(currentPriority);
        currentPriority++;
      }

      members["set" + up] = setter(currentPriority);
      members["reset" + up] = resetter(currentPriority);
      currentPriority++;
      
      if (this.RUNTIME_OVERRIDE)
      {
        members["setRuntime" + up] = setter(currentPriority);
        members["resetRuntime" + up] = resetter(currentPriority);
        // currentPriority++; (last entry)
      }
      
      if (config.check === "Boolean") 
      {
        members["toggle" + up] = function() {
          this["set" + up](this["get" + up]());
        }

        members["is" + up] = members["get" + up];
      }
      
      // qx.log.Logger.debug(clazz, "Complex property: " + name + "[" + id + "](" + currentPriority + ")");
      this.__propertyId += currentPriority;
    }
  }
});
