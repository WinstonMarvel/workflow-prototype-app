export default function reCalculate(post, postType){
    console.log("test");
    if(postType == "EBP")
        reCalculateEBP(post);
    if(postType == "TBP")
        reCalculateTBP(post);
}


function reCalculateEBP(post){
    post.plagiarism.total = post.plagiarism.copyscape + post.plagiarism.uniqueness;
    post.spellcheck.total = post.spellcheck.basic + post.spellcheck.vendorInfo + post.spellcheck.wordUsage + post.spellcheck.grammar;
    post.writingProficiency.total = post.writingProficiency.pov + post.writingProficiency.grammar + post.writingProficiency.readability;
    post.topic.total = post.topic.appropriateness + post.topic.date;
    post.focus.total = post.focus.topic + post.focus.headline + post.focus.adverseness + post.focus.clientGoals + post.focus.headers;
    post.performance.total = post.performance.linkText + post.performance.linkMatchesHeaders;
    post.compliance.total = post.compliance.words + post.compliance.isEthical + post.compliance.noMisleadingImpressions + post.compliance.noFactualInaccuracies;
    post.total = post.plagiarism.total + post.spellcheck.total + post.writingProficiency.total + post.topic.total + post.focus.total + post.performance.total + post.compliance.total + post.tone + post.source;
    post.score = Number.parseFloat(post.total* 100/31).toFixed(2);
    if(  checkCompulsoryValues(post.plagiarism.copyscape, post.plagiarism.uniqueness, post.spellcheck.basic, post.spellcheck.vendorInfo, post.spellcheck.wordUsage, post.spellcheck.grammar, post.topic.appropriateness, post.compliance.noFactualInaccuracies )) {
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

function reCalculateTBP(post){
    post.plagiarism.total = post.plagiarism.copyscape + post.plagiarism.uniqueness;
    post.spellcheck.total = post.spellcheck.basic + post.spellcheck.vendorInfo + post.spellcheck.wordUsage + post.spellcheck.grammar;
    post.writingProficiency.total = post.writingProficiency.pov + post.writingProficiency.grammar + post.writingProficiency.readability;
    post.topic.total = post.topic.appropriateness + post.topic.date;
    post.focus.total = post.focus.topic + post.focus.headline + post.focus.appropriateness + post.focus.clientPracGoals;
    post.performance.total = post.performance.linkText + post.performance.linkMatchesHeaders;
    post.compliance.total = post.compliance.words + post.compliance.isEthical + post.compliance.noMisleadingImpressions + post.compliance.noFactualInaccuracies;
    post.total = post.plagiarism.total + post.spellcheck.total + post.writingProficiency.total + post.topic.total + post.focus.total + post.performance.total + post.compliance.total + post.source;
    post.score = Number.parseFloat(post.total*100/29).toFixed(2);
    let compulsoryValuesFail = checkCompulsoryValues(post.plagiarism.copyscape, post.plagiarism.uniqueness, post.spellcheck.basic, post.spellcheck.vendorInfo, post.spellcheck.wordUsage, post.spellcheck.grammar, post.topic.appropriateness, post.compliance.noFactualInaccuracies );
    if( compulsoryValuesFail ){
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

function checkCompulsoryValues(...prop){
    for(let i = 0; i < prop.length; i++){
        if(!prop[i])
            return true;
    }
    return false;
}