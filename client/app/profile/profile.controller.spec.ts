'use strict';

describe('Component: ProfileComponent', function () {

  // load the controller's module
  beforeEach(module('cloudApp'));

  var ProfileComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ProfileComponent = $componentController('ProfileComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
