/**
 * @file
 * Initiates WDN Scroll Animations.
 */

 (function (Drupal) {
  Drupal.behaviors.wdnScrollAnimations = {
    attach: function attach(context, settings) {
      // Check if WDN object is defined.
      if ('undefined' !== typeof WDN) {
        WDN.initializePlugin('scroll-animations');
      }
      // If WDN object isn't defined, then wait for inlineJSReady event.
      else {
        window.addEventListener('inlineJSReady', function () {
          WDN.initializePlugin('scroll-animations');
        }, false);
      }
    }
  };
})(Drupal);
