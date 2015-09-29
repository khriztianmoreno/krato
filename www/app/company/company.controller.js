(function (){
	'use strict';

	angular.module('kratoApp')
        .controller('companyController', companyController);

    companyController.$inject = ['FURL', 'Utils', '$firebaseObject', '$stateParams', '$scope'];

    function companyController(FURL, Utils, $firebaseObject, $stateParams, $scope){
    	var baseRef = new Firebase(FURL + 'shops/' + $stateParams.id);
    	// create a scrollable reference
        $scope.shop = $firebaseObject(baseRef);  
        
        Utils.show();
        $scope.shop.$loaded(function (val){
        	Utils.hide();
        });
    };
})();