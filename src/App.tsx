import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import SplashScreen, { } from "./components/splashScreen/splashScreen";
import Routes from './components/routes';
import MiniDrawer from './components/navComponent/sideNav';
import { Route } from 'react-router';




const App: React.FC = () => {
  return (
    <Fragment>
       <Route path='/' exact component={SplashScreen} />
       <MiniDrawer/>
      <main id="content" className="content">
        <Routes />
      </main> 
    </Fragment>
  );
}

export default App;
