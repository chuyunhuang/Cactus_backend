const pgp = require("pg-promise")({});
// const db = pgp('postgres://localhost/cactus');
const mysql = require("mysql");
const db = getConnection();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "bd00d2f32ef759",
  password: "aa462a62",
  database: "heroku_a4d73e7dc681c99"
});

function getConnection() {
  return pool;
}
module.exports = db;
