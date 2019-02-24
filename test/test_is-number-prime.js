const prime = require('../codewars/level-six/is-number-prime');
const expect = require('chai').expect;

describe('When the solutions are tried for the prime challenge', function(){
    it('solution one passes', function(){
        expect(prime.isPrime(2)).to.be.true;
        expect(prime.isPrime(3)).to.be.true;
        expect(prime.isPrime(11)).to.be.true;
        expect(prime.isPrime(149)).to.be.true;
        expect(prime.isPrime(211)).to.be.true;
        expect(prime.isPrime(4)).to.be.false;
        expect(prime.isPrime(9)).to.be.false;
        expect(prime.isPrime(999999)).to.be.false;
        expect(prime.isPrime(0)).to.be.false;
        expect(prime.isPrime(-1)).to.be.false;
        expect(prime.isPrime(-11)).to.be.false;
    })
})