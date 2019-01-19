import React, {Component} from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Question from './Question';
import StatusBar from './StatusBar';
import './index.css';

class Content extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid mw-1500">
          <div className="row d-flex justify-content-between">
            <article id="main-col" className="mt-5 pt-5">
              <StatusBar></StatusBar>
              <form>
                <h2>Plagiarism/Duplicate Content</h2>
                <Question>Is the content free of plagiarism/duplicate content based on a Copyscape search?</Question>
                <Question>Is the topic or source particularly unique as compared to other articles/blog posts in the practice area? Topic and content should be unique as compared to the recent posts on the main blog landing page.</Question>
                <Question>Does the post pass a basic Word spell check?</Question>
                <Question>If used in the blog post, are the firm name and geography correct? (Based on the information available to the vendors.)</Question>
                <h2>Basic Spell Check and Review</h2>
                <Question>Is the content free of plagiarism/duplicate content based on a Copyscape search?</Question>
                <Question>Is the topic or source particularly unique as compared to other articles/blog posts in the practice area? Topic and content should be unique as compared to the recent posts on the main blog landing page.</Question>
                <Question>Does the post pass a basic Word spell check?</Question>
                <Question>If used in the blog post, are the firm name and geography correct? (Based on the information available to the vendors.)</Question>
                <h2>Writing Proficiency</h2>
                <Question>Is the content free of plagiarism/duplicate content based on a Copyscape search?</Question>
                <Question>Is the topic or source particularly unique as compared to other articles/blog posts in the practice area? Topic and content should be unique as compared to the recent posts on the main blog landing page.</Question>
                <Question>Does the post pass a basic Word spell check?</Question>
                <Question>If used in the blog post, are the firm name and geography correct? (Based on the information available to the vendors.)</Question>
                <h2>Topic</h2>
                <Question>Is the content free of plagiarism/duplicate content based on a Copyscape search?</Question>
                <Question>Is the topic or source particularly unique as compared to other articles/blog posts in the practice area? Topic and content should be unique as compared to the recent posts on the main blog landing page.</Question>
                <Question>Does the post pass a basic Word spell check?</Question>
                <Question>If used in the blog post, are the firm name and geography correct? (Based on the information available to the vendors.)</Question>
                <h2>Tone</h2>
                <Question>Is the content free of plagiarism/duplicate content based on a Copyscape search?</Question>
                <Question>Is the topic or source particularly unique as compared to other articles/blog posts in the practice area? Topic and content should be unique as compared to the recent posts on the main blog landing page.</Question>
                <Question>Does the post pass a basic Word spell check?</Question>
                <Question>If used in the blog post, are the firm name and geography correct? (Based on the information available to the vendors.)</Question>
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
