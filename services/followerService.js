const db = require('./dbConnect')

const followerService = {}

followerService.create = (body) =>{
    const {follower_id, following_id} =body
    return db.none('INSERT INTO followers (follower_id, following_id) VALUES (${follower_id}, ${following_id})', {follower_id, following_id})
}

//get one's following
followerService.readMyFollowing = (follower_id) =>{
    return db.any(`SELECT * 
	    FROM followers JOIN users 
		    ON followers.following_id = users.useruid 
			    WHERE follower_id = $[follower_id]`, {follower_id})
}

followerService.readMyFollowers = (follower_id) =>{
    return db.any(`SELECT * 
	    FROM followers JOIN users 
		    ON followers.follower_id = users.useruid 
			    WHERE following_id = $[follower_id]`, {follower_id})
}

followerService.delete = (follower_id, following_id) =>{
    return db.none('DELETE FROM followers WHERE follower_id = ${follower_id} AND following_id = ${following_id}', {follower_id, following_id})
}

module.exports = followerService;