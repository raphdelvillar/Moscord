import React from "react";

import HomeHeader from "./components/home-header.js";
import NewsSource from "./components/news-source.js";
import HomeContent from "./components/home-content.js";
import HomeFooter from "./components/home-footer.js";

import { Layout } from "antd";

import api from "../data/index.js";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      articles: {
        articles: [],
        totalResult: 0
      },
      loading: {
        source: false,
        article: false
      }
    };
  }

  componentDidMount = () => {
    this.getSource();
  };

  getSource = () => {
    this.setState({ loading: { source: true, article: false } });
    api.Source("news/sources").GetAll(response => {
      if (!response.Error) {
        this.setState({
          sources: response.Data,
          loading: { source: false, article: false }
        });
      }
    });
  };

  getArticlesBySource = source => {
    this.setState({ loading: { source: false, article: true } });
    api.Article(`news/articles`).FindBySource(source, response => {
      if (!response.Error) {
        this.setState({
          articles: response.Data,
          loading: { source: false, article: false }
        });
      }
    });
  };

  render() {
    let { sources, articles, loading } = this.state;
    return (
      <Layout>
        <HomeHeader />
        <Layout>
          <NewsSource
            sources={sources}
            getArticlesBySource={this.getArticlesBySource}
            isLoading={loading.source}
          />
          <Layout style={{ padding: "0 24px 24px" }}>
            <HomeContent articles={articles} isLoading={loading.article} />
            <HomeFooter />
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
