(function() {
  'use strict';

  angular
    .module('githubApiAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
