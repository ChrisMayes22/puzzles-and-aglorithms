const square = require('../codewars/level-seven(easy)/square-every-digit');
const expect = require('chai').expect;

describe('When the solutions are tried for the vowel challenge', function(){
    it('solution one passes', function(){
        expect(square.squareDigitsOne(22)).to.equal(44);
        expect(square.squareDigitsOne(516)).to.equal(25136);
        expect(square.squareDigitsOne(1675)).to.equal(1364925);
        expect(square.squareDigitsOne(0902)).to.equal(08104);
    })
})

describe('When the solutions are tried for the vowel challenge', function(){
    it('solution one passes', function(){
        expect(square.squareDigitsTwo(22)).to.equal(44);
        expect(square.squareDigitsTwo(516)).to.equal(25136);
        expect(square.squareDigitsTwo(1675)).to.equal(1364925);
        expect(square.squareDigitsTwo(0902)).to.equal(08104);
    })
})