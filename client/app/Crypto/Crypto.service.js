'use strict';

angular.module('cloudApp')
  .factory('Crypto', function ($crypto, $http) {
  	var api = {
      getKey : function() {
      	return $http.get('/api/cryptos/');
      }
    };
    return api;
  });
