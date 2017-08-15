(function () {
  'use strict';

  angular
    .module('githubApiAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm = this;
    vm.username = "heshamelmasry77";
    $http.get("https://api.github.com/users/" + vm.username+"/repos")
      .success(function (data) {
        vm.userData = data;
        console.log(vm.userData);
      });
  }
})();
