import React, {PropTypes} from 'react';
import {shallow, mount, render} from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavBar from './NavBar';

const muiTheme = getMuiTheme();

describe('<NavBar />', () => {
  it('should render', () => {
    const wrapper = shallow(<NavBar />);
  });

  xit('should render within muiTheme', () => {
    //  TODO figure out how to render with muiTheme
    const wrapper = mount(<NavBar />, {
      context: {muiTheme},
      childContextTypes: {muiTheme: React.PropTypes.object}
    });
  });
});
