const express = require('express');
const likeRouter = express.Router();
const likeService = require('../services/likeService');

//Create like
likeRouter.post('/:post_id', (req, res)=>{
    console.log('post was hit')
    console.log(req.params)
    console.log(req.body)
    
    const{post_id} = req.params;
    const {like_author_id} = req.body;

    likeService.create(post_id, like_author_id)
    .then(()=>{
        res.status(200)
        res.json({
            "like created": true
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(400)
        res.json({
            "like created":false, 
            "err":err
        })
        
    })
})

//Read like
likeRouter.get('/:post_id', (req, res)=>{
    const{post_id} = req.params;
    
    likeService.read(post_id)
    .then((data)=>{
        res.status(200)
        res.json({
            "data ": data
        })
    })
    .catch(err=>{
        res.status(400)
        res.json({
            "err":err
        })
    })
})

//Delete like
likeRouter.delete('/:id', (req, res)=>{
    const{id} = req.params;
    likeService.delete(id)
    .then(()=>{
        res.status(200)
        res.json({
            "like deleted ": true
        })
    })
    .catch(err=>{
        res.status(400)
        res.json({
            "like deleted": false,
            "err":err
        })
    })
})

module.exports = likeRouter;