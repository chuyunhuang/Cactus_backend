jest.mock('../services/dbConnect');
const db = require('../services/dbConnect');
const userService = require('../services/userService');

test('CREATE user returns a promise', done =>{
    db.none.mockImplementation((...rest)=>Promise.resolve())
    userService.create({
        "name": "a",
        "email": "b",
        "phoneNum": "c",
    })
    .then(()=>{
        expect(db.none.mock.calls[0][0]).toBe(`INSERT INTO users (name, email, phoneNum) VALUES ([name], [email], [phoneNum])`)
        expect(db.none.mock.calls[0][1]).toEqual({
            "name": "a",
            "email": "b",
            "phoneNum": "c",
        })
        done()
    })
})

test('READ user returns a promise', done =>{
    db.none.mockImplementation((...rest)=>Promise.resolve())
    userService.read()
    .then(()=>{
        expect(db.any.mock.calls[0][0]).toBe('')
        done()
    })
})