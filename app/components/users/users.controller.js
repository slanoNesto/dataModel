'use strict';

angular.module('dataModelApp')

    .controller('UsersController', ['users', function (users) {

        console.log(users);

        var usersVm = this;
        usersVm.users = users;

    }]);
