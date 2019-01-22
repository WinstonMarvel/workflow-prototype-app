import React, {Component} from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import StandaloneQuestion from './StandaloneQuestion';
import CategorizedQuestion from './CategorizedQuestion';
import MultiChoiceQuestion from './MultiChoiceQuestion';
import StatusBar from './StatusBar';
import PostDataStore from '../_stores/PostDataStore';
import {updatePost, submitPost} from '../_actions/PostActions';

import './index.css';

class Content extends Component {
  constructor(props){
    super(props);
    this.state = PostDataStore.getPost();
    this.formSubmit = this.formSubmit.bind(this);
    this.getPost = this.getPost.bind(this);
  }

  componentWillMount(){
    PostDataStore.on("change", this.getPost);
  }

  getPost(){
    this.setState(PostDataStore.getPost());
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
              <StatusBar totalPercent={this.state.tone}></StatusBar>
              <form>
                <h2>Plagiarism/Duplicate Content</h2>
                <CategorizedQuestion category="plagiarism" id="copyscape">Is the content free of plagiarism/duplicate content based on a Copyscape search?</CategorizedQuestion>
                <CategorizedQuestion category="plagiarism" id="uniqueness">Is the topic or source particularly unique as compared to other articles/blog posts in the practice area? Topic and content should be unique as compared to the recent posts on the main blog landing page.</CategorizedQuestion>
                
                <h2>Basic Spell Check and Review</h2>
                <CategorizedQuestion category="spellcheck" id="basic">Does the post pass a basic Word spell check?</CategorizedQuestion>
                <CategorizedQuestion category="spellcheck" id="vendorInfo">If used in the blog post, are the firm name and geography correct? (Based on the information available to the vendors.)</CategorizedQuestion>
                <CategorizedQuestion category="spellcheck" id="wordUsage">Are all correctly spelled words used correctly? (Example: trial instead of trail)</CategorizedQuestion>
                <CategorizedQuestion category="spellcheck" id="grammar">Is the content free from major grammar errors? (Examples include missing words that affect the readability or meaning of a sentence, glaringly incorrect punctuation, etc.)</CategorizedQuestion>
                
                <h2>Writing Proficiency</h2>
                <CategorizedQuestion category="writingProficiency" id="pov">Is the point of view consistent?</CategorizedQuestion>
                <CategorizedQuestion category="writingProficiency" id="grammar">Is the content free of grammar minor grammar errors? (Examples include agreement errors, capitalization errors, AP Style errors.)</CategorizedQuestion>
                <CategorizedQuestion category="writingProficiency" id="readability">Does the content read well? For example: Is it free from redundancy, unnecessary repetition, inaccuracies and gaps in logic?</CategorizedQuestion>
                
                <h2>Topic</h2>
                <MultiChoiceQuestion category="topic" id="appropriateness">Did the writer choose an appropriate topic for the client's practice and location (e.g., client practices Los Angeles family law and topic is about California child custody)? Did the writer take provided notes on topic selection into consideration? A "0" results in an automatic failure. A JIRA ticket should be filed and the post should be taken down immediately.</MultiChoiceQuestion>
                <CategorizedQuestion category="topic" id="date">Is the subject of the post appropriate given the date of its publication? (Non-exhaustive examples of timeliness topics: holiday posts, back to school posts; cold-weather safety tactics, etc.)</CategorizedQuestion>
                
                <h2>Tone</h2>
                <StandaloneQuestion id="tone">Does the tone match the client's brand and any provided notes on tone?</StandaloneQuestion>
                
                <h2>User-Focused Content/Conversion</h2>
                <MultiChoiceQuestion category="focus" id="topic">Does the content stay focused on the topic? (Example: A headline sets an expectation for the blog, but the content focuses on a different topic)</MultiChoiceQuestion>
                <MultiChoiceQuestion category="focus" id="headline">Does the content contain an interesting headline?</MultiChoiceQuestion>
                <CategorizedQuestion category="focus" id="adverseness">Does the content avoid taking a position adverse to the interests of the intended audience? </CategorizedQuestion>
                <CategorizedQuestion category="focus" id="clientGoals">Is the content consistent with client goals as outlined in Performance Console? Tone and content is appropriate for audience and accurate representation of the firm, per directions provided. Content would not be considered puerile or offensive to an average and reasonable reader.</CategorizedQuestion>
                <MultiChoiceQuestion category="focus" id="headers">Does the content have user-focused headers that also describe the content below them? </MultiChoiceQuestion>
                
                <h2>Source</h2>
                <MultiChoiceQuestion id="source">Did the writer select appropriate sources to support the chosen topic?</MultiChoiceQuestion>
                
                <h2>Performance</h2>
                <MultiChoiceQuestion category="performance" id="linkText">Does anchor text give users a clear understanding of where the link(s) will lead? </MultiChoiceQuestion>
                <MultiChoiceQuestion category="performance" id="linkMatchesHeaders">Does anchor text avoid using words that exactly match the content title or H1 header of the destination page?</MultiChoiceQuestion>
                
                <h2>Compliance with Ethical Rules</h2>
                <CategorizedQuestion category="compliance" id="words">Does the content avoid words like expert, expertise, specialist or specialize? Acceptable use may include use when an attorney is a board-certified specialist. </CategorizedQuestion>
                <CategorizedQuestion category="compliance" id="isEthical">Are there no obvious legal or factual inaccuracies the reviewer can see without consulting another source? Are common legal terms (e.g., plaintiff, prosecution) used correctly? A "no" to this question results in automatic failure to achieve, an JIRA ticket should be filed and the post should be taken down immediately. </CategorizedQuestion>
                <CategorizedQuestion category="compliance" id="noMisleadingImpressions">Is the content free from ethical issues (expertise, comparisons, promises results, conflicts of interest)?</CategorizedQuestion>
                <CategorizedQuestion category="compliance" id="noFactualInaccuracies">Does the content avoid misleading impressions or promising results?</CategorizedQuestion>
                <button onClick={this.formSubmit} className="btn btn-primary mt-5 mb-5">Submit</button>
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
