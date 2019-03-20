const express = require('express');
const userRouter = express.Router();
const userService = require('../services/userService');

//Create User
userRouter.post('/', (req, res)=>{
    userService.create(req.body)
    .then(()=>{
        res.status(200)
        res.json({"successfully created user": true})
    })
    .catch(err=>{
        res.status(400)
        res.json({
            "successfully created user": false,
            "err": err,
        })
    })
})


//Read User
userRouter.get('/', (req, res)=>{
    userService.read()
    .then(data =>{
        res.status(200)
        res.json({
            "success": true,
            "data": data,
        })
    })
    .catch(err=>{
        res.status(400)
        res.json({
            "success": false,
            "err": err,
        })
    })
})

//Update User
userRouter.put('/:id', (req, res)=>{
    const {id} = req.params;
    const {username, email, avatar} =req.body;

    userService.update(id, username, email, avatar)
    .then(()=>{
        res.status(200)
        res.json({"successfully updated user":true})
    })
    .catch(err=>{
        res.status(400)
        res.json({
            "successfully updated user":false,
            "err": err,
        })
    })
})


userRouter.delete('/:id',(req, res)=>{
    const {id} = req.params;
    userService.delete(id)
    .then(()=>{
        res.status(200)
        res.json({
            "successfully deleted user": true
        })
    })
    .catch(err=>{
        res.status(400)
        res.json({
            "successfully deleted user": false,
            "err": err
        })
    })
})


module.exports = userRouter;