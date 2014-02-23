var expect = require('chai').expect,
    rangify = require('..');

describe('rangifyjs', function() {
  it('should convert string to array', function(done) {
    expect(rangify('1,2-3,5-6,7,9')).to.eql([1,2,3,5,6,7,9]);
    done();
  });

  it('should reduce an array to string representation', function(done) {
    expect(rangify([3, 4, 5, 1, 2, 6, 9, 11, 12])).to.eql('1-6,9,11-12');
    done();
  });

  it('should throw an error if neither an array or string is passed to rangify() facade.', function() {
    expect(function() { rangify({}); }).to.throw();
    expect(function() { rangify([]); }).to.not.throw();
    expect(function() { rangify(''); }).to.not.throw();
  });
});
