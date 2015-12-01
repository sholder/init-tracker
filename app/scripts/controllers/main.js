'use strict';

/**
 * @ngdoc function
 * @name initTrackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the initTrackerApp
 */
angular.module('initTrackerApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var allEntities = localStorageService.get('entities');

    $scope.allEntities = allEntities || [];
  });
