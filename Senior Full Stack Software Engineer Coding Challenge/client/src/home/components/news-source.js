import React from "react";

import { Layout, Menu } from "antd";
const { Sider } = Layout;

export default class NewsSource extends React.Component {
    render() {
        return (
            <Sider width={300} style={{ background: "#fff"}}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    style={{
                        height: "100%",
                        borderRight: 0
                    }}
                ></Menu>
            </Sider>
        )
    }
}