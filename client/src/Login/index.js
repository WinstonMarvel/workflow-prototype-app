import React, { Component } from 'react';
import './Login.css';
import icon from '../Assets/iconLogin.svg';
import { login } from '../_actions/AppActions';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: null,
            password: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.doLogin = this.doLogin.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value 
        });
    }

    doLogin(e){
        e.preventDefault(); login(this.state.username, this.state.password) 
    }

    render() {
        return(
            <div className="container">
                <form action="javascript:void(0)" className="login-form align-center p-4 mx-auto">
                    <img src={icon} className="mx-auto d-block mt-3 mb-5 login-icon"/>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email Address" name="username" id="email" value={ this.state.username } onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" name="password" id="password" value={ this.state.password } onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary px-5 mt-3" onClick={ (e) => this.doLogin(e) }> Login </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;