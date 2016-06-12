const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Component from '../loading';

describe('MODULE_NAME.components.loading', () => {
  it('should not be null', () => {
    const el = shallow(<Component />);
    expect(el).not.to.be.null;
  });
});
