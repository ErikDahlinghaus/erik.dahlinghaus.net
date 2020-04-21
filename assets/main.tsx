import "styles/app.scss";

import * as React from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { App } from "./components/app";
import { NotFound } from "./components/not_found";

ReactDom.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("app")
);
