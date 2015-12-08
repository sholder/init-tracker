'use strict';

describe('Controller: EntityCtrl', function () {

  var EntityCtrl,
    scope,
    storageService;

  // load the controller's module
  beforeEach(module('initTrackerApp'));


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, localStorageService) {
    scope = $rootScope.$new();
    storageService = localStorageService;

    storageService.set('entities', []);

    EntityCtrl = $controller('EntityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should start with an empty list of entities', function () {
    expect(scope.allEntities).toEqual([]);
  });

  it('should add and persist an entity', function() {
    var palindraEntity = {
      name: 'Palindra',
      mod: 4
    };
    scope.entity = palindraEntity;
    scope.addEntity();
    // Ensure that watches fire.
    scope.$apply();

    expect(scope.entity).toEqual({});
    expect(scope.allEntities).toContain(palindraEntity);
    var persistedEntities = storageService.get('entities');
    expect(persistedEntities.length).toEqual(1);
    expect(persistedEntities).toContain(palindraEntity);
  });
});
