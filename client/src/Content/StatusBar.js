import React, {Component} from 'react';
import './StatusBar.css';

const StatusBar = (props) => {
    return (
        <div className="statusbar mb-5 mx-auto d-flex justify-content-between">
            <div className="score-points p-4">
                {props.total}/31
            </div>
            <div className="score-percent p-4">
                {props.totalPercent}
            </div>
            <div className="status p-4">
                { 
                    props.status 
                    ? "Achieved"
                    : "Failed"
                }
            </div>
        </div>
    )
};

export default StatusBar;