import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';
import './Dashboard.css';
import Header from '../Header';
import { newPost } from '../_actions/PostActions';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(formType){
    newPost(formType);
    this.props.history.push("/initial-details");
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <article id="main-col" className="mt-5 pt-5">
            <div className="boxes d-flex justify-content-between w-75 mx-auto flex-wrap">
              <div class="card mx-5 mb-5">
                <div class="card-body">
                  <h5 class="card-title">EBP Form</h5>
                  <p class="card-text">Choose this to rate a new EBP blog</p>
                  <a href="javascript:void(0)" onClick={ () => { this.handleClick("EBP"); } }>Create New</a>
                </div>
              </div>
              <div class="card mx-5 mb-5">
                <div class="card-body">
                  <h5 class="card-title">TBP Form</h5>
                  <p class="card-text">Choose this to rate a new EBP blog</p>
                  <a href="javascript:void(0)" onClick={ () => { this.handleClick("TBP"); } }>Create New</a>
                </div>
              </div>
              <div class="card mx-5">
                <div class="card-body">
                  <h5 class="card-title">Excel Export</h5>
                  <p class="card-text">Choose to export an existing entry</p>
                  <Link to = "/export" >Create Export</Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Dashboard;
