import React, { Component } from 'react';
import { updatePostData_standalone } from '../_actions/PostActions';
import PostDataStore from '../_stores/PostDataStore';

class StandaloneQuestion extends Component {
    constructor(props){
        super(props);
        this.state = {
            isChecked: PostDataStore.getStandaloneQuestionStatus(this.props.id)
        }
        this.handleChange = this.handleChange.bind(this);
        this.getStatus = this.getStatus.bind(this);
    }

    componentWillMount(){
        PostDataStore.on('change', this.getStatus);
    }

    componentWillUnMount(){
        PostDataStore.removeListener('change', this.this.getStatus);
    }

    getStatus(){
        this.setState({
            isChecked: PostDataStore.getStandaloneQuestionStatus(this.props.id)
        });
    }

    handleChange(){
        updatePostData_standalone(this.props.id, !this.state.isChecked);
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


export default StandaloneQuestion;
