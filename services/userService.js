const db = require('./dbConnect');
const userService = {}

userService.create = (body)=>{
    const {name, email, phoneNum} = body;
    return db.none('INSERT INTO users (name, email, phoneNum) VALUES ([name], [email], [phoneNum])', {name, email, phoneNum})
}

userService.read = () =>{
    return db.any('SELECT * FROM users')
}

module.exports = userService;