"use strict";

const controller = require("./controller");

module.exports = function(app) {
  app.route("/sources").get(controller.getSources);
  app.route("/articles/:source").get(controller.getArticlesBySource);
};
