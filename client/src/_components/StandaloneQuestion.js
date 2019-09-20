import React, { Component } from 'react';

function StandaloneQuestion({ id, handler, val, warning, children }) {
    return (
        <label className="labelq clearfix"> 
            <input checked={val} onChange={ 
                () => { 
                    handler(id, !val) 
                } 
            } className="labelq__checkbox" type="checkbox" />
            <span className="labelq__text">
            
                <span className="labelq__check">
                    <i className="fa fa-check icon"></i>
                    <i className="fa fa-times icon"></i>
                </span>
            </span>
            <span className="labelq__questionText">{ children } { warning? <span className="text-danger"> { warning } </span> : "" }</span>
        </label>
    );
}

export default StandaloneQuestion;
