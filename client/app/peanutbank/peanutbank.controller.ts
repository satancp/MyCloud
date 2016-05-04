'use strict';
(function(){

class PeanutbankComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('cloudApp')
  .component('peanutbank', {
    templateUrl: 'app/peanutbank/peanutbank.html',
    controller: PeanutbankComponent
  });

})();
