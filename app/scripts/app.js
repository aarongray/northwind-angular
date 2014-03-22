'use strict';

var App = angular.module('northwindApp', ['ngResource', 'ui.router']);

App.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('404');           // for any unmatched url, redirect to the 404 state.

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('categories', {                        // Hyperlinks' should now have a ui-sref attribute pointing to this state, rather than an href pointing to a url.
      url: '/categories',                         // Optional, but a good idea. Adds an href attribute pointing to this url to all hyperlinks pointing to this state. This gives you niceties like cursor:pointer, history, and browser url updating as you browse.
      templateUrl: 'views/categories/index.html', // The view file to render at this state.
      controller: 'CategoryCtrl'                  // You can either specify the controller in your routes like this, or in your view using the ng-controller directive.
    })
    .state('new category', {
      url: '/categories/new',
      templateUrl: 'views/categories/new.html',
      controller: 'CategoryCtrl'
    })
    .state('404', {
      url: '/404',
      templateUrl: '404.html',
      controller: 'MainCtrl'
    })
});
