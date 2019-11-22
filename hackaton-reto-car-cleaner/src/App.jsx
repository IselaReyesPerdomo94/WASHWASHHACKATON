import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {RegisterEmployee, RegisterUser, Welcome, Home, Rank} from './views';
import './App.css';

function App() {
    
  return (
    
    <Router basename={window.location.pathname || ''}>
      <Switch>
        <Route exact path = "/" render = {props => <Welcome/>}></Route> */}
        <Route exact path = "/registerUser" render = {props => <RegisterUser/>}></Route>
        <Route exact path="/registerEmployee" render={props => <RegisterEmployee/>}></Route>
        <Route exact path="/home" render={props => <Home/>}></Route>
        <Route exact path="/rank" render={props => <Rank/>}></Route>
      </Switch>

    </Router>
  );
}

export default App;
