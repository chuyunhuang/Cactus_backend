const db = require('./dbConnect')

const likeService = {}

likeService.create = (post_id, like_author_id) =>{
    return db.none('INSERT INTO likes (post_id, like_author_id) VALUES (${post_id}, ${like_author_id})', {post_id, like_author_id})
}

likeService.read = (post_id) =>{
    return db.any('SELECT * FROM likes WHERE post_id = ${post_id}', {post_id})
}

likeService.delete = (id) =>{
    return db.none ('DELETE FROM likes WHERE id =${id}', {id})
}


module.exports = likeService;