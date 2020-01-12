import React from "react";

import { Layout, Menu, Spin } from "antd";
const { Sider } = Layout;

const SourceList = props => (
  <div className="source-list">
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      className="menu"
    >
      {props.sources.map(source => {
        return (
          <Menu.Item onClick={props.onSourceSelect} key={source.id}>
            {source.name}
          </Menu.Item>
        );
      })}
    </Menu>
  </div>
);

export default class Source extends React.Component {
  onSourceSelect = source => {
    let sourceId = source.key;
    this.props.getArticlesBySource(sourceId);
  };

  render() {
    let { sources, isLoading } = this.props;
    return (
      <Sider id="sider">
        <React.Fragment>
          {isLoading ? (
            <center>
              <Spin className="loader" tip="Loading..." />
            </center>
          ) : (
            <SourceList
              sources={sources}
              onSourceSelect={this.onSourceSelect}
            />
          )}
        </React.Fragment>
      </Sider>
    );
  }
}
