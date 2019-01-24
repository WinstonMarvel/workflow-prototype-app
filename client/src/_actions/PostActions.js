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

export function submitPost(property, value){
    dispatcher.dispatch({
        type: "SUBMIT_POST",
        payload: {
            property,
            value
        }
    });
}