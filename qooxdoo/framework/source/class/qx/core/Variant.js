/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
     2011 Sebastian Werner, http://sebastian-werner.net

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Andreas Ecker (ecker)
     * Sebastian Werner (wpbasti)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/**
 * Manage variants of source code. May it be for different debug options,
 * browsers or other environment flags.
 *
 * Variants enable the selection and removal of code from the build version.
 * A variant consists of a collection of states from which exactly one is active
 * at load time of the framework. The global map <code>qxvariants</code> can be
 * used to select a variant before the Framework is loaded.
 *
 * Depending on the selected variant a specific code
 * path can be chosen using the <code>select</code> method. The generator is
 * able to set a variant and remove all code paths which are
 * not selected by the variant.
 *
 * Variants are used to implement browser optimized builds and to remove
 * debugging code from the build version. It is very similar to conditional
 * compilation in C/C++.
 */
qx.Bootstrap.define("qx.core.Variant",
{
  statics :
  {
    /** {Map} cached results */
    __cache : {},


    /**
     * Get the current value of a variant.
     *
     * @param key {String} name of the variant
     * @return {String} current value of the variant
     */
    get : function(key)
    {
      var value = jasy.Permutation.selected[key];
      if (value == null) {
        throw new Error('Variant "' + key + '" is not defined.');
      }

      return value;
    },


    /**
     * Select a function depending on the value of the variant.
     *
     * Example:
     *
     * <pre class='javascript'>
     * var f = qx.Variant.select("qx.client", {
     *   "gecko": function() { ... },
     *   "mshtml|opera": function() { ... },
     *   "default": function() { ... }
     * });
     * </pre>
     *
     * Depending on the value of the <code>"qx.client"</code> variant whit will select the
     * corresponding function. The first case is selected if the variant is "gecko", the second
     * is selected if the variant is "mshtml" or "opera" and the third function is selected if
     * none of the other keys match the variant. "default" is the default case.
     *
     * @param key {String} name of the variant. To enable the generator to optimize
     *   this selection, the key must be a string literal.
     * @param variantFunctionMap {Map} map with variant names as keys and functions as values.
     * @return {Function} The selected function from the map.
     */
    select : function(key, variantFunctionMap)
    {
      for (var variant in variantFunctionMap)
      {
        if (this.isSet(key, variant)) {
          return variantFunctionMap[variant];
        }
      }

      if ("default" in variantFunctionMap) {
        return variantFunctionMap["default"];
      }

      throw new Error('No match for variant "' + key + '" found, and no default ("default") given!');
    },


    /**
     * Check whether a variant is set to a given value. To enable the generator to optimize
     * this selection, both parameters must be string literals.
     *
     * This method is meant to be used in if statements to select code paths. If the condition of
     * an if statement is only this method, the generator is able to optimize the if
     * statement.
     *
     * Example:
     *
     * <pre class='javascript'>
     * if (qx.core.Variant.isSet("qx.client", "mshtml")) {
     *   // some Internet Explorer specific code
     * } else if(qx.core.Variant.isSet("qx.client", "opera")){
     *   // Opera specific code
     * } else {
     *   // common code for all other browsers
     * }
     * </pre>
     *
     * @param key {String} name of the variant
     * @param variants {String} value to check for. Several values can be "or"-combined by separating
     *   them with a "|" character. A value of "mshtml|opera" would for example check if the variant is
     *   set to "mshtml" or "opera"
     * @return {Boolean} whether the variant is set to the given value
     */
    isSet : function(key, variants)
    {
      var access = key + "$" + variants;
      if (this.__cache[access] !== undefined) {
        return this.__cache[access];
      }

      var retval = false;

      // fast path
      if (variants.indexOf("|") < 0)
      {
        retval = this.get(key) === variants;
      }
      else
      {
        var keyParts = variants.split("|");
        for (var i=0, l=keyParts.length; i<l; i++)
        {
          if (this.get(key) === keyParts[i])
          {
            retval = true;
            break;
          }
        }
      }

      return this.__cache[access] = retval;
    }
  }
});
