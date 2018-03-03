import React from 'react';
import {shallow} from 'enzyme';
import Author from './Author';
import Avatar from './Avatar';

//  GitHub username
const author = 'mradenovic';
const src = `https://github.com/${author}.png`;
const href = `https://github.com/${author}`;

describe('<Author />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Author author={author}/>);
  });

  it('contains Avatar of the author', () => {
    const wrapper = shallow(<Author author={author}/>);
    const avatar = wrapper.find(Avatar);
    expect(avatar).toBeDefined();
    expect(avatar.props().src).toEqual(src);
  });

  it('contains GitHub link of the author', () => {
    const wrapper = shallow(<Author author={author}/>);
    const link = wrapper.find('a');
    expect(link).toBeDefined();
    expect(link.prop('href')).toEqual(href);
  });
});
