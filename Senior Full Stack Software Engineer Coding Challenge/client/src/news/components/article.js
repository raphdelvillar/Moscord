import React from "react";
import ArticleImage from "./article-image";

import dateFormat from "dateformat";

import { Card } from "antd";
const { Meta } = Card;

const ArticleTitle = props => (
  <p>
    {props.title}
    <br />
    <small>{props.publishedAt}</small>
  </p>
);

const ArticleExcerpt = props => <p align="justify">{props.content}</p>;

export default class Article extends React.Component {
  cleanText = (text, length) => {
    if (text)
      return `${text
        .replace(/[ \t]*<h[1-6]{1}.*>(.*)<\/h[1-6]{1}>[\n\r]/gi, "")
        .substring(0, length)} ...`;
    return null;
  };

  onImageFailure = () => {};

  formatDate = input => {
    let d = new Date(input);
    return dateFormat(d, "mm/dd/yyyy h:MM:ss TT");
  };

  render() {
    let { article } = this.props;
    let articleTitle = this.cleanText(article.title, 28);
    let articleContent = this.cleanText(article.content, 175);
    return (
      <Card
        style={{ padding: 5, height: 500 }}
        hoverable
        cover={<ArticleImage source={article.urlToImage} reference={article.url} />}
      >
        <Meta
          title={
            <ArticleTitle
              title={<span title={article.title}>{articleTitle}</span>}
              publishedAt={this.formatDate(article.publishedAt)}
            />
          }
          description={
            <ArticleExcerpt
              content={<span title={article.content}>{articleContent}</span>}
            />
          }
        ></Meta>
      </Card>
    );
  }
}
