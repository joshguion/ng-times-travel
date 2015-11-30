(function () {
  "use strict";
angular
  .module('nyTimes')
  .controller('NyTimesController', function ($scope, NyTimesService, $routeParams) {

    NyTimesService.getArticles().then(function (articles) {
      console.log(articles);
      $scope.articles = articles;
    });

  });

})();
