import React, {Component} from 'react';
import './StatusBar.css';

const StatusBar = (props) => {
    let showStatus = () => {
        console.log(props.status);
        switch(props.status) {
            case "Achieved":
                return(<span className="d-block status p-4 text-success">Achieved</span>)
                break;
            
            case "Partially Achieved":
                return(<span className="d-block status p-4 text-warning">Partially Achieved</span>)
                break;

            case "Did Not Achieve":
                return(<span className="d-block status p-4 text-danger">Did not Achieve</span>)
                break
        }
    };
    return (
        <div className="statusbar mb-5 mx-auto d-flex justify-content-between">
            <div className="score-points p-4">
                { props.total }/{ props.totalPossiblePoints }
            </div>
            <div className="score-percent p-4">
                {props.totalPercent} %
            </div>
            <p>
                { 
                    showStatus()
                }
            </p>
        </div>
    )
};

export default StatusBar;