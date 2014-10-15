'use strict';

angular.module('storybookApp')
.directive('page', function ($interpolate) {
  return {
    template: '<span></span>',
    restrict: 'E',
    scope: {
      text: '@content',
      locals: '=context'
    },
    link: function (scope, element, attrs) {
      var interpreter = $interpolate(scope.text);
      element.text(interpreter(scope.locals));

      scope.$watch(scope.locals, function(){
        element.text(interpreter(scope.locals));
      });
    }
  };
});