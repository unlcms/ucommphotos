/**
 * @file
 * JavaScript behaviors for jQuery Text Counter integration.
 */

(function ($, Drupal) {

    'use strict';
  
    /**
     * Initialize text field and textarea word and character counter.
     *
     * @type {Drupal~behavior}
     */
    Drupal.behaviors.dcfTabledrag = {
      attach: function (context) {
        // .tabledrag-toggle-weight element is generated in core/misc/dragtable.js.
        $( document ).ready(function() {
            $('.tabledrag-toggle-weight').addClass('dcf-btn dcf-btn-secondary');
        });
      }
    };
  
  })(jQuery, Drupal);
  