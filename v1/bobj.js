console.log("loaded");
(function(w) {
	"use strict";
	var d = w.document;
	var bObj = d.querySelector("#bObjbar"),
		bObjArea = b().getElementArray(bObj),
		bObjSelector = b().getElementArray(bObjArea.shift().firstElementChild),
		bObjSelector2 = b().getElementArray(bObjArea[0].firstElementChild.nextElementSibling.firstElementChild),
		bObjArea2 = b().getElementArray(bObjArea[0].firstElementChild.nextElementSibling.nextElementSibling);

	bObj.onmouseover = function(event) {
		bObj.style.zIndex = 4;
		event.stopPropagation();
	};
	bObj.onmouseout = function(event) {
		bObj.style.zIndex = 2;
		event.stopPropagation();
	};


	var bObjFunction = function bObjFunction(area, selector) {
		var onMouseOverFunction = function(i) {
			this.doit = function() {
				var ii;
				for (ii = 0; ii < selector.length; ii++) {
					area[ii].style.visibility = "hidden";
				};
				area[i].style.visibility = "visible";
			};
		},
		i = 0;
		for (i = 0; i < selector.length; i++) {
			var doit = new onMouseOverFunction(i);
			selector[i].onmouseover = doit.doit;
		};
	};
	bObjFunction(bObjArea, bObjSelector);
	bObjFunction(bObjArea2, bObjSelector2);

	w.bObj = bObj;
	w.bObjArea2 = bObjArea2;
	w.bObjArea= bObjArea;
	w.bObjSelector2 = bObjSelector2;
	/*	var docu = w.document,
		d = w.document,
		bobjbar = docu.getElementById("bObjbar"),
		bObjbar_menu1 = docu.getElementById("bObjbar_menu1"),
		bObjbar_menu2 = docu.getElementById("bObjbar_menu2"),
		bObjbar_menu3 = docu.getElementById("bObjbar_menu3"),
		bObjbar_menu4 = docu.getElementById("bObjbar_menu4"),
		bObjbar_menu5 = docu.getElementById("bObjbar_menu5"),
		bObjbar_menu1_list_ul = docu.getElementById("bObjbar_menu1_list_ul"),
		bObjbar_menu1_list1 = docu.getElementById("bObjbar_menu1_list1"),
		bObjbar_menu1_list2 = docu.getElementById("bObjbar_menu1_list2"),
		bObjbar_menu1_list3 = docu.getElementById("bObjbar_menu1_list3"),
		bObjbar_menu1_list4 = docu.getElementById("bObjbar_menu1_list4"),
		bObjbar_menu1_list5 = docu.getElementById("bObjbar_menu1_list5"),
		bObjbar_menu1_content1 = docu.getElementById("bObjbar_menu1_content1"),
		bObjbar_menu1_content2 = docu.getElementById("bObjbar_menu1_content2"),
		bObjbar_menu1_content3 = docu.getElementById("bObjbar_menu1_content3"),
		bObjbar_menu1_content4 = docu.getElementById("bObjbar_menu1_content4"),
		bObjbar_menu1_content5 = docu.getElementById("bObjbar_menu1_content5");




	/*
	bObjbar_bar_li1.onmouseover = function() {
		bObjbar_menu1.style.visibility = "visible";
		bObjbar_menu2.style.visibility = "hidden";
		bObjbar_menu3.style.visibility = "hidden";
		bObjbar_menu4.style.visibility = "hidden";
		bObjbar_menu5.style.visibility = "hidden";
	};
	bObjbar_bar_li2.onmouseover = function() {
		bObjbar_menu1.style.visibility = "hidden";
		bObjbar_menu2.style.visibility = "visible";
		bObjbar_menu3.style.visibility = "hidden";
		bObjbar_menu4.style.visibility = "hidden";
		bObjbar_menu5.style.visibility = "hidden";
	};

	bObjbar_bar_li3.onmouseover = function() {
		bObjbar_menu1.style.visibility = "hidden";
		bObjbar_menu2.style.visibility = "hidden";
		bObjbar_menu3.style.visibility = "visible";
		bObjbar_menu4.style.visibility = "hidden";
		bObjbar_menu5.style.visibility = "hidden";
	};

	bObjbar_bar_li4.onmouseover = function() {
		bObjbar_menu1.style.visibility = "hidden";
		bObjbar_menu2.style.visibility = "hidden";
		bObjbar_menu3.style.visibility = "hidden";
		bObjbar_menu4.style.visibility = "visible";
		bObjbar_menu5.style.visibility = "hidden";
	};

	bObjbar_bar_li5.onmouseover = function() {
		bObjbar_menu1.style.visibility = "hidden";
		bObjbar_menu2.style.visibility = "hidden";
		bObjbar_menu3.style.visibility = "hidden";
		bObjbar_menu4.style.visibility = "hidden";
		bObjbar_menu5.style.visibility = "visible";
	};
*/
	/*
	bObjbar_menu1_list_ul.onmouseout = function() {
		bObjbar_menu1_content1.style.visibility = "hidden";
		bObjbar_menu1_content2.style.visibility = "hidden";
		bObjbar_menu1_content3.style.visibility = "hidden";
		bObjbar_menu1_content4.style.visibility = "hidden";
		bObjbar_menu1_content5.style.visibility = "hidden";
	};
	bObjbar_menu1_list1.onmouseover = function() {
		bObjbar_menu1_content1.style.visibility = "visible";
		bObjbar_menu1_content2.style.visibility = "hidden";
		bObjbar_menu1_content3.style.visibility = "hidden";
		bObjbar_menu1_content4.style.visibility = "hidden";
		bObjbar_menu1_content5.style.visibility = "hidden";
	};
	bObjbar_menu1_list2.onmouseover = function() {
		bObjbar_menu1_content1.style.visibility = "hidden";
		bObjbar_menu1_content2.style.visibility = "visible";
		bObjbar_menu1_content3.style.visibility = "hidden";
		bObjbar_menu1_content4.style.visibility = "hidden";
		bObjbar_menu1_content5.style.visibility = "hidden";
	};
	bObjbar_menu1_list3.onmouseover = function() {
		bObjbar_menu1_content1.style.visibility = "hidden";
		bObjbar_menu1_content2.style.visibility = "hidden";
		bObjbar_menu1_content3.style.visibility = "visible";
		bObjbar_menu1_content4.style.visibility = "hidden";
		bObjbar_menu1_content5.style.visibility = "hidden";
	};
	bObjbar_menu1_list4.onmouseover = function() {
		bObjbar_menu1_content1.style.visibility = "hidden";
		bObjbar_menu1_content2.style.visibility = "hidden";
		bObjbar_menu1_content3.style.visibility = "hidden";
		bObjbar_menu1_content4.style.visibility = "visible";
		bObjbar_menu1_content5.style.visibility = "hidden";
	};
	bObjbar_menu1_list5.onmouseover = function() {
		bObjbar_menu1_content1.style.visibility = "hidden";
		bObjbar_menu1_content2.style.visibility = "hidden";
		bObjbar_menu1_content3.style.visibility = "hidden";
		bObjbar_menu1_content4.style.visibility = "hidden";
		bObjbar_menu1_content5.style.visibility = "visible";
	};

*/



})(window);