const db = require('./dbConnect');
const userService = {}

userService.create = (body)=>{
    const {username, email, avatar, useruid} = body;
    return db.none('INSERT INTO users (username, email, avatar, useruid) VALUES (${username}, ${email}, ${avatar}, ${useruid})', {username, email, avatar, useruid})
}

userService.read = () =>{
    return db.any('SELECT * FROM users')
}

userService.update = (id, username, email, avatar) =>{
    return db.none('UPDATE users SET username = ${username}, email = ${email}, avatar = ${avatar} WHERE id = ${id}', {id, username, email, avatar})
}

userService.delete = (id) =>{
    return db.none('DELETE FROM users WHERE id = ${id}', {id})
}


module.exports = userService;