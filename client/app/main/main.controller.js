'use strict';

angular.module('storybookApp')
  .controller('MainCtrl', function ($scope, pages) {
    pages.getPage(1).then(function(p){
      $scope.page = p;
    });
  });
