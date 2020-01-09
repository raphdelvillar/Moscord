import React from "react";
import Article from "./article.js";

import { Col, Row, Result, Icon } from "antd";

export default class ArticleGrid extends React.Component {
  render() {
    let { articles, totalResult } = this.props;
    return (
      <Row gutter={25}>
        {articles.map(article => {
          return (
            <Col style={{ marginTop: 10 }} span={6}>
              <Article article={article} />
            </Col>
          );
        })}

        {articles.length == 0 && (
          <Result
            style={{ marginTop: 175 }}
            icon={<Icon type="smile" theme="twoTone" />}
            title="Try selecting a news source from the left sidebar"
          />
        )}
      </Row>
    );
  }
}
