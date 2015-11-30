(function () {
  "use strict";
angular
  .module('nyTimes')
  .controller('NyTimesController', function ($scope, NyTimesService, $routeParams) {

    NyTimesService.getArticles('19880916').then(function (articles) {
      $scope.articles = articles.data.response.docs;
    });

  });

})();
