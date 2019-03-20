const express = require('express');
const commentRouter = express.Router();
const commentService = require('../services/commentService');


//Create comment
commentRouter.post('/:post_id',(req, res)=>{
    const {post_id} = req.params;
    const {author_id, comment_text} = req.body;
    commentService.create(post_id, author_id, comment_text)
    .then(()=>{
        res.status(200)
        res.json({
            "comment successfully created": true
        })
    })
    .catch(err=>{
        res.status(400)
        res.json({
            "comment successfully created": false,
            "err":err
        })
    })
})

//Read comment
commentRouter.get('/:post_id',(req, res)=>{
    const {post_id} = req.params;
    commentService.read(post_id)
    .then((data)=>{
        res.status(200)
        res.json({
            "success": true,
            "data":data
        })
    })
    .catch(err=>{
        res.status(400)
        res.json({
            "success": false,
            "err":err
        })
    })
})

//Update comment  !!!!FIX- no error on Postman, but db not updated!!!!
commentRouter.put('/:post_id', (req, res)=>{
    const {id} = req.params;
    const {comment_text} = req.body;
    commentService.update(id, comment_text)
    .then(()=>{
        res.status(200)
        res.json({
            "comment successfully updated":true
        })
    })
    .catch(err=>{
        res.status(400)
        res.json({
            "comment successfully updated":false, 
            "err":err
        })
    })
})

//Delete comment !!!!FIX- no error on Postman, but db not updated!!!!
commentRouter.delete('/:post_id', (req, res)=>{
    const {post_id} = req.params;
    commentService.delete(post_id)
    .then(()=>{
        res.status(200)
        res.json({
            "comment successfully deleted":true
        })
    })
    .catch(err=>{
        res.status(400)
        res.json({
            "comment successfully deleted":false, 
            "err": err
        })
    })
})


module.exports = commentRouter;