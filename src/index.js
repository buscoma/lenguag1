import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./containers/Home";
import SignIn from "./containers/SignIn"
import SignUp from "./containers/SignUp"
import LandingPage from "./containers/LandingPage"

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/sign_in" component={SignIn} />
      <Route path="/sign_up" component={SignUp} />
      <Route path="/landing_page" component={LandingPage} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
