import React from "react";

import App from "./app.js";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers";

const store = createStore(rootReducer);

export default class RootComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
