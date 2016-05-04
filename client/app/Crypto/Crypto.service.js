'use strict';

angular.module('cloudApp')
  .factory('Crypto', function ($http) {
  	var api = {
      getKey : function() {
      	return $http.get('/api/cryptos/');
      }
    };
    return api;
  });
