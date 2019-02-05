import React, { Component } from 'react';
import Header from '../Header';
import { exportPostData } from '../_actions/PostActions';

class Export extends Component {
  constructor(props){
    super(props);
    this.state = {
        requestId: "",
        postType: "ebp"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    if(e.target.id == "select-post-type"){
      this.setState( { postType : e.target.value } );
    }
    else if(e.target.id == "export-request"){
      this.setState( { requestId : e.target.value } );
    }
  }

  handleSubmit(){
    exportPostData( this.state.postType, this.state.requestId );
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <article id="main-col" className="w-50 mt-5 pt-5">
            <form onSubmit = { this.handleSubmit } >
              <div className="input-group mb-3">
                  <div className="input-group-prepend">
                      <span className="input-group-text">Blog Type: &nbsp;</span>
                  </div>
                  <select name="post-type" id="select-post-type" className="form-control" onChange = { this.handleChange } value = { this.state.postType } required>
                    <option value="ebp">EBP</option>
                    <option value="tbp">TBP</option>
                  </select>
              </div>
              <div className="input-group mb-3">
                  <div className="input-group-prepend">
                      <span className="input-group-text">Request ID:</span>
                  </div>
                  <input type="text" value={ this.state.requestId } onChange= { this.handleChange } className="form-control" id="export-request" required />
              </div>
              <div className="form-group float-right">
                  <button type="submit" className="btn btn-success" >Export</button> 
              </div>
            </form>
          </article>
        </div>
      </div>
    );
  }
}

export default Export;
