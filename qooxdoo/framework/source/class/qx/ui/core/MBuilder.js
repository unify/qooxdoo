/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2009-2010 Deutsche Telekom AG, Germany, http://telekom.com

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)

************************************************************************ */

/**
 * A mixin which adds a builder functionality to qooxdoo widgets or controllers.
 *
 * Supported features:
 *
 * * All kind of widgets
 * * Layouts and layout properties
 * * Events with automated names
 * * Registry for widgets to access them via a custom ID
 * * Unlimited children depth
 */
qx.Mixin.define("qx.ui.core.MBuilder",
{
  members :
  {
    /** {Map} Data store for widgets */
    __widgetRegistry : null,


    /**
     * Converts the given structure into a top-level widget
     * with children.
     *
     * @param struct {Map} Widget structure definition
     * @return {qx.ui.core.Widget} Top level widget from definition.
     */
    build : function(struct)
    {
      var db = this.__widgetRegistry;
      if (!db) {
        this.__widgetRegistry = {};
      }

      return this.__create(struct);
    },


    /**
     * Internal recurser method to process a single entry.
     *
     * @param entry {Map} Widget specification block
     * @return {qx.ui.core.Widget} The created widget instance (with optional children)
     */
    __create : function(entry)
    {
      if (qx.core.Variant.isSet("qx.debug", "on")) {
        this.__validateEntry(entry);
      }

      var obj = new entry.create;

      var id = entry.id;
      if (id) {
        this.__widgetRegistry[id] = obj;
      }

      var set = entry.set;
      if (set) {
        obj.set(set);
      }

      var layout = entry.layout;
      if (layout) {
        obj.setLayout(this.__create(entry.layout));
      }

      var position = entry.position;
      if (position) {
        obj.setLayoutProperties(position);
      }

      var children = entry.add;
      if (children)
      {
        for (var i=0, l=children.length; i<l; i++) {
          obj.add(this.__create(children[i]));
        }
      }

      var events = entry.listen;
      if (events)
      {
        var String = qx.lang.String;
        var base = "_on" + (entry.id ? String.firstUp(entry.id) : "");
        var conf, func;

        for (var i=0, l=events.length; i<l; i++)
        {
          conf = events[i];
          func = base + String.firstUp(conf.event);

          if (qx.core.Variant.isSet("qx.debug", "on"))
          {
            if (!this[func])
            {
              this.error('Missing method: ' + func + ' to add event listener "' + conf.event + '" to instance of class "' + entry.create.classname + '"');
              continue;
            }
          }

          obj.addListener(conf.event, this[func], this, conf.capture);
        }
      }
      
      var init = entry.init;
      if (init) {
        init.call(obj);
      }

      return obj;
    },


    /**
     * Verifies the validaty of a single widget entry.
     *
     * @param entry {Map} Widget specification block
     */
    __validateEntry : function(entry)
    {
      if (!entry.create) {
        throw new Error("Missing create information to select class to create!");
      }

      if (entry.listen && !entry.id) {
        throw new Error('Missing ID to add event listeners to instance of class "' + entry.create.classname + '"');
      }
    },


    /**
     * Returns a given widget by its ID.
     *
     * @param id {String} The ID of the widget
     * @return {qx.ui.core.Widget} The widget instance
     */
    getById : function(id)
    {
      var db = this.__widgetRegistry;
      var obj = db[id];
      if (obj) {
        return obj;
      }

      this.warn("Missing widget with ID: " + id);
      return null;
    }
  }
});
