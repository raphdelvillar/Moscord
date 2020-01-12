import React from "react";
import { navigateToUrl } from "single-spa";

import "antd/dist/antd.css";

import { Layout, Menu } from "antd";

const { Header } = Layout;

export default class MoscordNavbar extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div id="logo" />
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
            <Menu.Item onClick={() => navigateToUrl("/javascript-challenge-one")}>
              Javascript Coding Challenge 1
            </Menu.Item>
            <Menu.Item onClick={() => navigateToUrl("/javascript-challenge-four")}>
              Javascript Coding Challenge 4
            </Menu.Item>
            <Menu.Item onClick={() => navigateToUrl("/senior-full-stack-software-engineer-coding-challenge")}>
              Senior Full Stack Software Engineer Coding Challenge
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
}
