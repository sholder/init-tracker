'use strict';

describe('Controller: MainCtrl', function () {

  var MainCtrl,
    scope,
    encounterSelectionServiceMock,
    zaxxonEntity,
    treeceEntity,
    defaultEntities;

  // load the controller's module
  beforeEach(module('initTrackerApp'));


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, localStorageService, EntityFactory) {
    scope = $rootScope.$new();
    // created them in non-sorted order, we'll test sorting below
    // Yes, these are PCs from my campaign.
    zaxxonEntity = EntityFactory.initialize('Zaxxon', 1);
    treeceEntity = EntityFactory.initialize('Treece', 4);

    defaultEntities = [
      zaxxonEntity,
      treeceEntity
    ];
    encounterSelectionServiceMock = {
      selection: []
    };
    localStorageService.set('entities', defaultEntities);
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      encounterSelectionService: encounterSelectionServiceMock
    });
  }));

  it('should read entities from local storage', function() {
    expect(scope.allEntities.length).toBe(defaultEntities.length);
  });

  it('should sort entities', function() {
    expect(scope.allEntities[0].name).toEqual('Treece');
    expect(scope.allEntities[1].name).toEqual('Zaxxon');
  });

  it('should set selected to empty', function() {
    expect(scope.selected).toEqual([]);
  });

  it('should push selections to the selection service', function() {
    scope.selected = ['Zaxxon'];
    scope.$apply();

    expect(encounterSelectionServiceMock.selection.length).toEqual(1);
    expect(encounterSelectionServiceMock.selection).toContain(zaxxonEntity);

    scope.selected.push('Treece');
    scope.$apply();

    // Should now contain both PCs
    expect(encounterSelectionServiceMock.selection.length).toEqual(2);
    expect(encounterSelectionServiceMock.selection).toContain(zaxxonEntity);
    expect(encounterSelectionServiceMock.selection).toContain(treeceEntity);

    // Remove Zaxxon
    scope.selected = ['Treece'];
    scope.$apply();

    expect(encounterSelectionServiceMock.selection.length).toEqual(1);
    expect(encounterSelectionServiceMock.selection).toContain(treeceEntity);
  });
});
