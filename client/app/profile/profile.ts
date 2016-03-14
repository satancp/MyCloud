'use strict';

angular.module('cloudApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/profile', {
        template: '<profile></profile>'
      });
  });
