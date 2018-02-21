import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CardList from './containers/CardList';
jest.mock('./containers/CardList');

beforeEach(() => {
  CardList.mockClear();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  expect(CardList.mock.calls.length).toBe(1);
});
