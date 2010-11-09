/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */
/**
 * Mixin for supporting the background images on decorators.
 */
qx.Mixin.define("qx.ui.decoration.MBackgroundImage",
{
  properties :
  {
    /** The URL of the background image */
    backgroundImage :
    {
      check : "String",
      nullable : true,
      apply : "_applyBackground"
    },


    /** How the background image should be repeated */
    backgroundRepeat :
    {
      check : ["repeat", "repeat-x", "repeat-y", "no-repeat", "scale"],
      init : "repeat",
      apply : "_applyBackground"
    },


    /**
     * Either a string or a number, which defines the horizontal position
     * of the background image.
     *
     * If the value is an integer it is interpreted as a pixel value, otherwise
     * the value is taken to be a CSS value. For CSS, the values are "center",
     * "left" and "right".
     */
    backgroundPositionX :
    {
      nullable : true,
      apply : "_applyBackground"
    },


    /**
     * Either a string or a number, which defines the vertical position
     * of the background image.
     *
     * If the value is an integer it is interpreted as a pixel value, otherwise
     * the value is taken to be a CSS value. For CSS, the values are "top",
     * "middle" and "bottom".
     */
    backgroundPositionY :
    {
      nullable : true,
      apply : "_applyBackground"
    },


    /**
     * Property group to define the background position
     */
    backgroundPosition :
    {
      group : ["backgroundPositionY", "backgroundPositionX"]
    }
  },


  members :
  {
    /**
     * Responsible for generating the markup for the background.
     * This method just uses the settings in the properties to generate
     * the markup.
     *
     * @param styles {Map} CSS styles as map
     * @return {String} The generated HTML fragment
     */
    _generateBackgroundMarkup: function(styles)
    {
      var image = this.getBackgroundImage();
      if (image)
      {
        var Decoration = qx.bom.element.Decoration;
        var repeat = this.getBackgroundRepeat();
        if (repeat == "scale")
        {
          if (qx.core.Variant.isSet("qx.debug", "on"))
          {
            if (this.getBackgroundPositionX() != null || this.getBackgroundPositionY() != null) {
              throw new Error("Does not support background position on scaled backgroud images.")
            }
          }
          
          var stylesMarkup = qx.bom.element.Style.compile(styles) + qx.bom.element.Style.compile(qx.bom.element.Decoration.getScaleStyles(image));
          var markup = "<img style='" + stylesMarkup + "' src='" + qx.util.ResourceManager.getInstance().toUri(image) + "'/>"
        }
        else
        { 
          // Supports background position
          var stylesMarkup = qx.bom.element.Style.compile(styles) + qx.bom.element.Style.compile(qx.bom.element.Decoration.getRepeatStyles(image, repeat));
          var markup = "<div style='" + stylesMarkup + "'></div>";
        }
      }
      else
      {
        if (qx.core.Variant.isSet("qx.client", "mshtml"))
        {
          // Internet Explorer as of version 6 for quirks and standards mode,
          // or version 7 in quirks mode adds an empty string to the "div"
          // node. This behavior causes rendering problems, because the node
          // would then have a minimum size determined by the font size.
          if (qx.bom.client.Engine.VERSION < 7 || qx.bom.client.Feature.QUIRKS_MODE) {
            styles.fontSize = styles.lineHeight = 0;
          }
        }

        var stylesMarkup = qx.bom.element.Style.compile(styles);
        var markup = '<div style="' + stylesMarkup + '"></div>';
      }

      return markup;
    },
    


    /*
    ---------------------------------------------------------------------------
      PROPERTY APPLY ROUTINES
    ---------------------------------------------------------------------------
    */

    // property apply
    _applyBackground : function()
    {
      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        if (this._isInitialized()) {
          throw new Error("This decorator is already in-use. Modification is not possible anymore!");
        }
      }
    }
  }
});
