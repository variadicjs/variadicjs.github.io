import React from 'react';
import {Navbar, NavItem, Icon, Dropdown} from 'react-materialize';
import Avatar from "./Avatar";
import "./Avatar.css";
import "./NavBar.css";
import { version } from 'variadic.js/package.json';

const NavBar = () => (
  <Navbar
    className="navbar-style"
    right
    brand={
      <div className="brand-div">
        <Avatar 
          src="images/logo.svg" 
          style={{height: "50px", width: "50px"}} 
          alt="logo" 
        /> 
        <span className="brand-title"> VariadicJS ({version})</span>
      </div>
    }
  >
      
    <Dropdown trigger={
      <NavItem>
        <Icon medium>people</Icon>
      </NavItem>
    }>
      <NavItem>
        <Avatar 
          className="large-avatar round-avatar" 
          href="https://github.com/amr08" 
          src="https://github.com/amr08.png" 
        />
      </NavItem>
      <NavItem>
        <Avatar 
          className="large-avatar round-avatar" 
          href="https://github.com/jhowardjr" 
          src="https://github.com/jhowardjr.png" 
        />
      </NavItem>
      <NavItem>
        <Avatar 
          className="large-avatar round-avatar" 
          href="https://github.com/mradenovic" 
          src="https://github.com/mradenovic.png" 
        />
      </NavItem>
    </Dropdown>  
  </Navbar>
);

export default NavBar;
