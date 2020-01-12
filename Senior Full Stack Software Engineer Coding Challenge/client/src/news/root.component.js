import React from "react";

import "antd/dist/antd.css";
import "./assets/css/style.css";

import Source from "./components/source.js";
import NewsContent from "./components/news-content.js";
import NewsContentPagination from "./components/news-content-pagination.js";

import { Layout, notification } from "antd";

import api from "../data/index.js";

export default class News extends React.Component {
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
    this.setLoading("source", true);
    api.Source("news/sources").GetAll(response => {
      if (!response.Error) {
        this.setState({
          sources: response.Data
        });
        this.setLoading("source", false);
      } else {
        this.setLoading("source", false);
        this.openNotification("error", "Error", "Internal Server Error");
      }
    });
  };

  setLoading = (key, isLoading) => {
    let { loading } = this.state;
    loading[key] = isLoading;
    this.setState({
      loading: loading
    });
  };

  openNotification = (type, message, description) => {
    notification[type]({
      message: message,
      description: description,
      placement: "bottomRight"
    });
  };

  getArticlesBySource = source => {
    this.setLoading("article", true);
    api.Article(`news/articles`).FindBySource(source, response => {
      if (!response.Error) {
        this.setState({
          articles: response.Data
        });
        this.setLoading("article", false);
      } else {
        this.setLoading("article", false);
        this.openNotification("error", "Error", "Internal Server Error");
      }
    });
  };

  render() {
    let { sources, articles, loading } = this.state;
    return (
      <div>
        <Layout id="main-layout">
          <Source
            sources={sources}
            getArticlesBySource={this.getArticlesBySource}
            isLoading={loading.source}
          />
          <Layout id="content-layout">
            <NewsContent articles={articles} isLoading={loading.article} />
          </Layout>
        </Layout>
        <NewsContentPagination
          articles={articles}
          isLoading={loading.article}
        />
      </div>
    );
  }
}
