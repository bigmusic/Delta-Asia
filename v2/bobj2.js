console.log("loaded");
(function(w) {
	"use strict";
	var d = w.document,
		jq = w.$,
		indexbar_bar_picc = d.getElementById("indexbar_bar_pic"),
		left = function() {
			var i = parseInt(indexbar_bar_picc.style.left);
			if (i == -2600) {
				indexbar_bar_picc.style.left = "0px";
			} else {
				indexbar_bar_picc.style.left = i - 650 + "px";
			};
		},
		right = function() {
			var i = parseInt(indexbar_bar_picc.style.left);
			if (i == 0) {
				indexbar_bar_picc.style.left = "-2600px";
			} else {
				indexbar_bar_picc.style.left = i + 650 + "px";
			};
		},
		indexbar_bar_choice1 = d.getElementById("indexbar_bar_choice1"),
		indexbar_bar_choice2 = d.getElementById("indexbar_bar_choice2"),
		indexbar_bar_choice3 = d.getElementById("indexbar_bar_choice3"),
		indexbar_bar_choice4 = d.getElementById("indexbar_bar_choice4"),
		indexbar_bar_choice5 = d.getElementById("indexbar_bar_choice5");

	indexbar_bar_choice1.onclick=function(){
		jq("#indexbar_bar_pic").animate({"left": "0px"}, "fast");
	};
	indexbar_bar_choice2.onclick=function(){
		jq("#indexbar_bar_pic").animate({"left": "-650px"}, "fast");
	};
	indexbar_bar_choice3.onclick=function(){
		jq("#indexbar_bar_pic").animate({"left": "-1300px"}, "fast");
	};
	indexbar_bar_choice4.onclick=function(){
		jq("#indexbar_bar_pic").animate({"left": "-1950px"}, "fast");
	};
	indexbar_bar_choice5.onclick=function(){
		jq("#indexbar_bar_pic").animate({"left": "-2600px"}, "fast");
	};
	indexbar_bar_picc.style.left = "0px";
	w.left = left;
	w.right = right;

})(window);

// $('indexbar_bar_pic').animate({left: '+=650'}, 5000, function() {});