'use strict';

describe('Component: PeanutbankComponent', function () {

  // load the controller's module
  beforeEach(module('cloudApp'));

  var PeanutbankComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PeanutbankComponent = $componentController('PeanutbankComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
