const which = require('../codewars/level-six/which-are-in');
const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-shallow-deep-equal'));

describe('When the solutions are tried for the weird challenge', function(){
    it('solution one passes', function(){
        a1 = ["xyz", "live", "strong"]
        a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
        expect(which.inArray(a1, a2)).to.shallowDeepEqual(['live', 'strong']);
        expect(a1).to.shallowDeepEqual(["xyz", "live", "strong"]);
        expect(a2).to.shallowDeepEqual(["lively", "alive", "harp", "sharp", "armstrong"]);
    })
})