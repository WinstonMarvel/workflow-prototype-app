let Post;
function decidePostType(req, res, next){
    console.log(req.headers);
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

module.exports = function(router, mongoose){
    
    router.get('/posts/:type', decidePostType, (req, res) =>{
        Post.find(function(err, list){
            if(err){
                console.log(err);
                res.status(500).json({
                    errorCode: err
                })
            }
            res.status(200).json(list);
        });
    });
    
    router.get('/post/:type/:id', decidePostType, (req, res) =>{
        decidePostType(req.params.type);
        Post.find({requestId: req.params.id}, function(err, post){
            if(err){
                console.log(err);
                res.status(500).json({
                    errorCode: err
                })
            }
            else if(!post){
                res.status(404).json({
                    errorCode: 'Did not find any such post'
                })
            }
            res.status(200).json(post);
        });
    });
    
    router.post('/posts/:type', decidePostType, (req, res) =>{ 
        req.body.createdDate = new Date();
        let newPost = new Post(req.body);
        newPost.save(function(err, newPost){
            if(err){
                console.log(err);
                res.status(500).json({
                    errorCode: err
                }) 
            }
            else{
                res.status(200).json({
                    status: 'success',
                    id: newPost.requestId
                });    
            }    
        }); 
    });

    router.put('/post/:type/:id', decidePostType, (req, res) =>{
        Post.findOneAndUpdate({requestId: req.params.id}, req.body, function(err, post){
            if(err){
                console.log(err);
                res.status(500).json({
                    errorCode: err
                })
            }
            else if(!post)
            res.status(404).json({
                errorCode: 'Did not find any such post'
            });
            else    
                res.status(200).json(post);
        });
    });
    
    router.delete('/post/:type/:id', decidePostType, (req, res) =>{
        Post.findOneAndDelete({requestId: req.params.id}, function(err, post){
            if(err){
                console.log(err);
                res.status(500).json({
                    errorCode: err
                })
            }
            else if(!post){
                res.status(404).json({
                    errorCode: 'Did not find any such post'
                });
            }
            else{    
                res.status(200).json({
                    status: 'success',
                    id: req.params.id
                });
            }
        });
    });
}


