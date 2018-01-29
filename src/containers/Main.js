import React, { Component } from 'react';
import {Paper} from "material-ui"
import NavBar from "../components/NavBar";

class Main extends Component {
  render() {
  	const flexContainer = {
  		marginTop: "20px",
  		display: "flex",
  		justifyContent: "center",
  		flexWrap: "wrap"
  	}
  	const s = {
	 	height: "300px",
	 	padding: "20px",
	 	width: "40%",
	  	minWidth: "380px",
	  	margin: "10px",
	  	textAlign: 'center',
	  	display: 'inline-block',
	};

    return (
      <div>
      	<NavBar />
      	<div style={flexContainer}>
      		<Paper style={s} zDepth={3}> Demo 1 </Paper>
      		<Paper style={s} zDepth={3}> Demo 2 </Paper>
      		<Paper style={s} zDepth={3}> Demo 3 </Paper>
      		<Paper style={s} zDepth={3}> Demo 4 </Paper>
      	</div>
      </div>
    );
  }
}

export default Main;