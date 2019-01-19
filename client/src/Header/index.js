import React from 'react';
import {Component} from 'react';
import './index.css';

class Header extends Component {
  render() {
    return (
	    <header>
          <div className="container-fluid mw-1500">
            <div className="row justify-content-between">
              <a href="/" className="logo text-center text-white">Rubrik Tool</a>
              <div className="nav-main-wrap pt-5 pb-1">
                <nav id="nav-main" className="navbar navbar-expand-lg pl-0 pr-0" role="navigation">
                    <ul className="w-100 navbar-nav justify-content-between d-flex ">
	                    <li className="nav-item"><a className="nav-link" href="#">Dashboard</a></li>
	                    <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
	                    <li className="nav-item"><a className="nav-link" href="#">Logout</a></li>
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
