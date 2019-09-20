import React, { Component } from 'react';
import './Login.css';
import icon from 'Assets/iconLogin.svg';
import { resetPassword } from '_actions/AppActions';

class Reset extends Component {
    constructor(props){
        super(props);
        this.state = {
            newPassword: null,
            confirmPassword: null,
            valid: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateData = this.validateData.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value }, () => {
            this.validateData();
        });
    }

    validateData(){
        if(this.state.newPassword === this.state.confirmPassword){
            this.setState({
              valid: true
            });
        }
        else{
          this.setState({
            valid: false
          });
        }
    }

    handleSubmit = () => {
        if(this.state.valid)
            resetPassword(this.state.newPassword);
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={ e => { e.preventDefault() } } className="login-signup-form align-center p-4 mx-auto">
                    <img src={icon} alt="Avatar" className="mx-auto d-block mt-3 mb-5 avatar"/>
                    {/* <div className="form-group">
                        <input type="name" className="form-control" placeholder="Name" name="Email" id="email"/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email Address" name="Email" id="email"/>
                    </div> */}
                    {
                        this.state.valid? 
                        <div className="alert alert-primary" role="alert">
                        Click Reset Password to reset. Please note: You will be logged out of the current session.
                        </div> : 
                        <div className="alert alert-danger" role="alert">
                        Both passwords should match
                        </div>
                    }
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="New Password" name="Password" id="newPassword"  onChange = { this.handleChange }  value = {this.state.newPassword} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Confirm password" name="Password" id="confirmPassword"  onChange = { this.handleChange } value = {this.state.confirmPassword} />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary px-5 mt-3" onClick = { this.handleSubmit }> Reset Password </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Reset;