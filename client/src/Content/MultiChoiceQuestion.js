import React, { Component } from 'react';
import { updatePostData_multi } from '../_actions/PostActions';
import PostDataStore from '../_stores/PostDataStore';

class MultiChoiceQuestion extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: PostDataStore.getMultiChoiceQuestionStatus(this.props.category, this.props.id)
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
            value: PostDataStore.getMultiChoiceQuestionStatus(this.props.category, this.props.id) 
        });
    }

    handleChange(event){
        updatePostData_multi(this.props.category, this.props.id, Number(event.target.value));
    }

    render(){
        return (
            <div className= "customradios clearfix">
                <div className="custom-radios clearfix">
                    <div>
                        <input type="radio" id={ this.props.id + "_radio-0"} name={this.props.id} value="0" checked={this.state.value === 0} onChange={this.handleChange}/>
                        <label htmlFor={this.props.id + "_radio-0"}> 
                            <span>0</span>
                        </label>
                    </div>
    
                    <div>
                        <input type="radio" id={ this.props.id + "radio-1" } name={this.props.id} value="1" checked={this.state.value === 1} onChange={this.handleChange}/>
                        <label htmlFor={ this.props.id + "radio-1" }>
                            <span>1</span>
                        </label>
                    </div>
    
                    <div>
                        <input type="radio" id={ this.props.id + "radio-2" } name={this.props.id} value="2" checked={this.state.value === 2} onChange={this.handleChange}/>
                        <label htmlFor={ this.props.id + "radio-2" }>
                            <span>2</span>
                        </label>
                    </div>
                </div>
                <span className="custom-radios__questionText">{this.props.children}</span>
            </div>
        );
    }
};


export default MultiChoiceQuestion;
