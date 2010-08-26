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

qx.Class.define("demobrowser.demo.ui.Transition",
{
  extend : qx.application.Standalone,

  members :
  {
    main: function()
    {
      this.base(arguments);

      /*
      -------------------------------------------------------------------------
        BUTTONS
      -------------------------------------------------------------------------
      */
      
      // Document is the application root
      var doc = this.getRoot();      
      
      // Location Button
      var btnLocation = new qx.ui.form.Button("Move");
      doc.add(btnLocation, {left: 20, top: 20});
      btnLocation.addListener("execute", function(e) 
      {
        var current = tester.getLayoutProperties();
        var orig = current.top == 20;
        
        tester.setLayoutProperties({
          "top": orig ? 100 : 20,
          "left" : orig ? 400 : 200
        });
      });  
      
      
      // Fade Button
      var btnFade = new qx.ui.form.Button("Fade");
      doc.add(btnFade, {left: 20, top: 50});      
      btnFade.addListener("execute", function(e) {
        tester.setOpacity(tester.getOpacity() == 0 ? 1 : 0);
      });  
          

      // Transform Button
      var btnTransform = new qx.ui.form.Button("Transform");
      doc.add(btnTransform, {left: 20, top: 80});      
      btnTransform.addListener("execute", function(e) {
        tester.setTransform(tester.getTransform() ? null : transform);
      });  




      /*
      -------------------------------------------------------------------------
        TESTER
      -------------------------------------------------------------------------
      */            
      
      // Create tester
      var tester = new qx.ui.core.Widget;
      tester.setBackgroundColor("red");
      tester.setDecorator("main");
      tester.setTransparentVisibility("hidden");
      doc.add(tester, {left: 200, top: 20});
      
      // Apply transition
      var transLocation = new qx.ui.core.MultiTransition;
      transLocation.add(new qx.ui.core.Transition("top"));
      transLocation.add(new qx.ui.core.Transition("left"));
      transLocation.add(new qx.ui.core.Transition("opacity"));
      transLocation.add(new qx.ui.core.Transition("transform"));
      tester.setTransition(transLocation);      

      // Specific transform for active state
      var transform = new qx.ui.core.Transform;
      transform.setRotate(-20);
      transform.setScale(1.6);
      transform.setTranslateY(40);
      
      // Event Handler
      tester.addListener("transitionEnd", function(e)
      {
        var property = e.getProperty();
        this.debug("Transition ended: " + property);
      });
    }
  }
});
