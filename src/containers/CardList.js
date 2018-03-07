import React, { Component } from 'react';
import FuncCard from "../components/FuncCard";
import {Carousel} from "react-materialize";
import Dropdown from "../components/Dropdown";
import variadic from 'variadic.js';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: "Type numbers to test function",
      funcNames: {},
    };
  }

  handleDropdownChange(value){
    let i = this.state.funcNames.indexOf(value);
    if (i < 0) return;
    // eslint-disable-next-line
    eval(`$('.carousel').carousel('set', ${i})`);
  }

  componentWillMount(){
    this.setState({funcNames: Object.keys(variadic)})
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
    } = this.state;

    let funcCards = funcNames.map((funcName, i) => (
      <div key={i} style={{width: "400px"}}>
        <FuncCard
          funcName={funcName}
          func={variadic[funcName]}
          subtitle={subtitle}
        />
      </div>
    ));

    const data = {};
    funcNames.forEach(funcName => data[funcName] = null);

    return (
      <div style={flexContainer}>
        <Dropdown
          data={data}
          handleDropdownChange={(e, value) => this.handleDropdownChange(value)}
        />
        <Carousel>
          {funcCards}
        </Carousel>
      </div>
    );
  }
}

export default CardList;
