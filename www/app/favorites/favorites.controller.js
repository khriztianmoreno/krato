(function (){
	'use strict';

	angular.module('kratoApp')
        .controller('favoritesController', favoritesController);

    favoritesController.$inject = ['favoriteFactory'];

    function favoritesController(favoriteFactory) {

    };
})();