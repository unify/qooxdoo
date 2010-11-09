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
     * Alexander Steitz (aback)

************************************************************************ */

/**
 * Powerful creation and update features for images used for decoration
 * purposes like for rounded borders, icons, etc.
 *
 * Includes support for image clipping, additional
 * repeat options like <code>scale-x</code> or <code>scale-y</code>.
 */
qx.Class.define("qx.bom.element.Decoration",
{
  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */

  statics :
  {
    /** {Map} Mapping between background repeat and the tag to create */
    __repeatToTagname :
    {
      "scale-x" : "img",
      "scale-y" : "img",
      "scale" : "img",
      "repeat" : "div",
      "no-repeat" : "div",
      "repeat-x" : "div",
      "repeat-y" : "div"
    },


    /**
     * Updates the element to display the given source
     * with the repeat option.
     *
     * @param element {Element} DOM element to update
     * @param source {String} Any valid URI
     * @param repeat {String} One of <code>scale-x</code>, <code>scale-y</code>,
     *   <code>scale</code>, <code>repeat</code>, <code>repeat-x</code>,
     *   <code>repeat-y</code>, <code>repeat</code>
     * @param style {Map} Additional styles to apply
     */
    update : function(element, source, repeat, style)
    {
      var tag = this.__repeatToTagname[repeat];
      
      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        if (tag != element.tagName.toLowerCase()) {
          throw new Error("Image modification not possible. Elements could not be replaced at runtime!");
        }
      }

      var ret = this.getAttributes(source, repeat, style);

      if (tag === "img") {
        element.src = ret.src || qx.util.ResourceManager.getInstance().toUri("qx/static/blank.gif");
      }

      // Fix for old background position
      if (ret.style.backgroundPosition === undefined) {
        ret.style.backgroundPosition = null;
      }

      // Fix for old clip
      if (ret.style.clip === undefined) {
        ret.style.clip = null;
      }

      // Apply new styles
      qx.bom.element.Style.setStyles(element, ret.style);
    },


    /**
     * Creates a decorator image element with the given options.
     *
     * @param source {String} Any valid URI
     * @param repeat {String} One of <code>scale-x</code>, <code>scale-y</code>,
     *   <code>scale</code>, <code>repeat</code>, <code>repeat-x</code>,
     *   <code>repeat-y</code>, <code>repeat</code>
     * @param style {Map} Additional styles to apply
     */
    create : function(source, repeat, style)
    {
      var styles = this.__addStyles(source, repeat, style);
      var css = qx.bom.element.Style.compile(ret.style);

      if (this.__repeatToTagname[repeat] === "img") 
      {
        var uri = qx.util.ResourceManager.getInstance().toUri(source || "qx/static/blank.gif");
        return '<img src="' + uri + '" style="' + css + '"/>';
      }
      else
      {
        return '<div style="' + css + '"></div>';
      }
    },
    
    
    /**
     * Returns styles for scaled images. In this case a IMG tag needs to used.
     * The function basically only adds the default image dimensions to the styles.
     */
    getScaleStyles : function(source)
    {
      var dimension = qx.util.ResourceManager.getInstance().getImageSize(source) || qx.io.ImageLoader.getSize(source);      
      var style = {
        width : dimension.width + "px",
        height : dimension.height + "px"
      };
      
      
      // Add a fix for small blocks where IE has a minHeight of the fontSize in quirks mode
      if (qx.core.Variant.isSet("qx.client", "mshtml")) {
        style.fontSize = style.lineHeight = 0;
      }

      return style;      
    },
    
    
    /**
     * Get styles for images which are scaled on the horizontal axis.
     *
     * To make image sprites work one should give at least one of the positional
     * arguments <code>top</code> or <code>bottom</code>. Top is preferred if both
     * are defined. The system modifies the position accordingly to show the 
     * wanted section of the image sprite.
     *
     * Clipping requires that the element is positioned absolutely inside the parent.
     *
     * @param source {String} Image source
     * @param top {Integer?null} Top position
     * @param bottom {Integer?null} Bottom position
     *
     * @return {Map} Style properties to apply
     */    
    getScaleXStyles : function(source, top, bottom)
    {
      var style = {
        position : "absolute"
      };
      
      var ResourceManager = qx.util.ResourceManager.getInstance();
      var imageHeight = ResourceManager.getImageHeight(source) || qx.io.ImageLoader.getHeight(source);
      var clippedData = ResourceManager.getClippedData(source);

      if (clippedData && (top != null || bottom != null))
      {
        // Idea: Use a big image sprite where images are placed next to each other on the x-axis
        // then clip the region of the image and move the image via the top coordinate to the top
        // to show the clipped region.
        style.clip = qx.bom.element2.Clip.compile({top: clippedData.top, height: imageHeight});
        style.height = clippedData.height + "px";

        // Fix user given x-coordinate to include the combined image offset
        if (top != null) {
          style.top = (top - clippedData.top) + "px";
        } else if (bottom != null) {
          style.bottom = (bottom + imageHeight - clippedData.height + clippedData.top) + "px";
        }
      }
      else
      {
        style.height = imageHeight + "px";
        if (top != null) {
          style.top = top + "px";
        } else if (bottom != null) {
          style.bottom = bottom + "px";
        }
      }
      
      // Add a fix for small blocks where IE has a minHeight of the fontSize in quirks mode
      if (qx.core.Variant.isSet("qx.client", "mshtml")) {
        style.fontSize = style.lineHeight = 0;
      }

      return style;
    },
    
    
    /**
     * Get styles for images which are scaled on the vertical axis.
     *
     * To make image sprites work one should give at least one of the positional
     * arguments <code>left</code> or <code>right</code>. Left is preferred if both
     * are defined. The system modifies the position accordingly to show the 
     * wanted section of the image sprite.
     *
     * Clipping requires that the element is positioned absolutely inside the parent.
     *
     * @param source {String} Image source
     * @param left {Integer?null} Left position
     * @param right {Integer?null} Right position
     *
     * @return {Map} Style properties to apply
     */
    getScaleYStyles : function(source, left, right)
    {
      var style = {
        position : "absolute"
      };
      
      var ResourceManager = qx.util.ResourceManager.getInstance();
      var imageWidth = ResourceManager.getImageWidth(source) || qx.io.ImageLoader.getWidth(source);
      var clippedData = ResourceManager.getClippedData(source);

      if (clippedData && (left != null || right != null))
      {
        // Idea: Use a big image sprite where images are placed next to each other on the x-axis
        // then clip the region of the image and move the image via the left coordinate to the left
        // to show the clipped region.
        style.clip = qx.bom.element2.Clip.compile({left: clippedData.left, width: imageWidth});
        style.width = clippedData.width + "px";

        // Fix user given x-coordinate to include the combined image offset
        if (left != null) {
          style.left = (left - clippedData.left) + "px";
        } else if (right != null) {
          style.right = (right + imageWidth - clippedData.width + clippedData.left) + "px";
        }      
      }
      else
      {
        style.width = imageWidth + "px";
        if (left != null) {
          style.left = left + "px";
        } else if (right != null) {
          style.right = right + "px";
        }        
      }
      
      // Add a fix for small blocks where IE has a minHeight of the fontSize in quirks mode
      if (qx.core.Variant.isSet("qx.client", "mshtml")) {
        style.fontSize = style.lineHeight = 0;
      }

      return style;
    },


    /**
     * Get styles for repeated images.
     *
     * @param source {String} Image source
     * @param repeat {String} Repeat mode
     *
     * @return {Map} Style properties to apply
     */
    getRepeatStyles : function(source, repeat)
    {
      // Compute image dimensions
      var dimension = qx.util.ResourceManager.getInstance().getImageSize(source) || qx.io.ImageLoader.getSize(source);

      // Double axis repeats cannot use image sprites
      var ResourceManager = qx.util.ResourceManager.getInstance();
      if (repeat !== "repeat") {
        var clippedData = ResourceManager.getClippedData(source);
      }
      
      // The magic "+ 0.01" is to fix issues in older Firefoxs. It is faster to apply everywhere 
      // (which has no known side-effects) then doing a complete version specific check.
      var style = 
      {
        width : dimension.width + "px",
        height : dimension.height + "px",
        backgroundImage : "url(" + (clippedData ? clippedData.uri : ResourceManager.toUri(source)) + ")",
        backgroundRepeat : repeat,
        backgroundPosition : clippedData ? (-clippedData.left) + "px " + (-clippedData.top + 0.01) + "px" : null
      };
      
      // Add a fix for small blocks where IE has a minHeight of the fontSize in quirks mode
      if (qx.core.Variant.isSet("qx.client", "mshtml")) {
        style.fontSize = style.lineHeight = 0;
      }
      
      return style;
    }
  }
});
