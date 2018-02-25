import React from 'react';
import {shallow} from 'enzyme';
import Avatar from './Avatar';

//  GitHub username
const author = 'mradenovic';
const src = `https://github.com/${author}.png`;
const href = `https://github.com/${author}`;

describe('<Author />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Avatar href={href} src={src} alt={author}/>);
  });

  it('contains GitHub image of the author', () => {
    const wrapper = shallow(<Avatar href={href} src={src} alt={author}/>);
    const img = wrapper.find('img');
    expect(img).toBeDefined();
    expect(img.prop('src')).toEqual(src);
  });

  it('contains GitHub link of the author', () => {
    const wrapper = shallow(<Avatar href={href} src={src} alt={author}/>);
    const link = wrapper.find('a');
    expect(link).toBeDefined();
    expect(link.prop('href')).toEqual(href);
  });
});
