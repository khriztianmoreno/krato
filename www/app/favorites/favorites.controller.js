(function (){
	'use strict';

	angular.module('kratoApp')
        .controller('favoritesController', favoritesController);

    favoritesController.$inject = ['$scope','$localStorage'];

    function favoritesController($scope, $localStorage) {
    	var vm = this;
    	if (angular.isDefined($localStorage.favorites)) {
    		var favs =  $localStorage.favorites;

    		$scope.pharmacys = _.filter(favs, { 'type': 'pharmacy' });
    		$scope.liqours = _.filter(favs, { 'type': 'liquor store' });
    		$scope.markets = _.filter(favs, { 'type': 'market' });
    	};
    };
})();