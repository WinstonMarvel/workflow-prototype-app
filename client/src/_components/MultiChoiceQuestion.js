import React, { Component } from 'react';

function MultiChoiceQuestion({ category, id, val, handler, warning, children }) {
    return (
        <div className= "customradios clearfix">
            <div className="custom-radios clearfix">
                <div>
                    <input type="radio" id={ id + "_radio-0"} name={id} value="0" checked={val === 0} onChange={ (e) => {handler(category, id, Number(e.target.value))} }/>
                    <label htmlFor={id + "_radio-0"}> 
                        <span>0</span>
                    </label>
                </div>

                <div>
                    <input type="radio" id={ id + "radio-1" } name={id} value="1" checked={val === 1} onChange={ (e) => {handler(category, id, Number(e.target.value))} }/>
                    <label htmlFor={ id + "radio-1" }>
                        <span>1</span>
                    </label>
                </div>

                <div>
                    <input type="radio" id={ id + "radio-2" } name={id} value="2" checked={val === 2} onChange={ (e) => {handler(category, id, Number(e.target.value))} }/>
                    <label htmlFor={ id + "radio-2" }>
                        <span>2</span>
                    </label>
                </div>
            </div>
            <span className="custom-radios__questionText">{ children } { warning? <span className="text-danger"> { warning } </span> : "" }</span>
        </div>
    );
};

export default MultiChoiceQuestion;
