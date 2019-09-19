import React from 'react';
import {Component} from 'react';
import './index.css';
import PostDataStore from '_stores/PostDataStore';

class Sidebar extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }
  
  componentWillMount(){
    this.setState(PostDataStore.getPostData());
  }

  render() {
    return (
	    <aside>
          <div className="section-1">
            <h4 className="section-title pl-2 mt-5 mb-3">
              Overview
            </h4>
            <div className="d-flex justify-content-between">
              <div className="pl-2 pr-2">
                <ul className="project-dates font-sm">
                  <li>Vendor Name: <span>{ this.state.postInfo.vendorName }</span></li>
                  <li>Date of Post: <span>{ this.state.postInfo.postDate.toString() }</span></li>
                  <li>Client Name: <span>{ this.state.postInfo.clientName }</span></li>
                  <li>Request ID: <span>{ this.state.postInfo.requestId }</span></li>
                  <li>Post Title: <span>{ this.state.postInfo.postTitle }</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="section-2">
            <h4 className="section-title pl-2 mt-5 mb-3">
              Scale Definitions for Scored Criteria
            </h4>
            <div className="section-details-1">
              <div className="d-flex justify-content-between">
                <div className="pl-2 pr-2">
                  <ul className="project-dates font-sm">
                    <li>2 : <span>Strong example of blog content</span></li>
                    <li>1 : <span>Meets best practices</span></li>
                    <li>0 : <span>Does not meet best practices</span></li>
                    <li> <br/> </li>
                    <li>Yes : <span>Criteria met - 1 point</span></li>
                    <li>No : <span>Criteria not met - 0 points</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section-2">
            <h4 className="section-title pl-2 mt-5 mb-3">
              Scoring
            </h4>
            <div className="section-details-1">
              <div className="d-flex justify-content-between">
                <div className="pl-2 pr-2">
                  <ul className="project-dates font-sm">
                    <li>90% or higher : <span>Achieved</span></li>
                    <li>72% - 89.99% : <span>Partially Achieved</span></li>
                    <li>71.99% or lower : <span>Did Not Achieve</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </aside>
    );
  }
}

export default Sidebar;
