const duplicate = require('../codewars/level-six/duplicate-encoder');
const expect = require('chai').expect;

describe('When the solutions are tried for the duplicate challenge', function(){
    it('solution one passes', function(){
        expect(duplicate.duplicateEncode('din')).to.equal('(((');
        expect(duplicate.duplicateEncode('recede')).to.equal('()()()');
        expect(duplicate.duplicateEncode('Success')).to.equal(')())())');
        expect(duplicate.duplicateEncode('(( @')).to.equal('))((');
    })
})