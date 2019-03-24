const supertest = require('supertest');
const  {app, } = require('../app');

jest.mock('../services/searchService');
const searchService = require('../services/searchService');

test('When making GET request to /search, if db query is successful, expect 200', done =>{
    searchService.read.mockImplementation(()=>{
        return Promise.resolve();
    })
    supertest(app)
        .get('/search/:id')
        .then(response =>{
            expect(response.status).toBe(200)
            done()
        })
})

test('When making GET request to /search, if db query is NOT successful, expect 400', done =>{
    searchService.read.mockImplementation(()=>{
        return Promise.reject();
    })
    supertest(app)
        .get('/search/:id')
        .then(response =>{
            expect(response.status).toBe(400)
            done()
        })
})