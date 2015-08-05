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

    }]);
