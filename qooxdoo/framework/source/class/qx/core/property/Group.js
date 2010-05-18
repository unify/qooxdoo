/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
     2009-2010 Sebastian Werner, http://sebastian-werner.net

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/**
 * Internal class for handling of dynamic property groups. Should only be used
 * through the methods provided by {@link qx.Class}.
 *
 * For a complete documentation of properties take a
 * look at http://qooxdoo.org/documentation/developer_manual/properties. 
 *
 * Property groups are defined in a similar way but support a different set of keys:
 *
 * <table>
 *   <tr><th>Name</th><th>Type</th><th>Description</th></tr>
 *   <tr><th>group</th><td>String[]</td><td>
 *     A list of property names which should be set using the propery group.
 *   </td></tr>
 *   <tr><th>themeable</th><td>Boolean</td><td>
 *     Whether this property can be set using themes.
 *   </td></tr>
 *   <tr><th>shorthand</th><td>Boolean</td><td>
 *     If enabled, the properties can be set using a CSS like shorthand mode e.g. 
 *     expanding two given values into 4 applied values.
 *   </td></tr>
 * </table>
 * 
 * @internal
 */
qx.Bootstrap.define("qx.core.property.Group",
{
	statics:
	{
	  /**
	   * Adds a new property group to the given class
	   * 
	   * @param clazz {Class} Class to add the property group to
	   * @param name {String} Name of property group
	   * @param config {Map} Configuration map
	   */
		add : function(clazz, name, config)
	  {
	    var upname = qx.Bootstrap.firstUp(name);
	    var members = clazz.prototype;

	    var groups = clazz.$$propertyGroups;
	    if (!groups) {
	      groups = clazz.$$propertyGroups = {};
	    }
	    clazz.$$propertyGroups[name] = config;	   

	    var shorthand = config.shorthand;
	    var group = config.group;
	    var length = group.length;
	    var PropertyCore = qx.core.property.Core;
	    
	    // Attach setter
	    members["set" + upname] = function(first)
	    {
	      var data = first instanceof Array ? first : arguments;
	      if (shorthand) {
	        data = PropertyCore.expandShortHand(data);
	      }

	      var map = {};
	      for (var i=0; i<length; i++) {
	        map[group[i]] = data[i];
	      }

	      this.set(map);
	    };

	    // Attach resetter
	    members["reset" + upname] = function()
	    {
	      for (var i=0; i<length; i++) {
	        this.reset(group[i]);
	      }        
	    };
	  }
	}
});
