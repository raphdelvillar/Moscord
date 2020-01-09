import React from "react";

import { Layout, Menu } from "antd";
const { Header } = Layout;

export default class HomeHeader extends React.Component {
    render() {
        return (
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    style={{ lineHeight: "64px" }}
                ></Menu>
            </Header>
        )
    }
}