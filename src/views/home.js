import React, { Component } from "react";
import { Layout, Row, Col, Button } from "antd";
import { browserHistory, Link } from "react-router-dom";

const { Content } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
  }
  componentWillMount() {
    document.title = "Home";
  }
  render() {
    return (
      <Content id="home-container" className="container center">
        <Row type={"flex"} justify={"space-between"} gutter={16}>
          <h1>
            <b>Welcome to</b>
          </h1>
          <h1 style={{ fontWeight: 200 }}>Login & Payment Platform</h1>
          <Link to="/signup" style={{ margin: "auto" }}>
            <Button type="primary" size="large">
              Join Now
            </Button>
          </Link>
        </Row>
      </Content>
    );
  }
}

export default Home;
