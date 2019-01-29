import React, { Component } from 'react';
import { updatePostData_standalone } from '../_actions/PostActions';
import PostDataStore from '../_stores/PostDataStore';

class StandaloneQuestion extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <label className="labelq clearfix"> 
                <input checked={this.props.val} onChange={ 
                    () => { 
                        this.props.handler(this.props.id, !this.props.val) 
                    } 
                } className="labelq__checkbox" type="checkbox" />
                <span className="labelq__text">
                
                    <span className="labelq__check">
                        <i className="fa fa-check icon"></i>
                    </span>
                </span>
                <span className="labelq__questionText">{this.props.children} { this.props.warning? <span className="text-danger"> { this.props.warning } </span> : "" }</span>
            </label>
        );
    }
};


export default StandaloneQuestion;
