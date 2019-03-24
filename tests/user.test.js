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

test('When making PUT request to /user, if db query is successful, expect 200', done =>{
    userService.update.mockImplementation(()=>{
        return Promise.resolve();
    })
    supertest(app)
        .put('/user/:id')
        .then(response =>{
            expect(response.status).toBe(200)
            done()
        })
})

test('When making PUT request to /user, if db query is NOT successul, expect 400', done =>{
    userService.update.mockImplementation(()=>{
        return Promise.reject();
    })
    supertest(app)
      .put('/user/:id')
      .then(response =>{
          expect(response.status).toBe(400)
          done()
      })
})

test('When making DELET request to /user, if db query is successful, expect 200', done =>{
    userService.delete.mockImplementation(()=>{
        return Promise.resolve();
    })
    supertest(app)
     .delete('/user/:id')
     .then(response =>{
         expect(response.status).toBe(200)
         done()
     })
})

test('When making DELETE request to /user, if db query is NOT successfulm expect 400', done =>{
    userService.delete.mockImplementation(()=>{
        return Promise.reject();
    })
    supertest(app)
     .delete('/user/:id')
     .then(response =>{
         expect(response.status).toBe(400)
         done()
     })
})