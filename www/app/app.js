'use strict';

angular.module('kratoApp', [
	'ionic', 
	'ngStorage', 
	'ngCordova', 
	'firebase', 
	'ngMessages'
])
// Changue this for your Firebase App URL.
.constant('FURL', 'https://krato.firebaseio.com/')
.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});