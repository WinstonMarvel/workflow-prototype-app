import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../Login';
import Dashboard from '../Dashboard';
import Settings from '../Settings';
import Signup from '../Login/Signup';
import Content from '../Content';
import './App.css'; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/tasks' component={Content} />
            <Route path='/login' component={Login} />
            <Route path='/settings' component={Settings} />
            <Route path='/signup' component={Signup} />
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App; 
