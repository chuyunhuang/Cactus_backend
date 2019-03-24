const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const commentRouter = require('./routes/comment');
const likeRouter = require('./routes/like');
const searchRouter = require('./routes/search');
const followerRouter = require('./routes/follower');

//Middleware
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/test', (req, res)=>{
    res.json({"express app working": true})
});


app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/comment', commentRouter)
app.use('/like', likeRouter)
app.use('/search', searchRouter)
app.use('/follower', followerRouter)

module.exports = {app,}