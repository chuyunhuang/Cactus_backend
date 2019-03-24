const supertest = require('supertest');
const {app, } = require('../app');

jest.mock('../services/commentService');
const commentService = require('../services/commentService');

test('When making GET request to /comment, if db query is successful, expect 200', done =>{
    commentService.read.mockImplementation(()=>{
        return Promise.resolve();
    })
    supertest(app)
        .get('/comment/:post_id')
        .then(response =>{
            expect(response.status).toBe(200)
            done()
        })
})

test('When making GET request to /comment, if db query is NOT successful, expect 400', done =>{
    commentService.read.mockImplementation(()=>{
        return Promise.reject();
    })
    supertest(app)
        .get('/comment/:post_id')
        .then(response =>{
            expect(response.status).toBe(400)
            done()
        })
})

test('When making POST request to /comment, if db query is successful, expect 200', done =>{
    commentService.create.mockImplementation(()=>{
        return Promise.resolve();
    })
    supertest(app)
        .post('/comment/:post_id')
        .then(response =>{
            expect(response.status).toBe(200)
            done()
        })
})


test('When making POST request to /comment, if db query is successful, expect 400', done =>{
    commentService.create.mockImplementation(()=>{
        return Promise.reject();
    })
    supertest(app)
        .post('/comment/:post_id')
        .then(response =>{
            expect(response.status).toBe(400)
            done()
        })
})

test('When making PUT request to /comment, if db query is successful, expect 200', done =>{
    commentService.update.mockImplementation(()=>{
        return Promise.resolve()
    })
    supertest(app)
        .put('/comment/:post_id')
        .then(response =>{
            expect(response.status).toBe(200)
            done()
        })
})

test('When making PUT request to /comment, if db query is NOT successful, expect 400', done =>{
    commentService.update.mockImplementation(()=>{
        return Promise.reject()
    })
    supertest(app)
        .put('/comment/:post_id')
        .then(response =>{
            expect(response.status).toBe(400)
            done()
        })
})

test('When making DELETE request to /comment, if db query is successful, expect 200', done =>{
    commentService.delete.mockImplementation(()=>{
        return Promise.resolve()
    })
    supertest(app)
        .delete('/comment/:id')
        .then(response =>{
            expect(response.status).toBe(200)
            done()
        })
})

test('When making DELETE request to /comment, if db query is NOT successful, expect 400', done =>{
    commentService.delete.mockImplementation(()=>{
        return Promise.reject()
    })
    supertest(app)
        .delete('/comment/:id')
        .then(response =>{
            expect(response.status).toBe(400)
            done()
        })
})