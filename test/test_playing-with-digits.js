const digits = require('../codewars/playing-with-digits');
const expect = require('chai').expect;

describe('When the solutions are tried for the digits challenge', function(){
    it('solution one passes', function(){
        expect(digits.digPowOne(89, 1)).to.equal(1);
        expect(digits.digPowOne(92, 1)).to.equal(-1);
        expect(digits.digPowOne(46288, 3)).to.equal(51);
    })
    it('solution two passes', function(){
        expect(digits.digPowTwo(89, 1)).to.equal(1);
        expect(digits.digPowTwo(92, 1)).to.equal(-1);
        expect(digits.digPowTwo(46288, 3)).to.equal(51);
    })
})