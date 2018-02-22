import React, {Component} from 'react';
import variadic from 'variadic.js';
import CardList from "./CardList";
import NavBar from "../components/NavBar";

//React.js updates - You can use this when you don't have props
class App extends Component {
  state={}

  handleDropdownChange(value){
    this.setState({dropdownSelection: value})
  }

  render(){
    const {dropdownSelection} = this.state;
    return(
      <div>
        <NavBar />
        <CardList
          variadic={variadic}
          dropdownSelection={dropdownSelection}
        />
      </div>
    )
  }
}

export default App;
