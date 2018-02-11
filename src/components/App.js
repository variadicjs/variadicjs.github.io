import React, { Component } from 'react';
import {MuiThemeProvider} from 'material-ui';
import CardList from '../containers/CardList';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <CardList />
      </MuiThemeProvider>
    );
  }
}

export default App;
