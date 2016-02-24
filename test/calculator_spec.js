import {expect} from 'chai';

import {calculator} from '../src/calculator';

describe('Calculator', () => {

  it('returns hello', () => {
      expect(calculator()).to.equal('hello');
  });

});
