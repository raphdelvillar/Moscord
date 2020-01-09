const express = require("express");

const toml = require("toml");
const fs = require("fs");
global.config = toml.parse(fs.readFileSync("./config.toml", "utf-8"));

const app = express();
const PORT = process.env.PORT || config.http.port;

const routes = require("./api/routes");
routes(app);

app.listen(PORT, function() {
  console.log(`${config.service.name} listening on ${PORT} port!`);
});
