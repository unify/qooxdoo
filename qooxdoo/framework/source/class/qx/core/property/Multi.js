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

#use(qx.event.dispatch.Direct)

************************************************************************ */

qx.Bootstrap.define("qx.core.property.Multi",
{
  statics :
  {
    __getter : {},
    __refresher : {},
    
    __refreshList : null,
        
    
  
    mark : function(obj)
    {
      var db = this.__refreshList;
      if (!db) {
        db = this.__refreshList = {};
      }
      var hash = obj.$$hash;      
      if (db[hash]) {
        return;
      }
      
      var clazz = obj.constructor;
      var inheritables = clazz.$$inheritables || qx.Class.getInheritableProperties(clazz);
      
      // Loop is quite a hack to quickly check for length > 0
      for (var prop in inheritables)
      {
        db[hash] = obj;
        qx.ui.core.queue.Manager.scheduleFlush("inheritance");
        break;
      }
    },
    
    
    flush : function()
    {
      var start = new Date;

      // Replace public list with new list while keeping current one in memory
      var db = this.__refreshList;
      this.__refreshList = null;
      
      // Some shorthands for optimal performance
      var qxClass = qx.Class;
      var qxBootstrap = qx.Bootstrap;
      var getterDB = this.__getter;
      var refresherDB = this.__refresher;
      
      // Real work
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
    
    __propertyNameToId : {},    
    
    /**
     * Adds a new property to the given class.
     * 
     */
    add : function(clazz, name, config)
    {
      /*
      ---------------------------------------------------------------------------
         INTRO: IDENTICAL BETWEEN SIMPLE AND MULTI
      ---------------------------------------------------------------------------
      */
            
      // Generate property ID
      // Identically named property might store data on the same field
      // as in this case this is typicall on different classes.
      // We reserve five slots for storing data: init, theme, inheritance, override, user
      // At any moment we add more features, we need to increase the increment as well!
      var db = this.__propertyNameToId;
      var id = db[name];
      if (!id) 
      {
        id = db[name] = qx.core.property.Core.ID;
        qx.core.property.Core.ID+=10;
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
      var up = config.up = qx.Bootstrap.$$firstUp[name] || qx.Bootstrap.firstUp(name);
         
      // Shorthands: Better compression/obfuscation/performance
      var changeHelper = this.__changeHelper;
      var nullable = config.nullable; 
      
      

              
      /*
      ---------------------------------------------------------------------------
         FACTORY METHODS :: SETTER
      ---------------------------------------------------------------------------
      */

      var setter = function(modifyPriority)
      {
        return function(newValue)
        {
          var context = this;

          if (qx.core.Variant.isSet("qx.debug", "on")) {
            qx.core.property.Debug.checkSetter(context, config, arguments);
          }
          
          var data = context.$$data;
          if (!data) {
            data = context.$$data = {};
          }
          
          // context.debug("Save " + name + "[" + modifyPriority + "]=" + newValue);

          // Read old value
          var oldPriority = data[id];
          if (oldPriority != null) 
          {
            if (oldPriority == 3) {
              var oldValue = null;//this.getAppearanceValue(name);
              // TODO: Access to old value              
            } else {
              var oldValue = data[id+oldPriority];
            }            
          }
          
          // Store new value
          if (modifyPriority != 3) {
            data[id+modifyPriority] = newValue;
          }
          
          // Ignore lower-priority changes
          if (oldPriority == null || oldPriority <= modifyPriority) 
          {
            // Whether the storage field was changed
            if (oldPriority !== modifyPriority) {
              data[id] = modifyPriority;
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



      /*
      ---------------------------------------------------------------------------
         FACTORY METHODS :: RESETTER
      ---------------------------------------------------------------------------
      */
          
      var resetter = function(modifyPriority)
      {
        return function(value)
        {
          var context = this;

          if (qx.core.Variant.isSet("qx.debug", "on")) {
            qx.core.property.Debug.checkResetter(context, config, arguments);
          }
          
          var data = context.$$data;        
          
          // context.debug("Delete " + name + "[" + modifyPriority + "]");

          // Only need to react when current field is resetted
          var oldPriority = data[id];
          if (oldPriority === modifyPriority) 
          {
            // Read old value
            if (oldPriority == 3) {
              var oldValue = null;//this.getAppearanceValue(name);
              // TODO: Access to old value
            } else {
              var oldValue = data[id+oldPriority];
            }
            
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
            data[id] = newPriority;
          }
          
          // Remove value from store
          // This is placed here, because we need to keep the old value first
          // and only want to do this when needed.
          // Do not use delete operator as this is not good for performance:
          // just modifying the value to undefined is enough.
          if (modifyPriority != 3) {
            data[id+modifyPriority] = undefined;
          }          

          // Only need to react when current field is resetted
          if (oldPriority === modifyPriority && oldValue !== newValue) {         
            changeHelper.call(context, value, oldValue, config);
          }
        };
      };      
      
      
      
      
      /*
      ---------------------------------------------------------------------------
         FACTORY METHODS :: GETTER
      ---------------------------------------------------------------------------
      */

      var getter = function()
      {
        var context = this;

        if (qx.core.Variant.isSet("qx.debug", "on")) {
          qx.core.property.Debug.checkGetter(context, config, arguments);
        }
        
        var data = context.$$data;

        var currentPrio = data && data[id];
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
        
        // Special get() support for themable properties
        if (currentPrio == 3) {
          return context.getAppearanceValue(name);
        } else {
          return data[id+currentPrio];
        }
      };
      
      
      
      /*
      ---------------------------------------------------------------------------
         FACTORY METHODS :: ATTACH METHODS
      ---------------------------------------------------------------------------
      */
      
      members["get" + up] = getter;

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
          var data = context.$$data;
          if (data) 
          {
            // Check whether there is already another value assigned.
            // In this case the whole function could be left early.
            var oldPriority = data[id];
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
        members["init" + up] = setter(1);
      }
            
      if (config.inheritable) 
      {
        members["refresh" + up] = setter(2);
      }

      if (config.themeable)
      {
        members["setThemed" + up] = setter(3);
        members["resetThemed" + up] = resetter(3);
      }

      members["set" + up] = setter(4);
      members["reset" + up] = resetter(4);
      
      if (this.RUNTIME_OVERRIDE)
      {
        members["setRuntime" + up] = setter(5);
        members["resetRuntime" + up] = resetter(5);
      }
      
      
      
      /*
      ---------------------------------------------------------------------------
         FACTORY METHODS :: GOODIES
      ---------------------------------------------------------------------------
      */
            
      if (config.check === "Boolean") 
      {
        members["toggle" + up] = function() {
          this["set" + up](!this["get" + up]());
        }

        members["is" + up] = members["get" + up];
      }
    }    
  }
});
