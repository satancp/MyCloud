'use strict';

class FooterController {
  //start-non-standard
  $location : any;
  menu : any;
  //end-non-standard

  constructor($location : any) {
    this.$location = $location;
    this.menu = [{
      'title': 'Home',
      'link': '/'
    }];
  }
}

angular.module('cloudApp')
  .controller('FooterController', FooterController);