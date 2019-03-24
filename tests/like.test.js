const supertest = require('supertest');
const {app, }= require('../app');

jest.mock('../services/likeService');
const likeService = require('../services/likeService');

test('When making GET request to /like, if db query is successful, expect 200', done =>{
    likeService.read.mockImplementation(()=>{
        return Promise.resolve();
    })
    supertest(app)
        .get('/like/:post_id')
        .then(response =>{
            expect(response.status).toBe(200)
            done()
        })
})

test('When making GET request to /like, if db query is NOT successful, expect 400', done =>{
    likeService.read.mockImplementation(()=>{
        return Promise.reject();
    })
    supertest(app)
    .get('/like/:post_id')
    .then(response =>{
        expect(response.status).toBe(400)
        done()
    })
})

test('When making POST request to /like, if db query is successful, expect 200', done=>{
    likeService.create.mockImplementation(()=>{
        return Promise.resolve();
    })
    supertest(app)
        .post('/like/:post_id')
        .then(response =>{
            expect(response.status).toBe(200)
            done()
        })
})

test('When making POST request to /like, if db query is NOT successful, expect 400', done=>{
    likeService.create.mockImplementation(()=>{
        return Promise.reject();
    })
    supertest(app)
        .post('/like/:post_id')
        .then(response =>{
            expect(response.status).toBe(400)
            done()
        })
})

test('When making Delete request to /like, id db query is successful, expect 200', done =>{
    likeService.delete.mockImplementation(()=>{
        return Promise.resolve();
    })
    supertest(app)
        .delete('/like/:id')
        .then(response =>{
            expect(response.status).toBe(200)
            done()
        })
})

test('When making Delete request to /like, id db query is NOT successful, expect 400', done =>{
    likeService.delete.mockImplementation(()=>{
        return Promise.reject();
    })
    supertest(app)
        .delete('/like/:id')
        .then(response =>{
            expect(response.status).toBe(400)
            done()
        })
})