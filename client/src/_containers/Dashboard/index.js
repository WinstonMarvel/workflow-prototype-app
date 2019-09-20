import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '_containers/Dashboard/Dashboard.css';
import Header from '_components/Header';
import { newPost } from '_actions/PostActions';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(formType){
    newPost(formType);
    this.props.history.push("/initial-details");
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <article id="main-col" className="mt-5 pt-5">
            <div className="boxes d-flex justify-content-between w-75 mx-auto flex-wrap">
              <div className="card mx-5 mb-5">
                <div className="card-body">
                  <h5 className="card-title">EBP Form</h5>
                  <p className="card-text">Choose this to rate a new EBP blog</p>
                  <a href="javascript:void(0)" onClick={ () => { this.handleClick("EBP"); } }>Create New</a>
                </div>
              </div>
              <div className="card mx-5 mb-5">
                <div className="card-body">
                  <h5 className="card-title">TBP Form</h5>
                  <p className="card-text">Choose this to rate a new EBP blog</p>
                  <a href="javascript:void(0)" onClick={ () => { this.handleClick("TBP"); } }>Create New</a>
                </div>
              </div>
              <div className="card mx-5">
                <div className="card-body">
                  <h5 className="card-title">Excel Export</h5>
                  <p className="card-text">Choose to export an existing entry</p>
                  <Link to = "/export" >Create Export</Link>
                </div>
              </div>
              <div className="card mx-5">
                <div className="card-body">
                  <h5 className="card-title">Report</h5>
                  <p className="card-text">Choose this to see a data report</p>
                  <Link to = "/report" >Get Report</Link>
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
