/* ************************************************************************

   Unify Framework

   Copyright:
     2009-2010 Deutsche Telekom AG, Germany, http://telekom.com

   ======================================================================

   This class contains code based on the following work:

   * parseUri
       http://blog.stevenlevithan.com/archives/parseuri
       Version 1.2.1

     Copyright:
       (c) 2007, Steven Levithan

     License:
       MIT: http://en.wikipedia.org/wiki/MIT_License

************************************************************************ */

/**
 * Class to parse and build URIs
 */
qx.Class.define("qx.bom.Uri",
{
  statics :
  {
    /*
    ---------------------------------------------------------------------------
      URL PARSER
    ---------------------------------------------------------------------------
    */
    
    __keys : ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","querystr","anchor"],
    
    __urlParsers : 
    {
      strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    },
    
    __queryParser : /(?:^|&)([^&=]*)=?([^&]*)/g,
    __querySpace : /%20/g,
    


    /**
     * Parses a string into a simple JavaScript Object.
     *
     * @param str {String} URI string
     * @param mode {String?"loose"} One of "loose" or "strict".
     * @return {Map} JavaScript map containing the separated infos of the URI string.
     *    These are the available keys: "source", "protocol", "authority", "userInfo", "user",
     *    "password", "host", "port", "relative", "path", "directory", "file", "querystr", "query" and "anchor".
     */
    parse : function(str, mode)
    {
      var parser = this.__urlParsers[mode||"loose"];
      if (qx.core.Variant.isSet("qx.debug", "on")) 
      {
        if (!parser) {
          throw new Error("Invalid mode: " + mode); 
        }       
      }

      var keys = this.__keys;
      var matches = parser.exec(str);
      var result = {};
      
      for (var i=0, l=keys.length; i<l; i++) {
        result[keys[i]] = matches[i] || "";
      }
      
      // Post parse query string
      result.query = this.parseQuery(result.querystr);

      return result;
    },
    
    
    /**
     * Parses a query string into a simple JavaScript Object.
     *
     * @param str {String} Query string
     * @return {Map} JavaScript map containing the key-value pairs given in the query string.
     */   
    parseQuery : function(str)
    {
      var query = {};
      
      if (str != "")
      {
        if (str.charAt(0) === "?") {
          str = str.substring(1);
        }
        
        str.replace(this.__queryParser, function(match, key, value) {
          query[key] = value;
        });
      }
      
      return query;
    },
    
    
    /**
     * Builds a query string to send data via GET
     * 
     * @param data {Map} Data to serialize.
     * @return {String} String to attach to any URL
     */
    buildQuery : function(data)
    {
      var value = "";
      var result = [];
      
      for (var key in data)
      {
        value = data[key];
        if (value != null && typeof value === "object") {
          value = value.toString();
        }
        
        result.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
      }
      
      return result.join("&").replace(this.__querySpace, "+");      
    }
  }
});
