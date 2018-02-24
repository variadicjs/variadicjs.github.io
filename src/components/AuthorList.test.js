import React from 'react';
import {shallow} from 'enzyme';

import AuthorList from './AuthorList';
import Author from './Author';

//  GitHub usernames
const authors = ['amr08', 'jhowardjf', 'mradenovic'];

describe('<AuthorList />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<AuthorList authors={authors}/>);
  });

  it('contains 3 authors', () => {
    const wrapper = shallow(<AuthorList authors={authors}/>);
    expect(wrapper.find(Author).length).toBe(3);
  });
});
