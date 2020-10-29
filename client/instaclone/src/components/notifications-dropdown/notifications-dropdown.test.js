import React from 'react';
import { shallow } from 'enzyme';
import NotificationsDropdown from './notifications-dropdown.component';

describe('Notifications dropdown component', () => {
  it('should render notifications dropdown', () => {
    expect(shallow(<NotificationsDropdown />)).toMatchSnapshot();
  })
})