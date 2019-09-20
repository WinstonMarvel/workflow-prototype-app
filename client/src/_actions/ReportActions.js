import dispatcher from '_dispatcher.js';
import AppDataStore from '_store/AppDataStore';

export function getReport( start, end, postType ){
    dispatcher.dispatch({
        type: "LOADING_START"
    });
    let url = `/api/reports/${postType}`;
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + AppDataStore.getToken()
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

export function updateReport( data ){
    dispatcher.dispatch({
        type: "UPDATE_REPORT",
        payload: data
    });
}