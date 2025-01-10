<?php

namespace Drupal\unl_five\Element;

use Drupal\webform\Element\WebformMultiple as WebformMultipleContrib;
use Drupal\Core\Form\FormStateInterface;
use Drupal\webform\Utility\WebformElementHelper;

/**
 * Provides a webform element to assist in creation of multiple elements.
 *
 * @FormElement("webform_multiple")
 */
class WebformMultiple extends WebformMultipleContrib {

  /**
   * Process items and build multiple elements widget.
   */
  public static function processWebformMultiple(&$element, FormStateInterface $form_state, &$complete_form) {
    // Add DCF classes to "add more items" button for webform_mutiple element type.
    $element['add']['submit']['#attributes']['class'][] = 'dcf-btn';
    $element['add']['submit']['#attributes']['class'][] = 'dcf-btn-secondary';

    return $element;
  }
}
