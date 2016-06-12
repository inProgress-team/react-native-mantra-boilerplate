const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Component from '../error';

describe('MODULE_NAME.components.error', () => {
  it('should not be null', () => {
    const el = shallow(<Component />);
    expect(el).not.to.be.null;
  });
});
