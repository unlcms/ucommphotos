(function (drupalSettings) {
  require(['idm'], function (idm) {
    idm.setLoginURL(drupalSettings.path.baseUrl + 'caslogin?destination=' + drupalSettings.path.currentPath);
    idm.setLogoutURL(drupalSettings.path.baseUrl + 'user/logout');

    // Need to specifically call the render methods because of the use of amd-disable/amd-enable.
    // idm.setLoginURL() can't be put in the <head> like normal because of the lack of require(),
    // so by the time it is called above, the UNL theme has already called renderAsLoggedIn().
    if (drupalSettings.user.uid || idm.isLoggedIn()) {
      idm.renderAsLoggedIn();
    } else {
      idm.renderAsLoggedOut();
    }
  });
})(drupalSettings);
