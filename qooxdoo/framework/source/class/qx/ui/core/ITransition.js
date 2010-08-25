/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2010 Deutsche Telekom AG, http://www.telekom.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)

************************************************************************ */

/**
 * Defines the interface for a transition used by {@link qx.ui.core.Widget#transition}
 */
qx.Interface.define("qx.ui.core.ITransition",
{
  members :
  {
    /**
     * Returns the compiled style to apply
     * 
     * @return {String} CSS style to apply to the transition property
     */
    getStyle : function() {}
  }
});
