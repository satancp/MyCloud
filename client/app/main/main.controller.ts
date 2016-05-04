'use strict';

(function() {

class MainController {

  User : any;
  ipCookie : any;
  $route : any;
  $location : any;
  Application : any;
  applications : any;
  Crypto : any;

  constructor(Application : any, ipCookie : any, $location : any, $route : any, Crypto : any) {
    this.Application = Application;
    this.ipCookie = ipCookie;
    this.$location = $location;
    this.$route = $route;
    this.Crypto = Crypto;
  }

  $onInit() {
    this.ipCookie('Upload', false);
    this.Crypto.getKey().then(response1 => {
      this.ipCookie('Crypto', response1.data)
      if (this.ipCookie('LoginState') != 1) {
        this.$location.path('/signin');
        this.$route.reload();
      }
      this.Application.getApplications()
        .then(response => {
          this.applications = response.data;
        });
    });
  }

  deploy(id : any) {
    this.Application.deploy(id).then(response => {
      alert('Successfully!');
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
