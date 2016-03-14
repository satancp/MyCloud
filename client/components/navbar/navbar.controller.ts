'use strict';

class NavbarController {
  //start-non-standard
  menu : any;
  $location : any;
  ipCookie : any;
  state_cookie : any;
  $route : any;
  date : any;
  format : any;
  keywords : String;
  //end-non-standard

  constructor($location : any, ipCookie : any, $route : any) {
    this.$location = $location;
    this.ipCookie = ipCookie;
    this.keywords = '';
    this.menu = [
      {
      'title': 'Home',
      'link': '/'
      }, 
      {
      'title': 'News',
      'link': '/'
      }, 
      {
      'title': 'Contact Us',
      'link': '/contact'
      }
    ];
    this.format = "h:mm:ss a";
    this.date = new Date();
  }

  search() {
    alert('asd');
  };

  logout() {
    this.ipCookie.remove('LoginState');
    this.ipCookie.remove('Login');
    this.$location.path('/signin');
    this.$route.reload();
  };

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('cloudApp')
  .controller('NavbarController', NavbarController);
