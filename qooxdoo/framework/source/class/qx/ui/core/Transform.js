/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2010 Deutsche Telekom AG, http://www.telekom.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)

************************************************************************ */

qx.Class.define("qx.ui.core.Transform",
{
  extend : qx.core.Object,


  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */
  
  properties :
  {
    /** The origin of transformation. */
    origin :
    {
      check : "String",
      nullable : true
    },
    
    /** 
    * Specifies a 2D transformation in the form of a transformation 
    * matrix of six values. If a matrix is defined, other values 
    * (excluding origin) are ignored. 
    */
    matrix : 
    {
      check : "Array",
      nullable : true,
      apply : "_applyTransform"
    },
    
    /** Specifies a translation by the given amount in the X direction. */
    translateX : 
    {
      check : "Array",
      nullable : true,
      apply : "_applyTransform"
    },
    
    /** Specifies a translation by the given amount in the Y direction. */
    translateY : 
    {
      check : "Array",
      nullable : true,
      apply : "_applyTransform"
    },
    
    /** specifies a 2D translation by the vector [tx, ty], where tx is the first translation-value parameter and ty is the optional second translation-value parameter. If <ty> is not provided, ty has zero as a value. */
    translate : 
    {
      group : ["translateX", "translateY"],
      shorthand : true
    },    
    
    /** Specifies a scale operation using the [sx,1] scaling vector, where sx is given as the parameter. */
    scaleX : 
    {
      check : "Number",
      nullable : true,
      apply : "_applyTransform"
    },
    
    /** Specifies a scale operation using the [1,sy] scaling vector, where sy is given as the parameter. */
    scaleY : 
    {
      check : "Number",
      nullable : true,
      apply : "_applyTransform"
    },
    
    /** Specifies a 2D scale operation by the [sx,sy] scaling vector described by the 2 parameters. If the second parameter is not provided, it is takes a value equal to the first. */
    scale : 
    {
      group : ["scaleX", "scaleY"],
      shorthand : true
    },
    
    /** Specifies a 2D rotation by the angle specified in the parameter about the origin of the element, as defined by the transform-origin property. */
    rotate : 
    {
      check : "Integer",
      nullable : true,
      apply : "_applyTransform"
    },
    
    /** Specifies a skew transformation along the X axis by the given angle. */
    skewX : 
    {
      check : "Number",
      nullable : true,
      apply : "_applyTransform"
    },
    
    /** Specifies a skew transformation along the Y axis by the given angle. */
    skewY : 
    {
      check : "Number",
      nullable : true,
      apply : "_applyTransform"
    },
    
    /** specifies a skew transformation along the X and Y axes. The first angle parameter specifies the skew on the X axis. The second angle parameter specifies the skew on the Y axis. If the second parameter is not given then a value of 0 is used for the Y angle (ie. no skew on the Y axis). */
    skew : 
    {
      group : ["skewX", "skewY"],
      shorthand : true
    }    
  },
  
  
  
  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */
    
  members :
  {
    /** {String} Computed style value for 'transform' */
    __computedValue : null,
    
    
    // property apply
    _applyTransform : function() {
      this.__computedValue = null;
    },
    
    
    /**
     * Returns the compiled style to apply
     * 
     * @return {String} CSS style to apply to the transition property
     */    
    getStyle : function()
    {
      var value = this.__computedValue;
      if (value == null) {
        value = this.__computedValue = this.__computeStyle();
      }
      return value;      
    },
    
    
    /**
     * Computes the style value to apply
     * 
     * @return {String} CSS style to apply to the transform property
     */    
    __computeStyle : function()
    {
      var style;
      var matrix = this.getMatrix();
      if (matrix)
      {
        style = "matrix(" + matrix.join(",") + ")";
      }
      else
      {
        style = [];
        
        var translateX = this.getTranslateX();
        if (translateX != null) {
          style.push("translateX(" + translateX + "px)");
        }
        var translateY = this.getTranslateY();
        if (translateY != null) {
          style.push("translateY(" + translateY + "px)");
        }
        var scaleX = this.getScaleX();
        if (scaleX != null) {
          style.push("scaleX(" + scaleX + ")");
        }
        var scaleY = this.getScaleY();
        if (scaleY != null) {
          style.push("scaleY(" + scaleY + ")");
        }
        var rotate = this.getRotate();
        if (rotate != null) {
          style.push("rotate(" + rotate + "deg)");
        }        
        var skewX = this.getSkewX();
        if (skewX != null) {
          style.push("skewX(" + skewX + "deg)");
        }
        var skewY = this.getSkewY();
        if (skewY != null) {
          style.push("skewY(" + skewY + "deg)");
        }        
        
        style = style.join(" ");
      }
      
      this.debug("Transform Style: " + style);
      
      return style;
    }
  }
});
