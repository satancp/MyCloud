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
  Upload : any;
  uploadedFile : any;
  temp : any;
  appnumber : any;
  current_balance : any;

  constructor($location : any, $route : any, ipCookie : any, User : any, Application : any, Upload : any) {
    this.$location = $location;
	this.$route = $route;
	this.ipCookie = ipCookie;
	this.User = User;
	this.Application = Application;
	this.applicationForm = {};
	this.Upload = Upload;
	this.appnumber = 0;
  }

  $onInit() {
	this.current_user = this.ipCookie('Login');
	this.Application.getApplications()
		.then(response => {
			this.appnumber = response.data.length;
		});
	this.current_balance = this.User.getUser(this.current_user._id)
		.then(response => {
			this.current_balance = response.data.account;
		});
  }

  uploadapp() {
	this.ipCookie('Upload', true);
	this.$location.path('/profile');
	this.$route.reload();
  }

  handleUploadBtnClick(applicationForm: any) {
	applicationForm.added_date = new Date();
	applicationForm.developer = this.current_user;
	applicationForm.stock_state = false;
	applicationForm.consumer_number = 0;
	applicationForm.deploy_state = 0;
	applicationForm.port = 4000 + this.appnumber;
	var temp_array = this.uploadedFile.name.split('.');
	applicationForm.extension_name = applicationForm.name + '.' + temp_array[1];
	this.Upload.upload({
		url: '/api/applications/save/' + this.current_user._id + '/' + applicationForm.name + '.' + temp_array[1] + '/' + applicationForm.name,
		file: this.uploadedFile
	});
	this.Application.addApplication(applicationForm)
	  .then(response => {
		  this.temp = {
			app: response.data,
			added_date: applicationForm.added_date
		  };
		  this.current_user.applist.push(this.temp);
		  this.User.updateUser(this.current_user._id, this.current_user.applist)
		   .then(response1 => {
			 this.ipCookie('Login', response1.data);
			 this.current_user = this.ipCookie('Login');
			 alert("Successfully!");
			 this.ipCookie('Upload', false);
			 this.$location.path('/profile');
			 this.$route.reload();
		   })
	  });
  }

  deploy(id: any) {
	  this.Application.deploy(id).then(response => {
		  alert('Successfully!');
	  });
  }

  cancel() {
	this.ipCookie('Upload', false);
	this.$location.path('/profile');
	this.$route.reload();
  }
}

angular.module('cloudApp')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent
  });

})();
