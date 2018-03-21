import React, { Component } from "react";
import { Layout, LocaleProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import { Link } from "react-router-dom";
import NavHeader from "./components/header";
import Home from "./views/home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <Layout className="App" style={{ backgroundColor: "#FAFAFA" }}>
          <NavHeader />
          {this.props.children || <Home />}
        </Layout>
      </LocaleProvider>
    );
  }
}

export default App;
