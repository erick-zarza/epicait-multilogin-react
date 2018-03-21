import React, { Component } from "react";
import { Layout, Row, Col, Button, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

class NavHeader extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
  }

  navButtons() {
    //config button for logging in
    const menu = (
      <Menu>
        <Menu.Item>
          {/*<Link>How to create an event on EventKey</Link>*/}
        </Menu.Item>
        <Menu.Item>
          {/*<Link onClick={this.showFeesModal}>Fees</Link>
          <Link to="/contact">Fees</Link>*/}
        </Menu.Item>
        <Menu.Item>
          {/*<Link onClick={this.showFeesModal}>Fees</Link>*/}
          {/*<Link to="/contact">Contact</Link>*/}
        </Menu.Item>
      </Menu>
    );

    return (
      <Row type={"flex"} justify={"space-between"} gutter={16}>
        <Col xs={3} sm={6} md={15} lg={12} xl={12}>
          <Row type={"flex"} gutter={16}>
            <Col>
              <Row type={"flex"} justify={"start"} align={"middle"}>
                <Col xs={0} sm={0} md={24} lg={24} xl={24}>
                  <Link to="/">
                    <img
                      src={
                        "http://marijuanaediblesdenver.com/userfiles/839/images/generic-logo.png"
                      }
                      role="presentation"
                      width={170}
                      style={{ marginRight: 40 }}
                    />
                  </Link>
                </Col>
                <Col xs={1} sm={1} md={0} lg={0} xl={0}>
                  <Link to="/">
                    <img
                      src={
                        "http://marijuanaediblesdenver.com/userfiles/839/images/generic-logo.png"
                      }
                      role="presentation"
                      width={47}
                      style={{ paddingTop: 8 }}
                    />
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          xs={21}
          sm={18}
          md={9}
          lg={6}
          xl={6}
          style={{ textAlign: "right" }}
        >
          <Link to="/signin">
            <Button className={"hide-xs"} style={{ border: "none" }}>
              <b>Log In</b>
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              className={"hide-xs"}
              style={{ border: "none", marginLeft: 10 }}
            >
              <b>Join</b>
            </Button>
          </Link>
        </Col>
      </Row>
    );
  }

  render() {
    let priceContainer = {
      background: "rgba(53, 193, 115, 0.1)",
      borderRadius: 8,
      padding: 8
    };

    return <Header className="navbar">{this.navButtons()}</Header>;
  }
}

export default NavHeader;
