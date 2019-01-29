import { EventEmitter } from 'events';
import dispatcher from '../_dispatcher.js';
import reCalculate from './ReCalculate.js';

class Store extends EventEmitter {
    constructor(props) {
        super(props);
        this.post = null;
        this.postType = null;
        this.on('change', () => { this.reCalculate( this.postType ) } );
    }

    getStandaloneQuestionStatus(id){
        return this.post[id];
    }

    getCategorizedQuestionStatus(category, id){
        return this.post[category][id];
    }

    getMultiChoiceQuestionStatus(category, id){
        if(category){
            return this.post[category][id];
        }
        else{
            return this.post[id];
        }
    }
    
    getPostData() {
        return this.post;
    }

    resetPostData(){
        this.postType = null;
        this.post = null;
    }

    newPostForm(formType){
        this.postType = formType;
        if(formType == "EBP"){
            this.post = {
                postInfo: {
                    vendorName: null,
                    clientName: null,
                    requestId: null,
                    postTitle: null,
                    postDate: null,
                    userId: 1
                },
                plagiarism: {
                    copyscape: false,
                    uniqueness: false, 
                    total: 0 
                }, 
                spellcheck: {
                    basic: false, 
                    vendorInfo: false,
                    wordUsage: false,
                    grammar: false,
                    total: 0
                },
                writingProficiency: {
                    pov: false,
                    grammar: false,
                    readability: false,
                    total: 0
                },
                topic: {
                    appropriateness: 0,
                    date: false,
                    total: 0
                },
                tone: false,
                focus: {
                    topic: 0,
                    headline: 0,
                    adverseness: false,
                    clientGoals: false,
                    headers: 0,
                    total: 0
                },
                source: 0,
                performance: {
                    linkText: 0,
                    linkMatchesHeaders: 0,
                    total: 0
                },
                compliance:{
                    words: false,
                    isEthical: false,
                    noMisleadingImpressions: false,
                    noFactualInaccuracies: false,
                    total: 0
                },
                total: 0,
                score: 0,
                status: "Did Not Achieve"
            }
        }
        if(formType == "TBP"){
            this.post = {
                postInfo: {
                    vendorName: null,
                    clientName: null,
                    requestId: null,
                    postTitle: null,
                    postDate: null,
                    userId: 1
                },
                plagiarism: {
                    copyscape: false,
                    uniqueness: false, 
                    total: 0 
                }, 
                spellcheck: {
                    basic: false, 
                    vendorInfo: false,
                    wordUsage: false,
                    grammar: false,
                    total: 0
                },
                writingProficiency: {
                    pov: false,
                    grammar: false,
                    readability: false,
                    total: 0
                },
                topic: {
                    appropriateness: 0,
                    date: false,
                    total: 0
                },
                focus: {
                    topic: 0,
                    headline: 0,
                    appropriateness: false,
                    clientPracGoals: 0,
                    total: 0
                },
                source: 0,
                performance: {
                    linkText: 0,
                    linkMatchesHeaders: 0,
                    total: 0
                },
                compliance:{
                    words: false,
                    isEthical: false,
                    noMisleadingImpressions: false,
                    noFactualInaccuracies: false,
                    total: 0
                },
                total: 0,
                score: 0,
                status: "Did Not Achieve"
            }
        }
    }

    reCalculate(postType){
        if(!this.post){
            return false;
        }
        else{
            reCalculate(this.post, postType);
        }
    }

    handleActions(action) {
        switch(action.type) {
            case "UPDATE_POST": {
                console.log(action);
                if(action.payload.category){
                    this.post[action.payload.category][action.payload.id] = action.payload.value;
                }
                else{
                    this.post[action.payload.id] = action.payload.value;
                }
                this.emit("change");
                break;
            }

            case "NEW_POST_FORM": {
                console.log(action.payload.postType);
                this.newPostForm(action.payload.postType);
                this.emit("change");
                break;
            }

            case "RESET_POST": {
                this.resetPostData();
                this.emit("change");
                break;
            }
        }
    }
}

const newStore = new Store;
dispatcher.register(newStore.handleActions.bind(newStore));

export default newStore;