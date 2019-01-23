import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../Login';
import Dashboard from '../Dashboard';
import Settings from '../Settings';
import Signup from '../Login/Signup';
import Content from '../Content';
import './App.css'; 
import appDataStore from '../_stores/AppDataStore';
import Loader from 'react-loader-spinner';

class App extends Component {
  constructor(props){
    super(props);
    this.state = appDataStore.getAppState();
    this.getAppState = this.getAppState.bind(this);
  }

  componentWillMount(){
    appDataStore.on('change', this.getAppState);
  }

  getAppState(){
    this.setState(appDataStore.getAppState());
  }

  render() {
    if(this.state.loading){
      return (
        <div class="mx-auto d-table" style={{marginTop: '40vh'}}>
          <Loader type="Puff" color="#00BFFF" height="100" width="100" />
        </div>
      ); 
    }
    else if(!this.state.isLoggedIn){
      return (<Login />);
    }
    else{
      return (
        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/tasks' component={Content} />
              <Route path='/settings' component={Settings} />
              <Route path='/signup' component={Signup} />
            </Switch>
        </BrowserRouter>
      )
    }
  }
}

export default App; 
