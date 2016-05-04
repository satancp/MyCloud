'use strict';
(function(){

  class PeanutbankComponent {

    chargeNum:any;
    ipCookie:any;
    User:any;
    current_user:any;

    constructor(ipCookie:any, User:any) {
      this.ipCookie = ipCookie;
      this.User = User;
      this.chargeNum = 0;
    }

    $onInit() {
      this.current_user = this.ipCookie('Login');
    }

    chargeAcct(chargeNum:any) {

      this.User.getUser(this.current_user._id)
        .then(response => {
          // console.log(response.data.account);
          this.current_user = response.data;
          this.current_user.account = chargeNum + this.current_user.account;
          // console.log("bbbbbbb" + this.current_user.account);
          this.User.updateUser(this.current_user._id, this.current_user)
            .then(response => {
              alert("Charging successfuly");
              // console.log("=-------" + response.data.account);
            });
        });

    }
  }
//noinspection TypeScriptUnresolvedFunction
  angular.module('cloudApp')
    .component('peanutbank', {
      templateUrl: 'app/peanutbank/peanutbank.html',
      controller: PeanutbankComponent
    });

})();
