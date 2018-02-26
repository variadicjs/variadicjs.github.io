import React from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';
import Avatar from "./Avatar";
import { version } from 'variadic.js/package.json';

const NavBar = (props) => (
  <Navbar
  	right
    style={{backgroundColor: "#424242", paddingLeft:"20px"}}
    brand={ 
    	<div style={{marginTop: "7px"}}> 
    		<Avatar src={require("../logo.png")} alt="logo" /> 
    		<span style={{position: "relative", bottom: "13px", left: "2px"}}> VariadicJS ({version})</span>
    	</div> 
    }
    >
    <NavItem>
        <Icon medium>more_vert</Icon>
    </NavItem>
  </Navbar>
);

export default NavBar;
