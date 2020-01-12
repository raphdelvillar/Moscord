import React from "react";
import ArticleGrid from "./article-grid.js";

import { Layout, Result, Spin } from "antd";
const { Content } = Layout;

export default class NewsContent extends React.Component {
  render() {
    let { articles, isLoading } = this.props;
    return (
      <React.Fragment>
        <Content id="news-content">
          {isLoading ? (
            <Result
              className="result"
              icon={<Spin className="loader" size="large"></Spin>}
              title={<span style={{ color: "#1890ff" }}>Loading</span>}
            />
          ) : (
            <ArticleGrid
              articles={articles.articles}
              totalResult={articles.totalResult}
            />
          )}
        </Content>
      </React.Fragment>
    );
  }
}
