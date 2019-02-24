const tribo = require('../codewars/level-six/tribonacci');
const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-shallow-deep-equal'));

describe('When the solutions are tried for the tribonacci challenge', function(){
    it('solution one passes', function(){
        expect(tribo.tribonacci([1,1,1],10)).to.shallowDeepEqual([1,1,1,3,5,9,17,31,57,105]);
        expect(tribo.tribonacci([1,1,1],1)).to.shallowDeepEqual([1]);
        expect(tribo.tribonacci([1,1,1],2)).to.shallowDeepEqual([1,1]);
        expect(tribo.tribonacci([1,1,1],0)).to.shallowDeepEqual([]);
    })
})