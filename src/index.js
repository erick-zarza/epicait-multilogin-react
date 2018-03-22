import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute,
  BrowserHistory,
  Switch
} from "react-router-dom";
import "antd/dist/antd.css";
import App from "./App";
import Home from "./views/home";
import SignIn from "./views/signIn";
import SignUp from "./views/signUp";
import completeProfileCard from "./views/completeProfileCard";
import Dashboard from "./views/dashboard";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={"/signin"} component={SignIn} />
        <Route path={"/signup"} component={SignUp} />
        <Route path={"/profilecard"} component={completeProfileCard} />
        <Route path={"/dashboard"} component={Dashboard} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);
