const vowel = require('../codewars/level-seven(easy)/vowel-count');
const expect = require('chai').expect;


describe('When the solutions are tried for the vowel challenge', function(){
    it('solution one passes', function(){
        expect(vowel.vowelCount('Hello there!')).to.equal(4);
        expect(vowel.vowelCount('')).to.equal(0);
        expect(vowel.vowelCount('   ')).to.equal(0);
        expect(vowel.vowelCount('Dog (cat)|%s%(.*%)||plain=false')).to.equal(6);
    })
})
