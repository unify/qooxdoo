qx.Class.define("qx.bom.element2.Clip",
{
  statics :
  {
    compile : function(map)
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
