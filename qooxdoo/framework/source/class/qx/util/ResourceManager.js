/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
     2010 Sebastian Werner, http://sebastian-werner.net

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/**
 * Contains information about images (size, format, clipping, ...) and
 * other resources like CSS files, local data, ...
 */
qx.Class.define("qx.util.ResourceManager",
{
  extend  : qx.core.Object,
  type    : "singleton",

  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */

  statics :
  {
    /** {Map} prefix per library used in HTTPS mode for IE */
    __urlPrefix : {}
  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    __cache : {},
    __sprites : {},
    
    
    /**
     * Get information about an resource.
     *
     * @param id {String} The resource to get the information for
     * @return {Array} Registered data or <code>null</code>
     */
    getData : function(id) 
    {
      var cache = this.__cache;
      var file = cache[id];
      if (file != null) {
        return file;
      }
      
      var files = $$resources.files;
      var images = $$resources.images;
      
      var lastSlash = id.lastIndexOf("/");
      var dirName = id.substring(0, lastSlash);
      var dir = files[dirName] || images[dirName];
      if (dir)
      {
        var fileName = id.substring(lastSlash+1);
        var file = dir[fileName] || images[dirName][fileName];
        if (file) {
          return cache[id] = file;
        }
      }
    },
    
    
    /**
     * Whether the registry has information about the given resource.
     *
     * @param id {String} The resource to get the information for
     * @return {Boolean} <code>true</code> when the resource is known.
     */
    has : function(id) {
      return this.__cache[id] || this.getData(id) != null;
    },


    /**
     * Returns the width of the given resource ID,
     * when it is not a known image <code>0</code> is
     * returned.
     *
     * @param id {String} Resource identifier
     * @return {Integer} The image width, maybe <code>null</code> when the width is unknown
     */
    getImageWidth : function(id)
    {
      var data = this.getData(id);
      return data && data[1];
    },


    /**
     * Returns the height of the given resource ID,
     * when it is not a known image <code>0</code> is
     * returned.
     *
     * @param id {String} Resource identifier
     * @return {Integer} The image height, maybe <code>null</code> when the height is unknown
     */
    getImageHeight : function(id)
    {
      var data = this.getData(id);
      return data && data[2];
    },
    
    
    /**
     * Returns the dimensions of the given image ID
     */
    getImageSize : function(id) 
    {
      var data = this.getData(id);
      if (data) {
        return { width: data[1], height: data[2] };
      }
    },
    
    
    /**
     * Returns sprite details for being used for the given image ID.
     *
     * Nothing is returned when the given ID is not available as part of an image sprite.
     *
     * @param id {String} Resource identifier
     * @return {Map} 
     */
    getImageSprite : function(id)
    {
      var sprites = this.__sprites;
      var result = sprites[id];
      if (!result) 
      {
        var data = this.getData(id);
        if (data.length > 3) 
        {
          var lastSlash = id.lastIndexOf("/");
          var dirName = id.substring(0, lastSlash);
          var spriteData = $$resources.sprites[dirName][data[3]];
          var needsPosX = spriteData[4] == 1;
          var needsPosY = spriteData[5] == 1;

          sprites[id] = result = {
            uri : $$resources.roots[spriteData[1]] + "/" + dirName + "/" + spriteData[0],
            left : needsPosX ? data[4] : 0,
            top : needsPosY ? needsPosX ? data[5] : data[4] : 0,
            width : spriteData[2],
            height : spriteData[3]
          };
        }
      }
      
      return result;
    },
    

    /**
     * Converts the given resource ID to a full qualified URI
     *
     * @param id {String} Resource ID
     * @return {String} Resulting URI
     */
    toUri : function(id)
    {
      if (id == null) {
        return id;
      }

      var data = this.getData(id);
      if (data == null) {
        return id;
      }

      var root = $$resources.roots[data.join ? data[0] : data];
      var url = root + "/" + id;

      // FIXME: IE + SSL

      return url;
    }
  }
});
