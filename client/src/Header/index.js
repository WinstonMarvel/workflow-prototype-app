import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { logout } from '../_actions/AppActions';

class Header extends Component {
  render() {
    return (
	    <header>
          <div className="container-fluid mw-1500">
            <div className="row justify-content-between">
            <Link to="/" className="logo text-center text-white">
                <img src="/images/logo.png" alt="FindLaw"/>
              Rubric Tool</Link>
              <div className="nav-main-wrap pt-4 pb-1">
                <nav id="nav-main" className="navbar navbar-expand-lg pl-0 pr-0" role="navigation">
                    <ul className="w-100 navbar-nav justify-content-between d-flex ">
	                    <li className="nav-item"><Link className="nav-link" to="/">Dashboard</Link></li>
	                    {/* <li className="nav-item"><a className="nav-link" href="javascript:void(0)">Settings</a></li> */}
	                    <li className="nav-item"><a className="nav-link" href="javascript:void(0)" onClick = { logout }>Logout</a></li>
                    </ul>  
                </nav>
              </div>
            </div>
          </div>
        </header>
    );
  }
}

export default Header;
