import { EventEmitter } from 'events';
import dispatcher from '../_dispatcher.js';

class Store extends EventEmitter{
    constructor(props){
        super(props);
        this.appState = {
            loading: false,
            isLoggedIn: false,
            userEmail: null,
            token: null,
            isAdmin: false
        }
    }
    
    getAppState(){
        return this.appState;
    }

    handleActions(action){
        switch(action.type){
            case "LOADING_START": {
                this.appState.loading = true;
                console.log("load1: ", this.appState);
                this.emit("change");
                break;
            }

            case "LOADING_COMPLETE": {
                this.appState.loading = false;
                console.log("load2: ", this.appState);
                this.emit("change");
                break;
            }

            case "LOGIN": {
                console.log("store: ", action);
                this.appState.loading = false;
                this.appState.token = action.payload.token;
                this.appState.userEmail = action.payload.email;
                this.appState.isLoggedIn = true;
                console.log("store2: ", this.appState);
                this.emit("change");
                break;
            }

            case "LOGOUT": {
                this.appState.isLoggedIn = false;
                this.appState.userEmail = null;
                this.appState.token = null;
                this.appState.isAdmin = false;
                console.log("logout: ", this.appState);
                this.emit("change");
                break;
            }

            case "LOCALSTORAGE_LOGIN": {

            }

            case "APP_ERROR": {
                this.appState.error = action.payload.error;
                console.log("APP_ERROR: ", this.appState);
                this.emit("change");
                break;
            }
        }
    }
}

const newStore = new Store;

dispatcher.register(newStore.handleActions.bind(newStore));

export default newStore;