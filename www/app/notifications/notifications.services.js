(function () {
    'use strict';

    angular.module('kratoApp')
        .service('NotificationService', NotificationService);

    NotificationService.$inject = ['$http', '$q'];

    function NotificationService($http, $q) {

        return {
            subscribe: subscribe
        };

        function subscribe(data) {
            var deferred = $q.defer();

            $http({
                url: "https://api.parse.com/1/installations/",
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin' : '*',
                    'Content-Type': 'application/json',
                    'X-Parse-Application-Id': 'TXlpEBp8OUBpE5ZhXQ04iQRUXbttmAswSgEDWoYf',
                    'X-Parse-Client-Key': '0jwUIgRCi0GIy9MoWeaipKPqplgxz8mEUoZRcGOS'
                },
                data: data
            })
            .success(function (data, status) {
                deferred.resolve(status);
            })
            .error(function (data, status) {
                deferred.resolve(status);
            });
        };
    };
})();