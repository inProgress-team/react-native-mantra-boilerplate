const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Component from '../login';

describe('MODULE_NAME.components.login', () => {
  it('should not be null', () => {
    const el = shallow(<Component />);
    expect(el).not.to.be.null;
  });
});
