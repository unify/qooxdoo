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
     * Fabian Jakobs (fjakobs)

************************************************************************ */

qx.Class.define("qx.test.core.InheritanceDummy",
{
  extend : qx.core.Object,

  construct : function()
  {
    this.base(arguments);
    this.$$children = [];
  },


  properties :
  {
    enabled : { inheritable : true },

    width_ :
    {
      inheritable : true
    },

    height_ :
    {
      inheritable : true
    },

    left_ :
    {
      inheritable : true
    },

    top_ :
    {
      inheritable : true
    }
  },

  members :
  {
    add : function(child)
    {
      this.$$children.push(child);
      var oldParent = child.$$parent;
      child.$$parent = this;
      qx.core.property.Multi.moveObject(child, this, oldParent);
    },
    
    getInheritedValue : function(prop) 
    {
      var parent = this.$$parent;
      return parent && this.$$parent.get(prop);
    },    

    _getChildren : function() {
      return this.$$children;
    }
  }
});