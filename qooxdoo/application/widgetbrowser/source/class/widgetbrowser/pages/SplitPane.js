/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2010 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Tristan Koch (tristankoch)

************************************************************************ */

/**
 * Demonstrates qx.ui.splitpane(...):
 *
 * Pane, Slider, Splitter
 *
 */

qx.Class.define("widgetbrowser.pages.SplitPane",
{
  extend: widgetbrowser.pages.AbstractPage,

  construct: function()
  {
    this.base(arguments);

    this.initWidgets();
  },

  members :
  {

    initWidgets: function()
    {
      var widgets = this._widgets;

      var splitPane = new qx.ui.splitpane.Pane("horizontal");
      widgets.push(splitPane);
      this.add(splitPane);

      splitPane.add(new qx.ui.core.Widget().set({width: 200, height: 200}));
      splitPane.add(new qx.ui.core.Widget().set({width: 300, height: 200}));
    }
  }
});