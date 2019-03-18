const supertest = require('supertest');

const {app,} = require('../app');

test('When making GET request to /test, we get back {"express app working": true}', done =>{
    supertest(app)
    .get('/test')
    .then(response=>{
        expect(response.body).toEqual({"express app working": true})
        done()
    })
}) 