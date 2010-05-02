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
    }, 
    
    __propertyNameToId : {},
     
    add : function(clazz, name, config)
    {
      /*
      ---------------------------------------------------------------------------
         INTRO
      ---------------------------------------------------------------------------
      */
            
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
          if (data && data[id] !== undefined) {
            return;
          }
          
          // Call change helper with value from shared class data
          changeHelper.call(context, this[initField], undefined, config);
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
          if (old === undefined && initField) {
            old = context[initField];
          }
          
          data[id] = value;
          changeHelper.call(context, value, old, config);
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
