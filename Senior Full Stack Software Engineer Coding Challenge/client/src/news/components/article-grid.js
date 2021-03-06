import React from "react";
import Article from "./article.js";

import { Col, Row, Result, Icon } from "antd";

export default class ArticleGrid extends React.Component {
  render() {
    let { articles } = this.props;
    return (
      <Row gutter={25}>
        {articles.map((article, index) => {
          return (
            <Col key={`col-${index}`} className="article-grid-col" xs={24} sm={24} md={24} lg={8}>
              <Article key={`article-${index}`} article={article} />
            </Col>
          );
        })}

        {articles.length == 0 && (
          <Result
            id="article-grid-result"
            icon={<Icon type="smile" theme="twoTone" />}
            title="Try selecting a news source from the left sidebar"
          />
        )}
      </Row>
    );
  }
}
