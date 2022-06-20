import React from "react";
import { Switch, Route, Redirect } from "react-router";

import AuthOrApp from "./authOrApp";
import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

export default (props) => (
  <div className="content-wrapper">
    <Switch>
        <Route exact path='/teste' component={Dashboard}/>
        <Route path='/billingCycles' component={BillingCycle}/>
        <Redirect from='*' to='/'/>
    </Switch>
  </div>
);
