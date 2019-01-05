import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../Login';
import Dashboard from '../Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/login' component={Login} />
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App; 
