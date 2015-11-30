
(function () {
  "use strict";

  angular
    .module('nyTimes', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/articles', {
          templateUrl: 'nyTimes/views/list.html',
          controller: 'NyTimesController'
        })
        .when('/search', {
          templateUrl: 'nyTimes/views/detail.html',
          controller: 'NyTimesController'
        })
        .when('/404', {
          templateUrl: 'common/views/404.html'
        })
        .otherwise({ redirectTo: '/404'});
    });


})();
