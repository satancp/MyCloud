'use strict';

describe('Component: SignupComponent', function () {

  // load the controller's module
  beforeEach(module('cloudApp'));

  var SignupComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    SignupComponent = $componentController('SignupComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
