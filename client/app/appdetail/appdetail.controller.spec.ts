'use strict';

describe('Component: AppdetailComponent', function () {

  // load the controller's module
  beforeEach(module('cloudApp'));

  var AppdetailComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AppdetailComponent = $componentController('AppdetailComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
