'use strict';

/**
 * @ngdoc function
 * @name dataModelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dataModelApp
 */
angular.module('dataModelApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
