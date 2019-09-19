import React, { Component } from 'react';
import Header from '_components/Header';
import Sidebar from '_components/Sidebar';
import PostDataStore from '_stores/PostDataStore';
import AppDataStore from '_stores/AppDataStore';
import { updatePost, submitPost, updatePostData } from '_actions/PostActions';
import DatePicker from 'react-date-picker';

class InitialDetails extends Component {
  constructor(props){
    super(props);
    this.state = PostDataStore.getPostData();
    this.formSubmit = this.formSubmit.bind(this);
    this.getPostData = this.getPostData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateData = this.validateData.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  componentWillMount(){
    PostDataStore.reCalculate();
    PostDataStore.on('change', this.getPostData);
    this.postType = AppDataStore.getCurrentFormType();
    let date = localStorage.getItem('defaultDate');
    if( date )
      updatePostData( "postInfo", "postDate",  new Date(date) );
  }
 
  componentWillUnmount(){
      PostDataStore.removeListener('change', this.getPostData);
  }

  getPostData(){
    this.setState(PostDataStore.getPostData());
  }

  formSubmit(event){ 
    event.preventDefault();
    if(this.state.valid){
      this.props.history.push('/' + this.postType.toLowerCase())
    }
  }

  handleChange(event){
    updatePostData("postInfo", event.target.name,  event.target.value );
  }

  validateData(){
      if(this.state.postInfo.vendorName && this.state.postInfo.clientName && this.state.postInfo.requestId && this.state.postInfo.postTitle && this.state.postInfo.postDate){
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

  handleDate = date => {
    date.setHours(12); // Fix for reporting error
    updatePostData( "postInfo", "postDate",  date );
    localStorage.setItem( 'defaultDate', date );
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid mw-1500">
          <div className="row d-flex justify-content-between">
            <article id="main-col" className="mt-5 pt-5">
              <h2>Post Details:</h2>
              {
                this.state.valid? 
                <div className="alert alert-primary" role="alert">
                All fields have been filled, click next to begin
                </div> : 
                <div className="alert alert-danger" role="alert">
                  Please ensure that all fields are filled
                </div>
              }
              <form onChange={this.validateData}>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Vendor Name:</label>
                  <input type="text" name="vendorName" onChange={ this.handleChange } className="form-control" id="formGroupExampleInput" value={this.state.vendorName} />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Date of Post:</label>
                  <DatePicker onChange={this.handleDate} value={this.state.postInfo.postDate}/>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Client Name:</label>
                  <input name="clientName"  onChange={ this.handleChange }  type="text" className="form-control" id="formGroupExampleInput"  value={this.state.clientName} />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Request ID:</label>
                  <input name="requestId"  onChange={ this.handleChange }  type="text" className="form-control" id="formGroupExampleInput"  value={this.state.requestId} />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Post Title:</label>
                  <input name="postTitle"  onChange={ this.handleChange }  type="text" className="form-control" id="formGroupExampleInput"  value={this.state.postTitle} />
                </div>
                <button type="button" onClick={ this.formSubmit } className="btn btn-primary mt-5 mb-5">Next</button>
              </form>
            </article>
          </div>
        </div>
      </div>
	    
    );
  }
}

export default InitialDetails;
