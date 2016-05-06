'use strict';
(function(){
class AppdetailComponent {

	App_id : any;
	current_application : any;
	Application: any;
	$location : any;
	$route: any;
	ipCookie: any;
	current_user : any;
	User : any;
	$window : any;
	
	constructor($routeParams: any, ipCookie: any, $location: any, $route : any,  Application: any, User : any, $window : any) {
		this.App_id = $routeParams.id;
		this.ipCookie = ipCookie;
		this.Application = Application;
		this.User = User;
		this.$location = $location;
		this.$route = $route;
		this.current_application = {};
		this.$window = $window;
	}

	$onInit() {
		this.Application.getApplication(this.App_id)
			.then(response => {
				this.current_application = response.data;
			});
		var tempUser = this.ipCookie('Login');
		this.User.getUser(tempUser._id)
		.then(response => {
				this.current_user = response.data;
		});
	}

	isSubscribeApp() {
		this.User.getUser(this.current_user._id)
		.then(response =>{
			this.current_user = response.data;
		});		
		var followapp = this.current_user.follow_app;
		for (var i = 0; i < followapp.length; i++) {
			if (this.current_application._id == followapp[i]._id) {
				return true;
			}
		}
		return false;
	}

	subscribeApp (Application: any){
		if (this.isSubscribeApp())
		{
			alert("You have subscribed this app");
		}
		else
		{
			var appDetail = {
				userId: this.current_user._id,
				app: Application,
				player: this.current_user
			}
			this.User.subscribeTheApplication(appDetail)
				.then(response => {
					this.current_user = response.data;
					alert("Thank you to follow our App");
				});
		}
	}

	playApplication(Application: any) {
		var playDetail = {
			userId: this.current_user._id,
			app: Application,
			player: this.current_user
		}
		if(this.current_user.account <= 0)
		{
			alert("Please Recharge at first");
		}
		else if(!this.isSubscribeApp())
	    {
			alert("Please subscribe the app at first");
	    }
		else {
			if(this.current_application.extension_name.indexOf('.war') != -1) {
				this.$window.location.href = 'http://143.167.224.143:8080/' + this.current_user._id + '-' + this.current_application.name;
			}
			else {
				this.$window.location.href = 'http://143.167.224.143:' + this.current_application.port + '/';
			}
		}
	}
}

	angular.module('cloudApp')
		.component('appdetail', {
    templateUrl: 'app/appdetail/appdetail.html',
    controller: AppdetailComponent
  });

})();
