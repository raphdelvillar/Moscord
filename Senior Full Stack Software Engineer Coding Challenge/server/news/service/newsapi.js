var request = require("request");

var newsapi = {
    find: function(_, res, _) {
        let url = config.newsapi.url;
        let apiKey = config.newsapi.apiKey;
        request(`${url}/apiKey=${apiKey}`, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                response = JSON.parse(body);
                res.send(response);
            } else {
                console.log(response.statusCode + response.Body);
                res.send()
            }
        }); 
    }
}

module.exports = newsapi