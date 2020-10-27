import React from 'react';
import { shallow } from 'enzyme';
import CustomDialog from './custom-dialog.component';

describe('CustomDialog component', () => {
  it('should render CustomDialog component', () => {
    const mockProps = {
      open: jest.fn(),
      close: jest.fn()
    }
    expect(shallow(<CustomDialog {...mockProps}/>)).toMatchSnapshot();
  })
})