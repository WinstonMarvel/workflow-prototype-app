import React from 'react';

const Question = (props) => {
    return (
        <label class="labelq clearfix"> 
            <span className="labelq__questionText">{props.children}</span>
            <input  class="labelq__checkbox" type="checkbox" />
            <span class="labelq__text">
                <span class="labelq__check">
                    <i class="fa fa-check icon"></i>
                </span>
            </span>
        </label>
    );
};


export default Question;
