'use strict';

/**
 * @ngdoc service
 * @name initTrackerApp.EntityFactory
 * @description
 * # EntityFactory
 * Factory in the initTrackerApp.
 */
angular.module('initTrackerApp')
  .factory('EntityFactory', function () {

    var isFixedScore = function() {
      return this.fixedScore !== undefined;
    };

    var setFixedScore = function(isFixed) {
      if (isFixed) {
        this.fixedScore = this.mod;
      } else {
        this.fixedScore = undefined;
      }
    };

    // Public API here
    return {
      newEntity: function () {
        return {
          name: '',
          mod: 0,
          isFixedScore: isFixedScore,
          setFixedScore: setFixedScore
        };
      },
      initialize: function(name, mod) {
        return {
          name: name,
          mod: mod,
          isFixedScore: isFixedScore,
          setFixedScore: setFixedScore
        };
      },
      deserializeAll: function(entityArray) {
        var deserializedEntities = [];
        for (var i = 0; i < entityArray.length; i++) {
          deserializedEntities.push(
            this.initialize(entityArray[i].name, entityArray[i].mod));
        }
        return deserializedEntities;
      }
    };
  });
