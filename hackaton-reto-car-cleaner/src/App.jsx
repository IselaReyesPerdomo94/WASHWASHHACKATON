import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {RegisterEmployee, RegisterUser, Welcome, Home, Service, Credit, Information, Confirm, Rank } from './views';
import './App.css';

function App() {
    
  return (
    
    <Router basename={window.location.pathname || ''}  >
      <Switch>
        <Route exact path = "/" render = {props => <Welcome/>}></Route> 
        <Route exact path = "/registerUser" render = {props => <RegisterUser/>}></Route>
        <Route exact path="/registerEmployee" render={props => <RegisterEmployee/>}></Route>
        <Route exact path="/home" render={props => <Home/>}></Route>
        <Route exact path="/rank" render={props => <Rank/>}></Route>
        <Route exact path="/service" render={props => <Service/>}></Route>
        <Route exact path="/confirmation" render={props => <Confirm/>}></Route>
        <Route exact path="/creditCard" render={props => <Credit/>}></Route>
        <Route exact path="/information" render={props => <Information/>}></Route>
      </Switch>

    </Router>
  );
}

export default App;
