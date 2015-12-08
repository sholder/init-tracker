'use strict';

describe('Controller: FightCtrl', function () {

  // load the controller's module
  beforeEach(module('initTrackerApp'));

  var FightCtrl,
    scope,
    encounterSelectionServiceMock;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    encounterSelectionServiceMock = {
      selection: [
        {name: 'Glory', mod: 0},
        {name: 'Goblin', mod: 0}
      ],
    };
    FightCtrl = $controller('FightCtrl', {
      $scope: scope,
      encounterSelectionService: encounterSelectionServiceMock
    });
  }));

  it('should start on round 0', function () {
    expect(scope.roundNumber).toEqual(0);
    expect(scope.thisRoundScores).toBeUndefined();
  });

  it('should increment round numbers', function() {
    scope.nextRound();
    expect(scope.roundNumber).toEqual(1);
    scope.nextRound();
    expect(scope.roundNumber).toEqual(2);
    scope.nextRound();
    expect(scope.roundNumber).toEqual(3);
  });

  // TODO: inject a roller service of some sort, so I can control what values
  // are generated & then easily test order. Will also allow for non-zero modifiers.
  it('should generate a score for each entity in the expected range', function() {
    scope.nextRound();
    // +1 due to lair actions hack.
    expect(scope.thisRoundScores.length).toEqual(encounterSelectionServiceMock.selection.length + 1);
    for (var i = 0; i < scope.thisRoundScores.length; i++) {
      var item = scope.thisRoundScores[i];
      expect(item.s).toBeGreaterThan(0);
      expect(item.s).toBeLessThan(21);
    }
  });

  describe('Until I fix the giant hack', function() {
    it('should include a dummy lair action each round', function() {
      var lairEntity = {
        e:{name: 'Lair Actions'}, s: 20
      };
      scope.nextRound();
      expect(scope.thisRoundScores).toContain(lairEntity);
    });
  });
});
