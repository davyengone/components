(function(){
  'use strict';


  function philos(){
    return {
      restrict: 'E'
    };
  }
  angular.module('app', [])
    .directive('philos', philos);
})();
