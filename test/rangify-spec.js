var expect = require('expect.js'),
    rangify = require('..');

describe('rangifyjs', function() {
  it('should convert string to array', function(done) {
    expect(rangify('1,2-3,5-6,7,9')).to.eql([1,2,3,5,6,7,9]);
    done();
  });
});
