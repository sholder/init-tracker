'use strict';

/**
 * @ngdoc function
 * @name initTrackerApp.controller:FightCtrl
 * @description
 * # FightCtrl
 * Controller of the initTrackerApp
 */
angular.module('initTrackerApp')
  .controller('FightCtrl', function ($scope, $log, encounterSelectionService) {
    $log.debug('encounterSelectionService size: ' + encounterSelectionService.selection.length);
    $scope.selection = encounterSelectionService.selection;
  });
