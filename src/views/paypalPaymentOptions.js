import React, { Component } from "react";
import { Form, Layout, Menu, Breadcrumb, Icon, Button, Modal, Row, Col, Select, Input } from "antd";
import { Link } from "react-router-dom";
import BankAccountForm from "../components/payment/bankAccountForm";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider} = Layout;
const StripeForm = Form.create()(BankAccountForm);
const Option = Select.Option;

class PaypalPaymentOptions extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false }
    // This binding is necessary to make `this` work in the callback
  }
  componentWillMount() {
    document.title = "Payment Options";
  }

    showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  re
  render() {
    return (
      <Layout>
        <Content style={{ padding: "100px 50px" }}>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["2"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <Menu.Item key="1">
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">Payment Options</Menu.Item>
                <Menu.Item key="3">Account Info</Menu.Item>
                <Menu.Item key="4">Settings</Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 600 }}>
              <h1>Payment Options</h1>
              <hr/>
              <h3>Processing attendee's payments</h3>
              <br/>
              <Row>
                  <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <p>Currency: U.S. Dollars $</p>
                  </Col>
                  <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                    <p>Payout Country: United States</p>
                  </Col>
                  <br/>
                  <Col xs={24} sm={24} md={20} lg={20} xl={20}>
                  <p>Select an available payment processor to accept money from attendees. After your first transaction, you will not be able to change the payment processor for this event.</p>
                  </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Select defaultValue="paypal" style={{ width: "100%" }}>
                        <Option value="stripe">Stripe</Option>
                        <Option value="paypal">Paypal</Option>
                    </Select>
                </Col>
                <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                    <img src={require("../img/payment_options.png")} role="presentation" width={200} />
                </Col>
              </Row>
              <Row>
                  <Col>
                    <p>Paypal charges payment processing fees.<br/>A separate monthly invoice will be sent to you for service fees.<br/>Certain features are not available to events using PayPal.</p>
                  </Col>
              </Row>
              <Row>
                <Col className="formColumn" xs={24} sm={24} md={24} lg={24} xl={24}>
                    <b>PAYPAL PREMIER OR BUSINESS ACCOUNT EMAIL *</b>
                    <Input placeholder="PayPal email address"/>
                    <p>Don't have one? <a href="https://www.paypal.com/us/webapps/mpp/referral/paypal-express-checkout?partner_id=W9QW5TKUA246E" target="_blank">Set up your PayPal Premier or Business account.</a></p>
                </Col>
              </Row>
              <hr/>
              <Link to="/payment_options">
              <Button type="primary" size="large" style={{ padding: "0px 40px" }}>
                SAVE
              </Button>
              </Link>
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

export default PaypalPaymentOptions;
