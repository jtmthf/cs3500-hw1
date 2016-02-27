require('babel-polyfill');
var chai = require('chai');
var lexer = require('../lib/lexer.js');

chai.should();

describe('Sample Input', function () { //eslint-disable-line no-undef
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

describe('State 0', function () { //eslint-disable-line no-undef
  it('should goto 1 on +', function (done) { //eslint-disable-line no-undef
    lexer('+').should.equal('Invalid!');
    done();
  });
  it('should goto 2 on 0', function (done) { //eslint-disable-line no-undef
    lexer('0').should.equal('Integer.');
    done();
  });
  it('should goto 3 on 2', function (done) { //eslint-disable-line no-undef
    lexer('2').should.equal('Integer.');
    done();
  });
  it('should goto 4 on A', function (done) { //eslint-disable-line no-undef
    lexer('A').should.equal('Identifier.');
    done();
  });
  it('should goto 5 on w', function (done) { //eslint-disable-line no-undef
    lexer('w').should.equal('Identifier.');
    done();
  });
  it('should goto 6 on e', function (done) { //eslint-disable-line no-undef
    lexer('e').should.equal('Identifier.');
    done();
  });
  it('should goto 7 on p', function (done) { //eslint-disable-line no-undef
    lexer('p').should.equal('Identifier.');
    done();
  });
  it('should goto 8 on a', function (done) { //eslint-disable-line no-undef
    lexer('a').should.equal('Identifier.');
    done();
  });
  it('should goto -1 on _', function (done) { //eslint-disable-line no-undef
    lexer('_').should.equal('Invalid!');
    done();
  });
});

describe('State 1', function () { //eslint-disable-line no-undef
  it('should goto 9 on +0', function (done) { //eslint-disable-line no-undef
    lexer('+0').should.equal('Integer.');
    done();
  });
  it('should goto -1 on +a', function (done) { //eslint-disable-line no-undef
    lexer('+a').should.equal('Invalid!');
    done();
  });
});

describe('State 2', function () { //eslint-disable-line no-undef
  it('should goto 16 on 0.', function (done) { //eslint-disable-line no-undef
    lexer('0.').should.equal('Invalid!');
    done();
  });
  it('should goto 2 on 00', function (done) { //eslint-disable-line no-undef
    lexer('00').should.equal('Integer.');
    done();
  });
  it('should goto 10 on 0B', function (done) { //eslint-disable-line no-undef
    lexer('0B').should.equal('Binary.');
    done();
  });
  it('should goto 32 on 0H', function (done) { //eslint-disable-line no-undef
    lexer('0H').should.equal('Hexadecimal.');
    done();
  });
  it('should goto 33 on 0A', function (done) { //eslint-disable-line no-undef
    lexer('0A').should.equal('Invalid!');
    done();
  });
  it('should goto 3 on 02', function (done) { //eslint-disable-line no-undef
    lexer('02').should.equal('Integer.');
    done();
  });
  it('should goto -1 on 0_', function (done) { //eslint-disable-line no-undef
    lexer('0_').should.equal('Invalid!');
    done();
  });
});

describe('State 3', function () { //eslint-disable-line no-undef
  it('should goto 3 on 20', function (done) { //eslint-disable-line no-undef
    lexer('20').should.equal('Integer.');
    done();
  });
  it('should goto 16 on 2.', function (done) { //eslint-disable-line no-undef
    lexer('2.').should.equal('Invalid!');
    done();
  });
  it('should goto 32 on 2H', function (done) { //eslint-disable-line no-undef
    lexer('2H').should.equal('Hexadecimal.');
    done();
  });
  it('should goto 33 on 2A', function (done) { //eslint-disable-line no-undef
    lexer('2A').should.equal('Invalid!');
    done();
  });
  it('should goto -1 on 2_', function (done) { //eslint-disable-line no-undef
    lexer('2_').should.equal('Invalid!');
    done();
  });
});

describe('State 4', function () { //eslint-disable-line no-undef
  it('should goto 17 on AH', function (done) { //eslint-disable-line no-undef
    lexer('AH').should.equal('Hexadecimal.');
    done();
  });
  it('should goto 11 on A0', function (done) { //eslint-disable-line no-undef
    lexer('A0').should.equal('Identifier.');
    done();
  });
  it('should goto 8 on A_', function (done) { //eslint-disable-line no-undef
    lexer('A_').should.equal('Identifier.');
    done();
  });
  it('should goto 4 on AA', function (done) { //eslint-disable-line no-undef
    lexer('AA').should.equal('Identifier.');
    done();
  });
  it('should goto -1 on A.', function (done) { //eslint-disable-line no-undef
    lexer('A.').should.equal('Invalid!');
    done();
  });
});

describe('State 5', function () { //eslint-disable-line no-undef
  it('should goto 12 on wh', function (done) { //eslint-disable-line no-undef
    lexer('wh').should.equal('Identifier.');
    done();
  });
  it('should goto 8 on wa', function (done) { //eslint-disable-line no-undef
    lexer('wa').should.equal('Identifier.');
    done();
  });
  it('should goto -1 on w.', function (done) { //eslint-disable-line no-undef
    lexer('w.').should.equal('Invalid!');
    done();
  });
});

describe('State 6', function () { //eslint-disable-line no-undef
  it('should goto 13 on el', function (done) { //eslint-disable-line no-undef
    lexer('el').should.equal('Identifier.');
    done();
  });
  it('should goto 14 on en', function (done) { //eslint-disable-line no-undef
    lexer('en').should.equal('Identifier.');
    done();
  });
  it('should goto 8 on ea', function (done) { //eslint-disable-line no-undef
    lexer('ea').should.equal('Identifier.');
    done();
  });
  it('should goto -1 on e.', function (done) { //eslint-disable-line no-undef
    lexer('e.').should.equal('Invalid!');
    done();
  });
});

describe('State 7', function () { //eslint-disable-line no-undef
  it('should goto 15 on pr', function (done) { //eslint-disable-line no-undef
    lexer('pr').should.equal('Identifier.');
    done();
  });
  it('should goto 8 on pa', function (done) { //eslint-disable-line no-undef
    lexer('pa').should.equal('Identifier.');
    done();
  });
  it('should goto -1 on p.', function (done) { //eslint-disable-line no-undef
    lexer('p.').should.equal('Invalid!');
    done();
  });
});

describe('State 8', function () { //eslint-disable-line no-undef
  it('should goto 8 on aa', function (done) { //eslint-disable-line no-undef
    lexer('aa').should.equal('Identifier.');
    done();
  });
  it('should goto -1 on a.', function (done) { //eslint-disable-line no-undef
    lexer('a.').should.equal('Invalid!');
    done();
  });
});

describe('State 9', function () { //eslint-disable-line no-undef
  it('should goto 9 on +00', function (done) { //eslint-disable-line no-undef
    lexer('+00').should.equal('Integer.');
    done();
  });
  it('should goto 16 on +0.', function (done) { //eslint-disable-line no-undef
    lexer('+0.').should.equal('Invalid!');
    done();
  });
  it('should goto -1 on +0a', function (done) { //eslint-disable-line no-undef
    lexer('+0a').should.equal('Invalid!');
    done();
  });
});

describe('State 10', function () { //eslint-disable-line no-undef
  it('should goto 33 on 0B', function (done) { //eslint-disable-line no-undef
    lexer('+00').should.equal('Integer.');
    done();
  });
  it('should goto 16 on +0.', function (done) { //eslint-disable-line no-undef
    lexer('+0.').should.equal('Invalid!');
    done();
  });
  it('should goto -1 on +0a', function (done) { //eslint-disable-line no-undef
    lexer('+0a').should.equal('Invalid!');
    done();
  });
});

describe('State 11', function () { //eslint-disable-line no-undef
  it('should goto 11 on A00', function (done) { //eslint-disable-line no-undef
    lexer('A00').should.equal('Identifier.');
    done();
  });
  it('should goto 8 on A0a', function (done) { //eslint-disable-line no-undef
    lexer('A0a').should.equal('Identifier.');
    done();
  });
  it('should goto 17 on A0H', function (done) { //eslint-disable-line no-undef
    lexer('A0H').should.equal('Hexadecimal.');
    done();
  });
  it('should goto -1 on A0.', function (done) { //eslint-disable-line no-undef
    lexer('A0.').should.equal('Invalid!');
    done();
  });
});

describe('State 12', function () { //eslint-disable-line no-undef
  it('should goto 18 on whi', function (done) { //eslint-disable-line no-undef
    lexer('whi').should.equal('Identifier.');
    done();
  });
  it('should goto 8 on wha', function (done) { //eslint-disable-line no-undef
    lexer('wha').should.equal('Identifier.');
    done();
  });
  it('should goto -1 on wh.', function (done) { //eslint-disable-line no-undef
    lexer('wh.').should.equal('Invalid!');
    done();
  });
});

describe('State 13', function () { //eslint-disable-line no-undef
  it('should goto 19 on els', function (done) { //eslint-disable-line no-undef
    lexer('els').should.equal('Identifier.');
    done();
  });
  it('should goto 8 on ela', function (done) { //eslint-disable-line no-undef
    lexer('ela').should.equal('Identifier.');
    done();
  });
  it('should goto -1 on el.', function (done) { //eslint-disable-line no-undef
    lexer('el.').should.equal('Invalid!');
    done();
  });
});

describe('State 14', function () { //eslint-disable-line no-undef
  it('should goto 20 on end', function (done) { //eslint-disable-line no-undef
    lexer('end').should.equal('Keyword.');
    done();
  });
  it('should goto 8 on ena', function (done) { //eslint-disable-line no-undef
    lexer('ena').should.equal('Identifier.');
    done();
  });
  it('should goto -1 on en.', function (done) { //eslint-disable-line no-undef
    lexer('en.').should.equal('Invalid!');
    done();
  });
});

describe('State 15', function () { //eslint-disable-line no-undef
  it('should goto 21 on pri', function (done) { //eslint-disable-line no-undef
    lexer('pri').should.equal('Identifier.');
    done();
  });
  it('should goto 8 on pra', function (done) { //eslint-disable-line no-undef
    lexer('pra').should.equal('Identifier.');
    done();
  });
  it('should goto -1 on pr.', function (done) { //eslint-disable-line no-undef
    lexer('pr.').should.equal('Invalid!');
    done();
  });
});

describe('State 16', function () { //eslint-disable-line no-undef
  it('should goto 24 on +0.0', function (done) { //eslint-disable-line no-undef
    lexer('+0.0').should.equal('Decimal.');
    done();
  });
  it('should goto -1 on +0.a', function (done) { //eslint-disable-line no-undef
    lexer('+0.a').should.equal('Invalid!');
    done();
  });
});

describe('State 17', function () { //eslint-disable-line no-undef
  it('should goto 8 on AH_', function (done) { //eslint-disable-line no-undef
    lexer('AH_').should.equal('Identifier.');
    done();
  });
  it('should goto -1 on AH.', function (done) { //eslint-disable-line no-undef
    lexer('AH.').should.equal('Invalid!');
    done();
  });
});

describe('State 18', function () { //eslint-disable-line no-undef
  it('should goto 25 on whil', function (done) { //eslint-disable-line no-undef
    lexer('whil').should.equal('Identifier.');
    done();
  });
  it('should goto 8 on whia', function (done) { //eslint-disable-line no-undef
    lexer('whia').should.equal('Identifier.');
    done();
  });
  it('should goto -1 on whi.', function (done) { //eslint-disable-line no-undef
    lexer('whi.').should.equal('Invalid!');
    done();
  });
});

describe('State 19', function () { //eslint-disable-line no-undef
  it('should goto 25 on whil', function (done) { //eslint-disable-line no-undef
    lexer('whil').should.equal('Identifier.');
    done();
  });
  it('should goto 8 on whia', function (done) { //eslint-disable-line no-undef
    lexer('whia').should.equal('Identifier.');
    done();
  });
  it('should goto -1 on whi.', function (done) { //eslint-disable-line no-undef
    lexer('whi.').should.equal('Invalid!');
    done();
  });
});
