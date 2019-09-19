import React, { Component } from 'react';
import { updatePostData_categorized } from '_actions/PostActions';
import PostDataStore from '_stores/PostDataStore';

class CategorizedQuestion extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <label className="labelq clearfix"> 
                <input checked={this.props.val} onChange={ 
                    () => { 
                        this.props.handler( this.props.category, this.props.id, !this.props.val ) 
                    } 
                } className="labelq__checkbox" type="checkbox" />
                <span className="labelq__text">
                
                    <span className="labelq__check">
                        <i className="fa fa-check icon"></i>
                        <i className="fa fa-times icon"></i>
                    </span>
                </span>
                <span className="labelq__questionText">{this.props.children} { this.props.warning? <span className="text-danger"> { this.props.warning } </span> : "" } </span>
            </label>
        );
    }
};


export default CategorizedQuestion;
