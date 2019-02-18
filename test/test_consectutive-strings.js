const consecutive = require('../codewars/consecutive-strings');
const expect = require('chai').expect;

describe('When the solutions are tried for the consecutive challenge', function(){
    it('solution one passes', function(){
        expect(consecutive.longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)).to.equal("abigailtheta");
    })
})