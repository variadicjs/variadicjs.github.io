import React from 'react';
import {shallow} from 'enzyme';
import Author from './Author';

//  GitHub username
const author = 'mradenovic';
const src = `https://github.com/${author}.png`;
const href = `https://github.com/${author}`;

describe('<Author />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Author author={author}/>);
  });

  it('contains GitHub image of the author', () => {
    const wrapper = shallow(<Author author={author}/>);
    const img = wrapper.find('img');
    expect(img).toBeDefined();
    expect(img.prop('src')).toEqual(src);
  });

  it('contains GitHub link of the author', () => {
    const wrapper = shallow(<Author author={author}/>);
    const link = wrapper.find('a');
    expect(link).toBeDefined();
    expect(link.prop('href')).toEqual(href);
  });
});
