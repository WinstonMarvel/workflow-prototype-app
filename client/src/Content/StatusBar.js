import React, {Component} from 'react';
import './StatusBar.css';

const StatusBar = (props) => (
    <div class="statusbar mb-5 mx-auto d-flex justify-content-between">
        <div className="score-points p-4">
            25/31
        </div>
        <div className="score-percent p-4">
            {props.totalPercent}
        </div>
        <div className="status p-4">
            Achieved
        </div>
    </div>
);

export default StatusBar;