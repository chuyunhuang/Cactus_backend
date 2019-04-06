
var admin = require("firebase-admin");

var serviceAccount = require("./firebaseKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cactus-338da.firebaseio.com"
});

module.exports = admin;