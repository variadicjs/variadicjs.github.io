import React, { PureComponent } from 'react';
import FuncCard from "../components/FuncCard";
import NavBar from "../components/NavBar";
import Dropdown from "../components/Dropdown";
import variadic from 'variadic.js';
import {Carousel} from "react-materialize";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: "Type numbers to test function",
      funcNames: Object.keys(variadic),
      currentFunc: ""
    };
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(func, e) {
    this.setState({currentFunc: func})
  }

  render() {
    const flexContainer = {
      marginTop: "30px",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    }

    const {
      subtitle,
      funcNames,
      currentFunc
    } = this.state;

    console.log(funcNames)

    let funcCards = funcNames.map((funcName, i) => (
      <div key={i} style={{width: "400px"}}>
        <FuncCard
          funcName={funcName}
          func={variadic[funcName]}
          subtitle={subtitle}
          onClickHandler={this.handleClick}
          currentFunc={currentFunc}
        />
      </div>
    ));

    return (
      <div>
        <NavBar />
        <div style={flexContainer}>
          <Dropdown data={funcNames} />
          <Carousel>
            {funcCards}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default App;
