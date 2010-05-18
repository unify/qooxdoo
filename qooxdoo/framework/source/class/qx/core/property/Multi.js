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
    
    /** {Map} Map of objects to which needs an update for inheritance (parent changed) */
    __refreshList : null,    

    /** {Integer} Number of properties created. For debug proposes. */
    __counter : 0,
    
    /** {Integer} Maps multi property names to global property IDs */
    __propertyNameToId : {},
    
    /**
     * {Map} Configuration for property fields
     */
    __fields : 
    {
      // Override
      5 : {},
      
      // User
      4: {},
      
      // Theme
      3: {
        get : "getAppearanceValue"
      },
      
      // Inheritance
      2 : {},

      // Init
      1: {}
    },
    
    
    __fieldToPriority :
    {
      init : 1,
      inheritance : 2,
      theme : 3,
      user : 4,
      override : 5
    },
    
    

    /**
     * Returns a list of all inheritable properties supported by the given class
     * 
     * Contrary to {@link getProperties} this method caches requests for better performance
     * in the property system.
     *
     * @param clazz {Class} Class to query
     * @return {Map} All inheritable property names and a dictionary for faster lookup
     */
    getInheritableProperties : function(clazz)
    {
      if (clazz.$$inheritables) {
        return clazz.$$inheritables;
      }
      
      var result = clazz.$$inheritables = {};

      // Find all local properties which are inheritable
      var props = clazz.$$properties;
      if (props) 
      {
        for (var name in props) 
        {
          if (props[name].inheritable) {
            result[name] = true;
          }
        }
      }
        
      var superClass = clazz.superclass;
      if (superClass && superClass !== Object)
      {
        var remote = superClass.$$inheritables || this.getInheritableProperties(superClass);
        for (var name in remote) {
          result[name] = true;
        }
      }
      
      return result;
    },    
    
  
    /**
     * Mark the given object as being moved around and requiring
     * an update to the inheritance.
     * 
     * @param obj {Object} Any object supporting inheritance
     */
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
      var inheritables = clazz.$$inheritables || this.getInheritableProperties(clazz);
      
      // Loop is quite a hack to quickly check for length > 0
      for (var prop in inheritables)
      {
        db[hash] = obj;
        qx.ui.core.queue.Manager.scheduleFlush("inheritance");
        break;
      }
    },
    
    
    /**
     * Flushes the list of objects which were moved around (different parent) 
     * since the last call. This should be called by a central position
     * e.g. before start layouting/painting changes.
     */
    flush : function()
    {
      // Used to measure runtime of flush
      var start = new Date;

      // Replace public list with new list while keeping current one in memory
      var db = this.__refreshList;
      this.__refreshList = null;
      
      // Some shorthands for optimal performance
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
        inheritables = clazz.$$inheritables || this.getInheritableProperties(clazz);

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
      
      // Debug
      if (qx.core.Variant.isSet("qx.debug", "on")) {
        qx.log.Logger.debug(this, "Flushed inheritable properties on " + qx.lang.Object.getKeys(db).length + " objects in: " + (new Date - start) + "ms");
      }
    },
    
    
    /**
     * Imports a list of themed styles from the appearance system
     * 
     * @param obj {qx.ui.core.Widget} Any widget
     * @param newStyles {Map} Map of properties to apply
     * @param oldStyles {Map} Map of previous property values
     */
    importData : function(obj, newStyles, oldStyles)
    {
      var Undefined;
      
      // TODO: Make this hard-coded thingy configurable... somehow
      var themedPriority = 3;

      // Translate name to pre-cached ID
      var nameToId = this.__propertyNameToId;
      
      // Check existence of data structure
      var data = obj.$$data;
      if (!data) {
        data = obj.$$data = {};
      }

      var id, newValue, oldValue, storedPriority, initField;
      var Bootstrap = qx.Bootstrap;
      
      for (var prop in newStyles) 
      {
        id = nameToId[prop];
        
        storedPriority = data[id];
        
        // Ignore if there is a higher priorized value
        if (storedPriority > themedPriority) {
          continue;
        }
        
        newValue = newStyles[prop];
        
        // If nothing is set at the moment and no new value is given
        // then simply ignore the property for the moment
        if (storedPriority === Undefined && newValue === Undefined) {
          continue;
        }
        
        // Whether we are overwriting an old value (the typical case on state changes)
        if (storedPriority == themedPriority) 
        {
          oldValue = oldStyles[prop];
          if (newValue === oldValue) {
            continue;
          }
        }
        else
        {
          if (storedPriority != null) {
            oldValue = data[id+storedPriority];
          } else {
            oldValue = Undefined;
          }
        }
        
        // Read property config
        var config = Bootstrap.getPropertyDefinition(obj.constructor, prop);
        
        // Reset implementation block
        if (newValue === Undefined) 
        {
          for (var newPriority=themedPriority-1; newPriority>0; newPriority--)
          {
            newValue = data[id+newPriority];
            if (newValue !== Undefined) {
              break;
            }
          }
          
          // No value has been found
          if (newValue === Undefined) 
          {
            newPriority = Undefined;
            
            // Let's try the class-wide init value
            initField = "$$init-" + name;
            if (initField) {
              newValue = obj[initField];
            }
            else if (qx.core.Variant.isSet("qx.debug", "on"))
            {
              // Still no value. We warn about that the property is not nullable.
              if (!config.nullable) {
                obj.error("Missing value for: " + name + " (during reset() - from theme system)");
              }
            }
          }          

          // Be sure that priority is right
          data[id] = newPriority;
        }
        
        // Set implementation block
        else if (storedPriority != themedPriority)
        {
          data[id] = themedPriority;
        } 

        // Call change helper
        this.__changeHelper.call(obj, newValue, oldValue, config);
      }
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
        
    
    /**
     * Adds a new property to the given class.
     * 
     * Supports the configuration keys:
     * 
     * * apply: Method to call after a new value has been stored
     * * event: Event to fire after a new value has been stored (and apply has been called)
     * * init: Init value for the property
     * * nullable: Whether the property is able to store null values
     * 
     * Additional features to simple properties:
     * 
     * <ul>
     * <li><strong>themeable</strong>: Whether a themeable value (which 
     *   comes from some kind of styling system) should be supported</li>
     * <li><strong>inheritable</strong>: Whether the property is inheritable 
     *   which means that it might be copied from the parent of the object 
     *   (e.g. in widget systems)</li>
     * <li><strong>deferredInit</strong>: Whether the initialisation of this 
     *   properties should be possible deferred e.g. in the constructor of the 
     *   class. Might be useful if the properties' init value is an instance 
     *   of another class etc.</li>
     * </ul>
     * 
     * Please note that you need to define one of "init" or "nullable". Otherwise you
     * might get errors during runtime function calls.
     *  
     * @param clazz {Class} The class to modify
     * @param name {String} Name of the property. Camel-case. No special characters.
     * @param config {Map} Configuration for the property to being created
     */
    add : function(clazz, name, config)
    {
      /*
      ---------------------------------------------------------------------------
         INTRO: IDENTICAL BETWEEN SIMPLE AND MULTI
      ---------------------------------------------------------------------------
      */
      
      // Improve compressibility
      var Undefined;
      var Null = null;
            
      // Increase counter
      this.__counter++;
            
      // Generate property ID
      // Identically named property might store data on the same field
      // as in this case this is typically on different classes.
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
      if (config.init !== Undefined) 
      {
        var initField = "$$init-" + name;
        members[initField] = config.init;
      }
      
      // Precalc
      var up = config.up = qx.Bootstrap.$$firstUp[name] || qx.Bootstrap.firstUp(name);
         
      // Shorthands: Better compression/obfuscation/performance
      var changeHelper = this.__changeHelper;
      var nullable = config.nullable; 
      var fields = this.__fields;
      

              
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
          if (oldPriority != Null) 
          {
            var oldGetter = fields[oldPriority].get;
            if (oldGetter) {
              var oldValue = context[oldGetter](name);
            } else {
              var oldValue = data[id+oldPriority];
            }            
          }
          
          // Store new value
          data[id+modifyPriority] = newValue;
          
          // Ignore lower-priority changes
          if (oldPriority == Null || oldPriority <= modifyPriority) 
          {
            // Whether the storage field was changed
            if (oldPriority !== modifyPriority) {
              data[id] = modifyPriority;
            }

            // Fallback to init value on prototype chain (when supported)
            // This is always the value on the current class, not explicitely the
            // class which creates the property. This is mainly for supporting
            // init value overrides with "refined" properties
            if (oldValue === Undefined && initField) {
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
            var oldGetter = fields[oldPriority].get;
            if (oldGetter) {
              var oldValue = context[oldGetter](name);
            } else {
              var oldValue = data[id+oldPriority];
            }
            
            // We lost the current value, now we need to find the next stored value
            var newValue;
            for (var newPriority=modifyPriority-1; newPriority>0; newPriority--)
            {
              newValue = data[id+newPriority];
              if (newValue !== Undefined) {
                break;
              }             
            }
            
            // No value has been found
            if (newValue === Undefined) 
            {
              newPriority = Undefined;
              
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
          data[id+modifyPriority] = Undefined;

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

        var currentPriority = data && data[id];
        if (currentPriority == Null) 
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
                    
          return Null;
        }
        
        // Special get() support for themable properties
        var currentGetter = fields[currentPriority].get;
        if (currentGetter) {
          return context[currentGetter](name);
        } else {
          return data[id+currentPriority];
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
            if (oldPriority !== Undefined) {
              return;
            }            
          }
          
          // Call change helper with value from shared class data
          changeHelper.call(context, context[initField], Undefined, config);
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

      // Prio for themes is "3" - we update these values via importStyles()

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

        members["is" + up] = getter;
      }
    }    
  }
});
