import React from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';

const NavBar = (props) => (
  <Navbar
  	right
    style={{backgroundColor: "#424242", paddingLeft:"20px"}}
    brand={props.version}
    >
    <NavItem>
        <Icon medium>settings</Icon>
    </NavItem>
  </Navbar>
);

export default NavBar;
