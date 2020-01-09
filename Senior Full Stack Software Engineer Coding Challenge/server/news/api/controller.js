"use strict";

var newsapi = require("../service/newsapi");

var controllers = {
    list: function(req, res) {
        newsapi.find(req, res, function(err, data) {
            if (err) res.send(err);
            res.json(data);
        });
    },
}

module.exports = controllers;