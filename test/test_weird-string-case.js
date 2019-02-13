const weird = require('../simple-puzzles/weird-string-case');
const expect = require('chai').expect;

describe('When the solutions are tried for the weird challenge', function(){
    it('solution one passes', function(){
        expect(weird.toWeirdCaseOne('Hello there!')).to.equal('HeLlO ThErE!');
        expect(weird.toWeirdCaseOne('')).to.equal('');
        expect(weird.toWeirdCaseOne('   ')).to.equal('   ');
        expect(weird.toWeirdCaseOne('Dog (cat)|%s%(.*%)||plain=false')).to.equal('DoG (cAt)|%s%(.*%)||PlAiN=FaLsE');
    })
    it('solution two passes', function(){
        expect(weird.toWeirdCaseTwo('Hello there!')).to.equal('HeLlO ThErE!');
        expect(weird.toWeirdCaseTwo('')).to.equal('');
        expect(weird.toWeirdCaseTwo('   ')).to.equal('   ');
        expect(weird.toWeirdCaseTwo('Dog (cat)|%s%(.*%)||plain=false')).to.equal('DoG (cAt)|%s%(.*%)||PlAiN=FaLsE');
    })
})

