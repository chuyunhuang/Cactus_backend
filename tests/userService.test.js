jest.mock('../services/dbConnect');
const db = require('../services/dbConnect');
const userService = require('../services/userService');

test('CREATE user returns a promise', done =>{
    db.none.mockImplementation((...rest)=>Promise.resolve())
    userService.create({
        "username": "a",
        "email": "b",
        "avatar": "c",
    })
    .then(()=>{
        expect(db.none.mock.calls[0][0]).toBe('INSERT INTO users (username, email, avatar) VALUES (${username}, ${email}, ${avatar})')
        expect(db.none.mock.calls[0][1]).toEqual({
            "username": "a",
            "email": "b",
            "avatar": "c",
        })
        done()
    })
})


test('READ user returns a promise', done =>{
    db.any.mockImplementation((...rest)=>Promise.resolve())
    userService.read()
    .then(()=>{
        expect(db.any.mock.calls[0][0]).toBe('SELECT * FROM users')
        done()
    })
})

// test('UPDATE user returns a promise', done =>{
//     db.none.mockImplementation((...rest)=>Promise.resolve())
//     userService.update({
//         "username": "x",
//         "email": "y",
//         "avatar": "z",
//     })
//     userService.update()
//     .then(()=>{
//         expect(db.none.mock.calls[0][0]).toBe('UPDATE users SET username = ${username}, email = ${email}, avatar = ${avatar} WHERE id = ${id}')
//         expect(db.none.mock.calls[0][1]).toEqual({
//             "username": "x",
//             "email": "y",
//             "avatar": "z",
//         })
//         done()
//     })
// })

// test('Delete user returns a promise', done =>{
//     db.none.mockImplementation((...rest)=> Promise.resolve())
//     userService.delete()
//     .then(()=>{
//         expect(db.none.mock.calls[0][0]).toBe('DELETE FROM users WHERE id = ${id}')
//         done()
//     })
// })


