Internal class for handling of dynamic properties. Should only be used
through the methods provided by {@link qx.Class}.

INTERNALS

* Internally the system now uses crypted storage fields
* All data is stored on a $$data object on each instance
* Improved inheritance support with better performance
* Support for Adobe AIR => No function compilation
* Improved compressibility => Less compiled code size
* Property methods are created at declaration. => No more waiting for first instance.

FUNCTIONAL CHANGES

* Inheritance is sorted into priority chain: Has higher priority than init value
* There is no "inherit" special value on "init" value anymore!
* Transform of value during set() is not supported anymore.

TODO 

* Lay out keywords out of functions e.g. undefined
* Add support for special value "inherit" to user/theme/runtime values
* Add support for check
* Add support for verify

For a complete documentation of properties take a
look at http://qooxdoo.org/documentation/developer_manual/properties.

The <code>properties</code> key in the class definition map of {@link qx.Class#define}
is used to generate the properties.

Valid keys of a property definition are:

<table>
  <tr><th>Name</th><th>Type</th><th>Description</th></tr>
  <tr><th>check</th><td>Array, String, Function</td><td>
    The check is used to check the type the incoming value of a property. This will only
    be executed in the source version. The build version will not contain the checks.
    The check can be:
    <ul>
      <li>a custom check function. The function takes the incoming value as a parameter and must
          return a boolean value to indicate whether the values is valid.
      </li>
      <li>inline check code as a string e.g. <code>"value &gt; 0 && value &lt; 100"</code></li>
      <li>a class name e.g. <code>qx.ui.form.Button</code></li>
      <li>a name of an interface the value must implement</li>
      <li>an array of all valid values</li>
      <li>one of the predefined checks: Boolean, String, Number, Integer, Float, Double,
          Object, Array, Map, Class, Mixin, Interface, Theme, Error, RegExp, Function,
          Date, Node, Element, Document, Window, Event
      </li>
    <ul>
  </td></tr>
  <tr><th>validate</th><td>Function, String</td><td>
    On setting of the property value the method of the specified name will
    be called. The signature of the method is <code>function(value)</code>.
    The parameter <code>value</code> is the value passed to the setter.
    If the validation fails, an <code>qx.core.ValidationError</code> should
    be thrown by the validation function. Otherwise, just do nothing in the
    function.<br>
    If a string is given, the string should hold a reference to a member
    method.<br>
    <code>"<i>methodname</i>"</code> for example
    <code>"this.__validateProperty"</code><br>
    There are some default validators in the {@link qx.util.Validate} class.
    See this documentation for usage examples.
  </td></tr>
  <tr><th>init</th><td>var</td><td>
    Sets the default/initial value of the property. If no property value is set or the property
    gets reset, the getter will return the <code>init</code> value.
  </td></tr>
  <tr><th>apply</th><td>String</td><td>
    On change of the property value the method of the specified name will be called. The signature of
    the method is <code>function(newValue, oldValue)</code>.
  </td></tr>
  <tr><th>event</th><td>String</td><td>
    On change of the property value an event with the given name will be dispached. The event type is
    {@link qx.event.type.Data}.
  </td></tr>
  <tr><th>themeable</th><td>Boolean</td><td>
    Whether this property can be set using themes.
  </td></tr>
  <tr><th>inheritable</th><td>Boolean</td><td>
    Whether the property value should be inheritable. The property will try to get the value from the 
    parent of the current object if there are no values with higher priority.
  </td></tr>
  <tr><th>nullable</th><td>Boolean</td><td>
    Whether <code>null</code> is an allowed value of the property. This is complemental to the check
    defined using the <code>check</code> key.
  </td></tr>
  <tr><th>refine</th><td>Boolean</td><td>
    Whether the property definition is a refinemnet of a property in one of the super classes of the class.
    Only the <code>init</code> value can be changed using refine.
  </td></tr>
</table>
