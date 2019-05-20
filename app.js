const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const admin = require("./firebase");

const app = express();
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const commentRouter = require("./routes/comment");
const likeRouter = require("./routes/like");
const searchRouter = require("./routes/search");
const followerRouter = require("./routes/follower");

//Middleware
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//Firebase-admin
const checkFirebaseToken = (req, res, next) => {
  const token = req.body;

  admin
    .auth()
    .verifyIdToken(token)
    .then(function(decodedToken) {
      var uid = decodedToken.uid;
      next();
    })
    .catch(err => {
      res.json(err);
    });
};

app.post("/test", checkFirebaseToken, (req, res) => {
  res.json({ "express app working": true });
});

app.get("/", (req, res) => {
  res.send("HELLLLLLOOOOO!!!!");
});

app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);
app.use("/like", likeRouter);
app.use("/search", searchRouter);
app.use("/follower", followerRouter);

module.exports = { app };
