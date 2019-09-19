import { EventEmitter } from 'events';
import dispatcher from '_dispatcher.js';

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
            this.data.report = action.payload;
            this.emit("change");
            break;
        }

        switch(action.type){
            case "UPDATE_REPORT": 
            console.log(action.payload);
            for(let prop in action.payload){
                this.data[prop] = action.payload[prop]
            }
            this.emit("change");
            console.log(this.data);
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