import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './search-box.component';

describe('Search Box component', () => {
  it('should render Search Box', () => {
    expect(shallow(<SearchBox />)).toMatchSnapshot();
  })
})