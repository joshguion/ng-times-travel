(function () {
  "use strict";
angular
  .module('nyTimes')
  .controller('NyTimesController', function ($scope, NyTimesService, $routeParams) {

    NyTimesService.getNyTimesData().then(function (articles) {
      $scope.articles = articles;
    });

  });

})();
