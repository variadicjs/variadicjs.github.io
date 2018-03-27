import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerCustomSW from './registerCustomSW';

ReactDOM.render(<App />, document.getElementById('root'));

registerCustomSW();
