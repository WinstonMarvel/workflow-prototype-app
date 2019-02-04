import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import StandaloneQuestion from '../_components/StandaloneQuestion';
import CategorizedQuestion from '../_components/CategorizedQuestion';
import MultiChoiceQuestion from '../_components/MultiChoiceQuestion';
import StatusBar from '../_components/StatusBar';
import PostDataStore from '../_stores/PostDataStore';
import AppDataStore from '../_stores/AppDataStore';
import { updatePost, submitPost, updatePostData } from '../_actions/PostActions';

import '../_components/index.css';

class Content extends Component { 
  constructor(props){
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
    this.getPostData = this.getPostData.bind(this);
    this.handleChangeSingle = this.handleChangeSingle.bind(this);
    this.handleChangeCategorized = this.handleChangeCategorized.bind(this);
    this.formFinalSubmit = this.formFinalSubmit.bind(this);
  }

  componentWillMount(){
    PostDataStore.reCalculate();
    PostDataStore.on("change", this.getPostData);
    this.getPostData();
    this.setState({confirmSubmission: false});
  }

  componentWillUnMount(){
      PostDataStore.removeListener('change', this.getStatus);
  }

  getPostData(){
    this.setState(PostDataStore.getPostData());
  }

  formSubmit(event){ 
    event.preventDefault();
    this.setState({confirmSubmission: true});
  }
  
  formFinalSubmit(){
    submitPost(PostDataStore.getPostData(), AppDataStore.getCurrentFormType());
  }

  handleChangeSingle(id, value){
    updatePostData( null, id, value );
  }

  handleChangeCategorized(cat, id, value){
      updatePostData( cat, id, value );
  }

