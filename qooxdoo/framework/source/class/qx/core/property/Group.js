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
 *   <tr><th>mode</th><td>String</td><td>
 *     If mode is set to <code>"shorthand"</code>, the properties can be set using a CSS like shorthand mode.
 *   </td></tr>
 *   <tr><th>themeable</th><td>Boolean</td><td>
 *     Whether this property can be set using themes.
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

      this.__add(upname, config, members);
	    if (config.themeable) {
        this.__add(upname, config, members, "themed");
	    }
	  },


	  /**
	   * Helper method to attach group methods to the class
	   * 
	   * @param upname {String} Name of property (first character upper-case)
	   * @param config {Map} Configuration map
	   * @param members {Map} Member map to add to
	   * @param type {String} One of "" or "Themed"
	   */
	  __add : function(upname, config, members, variant)
	  {
	    var shorthand = config.mode == "shorthand";
	    var group = config.group;
	    var length = group.length;
	    var LangArray = qx.lang.Array;
	    var upvariant = variant ? qx.Bootstrap.firstUp(variant) : "";
	    
	    // Attach setter
	    members["set" + upvariant + upname] = function(first)
	    {
	      var data = first instanceof Array ? first : LangArray.fromArguments(arguments);
	      if (shorthand) {
	        data = LangArray.fromShortHand(data);
	      }

	      var map = {};
	      for (var i=0; i<length; i++) {
	        map[group[i]] = data[i];
	      }

	      this.set(map, undefined, variant);
	    };

	    // Attach resetter
	    members["reset" + upvariant + upname] = function()
	    {
	      for (var i=0; i<length; i++) {
	        this.reset(group[i], variant);
	      }        
	    };	    
	  }	  		
	}
});
