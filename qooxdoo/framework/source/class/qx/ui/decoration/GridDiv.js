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
qx.Class.define("qx.ui.decoration.GridDiv",
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
      var images = this.__images;
      var edges = this.__edges;

      // Create edges and vertical sides
      // Order: tl, t, tr, bl, b, bt, l, c, r
      var html = [];

      // Outer frame
      // Note: overflow=hidden is needed for Safari 3.1 to omit scrolling through
      // dragging when the cursor is in the text field in Spinners etc.
      html.push('<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">');
      
      var Style = qx.bom.element.Style;
      var ResourceManager = qx.util.ResourceManager.getInstance();
      
      // Pre-check whether clipped images are used
      var clippedTop = ResourceManager.getClippedData(images.t);
      var clippedBottom = ResourceManager.getClippedData(images.b);
      var clippedLeft = ResourceManager.getClippedData(images.l);
      var clippedRight = ResourceManager.getClippedData(images.r);
      
      // Switch to clipped URIs
      var uriTop = clippedTop ? clippedTop.uri : images.t;
      var uriBottom = clippedBottom ? clippedBottom.uri : images.b;
      var uriLeft = clippedLeft ? clippedLeft.uri : images.l;
      var uriRight = clippedRight ? clippedRight.uri : images.r;
      
      // Compute URIs for IMG tags
      var uriTop = ResourceManager.toUri(uriTop);
      var uriBottom = ResourceManager.toUri(uriBottom);
      var uriLeft = ResourceManager.toUri(uriLeft);
      var uriRight = ResourceManager.toUri(uriRight);
      var uriCenter = ResourceManager.toUri(images.c);
      
      
      // Top: left, center, right
      html.push("<div style='position:absolute;top:0;left:0;", Style.compile(Decoration.getStyles(images.tl, "no-repeat")), "'></div>");
      html.push("<img src='" + uriTop + "' style='left:", edges.left, "px;", Style.compile(this.__getScaleXStyles(images.t, 0)), "'/>");
      html.push("<div style='position:absolute;top:0;right:0;", Style.compile(Decoration.getStyles(images.tr, "no-repeat")), "'></div>");
    
      // Bottom: left, center, right
      html.push("<div style='position:absolute;bottom:0;left:0;", Style.compile(Decoration.getStyles(images.bl, "no-repeat")), "'></div>");
      html.push("<img src='" + uriBottom + "' style='left:", edges.left, "px;", Style.compile(this.__getScaleXStyles(images.b, null, 0)), "'/>");
      html.push("<div style='position:absolute;bottom:0;right:0;", Style.compile(Decoration.getStyles(images.br, "no-repeat")), "'></div>");
    
      // Middle: left, center, right
      html.push("<img src='" + uriLeft + "' style='top:", edges.top, "px;", Style.compile(this.__getScaleYStyles(images.l, 0)), "'/>");
      html.push("<img src='" + uriCenter + "' style='position:absolute;top:", edges.top, "px;left:", edges.left, "px;'/>");
      html.push("<img src='" + uriRight + "' style='top:", edges.top, "px;", Style.compile(this.__getScaleYStyles(images.r, null, 0)), "'/>");

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
    __getScaleXStyles : function(source, top, bottom)
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
    __getScaleYStyles : function(source, left, right)
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

      return style;
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
