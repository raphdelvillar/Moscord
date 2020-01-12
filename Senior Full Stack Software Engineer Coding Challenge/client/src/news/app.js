import React from "react";

import "antd/dist/antd.css";
import "./assets/css/style.css";

import Source from "./components/source.js";
import NewsContent from "./components/news-content.js";
import NewsContentPagination from "./components/news-content-pagination.js";

import { Layout, notification } from "antd";

import { connect } from "react-redux";

import api from "../data/index.js";
import { setSources, setArticles } from "./store/actions";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      filteredSources: [],
      articles: {
        articles: [],
        totalResults: 0
      },
      filteredArticles: {
        articles: [],
        totalResults: 0
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

  componentDidCatch = (error, info) => {
    console.log(`${error} => ${info}`);
  };

  getSource = () => {
    this.setLoading("source", true);
    api.Source("news/sources").GetAll(response => {
      if (!response.Error) {
        this.setState({ sources: response.Data });
        this.props.setSources(response.Data);
        this.setLoading("source", false);
      } else {
        this.setState({ sources: this.props.sources });
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
        this.setState({ articles: response.Data });
        this.props.setArticles(response.Data);
        this.onPaginationUpdate(1, 10);
      } else {
        this.setState({ articles: this.props.articles });
        this.setLoading("article", false);
        this.openNotification("error", "Error", "Internal Server Error");
      }
    });
  };

  onPaginationUpdate = (page, pageSize) => {
    let { filteredArticles } = this.state;
    this.setLoading("article", true);
    let pageSlice = (page - 1) * pageSize;
    filteredArticles.articles = this.props.articles.articles;
    filteredArticles.totalResults = this.props.articles.totalResults;
    filteredArticles.articles = filteredArticles.articles.slice(
      pageSlice,
      pageSlice + 10
    );
    this.setState({ filteredArticles });
    this.setLoading("article", false);
  };

  render() {
    let { sources, filteredArticles, loading } = this.state;
    return (
      <div>
        <Layout id="main-layout">
          <Source
            sources={sources}
            getArticlesBySource={this.getArticlesBySource}
            isLoading={loading.source}
          />
          <Layout id="content-layout">
            <NewsContent
              articles={filteredArticles}
              isLoading={loading.article}
            />
          </Layout>
        </Layout>
        <NewsContentPagination
          onPaginationUpdate={this.onPaginationUpdate}
          articles={filteredArticles}
          isLoading={loading.article}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sources: state.sources,
    articles: state.articles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSources: sources => dispatch(setSources(sources)),
    setArticles: articles => dispatch(setArticles(articles))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
