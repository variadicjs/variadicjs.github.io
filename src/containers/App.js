import React, {Component} from 'react';
import CardList from "./CardList";
import NavBar from "../components/NavBar";

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
