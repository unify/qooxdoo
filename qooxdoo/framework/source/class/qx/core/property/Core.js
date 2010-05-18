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

/**
 * Core features for qooxdoo's property system which generates setter/getter
 * pairs with a lot of convenient features.
 */
qx.Bootstrap.define("qx.core.property.Core",
{
  statics :
  {
    RUNTIME_OVERRIDE : false,
    ID : 0,
    
    /**
     * Expand shorthand definition to a four element list.
     * This is an utility function for padding/margin and all other shorthand handling.
     *
     * @param input {Array|arguments} array or arguments object with one to four elements
     * @return {Array} an array with four elements
     */
    expandShortHand : function(input)
    {
      var lArray = qx.lang.Array;
      var result = input instanceof Array ? lArray.clone(input) : lArray.fromArguments(input);

      // Copy Values (according to the length)
      switch(result.length)
      {
        case 1:
          result[1] = result[2] = result[3] = result[0];
          break;

        case 2:
          result[2] = result[0];
          // no break here

        case 3:
          result[3] = result[1];
      }

      // Return list with 4 items
      return result;
    }    
  }
});
