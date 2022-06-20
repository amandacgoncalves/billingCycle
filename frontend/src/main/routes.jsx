import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import AuthOrApp from "./authOrApp";
import Dashboard2 from "../dashboard2/dashboard2";
import BillingCycle from "../billingCycle/billingCycle";

export default (props) => (
  <Router history={hashHistory}>
    <Route path="/" component={AuthOrApp}>
      <IndexRoute component={Dashboard} />
    </Route>
    <Route path="/billingCycles" component={BillingCycle} />
    <Redirect from="*" to="/" />
  </Router>
);
