import dispatcher from "../_dispatcher";

export function checkToken(){
    dispatcher.dispatch({
        type: "LOADING_START"
    });
    let user = JSON.parse(localStorage.getItem('user'));
    if(user.token){
        setTimeout(function(){
            dispatcher.dispatch({
                type: "LOADING_COMPLETE"
            });
        }, 3000);
    }
}

export function login(username, password, keepMeLoggedIn){
    dispatcher.dispatch({
        type: "LOADING_START"
    });
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email" : username,
            "password" : password
        })
    };
    fetch('/login/', options)
    .then( res => {
        return res.json().then( data => ({ status: res.status, body: data }) )
    })
    .then( body => {
        console.log("login_action: ", body);
        if(body.status == 200){
            dispatcher.dispatch({
                type: "LOGIN",
                payload: {
                    email: username,
                    token: body.token
                }
            });
        }
        else{
            dispatcher.dispatch({
                type: "APP_ERROR",
                payload: {
                    error: "Incorrect Credentials"
                }
            });
        }
        dispatcher.dispatch({
            type: "LOADING_COMPLETE"
        });
    }).catch((err) => {
        console.log("error: ", err);
        dispatcher.dispatch({
            type: "APP_ERROR",
            payload: {
                error: err
            }
        });
        dispatcher.dispatch({
            type: "LOADING_COMPLETE"
        });
    });
}

export function logout(){
    localStorage.clear();
    dispatcher.dispatch({
        type: "LOGOUT"
    });
}