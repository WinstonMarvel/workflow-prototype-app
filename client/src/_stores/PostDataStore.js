import { EventEmitter } from 'events';
import dispatcher from '_dispatcher.js';
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
                    postDate: new Date(),
                    userId: 1
                },
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
                    total: 2
                },
                writingProficiency: {
                    pov: true,
                    grammar: true,
                    readability: true,
                    total: 3
                },
                topic: {
                    appropriateness: 2,
                    date: true,
                    total: 3
                },
                tone: true,
                focus: {
                    topic: 2,
                    headline: 2,
                    adverseness: true,
                    clientGoals: true,
                    headers: 2,
                    total: 8
                },
                source: 2,
                performance: {
                    linkText: 2,
                    linkMatchesHeaders: 2,
                    total: 4
                },
                compliance:{
                    words: true,
                    isEthical: true,
                    noMisleadingImpressions: true,
                    noFactualInaccuracies: true,
                    total: 4
                },
                total: 31,
                score: 31,
                status: "Achieved"
            }
        }
        if(formType == "TBP"){
            this.post = {
                postInfo: {
                    vendorName: null,
                    clientName: null,
                    requestId: null,
                    postTitle: null,
                    postDate: new Date(),
                    userId: 1
                },
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
                    appropriateness: 2,
                    date: true,
                    total: 3
                },
                focus: {
                    topic: 2,
                    headline: 2,
                    appropriateness: true,
                    clientPracGoals: 2,
                    total: 7
                },
                source: 2,
                performance: {
                    linkText: 2,
                    linkMatchesHeaders: 2,
                    total: 4
                },
                compliance:{
                    words: true,
                    isEthical: true,
                    noMisleadingImpressions: true,
                    noFactualInaccuracies: true,
                    total: 4
                },
                total: 29,
                score: 29,
                status: "Achieved"
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