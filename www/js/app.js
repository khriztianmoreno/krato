(function (){
	'use strict';

	angular.module('kratoApp', [
	    'ionic',
	    'ionic.service.core',
	    'ionic.service.push',
	    'ngStorage',
	    'ngCordova',
	    'firebase',
	    'ngMessages'])
	// Changue this for your Firebase App URL.
	.constant('FURL', 'https://datakratos.firebaseio.com/')
	.config(['$ionicAppProvider', function ($ionicAppProvider) {
	    $ionicAppProvider.identify({
	        app_id: '8a6f1ab6',
	        api_key: '28a730c2c1adaaf16d72abadd6aed2588b5475fc8f79088f',
	        dev_push: true
	    });
	}])
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
})();