var chai = require('chai');
var app = require('..');
var should = chai.should();

describe('App', function () {
	it('should do nothing', function (done) {
		app.should.have.property('nothing');
		done();
	});
});