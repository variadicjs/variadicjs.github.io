import React, {Component} from 'react';
import CardList from "./CardList";
import NavBar from "../components/NavBar";

//React.js updates - You can use this when you don't have props
class App extends Component {
  render(){
    return(
      <div>
        <NavBar />
        <CardList />
      </div>
    )
  }
}

export default App;
