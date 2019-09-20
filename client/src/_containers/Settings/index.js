import React, {Component} from 'react';
import './Settings.css';

class Settings extends Component{
    render(){
        return(
            <div className="container">
                <div className="bio login-form align-center p-4 mx-auto">
                    <img src="http://localhost:8080/public/default.svg" alt="User Avatar" className="avatar" />
                    <h5 className="name">Winston Jude</h5>
                    <p>
                        <span className="email">winston@test.com</span>
                        <span className="access">User</span>
                    </p>
                </div>
                <form action="javascript:void(0)" className="update-form login-form align-center p-4 mx-auto">
                    <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <input type="text" className="form-control" name="Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" className="form-control" name="Email"/>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary px-5 mt-3"> Update </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Settings;