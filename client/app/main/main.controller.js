'use strict';

angular.module('storybookApp')
  .controller('MainCtrl', function ($scope, pages, books) {

    $scope.choices = [];
    $scope.book = {};

    $scope.$watch('nextPage',function(){
      console.log($scope.nextPage);
    });

    books.getBook().then(function(book){
      $scope.book = book;
    });

    $scope.createBook = function(){

      if($scope.newBookForm.$valid){

          pages.getPage(1).then(function(page1){

            $scope.book.pages.push(page1);
            getChoices();

            $scope.book.title = $scope.newBookForm.bookTitle.$modelValue;
            $scope.book.characters.primary = $scope.newBookForm.bookMainChar.$modelValue;
            $scope.book.characters.secondary = $scope.newBookForm.bookSecondChar.$modelValue;

        });

      } else {
        $scope.newBookError = 'Oops, maybe you forgot to fill in one of the fields?';
      }
    };

    $scope.makeChoice = function(){
      var pagenum = $scope.nextPage;
      if(pagenum){
        pages.getPage(pagenum).then(function(page){
          $scope.book.pages.push(page);
          getChoices();
        });
      }
    };

    var getChoices = function(){
      if($scope.book){
        var lastIndex = $scope.book.pages.length-1;
        $scope.choices = $scope.book.pages[lastIndex].links;
      }
    };
  });
