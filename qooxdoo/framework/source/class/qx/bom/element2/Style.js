/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2009-2010 Deutsche Telekom AG, Germany, http://www.telekom.com

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)

************************************************************************ */

/**
 * Rewritten support for applying style properties.
 *
 * Differences to old implementation:
 *
 * * Better/Faster at supporting vendor prefixes.
 * * No special IE handling for computed values (pixel values)
 * * No stringify support (compile())
 * * No sub-modules: cursor, overflow, box sizing, etc.
 * * No dependencies
 */
qx.Class.define("qx.bom.element2.Style",
{
  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */

  statics :
  {
    /** {Element} DOM element used for testing support for style properties */
    __helperElem : document.createElement("div"),

    /** {Map} Maps standard names to vendor names for faster access */
    __nameCache : {},
    
    /** {Map} Like a second-level cache working on top of __nameCache to also cache translated markup names. */
    __markupNameCache : {},

    /** {String} Vendor prefix (depends on client) */
    __vendorPrefix : qx.core.Variant.select("qx.client",
    {
      "mshtml" : "Ms",
      "gecko" : "Moz",
      "webkit" : "Webkit",
      "opera" : "O"
    }),


    /**
     * Returns the current property value on the given element.
     *
     * Attention:
     *
     * In Internet Explorer there is no 100% possibility to have access to the computed value.
     * We fallback to the only supported thing: cascaded properties. These are the actual value
     * of the property as applied - non interpreted. This means that units are not translated
     * to pixels etc. like which is normally the case in computed properties.
     *
     * @param elem {Element} DOM element to query
     * @param name {String} Name of style property
     * @param computed {Boolean?false} Whether the computed value should be returned
     * @return {String} Returns the value of the given style property
     */
    get : function(elem, name, computed)
    {
      var style = elem.style;

      // Find real name, use if supported
      name = style[name] !== undefined && name || this.__nameCache[name] || this.property(name);

      // Fast-path: local styles
      if (!computed) {
        return style[name];
      }

      // Check support for computed style, fall back to cascaded styles
      // The solution is not 100% correct in IE, but as there is no 100% solution we omit the
      // whole thing here and just implement the basic fallback. Should be enough in most cases.
      var global = elem.ownerDocument.defaultView;
      if (global) {
        return global.getComputedStyle(elem, null)[name];
      } else if (elem.currentStyle) {
        return elem.currentStyle[name];
      }
    },


    /**
     * Sets a new style property. If you want to modify
     * multiple styles at once it's a lot faster to use a map
     * as second argument.
     *
     * @param elem {Element} DOM element to modify
     * @param name {String|Map} Style name or Map of styles/values to apply
     * @param value {String} Style value
     * @return {Class} Returns the class for further modifications
     */
    set : function(elem, name, value)
    {
      var style = elem.style;
      var names = this.__nameCache;

      if (typeof name == "string")
      {
        // Find real name, apply if supported
        name = name in style && name || names[name] || this.property(name);
        if (name) {
          style[name] = value == null ? "" : value;
        }
      }
      else
      {
        for (var key in name)
        {
          // Find real name, apply if supported
          value = name[key];
          key = key in style && key || names[key] || this.property(key);
          if (key) {
            style[key] = value == null ? "" : value;
          }
        }
      }

      // Chaining support
      return this;
    },


    /**
     * Detects a name of a CSS property in the current engine and returns it.
     *
     * @param name {String} Standard (or pre standard) name e.g. "opacity", "transform", ...
     * @return {String} Vendor property name e.g. "WebkitTransform"
     */
    property : function(name)
    {
      var style = this.__helperElem.style;
      var undef;

      // Fast path, real native property
      if (style[name] !== undef) {
        return name;
      }

      // Fixed name already cached?
      var cache = this.__nameCache;
      var fixedname = cache[name];
      if (fixedname !== undef) {
        return fixedname;
      }

      // Find vendor name
      var vendorname = this.__vendorPrefix + name.charAt(0).toUpperCase() + name.substring(1);
      if (style[vendorname] !== undef) {
        return cache[name] = vendorname;
      }

      // Warn about unsupported property
      if (qx.core.Variant.isSet("qx.debug", "on")) {
        qx.log.Logger.warn('Style property "' + name + '" is not supported by the client!');
      }
    },
    
    
    /**
     * Compiles the given styles into a string which might be used in conjunction with
     * <code>innerHTML</code> to build markup.
     *
     * @param styles {Map} Map of styles
     * @return {String} Result string
     */
    compile : function(styles)
    {
      var result = [];
      var style = this.__helperElem.style;
      var names = this.__nameCache;
      var markupNames = this.__markupNameCache;
      
      for (var prop in styles)
      {
        var value = styles[prop];
        var name = markupNames[prop] 
        
        if (name == null) {
          name = markupNames[prop] = qx.lang.String.hyphenate(name in style && name || names[prop] || this.property(prop));
        }
        
        result.push(name + ":" + value);
      }
      
      return result.join(";");
    }
  },



  /*
  *****************************************************************************
     DEFER
  *****************************************************************************
  */

  defer : function(statics)
  {
    statics.__nameCache["float"] = qx.core.Variant.select("qx.client", {
      "mshtml" : "styleFloat",
      "default" : "cssFloat"
    });
  }
});
