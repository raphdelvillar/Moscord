"use strict";

let newsapi = require("../service/newsapi");

let controllers = {
  getArticlesBySource: function(req, res) {
    newsapi.getArticlesFromSource(req, res, function(err, data) {
      if (err) res.send(err);
      res.json(data);
    })
  },
  getSources: function(req, res) {
    newsapi.getSources(req, res, function(err, data) {
      if (err) res.send(err);
      res.json(data);
    });
  }
};

module.exports = controllers;
