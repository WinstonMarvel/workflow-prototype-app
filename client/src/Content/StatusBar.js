import React, {Component} from 'react';
import './StatusBar.css';

const StatusBar = (props) => (
    <div class="mt-5 d-flex justify-content-between">
        <div className="score-points">
            25/31
        </div>
        <div className="score-percent">
            85%
        </div>
        <div className="status">
            Achieved
        </div>
    </div>
);

export default StatusBar;