import React from "react";

import placeholder from "../assets/images/placeholder.jpg";

export default class ArticleImage extends React.Component {
  onImageError = ev => {
    ev.target.src = placeholder;
  };

  render() {
    return (
      <img
        height={250}
        src={this.props.source}
        ref={this.props.reference}
        onError={this.onImageError}
      />
    );
  }
}
