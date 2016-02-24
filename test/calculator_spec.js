import {expect} from 'chai';

import {add} from '../src/calculator';

describe('Calculator', () => {

  describe('add', () => {
    it('returns 0 for empty string', () => {
      expect(add("")).to.equal(0);
    });

    it('returns sum of values in string', () => {
      expect(add("1")).to.equal(1);
      expect(add("1,2,3,4,5")).to.equal(15);
    });
  });

});
