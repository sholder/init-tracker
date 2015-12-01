'use strict';

/**
 * @ngdoc function
 * @name initTrackerApp.controller:EntityCtrl
 * @description
 * # EntityCtrl
 * Controller of the initTrackerApp
 */
angular.module('initTrackerApp')
  .controller('EntityCtrl', function ($scope, localStorageService) {
    var allEntities = localStorageService.get('entities');

    $scope.allEntities = allEntities || [];
    $scope.$watch('allEntities', function() {
        localStorageService.set('entities', $scope.allEntities);
    }, true);

    $scope.addEntity = function() {
        $scope.allEntities.push($scope.entity);
        $scope.entity = {};
    };
  });
