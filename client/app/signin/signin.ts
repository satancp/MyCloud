'use strict';

angular.module('cloudApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/signin', {
        template: '<signin></signin>'
      });
  });
