/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2005-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/**
 * This class is the single point to access all settings that may be different
 * in different environments. This contains e.g. the browser name, engine
 * version but also qooxdoo or application specific settings.
 *
 * It's public API can be found in its four main methods. One pair of methods
 * are used to check the synchronous values of the environment. The other pairs
 * is used for asynchronous checks.
 *
 * The most used method should be {@link #get} which is used to return the
 * current value for a given environment check.
 *
 * All qx settings can be changed via the generator's config. See the manual
 * for more details about the environment key in the config. As you can see
 * from the methods API, there is no way to override an existing key. So if you
 * need to change a qx setting, you have to use the generator to do so.
 *
 * The following table shows all checks which could be used. If you are
 * interessted in more details, check the reference to the implementation of
 * each check. Plese do not use these check implementation directly due to the
 * missing caching feature the Environment class offers.
 *
 * <table border="0" cellspacing="10">
 *   <tbody>
 *     <tr>
 *       <td colspan="4"><h2>Synchronous checks</h2>
 *       </td>
 *     </tr>
 *     <tr>
 *       <th><h3>Key</h3></th>
 *       <th><h3>Type</h3></th>
 *       <th><h3>Example</h3></th>
 *       <th><h3>Details</h3></th>
 *     </tr>
 *     <tr>
 *       <td colspan="4"><b>browser</b></td>
 *     </tr>
 *     <tr>
 *       <td>browser.documentmode</td><td><i>Integer</em></td><td><code>0</code></td>
 *       <td>{@link qx.bom.client.Browser#getDocumentMode}</td>
 *     </tr>
 *     <tr>
 *       <td>browser.name</td><td><i>String</em></td><td><code> chrome </code></td>
 *       <td>{@link qx.bom.client.Browser#getName}</td>
 *     </tr>
 *     <tr>
 *       <td>browser.quirksmode</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td>{@link qx.bom.client.Browser#getQuirksMode}</td>
 *     </tr>
 *     <tr>
 *       <td>browser.version</td><td><i>String</em></td><td><code>11.0</code></td>
 *       <td>{@link qx.bom.client.Browser#getVersion}</td>
 *     </tr>
 *     <tr>
 *       <td colspan="4"><b>runtime</b></td>
 *     </tr>
 *     <tr>
 *       <td>runtime.name</td><td><i> String </em></td><td><code> node.js </code></td>
 *       <td>{@link qx.bom.client.Runtime#getName}</td>
 *     </tr>
 *     <tr>
 *       <td colspan="4"><b>css</b></td>
 *     </tr>
 *     <tr>
 *       <td>css.borderradius</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Css#getBorderRadius}</td>
 *     </tr>
 *     <tr>
 *       <td>css.boxmodel</td><td><i>String</em></td><td><code>content</code></td>
 *       <td>{@link qx.bom.client.Css#getBoxModel}</td>
 *     </tr>
 *     <tr>
 *       <td>css.boxshadow</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Css#getBoxShadow}</td>
 *     </tr>
 *     <tr>
 *       <td>css.gradients</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Css#getGradients}</td>
 *     </tr>
 *     <tr>
 *       <td>css.placeholder</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Css#getPlaceholder}</td>
 *     </tr>
 *     <tr>
 *       <td>css.textoverflow</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Css#getTextOverflow}</td>
 *     </tr>
 *     <tr>
 *       <td>css.translate3d</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Css#getTranslate3d}</td>
 *     </tr>
 *     <tr>
 *       <td>css.rgba</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Css#getRgba}</td>
 *     </tr>
 *     <tr>
 *       <td colspan="4"><b>device</b></td>
 *     </tr>
 *     <tr>
 *       <td>device.name</td><td><i>String</em></td><td><code>pc</code></td>
 *       <td>{@link qx.bom.client.Device#getName}</td>
 *     </tr>

 *     <tr>
 *       <td colspan="4"><b>ecmascript</b></td>
 *     </tr>
 *     <tr>
 *       <td>ecmascript.objectcount</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td>{@link qx.bom.client.EcmaScript#getObjectCount}</td>
 *     </tr>

 *     <tr>
 *       <td colspan="4"><b>engine</b></td>
 *     </tr>
 *     <tr>
 *       <td>engine.name</td><td><i>String</em></td><td><code>webkit</code></td>
 *       <td>{@link qx.bom.client.Engine#getName}</td>
 *     </tr>
 *     <tr>
 *       <td>engine.version</td><td><i>String</em></td><td><code>534.24</code></td>
 *       <td>{@link qx.bom.client.Engine#getVersion}</td>
 *     </tr>

 *     <tr>
 *       <td colspan="4"><b>event</b></td>
 *     </tr>
 *     <tr>
 *       <td>event.pointer</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Event#getPointer}</td>
 *     </tr>
 *     <tr>
 *       <td>event.touch</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td>{@link qx.bom.client.Event#getTouch}</td>
 *     </tr>

 *     <tr>
 *       <td colspan="4"><b>html</b></td>
 *     </tr>
 *     <tr>
 *       <td>html.audio</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Html#getAudio}</td>
 *     </tr>
 *     <tr>
 *       <td>html.audio.mp3</td><td><i>String</em></td><td><code>""</code></td>
 *       <td>{@link qx.bom.client.Html#getAudioMp3}</td>
 *     </tr>
 *     <tr>
 *       <td>html.audio.ogg</td><td><i>String</em></td><td><code>"maybe"</code></td>
 *       <td>{@link qx.bom.client.Html#getAudioOgg}</td>
 *     </tr>
 *     <tr>
 *       <td>html.audio.wav</td><td><i>String</em></td><td><code>"probably"</code></td>
 *       <td>{@link qx.bom.client.Html#getAudioWav}</td>
 *     </tr>
 *     <tr>
 *       <td>html.audio.au</td><td><i>String</em></td><td><code>"maybe"</code></td>
 *       <td>{@link qx.bom.client.Html#getAudioAu}</td>
 *     </tr>
 *     <tr>
 *       <td>html.audio.aif</td><td><i>String</em></td><td><code>"probably"</code></td>
 *       <td>{@link qx.bom.client.Html#getAudioAif}</td>
 *     </tr>
 *     <tr>
 *       <td>html.canvas</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Html#getCanvas}</td>
 *     </tr>
 *     <tr>
 *       <td>html.classlist</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Html#getClassList}</td>
 *     </tr>
 *     <tr>
 *       <td>html.geolocation</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Html#getGeoLocation}</td>
 *     </tr>
 *     <tr>
 *       <td>html.storage.local</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Html#getLocalStorage}</td>
 *     </tr>
 *     <tr>
 *       <td>html.storage.session</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Html#getSessionStorage}</td>
 *     </tr>
 *     <tr>
 *       <td>html.svg</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Html#getSvg}</td>
 *     </tr>
 *     <tr>
 *       <td>html.video</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Html#getVideo}</td>
 *     </tr>
 *     <tr>
 *       <td>html.video.h264</td><td><i>String</em></td><td><code>"probably"</code></td>
 *       <td>{@link qx.bom.client.Html#getVideoH264}</td>
 *     </tr>
 *     <tr>
 *       <td>html.video.ogg</td><td><i>String</em></td><td><code>""</code></td>
 *       <td>{@link qx.bom.client.Html#getVideoOgg}</td>
 *     </tr>
 *     <tr>
 *       <td>html.video.webm</td><td><i>String</em></td><td><code>"maybe"</code></td>
 *       <td>{@link qx.bom.client.Html#getVideoWebm}</td>
 *     </tr>
 *     <tr>
 *       <td>html.vml</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td>{@link qx.bom.client.Html#getVml}</td>
 *     </tr>
 *     <tr>
 *       <td>html.webworker</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Html#getWebWorker}</td>
 *     <tr>
 *       <td>html.filereader</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Html#getFileReader}</td>
 *     </tr>
 *     <tr>
 *       <td>html.xpath</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Html#getXPath}</td>
 *     </tr>
 *     <tr>
 *       <td>html.xul</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Html#getXul}</td>
 *     </tr>

 *     <tr>
 *       <td colspan="4"><b>io</b></td>
 *     </tr>
 *     <tr>
 *       <td>io.maxrequests</td><td><i>Integer</em></td><td><code>4</code></td>
 *       <td>{@link qx.bom.client.Transport#getMaxConcurrentRequestCount}</td>
 *     </tr>
 *     <tr>
 *       <td>io.ssl</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td>{@link qx.bom.client.Transport#getSsl}</td>
 *     </tr>
 *     <tr>
 *       <td>io.xhr</td><td><i>String</em></td><td><code>xhr</code></td>
 *       <td>{@link qx.bom.client.Transport#getXmlHttpRequest}</td>
 *     </tr>

 *     <tr>
 *       <td colspan="4"><b>locale</b></td>
 *     </tr>
 *     <tr>
 *       <td>locale</td><td><i>String</em></td><td><code>de</code></td>
 *       <td>{@link qx.bom.client.Locale#getLocale}</td>
 *     </tr>
 *     <tr>
 *       <td>locale.variant</td><td><i>String</em></td><td><code>de</code></td>
 *       <td>{@link qx.bom.client.Locale#getVariant}</td>
 *     </tr>

 *     <tr>
 *       <td colspan="4"><b>os</b></td>
 *     </tr>
 *     <tr>
 *       <td>os.name</td><td><i>String</em></td><td><code>osx</code></td>
 *       <td>{@link qx.bom.client.OperatingSystem#getName}</td>
 *     </tr>
 *     <tr>
 *       <td>os.version</td><td><i>String</em></td><td><code>10.6</code></td>
 *       <td>{@link qx.bom.client.OperatingSystem#getVersion}</td>
 *     </tr>
 *     <tr>
 *       <td>os.scrollBarOverlayed</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td>{@link qx.bom.client.Scroll#scrollBarOverlayed}</td>
 *     </tr>

 *     <tr>
 *       <td colspan="4"><b>phonegap</b></td>
 *     </tr>
 *     <tr>
 *       <td>phonegap</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td>{@link qx.bom.client.PhoneGap#getPhoneGap}</td>
 *     </tr>
 *     <tr>
 *       <td>phonegap.notification</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td>{@link qx.bom.client.PhoneGap#getNotification}</td>
 *     </tr>

 *     <tr>
 *       <td colspan="4"><b>plugin</b></td>
 *     </tr>
 *     <tr>
 *       <td>plugin.divx</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td>{@link qx.bom.client.Plugin#getDivX}</td>
 *     </tr>
 *     <tr>
 *       <td>plugin.divx.version</td><td><i>String</em></td><td></td>
 *       <td>{@link qx.bom.client.Plugin#getDivXVersion}</td>
 *     </tr>
 *     <tr>
 *       <td>plugin.flash</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Flash#isAvailable}</td>
 *     </tr>
 *     <tr>
 *       <td>plugin.flash.express</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Flash#getExpressInstall}</td>
 *     </tr>
 *     <tr>
 *       <td>plugin.flash.strictsecurity</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Flash#getStrictSecurityModel}</td>
 *     </tr>
 *     <tr>
 *       <td>plugin.flash.version</td><td><i>String</em></td><td><code>10.2.154</code></td>
 *       <td>{@link qx.bom.client.Flash#getVersion}</td>
 *     </tr>
 *     <tr>
 *       <td>plugin.gears</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td>{@link qx.bom.client.Plugin#getGears}</td>
 *     </tr>
 *     <tr>
 *       <td>plugin.pdf</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td>{@link qx.bom.client.Plugin#getPdf}</td>
 *     </tr>
 *     <tr>
 *       <td>plugin.pdf.version</td><td><i>String</em></td><td></td>
 *       <td>{@link qx.bom.client.Plugin#getPdfVersion}</td>
 *     </tr>
 *     <tr>
 *       <td>plugin.quicktime</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Plugin#getQuicktime}</td>
 *     </tr>
 *     <tr>
 *       <td>plugin.quicktime.version</td><td><i>String</em></td><td><code>7.6</code></td>
 *       <td>{@link qx.bom.client.Plugin#getQuicktimeVersion}</td>
 *     </tr>
 *     <tr>
 *       <td>plugin.silverlight</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td>{@link qx.bom.client.Plugin#getSilverlight}</td>
 *     </tr>
 *     <tr>
 *       <td>plugin.silverlight.version</td><td><i>String</em></td><td></td>
 *       <td>{@link qx.bom.client.Plugin#getSilverlightVersion}</td>
 *     </tr>
 *     <tr>
 *       <td>plugin.windowsmedia</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td>{@link qx.bom.client.Plugin#getWindowsMedia}</td>
 *     </tr>
 *     <tr>
 *       <td>plugin.windowsmedia.version</td><td><i>String</em></td><td></td>
 *       <td>{@link qx.bom.client.Plugin#getWindowsMediaVersion}</td>
 *     </tr>

 *     <tr>
 *       <td colspan="4"><b>qx</b></td>
 *     </tr>
 *     <tr>
 *       <td>qx.allowUrlSettings</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td><i>default:</i> <code>false</code></td>
 *     </tr>
 *     <tr>
 *       <td>qx.allowUrlVariants</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td><i>default:</i> <code>false</code></td>
 *     </tr>
 *     <tr>
 *       <td>qx.application</td><td><i>String</em></td><td><code>name.space</code></td>
 *       <td><i>default:</i> <code>&lt;&lt;application name&gt;&gt;</code></td>
 *     </tr>
 *     <tr>
 *       <td>qx.aspects</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td><i>default:</i> <code>false</code></td>
 *     </tr>
 *     <tr>
 *       <td>qx.debug</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td><i>default:</i> <code>true</code></td>
 *     </tr>
 *     <tr>
 *       <td>qx.debug.databinding</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td><i>default:</i> <code>false</code></td>
 *     </tr>
 *     <tr>
 *       <td>qx.debug.dispose</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td><i>default:</i> <code>false</code></td>
 *     </tr>
 *     <tr>
 *       <td>qx.disposerDebugLevel</td><td><i>Integer</em></td><td><code>0</code></td>
 *       <td><i>default:</i> <code>0</code></td>
 *     </tr>
 *     <tr>
 *       <td>qx.dynamicmousewheel</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td><i>default:</i> <code>true</code></td>
 *     </tr>
 *     <tr>
 *       <td>qx.dynlocale</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td><i>default:</i> <code>true</code></td>
 *     </tr>
 *     <tr>
 *       <td>qx.globalErrorHandling</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td><i>default:</i> <code>false</code></td>
 *     </tr>
 *     <tr>
 *       <td>qx.mobile.emulatetouch</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td><i>default:</i> <code>false</code></td>
 *     </tr>
 *     <tr>
 *       <td>qx.mobile.nativescroll</td><td><i>Boolean</em></td><td><code>false</code></td>
 *       <td><i>default:</i> <code>false</code></td>
 *     </tr>
 *     <tr>
 *       <td>qx.optimization.basecalls</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>true if the corresp. <i>optimize</i> key is set in the config</td>
 *     </tr>
 *     <tr>
 *       <td>qx.optimization.comments</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>true if the corresp. <i>optimize</i> key is set in the config</td>
 *     </tr>
 *     <tr>
 *       <td>qx.optimization.privates</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>true if the corresp. <i>optimize</i> key is set in the config</td>
 *     </tr>
 *     <tr>
 *       <td>qx.optimization.strings</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>true if the corresp. <i>optimize</i> key is set in the config</td>
 *     </tr>
 *     <tr>
 *       <td>qx.optimization.variables</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>true if the corresp. <i>optimize</i> key is set in the config</td>
 *     </tr>
 *     <tr>
 *       <td>qx.optimization.variants</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>true if the corresp. <i>optimize</i> key is set in the config</td>
 *     </tr>
 *     <tr>
 *       <td>qx.propertyDebugLevel</td><td><i>Integer</em></td><td><code>0</code></td>
 *       <td><i>default:</i> <code>0</code></td>
 *     </tr>
 *     <tr>
 *       <td>qx.revision</td><td><i>String</em></td><td><code>27348</code></td>
 *     </tr>
 *     <tr>
 *       <td>qx.theme</td><td><i>String</em></td><td><code>qx.theme.Modern</code></td>
 *       <td><i>default:</i> <code>&lt;&lt;theme name&gt;&gt;</code></td>
 *     </tr>
 *     <tr>
 *       <td>qx.version</td><td><i>String</em></td><td><code>1.5</code></td>
 *     </tr>
 *     <tr>
 *       <td colspan="4"><h3>Asynchronous checks</h3>
 *       </td>
 *     </tr>
 *     <tr>
 *       <td>html.dataurl</td><td><i>Boolean</em></td><td><code>true</code></td>
 *       <td>{@link qx.bom.client.Html#getDataUrl}</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 */
