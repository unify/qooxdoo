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

/**
 * Multi-level property which support multiple values per properties which
 * integrated priorization. The following fields are available for properties
 * depdending on their configuration:
 * 
 * # Init
 * # Inheritable
 * # Theme
 * # Instance
 * # Override
 * 
 * Higher values mean higher priority e.g. user values override themed values.
 * 
 * 
 */
qx.Bootstrap.define("qx.core.property.Multi",
{
  statics :
  {
    /** {Map} Map of objects to which needs an update for inheritance (parent changed) */
    __movedObjects : null,    

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
      
      // User (aka Instance-specific value)
      4: {},
      
      // Theme
      3: {
        get : "getThemedValue"
      },
      
      // Inheritance
      2 : {
        get : "getInheritedValue"
      },

      // Init (aka Class-specific default)
      1: {}
    },
    
    /**
     * Maps the name of a field to its priority
     * 
     */
    __fieldToPriority :
    {
      init : 1,
      inherited : 2,
      theme : 3,
      user : 4,
      override : 5
    },
    
    
    /**
     * Returns a value from a specific field for the given property - ignoring the priorities.
     * 
     * @param obj {qx.core.Object} Any object with the given property
     * @param prop {String} Name of the property to query
     * @param field {String} One of "init", "inheritance", "theme", "user" or "override"
     */
    getSingleValue : function(obj, prop, field) 
    {
      var key = this.__propertyNameToId[prop] + this.__fieldToPriority[field];
      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        if (typeof key != "number" || isNaN(key)) {
          throw new Error("Invalid property or field: " + prop + ", " + field);
        }
      }
      
      return obj.$$data[key];
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
      var result = clazz.$$inheritables;
      if (result) 
      {
        if (qx.core.Variant.isSet("qx.debug", "on")) {
          qx.log.Logger.debug(this, "You may choose to access inheritable properties via: obj.$$inheritables || qx.core.property.Multi.getInheritableProperties(obj) for better performance.");
        }
        
        return result;
      }
      
      result = clazz.$$inheritables = {};

      // Find all local properties which are inheritable
      var props = clazz.$$properties;
      if (props) 
      {
        for (var name in props) 
        {
          if (props[name].inheritable) {
            result[name] = props[name];
          }
        }
      }
        
      var superClass = clazz.superclass;
      if (superClass && superClass !== Object)
      {
        var remote = superClass.$$inheritables || this.getInheritableProperties(superClass);
        for (var name in remote) {
          result[name] = remote[name];
        }
      }
      
      /*
      if (qx.core.Variant.isSet("qx.debug", "on")) {
        qx.log.Logger.debug(this, "Cached " + qx.Bootstrap.objectGetLength(result) + " inheritable properties for " + clazz.classname);
      } 
      */     
      
      return result;
    },    
    
  
    /**
     * Mark the given object as being moved around and requiring
     * an update to the inheritance.
     * 
     * @param obj {Object} Any object supporting inheritance
     */
    markAsMoved : function(obj)
    {
      var moved = this.__movedObjects;
      if (!moved) {
        moved = this.__movedObjects = {};
      }
      var objectHash = obj.$$hash;      
      if (moved[objectHash]) {
        return;
      }
      
      var clazz = obj.constructor;
      var inheritables = clazz.$$inheritables || this.getInheritableProperties(clazz);
      
      // Loop is quite a hack to quickly check for length > 0
      for (var prop in inheritables)
      {
        moved[objectHash] = obj;
        qx.ui.core.queue.Manager.scheduleFlush("inheritance");
        break;
      }
    },
    
    
    /**
     * Caches old values and detect which object/property combinations could be filtered
     * out for further processing because of existing values with higher priorities
     * 
     * @param movedObjects {Map} All moved objects
     * @param oldValues {Map} Map where old values should be stored into
     * @param filter {Map} Object/Property combinations which should not be processed further
     */
    __flushPrepare : function(movedObjects, oldValues, filter)
    {
      var objectHash, obj, data, clazz, properties, prop, propertyId, oldField, initKey, oldValue, oldGetter;
      var propertyNameToId = this.__propertyNameToId;
      var inheritedPriority = this.__fieldToPriority.inherited;
      var fields = this.__fields;
      var Undefined;
      
      // Process all moved objects
      for (objectHash in movedObjects)
      {
        obj = movedObjects[objectHash];
        data = obj.$$data;
        clazz = obj.constructor;
        properties = clazz.$$inheritables || this.getInheritableProperties(clazz);

        // Process all inheritable properties
        for (prop in properties)
        {
          propertyId = propertyNameToId[prop];
          oldField = data[propertyId];
          
          // Has no value at the moment.
          // We try the init value here, but keep in undefined if even this is not available.
          if (oldField === Undefined)
          {
            initKey = "$$init-" + prop;
            if (initKey in clazz) {
              oldValues[objectHash+"-"+propertyId] = clazz[initKey];
            }
          }          
          
          // Value stored which is inherited or of lower priority e.g. init field (deferred init)
          else if (oldField <= inheritedPriority)
          {
            // Delete old data
            data[propertyId] = Undefined;
                        
            // Read out old value
            oldGetter = fields[oldField].get;
            if (oldGetter) {
              oldValue = obj[oldGetter](prop);
            } else {
              oldValue = data[propertyId+oldField];
            }
            
            // Remeber old value for comparison
            oldValues[objectHash+"-"+propertyId] = oldValue;
          }
          
          // Has higher priority value, don't affected by inheritance
          else
          {
            filter[objectHash+"-"+propertyId] = true;
          }
        }
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
      var movedObjects = this.__movedObjects;
      this.__movedObjects = null;      
      
      // Debug
      var Logger = qx.log.Logger;      
      Logger.info(this, "Flushing " + qx.lang.Object.getKeys(movedObjects).length + " objects");
    
    

      /*
      ---------------------------------------------------------------------------
         INVALIDATION & CACHING OF OLD VALUES
      ---------------------------------------------------------------------------
      */
            
      var oldValues = {};
      var filter = {};      
      this.__flushPrepare(movedObjects, oldValues, filter);
      Logger.debug(this, "Old values: " + JSON.stringify(oldValues));
      Logger.debug(this, "Filter items: " + JSON.stringify(filter));
      
      
      
      /*
      ---------------------------------------------------------------------------
         PROCESSING OF INVALID ENTRIES
      ---------------------------------------------------------------------------
      */
      
      var objectHash, obj, clazz, properties, prop, propertyId, oldValue;
      var target, targetData, targetHash, origin, value, config, storeField, storeGetter;
      var propertyNameToId = this.__propertyNameToId
      var inheritedPriority = this.__fieldToPriority.inherited;
      var fields = this.__fields;
      var Undefined;

      // Used to remember all object/property combinations which are processed
      // during this function call. Mainly to omit double processing items.
      var processed = {};

      // Process all objects which have been moved
      for (objectHash in movedObjects)
      {
        obj = movedObjects[objectHash];
        Logger.debug(this, "Flush " + obj);
        
        // Read inheritable properties (they are already cached, by __flushPrepare)
        clazz = obj.constructor;
        properties = clazz.$$inheritables;
        
        // Process all inherited properties
        for (prop in properties)
        {
          propertyId = propertyNameToId[prop];
          
          // Filter object/property combis with higher priority values
          if (filter[objectHash+"-"+propertyId]) {
            continue;
          }
          
          // Filter processed object/property combis
          if (processed[objectHash+"-"+propertyId]) 
          {
            obj.debug("  - Already done: " + prop);
            continue;
          }


          
          obj.debug("- Property: " + prop);
          processed[objectHash+"-"+propertyId] = true;
          
          // Start with direct parent for value lookup
          target = obj.$$parent;
          targetHash = target.$$hash;
          value = Undefined;
          config = properties[prop];
          while (target)
          {
            storeField = target.$$data[propertyId];
            if (storeField !== Undefined)
            {
              // Depdending on field configuration make use of either a getter 
              // method or read data from object
              storeGetter = fields[storeField].get;
              if (storeGetter) {
                value = target[storeGetter](prop);
              } else {
                value = target.$$data[propertyId+storeField];
              }
              
              obj.debug("  - Found local value: " + value + " in " + target);
              break;
            }
            else if (config.init !== Undefined)
            {
              value = target["$$init-" + prop];
              if (value !== Undefined) 
              {
                obj.debug("  - Found init value: " + value + " in " + target);
                break;
              }
            }

            // Debug
            obj.debug("  - No value in: " + target);
            
            // This entry was already processed previously and also lead to no value
            // We can break here for better performance
            if(processed[targetHash+"-"+propertyId]) {
              obj.debug("  - Already processed target => break here");
              break;
            }
            
            // Next parent
            target = target.$$parent;
          }
          
          // The idea is to update every parent which had no useful data
          // with the same data as the request child
          
          // "origin" is the object which has lead to a value we can work with
          origin = target;
          
          // "target" is the current processed parent
          // in this case we start with the "obj" itself as this is the first
          // which should be updated
          target = obj;
          
          obj.debug("    - Update all between: " + obj + " and " + (origin||"ROOT"));

          while (target && target != origin)
          {
            obj.debug("      - Update: " + target);
            
            targetHash = target.$$hash;
            targetData = target.$$data;
            storeField = targetData[propertyId];
            
            processed[targetHash+"-"+propertyId] = true;
            
            // Read old value
            var oldValue = oldValues[targetHash+"-"+propertyId];
            
            // Store value in each target
            if (value !== Undefined)
            {
              obj.debug("        - Store origin")
              targetData[propertyId] = inheritedPriority;
              targetData[propertyId+inheritedPriority] = origin;
            }
            else
            {
              if (targetData[propertyId] == inheritedPriority) {
                obj.debug("        - Clear field");
                targetData[propertyId] = Undefined;
              }
              
              if (targetData[propertyId+inheritedPriority] !== Undefined) 
              {
                obj.debug("        - Clear origin");
                targetData[propertyId+inheritedPriority] = Undefined;
              }              
            }

            // Call apply / fire event
            if (value !== oldValue)
            {
              config = properties[prop];
              
              obj.debug("        - Publish change: " + value);
              
              if (config.apply) {
                target[config.apply](value, oldValue, config.name);
              }

              if (config.event) {
                target.fireDataEvent(config.event, value, oldValue);
              }
            }

            // Next parent
            target = target.$$parent;
          }
        }
      }
      
      
      
      /*
      ---------------------------------------------------------------------------
         DONE
      ---------------------------------------------------------------------------
      */      

      // Debug
      if (qx.core.Variant.isSet("qx.debug", "on")) {
        Logger.debug(this, "Flushed inheritable properties in: " + (new Date - start) + "ms");
      }
    },
    

    
    /**
     * Helper method to react on property changes
     * 
     * @param value {var} New value of property
     * @param oldValue {var} Old value of property
     * @param config {Map} Property configuration
     */
    __changeHelper : function(value, oldValue, config, origin)
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
        var MultiProperty = qx.core.property.Multi;
        
        if (!origin) {
          origin = this;
        }

        var name = config.name;
        this.debug("Inheritable Property Changed: " + name + "=" + value + " by " + origin);
        return;

        var children = this._getChildren();
        var length = children.length;
        var child, data, field;
        var PropertyUtil = qx.core.property.Util;
        var MultiProperty = qx.core.property.Multi;
        var propertyId = MultiProperty.__propertyNameToId[name];
        var inheritedPriority = MultiProperty.__fieldToPriority.inherited;

        for (var i=0; i<length; i++)
        {
          child = children[i];
          data = child.$$data;
          
          if (!data) {
            data = child.$$data = {};
          }
          
          field = data[propertyId];
          
          if (field == null || field <= inheritedPriority)
          {
            data[propertyId] = inheritedPriority;
            data[propertyId+inheritedPriority] = origin;
            
            config = PropertyUtil.getPropertyDefinition(child.constructor, name);            
            MultiProperty.__changeHelper.call(child, value, oldValue, config, origin);
          }
        }
      }
    }, 
    
    
    /**
     * Imports a list of values. Useful for batch-applying a whole set of properties. Supports
     * <code>undefined</code> values to reset properties.
     * 
     * @param obj {qx.ui.core.Widget} Any widget
     * @param values {Map} Map of properties to apply
     * @param oldValues {Map} Map of old property values. Just used for comparision. 
     *    Required for theme changes. In case of a state change the old value is not available otherwise.
     * @param modifyPriority {Integer} Priority (read: field) to apply data to
     */
    importData : function(obj, values, oldValues, modifyPriority)
    {
      var Undefined;
      
      // Translate name to pre-cached ID
      var propertyNameToId = this.__propertyNameToId;
      
      // Check existence of data structure
      var data = obj.$$data;
      if (!data) {
        data = obj.$$data = {};
      }

      var propertyId, newValue, oldValue, oldPriority, initField;
      var PropertyUtil = qx.core.property.Util;
      var fields = this.__fields;
      
      for (var prop in values) 
      {
        propertyId = propertyNameToId[prop];
        
        oldPriority = data[propertyId];
        
        // Ignore if there is a higher priorized value
        // Earliest return option: Higher priorized value set
        if (oldPriority > modifyPriority) {
          continue;
        }
        
        newValue = values[prop];
        
        // If nothing is set at the moment and no new value is given
        // then simply ignore the property for the moment
        if (oldPriority === Undefined && newValue === Undefined) {
          continue;
        }
        
        // Read out old value
        if (oldPriority != null) 
        {
          if (oldValues && oldPriority == modifyPriority) {
            oldValue = oldValues[prop];
          } 
          else 
          {
            var oldGetter = fields[oldPriority].get;
            if (oldGetter) {
              oldValue = obj[oldGetter](prop);
            } else {
              oldValue = data[propertyId+oldPriority];
            }           
          }          
        }
        else
        {
          oldValue = Undefined;
        }
        
        // Compare old and new value
        // Second earliest return option: New value given and identical to old
        if (oldValue === newValue) {
          continue;
        }
        
        // Reset implementation block
        if (newValue === Undefined) 
        {
          // We lost the current value, now we need to find the next stored value
          var newValue, newGetter;
          
          for (var newPriority=modifyPriority-1; newPriority>0; newPriority--)
          {
            newGetter = fields[newPriority].get;
            if (newGetter) {
              newValue = obj[newGetter](prop);
            } else {
              newValue = data[propertyId+newPriority];
            }              

            if (newValue !== Undefined) {
              break;
            }             
          }
          
          // No value has been found
          if (newValue === Undefined) 
          {
            newPriority = Undefined;
            
            // Let's try the class-wide init value
            initField = "$$init-" + prop;
            if (initField) {
              newValue = obj[initField];
            }
            else if (qx.core.Variant.isSet("qx.debug", "on"))
            {
              // Still no value. We warn about that the property is not nullable.
              var config = PropertyUtil.getPropertyDefinition(obj.constructor, prop);
              if (!config.nullable) {
                obj.error("Missing value for: " + prop + " (during reset() - from theme system)");
              }
            }
          }          

          // Be sure that priority is right
          data[propertyId] = newPriority;
        }
        
        // Set implementation block
        else if (oldPriority != modifyPriority)
        {
          data[propertyId] = modifyPriority;
        } 

        // Call change helper
        // Third earlist "return" option, ok, not really a return option, but
        // we at least omit useless change calls when values are identical
        if (newValue !== oldValue) 
        {
          var config = PropertyUtil.getPropertyDefinition(obj.constructor, prop);
          this.__changeHelper.call(obj, newValue, oldValue, config);
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
      var propertyNameToId = this.__propertyNameToId;
      var propertyId = propertyNameToId[name];
      if (!propertyId) 
      {
        propertyId = propertyNameToId[name] = qx.core.property.Core.ID;
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
      var up = qx.Bootstrap.$$firstUp[name] || qx.Bootstrap.firstUp(name);
         
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
          var oldPriority = data[propertyId];
          if (oldPriority != Null) 
          {
            var oldGetter = fields[oldPriority].get;
            if (oldGetter) {
              var oldValue = context[oldGetter](name);
            } else {
              var oldValue = data[propertyId+oldPriority];
            }            
          }
          
          // Store new value
          data[propertyId+modifyPriority] = newValue;
          
          // Ignore lower-priority changes
          if (oldPriority == Null || oldPriority <= modifyPriority) 
          {
            // Whether the storage field was changed
            if (oldPriority !== modifyPriority) {
              data[propertyId] = modifyPriority;
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
          var oldPriority = data[propertyId];
          if (oldPriority === modifyPriority) 
          {
            // Read old value
            var oldValue = data[propertyId+oldPriority];
            
            // We lost the current value, now we need to find the next stored value
            var newValue, newGetter;
            for (var newPriority=modifyPriority-1; newPriority>0; newPriority--)
            {
              newGetter = fields[newPriority].get;
              if (newGetter) {
                newValue = context[newGetter](name);
              } else {
                newValue = data[propertyId+newPriority];
              }              

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
            data[propertyId] = newPriority;
          }
          
          // Remove value from store
          // This is placed here, because we need to keep the old value first
          // and only want to do this when needed.
          // Do not use delete operator as this is not good for performance:
          // just modifying the value to undefined is enough.
          data[propertyId+modifyPriority] = Undefined;

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

        var currentPriority = data && data[propertyId];
        if (currentPriority == Null) 
        {
          // Fallback to init value on prototype chain (when supported)
          // This is always the value on the current class, not explicitely the
          // class which creates the property. This is mainly for supporting
          // init value overrides with "refined" properties
          if (initField) {
            return context[initField];
          }
          
          // Alternatively chose null, if possible
          if (nullable) {
            return Null;
          }
          
          // Otherwise try a fallback value
          // Useful for properties which are explicitely not nullable or are inherited
          if ("fallback" in config) {
            return config.fallback;
          }
          
          if (qx.core.Variant.isSet("qx.debug", "on")) {
            context.error("Missing value for: " + name + " (during get()). Either define an init value, make the property nullable or define a fallback value.");
          }
                    
          return Null;
        }
        
        // Special get() support for themable/inheritable properties
        var currentGetter = fields[currentPriority].get;
        if (currentGetter) {
          return context[currentGetter](name);
        } else {
          return data[propertyId+currentPriority];
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
            var oldPriority = data[propertyId];
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
      
      /*      
      if (config.inheritable) 
      {
        members["refresh" + up] = setter(2);
      }
      */

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
