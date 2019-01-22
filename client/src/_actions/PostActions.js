import dispatcher from "../_dispatcher";

export function updatePostData_standalone(id, value){
    dispatcher.dispatch({
        type: "UPDATE_POST_STANDALONE",
        payload: {
            id: id,
            value: value
        }
    });
}

export function updatePostData_categorized(category, id, value){
    dispatcher.dispatch({
        type: "UPDATE_POST_CATEGORIZED",
        payload: {
            category: category,
            id: id,
            value: value
        }
    });
}

export function updatePostData_multi(category, id, value){
    dispatcher.dispatch({
        type: "UPDATE_POST_MULTI",
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