import React from "react";

import { Layout, Menu, Spin, Input, Divider } from "antd";
const { Sider } = Layout;
const { Search } = Input;

const SourceSearch = props => (
  <Search
    placeholder="Search"
    onSearch={props.searchSource}
    className="search"
  ></Search>
);

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
    let { sources, isLoading } = this.props;
    let { filteredSources } = this.state;
    return (
      <Sider width={300} id="sider">
        <React.Fragment>
          <SourceSearch searchSource={this.searchSource} />
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
