'use strict';

/**
 * @ngdoc function
 * @name initTrackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the initTrackerApp
 */
angular.module('initTrackerApp')
  .controller('MainCtrl', function ($scope, $log, localStorageService, encounterSelectionService) {
    var allEntities = localStorageService.get('entities');

    $scope.allEntities = allEntities || [];
    $scope.selected = [];

    $scope.$watch('selected', function() {
        // Ugly ugly inefficient hack, just getting things working.
        // TODO(sholder): be smarter about changes.
        encounterSelectionService.selection.length = 0;
        for (var i = 0; i < $scope.allEntities.length; i++) {
            var e = $scope.allEntities[i];
            //$log.debug('considering ' + e.name);
            if ($scope.selected.indexOf(e.name) !== -1) {
                //$log.debug('found');
                encounterSelectionService.selection.push(e);
            }
        }
    }, true);

    $scope.allEntities.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });
  });
