const supertest = require('supertest');
const {app,} = require('../app');

jest.mock('../services/userService')
const userService = require('../services/userService');

test('When making GET request to /user, if db query is successful, expect 200', done =>{
  userService.read.mockImplementation(() =>{
        return Promise.resolve();
    })
    supertest(app)
        .get('/user')
        .then(response=>{
            expect(response.status).toBe(200)
            done()
        })
})

test('When making GET request to /user, if db query is NOT successful, expect 400', done =>{
    userService.read.mockImplementation(() =>{
          return Promise.reject();
      })
      supertest(app)
          .get('/user')
          .then(response=>{
              expect(response.status).toBe(400)
              done()
          })
  })

  test('When making POST request to /user, if db query is successful, expect 200', done =>{
    userService.create.mockImplementation(() =>{
          return Promise.resolve();
      })
      supertest(app)
          .post('/user')
          .then(response=>{
              expect(response.status).toBe(200)
              done()
          })
  })
  
test('When making POST request to /user, if db query is NOT successful, expect 400', done =>{
    userService.create.mockImplementation(()=>{
        return Promise.reject();
    })
    supertest(app)
        .post('/user')
        .then(response =>{
            expect(response.status).toBe(400)
            done()
        })
})