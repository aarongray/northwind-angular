'use strict';

App.factory('Category', function ($resource) {
    return $resource('api/categories/:id') // tell ngResource the api url where it can find the categories
  }
);
