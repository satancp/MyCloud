'use strict';

(function() {

class MainController {

  User : any;
  ipCookie : any;
  $route : any;
  $location : any;
  Application : any;
  applications : any;

  constructor(Application : any, ipCookie : any, $location : any, $route : any) {
    this.Application = Application;
    this.ipCookie = ipCookie;
    this.$location = $location;
    this.$route = $route;
  }

  $onInit() {
    this.ipCookie('Upload', false);
    if(this.ipCookie('LoginState') != 1) {
      this.$location.path('/signin');
      this.$route.reload();
    }
    this.Application.getApplications()
      .then(response => {
        this.applications = response.data;
      });
  }

  cancel() {

  }
}

angular.module('cloudApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
