import React from "react";

import { Card } from "antd";
const { Meta } = Card;

const ArticleTitle = props => (
  <p>
    {props.title}
    <br />
    <small>{props.publishedAt}</small>
  </p>
);

const ArticleExcerpt = props => (
  <p>
    {props.content}
  </p>
);

export default class Article extends React.Component {
  render() {
    let { article } = this.props;
    return (
      <Card
        style={{ padding: 5, height: 500 }}
        hoverable
        cover={
          <img
            style={{height: 250}}
            alt={article.url}
            src={article.urlToImage}
          />
        }
      >
        <Meta title={<ArticleTitle title={article.title} publishedAt={article.publishedAt} />} description={<ArticleExcerpt content={article.content} />}></Meta>
      </Card>
    );
  }
}
