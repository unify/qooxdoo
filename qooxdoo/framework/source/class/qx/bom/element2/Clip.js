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

qx.Class.define("qx.bom.element2.Clip",
{
  statics :
  {
    compileValue : function(map)
    {
      if (!map) {
        return "rect(auto,auto,auto,auto)";
      }

      var left = map.left;
      var top = map.top;
      var width = map.width;
      var height = map.height;

      var right, bottom;

      if (left == null)
      {
        right = (width == null ? "auto" : width + "px");
        left = "auto";
      }
      else
      {
        right = (width == null ? "auto" : left + width + "px");
        left = left + "px";
      }

      if (top == null)
      {
        bottom = (height == null ? "auto" : height + "px");
        top = "auto";
      }
      else
      {
        bottom = (height == null ? "auto" : top + height + "px");
        top = top + "px";
      }

      return "rect(" + top + "," + right + "," + bottom + "," + left + ")";
    }
  }
});
