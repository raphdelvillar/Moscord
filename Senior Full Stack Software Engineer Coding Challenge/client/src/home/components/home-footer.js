import React from "react";

import { Layout } from "antd";
const { Footer } = Layout;

export default class HomeFooter extends React.Component {
    render() {
        return (
            <Footer style={{
                marginTop: 10,
                textAlign: "center"
            }}>
                ©2019 Created by Raph Wilson Del Villar
            </Footer>
        )
    }
}