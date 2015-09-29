(function(){
	'use strict';
	angular.module('kratoApp')
        .filter('urlEncode', urlEncode);

    function urlEncode() {
    	return window.encodeURIComponent;
    };
})();