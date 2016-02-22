require('babel-polyfill');
var chai = require('chai');
var lexer = require('../lib/lexer.js');

chai.should();

describe('Lexer', function () { //eslint-disable-line no-undef
  it('should recognize integers', function (done) { //eslint-disable-line no-undef
    lexer('83462').should.equal('Integer.');
    done();
  });
  it('should recognize decimals', function (done) { //eslint-disable-line no-undef
    lexer('-39874.454').should.equal('Decimal.');
    done();
  });
  it('should recognize keywords', function (done) { //eslint-disable-line no-undef
    lexer('while').should.equal('Keyword.');
    done();
  });
  it('should recognize hexadecimal', function (done) { //eslint-disable-line no-undef
    lexer('ABCH').should.equal('Hexadecimal.');
    done();
  });
  it('should recognize scientific numbers', function (done) { //eslint-disable-line no-undef
    lexer('+234.34E-941').should.equal('Scientific.');
    done();
  });
  it('should recognize invalid syntax', function (done) { //eslint-disable-line no-undef
    lexer('124.235.234').should.equal('Invalid!');
    done();
  });
  it('should recognize identifiers', function (done) { //eslint-disable-line no-undef
    lexer('color').should.equal('Identifier.');
    done();
  });
  it('should recognize invalid syntax', function (done) { //eslint-disable-line no-undef
    lexer('-1.23E-3.5').should.equal('Invalid!');
    done();
  });
  it('should recognize invalid syntax', function (done) { //eslint-disable-line no-undef
    lexer('4.').should.equal('Invalid!');
    done();
  });
  it('should recognize integers', function (done) { //eslint-disable-line no-undef
    lexer('+0').should.equal('Integer.');
    done();
  });
  it('should recognize binary', function (done) { //eslint-disable-line no-undef
    lexer('111B').should.equal('Binary.');
    done();
  });
  it('should recognize indentifiers', function (done) { //eslint-disable-line no-undef
    lexer('FFFF').should.equal('Identifier.');
    done();
  });
  it('should recognize indentifiers', function (done) { //eslint-disable-line no-undef
    lexer('for4').should.equal('Identifier.');
    done();
  });
  it('should recognize invalid syntax', function (done) { //eslint-disable-line no-undef
    lexer('3dfx').should.equal('Invalid!');
    done();
  });
});
