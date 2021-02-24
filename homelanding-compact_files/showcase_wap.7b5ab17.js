var forum_id = __forum_id;
let showcase_param = [];

if (typeof card_style !== "undefined") {
	showcase_param['card_style'] = card_style;
}

if (typeof nightmode !== "undefined") {
	showcase_param['nightmode'] = nightmode;
}

if (typeof IMAGE_ENABLE !== "undefined") {
	showcase_param['image_enable'] = IMAGE_ENABLE;
}

if (typeof listType !== "undefined") {
	showcase_param['type'] = listType
}

let url_param = new URLSearchParams(Object.entries(showcase_param));
let url_query = url_param.toString();

var endpoint = __showcase.domain + '/showcase/index/' + forum_id + '/wap/?' + url_query
var micrositeAssetLoader = (function() {
	function _load(tag) {
		return function(url) {
			return new Promise(function(resolve, reject) {
				var element = document.createElement(tag);
				var parent = 'head';

				element.onload = function() {
					resolve(url);
				};
				element.onerror = function() {
					reject(url);
				};

				switch(tag) {
					case 'script':
						attr = 'src';
						element.type='text/javascript';
						element.async = false;
						break;
					case 'link':
						element.type = 'text/css';
						element.rel = 'stylesheet';
						attr = 'href';
				}

				element[attr] = url;
				document[parent].appendChild(element);
			});
		};
	}

	return {
		css: _load('link'),
		js: _load('script')
	}
})();

load(endpoint, function(xhr){
	var resp = JSON.parse(xhr.responseText);
	generate_widget(resp);
});

function generate_widget(data)
{
	var isAnalyticDivLoaded = false;
	for(var value in data)
	{
		if(typeof data[value].src == "undefined")
			continue;
		var source = data[value].src;
		for(var index in source)
		{
			var val = source[index];
			if (val.widget_type == 'type_render_div')
			{
				if (isAnalyticDivLoaded == false && data.analytic.js.length)
				{
					var script = document.createElement("script");
					script.src = data.analytic.js;
					document.head.appendChild(script);
					isAnalyticDivLoaded = true;
				}

				if (index == 'jadwal_imsak_widget')
				{
					for (var i = 0; i < val.div_id_wap.length; i++)
					{
						var element = document.getElementById(val.div_id_wap[i]);
						if (element !== null)
						{
							element.style.display = 'none';
							element.style.padding = '15px 0px';
							element.innerHTML = val.widget_html;
							document.body.appendChild(document.getElementById('jsModalBedug'));
							document.body.appendChild(document.getElementById('jsModalImsak'));

							set_jadwal_imsak_widget_assets(index, val, element);
							break;
						}
					}
				}

				continue;
			}
			var url = (val instanceof Array) ? val[0] : val;
			var optionalAttr = (val instanceof Array) ? val[1] : 'default';
			var iframe = document.createElement('iframe');
			var element = document.getElementById(index);
			var iframe_id = 'iframe_' + index;
			if(element == null)
				continue;

			iframe.setAttribute("scrolling", "yes");
			iframe.setAttribute("frameborder", 0);
			iframe.setAttribute("width", "100%");
			iframe.setAttribute("height", "300px");
			iframe.src = url;
			iframe.setAttribute("id", iframe_id);
			iframe.setAttribute("class", optionalAttr);
			element.appendChild(iframe);
		}
	}

	window.addEventListener('message', function(e) {
		try{
			var origin = e.origin || e.originalEvent.origin;

			for(var i in __showcase.domainOrigin)
			{
				if(__showcase.domainOrigin[i] === origin)
				{
					var json = JSON.parse(e.data);
					var div_id = document.getElementById(json.div_id);
					var iframe_el = div_id.querySelectorAll('iframe');
					iframe_el.forEach(function(item, i) {
						if (item.classList.contains(json.class)) {
							item.setAttribute("height", json.height);
							item.setAttribute("scrolling", "no");
						}
					});
					break;
				}
			}
		}
		catch(err)
		{
		}
	}, false);
}

function load(url, callback) 
{
	var xhr;
	if(typeof XMLHttpRequest !== 'undefined')
		xhr = new XMLHttpRequest();
	else 
	{
		var versions = ["MSXML2.XmlHttp.5.0", 
		"MSXML2.XmlHttp.4.0",
		"MSXML2.XmlHttp.3.0", 
		"MSXML2.XmlHttp.2.0",
		"Microsoft.XmlHttp"]
		
		for(var i = 0, len = versions.length; i < len; i++)
		{
			try {
				xhr = new ActiveXObject(versions[i]);
				break;
			}
			catch(e){
				console.log(e);
			}	 
		}
	}
	xhr.onreadystatechange = ensureReadiness;
	function ensureReadiness()
	{
		if(xhr.readyState < 4) 
		{
			return;
		}

		if(xhr.status !== 200) 
		{
			return;
		}
			
		// all is well  
		if(xhr.readyState === 4) 
		{
			callback(xhr);
		}
	}
	xhr.open('GET', url, true);
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhr.send();
}

function set_jadwal_imsak_widget_assets(index, data, widget_element)
{
	CITY_LIST_NAME_URL = __showcase.domain + '/ramadan19/showcase/get_cities_list_name/';
	CHANGE_CITY_URL = __showcase.domain + '/ramadan19/showcase/change_city/';
	NEAREST_LOCATION_URL = __showcase.domain + '/ramadan19/showcase/get_nearest_location/';
	WIDGET_PLATFORM = 'wap';

	var assets = []
	for (var index in data.additional_js) {
		assets.push(micrositeAssetLoader.js(data.additional_js[index]));
	}
	assets.push(micrositeAssetLoader.css(data.widget_css));

	var promise = null;
	for (var i = 0, promise = Promise.resolve(); i < assets.length; i++) {
		promise = promise.then(_ => assets[i]);
	}
	promise.then(function(){
		widget_element.style.display = 'block';
	})
}
