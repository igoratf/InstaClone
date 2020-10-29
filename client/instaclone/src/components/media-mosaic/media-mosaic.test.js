import React from 'react';
import { shallow } from 'enzyme';
import MediaMosaic from './media-mosaic.component';

describe('Media mosaic component', () => {
  it('should render media mosaic component', () => {
    const mockProps = {profilePosts: []};
    expect(shallow(<MediaMosaic {...mockProps}/>)).toMatchSnapshot();
  })
})