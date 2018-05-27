import React, { Component } from "react";
import { Form, Layout, Row, Col, Button, Card } from "antd";
import { browserHistory, Link } from "react-router-dom";

const { Content } = Layout;

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginIcon: (
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: "4px 0px 0px 4px"
          }}
        >
          <svg viewBox="0 0 512 512" style={{ fill: "white" }}>
            <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
          </svg>
        </div>
      ),
      facebookIcon: (
        <div
          style={{
            width: 38,
            height: 38,
            background: "#3d5a96",
            borderRadius: "8px 0px 0px 8px",
            float: "left",
            display: "inline-block"
          }}
        >
          <svg
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="20px"
            height="38px"
            viewBox="0 0 510 510"
            style="enable-background:new 0 0 510 510;"
            style={{ fill: "white" }}
          >
            <path
              d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z     M433.5,51v76.5h-51c-15.3,0-25.5,10.2-25.5,25.5v51h76.5v76.5H357V459h-76.5V280.5h-51V204h51v-63.75    C280.5,91.8,321.3,51,369.75,51H433.5z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      )
    };
    // This binding is necessary to make `this` work in the callback
  }
  componentWillMount() {
    document.title = "Sign Up";
  }
  render() {
    return (
      <Content className="container center">
        <Row type={"flex"} justify={"space-between"} gutter={16}>
          <Col xs={0} sm={3} md={6} lg={8} />
          <Col xs={22} sm={18} md={12} lg={8}>
            <Card title="SIGNIN" style={{ width: "100%", padding: 20 }}>
              <img
                src={require("../img/security.png")}
                role="presentation"
                width={140}
                style={{ marginBottom: 10 }}
              />
              <p>
                <b>Trust comes first</b>
                <br />We ask all members to verify their IDs by connecting a
                social account.
              </p>
              <Link to="/dashboard">
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#3d5a96",
                  borderColor: "#3d5a96",
                  color: "white",
                  padding: 0,
                  border: "none",
                  height: 38,
                  borderRadius: 4
                }}
              >
                <Row type={"flex"} gutter={24} style={{ margin: 0 }}>
                  <Col span={2} style={{ padding: 0 }}>
                    {this.state.facebookIcon}
                  </Col>
                  <Col span={22} style={{ padding: "8px 28px 8px 0px" }}>
                    Continue with Facebook
                  </Col>
                </Row>
              </Button>
              </Link>
              <Link to="/dashboard">
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#0077B5",
                  borderColor: "#0077B5",
                  color: "white",
                  padding: 0,
                  border: "none",
                  height: 38,
                  borderRadius: 4,
                  marginTop: 8
                }}
              >
                <Row type={"flex"} gutter={24} style={{ margin: 0 }}>
                  <Col span={2} style={{ padding: 0 }}>
                    {this.state.loginIcon}
                  </Col>
                  <Col span={22} style={{ padding: "8px 28px 8px 0px" }}>
                    Continue with LinkedIn
                  </Col>
                </Row>
              </Button>
              </Link>
              <hr style={{ border: "0.5px solid #e8e8e8" }} />
              <p>
                Don’t have a social profile? Email us at <a>name@example.com</a>
              </p>
            </Card>
          </Col>
          <Col xs={0} sm={3} md={6} lg={8} />
        </Row>
      </Content>
    );
  }
}

export default SignUp;
