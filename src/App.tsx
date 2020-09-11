import React, { Fragment } from 'react';
import './App.css';
import MiniDrawer from './components/navComponent/sideNav';
import NavData from './data/navData'


const App: React.FC = () => {
  return (
    <Fragment>
       {/* <Route path='/' exact component={SplashScreen} /> */}
       <MiniDrawer navbar={NavData}/>
          {/* <main id="content" className="content">
        <Routes />
      </main>  */}
    </Fragment>
  );
}

export default App;
