const express = require('express');
const userRouter = express.Router();
const userService = require('../services/userService');

//Create User
userRouter.post('/', (req, res)=>{
    userService.create(req.body)
    .then(()=>{
        res.status(200)
        res.json({"success": true})
    })
    .catch(err=>{
        res.status(400)
        res.json({
            "success": false,
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



module.exports = userRouter;