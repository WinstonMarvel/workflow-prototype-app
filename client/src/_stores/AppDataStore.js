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
            isAdmin: false,
            error: null,
            submissionSuccess: null,
            currentForm: null
        }
    }
    
    getAppState(){
        return this.appState;
    }

    getCurrentFormType(){
        return this.appState.currentForm;
    }

    getToken(){
        return this.appState.token;
    }

    resetAppState(){
        this.appState.loading = false;
        this.appState.error= null;
        this.appState.submissionSuccess= null;
        this.appState.currentForm = null;
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

            case "APP_ERROR": {
                this.appState.error = action.payload.error;
                console.log("APP_ERROR: ", this.appState);
                this.emit("change");
                break;
            }

            case "APP_SUCCESS": {
                this.appState.submissionSuccess = action.payload.success;
                this.emit("change");
                break;
            }

            case "APP_RESET": {
                this.resetAppState();
                this.emit("change");
                break;
            }

            case "NEW_POST_FORM": {
                this.appState.currentForm = action.payload.postType;
                this.emit("change");
                break;
            }
        }
    }
}

const newStore = new Store;

dispatcher.register(newStore.handleActions.bind(newStore));

export default newStore;