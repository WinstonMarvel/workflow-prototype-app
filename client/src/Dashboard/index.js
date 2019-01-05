import React, { Component } from 'react';
import Login from '../Login';
import './Dashboard.css';
import icon from '../Assets/iconAssesment.svg';

class Dashboard extends Component {
  render() {
    return (
        <div className="Dashboard">
          <header className="Dashboard-header">
            <img src={icon} className="Dashboard-logo" alt="logo" />
            <a
              className="Dashboard-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
  }
}

export default Dashboard;
