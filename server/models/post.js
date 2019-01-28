let mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

let postSchema = new mongoose.Schema({
    postInfo: {
        requestId: {
            type: Number,
            required: true,
            unique: true
        },
        vendorName: { 
            type: String,
            required: true
        },
        clientName: {
            type: String,
            required: true
        },
        postDate: {
            type: Date,
            required: true
        },
        postTitle: {
            type: String,
            required: true
        },
        userId: {
            type: Number,
            required: true
        }
    },
    plagiarism: {
        copyscape: {
            type: Boolean,
            required: true
        },
        uniqueness: {
            type: String,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },
    spellcheck: {
        basic: {
            type: Boolean,
            required: true
        },
        vendorInfo: {
            type: Boolean,
            required: true
        },
        wordUsage: {
            type: Boolean,
            required: true
        },
        grammar: {
            type: Boolean,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },
    writingProficiency: {
        pov: {
            type: Boolean,
            required: true
        },
        grammar: {
            type: Boolean,
            required: true
        },
        readability: {
            type: Boolean,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },
    topic: {
        appropriateness: {
            type: Number,
            required: true
        },
        date: {
            type: Boolean,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },
    tone: {
        type: Boolean,
        required: true
    },
    focus: {
        topic: {
            type: Number,
            required: true
        },
        headline: {
            type: Number,
            required: true
        },
        adverseness: {
            type: Boolean,
            required: true
        },
        clientGoals: {
            type: Boolean,
            required: true
        },
        headers: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },
    source: {
        type: Number,
        required: true
    },
    performance: {
        linkText: {
            type: Number,
            required: true
        },
        linkMatchesHeaders: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },
    compliance: {
        words: {
            type: Boolean,
            required: true
        },
        isEthical: {
            type: Boolean,
            required: true
        },
        noMisleadingImpressions: {
            type: Boolean,
            required: true
        },
        noFactualInaccuracies: {
            type: Boolean,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },
    total: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true
    },
});

postSchema.plugin(uniqueValidator);

module.exports = new mongoose.model('post', postSchema);