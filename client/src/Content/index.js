import React, {Component} from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Question from './Question';
import StatusBar from './StatusBar';
import Store from '../stores';
import {updatePost, submitPost} from '../actions';

import './index.css';

class Content extends Component {
  constructor(props){
    super(props);
    this.state = Store.getAll();
    this.formChange = this.formChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formChange() {
    updatePost("postId", "sdfsdf");
  }

  formSubmit(){ 

  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid mw-1500">
          <div className="row d-flex justify-content-between">
            <article id="main-col" className="mt-5 pt-5">
              <StatusBar totalPercent={this.state.score}></StatusBar>
              <form>
                <a onClick={this.activateLasers}>asdasd</a>
                
                <h2>Plagiarism/Duplicate Content</h2>
                <Question>Is the content free of plagiarism/duplicate content based on a Copyscape search?</Question>
                <Question>Is the topic or source particularly unique as compared to other articles/blog posts in the practice area? Topic and content should be unique as compared to the recent posts on the main blog landing page.</Question>
                
                <h2>Basic Spell Check and Review</h2>
                <Question>Does the post pass a basic Word spell check?</Question>
                <Question>If used in the blog post, are the firm name and geography correct? (Based on the information available to the vendors.)</Question>
                <Question>Are all correctly spelled words used correctly? (Example: trial instead of trail)</Question>
                <Question>Is the content free from major grammar errors? (Examples include missing words that affect the readability or meaning of a sentence, glaringly incorrect punctuation, etc.)</Question>
                
                <h2>Writing Proficiency</h2>
                <Question>Is the point of view consistent?</Question>
                <Question>Is the content free of grammar minor grammar errors? (Examples include agreement errors, capitalization errors, AP Style errors.)</Question>
                <Question>Does the content read well? For example: Is it free from redundancy, unnecessary repetition, inaccuracies and gaps in logic?</Question>
                
                <h2>Topic</h2>
                <Question>Did the writer choose an appropriate topic for the client's practice and location (e.g., client practices Los Angeles family law and topic is about California child custody)? Did the writer take provided notes on topic selection into consideration? A "0" results in an automatic failure. A JIRA ticket should be filed and the post should be taken down immediately.</Question>
                <Question>Is the subject of the post appropriate given the date of its publication? (Non-exhaustive examples of timeliness topics: holiday posts, back to school posts; cold-weather safety tactics, etc.)</Question>
                
                <h2>Tone</h2>
                <Question>Does the tone match the client's brand and any provided notes on tone?</Question>
                
                <h2>User-Focused Content/Conversion</h2>
                <Question>Does the content stay focused on the topic? (Example: A headline sets an expectation for the blog, but the content focuses on a different topic)</Question>
                <Question>Does the content contain an interesting headline?</Question>
                <Question>Does the content avoid taking a position adverse to the interests of the intended audience? </Question>
                <Question>Is the content consistent with client goals as outlined in Performance Console? Tone and content is appropriate for audience and accurate representation of the firm, per directions provided. Content would not be considered puerile or offensive to an average and reasonable reader.</Question>
                <Question>Does the content have user-focused headers that also describe the content below them? </Question>
                
                <h2>Source</h2>
                <Question>Did the writer select appropriate sources to support the chosen topic?</Question>
                
                <h2>Performance</h2>
                <Question>Does anchor text give users a clear understanding of where the link(s) will lead? </Question>
                <Question>Does anchor text avoid using words that exactly match the content title or H1 header of the destination page?</Question>
                
                <h2>Compliance with Ethical Rules</h2>
                <Question>Does the content avoid words like expert, expertise, specialist or specialize? Acceptable use may include use when an attorney is a board-certified specialist. </Question>
                <Question>Is the content free from ethical issues (expertise, comparisons, promises results, conflicts of interest)?</Question>
                <Question>Does the content avoid misleading impressions or promising results?</Question>
                <Question>Are there no obvious legal or factual inaccuracies the reviewer can see without consulting another source? Are common legal terms (e.g., plaintiff, prosecution) used correctly? A "no" to this question results in automatic failure to achieve, an JIRA ticket should be filed and the post should be taken down immediately. </Question>
                <button onClick={this.formSubmit}></button>
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
