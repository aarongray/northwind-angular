'use strict';

var App = angular.module('northwindApp', ['restangular', 'ngRoute']);

App.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/categories', {
      templateUrl: 'views/categories/index.html',
      controller: 'CategoryCtrl'
    })
    .when('/categories/new', {
      templateUrl: 'views/categories/new.html',
      controller: 'CategoryCtrl'
    })
    .otherwise({
      redirectTo: '/404',
      templateUrl: '404.html'
    });
});
