import React, { Component } from 'react';
import {MuiThemeProvider} from 'material-ui';
import Main from '../containers/Main';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Main />
      </MuiThemeProvider>
    );
  }
}

export default App;
