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
      funcNames: {},
      currentFunc: "",
      dropdownSelection: ""
    };
    
    this.handleClick = this.handleClick.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  componentWillMount(){
    this.setState({funcNames: Object.keys(variadic)})
  }

  handleClick(func, e) {
    this.setState({currentFunc: func})
  }

  handleDropdownChange(value){
    this.setState({dropdownSelection: value})
  }

  componentDidUpdate(prevProps, prevState){

    if(this.state.dropdownSelection !== prevState.dropdownSelection){
      //logic to reorder selected card to top of funcNames list goes here
      this.state.funcNames.find(match => {
        if(match === this.state.dropdownSelection) {
          console.log(match)
          //need to setState of funcNames to new organized array 
          // let newArr; 
          // this.setState({funcNames:newArr});
        }
      });
    }
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
    console.log(this.state.funcNames)

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
          <Dropdown 
            data={variadic}
            handleDropdownChange={(value) => this.handleDropdownChange(value)} 
          />
          <Carousel>
            {funcCards}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default App;
