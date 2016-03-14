'use strict';

describe('Service: Application', function () {

  // load the service's module
  beforeEach(module('cloudApp'));

  // instantiate service
  var Application;
  beforeEach(inject(function (_Application_) {
    Application = _Application_;
  }));

  it('should do something', function () {
    expect(!!Application).toBe(true);
  });

});
