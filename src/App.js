import React from 'react';
// import logo from './logo.png';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Body from './components/Body';
import Register from './components/Register';
import Footer from './components/Footer';
import './css/tailwindcss.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formregister from './components/Formregister';
import DashboardIndex from './components/DashboardIndex';
import Dashboard from './components/Dashboard';

import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link
} from "react-router-dom";


function App() {
  return (
    
    
    <Router>
      <Switch>
        <Route exact path="/">
          <Body />

        </Route>

        

        <Route path="/about-us">
          <About />
          
        </Route>
        <Route path="/User.signup">
          <Formregister/>
        </Route>
        <Route path="/Dashboard">
          
         <Dashboard/>
        </Route>
      </Switch>
    </Router>

    // <div className="App">
    //    <Navbar/>
     
    //   <Body/>
      
    //   <Footer/>
    // </div>

  );
}

export default App;
