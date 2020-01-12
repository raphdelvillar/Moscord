import React from "react";

import "antd/dist/antd.css";

import { Layout, Icon } from "antd";
const { Footer } = Layout;

export default class MoscordFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "Raph Wilson Del Villar"
    };
  }

  componentDidCatch = (error, info) => {
    console.log(`${error} => ${info}`);
  };

  render() {
    return (
      <Footer id="footer">
        <center>
          Moscord - Senior Full Stack Software Engineer Challenge © 2020 Created
          with <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> by{" "}
          {this.state.author}
        </center>
      </Footer>
    );
  }
}
