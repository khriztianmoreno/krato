(function () {
    'use strict';

    angular.module('kratoApp')
        .controller('NotificationsController', NotificationsController);

    NotificationsController.$inject = ['$scope', '$rootScope', '$ionicUser', '$ionicPush'];

    function NotificationsController($scope, $rootScope, $ionicUser, $ionicPush) {
        $rootScope.$on('$cordovaPush:tokenReceived', function (event, data) {
            alert('Success: ' + data.token);
            console.log('Got token: ', data.token, data.platform);
            $scope.token = data.token;
        });

        $scope.identifyUser = function () {
            var user = $ionicUser.get();

            if (!user.user_id) {
                user.user_id = $ionicUser.generateGUID();
            }

            angular.extend(user, {
                name: 'My Name',
                bio: 'I am awesome'
            });

            $ionicUser.identify(user).then(function () {
                $scope.identified = true;
                console.log('name: ' + user.name + "--- Id: " + user.user_id);
            });
        };

        $scope.pushRegister = function () {
            $ionicPush.register({
                canShowAlert: true,
                canSetBadge: true,
                canPlaySound: true,
                canRunActionsOnWake: true,
                onNotification: function (notification) {
                    // handle your stuff
                    return true;
                }
            });
        };
    };
})();