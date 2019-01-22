import React, { Component } from 'react';
import { updatePostData_categorized } from '../_actions/PostActions';
import PostDataStore from '../_stores/PostDataStore';

class CategorizedQuestion extends Component {
    constructor(props){
        super(props);
        this.state = {
            isChecked: PostDataStore.getCategorizedQuestionStatus(this.props.category, this.props.id)
        }
        this.getStatus = this.getStatus.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount(){
        PostDataStore.on('change', this.getStatus);
    }

    componentWillUnMount(){
        PostDataStore.removeListener('change', this.this.getStatus);
    }

    getStatus(){
        this.setState({ 
            isChecked: PostDataStore.getCategorizedQuestionStatus(this.props.category, this.props.id) 
        });
    }

    handleChange(){
        updatePostData_categorized(this.props.category, this.props.id, !this.state.isChecked);
    }

    render(){
        return (
            <label className="labelq clearfix"> 
                <input checked={this.state.isChecked} onChange={this.handleChange} className="labelq__checkbox" type="checkbox" />
                <span className="labelq__text">
                
                    <span className="labelq__check">
                        <i className="fa fa-check icon"></i>
                    </span>
                </span>
                <span className="labelq__questionText">{this.props.children}</span>
            </label>
        );
    }
};


export default CategorizedQuestion;
