'use strict';

describe('Service: EntityFactory', function () {

  // load the service's module
  beforeEach(module('initTrackerApp'));

  // instantiate service
  var EntityFactory;
  beforeEach(inject(function (_EntityFactory_) {
    EntityFactory = _EntityFactory_;
  }));

  it('should create new entities', function() {
    var entity1 = EntityFactory.newEntity();
    var entity2 = EntityFactory.newEntity();
    expect(entity1).toBeDefined();
    expect(entity2).toBeDefined();
    expect(entity1).not.toBe(entity2);
  });

  it('should create entities with empty attributes', function() {
    var entity = EntityFactory.newEntity();
    expect(entity.name).toEqual('');
    expect(entity.mod).toEqual(0);
  });

  it('should create initialized entities', function() {
    var entity = EntityFactory.initialize('zaxxon', 2);
    expect(entity.name).toEqual('zaxxon');
    expect(entity.mod).toEqual(2);
  });
});
