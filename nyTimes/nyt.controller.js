(function () {
  "use strict";
angular
  .module('nyTimes')
  .controller('NyTimesController', function ($scope, NyTimesService, $routeParams) {

    NyTimesService.getNyTimesData().then(function (articles) {
      $scope.articles = articles;
    });
    // console.log('photo id: ', $routeParams.flickrId);
    // if($routeParams.flickrId) {
    // LikeService.getSinglePhoto($routeParams.flickrId).success(function (likedPhoto) {
    //   $scope.likedPhoto = likedPhoto;
    //   console.log('likedPhoto: ',$scope.likedPhoto);
    // });
  // }

  });

})();
