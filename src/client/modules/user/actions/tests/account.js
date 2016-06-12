const { describe, it } = global;
import { expect } from 'chai';
import { spy, stub } from 'sinon';
import actions from '../account';

describe('MODULE_NAME.actions.account', () => {
  describe('ACTION_NAME', () => {
    it('should reject if title is not there', () => {
      const LocalState = {set: spy()};
      actions.create({LocalState}, null, 'content');
      const args = LocalState.set.args[0];
      expect(args[0]).to.be.equal('SAVING_ERROR');
      expect(args[1]).to.match(/required/);
    });
  });
});
