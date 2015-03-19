'use strict';

App.controller('CategoryCtrl', ['$scope', '$state', 'Category',
  function ($scope, $state, Category) {
    $scope.category = new Category();           // create a new category in our $scope for use in the view
    $scope.categories = Category.query();       // assign all the categories to our $scope for use in the view

    $scope.save = function() {
      $scope.category.$save();                  // save the category to the database on the server side
      $scope.categories.push($scope.category);  // add the category to the array on the client side
      $scope.category = new Category();
      $state.go('categories');
    }

    $scope.delete = function(category){
      Category.delete(category);                // delete the category from the database on the server side
      _.remove($scope.categories, category);    // delete the category from the array on the client side
    }
  }
]);
