let config = require('../../config.json');
let writeToExcel = require('./sheetWriter.js');

let Post, sheetSchema;
function decidePostType(req, res, next){
    console.log(req.params.type);
    switch(req.params.type){
        case "ebp": {
            Post = require('../../models/ebpPost');
            sheetSchema = require('./ebpExcelSchema.js');
            break;
        }
        case "tbp": {
            Post = require('../../models/tbpPost');
            sheetSchema = require('./tbpExcelSchema.js');
            break;
        }
    }
    next();
}

module.exports = function(router, mongoose){
    router.get('/export/:type/:id', decidePostType, (req, res) => {
        Post.findOne({ "postInfo.requestId" : req.params.id }, (err, post) => {
            if(post){
                writeToExcel( post, sheetSchema, req.params.type, function(){
                    let options = {
                        headers: {
                            "Content-Disposition": "attachment; filename=\"export.xlsx\""
                        }
                    };
                    res.sendFile( 'C://projects//rubrik-app//server//temp//test-output.xlsx', options ); 
                })
            }
            else{
                console.log("Request ID not found", req.params.id);
                res.status(400).json({
                    errorCode: 'Request ID was not found'
                });
            }
        });
    });
};

 
 
