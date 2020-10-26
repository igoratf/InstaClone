import React from 'react';
import { shallow } from 'enzyme';
import AnchorButton from './anchor-button.component';

describe('AnchorButton component', () => {
  it('should render AnchorButton', () => {
    expect(shallow(<AnchorButton />)).toMatchSnapshot();
  })
})