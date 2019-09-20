import React from 'react';
import './StatusBar.css';

const showStatus = (status) => {
    switch(status) {
        case "Achieved":
            return(<span className="d-block status p-4 text-success">Achieved</span>)
            break;
        
        case "Partially Achieved":
            return(<span className="d-block status p-4 text-warning">Partially Achieved</span>)
            break;

        case "Did Not Achieve":
            return(<span className="d-block status p-4 text-danger">Did not Achieve</span>)
            break
        default:
            return(<span className="d-block status p-4 text-success">Achieved</span>)
            break;
    }
};

function StatusBar ({ status, total, totalPossiblePoints, totalPercent }) {
    return (
        <div className="statusbar mb-5 mx-auto d-flex justify-content-between">
            <div className="score-points p-4">
                { total }/{ totalPossiblePoints }
            </div>
            <div className="score-percent p-4">
                {totalPercent} %
            </div>
            <p>
                { 
                    showStatus(status)
                }
            </p>
        </div>
    )
};

export default StatusBar;