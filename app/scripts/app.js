'use strict';

/**
 * @ngdoc overview
 * @name initTrackerApp
 * @description
 * # initTrackerApp
 *
 * Main module of the application.
 */
angular
  .module('initTrackerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule',
    'checklist-model'
  ])
  .factory('encounterSelectionService', function() {
    var encounterSelectionService = {
      selection: [],
    };
    return encounterSelectionService;
  })
  .config(['localStorageServiceProvider', function(localStorageProvider){
    localStorageProvider.setPrefix('com.teamholder.inittracker');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/entity', {
        templateUrl: 'views/entity.html',
        controller: 'EntityCtrl',
        controllerAs: 'entity'
      })
      .when('/fight', {
        templateUrl: 'views/fight.html',
        controller: 'FightCtrl',
        controllerAs: 'fight'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
