import { EventEmitter } from 'events';
import dispatcher from '../_dispatcher.js';

class Store extends EventEmitter{
    constructor(props){
        super(props);
        this.data = {
            fromDate: new Date( (new Date).getFullYear(), 0, 1 ),
            toDate: new Date(),
            postType: "ebp",
            report: null
        }
    }

    handleActions(action){
        switch(action.type){
            case "NEW_REPORT": 
            this.data.report = action.payload
            break;
        }

        switch(action.type){
            case "UPDATE_REPORT": 
            this.data[id] = action.payload.value
            break;
        }
    }

    getData(){
        return this.data;
    }
}

const newStore = new Store;

dispatcher.register(newStore.handleActions.bind(newStore));

export default newStore;