let request = require("request");

let url = config.newsapi.url;
let apiKey = config.newsapi.key;

let newsapi = {
  getArticlesFromSource: function(req, res, _) {
    request(
      `${url}/top-headlines?sources=${req.params.source}&apiKey=${apiKey}`,
      function(error, response, body) {
        console.log(response);
        if (!error && response.statusCode == 200) {
          response = JSON.parse(body);
          res.send({
            Data: {
              articles: response.articles,
              totalResults: response.totalResults,
            },
            Error: null
          });
        } else {
          res.send();
        }
      }
    );
  },
  getSources: function(_, res, _) {
    request(`${url}/sources?apiKey=${apiKey}`, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        response = JSON.parse(body);
        res.send({
          Data: response.sources,
          Error: null
        });
      } else {
        res.send();
      }
    });
  }
};

module.exports = newsapi;
