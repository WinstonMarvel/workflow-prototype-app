import dispatcher from '../_dispatcher.js';

export function getReport( start, end, postType ){
    dispatcher.dispatch({
        type: "LOADING_START"
    });
    let url = `/api/reports/${postType}`;
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "startDate": start,
            "endDate": end
        })
    })
    .then( res => res.json() )
    .then( (body) => {
        dispatcher.dispatch({
            type: "NEW_REPORT",
            payload: body
        });
        dispatcher.dispatch({
            type: "LOADING_COMPLETE"
        });
    } )
    .catch( err => {
        dispatcher.dispatch({
            type: "APP_ERROR",
            error: err
        });
    })
    
}

export function updateReport( id, value ){
    dispatcher.dispatch({
        type: "UPDATE_REPORT",
        payload: {
            id: id,
            value: value
        }
    });
}