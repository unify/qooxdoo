/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
     2010 Sebastian Werner, http://sebastian-werner.net

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Alexander Steitz (aback)

************************************************************************ */

/**
 * Powerful features for images used for decoration
 * purposes like for rounded borders, icons, etc.
 *
 * Includes support for automatic image size handling and image sprites.
 */
qx.Class.define("qx.bom.element.Decoration",
{
  statics :
  {
    /**
     * Get styles for repeated images. Automatically makes use of image
     * sprites where feasible.
     *
     * @param source {String} Image source
     * @param repeat {String} Repeat mode
     * @return {Map} Style properties to apply
     */
    getStyles : function(source, repeat)
    {
      // Compute image dimensions
      var ResourceManager = qx.util.ResourceManager.getInstance();
      var dimension = ResourceManager.getImageSize(source) || qx.io.ImageLoader.getSize(source);
      
      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        if (dimension == null) 
        {
          qx.log.Logger.warn("Image without dimensions: " + source);
          return {};
        }
      }

      // Double axis repeats cannot use image sprites
      if (repeat != "repeat") {
        var clippedData = ResourceManager.getClippedData(source);
      }
      
      // The magic "- 0.01" is to fix issues in older Firefoxs. It is faster to apply everywhere 
      // (which has no known side-effects) then doing a complete version specific check.
      var style = 
      {
        width : dimension.width + "px",
        height : dimension.height + "px",
        backgroundImage : "url(" + (clippedData ? clippedData.uri : ResourceManager.toUri(source)) + ")",
        backgroundRepeat : repeat,
        backgroundPosition : clippedData ? (-clippedData.left) + "px " + (-clippedData.top - 0.01) + "px" : null
      };
      
      return style;
    }
  }
});
