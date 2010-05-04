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

/**
 * Replacement for add/remove functions of {@link qx.bom.element.Class} to
 * support multiple adds/removes per call.
 */
qx.Class.define("qx.bom.element2.Class",
{
	statics :
	{
		/** {RegExp} Regular expressions to split class names */
		__splitter : /\s+/g,

		/** {RegExp} String trim regular expression. */
		__trim : /^\s+|\s+$/g,


		/**
		 * Adds one or multiple classes to the given element
		 *
		 * @param elem {Element} DOM element to modify
		 * @param classes {String[]|varargs} List of classes to add. Could be
		 *		an array or a list or arguments.
		 * @return {String} The resulting class name which was applied
		 */
		add : function(elem, classes)
		{
			if (typeof classes !== "object") {
				classes = Array.prototype.slice.call(arguments, 1);
			}

			var old=elem.className, keys={}, result;
			if (old)
			{
				result = old.split(this.__splitter);
				for (var i=0, l=result.length; i<l; i++) {
					keys[result[i]] = true;
				}

				for (var i=0, l=classes.length; i<l; i++)
				{
					if (!keys[classes[i]]) {
						result.push(classes[i]);
					}
				}
			}
			else
			{
				result = classes;
			}

			return elem.className = result.join(" ");
		},


		/**
		 * Removes one or multiple classes from the given element
		 *
		 * @param elem {Element} DOM element to modify
		 * @param classes {String[]|varargs} List of classes to remove. Could be
		 *		an array or a list or arguments.
		 * @return {String} The resulting class name which was applied
		 */
		remove : function(elem, classes)
		{
			if (typeof classes !== "object") {
				classes = Array.prototype.slice.call(arguments, 1);
			}

			var reg = new RegExp("\\b" + classes.join("\\b|\\b") + "\\b", "g");
			return elem.className = elem.className.replace(reg, "").replace(this.__trim, "").replace(this.__splitter, " ");
		}
	}
});
