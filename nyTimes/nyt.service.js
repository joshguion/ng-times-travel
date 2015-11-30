(function () {
  "use strict";
  angular
    .module('nyTimes')
    .factory('NyTimesService', function ($http) {
      var urlOpts = {
          baseUrl: 'http://api.nytimes.com/svc/search/v2/articlesearch.jsonp',
          apiKey: '?q=puppy&api-key=3d99fad457c0898db5893f425120f455:0:73616341',
          format: 'json',
          buildUrl: function () {
            return this.baseUrl + 'method=' + this.method + '&api_key=' + this.apiKey + '&format=' + this.format + '&extras=date_upload&nojsoncallback=1';
          }

        };
        function getArticles() {
          return $http.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?q=puppy&api-key=3d99fad457c0898db5893f425120f455:0:73616341')
        }
        return {
          getArticles: getArticles,
        }
    });
})();
