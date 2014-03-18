'use strict';

var App = angular.module('northwindApp', ['ngResource', 'ngRoute']);

App.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/categories', {
      templateUrl: 'views/categories.html',
      controller: 'CategoryCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
