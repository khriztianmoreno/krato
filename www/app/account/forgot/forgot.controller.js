(function () {
    'use strict';
    angular.module('kratoApp')
    	.controller('forgotController', forgotController);

    forgotController.$inject = ['$scope', '$state', 'Auth', 'FURL'];

    function forgotController ($scope, $state, Auth, FURL) {
        var ref = new Firebase(FURL);
        $scope.resetpassword = function (user) {
            if (angular.isDefined(user)) {
                Auth.resetpassword(user).then(function () {
                    //console.log("Password reset email sent successfully!");
                    $state.go('app.login');
                }, function (err) {
                    //console.error("Error: ", err);
                });
            }
        };
    };

})();