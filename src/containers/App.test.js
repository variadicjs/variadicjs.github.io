import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './App';
import CardList from './CardList';

describe('<App />', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
  });

  it('has card 1 CardList component', () => {
    const app = shallow(<App />)
    expect(app.find(CardList).length).toBe(1);
  });
});
