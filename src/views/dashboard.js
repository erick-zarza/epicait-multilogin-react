import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
  }
  componentWillMount() {
    document.title = "Dashboard";
  }
  render() {
    return (
      <Layout>
        <Content style={{ padding: "100px 50px" }}>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <Menu.Item key="1">Dashboard</Menu.Item>
                <Menu.Item key="2">Payment Options</Menu.Item>
                <Menu.Item key="3">Account Info</Menu.Item>
                <Menu.Item key="4">Settings</Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 600 }}>
              <h1>User Dashboard</h1>
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

export default Dashboard;
