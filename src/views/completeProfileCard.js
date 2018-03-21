import React, { Component } from "react";
import { Form, Layout, Row, Col, Button, Card } from "antd";
import { browserHistory, Link } from "react-router-dom";
import profileCardForm from "../components/signIn/profileCardForm";

const { Content } = Layout;
const ProfileCard = Form.create()(profileCardForm);

class completeProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // This binding is necessary to make `this` work in the callback
  }
  componentWillMount() {
    document.title = "Complete your Profile Card";
  }
  render() {
    return (
      <Content className="container center">
        <Row type={"flex"} justify={"space-between"} gutter={16}>
          <Col xs={1} sm={3} md={6} lg={8} />
          <Col xs={22} sm={18} md={12} lg={8}>
            <Card title="PROFILE CARD" style={{ width: "100%", padding: 20 }}>
              <ProfileCard />
            </Card>
          </Col>
          <Col xs={1} sm={3} md={6} lg={8} />
        </Row>
      </Content>
    );
  }
}

export default completeProfileCard;
