(function () {
    'use strict';
    angular.module('kratoApp')
        .controller('homeController', homeController);

    homeController.$inject = ['Auth', 'FURL', 'Utils', '$firebaseArray', '$location', '$scope'];

    function homeController(Auth, FURL, Utils, $firebaseArray, $location, $scope) {

        // create a connection to Firebase
        var baseRef = new Firebase(FURL + 'shops');

        // create a scrollable reference
        var scrollRef = new Firebase.util.Scroll(baseRef, 'name');

        // create a synchronized array on scope
        $scope.shops = $firebaseArray(scrollRef);
        // load the first three contacts
        scrollRef.scroll.next(20);

        Utils.show();
        $scope.shops.$loaded(function() {
          Utils.hide();
        });

        // This function is called whenever the user reaches the bottom
        $scope.loadMore = function() {
            // load the next contact
            scrollRef.scroll.next(10);
            $scope.$broadcast('scroll.infiniteScrollComplete');
        };

        $scope.logOut = function () {
            Auth.logout();
            $location.path("/login");
        };

        $scope.hasFilters = false;
        $scope.openFilters = function(val){
            $scope.hasFilters = !val;
        };
    };
})();