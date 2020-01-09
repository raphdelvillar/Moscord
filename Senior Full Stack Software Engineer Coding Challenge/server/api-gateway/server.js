const gateway = require("fast-gateway");

const toml = require("toml");
const fs = require("fs");
const config = toml.parse(fs.readFileSync("./config.toml", "utf-8"));

const PORT = process.env.PORT || config.http.port;

gateway({
    middlewares: [require("cors")(), require("helmet")()],

    routes: [
        {
            prefix: "/news",
            target: "http://localhost:8001",
            // middlewares: [
            //     require("express-jwt")({
            //         secret: config.http.secret
            //     })
            // ]
        }
    ]
})
  .start(PORT)
  .then(server => {
      console.log(`${config.service.name} listening on ${PORT} port!`);
  })