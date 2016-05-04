'use strict';

angular.module('cloudApp')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/applications/:id/appdetail', {
        template: '<appdetail></appdetail>'
      });
  });
