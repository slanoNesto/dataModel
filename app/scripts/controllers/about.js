'use strict';

/**
 * @ngdoc function
 * @name dataModelApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dataModelApp
 */
angular.module('dataModelApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
