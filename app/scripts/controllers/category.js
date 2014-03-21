'use strict';

App.controller('CategoryCtrl', ['$scope', 'Category',
  function ($scope, Category) {
    $scope.category = new Category();
    $scope.categories = Category.query();

    $scope.save = function() {
      $scope.category.$save();
      $scope.categories.push($scope.category);
      $scope.category = new Category();
    }

    $scope.delete = function(category){
      Category.delete(category);
      _.remove($scope.categories, category);
    }
  }
]);
