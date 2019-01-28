import dispatcher from "../_dispatcher";

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

export function submitPost(obj){
    dispatcher.dispatch({
        type: "LOADING_START"
    });
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( obj )
    };
    fetch('/posts/', options)
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