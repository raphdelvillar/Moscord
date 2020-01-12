import React from "react";

import App from "./app.js";

import { Provider } from "react-redux";
import store from "./store";

export default class RootComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