qx.Bootstrap.define("qx.core.Environment",
{
  statics : {

    /** Map containing the synchronous check functions. */
    _checks : {},
    /** Map containing the asynchronous check functions. */
    _asyncChecks : {},

    /** Internal cache for all checks. */
    __cache : {},

    /**
     * The default accessor for the checks. It returns the value the current
     * environment has for the given key. The key could be something like
     * "qx.debug", "css.textoverflow" or "io.ssl". A complete list of
     * checks can be found in the class comment of this class.
     *
     * Please keep in mind that the result is cached. If you want to run the
     * check function again in case something could have been changed, take a
     * look at the {@link #invalidateCacheKey} function.
     *
     * @param key {String} The name of the check you want to query.
     */
    get : function(key) {
      var value = core.Env.getValue(key);
      return value;
    },


    /**
     * Invokes the callback as soon as the check has been done. If no check
     * could be found, a warning will be printed.
     *
     * @param key {String} The key of the asynchronous check.
     * @param callback {Function} The function to call as soon as the check is
     *   done. The function should have one argument which is the result of the
     *   check.
     * @param self {var} The context to use when invoking the callback.
     */
    getAsync : function(key, callback, self) {
      console.error("GET ASYNC ", key);
    },


    /**
     * Returns the proper value dependent on the check for the given key.
     *
     * @param key {String} The name of the check the select depends on.
     * @param values {Map} A map containing the values which should be returned
     *   in any case. The "default" key could be used as a catch all statement.
     * @return {var} The value which is stored in the map for the given
     *   check of the key.
     */
    select : function(key, values) {
      return this.__pickFromValues(this.get(key), values);
    },


    /**
     * Selects the proper function dependent on the asynchronous check.
     *
     * @param key {String} The key for the async check.
     * @param values {Map} A map containing functions. The map keys should
     *   contain all possibilities which could be returned by the given check
     *   key. The "default" key could be used as a catch all statement.
     *   The called function will get one parameter, the result of the query.
     * @param self {var} The context which should be used when calling the
     *   method in the values map.
     */
    selectAsync : function(key, values, self) {
      console.error("SELECT ASYNC ", key);
    },


    /**
     * Internal helper which tries to pick the given key from the given values
     * map. If that key is not found, it tries to use a key named "default".
     * If there is also no default key, it prints out a warning and returns
     * undefined.
     *
     * @param key {String} The key to search for in the values.
     * @param values {Map} A map containing some keys.
     * @return {var} The value stored as values[key] usually.
     */
    __pickFromValues : function(key, values) {
      var value = values[key];
      if (values.hasOwnProperty(key)) {
        return value;
      }

      // check for piped values
      for (var id in values) {
        if (id.indexOf("|") != -1) {
          var ids = id.split("|");
          for (var i = 0; i < ids.length; i++) {
            if (ids[i] == key) {
              return values[id];
            }
          };
        }
      }

      if (values["default"] !== undefined) {
        return values["default"];
      }

      if (qx.Bootstrap.DEBUG)
      {
        throw new Error('No match for variant "' + key +
          '" (' + (typeof key) + ' type)' +
          ' in variants [' + qx.Bootstrap.getKeysAsString(values) +
          '] found, and no default ("default") given');
      }
    },


    /**
     * Invalidates the cache for the given key.
     *
     * @param key {String} The key of the check.
     */
    invalidateCacheKey : function(key) {
    },


    /**
     * Add a check to the environment class. If there is already a check
     * added for the given key, the add will be ignored.
     *
     * @param key {String} The key for the check e.g. html.featurexyz.
     * @param check {var} It could be either a function or a simple value.
     *   The function should be responsible for the check and should return the
     *   result of the check.
     */
    add : function(key, check) {
      core.Env.define(key, check);
    },


    /**
     * Adds an asynchronous check to the environment. If there is already a check
     * added for the given key, the add will be ignored.
     *
     * @param key {String} The key of the check e.g. html.featureabc
     * @param check {Function} A function which should check for a specific
     *   environment setting in an asynchronous way. The method should take two
     *   arguments. First one is the callback and the second one is the context.
     */
    addAsync : function(key, check) {
      console.error("ADD ASYNC ", key);
    },


    /**
     * Returns all currently defined synchronous checks.
     * 
     * @internal
     * @return {Map} The map of synchronous checks
     */
    getChecks : function()
    {
      console.error("GET CHECKS");
    },


    /**
     * Returns all currently defined asynchronous checks.
     * 
     * @internal
     * @return {Map} The map of asynchronous checks
     */
    getAsyncChecks : function()
    {
      console.error("GET ASYNC CHECKS");
    },


    /**
     * Initializer for the default values of the framework settings.
     */
    _initDefaultQxValues : function() {
      this.add("engine.name", "webkit"); // FIX
      /*this.add("qx.debug", true);
      this.add("qx.aspects", false);
      this.add("qx.application", "test.Application");*/
      return;
      // old settings
      this.add("qx.allowUrlSettings", function() {return false;});
      this.add("qx.allowUrlVariants", function() {return false;});
      this.add("qx.propertyDebugLevel", function() {return 0;});

      // old variants
      // make sure to reflect all changes to qx.debug here in the bootstrap class!
      this.add("qx.debug", function() {return true;});
      this.add("qx.aspects", function() {return false;});
      this.add("qx.dynlocale", function() {return true;});
      this.add("qx.mobile.emulatetouch", function() {return false;});
      this.add("qx.mobile.nativescroll", function() {return false;});

      this.add("qx.dynamicmousewheel", function() {return true;});
      this.add("qx.debug.databinding", function() {return false;});
      this.add("qx.debug.dispose", function() {return false;});

      // generator optimization vectors
      this.add("qx.optimization.basecalls", function() {return false;});
      this.add("qx.optimization.comments", function() {return false;});
      this.add("qx.optimization.privates", function() {return false;});
      this.add("qx.optimization.strings", function() {return false;});
      this.add("qx.optimization.variables", function() {return false;});
      this.add("qx.optimization.variants", function() {return false;});
    },

    /**
     * Internal helper which creates a function retuning the given value.
     *
     * @param value {var} The value which should be returned.
     * @return {Function} A function which could be used by a test.
     */
    __createCheck : function(value) {
      return qx.Bootstrap.bind(function(value) {
        return value;
      }, null, value);
    },


    /**
     * Internal helper for the generator to flag that this block contains the
     * dependency for the given check key.
     *
     * @internal
     * @param key {String} the check key.
     * @return {Boolean} Always true
     */
    useCheck : function(key) {
      return true;
    }
  },


  defer : function(statics) {
    // create default values for the environment class
    statics._initDefaultQxValues();
  }
});
