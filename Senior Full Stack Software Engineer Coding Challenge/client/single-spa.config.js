import { registerApplication, start } from "single-spa";
import 'antd/dist/antd.css';

registerApplication(
    "home",
    () => import("./src/home/home.app.js"),
    (location) => location.pathname === "" ||
      location.pathname === "/" ||
      location.pathname.startsWith("/home")
);

start();