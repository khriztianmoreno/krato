(function () {
    'use strict';

    angular.module('kratoApp')
        .factory('favoriteFactory', favoriteFactory);

    favoriteFactory.$inject = ['$localStorage', '$firebaseArray', '$firebaseObject', 'FURL'];

    function favoriteFactory($localStorage, $firebaseArray, $firebaseObject, FURL) {
        return {
            save: saveFavorite
        };

        function saveFavorite(fav) {
            var favorites = $localStorage.favorites;

            var favorite = {
                id: fav.id,
                type: fav.type,
                name: fav.company
            };

            if (favorites === undefined) {
                //add array to localstorage
                var item = [favorite];
                $localStorage.favorites = item;
                addSubscriptor(favorite.id);
            } else {
                var result = _.findWhere(favorites, {
                    'id': fav.id,
                    'name': fav.company
                });
                if (result === undefined) {
                    favorites.push(favorite);
                    $localStorage.favorites = favorites;
                    addSubscriptor(favorite.id);
                };
            };
        };

        function addSubscriptor(shopId) {
            var fredNameRef = new Firebase(FURL + '/shops/' + shopId);

            var subscriptor = {
                userKey: $localStorage.userkey,
                fullName: $localStorage.user.fullname,
                picture: $localStorage.user.gravatar
            };

            fredNameRef.child('subscriptors').once('value', function (items) {
                var subscriptors = [];
                console.log(shopId);
                if (items.val() === '[]') {
                    subscriptors.push(subscriptor);
                    fredNameRef.child('subscriptors').set(subscriptors);
                } else {
                    if (items.val().length > 0) {
                        var result = _.findWhere(items.val(), {
                            'userKey': subscriptor.userKey
                        });
                        if (result === undefined) {
                            var subs = [];
                            subs = items.val();
                            subs.push(subscriptor);
                            fredNameRef.child('subscriptors').set(subs);
                        };
                    };
                };
            });
        };
    };
})();