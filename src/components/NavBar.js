import React from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';
import Avatar from "./Avatar";
import "./NavBar.css";
import { version } from 'variadic.js/package.json';

const NavBar = (props) => (
  <Navbar
    className="navbar-style"
  	right
    brand={ 
    	<div className="brand-div"> 
    		<Avatar src={require("../logo.svg")} style={{height: "50px", width: "50px"}} alt="logo" /> 
    		<span className="brand-title"> VariadicJS ({version})</span>
    	</div> 
    }
    >
    <NavItem>
        <Icon medium>more_vert</Icon>
    </NavItem>
  </Navbar>
);

export default NavBar;
