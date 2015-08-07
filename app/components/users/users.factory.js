'use strict';

angular.module('dataModelApp')
    .factory('UsersFactory', ['$q', '$http', '$resource', function ($q, $http, $resource) {

        var resource = $resource('https://demo1132056.mockable.io/users');

        return {
            getUsers: getUsers
        };

        function getUsers() {
            return resource.get().$promise;
        }

    }]);

