const express = require('express');
const followerRouter = express.Router();
const followerService = require('../services/followerService');



//create follower
followerRouter.post('/', (req, res)=>{
   followerService.create(req.body)
   .then(()=>{
       res.status(200)
       res.json({
           "sucess":true
       })
   })
   .catch(err=>{
       res.status(400)
       res.json({
           "success": false,
           "err": err
       })
   })
})

//read one's following
followerRouter.get('/:follower_id', (req, res)=>{
    const {follower_id} = req.params

    followerService.read(follower_id)
    .then(data =>{
        res.status(200)
        res.json({
            "success": true,
            "Currently following": data
        })
    })
    .catch(err=>{
        res.status(400)
        res.json({
            "success": false, 
            "err": err
        })
    })
})


//Delete following
followerRouter.delete('/', (req, res)=>{
    const{follower_id, following_id} = req.body;
    
    followerService.delete(follower_id, following_id)
    .then(()=>{
        res.status(200)
        res.json({
            "Successfully deleted follower/following": true,
        })
    })
    .catch(err=>{
        res.status(400)
        res.json({
            "Successfully deleted follower/following": false,
            "err": err
        })
    })
})

module.exports = followerRouter;