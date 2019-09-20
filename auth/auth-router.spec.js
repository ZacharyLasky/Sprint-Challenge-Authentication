const request = require("supertest")
const server = require("../api/server")

// TEST 1 and 2 for Register
describe('auth-router.js', () => {
  describe('POST /register', () => {
    let user = {
      username: "zach20",
      password: "pass20"
    }
    it('returns 201 - created', () => {
      return request(server)
        .post('/api/auth/register')
        .send(user)
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it('is a JSON Object', () => {
      return request(server)
        .post('/api/auth/register')
        .send(user)
        .then(res => {
          expect(res.type).toMatch(/json/i)
        });
    });
  });
});

// describe('router.js', () => {
//   describe('POST /register', () => {
//     let user = {
//       username: "zach",
//       password: "pass1"
//     }
//     it('returns 200 ok & toMatch json', () => {
//       return request(server)
//         .post('/api/login')
//         .send(user)
//         .then(res => {
//           expect(res.status).toBe(200);
//           expect(res.type).toMatch(/json/i)
//         });
//     });
//   });
// });