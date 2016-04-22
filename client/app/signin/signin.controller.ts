'use strict';
(function(){

class SigninComponent {
  
  $route : any;
  $location : any;
  loginForm : any;
  ipCookie : any;
  User : any;
  Crypto : any;
  $crypto : any;
  
  constructor($location : any, $route : any, ipCookie : any, User : any, Crypto : any, $crypto : any) {
	this.$location = $location;
	this.$route = $route;
	this.loginForm = {};
	this.ipCookie = ipCookie;
	this.User = User;
	this.Crypto = Crypto;
	this.$crypto = $crypto;
  }

  $onInit() {
	this.ipCookie.remove('LoginState');
	this.ipCookie.remove('Login');
  }

  handleLoginBtnClick(loginForm : any) {
	var encrypted = this.$crypto.encrypt(loginForm.password, this.ipCookie('Crypto'));
	var origin = loginForm.password;
	loginForm.password = encrypted;
	this.User.loginUser(loginForm)
	  .then(response => {
		var decrypted = this.$crypto.decrypt(response.data.password, this.ipCookie('Crypto'));
		if(decrypted == origin) {
		  this.ipCookie('LoginState', 1);
		  this.ipCookie('Login', response.data);
		  this.$location.path('/');
		  this.$route.reload();
		}
		else {
		  alert('Invalid Username/Password!');
		}
	  });
  }
}

angular.module('cloudApp')
  .component('signin', {
    templateUrl: 'app/signin/signin.html',
    controller: SigninComponent
  });

})();