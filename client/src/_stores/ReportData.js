import { EventEmitter } from 'events';
import dispatcher from '../_dispatcher.js';

class Store extends EventEmitter{
    constructor(props){
        super(props);
        this.report = null
    }

    handleActions(action){
        switch(action.type){
            case "NEW_REPORT": 
            this.report = action.payload
            break;
        }
    }

    getData(){
        return this.report;
    }
}

const newStore = new Store;

dispatcher.register(newStore.handleActions.bind(newStore));

export default newStore;