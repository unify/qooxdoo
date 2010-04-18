/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
     2009 Sebastian Werner, http://sebastian-werner.net

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
 * Internal class for handling of dynamic properties. Should only be used
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
qx.Bootstrap.define("qx.core.PropertyGroup",
{
	statics:
	{
		add : function(clazz, name, config)
	  {
	    var upname = qx.lang.String.firstUp(name);
	    var members = clazz.prototype;

	    // Cache often used data fields
	    var shorthand = config.mode == "shorthand";
	    var group = config.group;
	    var length = group.length;

	    // Attach setter
	    members["set"+upname] = function()
	    {
	      var data = arguments[0] instanceof Array ? arguments[0] : qx.lang.Array.fromArguments(arguments);
	      if (shorthand) {
	        data = qx.lang.Array.fromShortHand(data);
	      }

	      var map = {};
	      for (var i=0; i<length; i++) {
	        map[group[i]] = data[i];
	      }

	      this.set(map);
	    };

	    // Attach resetter
	    members["reset"+upname] = function()
	    {
	      for (var i=0; i<length; i++) {
	        this.reset(group[i]);
	      }        
	    };

	    if (config.themeable)
	    {
	      // Attach themed setter
	      members["setThemed"+upname] = function()
	      {
		      var data = arguments[0] instanceof Array ? arguments[0] : qx.lang.Array.fromArguments(arguments);
		      if (shorthand) {
		        data = qx.lang.Array.fromShortHand(data);
		      }

	        var map = {};
	        for (var i=0; i<length; i++) {
	          map[group[i]] = data[i];
	        }

	        this.set(map, null, "setThemed");
	      };

	      // Attach themed resetter
	      members["resetThemed"+upname] = function()
	      {
	        for (var i=0; i<length; i++) {
	          this.reset(group[i], "resetThemed");
	        }        
	      };        
	    }
	  }		
	}
});
