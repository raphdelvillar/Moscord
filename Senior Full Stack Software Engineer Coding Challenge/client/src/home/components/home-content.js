import React from "react";
import ArticleGrid from "./article-grid.js";

import { Layout } from "antd";
const { Content } = Layout;

export default class NewsContent extends React.Component {
    render() {
        return (
            <Content
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 812
                }}
            >
                <ArticleGrid />
            </Content>
        )
    }
}