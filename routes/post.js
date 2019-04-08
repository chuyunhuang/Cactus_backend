const express = require('express')
const postRouter = express.Router();
const postService = require('../services/postService');

//Create post
postRouter.post('/', (req, res)=>{
    postService.create(req.body)
    .then(()=>{
        res.status(200)
        res.json({
            "post successfully created": true
        })
    })
    .catch(err=>{
        res.status(400)
        res.json({
            "post successfully created": false,
            "err": err
        })
    })
})

//Get post
postRouter.get('/', (req, res) =>{
    postService.read()
    .then((data)=>{
        res.status(200)
        res.json({
            "data": data
        })
    })
    .catch(err=>{
        res.status(400)
        res.json({
            "err":err
        })
    })
})

postRouter.get('/userpost/:useruid', (req, res)=>{
    
    const {useruid} = req.params;
    
    postService.readbyuid(useruid)
    .then((data)=>{
        res.status(200)
        res.json({
            'success': true,
            'data': data
        })
    })
    .catch((err)=>{
        res.status(400)
        res.json({
            'success': false,
            'err': err
        })
    })
})

//Update post
postRouter.put('/:id', (req, res)=>{
    const {id} = req.params;
    const {image_url, caption} = req.body;
    postService.update(id, image_url, caption)
    .then(()=>{
        res.status(200)
        res.json({
            "post successfully updated": true
        })
    })
    .catch(err=>{
        res.status(400)
        res.json({
            "post successfully updated": false, 
            "err": err
        })
    })
})


//Delete post
postRouter.delete('/:id', (req, res)=>{
    const {id} = req.params;
    postService.delete(id)
    .then(()=>{
        res.status(200)
        res.json({"post deleted": true})
    })
    .catch(err=>{
        res.status(400)
        res.json({
            "post deleted": false,
            "err": err,
        })
    })
})

module.exports = postRouter;