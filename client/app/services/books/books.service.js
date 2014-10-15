'use strict';

angular.module('storybookApp')
.service('books', function ($http, $q) {
  var currentBook;

  this.getBook = function(){
    var d = $q.defer();
    if(!currentBook){
      $http.get('/api/books')
      .success(function(book){
        if(!book || book.length<1){
          currentBook = {
            characters: {
              primary: '',
              secondary: ''
            },
            pages: [],
            title: ''
          };
        } else {
          currentBook = book;
        }
      })
      .error(function(){
        currentBook = {
          characters: {
            primary: '',
            secondary: ''
          },
          pages: [],
          title: ''
        };
      }).then(function(){
        d.resolve(currentBook);
      });

    } else {
      d.resolve(currentBook);
    }
    return d.promise;
  };

  this.saveBook = function(book){
    //stuff
  };
});
