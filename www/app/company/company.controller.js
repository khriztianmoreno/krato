(function (){
	'use strict';

	angular.module('kratoApp')
        .controller('companyController', companyController);

    companyController.$inject = ['FURL', 'Utils', '$firebaseObject', '$stateParams', '$scope', 'favoriteFactory'];

    function companyController(FURL, Utils, $firebaseObject, $stateParams, $scope, favoriteFactory){
    	var baseRef = new Firebase(FURL + 'shops/' + $stateParams.id);
    	// create a scrollable reference
        $scope.shop = $firebaseObject(baseRef);  

        Utils.show();
        $scope.shop.$loaded(function (val){
        	Utils.hide();
        });

        $scope.events = {
            saveFav: saveFav
        };

        function saveFav(fav){
            favoriteFactory.save(fav);
        };
    };
})();