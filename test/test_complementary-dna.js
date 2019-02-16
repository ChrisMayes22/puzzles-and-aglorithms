const dna = require('../codewars/complementary-dna');
const expect = require('chai').expect;

describe('When the solutions are tried for the duplicate challenge', function(){
    it('solution one passes', function(){
        expect(dna.DNAStrand('ATTGC')).to.equal('TAACG');
    })
})