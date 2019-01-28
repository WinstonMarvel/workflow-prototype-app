import { EventEmitter } from 'events';
import dispatcher from '../_dispatcher.js';

class Store extends EventEmitter {
    constructor(props) {
        super(props);
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

        this.on('change', this.reCalculate);
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
        
    }

    reCalculate(){
        let post = this.post;

        post.plagiarism.total = post.plagiarism.copyscape + post.plagiarism.uniqueness;
        
        post.spellcheck.total = post.spellcheck.basic + post.spellcheck.vendorInfo + post.spellcheck.wordUsage + post.spellcheck.grammar;
        
        post.writingProficiency.total = post.writingProficiency.pov + post.writingProficiency.grammar + post.writingProficiency.readability;
        
        post.topic.total = post.topic.appropriateness + post.topic.date;
        
        post.focus.total = post.focus.topic + post.focus.headline + post.focus.adverseness + post.focus.clientGoals + post.focus.headers;
        
        post.performance.total = post.performance.linkText + post.performance.linkMatchesHeaders;
        
        post.compliance.total = post.compliance.words + post.compliance.isEthical + post.compliance.noMisleadingImpressions + post.compliance.noFactualInaccuracies;
        
        post.total = post.plagiarism.total + post.spellcheck.total + post.writingProficiency.total + post.topic.total + post.focus.total + post.performance.total + post.compliance.total + post.tone + post.source;
        
        post.score = Number.parseFloat(post.total/31 * 100).toFixed(2);
        
        if(!post.plagiarism.copyscape || !post.topic.appropriateness || !post.compliance.noFactualInaccuracies){
            post.status = "Did Not Achieve";
        }

        else if(post.score > 90){
            post.status = "Achieved";
        }
        else if(post.score >= 72 && post.score < 90){
            post.status = "Partially Achieved";
        }
        else if(post.score < 72){
            post.status = "Did Not Achieve";
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

            case "SUBMIT_POST": {

            }
        }
    }
}

const newStore = new Store;
dispatcher.register(newStore.handleActions.bind(newStore));

export default newStore;