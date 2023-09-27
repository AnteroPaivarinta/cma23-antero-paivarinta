const request = require('supertest');
const app = require('./userRouter'); // Tuo Express-sovellus tiedostosta app.js (tai vastaava)

describe('Server', () => {
  it('register', async () => {
    const response = await request(app)
      .get('/register');
    expect(response.statusCode).toBe(201);
  });

  it('login', async () => {
    const response = await request(app)
      .get('/login');
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual('Hello World!');
  });
});