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
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/**
 * A very complex decoration using two, partly combined and clipped images
 * to render a graphically impressive borders with gradients.
 *
 * The decoration supports all forms of vertical gradients. The gradients must
 * be stretchable to support different heights.
 *
 * The edges could use different styles of rounded borders. Even different
 * edge sizes are supported. The sizes are automatically detected by
 * the build system using the image meta data.
 *
 * The decoration uses clipped images to reduce the number of external
 * resources to load.
 */
qx.Class.define("qx.ui.decoration.Grid",
{
  extend : qx.ui.decoration.Abstract,


  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param baseImage {String} Base image to use
   * @param insets {Integer|Array} Insets for the grid
   */
  construct : function(baseImage, insets)
  {
    this.base(arguments);

    // Initialize properties
    if (baseImage != null) {
      this.setBaseImage(baseImage);
    }

    if (insets != null) {
      this.setInsets(insets);
    }
  },





  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    /**
     * Base image URL. All the different images needed are named by the default
     * naming scheme:
     *
     * ${baseImageWithoutExtension}-${imageName}.${baseImageExtension}
     *
     * These image names are used:
     *
     * * tl (top-left edge)
     * * t (top side)
     * * tr (top-right edge)

     * * bl (bottom-left edge)
     * * b (bottom side)
     * * br (bottom-right edge)
     *
     * * l (left side)
     * * c (center image)
     * * r (right side)
     */
    baseImage :
    {
      check : "String",
      nullable : true,
      apply : "_applyBaseImage"
    }
  },




  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    __markup : null,
    __images : null,
    __edges : null,


    // overridden
    _getDefaultInsets : function()
    {
      return {
        top : 0,
        right : 0,
        bottom : 0,
        left : 0
      };
    },


    // overridden
    _isInitialized: function() {
      return !!this.__markup;
    },


    /*
    ---------------------------------------------------------------------------
      INTERFACE IMPLEMENTATION
    ---------------------------------------------------------------------------
    */

    // interface implementation
    getMarkup : function()
    {
      if (this.__markup) {
        return this.__markup;
      }

      var Decoration = qx.bom.element.Decoration;
      var Style = qx.bom.element.Style;
      var ResourceManager = qx.util.ResourceManager.getInstance();

      var images = this.__images;
      var edges = this.__edges;

      // Create edges and vertical sides
      // Order: tl, t, tr, bl, b, bt, l, c, r
      var html = [];

      // Outer frame
      // Note: overflow=hidden is needed for Safari 3.1 to omit scrolling through
      // dragging when the cursor is in the text field in Spinners etc.
      html.push('<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">');
      
      // Top: left, center, right
      html.push("<div style='position:absolute;top:0;left:0;", Style.compile(Decoration.getStyles(images.tl, "no-repeat")), "'></div>");
      html.push(this.__getScaleXMarkup(images.t, edges.left, false));
      html.push("<div style='position:absolute;top:0;right:0;", Style.compile(Decoration.getStyles(images.tr, "no-repeat")), "'></div>");
    
      // Bottom: left, center, right
      html.push("<div style='position:absolute;bottom:0;left:0;", Style.compile(Decoration.getStyles(images.bl, "no-repeat")), "'></div>");
      html.push(this.__getScaleXMarkup(images.b, edges.right, true));
      html.push("<div style='position:absolute;bottom:0;right:0;", Style.compile(Decoration.getStyles(images.br, "no-repeat")), "'></div>");
    
      // Middle: left, center, right
      html.push(this.__getScaleYMarkup(images.l, edges.top, false));
      html.push("<img src='" + ResourceManager.toUri(images.c) + "' style='position:absolute;top:", edges.top, "px;left:", edges.left, "px;'/>");
      html.push(this.__getScaleYMarkup(images.r, edges.bottom, true));

      // Outer frame
      html.push('</div>');
      
      // Store
      return this.__markup = html.join("");
    },


    // interface implementation
    resize : function(element, width, height)
    {
      // Compute inner sizes
      var edges = this.__edges;
      var innerWidth = width - edges.left - edges.right;
      var innerHeight = height - edges.top - edges.bottom;

      // Set the inner width or height to zero if negative
      if (innerWidth < 0) {
        innerWidth = 0;
      }
      
      if (innerHeight < 0) {
        innerHeight = 0;
      }

      // Update nodes
      element.style.width = width + "px";
      element.style.height = height + "px";
      
      element.childNodes[1].style.width = innerWidth + "px";
      element.childNodes[4].style.width = innerWidth + "px";
      element.childNodes[7].style.width = innerWidth + "px";

      element.childNodes[6].style.height = innerHeight + "px";
      element.childNodes[7].style.height = innerHeight + "px";
      element.childNodes[8].style.height = innerHeight + "px";

      if (qx.core.Variant.isSet("qx.client", "mshtml"))
      {
        // Internet Explorer as of version 6 or version 7 in quirks mode
        // have rounding issues when working with odd dimensions:
        // right and bottom positioned elements are rendered with a
        // one pixel negative offset which results into some ugly
        // render effects.
        if (qx.bom.client.Engine.VERSION < 7 || (qx.bom.client.Feature.QUIRKS_MODE && qx.bom.client.Engine.VERSION < 8))
        {
          if (width%2==1)
          {
            element.childNodes[2].style.marginRight = "-1px";
            element.childNodes[5].style.marginRight = "-1px";
            element.childNodes[8].style.marginRight = "-1px";
          }
          else
          {
            element.childNodes[2].style.marginRight = "0px";
            element.childNodes[5].style.marginRight = "0px";
            element.childNodes[8].style.marginRight = "0px";
          }

          if (height%2==1)
          {
            element.childNodes[3].style.marginBottom = "-1px";
            element.childNodes[4].style.marginBottom = "-1px";
            element.childNodes[5].style.marginBottom = "-1px";
          }
          else
          {
            element.childNodes[3].style.marginBottom = "0px";
            element.childNodes[4].style.marginBottom = "0px";
            element.childNodes[5].style.marginBottom = "0px";
          }
        }
      }
    },


    // interface implementation
    tint : function(element, bgcolor) {
      // not implemented
    },



    /*
    ---------------------------------------------------------------------------
      PROPERTY APPLY ROUTINES
    ---------------------------------------------------------------------------
    */


    // property apply
    _applyBaseImage : function(value, old)
    {
      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        if (this.__markup) {
          throw new Error("This decorator is already in-use. Modification is not possible anymore!");
        }
      }

      if (value)
      {
        var split = /(.*)(\.[a-z]+)$/.exec(value);
        var prefix = split[1];
        var ext = split[2];

        // Store images
        var images = this.__images =
        {
          tl : prefix + "-tl" + ext,
          t : prefix + "-t" + ext,
          tr : prefix + "-tr" + ext,

          bl : prefix + "-bl" + ext,
          b : prefix + "-b" + ext,
          br : prefix + "-br" + ext,

          l : prefix + "-l" + ext,
          c : prefix + "-c" + ext,
          r : prefix + "-r" + ext
        };

        // Store edges
        this.__edges = this._computeEdgeSizes(images);
      }
    },
    
    
    /**
     * Get markup for images which are scaled on the horizontal axis.
     *
     * @param source {String} Image source
     * @param left {Integer} Left position
     * @param fromEnd {Boolean?false} Whether the Y-axis positioning happens from end aka bottom
     * @return {Map} Style properties to apply
     */    
    __getScaleXMarkup : function(source, left, fromEnd)
    {
      var ResourceManager = qx.util.ResourceManager.getInstance();
      var imageWidth = ResourceManager.getImageWidth(source);
      var imageHeight = ResourceManager.getImageHeight(source);
      var imageSprite = ResourceManager.getImageSprite(source);

      if (imageSprite)
      {
        // Idea: Use a big image sprite where images are placed next to each other on the x-axis
        // then clip the region of the image and move the image via the top coordinate to the top
        // to show the clipped region.
        var clip = qx.bom.element2.Clip.compileValue({top: imageSprite.top, height: imageHeight});
        var posY = fromEnd ? 
          "bottom:" + (imageHeight - imageSprite.height + imageSprite.top) + "px" : 
          "top:" + (-imageSprite.top) + "px";
        
        return "<img src='" + imageSprite.uri + "' style='position:absolute;left:" + left + "px;" + posY + ";width:" + imageWidth + "px;height:" + imageSprite.height + "px;clip:" + clip + "'/>";
      }
      else
      {
        var posY = fromEnd ? "bottom:0" : "top:0";
        return "<img src='" + source + "' style='position:absolute;left:" + left + "px;" + posY + ";width:" + imageWidth + "px;height:" + imageHeight + ";'/>";
      }
    },
    
    
    /**
     * Get markup for images which are scaled on the horizontal axis.
     *
     * @param source {String} Image source
     * @param top {Integer} Top position
     * @param fromEnd {Boolean?false} Whether the X-axis positioning happens from end aka right
     * @return {Map} Style properties to apply
     */    
    __getScaleYMarkup : function(source, top, fromEnd)
    {
      var ResourceManager = qx.util.ResourceManager.getInstance();
      var imageWidth = ResourceManager.getImageWidth(source);
      var imageHeight = ResourceManager.getImageHeight(source);
      var imageSprite = ResourceManager.getImageSprite(source);

      if (imageSprite)
      {
        // Idea: Use a big image sprite where images are placed next to each other on the x-axis
        // then clip the region of the image and move the image via the left coordinate to the left
        // to show the clipped region.
        var clip = qx.bom.element2.Clip.compile({left: imageSprite.left, width: imageWidth});
        var posX = fromEnd ? 
          "right:" + (imageWidth - imageSprite.width + imageSprite.left) + "px" : 
          "left:" + (-imageSprite.left) + "px";
        
        return "<img src='" + imageSprite.uri + "' style='position:absolute;top:" + top + "px;" + posX + ";height:" + imageHeight + "px;width:" + imageSprite.width + "px;clip:" + clip + "'/>";
      }
      else
      {
        var posX = fromEnd ? "right:0" : "left:0";
        return "<img src='" + source + "' style='position:absolute;top:" + top + "px;" + posX + ";height:" + imageHeight + "px;width:" + imageWidth + ";'/>";
      }
    },


    /**
     * Returns the sizes of the "top" and "bottom" heights and the "left" and
     * "right" widths of the grid.
     *
     * @param images {Map} Map of image URLs
     * @return {Map} the edge sizes
     */
    _computeEdgeSizes : function(images)
    {
      var ResourceManager = qx.util.ResourceManager.getInstance();

      return {
        top : ResourceManager.getImageHeight(images.t),
        bottom : ResourceManager.getImageHeight(images.b),
        left : ResourceManager.getImageWidth(images.l),
        right : ResourceManager.getImageWidth(images.r)
      };
    }
  },



  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function() {
    this.__markup = this.__images = this.__edges = null;
  }
});
