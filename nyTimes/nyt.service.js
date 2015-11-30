(function () {
  "use strict";
  angular
    .module('nyTimes')
    .factory('NyTimesService', function ($http) {
      // var urlOpts = {
      //     baseUrl: 'http://api.nytimes.com/svc/search/v2/articlesearch.jsonp',
      //     apiKey: '?q=puppy&api-key=3d99fad457c0898db5893f425120f455:0:73616341',
      //     format: 'json',
      //   };
        function getArticles(date) {
          return $http.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?end_date='+date+'&api-key=3d99fad457c0898db5893f425120f455:0:73616341')
        }
        return {
          getArticles: getArticles,
        }
    });
})();
