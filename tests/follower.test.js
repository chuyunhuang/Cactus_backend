const supertest = require('supertest');
const{app,} = require('../app');

jest.mock('../services/followerService');
const followerService = require('../services/followerService');

test('When making GET following request to /follower, if db query is successful, expect 200', done =>{
    followerService.read.mockImplementation(()=>{
        return Promise.resolve();
    })
    supertest(app)
        .get('/follower/:follower_id')
        .then(response =>{
            expect(response.status).toBe(200)
            done()
        })
})

test('When making GET following request to /follower, if db query is NOT successful, expect 400', done =>{
    followerService.read.mockImplementation(()=>{
        return Promise.reject();
    })
    supertest(app)
        .get('/follower/:follower_id')
        .then(response =>{
            expect(response.status).toBe(400)
            done()
        })
})

test('When making POST request to /follower, id db query is successful, expect 200', done =>{
    followerService.create.mockImplementation(()=>{
        return Promise.resolve();
    })
    supertest(app)
        .post('/follower')
        .then(response =>{
            expect(response.status).toBe(200)
            done()
        })
})

test('When making POST request to /follower, id db query is NOT successful, expect 400', done =>{
    followerService.create.mockImplementation(()=>{
        return Promise.reject();
    })
    supertest(app)
        .post('/follower')
        .then(response =>{
            expect(response.status).toBe(400)
            done()
        })
})



test('When making DELETE request to /follower, if db query is successful, expect 200', done =>{
    followerService.delete.mockImplementation(()=>{
        return Promise.resolve();
    })
    supertest(app)
        .delete('/follower')
        .then(response =>{
            expect(response.status).toBe(200)
            done()
        })
})

test('When making DELETE request to /follower, if db query is NOT successful, expect 400', done =>{
    followerService.delete.mockImplementation(()=>{
        return Promise.reject();
    })
    supertest(app)
        .delete('/follower')
        .then(response =>{
            expect(response.status).toBe(400)
            done()
        })
})