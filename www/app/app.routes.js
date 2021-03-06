(function () {
    'use strict';
    angular.module('kratoApp')
        .config(function($httpProvider, $stateProvider, $urlRouterProvider) {
            $stateProvider.state('account', {
                url: '/account',
                abstract: true,
                templateUrl: './../components/menu/menu.html',
                controller: 'menuController',
                controllerAs: 'menu'
            })
            .state('account.login', {
                url: '/login',
                //cache: true,
                views: {
                  'menuContent': {
                    templateUrl: 'app/account/login/login.html',
                    controller: 'loginController'
                  }
                }
            })
            .state('account.forgot', {
                url: '/forgot',
                //cache: true,
                views: {
                  'menuContent': {
                    templateUrl: 'app/account/forgot/forgot.html',
                    controller: 'forgotController'
                  }
                }
            })
            .state('account.register', {
                url: '/register',
                //cache: true,
                views: {
                  'menuContent': {
                    templateUrl: 'app/account/register/register.html',
                    controller: 'registerController'
                  }
                }
            })
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: './../components/menu/menuApp.html',
                controller: 'menuController',
                controllerAs: 'menu'
            })
            .state('app.home', {
                url: '/home',
                //cache: true,
                views: {
                  'viewContent': {
                    templateUrl: 'app/home/home.html',
                    controller: 'homeController'
                  }
                }
            });
            $urlRouterProvider.otherwise("/account/login");
        });
})();