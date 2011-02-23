/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2006 STZ-IDA, Germany, http://www.stz-ida.de
     2004-2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/**
 * EXPERIMENTAL!
 *
 * Themeable Cell renderer.
 *
 * This cell renderer can be styled by an appearance theme.
 */
qx.Class.define("qx.ui.virtual.cell.Cell",
{
  extend : qx.ui.virtual.cell.Abstract,

  construct : function()
  {
    this.base(arguments);

    this.__styleSheet = qx.ui.virtual.cell.CellStylesheet.getInstance();
    this.__styles = {};
  },


  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    /**
     * The appearance ID. This ID is used to identify the appearance theme
     * entry to use for this cell.
     */
    appearance :
    {
      check : "String",
      init : "cell",
      apply : "_applyAppearance"
    },



    /*
    ---------------------------------------------------------------------------
      THEMEABLES
    ---------------------------------------------------------------------------
    */
    
    /** The cell's background color */
    backgroundColor :
    {
      nullable : true,
      check : "Color",
      apply : "_applyBackgroundColor",
      themeable : true
    },


    /** The cell's text color */
    textColor :
    {
      nullable : true,
      check : "Color",
      apply : "_applyTextColor",
      themeable : true
    },


    /** The text alignment of the cell's content */
    textAlign :
    {
      check : ["left", "center", "right", "justify"],
      nullable : true,
      themeable : true,
      apply : "_applyTextAlign"
    },


    /**
     * The cell's font. The value is either a font name defined in the font
     * theme or an instance of {@link qx.bom.Font}.
     */
    font :
    {
      nullable : true,
      apply : "_applyFont",
      check : "Font",
      themeable : true
    },


    /*
    ---------------------------------------------------------------------------
      PADDING
    ---------------------------------------------------------------------------
    */

    /** Padding of the widget (top) */
    paddingTop :
    {
      check : "Integer",
      init : 0,
      apply : "_applyPadding",
      themeable : true
    },


    /** Padding of the widget (right) */
    paddingRight :
    {
      check : "Integer",
      init : 0,
      apply : "_applyPadding",
      themeable : true
    },


    /** Padding of the widget (bottom) */
    paddingBottom :
    {
      check : "Integer",
      init : 0,
      apply : "_applyPadding",
      themeable : true
    },


    /** Padding of the widget (left) */
    paddingLeft :
    {
      check : "Integer",
      init : 0,
      apply : "_applyPadding",
      themeable : true
    },


    /**
     * The 'padding' property is a shorthand property for setting 'paddingTop',
     * 'paddingRight', 'paddingBottom' and 'paddingLeft' at the same time.
     *
     * If four values are specified they apply to top, right, bottom and left
     * respectively. If there is only one value, it applies to all sides, if
     * there are two or three, the missing values are taken from the opposite
     * side.
     */
    padding :
    {
      group : [ "paddingTop", "paddingRight", "paddingBottom", "paddingLeft" ],
      shorthand : true,
      themeable : true
    }
  },


  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /** {Map} Map of styles to compile */
    __styles : null,
    
    /** {String} Compiled CSS string from style properties */
    __compiledStyles : null,
    
    
    // property apply
    _applyBackgroundColor : function(value, old, name)
    {
      var styles = this.__styles;
      if (value == null) {
        delete styles.backgroundColor;
      } else {
        styles.backgroundColor = qx.theme.manager.Color.getInstance().resolve(value);
      }
      
      this.__compiledStyles = null;
    },


    // property apply
    _applyTextColor : function(value, old, name)
    {
      var styles = this.__styles;
      if (value == null) {
        delete styles.color;
      } else {
        styles.color = qx.theme.manager.Color.getInstance().resolve(value);
      }
      
      this.__compiledStyles = null;
    },


    // property apply
    _applyTextAlign : function(value, old, name)
    {
      var styles = this.__styles;
      if (value == null) {
        delete styles.textAlign;
      } else {
        styles.textAlign = value;
      }
      
      this.__compiledStyles = null;
    },


    // property apply
    _applyFont : function(value, old, name)
    {
      var styles = this.__styles;
      if (value == null) 
      {
        delete styles.font;
      } 
      else 
      {
        var font = qx.theme.manager.Font.getInstance().resolve(value);
        styles.font = qx.bom.element.Style.compile(font.getStyles());
      }
      
      this.__compiledStyles = null;
    },


    // property apply
    _applyPadding : function(value, old, name) 
    {
      var styles = this.__styles;
      if (value == null) {
        delete styles[name];
      } else {
        styles[name] = value + "px";
      }
      
      this.__compiledStyles = null;
    },



    /*
    ---------------------------------------------------------------------------
      IMPLEMENT CELL API
    ---------------------------------------------------------------------------
    */

    // overridden
    getCellProperties : function(value, states)
    {
      return {
        classes : this.getCssClasses(value, states),
        style : this.getStyles(value, states),
        attributes : this.getAttributes(value, states),
        content : this.getContent(value, states),
        insets : this.getInsets(value, states)
      };
    },


    // overridden
    getAttributes : function(value, states) {
      return "";
    },


    // overridden
    getContent : function(value, states) {
      return value;
    },


    // overridden
    getCssClasses : function(value, states)
    {
      var cssClass = this.__styleSheet.getCssClass(this.__statesKey) || "";
      return "qx-cell " + cssClass;
    },

    
    // overridden
    getStyles: function(value, states) 
    {
      var compiled = this.__compiledStyles;
      if (compiled == null) 
      {
        var list = [];
        var styles = this.__styles;
        for (var key in styles) {
          list.push(key + ":" + styles[key]);
        }
        compiled = list.join(";");
      }
      
      return compiled;
    },
    

    // overridden
    getInsets : function(value, states) {
      return [this.getPaddingLeft() + this.getPaddingRight(), this.getPaddingTop() + this.getPaddingBottom()];
    }
  }
});
