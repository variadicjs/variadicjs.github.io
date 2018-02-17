import React from 'react';
import {AppBar, IconButton, FontIcon} from 'material-ui';
import {grey800} from 'material-ui/styles/colors';
import { version } from 'variadic.js/package.json';

const NavBar = () => (
  <AppBar
    style={{backgroundColor: grey800}}
    title={`VariadicJS (${version})`}
    iconElementRight={
      <IconButton>
        <FontIcon className="material-icons">settings</FontIcon>
      </IconButton>}
  />
);

export default NavBar;
