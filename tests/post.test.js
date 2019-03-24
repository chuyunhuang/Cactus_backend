const supertest = require('supertest');
const {app,} = require('../app');


jest.mock('../services/postService')
const postService = require('../services/postService');

test('When making GET reques to /post, if db query is successful, expect 200', done =>{
    postService.read.mockImplementation(()=>{
        return Promise.resolve();
    })
    supertest(app)
        .get('/post')
        .then(response =>{
            expect(response.status).toBe(200)
            done()
        })
})

test('When making GET request to /post, if db query is NOT successful, expect 400', done =>{
    postService.read.mockImplementation(()=>{
        return Promise.reject();
    })
    supertest(app)
        .get('/post')
        .then(response =>{
            expect(response.status).toBe(400)
            done()
        })
})

test('When making POST request to /post, if db query is successful, expect 200', done =>{
    postService.create.mockImplementation(()=>{
        return Promise.resolve();
    })
    supertest(app)
        .post('/post')
        .then(response =>{
            expect(response.status).toBe(200)
            done()
        })
})

test('When making POST request to /post, if db query is NOT successful, expect 400', done =>{
    postService.create.mockImplementation(()=>{
        return Promise.reject();
    })
    supertest(app)
        .post('/post')
        .then(response =>{
            expect(response.status).toBe(400)
            done()
        })
})

test('When making PUT request to /post, if db query is successful, expect 200', done =>{
    postService.update.mockImplementation(()=>{
        return Promise.resolve();
    })
    supertest(app)
        .put('/post/:id')
        .then(response =>{
            expect(response.status).toBe(200)
            done()
        })
})

test('When making PUT request to /post, if db query is NOT successful, expect 400', done =>{
    postService.update.mockImplementation(()=>{
        return Promise.reject();
    })
    supertest(app)
        .put('/post/:id')
        .then(response =>{
            expect(response.status).toBe(400)
            done()
        })
})

test('When making DELETE request to /post, if db query is successful, expect 200', done =>{
    postService.delete.mockImplementation(()=>{
        return Promise.resolve();
    })
    supertest(app)
        .delete('/post/:id')
        .then(response =>{
            expect(response.status).toBe(200)
            done()
        })
})

test('When making DELETE request to /post, if db query is NOT successful, expect 400', done =>{
    postService.delete.mockImplementation(()=>{
        return Promise.reject();
    })
    supertest(app)
        .delete('/post/:id')
        .then(response =>{
            expect(response.status).toBe(400)
            done()
        })
})

