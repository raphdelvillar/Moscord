import React from "react";

import HomeHeader from "./components/home-header.js";
import NewsSource from "./components/news-source.js";
import HomeContent from "./components/home-content.js";
import HomeFooter from "./components/home-footer.js";

import { Layout } from "antd";

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        <HomeHeader />
        <Layout>
          <NewsSource />
          <Layout style={{ padding: "0 24px 24px" }}>
            <HomeContent />
            <HomeFooter />
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
