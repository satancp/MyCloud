'use strict';
(function(){

class SigninComponent {
  
  $route : any;
  $location : any;
  loginForm : any;
  ipCookie : any;
  User : any;
  
  constructor($location : any, $route : any, ipCookie : any, User : any) {
	this.$location = $location;
	this.$route = $route;
	this.loginForm = {};
	this.ipCookie = ipCookie;
	this.User = User;
  }

  $onInit() {
	this.ipCookie.remove('LoginState');
	this.ipCookie.remove('Login');
  }

  handleLoginBtnClick(loginForm : any) {
	this.User.loginUser(loginForm)
    .then(response => {
	  this.ipCookie('LoginState', 1);
		this.ipCookie('Login', response.data);
		this.$location.path('/');
		this.$route.reload();
	  });
  }
}

angular.module('cloudApp')
  .component('signin', {
    templateUrl: 'app/signin/signin.html',
    controller: SigninComponent
  });

})();