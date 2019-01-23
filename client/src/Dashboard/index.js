import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';
import './Dashboard.css';
import Header from '../Header';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <article id="main-col" className="mt-5 pt-5">
            <div className="boxes d-flex justify-content-between w-75 mx-auto">
              <div class="card mx-5">
                <div class="card-body">
                  <h5 class="card-title">EBP Form</h5>
                  {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                  <p class="card-text">Choose this to rate a new EBP blog</p>
                  <Link to="/tasks">Create New</Link>
                </div>
              </div>
              <div class="card mx-5">
                <div class="card-body">
                  <h5 class="card-title">TBP Form</h5>
                  {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                  <p class="card-text">Choose this to rate a new EBP blog</p>
                  <Link to="/login">Create New</Link>
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
