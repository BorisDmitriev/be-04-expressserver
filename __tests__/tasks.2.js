describe('app', () => {
  it('should be express instance', (done) => {
    const server = require('../server');
    expect(server.constructor.name).toBe('Server');
   server.close()
    done()
  })
})