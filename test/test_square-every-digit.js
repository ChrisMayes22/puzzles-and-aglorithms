const square = require('../simple-puzzles/square-every-digit');
const expect = require('chai').expect;

describe('When the solutions are tried for the vowel challenge', function(){
    it('solution one passes', function(){
        expect(square.squareDigits(22)).to.equal(44);
        expect(square.squareDigits(516)).to.equal(25136);
        expect(square.squareDigits(1675)).to.equal(1364925);
        expect(square.squareDigits(0902)).to.equal(08104);
    })
})