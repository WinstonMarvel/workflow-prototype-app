import { EventEmitter } from 'events';
import dispatcher from '../_dispatcher.js';

class Store extends EventEmitter {
    constructor(props) {
        super(props);
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
                isEthical: true,
                noMisleadingImpressions: true,
                noFactualInaccuracies: true,
                total: 1
            },
            total: 45,
            score: 91,
            status: true
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
    
    getPost() {
        return this.post;
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
        
        post.total = post.plagiarism.total + post.spellcheck.total + post.writingProficiency.total + post.topic.total + post.focus.total + post.performance.total + post.compliance.total;
        
        post.score = post.total/31 * 100;
        post.status = "Achieved;"
        
    }

    handleActions(action) {
        switch(action.type) {
            case "UPDATE_POST_STANDALONE": {
                this.post[action.payload.id] = action.payload.value;
                this.emit("change");
                break;
            }

            case "UPDATE_POST_CATEGORIZED": {
                this.post[action.payload.category][action.payload.id] = action.payload.value;
                this.emit("change");
                break;
            }

            case "UPDATE_POST_MULTI": {
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