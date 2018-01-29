import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider} from 'material-ui';
import Main from './containers/Main';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( 
    <MuiThemeProvider>
      <Main />
    </MuiThemeProvider>, 
  document.getElementById('root')
);

// registerServiceWorker();