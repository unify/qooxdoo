/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/**
 * The qx.locale.Manager provides static translation methods (like tr()) and
 * general locale information.
 */

qx.Class.define("qx.locale.Manager",
{
  type : "singleton",
  extend : qx.core.Object,




  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  construct : function()
  {
    this.base(arguments);

    this.__translations = qx.$$translations || {};
    this.__locales      = qx.$$locales || {};

    var clazz = qx.bom.client.Locale;

    var locale = clazz.LOCALE;
    var variant = clazz.VARIANT;
    if (variant !== "") {
      locale += "_" + variant;
    }
    
    this.__clientLocale = locale;

    this.setLocale(locale || this.__defaultLocale);
  },




  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */

  statics :
  {
    /**
     * Mark the message for translation but return the original message.
     *
     * @param messageId {String} the message ID
     * @return {String} messageId
     */
    marktr : function(messageId) {
      return messageId;
    }
  },




  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    /** current locale. locale is an language code like de, de_AT, en, en_GB, fr, ... */
    locale :
    {
      check : "String",
      nullable : true,
      apply : "_applyLocale",
      event : "changeLocale"
    }
  },




  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {

    __defaultLocale : "C",
    __locale : null,
    __language : null,
    __translations : null,
    __locales : null,
    __clientLocale : null,

    /**
     * Get the language code of the current locale
     *
     * This is the first part of a locale definition. The language for "de_DE" would be "de"
     *
     * @return {String} language code
     */
    getLanguage : function() {
      return this.__language;
    },


    /**
     * Get the territory code of the current locale
     *
     * This is the second part of a locale definition. The territory for "de_DE" would be "DE"
     *
     * @return {String} territory code
     */
    getTerritory : function() {
      return this.getLocale().split("_")[1] || "";
    },


    /**
     * Return the available application locales
     *
     * This corresponds to the LOCALES setting in config.json
     *
     * @return {String[]} array of available locales
     */
    getAvailableLocales : function()
    {
      var locales = [];

      for (var locale in this.__locales)
      {
        if (locale != this.__defaultLocale) {
          locales.push(locale);
        }
      }

      return locales;
    },


    /**
     * Extract the language part from a locale.
     *
     * @param locale {String} locale to be used
     * @return {String} language
     */
    __extractLanguage : function(locale)
    {
      var language;
      var pos = locale.indexOf("_");

      if (pos == -1) {
        language = locale;
      } else {
        language = locale.substring(0, pos);
      }

      return language;
    },


    // property apply
    _applyLocale : function(value, old)
    {
      if (qx.core.Variant.isSet("qx.debug", "on")) {
        if (!(value in this.__locales || value == this.__clientLocale)) {
          qx.log.Logger.warn("Locale: " + value+" not available.");
        }
      }

      this.__locale = value;
      this.__language = this.__extractLanguage(value);
    },


    /**
     * Translate a message using the current locale and apply format string to the arguments.
     *
     * Implements the lookup chain locale (e.g. en_US) -> language (e.g. en) ->
     * default locale (e.g. C). Localizes the arguments if possible and splices
     * them into the message. If qx.dynlocale is on, returns a {@link
     * LocalizedString}.
     *
     * @param messageId {String} message id (may contain format strings)
     * @param args {Object[]} array of objects, which are inserted into the format string
     * @param locale {String ? #locale} locale to be used; if not given, defaults to the value of {@link #locale}
     * @return {String | LocalizedString} translated message or localized string
     */
    translate : function(messageId, args, locale)
    {
      var catalog = this.__translations;
      return this.__lookupAndExpand(catalog, messageId, args, locale);
    },

    /**
     * Provide localisation (CLDR) data.
     *
     * Implements the lookup chain locale (e.g. en_US) -> language (e.g. en) ->
     * default locale (e.g. C). Localizes the arguments if possible and splices
     * them into the message. If qx.dynlocale is on, returns a {@link
     * LocalizedString}.
     *
     * @param messageId {String} message id (may contain format strings)
     * @param args {Object[]} array of objects, which are inserted into the format string
     * @param locale {String ? #locale} locale to be used; if not given, defaults to the value of {@link #locale}
     * @return {String | LocalizedString} translated message or localized string
     */
    localize : function(messageId, args, locale)
    {
      var catalog = this.__locales;
      return this.__lookupAndExpand(catalog, messageId, args, locale);
    },


    /**
     * Look up an I18N key in a catalog and expand format strings.
     *
     * Implements the lookup chain locale (e.g. en_US) -> language (e.g. en) ->
     * default locale (e.g. C). Localizes the arguments if possible and splices
     * them into the message. If qx.dynlocale is on, returns a {@link
     * LocalizedString}.
     *
     * @param catalog {Map} map of I18N keys and their values
     * @param messageId {String} message id (may contain format strings)
     * @param args {Object[]} array of objects, which are inserted into the format string
     * @param locale {String ? #locale} locale to be used; if not given, defaults to the value of {@link #locale}
     * @return {String | LocalizedString} translated message or localized string
     */
    __lookupAndExpand : function(catalog, messageId, args, locale)
    {
      var txt;

      if (!catalog) {
        return messageId;
      }

      if (locale) {
        var language = this.__extractLanguage(locale);
      }
      else
      {
        locale = this.__locale;
        language = this.__language;
      }

      // e.g. DE_at
      if (!txt && catalog[locale]) {
        txt = catalog[locale][messageId];
      }

      // e.g. DE
      if (!txt && catalog[language]) {
        txt = catalog[language][messageId];
      }

      // C
      if (!txt && catalog[this.__defaultLocale]) {
        txt = catalog[this.__defaultLocale][messageId];
      }

      if (!txt) {
        txt = messageId;
      }

      if (args.length > 0)
      {
        var translatedArgs = [];
        for ( var i = 0; i < args.length; i++)
        {
          var arg = args[i];
          if (arg && arg.translate) {
            translatedArgs[i] = arg.translate();
          } else {
            translatedArgs[i] = arg;
          }
        }
        txt = qx.lang.String.format(txt, translatedArgs);
      }

      if (qx.core.Variant.isSet("qx.dynlocale", "on")) {
        txt = new qx.locale.LocalizedString(txt, messageId, args);
      }

      return txt;
    }
  },


  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function() {
    this.__translations = this.__locales = null;
  }
});
