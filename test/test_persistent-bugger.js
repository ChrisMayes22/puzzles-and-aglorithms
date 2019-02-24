const persistent = require('../codewars/level-six/persistent-bugger');
const expect = require('chai').expect;

describe('When the solutions are tried for the persistent challenge', function(){
    it('solution one passes', function(){
        expect(persistent.persistence(39)).to.equal(3);
        expect(persistent.persistence(999)).to.equal(4);
        expect(persistent.persistence(4)).to.equal(0);
        expect(persistent.persistence(912312302)).to.equal(1);
    })
})