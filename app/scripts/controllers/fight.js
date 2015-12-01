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
    //$log.debug('encounterSelectionService size: ' + encounterSelectionService.selection.length);
    $scope.selection = encounterSelectionService.selection;
    $scope.roundNumber = 0;

    $scope.nextRound = function() {
        $scope.roundNumber++;
        var thisRoundScores = [];
        for (var i = 0; i < $scope.selection.length; i++) {
            // generate a score for each entity
            var entity = $scope.selection[i];
            var score = (Math.floor(Math.random() * 20) + 1) + entity.mod;
            thisRoundScores.push({e: entity, s: score});
        }
        // SUPER DUPER HACK FOR TONIGHT'S GAME
        thisRoundScores.push({e:{name: 'Lair Actions'}, s: 20});
        // sort the entity list by init score, descending
        thisRoundScores.sort(function(a, b) {
            return b.s - a.s;
        });
        $scope.thisRoundScores = thisRoundScores;
    };
  });
