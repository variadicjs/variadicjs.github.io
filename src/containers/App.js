import React, {Component} from 'react';
import variadic from 'variadic.js';
import { version } from 'variadic.js/package.json';
import CardList from "./CardList";
import NavBar from "../components/NavBar";
import Dropdown from "../components/Dropdown";

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
        <NavBar version={`VariadicJS (${version})`} />
        <Dropdown 
          data={variadic} 
          handleDropdownChange={(value) => this.handleDropdownChange(value)} 
        />
        <CardList 
          version={version}
          variadic={variadic}
          dropdownSelection={dropdownSelection}
        />
      </div>
    )
  }
}

export default App;
