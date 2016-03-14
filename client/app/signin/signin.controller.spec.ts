'use strict';

describe('Component: SigninComponent', function () {

  // load the controller's module
  beforeEach(module('cloudApp'));

  var SigninComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    SigninComponent = $componentController('SigninComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
