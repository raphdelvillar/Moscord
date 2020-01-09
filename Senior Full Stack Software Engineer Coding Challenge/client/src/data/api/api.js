import Axios from "./axios";

class Api extends Axios {
  constructor(url) {
    super();
    this.defaults.baseURL = "http://localhost:8999/" + url;
  }
}

export function Get(url, params, callback) {
  let api = new Api(url);
  api
    .get("", params)
    .then(response => {
      if (callback) {
        callback(response.data);
      }
    })
    .catch(err => {
      if (callback) {
        callback({
          Error: err,
          Data: null
        });
      }
    });
}

export function Post(url, data, callback) {
  let api = new Api(url);
  api
    .post("", data)
    .then(response => {
      if (callback) {
        callback(response.data);
      }
    })
    .catch(err => {
      if (callback) {
        callback({
          Error: err,
          Data: null
        });
      }
    });
}

export function Patch(url, data, callback) {
  let api = new Api(url);
  api
    .patch("", data)
    .then(response => {
      if (callback) {
        callback(response.data);
      }
    })
    .catch(err => {
      if (callback) {
        callback({
          Error: err,
          Data: null
        });
      }
    });
}

export function Delete(url, params, callback) {
  let api = new Api(url);
  api
    .delete("", params)
    .then(response => {
      if (callback) {
        callback(response.data);
      }
    })
    .catch(err => {
      if (callback) {
        callback({
          Error: err,
          Data: null
        });
      }
    });
}

export default {
  Get,
  Post,
  Patch,
  Delete
};
