<?php

namespace Drupal\unl_cas\Routing;

use Drupal\Core\Routing\RouteSubscriberBase;
use Symfony\Component\Routing\RouteCollection;

/**
 * Listens to the dynamic route events.
 */
class RouteSubscriber extends RouteSubscriberBase {

  /**
   * {@inheritdoc}
   */
  protected function alterRoutes(RouteCollection $collection) {
    // Force the standard login form to go to CAS.
    // This eliminates the /user/login path and redirects the /user path
    // to /caslogin for an unauthenticated user.
    // Allow redirect to be bypassed with environment variable.
    if (!isset($_ENV['UNLCAS_BYPASS_LOGIN_REDIRECT'])) {
      if ($route = $collection->get('user.login')) {
        $route->setPath('caslogin');
      }
    }  
    // Always deny access to '/admin/people/create'.
    if ($route = $collection->get('user.admin_create')) {
      $route->setRequirement('_access', 'FALSE');
    }
    // Always deny access to '/admin/people/create/cas-bulk'.
    if ($route = $collection->get('cas.bulk_add_cas_users')) {
      $route->setRequirement('_access', 'FALSE');
    }
  }

}
