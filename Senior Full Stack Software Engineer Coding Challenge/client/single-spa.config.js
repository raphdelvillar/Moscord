import { registerApplication, start } from "single-spa";
import "babel-polyfill";
import "./style.css";

function onCurrentRoute(path) {
  if (location.pathname == path) return true;
  return false;
}

// Registers SPA Applications --
registerApplication(
  "navbar",
  () => import("./src/navbar/navbar.app.js"),
  () => true
);

registerApplication(
  "home",
  () => import("./src/home/home.app.js"),
  () => onCurrentRoute("/")
);

registerApplication(
  "iframe-challenge-one",
  () => import("./src/challenge-one/challenge-one.app.js"),
  () => onCurrentRoute("/javascript-challenge-one")
);

registerApplication(
  "iframe-challenge-four",
  () => import("./src/challenge-four/challenge-four.app.js"),
  () => onCurrentRoute("/javascript-challenge-four")
);

registerApplication(
  "news",
  () => import("./src/news/news.app.js"),
  () => onCurrentRoute("/senior-full-stack-software-engineer-coding-challenge")
);

registerApplication(
  "footer",
  () => import("./src/footer/footer.app.js"),
  () => true
);

start();
