import React from "react";

import "antd/dist/antd.css";
import logo from "./assets/images/moscord.png";

import { Layout } from "antd";

export default class Home extends React.Component {
  componentDidCatch = (error, info) => {
    console.log(`${error} => ${info}`);
  };

  render() {
    return (
      <Layout className="layout">
        <center>
          <img width={300} height={300} src={logo} />
        </center>
      </Layout>
    );
  }
}
