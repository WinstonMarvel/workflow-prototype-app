import React, { Component } from 'react';
import './Login.css';
import icon from '../Assets/iconLogin.svg';

class Login extends Component {
    render() {
        return(
            <div className="container">
                <form action="javascript:void(0)" className="login-form align-center p-4 mx-auto">
                    <img src={icon} class="mx-auto d-block mt-3 mb-5 login-icon"/>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email Address" name="Email" id="email"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" name="Password" id="password"/>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary px-5 mt-3"> Login </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;