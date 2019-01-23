import dispatcher from "../_dispatcher";

export function checkToken(){
    dispatcher.dispatch({
        type: "LOADING_START"
    });
    setTimeout(function(){
        dispatcher.dispatch({
            type: "LOADING_COMPLETE"
        });
    }, 3000);
}

export function login(username, password){
    dispatcher.dispatch({
        type: "LOADING_START"
    });
    setTimeout(function(){
        dispatcher.dispatch({
            type: "LOADING_COMPLETE"
        });
    }, 3000);
}