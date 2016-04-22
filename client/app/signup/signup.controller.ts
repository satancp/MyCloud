'use strict';
(function(){

class SignupComponent {

  $route : any;
  $location : any;
  registrationForm : any;
  ipCookie : any;
  User : any; 
  questions : any;
  Crypto : any;
  $crypto : any;
  
  constructor($location : any, $route : any, ipCookie : any, User : any, Crypto : any, $crypto : any) {
	this.$location = $location;
	this.$route = $route;
	this.registrationForm = {
	  wishlist: null,
	  applist: null
	};
	this.ipCookie = ipCookie;
	this.User = User;
	this.Crypto = Crypto;
	this.$crypto = $crypto;
  }

  $onInit() {
	this.User.getQuestions()
	  .then(response => {
	    this.questions = response.data;
	  });
  }

  gettosignin() {
	this.$location.path('/signin');
	this.$route.reload();
  }

  handleRegBtnClick(registrationForm : any) {
	var encrypted = this.$crypto.encrypt(registrationForm.password, this.ipCookie('Crypto'));
	registrationForm.password = encrypted;
	this.User.addUser(registrationForm)
	  .then(response => {
		alert("Successfully!Enjoy~");
		this.ipCookie('LoginState', 1);
		this.ipCookie('Login', response.data);
		this.$location.path('/');
		this.$route.reload();
	  });
  }
}

angular.module('cloudApp')
  .component('signup', {
    templateUrl: 'app/signup/signup.html',
    controller: SignupComponent
  });

})();
