'use strict';

angular.module('cloudApp', [
  'cloudApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ipCookie',
  'lr.upload',
  'mdo-angular-cryptography'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
