import dispatcher from "../_dispatcher";
import axios from 'axios';
import download from 'downloadjs';
import AppDataStore from '../_stores/AppDataStore';

export function newPost(formType){
    dispatcher.dispatch({
        type: "NEW_POST_FORM",
        payload: {
            postType: formType
        }
    });
}  

export function updatePostData(category, id, value){
    dispatcher.dispatch({
        type: "UPDATE_POST",
        payload: {
            category: category,
            id: id,
            value: value
        }
    });
}

export function submitPost(obj, postType){
    dispatcher.dispatch({
        type: "LOADING_START"
    });
    let url = "/api/posts/" + postType.toLowerCase();
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + AppDataStore.getToken()
        },
        body: JSON.stringify( obj )
    };
    fetch( url, options )
    .then( res => res.json() )
    .then( response =>{
         console.log('Success:', JSON.stringify(response));
         if(response.errorCode){
            dispatcher.dispatch({
                type: "APP_ERROR",
                payload: {
                    error: JSON.stringify(response.errorCode)
                }
            });
         }
         else{
            dispatcher.dispatch({
                type: "APP_SUCCESS",
                payload: {
                    success: true
                }
            });
         }
        dispatcher.dispatch({
            type: "LOADING_COMPLETE"
        });
    } )
    .catch( error => {
        console.error('Error:', error);
        dispatcher.dispatch({
            type: "APP_ERROR",
            payload: {
                error: error
            }
        });
        dispatcher.dispatch({
            type: "LOADING_COMPLETE"
        });
    } );
}


export function exportPostData(postType, requestId){
    dispatcher.dispatch({
        type: "LOADING_START"
    });
    let url = `/api/export/${postType}/${requestId}`;
    axios( {
        url: url,
        method: 'GET',
        responseType: 'blob',
        headers: {
            "Authorization": "Bearer " + AppDataStore.getToken()
        }
    }).
    then( (response) => {
        if( response.status == 200 ){
            download( new Blob([response.data]), `Report-${requestId}.xlsx`, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" )
        }
        dispatcher.dispatch({
            type: "LOADING_COMPLETE"
        });
    } )
    .catch( (err) => {
        if( err.response.status == 400 ){
            dispatcher.dispatch({
                type: "APP_ERROR",
                payload: {
                    error: "Are you sure you entered the corrrect requestID?"
                }
            });
        }
        else{
            dispatcher.dispatch({
                type: "APP_ERROR",
                payload: {
                    error: err
                }
            });
        }
        dispatcher.dispatch({
            type: "LOADING_COMPLETE"
        });
    } )
}
