const digits = require('../simple-puzzles/playing-with-digits');
const expect = require('chai').expect;

describe('When the solutions are tried for the digits challenge', function(){
    it('solution one passes', function(){
        expect(digits.digPow(89, 1)).to.equal(1);
        expect(digits.digPow(92, 1)).to.equal(-1);
        expect(digits.digPow(46288, 3)).to.equal(51);
    })
})