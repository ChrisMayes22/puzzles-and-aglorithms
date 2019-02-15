const shortestWord = require('../codewars/shortest-word');
const expect = require('chai').expect;

describe('When the solutions are tried for the shortestWord challenge', function(){
    it('solution one passes', function(){
        expect(shortestWord.findShortOne('When the solutions are tried for the shortestWord challenge')).to.equal(3);
        expect(shortestWord.findShortOne('supercalifragilisticexpialidocious')).to.equal(34);
        expect(shortestWord.findShortOne('I am the smallest mouse in the field')).to.equal(1);
    }),
    it('solution two passes', function(){
        expect(shortestWord.findShortTwo('When the solutions are tried for the shortestWord challenge')).to.equal(3);
        expect(shortestWord.findShortTwo('supercalifragilisticexpialidocious')).to.equal(34);
        expect(shortestWord.findShortTwo('I am the smallest mouse in the field')).to.equal(1);
    })
    it('solution three passes', function(){
        expect(shortestWord.findShort('When the solutions are tried for the shortestWord challenge')).to.equal(3);
        expect(shortestWord.findShort('supercalifragilisticexpialidocious')).to.equal(34);
        expect(shortestWord.findShort('I am the smallest mouse in the field')).to.equal(1);
    })
})