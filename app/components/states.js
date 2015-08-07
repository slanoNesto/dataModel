'use strict';

angular.module('dataModelApp')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('app', {
                url: '',
                abstract: true,
                views: {
                    'homeView': {
                        templateUrl: 'components/app.html'
                    }
                }
            })

            .state('app.home', {
                url: '/home',
                templateUrl: 'components/home/home.html',
                controller: 'homeController',
                data: {displayName: 'Home'}
            })

            .state('app.users', {
                url: '/users',
                templateUrl: 'components/users/users.html',
                controller: 'UsersController',
                controllerAs: 'usersVm',
                resolve: {
                    users: ['UsersFactory', '$q', function (UsersFactory, $q) {
                        var defer = $q.defer();
                        UsersFactory.getUsers().then(function (response) {
                            defer.resolve(response.users);
                        });
                        return defer.promise;
                    }]
                },
                data: {displayName: 'Users'}
            });

    }]);
