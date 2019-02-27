import React, { Component } from 'react';
import './Login.css';
import icon from '../Assets/iconLogin.svg';

class Signup extends Component {
    render() {
        return(
            <div className="container">
                <form action="javascript:void(0)" className="login-signup-form align-center p-4 mx-auto">
                    <img src={icon} className="mx-auto d-block mt-3 mb-5 avatar"/>
                    <div className="form-group">
                        <input type="name" className="form-control" placeholder="Name" name="Email" id="email"/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email Address" name="Email" id="email"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" name="Password" id="password"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Confirm password" name="Password" id="password"/>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary px-5 mt-3"> Signup </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup;