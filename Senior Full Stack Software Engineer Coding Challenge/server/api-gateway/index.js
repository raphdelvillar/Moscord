const gateway = require("fast-gateway");

const toml = require("toml");
const fs = require("fs");
global.config = toml.parse(fs.readFileSync("./config.toml", "utf-8"));

const PORT = process.env.PORT || config.http.port;

gateway({
  middlewares: [require("cors")(), require("helmet")()],

  routes: [
    {
      prefix: "/news",
      target: "http://localhost:8001"
    }
  ]
})
  .start(PORT)
  .then(server => {
    console.log(`${config.service.name} listening on ${PORT} port!`);
  });
