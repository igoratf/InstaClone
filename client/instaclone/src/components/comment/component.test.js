import React from 'react';
import { shallow, mount } from 'enzyme';
import Comment from './comment.component';

describe('Comment component', () => {
  let wrapper;
  let mockProps = {
    author: 'Author',
    content: 'Content'
  };
  const mockSetState = jest.fn();
  jest.mock('react', () => ({
    useState: initial => [initial, mockSetState]
  }));

  beforeEach(() => {
    wrapper = shallow(<Comment {...mockProps} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should render Comment component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render filled like button when like is clicked', () => {
    let mockProps = {
      author: 'Author',
      content: 'Content'
    };

    const newWrapper = mount(<Comment {...mockProps} />);
    newWrapper.find("LikeButton").simulate('click');
    expect(newWrapper.exists("DislikeButton")).toBe(true);
  });

  it('should render like button when liked is clicked twice', () => {
    let mockProps = {
      author: 'Author',
      content: 'Content'
    };

    const newWrapper = mount(<Comment {...mockProps} />);
    newWrapper.find("LikeButton").simulate('click');
    newWrapper.find("DislikeButton").simulate('click');
    expect(newWrapper.exists("LikeButton")).toBe(true);
  });

})