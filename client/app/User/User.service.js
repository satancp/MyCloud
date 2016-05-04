'use strict';

angular.module('cloudApp')
  .factory('User', ['$http', function ($http) {
    var api = {
      getUsers : function() {
        return $http.get('/api/users');
      },
      getQuestions : function() {
        return $http.get('/api/questions');
      },
      getUser : function(id) {
        return $http.get('/api/users/'+id);
      },
      loginUser : function(user) {
        return $http.post('/api/users/login',user);
      },
      addUser : function(user) {
        return $http.post('/api/users',user);
      },
      updateUser : function(id,user) {
        return $http.put('/api/users/'+id,user);
      },
      checkUser : function(query) {
        return $http.get('/api/solvequerys?api='+query.api+'&type='+query.type+'&content='+query.content+'&auth='+query.auth);
      },

      playTheApplication : function (playDetails) {
        return $http.put('/api/users/'+ playDetails.userId + '/playApplication', playDetails);
      },

      subscribeTheApplication : function (appDetails){
        return $http.put('/api/users/' + appDetails.userId + '/subscribeApplication', appDetails);
      }
    };
    return api;
  }]);