const inc = require('../codewars/level-five/increment-string');
const expect = require('chai').expect;

describe('When the solutions are tried for the incrementString challenge', function(){
    it('solution one passes', function(){
        expect(inc.incrementString('foo0000')).to.equal('foo0001');
        expect(inc.incrementString('foo999')).to.equal('foo1000');
        expect(inc.incrementString('foo989')).to.equal('foo990');
        expect(inc.incrementString('123foo432foo909')).to.equal('123foo432foo910');
    })
})