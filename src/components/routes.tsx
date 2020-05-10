import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import D3Charts from "./learnD3/rootchart";
import GoogleCharts from "./googleCharts/rootchart";
import ReactHooks from "./reactHooks/react_hooks";
import SplashScreen, { } from "./splashScreen/splashScreen";

class Routes extends React.Component {
  render() {
    return (
        <BrowserRouter>
        <Switch >
            {/* <Route path='/' exact component={D3Charts} /> */}
            <Route path='/d3' exact component={D3Charts} />
            <Route path='/google' exact component={GoogleCharts} />
            {/* <Redirect exact from='/dashboard/company/:companyId' to="/dashboard/company/:companyId/introduction" />  */}
            {/* <Route path='/dashboard/company/:companyId/:tab' component={DashboardPage} /> */}
            <Route path='/hooks' exact component={ReactHooks} />>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
