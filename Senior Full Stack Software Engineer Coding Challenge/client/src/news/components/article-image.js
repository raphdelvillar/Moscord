import React from "react";

export default class ArticleImage extends React.Component {
  render() {
    return (
      <img
        height={250}
        src={this.props.source}
        ref={this.props.reference}
        onError={() => (this.img.src = "../assets/images/placeholder.jpg")}
      />
    );
  }
}
