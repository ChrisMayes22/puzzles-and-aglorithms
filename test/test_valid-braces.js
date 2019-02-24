const braces = require('../codewars/level-six/valid-braces');
const expect = require('chai').expect;

describe('When the solutions are tried for the braces challenge', function(){
    it('solution one passes', function(){
        expect(braces.validBraces('()[]{}')).to.be.true;
        expect(braces.validBraces('([{}])')).to.be.true;
        expect(braces.validBraces('([{')).to.be.false;
        expect(braces.validBraces('([)]')).to.be.false;
    })
})