import React from 'react';
import { shallow } from 'enzyme';
import CustomTabs from './custom-tabs.component';

describe('CustomTabs component', () => {
  it('should render CustomTabs component', () => {
    const mockProps = {
      classes: null
    }
    expect(shallow(<CustomTabs {...mockProps}/>)).toMatchSnapshot();
  })
})