import React from "react";

import { Card } from "antd";
const { Meta } = Card;

const ArticleTitle = props => (
  <p>
    Article Title
    <br />
    <small>Date</small>
  </p>
);

const ArticleExcerpt = props => (
  <p>
    Excerpt
    <br />
  </p>
);

export default class Article extends React.Component {
  render() {
    return (
      <Card
        style={{ padding: 5 }}
        hoverable
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title={<ArticleTitle />} description={<ArticleExcerpt />}></Meta>
      </Card>
    );
  }
}
