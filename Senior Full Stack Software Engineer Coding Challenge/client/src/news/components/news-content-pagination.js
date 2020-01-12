import React from "react";

import { Pagination, Spin } from "antd";

export default class NewsContentPagination extends React.Component {
  getTotalResult = articles => {
    if (articles) return articles.totalResults;
    return 0;
  };

  render() {
    let { articles, isLoading } = this.props;
    return (
      <React.Fragment>
        {isLoading ? (
          <Spin id="news-content-pagination-loader" />
        ) : (
          <Pagination
            className="news-content-pagination"
            total={this.getTotalResult(articles)}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            pageSize={10}
            defaultCurrent={1}
          />
        )}
      </React.Fragment>
    );
  }
}
