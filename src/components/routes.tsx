import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import D3Charts from "./learnD3/rootchart";
import GoogleCharts from "./googleCharts/rootchart";
import ReactHooks from "./reactHooks/react_hooks";
import SplashScreen, { } from "./splashScreen/splashScreen";
import ReactDragAndDrop from './react_beautiful_dnd';
import TreeExample from './react_tree_beard';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch >
          {/* <Route path='/' exact component={D3Charts} /> */}
          <Redirect exact from='/' to="/hooks" />
          <Route path='/d3' exact component={D3Charts} />
          <Route path='/google' exact component={GoogleCharts} />

          {/* <Route path='/dashboard/company/:companyId/:tab' component={DashboardPage} /> */}
          <Route path='/hooks' exact component={ReactHooks} />
          <Route path='/react/dnd' exact component={ReactDragAndDrop} />
          <Route path='/react/tree' exact component={TreeExample} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
