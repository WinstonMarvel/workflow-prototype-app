import { EventEmitter } from 'events';
import dispatcher from '../dispatcher.js';

class Store extends EventEmitter {
    constructor() {
        super();
        
        this.post = {
            postId: 2121,
            createdDate: Date,
            userId: 1,
            plagiarism: {
                copyscape: true,
                uniqueness: true, 
                total: 2 
            }, 
            spellcheck: {
                basic: true, 
                vendorInfo: true,
                wordUsage: true,
                grammar: true,
                total: 4
            },
            writingProficiency: {
                pov: true,
                grammar: true,
                readability: true,
                total: 3
            },
            topic: {
                appropriateness: 1,
                date: true,
                total: 1
            },
            tone: true,
            focus: {
                topic: 1,
                headline: 1,
                adverseness: true,
                clientGoals: true,
                headers: 1,
                total: 1
            },
            source: true,
            performance: {
                linkText: 1,
                linkMatchesHeaders: 1,
                total: 1
            },
            compliance:{
                words: true,
                noMisleadingImpressions: true,
                noFactualInaccuracies: true,
                total: 1
            },
            total: true,
            score: 91,
            status: true
        }

        this.user = {

        }

        this.appState = {

        }
    }

    getAll() {
        return this.post;
    }

    handleActions(action) {
        switch(action.type) {
            case "UPDATE_POST": {
                console.log(this.post);
                this.post[action.payload.property] = action.payload.value;
                console.log(this.post);
                break;
            }
            case "SUBMIT_POST": {

            }
        }
    }
}

const newStore = new Store;
dispatcher.register(newStore.handleActions.bind(newStore));

export default newStore;