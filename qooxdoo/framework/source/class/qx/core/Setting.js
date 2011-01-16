/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
     2011 Sebastian Werner, http://sebastian-werner.net

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)

************************************************************************ */

/**
 * Manage settings for framework/application wide initial setup routines.
 *
 * *Background information*
 *
 * One of the major problem of JavaScript frameworks is that you, as the
 * user of such a framework, cannot easily control one of the initial
 * settings. For example the framework may have defaults which only can
 * be changed after the framework is loaded, but not before. Most of the
 * time this restriction is not problematic. Many stuff is just then
 * interesting when the application main gets processed. But there are
 * exceptions like things which must be configured at load-time and not
 * after that.
 *
 * *What are settings?*
 *
 * This is where qooxdoo's new sophisticated settings system comes in.
 * And the best is that this feature is directly built into the core of
 * qooxdoo. This means that many initial settings are easily controllable
 * using a simple hash map structure or using simple generator flags.
 *
 * For example you can control the following things in qooxdoo:
 *
 * * All type of themes (colors, icons, widgets, appearance)
 * * Default log level and appender
 * * Resource-URLs of standard qooxdoo icons and widgets images
 * * Timeout of the image preloader
 * * The init component (graphical or non-graphical)
 * * Different debugging options for json, remote io, etc.
 *
 * This list shows you some of your possibilities.
 *
 * *Usage*
 *
 * A setting generally should only store simple primitive types
 * like strings. Settings are not update-able. They do not fire events
 * and they do not inform depending objects. The best way to work with
 * settings is to "compile" them into the application code. This is easily
 * possible using the corresponding flags of the qooxdoo build system.
 *
 * At initialization of this class all settings defined in the global
 * map <code>qxsettings</code> are imported. This map can also created
 * by hand and should be defined before loading qooxdoo. After the import
 * the settings system deletes the map.
 */
qx.Bootstrap.define("qx.core.Setting",
{
  statics :
  {
    /**
     * Get the value of a previously defined setting
     *
     * @param key {String} The key where the data is stored under
     * @return {String|Boolean|Number} The primitive value stored for the given setting
     * @throws an exception is the setting does not exist or the default value was not assigned
     */
    get : function(key)
    {
      var value = jasy.Permutation.selected[key];
      if (value == null) {
        throw new Error('Setting "' + key + '" is not defined.');
      }

      return value;
    }
  }
});
