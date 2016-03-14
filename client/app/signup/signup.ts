'use strict';

angular.module('cloudApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/signup', {
        template: '<signup></signup>'
      });
  });
