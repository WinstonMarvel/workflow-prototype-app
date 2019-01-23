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
                console.log(this.appState);
                this.emit("change");
                break;
            }

            case "LOADING_COMPLETE": {
                this.appState.loading = false;
                console.log(this.appState);
                this.emit("change");
            }
        }
    }
}

const newStore = new Store;

dispatcher.register(newStore.handleActions.bind(newStore));

export default newStore;