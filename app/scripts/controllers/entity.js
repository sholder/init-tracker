'use strict';

/**
 * @ngdoc function
 * @name initTrackerApp.controller:EntityCtrl
 * @description
 * # EntityCtrl
 * Controller of the initTrackerApp
 */
angular.module('initTrackerApp')
  .controller('EntityCtrl', function ($scope, EntityFactory, localStorageService) {
    var allEntities = localStorageService.get('entities');
    $scope.allEntities = EntityFactory.deserializeAll(allEntities || []);
    $scope.entity = EntityFactory.newEntity();
    
    $scope.$watch('allEntities', function() {
        localStorageService.set('entities', $scope.allEntities);
    }, true);

    $scope.addEntity = function() {
        $scope.allEntities.push(
            EntityFactory.initialize($scope.entity.name, $scope.entity.mod));
        $scope.entity = EntityFactory.newEntity();
    };
  });
