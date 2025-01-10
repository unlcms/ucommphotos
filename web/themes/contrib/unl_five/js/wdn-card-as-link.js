/**
 * @file
 * Initiates WDN Card as Link.
 */

 (function (Drupal) {
  Drupal.behaviors.wdnCardAsLink = {
    attach: function attach(context, settings) {
      // Check if WDN object is defined.
      if ('undefined' !== typeof WDN) {
        WDN.initializePlugin('card-as-link');
      }
      // If WDN object isn't defined, then wait for inlineJSReady event.
      else {
        window.addEventListener('inlineJSReady', function () {
          WDN.initializePlugin('card-as-link');
        }, false);
      }
    }
  };
})(Drupal);
