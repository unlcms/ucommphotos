/**
 * @file
 * Initiates the WDN font-serif plugin.
 */

(function (Drupal) {
  Drupal.behaviors.wdnFontSerif = {
    attach: function attach(context, settings) {
      // Check if WDN object is defined.
      if ('undefined' !== typeof WDN) {
        WDN.initializePlugin('font-serif');
      }
      // If WDN object isn't defined, then wait for inlineJSReady event.
      else {
        window.addEventListener('inlineJSReady', function () {
          WDN.initializePlugin('font-serif');
        }, false);
      }
    }
  };
})(Drupal);
