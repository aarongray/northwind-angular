'use strict';

App.controller('CategoryCtrl', ['$scope', 'Category',
  function ($scope, Category) {
    $scope.categories = Category.query();
  }
]);
