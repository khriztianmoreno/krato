(function (){
	'use strict';
	angular.module('kratoApp')
		.controller('registerController', registerController);

	registerController.$inject = ['$scope', '$state', 'Auth', 'Utils'];

	function registerController($scope, $state, Auth, Utils) {

	    $scope.register = function (user) {
	        if (angular.isDefined(user)) {
	            Utils.show();
	            Auth.register(user)
	                .then(function () {
	                Utils.hide();
	                console.log("Antes de loguear:" + JSON.stringify(user));
	                Utils.alertshow("Successfully", "The User was Successfully Created.");
	                $state.go('app.login');
	            }, function (err) {
	                Utils.hide();
	                Utils.errMessage(err);
	            });
	        }
	    };
	};
})();