let isLoggedIn =  require('./middleware').isLoggedIn;

let Post;
function decidePostType(req, res, next){
    switch(req.params.type){
        case "ebp": {
            Post = require('../models/ebpPost');
            break;
        }
        case "tbp": {
            Post = require('../models/tbpPost');
            break;
        }
    }
    next();
}

function getReport(postList){
    let result = {
        achieved: 0,
        partiallyAchieved: 0,
        didNotAchieve: 0
    };
    postList.map( (element) => {
        switch(element.status){
            case "Achieved":
            result.achieved++;
            break;
            
            case "Partially Achieved":
            result.partiallyAchieved++;
            break;

            case "Did Not Achieve":
            result.didNotAchieve++;
            break;
        }
    });
    return result;
}



module.exports = function(router, mongoose){
    router.post('/reports/:type', isLoggedIn, decidePostType, (req, res) => {
        Post.find({
            "postInfo.postDate": {
                $gte: req.body.startDate,
                $lte: req.body.endDate,
                }
        }, (err, postList) =>{
            if(err){
                console.log("Request ID not found", req.params.id);
                res.status(400).json({
                    errorCode: 'Request ID was not found'
                });
            }
            else{
                res.status(200).json( getReport(postList) );
            }
        });
    });
}