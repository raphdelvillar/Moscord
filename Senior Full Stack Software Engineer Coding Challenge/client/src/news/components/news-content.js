import React from "react";
import ArticleGrid from "./article-grid.js";

import { Layout, Result, Spin } from "antd";
const { Content } = Layout;

export default class NewsContent extends React.Component {
  render() {
    let { articles, isLoading } = this.props;
    return (
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 812
        }}
      >
        {isLoading ? (
          <Result
            style={{ marginTop: 175 }}
            icon={<Spin style={{ padding: 25 }} size="large"></Spin>}
            title={<span style={{ color: "#1890ff" }}>Loading</span>}
          />
        ) : (
          <ArticleGrid
            articles={articles.articles}
            totalResult={articles.totalResult}
          />
        )}
      </Content>
    );
  }
}
