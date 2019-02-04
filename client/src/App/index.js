import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../Login';
import Dashboard from '../Dashboard';
import Header from '../Header';
import Settings from '../Settings';
import Signup from '../Login/Signup';
import InitialDetails from '../_containers/InitialDetails';
import EBP from '../_containers/EBP';
import Export from '../_containers/Export';
import TBP from '../_containers/TBP';
import './App.css'; 
import appDataStore from '../_stores/AppDataStore';
import { checkToken, resetApp } from '../_actions/AppActions';
import Loader from 'react-loader-spinner';

class App extends Component {
  constructor(props){
    super(props);
    this.state = appDataStore.getAppState();
    this.getAppState = this.getAppState.bind(this);
    this.state.submissionSuccess = null;
  }

  componentWillMount(){
    appDataStore.on('change', this.getAppState);
    checkToken();
  }

  getAppState(){
    this.setState(appDataStore.getAppState());
  }

  render() {
    if(this.state.error){
      return (
            <div class="mx-auto d-table" style={{marginTop: '40vh'}}>
              <div class="alert alert-danger" role="alert">
                <strong>Errors encountered:</strong> <br/>
                { JSON.stringify(this.state.error) } <br/>
                <a href="javascript:void(0)" onClick={ resetApp } >Click to return to app</a>
              </div>
            </div>
      );
    }
    if(this.state.submissionSuccess){
      return (
          <div class="mx-auto d-table" style={{marginTop: '40vh'}}>
            <div class="alert alert-success" role="alert">
              <strong>Successfully added:</strong> <br/>
              <a href="javascript:void(0)" onClick={ resetApp } >Click to return to app</a>
            </div>
          </div>
      );
    }
    else if(this.state.loading){
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
              <Route exact path='/initial-details' component={ InitialDetails } />
              <Route exact path='/ebp' component={ EBP } />
              <Route exact path='/tbp' component={ TBP } />
              <Route exact path='/export' component={ Export } />
              <Route path='/settings' component={ Settings } />
              <Route path='/signup' component={ Signup } />
            </Switch>
        </BrowserRouter>
      )
    }
  }
}

export default App; 
