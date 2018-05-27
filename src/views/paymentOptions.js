import React, { Component } from "react";
import { Form, Layout, Menu, Breadcrumb, Icon, Button, Modal } from "antd";
import { Link } from "react-router-dom";
import BankAccountForm from "../components/payment/bankAccountForm";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider} = Layout;
const StripeForm = Form.create()(BankAccountForm);

class PaymentOptions extends Component {
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
              <p>Payout Country: United States</p>
              <img src={require("../img/payment_options.png")} role="presentation" width={200} />
              <br/>
              <br/>
              <h3>Receiving payouts</h3>
              <br/>
              <Button icon="plus-circle-o" size="large" onClick={this.showModal}>Add Payout Method</Button>
              <br/>
              <br/>
              <p><Link to="/payment_options_paypal">Switch to PayPal</Link> as your payment processor for this event.</p>
              <Modal
                title="Enter Bank Account Details"
                width={800}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <StripeForm/>
              </Modal>
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

export default PaymentOptions;
