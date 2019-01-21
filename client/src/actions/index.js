import dispatcher from "../dispatcher";

export function updatePost(property, value){
    dispatcher.dispatch({
        type: "UPDATE_POST",
        payload: {
            property,
            value
        }
    });
}


export function submitPost(property, value){
    dispatcher.dispatch({
        type: "SUBMIT_POST",
        payload: {
            property,
            value
        }
    });
}