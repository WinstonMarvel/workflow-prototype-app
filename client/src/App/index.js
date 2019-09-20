import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '_containers/Login';
import Dashboard from '_containers/Dashboard';
import Header from '_components/Header';
import Settings from '_containers/Settings';
import Reset from '_containers/Login/Reset';
import InitialDetails from '_containers/InitialDetails';
import EBP from '_containers/EBP';
import Export from '_containers/Export';
import Report from '_containers/Report';
import TBP from '_containers/TBP';
import './App.css'; 
import appDataStore from '_store/AppDataStore';
import { checkToken, resetApp } from '_actions/AppActions';
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
      let errObj = this.state.error;
      try{
        errObj = JSON.parse(this.state.error);
      }
      catch(e){
        console.log(e);
      }
      if(errObj.errors && errObj.errors["postInfo.requestId"].properties.type === "unique"){ // Force override for non unique posts
        return (
              <div className="mx-auto d-table" style={{marginTop: '40vh'}}>
                <div className="alert alert-danger" role="alert">
                  <strong>Errors encountered:</strong> <br/>
                  This post has been previously entered and is not unique. If you need to override make sure to click the override check box before submitting<br/>
                  <a href="javascript:void(0)" onClick={ resetApp } >Return to the application</a>
                </div>
              </div>
        );
      }
      else{
        return (
              <div className="mx-auto d-table" style={{marginTop: '40vh'}}>
                <div className="alert alert-danger" role="alert">
                  <strong>Errors encountered:</strong> <br/>
                  { JSON.stringify(errObj.message) } <br/>
                  { JSON.stringify(errObj) } <br/>
                  <a href="javascript:void(0)" onClick={ resetApp } >Click to return to app</a>
                </div>
              </div>
        );
      }
    }
    if(this.state.submissionSuccess){
      return (
          <div className="mx-auto d-table" style={{marginTop: '40vh'}}>
            <div className="alert alert-success" role="alert">
              <strong>Successfully added:</strong> <br/>
              <a href="javascript:void(0)" onClick={ resetApp } >Click to return to app</a>
            </div>
          </div>
      );
    }
    else if(this.state.loading){
      return (
        <div className="mx-auto d-table" style={{marginTop: '40vh'}}>
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
              <Route exact path='/report' component={ Report } />
              <Route path='/settings' component={ Settings } />
              <Route path='/reset-password' component={ Reset } />
            </Switch>
        </BrowserRouter>
      )
    }
  }
}

export default App; 
