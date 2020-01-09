import React from "react";

import { Layout, Menu, Spin } from "antd";
const { Sider } = Layout;

export default class NewsSource extends React.Component {
  onSourceSelect = source => {
    let sourceId = source.key;
    this.props.getArticlesBySource(sourceId);
  };

  render() {
    let { sources, isLoading } = this.props;
    return (
      <Sider width={300} style={{ background: "#fff" }}>
        {isLoading ? (
          <center>
            <Spin style={{ padding: 25 }} tip="Loading..."></Spin>
          </center>
        ) : (
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0
            }}
          >
            {sources.map(source => {
              return (
                <Menu.Item onClick={this.onSourceSelect} key={source.id}>
                  {source.name}
                </Menu.Item>
              );
            })}
          </Menu>
        )}
      </Sider>
    );
  }
}
