const fs = require('fs');

describe('JS file', () => {
  test('`server.js` should exist', (done) => {
    expect(fs.existsSync('./server.js')).toBeTruthy();
    done();
  })
})
