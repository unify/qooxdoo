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
 * Query element dimensions
 */
qx.Class.define("qx.bom.element2.Dimension",
{
  statics :
  {
    /**
     * Returns the content width of the given element.
     * 
     * @param elem {Element} DOM element to query
     * @return {Integer} Content width of the given element
     */ 
    getContentWidth : function(elem)
    {
      var Style = qx.bom.element2.Style;
      var paddingLeft = Style.get(elem, "paddingLeft", true);
      var paddingRight = Style.get(elem, "paddingRight", true);

      return elem.clientWidth - (paddingLeft ? parseInt(paddingLeft, 10) : 0) - (paddingRight ? parseInt(paddingRight, 10) : 0);
    },


    /**
     * Returns the content height of the given element.
     * 
     * @param elem {Element} DOM element to query
     * @return {Integer} Content height of the given element
     */ 
    getContentHeight : function(elem)
    {
      var Style = qx.bom.element2.Style;
      var paddingTop = Style.get(elem, "paddingTop", true);
      var paddingBottom = Style.get(elem, "paddingBottom", true);

      return elem.clientHeight - (paddingTop ? parseInt(paddingTop, 10) : 0) - (paddingBottom ? parseInt(paddingBottom, 10) : 0);
    },


    /**
     * Returns the width of the given element.
     * 
     * @param elem {Element} DOM element to query
     * @return {Integer} Width of the given element
     */ 
    getWidth : function(elem) {
      return elem.offsetWidth;
    },


    /**
     * Returns the height of the given element.
     * 
     * @param elem {Element} DOM element to query
     * @return {Integer} Height of the given element
     */ 
    getHeight : function(elem) {
      return elem.offsetHeight;
    }
  }
});

