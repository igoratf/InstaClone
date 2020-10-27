import React from 'react';
import { shallow } from 'enzyme';
import Conversation from './conversation.component';

describe('Conversation component', () => {
  it('should render Conversation component', () => {
    expect(shallow(<Conversation />)).toMatchSnapshot();
  })
})