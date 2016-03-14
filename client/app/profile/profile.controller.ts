'use strict'; 

(function(){

class ProfileComponent {

  $route : any;
  $location : any;
  ipCookie : any;
  User : any;
  current_user : any;
  Application : any;
  applicationForm : any;
  upload : any;
  uploadedFile : any;

  constructor($location : any, $route : any, ipCookie : any, User : any, Application : any, upload : any) {
    this.$location = $location;
	this.$route = $route;
	this.ipCookie = ipCookie;
	this.User = User;
	this.Application = Application;
	this.applicationForm = {};
	this.upload = upload;
  }

  $onInit() {
	this.current_user = this.ipCookie('Login');
  }

  uploadapp() {
	this.ipCookie('Upload', true);
	this.$location.path('/profile');
	this.$route.reload();
  }

  handleUploadBtnClick(applicationForm: any) {
	applicationForm.added_date = new Date();
	this.Application.addApplication(applicationForm)
	  .then(response => {
	  	alert("Successfully!");
		this.ipCookie('Upload', false);
		this.$location.path('/profile');
		this.$route.reload();
	  });
  }

  cancel() {
	this.ipCookie('Upload', false);
	this.$location.path('/profile');
	this.$route.reload();
  }

  doUpload() {
	this.upload({
	  url: '/',
	  method: 'POST',
	  data: {
	  	aFile: this.uploadedFile
	  }
	})
  }
}

angular.module('cloudApp')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent
  });

})();
