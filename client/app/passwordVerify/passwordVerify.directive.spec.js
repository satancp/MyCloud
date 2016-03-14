'use strict';

describe('Directive: passwordVerify', function () {

  // load the directive's module
  beforeEach(module('cloudApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<password-verify></password-verify>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the passwordVerify directive');
  }));
});
