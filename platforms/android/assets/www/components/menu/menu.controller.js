(function (){
	'use strict';

	angular.module('kratoApp')
		.controller('menuController', menuController);

	menuController.$inject = ['$localStorage','Auth', '$state'];
	function menuController($localStorage, Auth, $state){
		var vm = this;

		if (angular.isDefined($localStorage.user)) {
			$state.go("app.home");
		};
		
		vm.logOut = function () {
            Auth.logout();
            $state.go("account.login");
        };
	};
})();