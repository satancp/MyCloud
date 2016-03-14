'use strict';

angular.module('cloudApp')
  .factory('Application', ['$http', function ($http) {
    var api = {
      getApplications : function() {
        return $http.get('/api/applications');
      },
      getApplication : function(id) {
        return $http.get('/api/applications/'+id);
      },
      addApplication : function(application) {
        return $http.post('/api/applications',application);
      },
      updateApplication : function(id,application) {
        return $http.put('/api/applications/'+id,application);
      },
      deleteApplication : function(id) {
        return $http.delete('/api/applications'+id);
      }
    };
    return api;
  }]);