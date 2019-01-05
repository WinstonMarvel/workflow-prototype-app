let post = require('../models/post');

module.exports = function(router, mongoose){
    
    router.get('/posts/', (req, res)=>{
        post.find(function(err, list){
            if(err){
                console.log(err);
                res.status(500).json({
                    errorCode: err
                })
            }
            res.status(200).json(list);
        });
    });
    
    router.get('/post/:id', (req, res)=>{
        post.find({postId: req.params.id}, function(err, post){
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
    
    router.post('/posts/', (req, res)=>{ 
        req.body.post.createdDate = new Date();
        let newPost = new post(req.body.post);
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
                    id: newPost._id
                });    
            }    
        }); 
    });

    router.put('/post/:id', (req, res)=>{
        post.findOneAndUpdate({postId: req.params.id}, req.body.post, function(err, post){
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
    
    router.delete('/post/:id', (req, res)=>{
        post.findOneAndDelete({postId: req.params.id}, function(err, post){
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