import React from 'react';
import { shallow } from 'enzyme';
import Header from './header.component';

describe('Header component', () => {
  it('should render Header component', () => {
    const mockProps = {
      location: '/'
    }
    expect(shallow(<Header {...mockProps}/>)).toMatchSnapshot();
  })
})