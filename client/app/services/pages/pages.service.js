'use strict';

angular.module('storybookApp')
.service('pages', function ($http, $q) {

  this.getPages = function(){
    var d = $q.defer();
    $http.get('/api/pages')
    .success(function(data){
      d.resolve(data);
    })
    .error(function(data,status){
      d.reject('failed to get pages');
    });
    return d.promise;
  };

  this.getPage = function(num){
    var d = $q.defer();
    $http.get('/api/pages/'+num)
    .success(function(data){
d.resolve(data[0]); //expect only one match
})
    .error(function(data,status){
      d.reject('failed to get page');
    });
    return d.promise;
  };

});
