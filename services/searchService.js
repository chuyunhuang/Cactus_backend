const db = require('./dbConnect');

const searchService = {}

searchService.read = (id)=>{
    return db.any('SELECT * FROM users WHERE id = ${id}', {id})
}


module.exports = searchService;