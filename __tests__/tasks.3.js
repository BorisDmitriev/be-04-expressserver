const request = require('supertest');

describe('Endpoint `/hello`', () => {
  test('should respond', async () => {
    const app = require('../server');
    app.on('listening', () => {
      global.agent = request.agent(app);
    });
    const res = await request(app).get('/hello')
    expect(res.statusCode).toBe(200)
    expect(res.body).not.toBe('')
    app.close();
  })
});
