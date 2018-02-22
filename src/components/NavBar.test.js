import React, {PropTypes} from 'react';
import {shallow, mount, render} from 'enzyme';
import NavBar from './NavBar';
import { version } from 'variadic.js/package.json';



describe('<NavBar />', () => {
  it('should render', () => {
    const wrapper = shallow(<NavBar />);
  });

  it('should contain version number', () => {
    const wrapper = mount(<NavBar />);
    expect(wrapper.text()).toContain(version);
  });
});
