const express = require('express');
const searchRouter = express.Router();
const searchService = require('../services/searchService');

//Read comments
searchRouter.get('/:id', (req, res)=>{
    const {id} = req.params;

    searchService.read(id)
    .then((data)=>{
        res.status(200)
        res.json({
            "success": true,
            "data": data
        })
    })
    .catch(err =>{
        res.status(400)
        res.json({
            "success": false,
            "err": err
        })
    })
})

module.exports = searchRouter;