const request = require("supertest")
const server = require("../api/server")

// TEST 1 and 2 for Register
describe('auth-router.js', () => {
  describe('POST /register', () => {
    let user = {
      username: "zach25",
      password: "pass25"
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

// TEST 1 and 2 for Login
describe('auth-router.js', () => {
  describe('POST /login', () => {
    let user = {
      username: "zach25",
      password: "pass25"
    }
    it('returns 200 - ok', () => {
      return request(server)
        .post('/api/auth/login')
        .send(user)
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it('is a JSON Object', () => {
      return request(server)
        .post('/api/auth/login')
        .send(user)
        .then(res => {
          expect(res.type).toMatch(/json/i)
        });
    });
  });
});

// TEST for GET users
describe('auth-router.js', () => {
  describe('GET /', () => {
    it('is returns a JSON Object', () => {
      return request(server)
        .get('/api/auth')
        // .send(user)
        .then(res => {
          expect(res.type).toMatch(/json/i)
        });
    });
  });
});
