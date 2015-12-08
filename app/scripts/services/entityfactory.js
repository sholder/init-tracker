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

    // Public API here
    return {
      newEntity: function () {
        return {name: '', mod: 0};
      },
      initialize: function(name, mod) {
        return {
          name: name,
          mod: mod
        };
      }
    };
  });
