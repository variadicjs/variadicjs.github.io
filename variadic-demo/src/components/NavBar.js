import React from 'react';
import {AppBar, IconButton, FontIcon} from 'material-ui';
import {grey800} from 'material-ui/styles/colors';

const NavBar = () => (
    <AppBar 
 	   	style={{backgroundColor: grey800}}
    	title="VariadicJS"
    	iconElementRight={<IconButton>
            <FontIcon className="material-icons">settings</FontIcon>
        </IconButton>}
    />
);

export default NavBar;