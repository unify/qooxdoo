Internal class for handling of dynamic properties.

For a complete documentation of properties take a
look at http://qooxdoo.org/documentation/developer_manual/properties.

<b>What's New</b>

* Splitted property system for simple and multi storage properties. 
* Simple properties (which are about 66%) should be a lot faster then previously.
* Multi properties works with a major improved inheritance and theme system.

Storage changes:

* All data is stored on a $$data object on each instance
* The system uses generated storage fields. There is basically no way to get information about the internal storage field from the outside. 
* This also dramatically reduces memory consumption and improved dispose time by a large extend.

Method creation:

* No function compilation => Full Adobe AIR support, improved compiled size
* Property methods are created at declaration. => No more waiting for first instance.

Memory consumption:

* Themed values are accessed from the theme system when calling get() methods. This omits double storage of these values on every instance.
* Inherited values are accessed from the parent, not copied over to every children.

Functional changes:

* Inheritance is sorted into priority chain: Has higher priority than init value.
* There is no "inherit" special value anymore. Forced inheritance not possible. Is there a need for this?
* Transform of value during set() is not supported anymore. Was not used widely and just confuses users.
* String-based checks are not supported anymore. Just use functions everywhere.
* Validation support is gone. Through the new {@link qx.core.Type} class one may do all things supported there with checks.
