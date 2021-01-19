import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "index.css";
// others
import Landing from "./views/Landing";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <Landing {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
