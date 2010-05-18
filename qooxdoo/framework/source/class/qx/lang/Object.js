/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)

************************************************************************ */

/**
 * Helper functions to handle Object as a Hash map.
 */
qx.Class.define("qx.lang.Object",
{
  statics :
  {
    /**
     * Clears the map from all values
     *
     * @param map {Object} the map to clear
     */
    empty : function(map)
    {
      if (qx.core.Variant.isSet("qx.debug", "on")) {
        qx.core.Assert && qx.core.Assert.assertMap(map, "Invalid argument 'map'");
      }

      for (var key in map)
      {
        if (map.hasOwnProperty(key)) {
          delete map[key];
        }
      }
    },


    /**
     * Check if the hash has any keys
     *
     * @signature function(map)
     * @param map {Object} the map to check
     * @return {Boolean} whether the map has any keys
     */
    isEmpty : (qx.bom.client.Feature.ECMA_OBJECT_COUNT) ?
      function(map)
      {
        if (qx.core.Variant.isSet("qx.debug", "on")) {
          qx.core.Assert && qx.core.Assert.assertMap(map, "Invalid argument 'map'");
        }
        return map.__count__ === 0;
      }
      :
      function(map)
      {
        if (qx.core.Variant.isSet("qx.debug", "on")) {
          qx.core.Assert && qx.core.Assert.assertMap(map, "Invalid argument 'map'");
        }

        for (var key in map) {
          return false;
        }

        return true;
      },


    /**
     * Check whether the number of objects in the maps is at least "length"
     *
     * @signature function(map, minLength)
     * @param map {Object} the map to check
     * @param minLength {Integer} minimum number of objects in the map
     * @return {Boolean} whether the map contains at least "length" objects.
     */
    hasMinLength : (qx.bom.client.Feature.ECMA_OBJECT_COUNT) ?
      function(map, minLength)
      {
        if (qx.core.Variant.isSet("qx.debug", "on"))
        {
          qx.core.Assert && qx.core.Assert.assertMap(map, "Invalid argument 'map'");
          qx.core.Assert && qx.core.Assert.assertInteger(minLength, "Invalid argument 'minLength'");
        }
        return map.__count__ >= minLength;
      }
      :
      function(map, minLength)
      {
        if (qx.core.Variant.isSet("qx.debug", "on"))
        {
          qx.core.Assert && qx.core.Assert.assertMap(map, "Invalid argument 'map'");
          qx.core.Assert && qx.core.Assert.assertInteger(minLength, "Invalid argument 'minLength'");
        }

        if (minLength <= 0) {
          return true;
        }

        var length = 0;

        for (var key in map)
        {
          if ((++length) >= minLength) {
            return true;
          }
        }

        return false;
      },


    /**
     * Get the number of objects in the map
     *
     * @signature function(map)
     * @param map {Object} the map
     * @return {Integer} number of objects in the map
     */
    getLength : qx.Bootstrap.objectGetLength,


    /**
     * Get the keys of a map as array as returned by a "for ... in" statement.
     *
     * @signature function(map)
     * @param map {Object} the map
     * @return {Array} array of the keys of the map
     */
    getKeys : qx.Bootstrap.getKeys,


    /**
     * Get the keys of a map as string
     *
     * @signature function(map)
     * @param map {Object} the map
     * @return {String} String of the keys of the map
     *         The keys are separated by ", "
     */
    getKeysAsString : qx.Bootstrap.getKeysAsString,


    /**
     * Checks two keys for their position in the map. This is useful
     * for finding the key which has higher priority than the other.
     * Might be useful for conflict resolution.
     * 
     * @param map {Map} Incoming data structure
     * @param key1 {String} First key
     * @param key2 {String} Second key
     * @return {String|null} The winner key or <code>null</code> 
     */
    findWinnerKey : function(map, key1, key2)
    {
      if (!(key1 in map)) {
        return key2 in map ? key2 : null;
      }

      if (!(key2 in map)) {
        return key1 in map ? key1 : null;
      }
      
      for (var key in map) 
      {
        if (key == key1) {
          return key1;
        } else if (key == key2) {
          return key2;
        }
      }
      
      return null;      
    },
    

    /**
     * Get the values of a map as array
     *
     * @param map {Object} the map
     * @return {Array} array of the values of the map
     */
    getValues : function(map)
    {
      if (qx.core.Variant.isSet("qx.debug", "on")) {
        qx.core.Assert && qx.core.Assert.assertMap(map, "Invalid argument 'map'");
      }

      var arr = [];
      var keys = this.getKeys(map);

      for (var i=0, l=keys.length; i<l; i++) {
        arr.push(map[keys[i]]);
      }

      return arr;
    },


    /**
     * Merge a number of objects.
     *
     * @param target {Object} target object
     * @param varargs {Object} variable number of objects to merged with target
     * @return {Object} target with merged values from the other objects
     */
    merge : function(target, varargs)
    {
      if (qx.core.Variant.isSet("qx.debug", "on")) {
        qx.core.Assert && qx.core.Assert.assertMap(target, "Invalid argument 'target'");
      }

      var len = arguments.length;
      var current, key;

      for (var i=1; i<len; i++) 
      {
        current = arguments[i];
        for (key in current) {
          target[key] = current[key];
        }
      }

      return target;
    },


    /**
     * Return a copy of an Object
     *
     * @param source {Object} Object to copy
     * @return {Object} copy of vObject
     */
    clone : function(source)
    {
      if (qx.core.Variant.isSet("qx.debug", "on")) {
        qx.core.Assert && qx.core.Assert.assertMap(source, "Invalid argument 'source'");
      }

      var clone = {};

      for (var key in source) {
        clone[key] = source[key];
      }

      return clone;
    },


    /**
     * Inverts a map by exchanging the keys with the values.
     *
     * If the map has the same values for different keys, information will get lost.
     * The values will be converted to strings using the toString methods.
     *
     * @param map {Object} Map to invert
     * @return {Object} inverted Map
     */
    invert : function(map)
    {
      if (qx.core.Variant.isSet("qx.debug", "on")) {
        qx.core.Assert && qx.core.Assert.assertMap(map, "Invalid argument 'map'");
      }

      var result = {};

      for (var key in map) {
        result[map[key].toString()] = key;
      }

      return result;
    },


    /**
     * Get the key of the given value from a map.
     * If the map has more than one key matching the value the fist match is returned.
     * If the map does not contain the value <code>null</code> is returned.
     *
     * @param map {Object} Map to search for the key
     * @param value {var} Value to look for
     * @return {String|null} Name of the key (null if not found).
     */
    getKeyFromValue: function(map, value)
    {
      if (qx.core.Variant.isSet("qx.debug", "on")) {
        qx.core.Assert && qx.core.Assert.assertMap(map, "Invalid argument 'map'");
      }

      for (var key in map)
      {
        if (map.hasOwnProperty(key) && map[key] === value) {
          return key;
        }
      }

      return null;
    },


    /**
     * Whether the map contains the given value.
     *
     * @param map {Object} Map to search for the value
     * @param value {var} Value to look for
     * @return {Boolean} Whether the value was found in the map.
     */
    contains : function(map, value)
    {
      if (qx.core.Variant.isSet("qx.debug", "on")) {
        qx.core.Assert && qx.core.Assert.assertMap(map, "Invalid argument 'map'");
      }

      return this.getKeyFromValue(map, value) !== null;
    },


    /**
    * Selects the value with the given key from the map.
    *
    * @param key {String} name of the key to get the value from
    * @param map {Object} map to get the value from
    * @return {var} value for the given key from the map
    */
    select: function(key, map)
    {
      if (qx.core.Variant.isSet("qx.debug", "on")) {
        qx.core.Assert && qx.core.Assert.assertMap(map, "Invalid argument 'map'");
      }
      return map[key];
    },


    /**
    * Convert an array into a map.
    *
    * All elements of the array become keys of the returned map by
    * calling <code>toString</code> on the array elements. The values of the
    * map are set to <code>true</code>
    *
    * @param array {Array} array to convert
    * @return {Map} the array converted to a map.
    */
    fromArray: function(array)
    {
      if (qx.core.Variant.isSet("qx.debug", "on")) {
        qx.core.Assert && qx.core.Assert.assertArray(array, "Invalid argument 'array'");
      }

      var obj = {};

      for (var i=0, l=array.length; i<l; i++)
      {
        if (qx.core.Variant.isSet("qx.debug", "on"))
        {
          switch(typeof array[i])
          {
            case "object":
            case "function":
            case "undefined":
              throw new Error("Could not convert complex objects like " + array[i] + " at array index "+ i +" to map syntax");
          }
        }

        obj[array[i].toString()] = true;
      }

      return obj;
    }
  }
});
