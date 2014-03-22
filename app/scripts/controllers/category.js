'use strict';

App.controller('CategoryCtrl', ['$scope', 'Category', 'Restangular',
  function ($scope, Category, Restangular) {
    var baseCategories = Restangular.all('api/categories'); // tell restangular the api url where it can find the categories.

    baseCategories.getList().then(function(categories) {    // get all the categories
      $scope.categories = categories;                       // assign the categories to our $scope for use in the view

      $scope.save = function(newCategory) {
        baseCategories.post(newCategory);       // save the category to database on the server side
        $scope.categories.push(newCategory);    // add the category to the array on the client side
      }

      $scope.delete = function(category) {
        category.remove();                      // delete the category from the database on the server side
        _.remove($scope.categories, category);  // delete the category from the array on the client side
      }
    });
  }
]);
