let Post = require('../models/post');

module.exports = function(router, mongoose){
    
    router.get('/posts/', (req, res)=>{
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
    
    router.get('/post/:id', (req, res)=>{
        Post.find({postId: req.params.id}, function(err, post){
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
                    id: newPost.postId
                });    
            }    
        }); 
    });

    router.put('/post/:id', (req, res)=>{
        Post.findOneAndUpdate({postId: req.params.id}, req.body, function(err, post){
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
        Post.findOneAndDelete({postId: req.params.id}, function(err, post){
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