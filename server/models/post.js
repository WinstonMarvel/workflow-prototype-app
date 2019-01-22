let mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    postId: {
        type: Number,
        index: {
            unique: true,
            dropDups: true
        } 
    },
    createdDate: Date,
    userId: Number,
    plagiarism: {
        copyscape: Boolean,
        uniqueness: Boolean, 
        total: Number 
    }, 
    spellcheck: {
        basic: Boolean, 
        vendorInfo: Boolean,
        wordUsage: Boolean,
        grammar: Boolean,
        total: Number
    },
    writingProficiency: {
        pov: Boolean,
        grammar: Boolean,
        readability: Boolean,
        total: Number
    },
    topic: {
        appropriateness: Number,
        date: Boolean,
        total: Number
    },
    tone: Boolean,
    focus: {
        topic: Number,
        headline: Number,
        adverseness: Boolean,
        clientGoals: Boolean,
        headers: Number,
        total: Number
    },
    source: Boolean,
    performance: {
        linkText: Number,
        linkMatchesHeaders: Number,
        total: Number
    },
    compliance:{
        words: Boolean,
        isEthical: Boolean,
        noMisleadingImpressions: Boolean,
        noFactualInaccuracies: Boolean,
        total: Number
    },
    total: Boolean,
    score: Number,
    status: Boolean
});

module.exports = new mongoose.model('post', postSchema);