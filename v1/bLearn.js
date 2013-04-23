(function(w, u) {
	"use strict"

	var d = w.document,
		bQuery = function bQuery(e) {
			return new bQuery.fn.init(e);
		},
		bProto = function bProto(e) {
			return new bProto.fun(e);
		},
		brwinfo = (function Browser_Info() {
			var browser = {},
			version = "unknow",
				pf = "unknow",
				ua = w.navigator.userAgent;
			if (d.querySelector && ua.indexOf("Mozilla/5.0") > -1) {
				if (ua.indexOf("iPhone") > -1) {
					version = "iPhone";
					pf = "Mobile";
				};
				if (ua.indexOf("iPad") > -1) {
					version = "iPad";
					pf = "Mobile";
				};
				if (ua.indexOf("Firefox") > -1) {
					version = "Firefox";
					pf = "Desktop";
				};
				if (ua.indexOf("Chrome") > -1) {
					version = "Chrome";
					pf = "Desktop";
				};
				if (ua.indexOf("MSIE") > -1) {
					version = "IE";
					pf = "Desktop";
				};
				if (ua.indexOf("Android") > -1) {
					version = "Android";
					pf = "Mobile";
				};
			} else {
				if (ua.indexOf("Opera") > -1) {
					version = "Opera";
					pf = "Desktop";
				} else {
					version = "bad";
				};
			};
			if (pf == "Desktop") {
				browser.bh = w.innerHeight;
				browser.bw = w.innerWidth;
				browser.sh = w.screen.height;
				browser.sw = w.screen.width;
			};
			if (pf == "Mobile") {
				browser.bh = d.documentElement.clientHeight;
				browser.bw = d.documentElement.clientWidth;
			};
			browser.ver = version;
			browser.pf = pf;
			browser.ua = ua;
			return browser;
		})();



	bQuery.fn = bQuery.prototype = {
		constructor: bQuery,
		"version": "0.1 alpha",
		init: function bQuery_proto_init(e) {

		},
		brwinfo: (function() {
			return brwinfo;
		})(),
		xhr: (function() {
			var x = new XMLHttpRequest();
			if (brwinfo.ver == "IE") {
				x.setRequestHeader("If-Modified-Since", new Date().toUTCString());
			};
			return x;
		})(),
		getElementArray: function getElementArray(whatElement) {
			var elementCount = whatElement.childElementCount,
				getElement = whatElement.firstElementChild,
				elementArray = [],
				i;
			for (i = 0; i < elementCount; i++) {
				elementArray[i] = getElement;
				getElement = getElement.nextElementSibling;
			};
			return elementArray;
		},
		get: function(fileName) {
			if (fileName) {
				var xhr = new XMLHttpRequest();
				xhr.open("get", fileName, false); /*if(brwinfo.ver == "IE") {*/
				xhr.setRequestHeader("If-Modified-Since", "0");
				xhr.setRequestHeader("Cache-Control", "no-cache");
				//};
				xhr.send(null);
				if (xhr.readyState == 4) {
					return xhr.responseText;
				};
			} else {
				return "Ops...!";
			};
		},
		cnus: function checkAndUpdateStatus(getFile, changeElement, time) {
			var statusOriginal = "original",
				statusAfter = "original",
				elementToChange = d.getElementById(changeElement),
				xhrObject = bQuery().xhr,
				xhrFunction = function() {
					xhrObject.open("get", getFile, true);
					xhrObject.send(null);
				},
				changeIt = function(e) {
					if ((statusAfter != statusOriginal) && (typeof elementToChange == "object")) {
						if (brwinfo.ver == "Firefox") {
							elementToChange.textContent = statusOriginal = statusAfter;
						} else {
							elementToChange.innerText = statusOriginal = statusAfter;
						}
					}
				},
				mainFunction = function() {
					if (xhrObject.readyState == 4 && xhrObject.status == 200) {
						if (statusOriginal == "original") {
							statusOriginal = statusAfter = xhrObject.responseText;
							console.log(statusOriginal);
						} else {
							statusAfter = xhrObject.responseText;
						};
						changeIt();
						xhrFunction();
					};
				};
			xhrFunction();
			if (typeof time == "number") {
				setInterval(mainFunction, time);
			} else {
				setInterval(mainFunction, 1000)
			};
		}
	};

	bQuery.extend = bQuery.fn.extend = function(e) {};
	bQuery.fn.init.prototype = bQuery.fn;

	bProto.fun = function bProto_fun(e) {
		this.v1 = e;
	};

	bProto.fun.prototype = {
		constructor: bProto.fun,
		page: function bProto_fun_Proto_page() {
			var a = w.innerWidth,
				b = w.innerHeight;
			//for IE6
			//if ((typeof a) !="number"){a=d.documentElement.clientWidth;};
			//if ((typeof b) !="number"){b=d.documentElement.clientHeight;};
			return {
				w: a,
				h: b
			};
		},


	};


	if (brwinfo != "bad") {
		w.bQuery = w.bq = w.b = bQuery;
		w.bProto = w.bp = bProto;
	};
})(window, undefined);