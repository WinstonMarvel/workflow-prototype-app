import React from 'react';

const Question = (props) => {
    if(props.radio){
        // return(
        //     // Multiple choice Q goes here
        // )
    }
    else{
        return (
            <label class="labelq clearfix"> 
                <input onChange={()=>{props.action()}} class="labelq__checkbox" type="checkbox" />
                <span class="labelq__text">
                    <span class="labelq__check">
                        <i class="fa fa-check icon"></i>
                    </span>
                </span>
                <span className="labelq__questionText">{props.children}</span>
            </label>
        );
    }
};


export default Question;
