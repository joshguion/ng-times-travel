(function () {
  "use strict";
  angular
    .module('nyTimes')
    .factory('NyTimesService', function ($http, moment, _) {
      var urlOpts = {
          baseUrl: 'http://api.nytimes.com/svc/search/v2/articlesearch',
          apiKey: 'a11f13a3e2bc607cad4841bbc9fdcdfd:17:73616341',
          format: 'json',
          buildUrl: function () {
            return this.baseUrl + 'method=' + this.method + '&api_key=' + this.apiKey + '&format=' + this.format + '&extras=date_upload&nojsoncallback=1';
          }
        };
    });
})();
