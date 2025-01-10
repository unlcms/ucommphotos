define.origAmd = define.amd;
delete define.amd;
window.WDNPluginsExecuting = 0;

/**
 * Files that need to call WDN.initializePlugin() after this point can
 * use define.origAmd to restore define.amd before calling and then revert
 * in an "after" callback function.
 *
 * A count of currently executing plugins is kept in window.WDNPluginsExecuting
 * since plugins run asynchronously.
 *
 * An example:
 *
 *   function initEventsBand() {
 *     if (define.amd === undefined) {
 *       define.amd = define.origAmd;
 *       delete define.origAmd;
 *     }
 *     window.WDNPluginsExecuting++;
 *
 *     var json = $("script[data-selector-json=wdn-events-band-settings]")['0'].innerHTML;
 *     var json = JSON.parse(json);
 *     WDN.setPluginParam('events', 'href', json.url);
 *     WDN.initializePlugin(
 *         'events-band',
 *         {limit: json.limit, rooms: true},
 *         enableAMDcallback,
 *         'after'
 *     );
 *
 *     function enableAMDcallback() {
 *       window.WDNPluginsExecuting--;
 *       if (define.origAmd === undefined && window.WDNPluginsExecuting === 0) {
 *         define.origAmd = define.amd;
 *         delete define.amd;
 *       }
 *     }
 *   }
 */
