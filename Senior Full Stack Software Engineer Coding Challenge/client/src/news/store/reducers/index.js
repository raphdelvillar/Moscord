import { combineReducers } from "redux";
import sources from "./sources.js";
import articles from "./articles.js";

export default combineReducers({
  sources,
  articles
});
