const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.get('/test', (req, res)=>{
    res.json({"express app working": true})
});

app.get('/', (req, res)=>{
    res.json({"test": true})
})
module.exports = {app,}