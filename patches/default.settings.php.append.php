/*
 * Load global settings.
 */
if (file_exists($app_root . '/sites/default/ucommphotos-settings.php')) {
  include $app_root . '/sites/default/ucommphotos-settings.php';
}

/*
 * Load local settings.
 */
if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {
  include $app_root . '/' . $site_path . '/settings.local.php';
}
