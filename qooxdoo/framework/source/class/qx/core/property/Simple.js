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
 
qx.Bootstrap.define("qx.core.property.Simple",
{
  statics :
  {
    /** {Integer} Number of properties created. For debug proposes. */
    __counter : 0,
    
    /** {Integer} Maps property names to IDs */
    __propertyNameToId : {},


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
         INTRO
      ---------------------------------------------------------------------------
      */
      
      // Improve compressibility
      var UNDEFINED;
      var NULL = null;    
      
      // Increase counter
      this.__counter++;
            
      // Generate property ID
      // Identically named property might store data on the same field
      // as in this case this is typicall on different classes.
      var db = this.__propertyNameToId;
      var id = db[name];
      if (!id) 
      {
        id = db[name] = qx.core.property.Core.ID;
        qx.core.property.Core.ID++
      }
      
      // Store init value (shared data between instances)
      var members = clazz.prototype;
      if (config.init !== UNDEFINED) 
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
      var up = qx.Bootstrap.$$firstUp[name] || qx.Bootstrap.firstUp(name);
         
      // Shorthands: Better compression/obfuscation/performance
      var nullable = config.nullable;
      var eventType = config.event;
      var applyMethod = config.apply;




      /*
      ---------------------------------------------------------------------------
         FACTORY METHODS :: GET
      ---------------------------------------------------------------------------
      */      
      
      members["get" + up] = function() 
      {
        var context = this;    
        
        if (qx.core.Variant.isSet("qx.debug", "on")) {
          qx.core.property.Debug.checkGetter(context, config, arguments);
        }
         
        var data = context.$$data;
        if (data) {
          var value = data[id];
        }
        
        if (value === UNDEFINED) 
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
          
          value = NULL;          
        }
        
        return value;          
      };
      
      
      
      /*
      ---------------------------------------------------------------------------
         FACTORY METHODS :: INIT
      ---------------------------------------------------------------------------
      */
            
      if (initField)
      {
        members["init" + up] = function()
        {
          var context = this;
          var data = context.$$data;
          
          // Check whether there is already local data (which is higher prio than init data)
          if (data && data[id] !== UNDEFINED) {
            return;
          }
          
          // Call apply
          if (applyMethod) {
            context[applyMethod](this[initField], UNDEFINED, name);
          }

          // Fire event
          if (eventType) {
            context.fireDataEvent(eventType, this[initField], UNDEFINED);
          }          
        };
      }      
      
      
      
      /*
      ---------------------------------------------------------------------------
         FACTORY METHODS :: SET
      ---------------------------------------------------------------------------
      */      
      
      members["set" + up] = function(value)
      {
        var context = this;

        if (qx.core.Variant.isSet("qx.debug", "on")) {
          qx.core.property.Debug.checkSetter(context, config, arguments);
        }
        
        var data = context.$$data;
        if (!data) {
          data = context.$$data = {};
        } else {
          var old = data[id];
        }

        if (value !== old) 
        {
          if (old === UNDEFINED && initField) {
            old = context[initField];
          }
          
          data[id] = value;

          if (applyMethod) {
            context[applyMethod](value, old, name);
          }

          if (eventType) {
            context.fireDataEvent(eventType, value, old);
          }
        }        
      };
      
      
      
      /*
      ---------------------------------------------------------------------------
         FACTORY METHODS :: RESET
      ---------------------------------------------------------------------------
      */      
      
      members["reset" + up] = function()
      {
        var context = this;

        if (qx.core.Variant.isSet("qx.debug", "on")) {
          qx.core.property.Debug.checkResetter(context, config, arguments);
        }

        var data = context.$$data;
        if (!data) {
          return;
        }
        
        var old = data[id];
        var value = UNDEFINED;

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
          
          if (applyMethod) {
            context[applyMethod](value, old, name);
          }

          if (eventType) {
            context.fireDataEvent(eventType, value, old);
          }
        }             
      };   
      
      
      
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
