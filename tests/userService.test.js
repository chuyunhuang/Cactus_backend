jest.mock('../services/dbConnect');
const db = require('../services/dbConnect');
const userService = require('../services/userService');

// test('CREATE user returns a promise', done =>{
//     db.none.mockImplementation((...rest)=>Promise.resolve())
//     userService.create({
//         "username": "a",
//         "email": "b",
//         "avatar": "c",
//     })
//     .then(()=>{
//         expect(db.none.mock.calls[0][0]).toBe("`INSERT INTO users (username, email, avatar) VALUES (${username}, ${email}, ${avatar}`")
//         expect(db.none.mock.calls[0][1]).toEqual({
//             "name": "a",
//             "email": "b",
//             "phoneNum": "c",
//         })
//         done()
//     })
// })

test('READ user returns a promise', done =>{
    db.any.mockImplementation((...rest)=>Promise.resolve())
    userService.read()
    .then(()=>{
        expect(db.any.mock.calls[0][0]).toBe('SELECT * FROM users')
        done()
    })
})

