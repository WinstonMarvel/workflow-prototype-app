import React, { Component } from 'react';
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
                  <a href="/tasks">Create New</a>
                </div>
              </div>
              <div class="card mx-5">
                <div class="card-body">
                  <h5 class="card-title">TBP Form</h5>
                  {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                  <p class="card-text">Choose this to rate a new EBP blog</p>
                  <a href="/login">Create New</a>
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
