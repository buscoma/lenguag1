import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./Containers/Home";
import SignIn from "./Containers/SignIn";
import SignUp from "./Containers/SignUp";
import LandingPage from "./Containers/LandingPage";
import RankingPage from "./Containers/RankingPage";
import LengGameOne from "./Containers/LengGameOne";
import PalabrasPerdidas from "./Containers/PalabrasPerdidas";
var hist = createBrowserHistory();


ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/sign_in" component={SignIn} />
      <Route path="/sign_up" component={SignUp} />
      <Route path="/landing_page" component={LandingPage} />
      <Route path="/ranking_page" component={RankingPage} />
      <Route path="/leng_game_one" component={LengGameOne} />
      <Route path="/palabras_p" component={PalabrasPerdidas} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
