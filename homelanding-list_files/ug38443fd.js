



/* ControlTag Loader for Philip Morris CC 29c14a39-e8b1-4493-af27-1c9039884b1d */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.42.4","schema_version":3},"confid":"ug38443fd","context_terms":[],"publisher":{"name":"Philip Morris CC","active":true,"uuid":"29c14a39-e8b1-4493-af27-1c9039884b1d","version_bucket":"stable","id":4441},"params":{"first_party_dmp_managed":true,"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"first_party_cookie_enhancements":true,"control_tag_pixel_throttle":100,"fingerprint":false,"optout_button_optout_text":"Browser Opt Out","channel":"display","user_data_timing":"load","consent_active":true,"use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","first_party_uid":true,"dcm_profile_ids":"5722703","link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","client_type":"marketer","target_fingerprint":false,"context_terms":true,"optout_button_id":"kx-optout-button","user_id_cookie":"kppid","dfp_premium":true,"control_tag_namespace":"philipmorriscc"},"prioritized_segments":[],"realtime_segments":[],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/29c14a39-e8b1-4493-af27-1c9039884b1d","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/29c14a39-e8b1-4493-af27-1c9039884b1d","consent_set":"https://consumer.krxd.net/consent/set/29c14a39-e8b1-4493-af27-1c9039884b1d","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/29c14a39-e8b1-4493-af27-1c9039884b1d","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"PMID_CC_Display","cap":2,"id":1679232,"organization_id":4441,"uid":"ug38443fd"},"tags":[{"id":42014,"name":"Standard DTC","content":"<script>\n(function() {\n    /* Standard but configurable DTC */\n    var comDomain, domain, level, libUtil, pathLevel, prefix, toSet;\n    libUtil = Krux('require:util.library-tag');\n    toSet = {};\n    level = 1;\n    while (level <= Number('5')) {\n        pathLevel = Krux('scrape.url_path', level);\n        if (pathLevel) {\n            if ('false' === 'true') {\n                pathLevel = (\"\" + pathLevel).replace(\n                    /\\.(?:html?|php[0-9]?|aspx?|cfg|py)$/i, '');\n            }\n            toSet[\"page_attr_url_path_\" + level] = pathLevel;\n        }\n        level++;\n    }\n    toSet['page_attr_meta_keywords'] = Krux('scrape.meta_name', 'keywords');\n    prefix = libUtil.resolvePrefix('none', 'undefined',\n        'undefined');\n    toSet = Krux('prefix:attr', toSet, prefix);\n    domain = Krux('get', 'domain');\n    comDomain = domain.match(/\\.([^\\.]+\\.com)$/);\n    if (comDomain) {\n        domain = comDomain[1];\n    }\n    toSet['page_attr_domain'] = domain;\n    Krux('set', toSet);\n}).call();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":44063,"name":"Tech Atts DTC","content":"<script>\n(function() {\n\tKrux('set', 'user_attr_lang', Krux('get', 'user_attr_kx_lang'));\n\tKrux('set', 'user_attr_tech_browser_language', Krux('get', 'user_attr_kx_tech_browser_language'));\n\tKrux('set', 'user_attr_tech_browser', Krux('get', 'user_attr_kx_tech_browser'));\n\tKrux('set', 'user_attr_tech_manufacturer', Krux('get', 'user_attr_kx_tech_manufacturer'));\n\tKrux('set', 'user_attr_tech_device', Krux('get', 'user_attr_kx_tech_device'));\n\tKrux('set', 'user_attr_tech_os', Krux('get', 'user_attr_kx_tech_os'));\n})();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":42093,"name":"UTM DTC","content":"<script>\n(function(){\n\n\tvar params = Krux('require:util').urlParams();\n\t\n\tKrux ('set', { \n\t'page_attr_utm_source': params.utm_source,\n\t'page_attr_utm_medium': params.utm_medium,\n\t'page_attr_utm_campaign': params.utm_campaign,\n\t'page_attr_utm_content': params.utm_content,\n\t'page_attr_utm_term': params.utm_term,\n\t'page_attr_utm_a': params.utm_a,\n\t'page_attr_utm_b': params.utm_b,\n\t'page_attr_utm_cgid': params.utm_cgid,\n\t'page_attr_utm_cd': params.utm_cd,\n\t'page_attr_utm_cn': params.utm_cn,\n\t'page_attr_utm_ct': params.utm_ct,\n\t'page_attr_utm_l': params.utm_l,\n\t'page_attr_utm_c': params.utm_c,\n\t'page_attr_utm_pb': params.utm_pb,\n\t'page_attr_utm_ptid': params.utm_ptid,\n\t'page_attr_utm_p': params.utm_p,\n\t'page_attr_utm_pid': params.utm_pid,\n\t'page_attr_utm_s': params.utm_s,\n\t'page_attr_utm_stid': params.utm_stid,\n\t'page_attr_utm_id': params.utm_id\n\t});\n\t\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true}],"usermatch_tags":[{"id":15,"name":"TheTradeDesk User Match","content":"<script>\r\n(function(){\r\nvar kuid = Krux('get', 'user');\r\nvar consent = Krux('iab:urlParams');\r\nif (kuid) {\r\nif(!consent){\r\nconsent = \"\";\r\n}\r\nvar p = location.protocol == 'https:' ? 'https:' : 'http:';\r\nvar purl = '//match.adsrvr.org/track/cmf/generic?ttd_pid=krux&ttd_tpi=1';\r\n(new Image()).src  = p + purl + consent; \r\n}\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":21,"name":"Acxiom","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":23,"name":"BlueKai S2S (Oracle)","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var bk_prefix = location.protocol == 'https:' ? \"stags\" : \"tags\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&partner=bluekai&bk_uuid=$_BK_UUID\");\r\n            var kurl = prefix + \"//beacon.krxd.net/usermatch.gif?\" + kurl_params;\r\n            var bk_params = 'id=' + kuid;\r\n            var bk_url = '//' + bk_prefix + '.bluekai.com/site/26357?' + bk_params + '&redir=' + kurl;\r\n            var i = new Image();\r\n            i.src = bk_url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":51,"name":"Eyeota User Match","content":"<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\n\r\n        if (kuid) {\r\n           var url = prefix + '//ps.eyeota.net/match?bid=i0r4o4v&uid=' + kuid;\r\n           (new Image()).src = url;\r\n        }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":76,"name":"LiveRamp User Matching","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\r\n      var i = new Image();\r\n      i.src = liveramp_url;     \r\n  }\r\n})();\r\n</script>\r\n\r\n\r\n<!-- Krux Config:\r\n\r\n-->","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":86,"name":"Neustar AdAdvisor S2S","content":"<script>\r\n(function(){\r\nvar kuid = Krux('get', 'user');\r\nvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\nif (kuid) {\r\n    new Image().src = prefix + '//aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e';\r\n     }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":39,"name":"AdForm Usermatch","content":"<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\n        if (kuid) {\r\n            var url = prefix + '//dmp.adform.net/serving/cookie/match/?party=1032';\r\n            (new Image()).src = url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":154,"name":"Lotame","content":"<script>\r\n    (function() {\r\n        var url = 'https://sync.crwdcntrl.net/map/c=9164/TP=KRUX?https://beacon.krxd.net/usermatch.gif?partner=lotame&partner_uid=${profile_id}';\r\n        (new Image()).src = url;\r\n    })(); \r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.0631b7d64dbbd3656a8b7368ad227a04', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