  render() {
    let confirmStatus = "confirm-submission d-none";
    if(this.state.confirmSubmission){
      confirmStatus = "confirm-submission";
    }

    if(!this.state.postInfo){
      return <Redirect to='/' />
    }
    
    return (
      <div>
        <Header />
        <div className={confirmStatus}>
            <div className="confirm-box p-4">
              <div className="form-group">
                <p>Are you sure you want to submit these changes?</p>
                <p><span>Total: </span> <strong>{ this.state.total }/31</strong></p>
                <p><span>Score: </span> <strong>{ this.state.score } %</strong></p>
                <p><span>Status: </span> <strong>{ this.state.status }</strong></p>
                <button onClick={ this.formFinalSubmit } className="btn btn-primary mr-2">Yes</button>
                <button onClick={ () => { this.setState( { confirmSubmission: false } ) } } className="btn btn-danger">No</button>
              </div>
            </div>
        </div>
        <div className="container-fluid mw-1500">
          <div className="row d-flex justify-content-between">
            <article id="main-col" className="mt-5 pt-5">
              <StatusBar total={this.state.total} totalPercent={this.state.score} status={this.state.status} totalPossiblePoints={31}></StatusBar>
              <form>
                <h2>Plagiarism/Duplicate Content</h2>
                <CategorizedQuestion category="plagiarism" id="copyscape" handler={ this.handleChangeCategorized } val={ this.state.plagiarism.copyscape }  warning="A 'no' to this question results in automatic failure to achieve, a JIRA ticket should be filed and the blog post should be taken down immediately.">Is the content free of plagiarism/duplicate content based on a Copyscape search?</CategorizedQuestion>
                <CategorizedQuestion category="plagiarism" id="uniqueness" handler={ this.handleChangeCategorized } val={ this.state.plagiarism.uniqueness }>Is the topic or source particularly unique as compared to other articles/blog posts in the practice area? Topic and content should be unique as compared to the recent posts on the main blog landing page.</CategorizedQuestion>
                
                <h2>Basic Spell Check and Review</h2>
                <CategorizedQuestion category="spellcheck" id="basic" handler={ this.handleChangeCategorized } val={ this.state.spellcheck.basic }>Does the post pass a basic Word spell check?</CategorizedQuestion>
                <CategorizedQuestion category="spellcheck" id="vendorInfo" handler={ this.handleChangeCategorized } val={ this.state.spellcheck.vendorInfo }>If used in the blog post, are the firm name and geography correct? (Based on the information available to the vendors.)</CategorizedQuestion>
                <CategorizedQuestion category="spellcheck" id="wordUsage" handler={ this.handleChangeCategorized } val={ this.state.spellcheck.wordUsage }>Are all correctly spelled words used correctly? (Example: trial instead of trail)</CategorizedQuestion>
                <CategorizedQuestion category="spellcheck" id="grammar" handler={ this.handleChangeCategorized } val={ this.state.spellcheck.grammar }>Is the content free from major grammar errors? (Examples include missing words that affect the readability or meaning of a sentence, glaringly incorrect punctuation, etc.)</CategorizedQuestion>
                
                <h2>Writing Proficiency</h2>
                <CategorizedQuestion category="writingProficiency" id="pov" handler={ this.handleChangeCategorized } val={ this.state.writingProficiency.pov }>Is the point of view consistent?</CategorizedQuestion>
                <CategorizedQuestion category="writingProficiency" id="grammar" handler={ this.handleChangeCategorized } val={ this.state.writingProficiency.grammar }>Is the content free of grammar minor grammar errors? (Examples include agreement errors, capitalization errors, AP Style errors.)</CategorizedQuestion>
                <CategorizedQuestion category="writingProficiency" id="readability" handler={ this.handleChangeCategorized } val={ this.state.writingProficiency.readability }>Does the content read well? For example: Is it free from redundancy, unnecessary repetition, inaccuracies and gaps in logic?</CategorizedQuestion>
                
                <h2>Topic</h2>
                <MultiChoiceQuestion category="topic" id="appropriateness" handler={ this.handleChangeCategorized } val={ this.state.topic.appropriateness }  warning="A '0' results in an automatic failure. A JIRA ticket should be filed and the post should be taken down immediately.">Did the writer choose an appropriate topic for the client's practice and location (e.g., client practices Los Angeles family law and topic is about California child custody)? Did the writer take provided notes on topic selection into consideration?</MultiChoiceQuestion>
                <CategorizedQuestion category="topic" id="date" handler={ this.handleChangeCategorized } val={ this.state.topic.date}>Is the subject of the post appropriate given the date of its publication? (Non-exhaustive examples of timeliness topics: holiday posts, back to school posts; cold-weather safety tactics, etc.)</CategorizedQuestion>
                
                <h2>Tone</h2>
                <StandaloneQuestion id="tone" handler={ this.handleChangeSingle }val={ this.state.tone }>Does the tone match the client's brand and any provided notes on tone?</StandaloneQuestion>
                
                <h2>User-Focused Content/Conversion</h2>
                <MultiChoiceQuestion category="focus" id="topic" handler={ this.handleChangeCategorized } val={ this.state.focus.topic }>Does the content stay focused on the topic? (Example: A headline sets an expectation for the blog, but the content focuses on a different topic)</MultiChoiceQuestion>
                <MultiChoiceQuestion category="focus" id="headline" handler={ this.handleChangeCategorized } val={ this.state.focus.headline }>Does the content contain an interesting headline?</MultiChoiceQuestion>
                <CategorizedQuestion category="focus" id="adverseness" handler={ this.handleChangeCategorized } val={ this.state.focus.adverseness }>Does the content avoid taking a position adverse to the interests of the intended audience? </CategorizedQuestion>
                <CategorizedQuestion category="focus" id="clientGoals" handler={ this.handleChangeCategorized } val={ this.state.focus.clientGoals }>Is the content consistent with client goals as outlined in Performance Console? Tone and content is appropriate for audience and accurate representation of the firm, per directions provided. Content would not be considered puerile or offensive to an average and reasonable reader.</CategorizedQuestion>
                <MultiChoiceQuestion category="focus" id="headers" handler={ this.handleChangeCategorized } val={ this.state.focus.headers }>Does the content have user-focused headers that also describe the content below them? </MultiChoiceQuestion>
                
                <h2>Source</h2>
                <MultiChoiceQuestion id="source" handler={ this.handleChangeCategorized } val={ this.state.source } >Did the writer select appropriate sources to support the chosen topic?</MultiChoiceQuestion>
                
                <h2>Performance</h2>
                <MultiChoiceQuestion category="performance" id="linkText" handler={ this.handleChangeCategorized } val={ this.state.performance.linkText }>Does anchor text give users a clear understanding of where the link(s) will lead? </MultiChoiceQuestion>
                <MultiChoiceQuestion category="performance" id="linkMatchesHeaders" handler={ this.handleChangeCategorized } val={ this.state.performance.linkMatchesHeaders }>Does anchor text avoid using words that exactly match the content title or H1 header of the destination page?</MultiChoiceQuestion>
                
                <h2>Compliance with Ethical Rules</h2>
                <CategorizedQuestion category="compliance" id="words" handler={ this.handleChangeCategorized } val={ this.state.compliance.words }>Does the content avoid words like expert, expertise, specialist or specialize? Acceptable use may include use when an attorney is a board-certified specialist. </CategorizedQuestion>
                <CategorizedQuestion category="compliance" id="isEthical" handler={ this.handleChangeCategorized } val={ this.state.compliance.isEthical }>Is the content free from ethical issues (expertise, comparisons, promises results, conflicts of interest)?</CategorizedQuestion>
                <CategorizedQuestion category="compliance" id="noMisleadingImpressions" handler={ this.handleChangeCategorized } val={ this.state.compliance.noMisleadingImpressions }>Does the content avoid misleading impressions or promising results?</CategorizedQuestion>
                <CategorizedQuestion category="compliance" id="noFactualInaccuracies" handler={ this.handleChangeCategorized } val={ this.state.compliance.noFactualInaccuracies } warning="A 'no' to this question results in automatic failure to achieve, a JIRA ticket should be filed and the blog post should be taken down immediately.">Are there no obvious legal or factual inaccuracies the reviewer can see without consulting another source? Are common legal terms (e.g., plaintiff, prosecution) used correctly?</CategorizedQuestion>
                <button onClick={this.formSubmit} className="btn btn-primary mt-5 mb-5" handler={ this.formSubmit } >Submit</button>
              </form>
            </article>
          <Sidebar />
          </div>
        </div>
      </div>
	    
    );
  }
}

export default Content;
