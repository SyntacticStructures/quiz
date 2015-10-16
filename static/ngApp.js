var myApp = angular.module('myApp', ['ngRoute']);
myApp.controller('Controller', function() {
	var that = this;
	var count = {
		m: 0,
		f: 0
	}
	var masculinePercent = 0;
	var femininePercent = 0;
	that.vote = function(gender) {
		if (gender == "m") {
			count.m += 1;
		} else {
			count.f += 1;
		}
		var masculinePercent = count.m / (count.f + count.m);
		var femininePercent = count.f / (count.f + count.m);
		if(masculinePercent > femininePercent) {
			that.masculineStyle = "text-center text-success"
			that.feminineStyle = "text-danger"
		} else if(femininePercent > masculinePercent) {
			that.masculineStyle = "text-center text-danger"
			that.feminineStyle = "text-success"
		} else {
			that.masculineStyle = "text-center"
			that.feminineStyle = ""
		}
		that.masculinePercentLabel = Math.floor(masculinePercent * 100) + "%";
		that.femininePercentLabel = Math.floor(femininePercent * 100) + "%";
	}
})
