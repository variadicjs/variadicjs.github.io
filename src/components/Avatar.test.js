import React from 'react';
import {shallow} from 'enzyme';
import Avatar from './Avatar';

//  GitHub username
const author = 'mradenovic';
const src = `https://github.com/${author}.png`;

describe('<Avatar />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Avatar src={src} alt={author}/>);
  });

  it('contains GitHub image of the author', () => {
    const wrapper = shallow(<Avatar src={src} alt={author}/>);
    const img = wrapper.find('img');
    expect(img).toBeDefined();
    expect(img.prop('src')).toEqual(src);
    expect(img.prop('alt')).toEqual(author);
  });
});
