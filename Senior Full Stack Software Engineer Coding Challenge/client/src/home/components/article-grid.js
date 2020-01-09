import React from "react";
import Article from "./article.js";

import { Col, Row } from "antd";

export default class ArticleGrid extends React.Component {
    render() {
        return (
            <Row gutter={25}>
                <Col span={6}>
                    <Article />
                </Col>
                <Col span={6}>
                    <Article />
                </Col>
                <Col span={6}>
                    <Article />
                </Col>
                <Col span={6}>
                    <Article />
                </Col>
            </Row>
        )
    }
}