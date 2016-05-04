'use strict';

angular.module('cloudApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/peanutbank', {
        template: '<peanutbank></peanutbank>'
      });
  });
