'use strict';

App.factory('Category', function ($resource) {
    return $resource('api/categories/:id')
  }
);
