const request = require('supertest');

describe('Endpoint `/random`', () => {
  test('should respond', async () => {
    const app = require('../server');
    app.on('listening', () => {
      global.agent = request.agent(app);
    });
    const res = await request(app).get('/random')
    expect(res.statusCode).toBe(200)
    expect(res.body).not.toBe('')
  })

  test('should respond with number', async () => {
    const app = require('../server');
    const res = await request(app).get('/random')
    expect(res.text).not.toBe('')
    expect(res.text).toMatch(/[0-9]/)
    app.close();
  })
});