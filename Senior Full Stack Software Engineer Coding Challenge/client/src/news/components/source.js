import React from "react";

import { Layout, Menu, Spin, Input } from "antd";
const { Sider } = Layout;
const { Search } = Input;

export default class Source extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredSources: this.props.sources
    };
  }

  onSourceSelect = source => {
    let sourceId = source.key;
    this.props.getArticlesBySource(sourceId);
  };

  searchSource = searchText => {
    let { sources } = this.props;
    let filteredSources = sources.filter(item => {
      item.name === searchText;
    });
    this.setState({ filteredSources });
  };

  render() {
    let { isLoading } = this.props;
    let { filteredSources } = this.state;
    return (
      <Sider
        width={300}
        style={{
          height: "100%",
          overflowY: "auto",
          overflowX: "hidden",
          background: "#fff"
        }}
      >
        {isLoading ? (
          <center>
            <Spin style={{ padding: 25 }} tip="Loading..."></Spin>
          </center>
        ) : (
          <React.Fragment>
            <Search
              placeholder="Search"
              onSearch={this.searchSource}
              style={{ padding: 5, height: 50 }}
            ></Search>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 0
              }}
            >
              {filteredSources.map(source => {
                return (
                  <Menu.Item onClick={this.onSourceSelect} key={source.id}>
                    {source.name}
                  </Menu.Item>
                );
              })}
            </Menu>
          </React.Fragment>
        )}
      </Sider>
    );
  }
}
