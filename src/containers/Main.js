import React, { Component } from 'react';
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";

class Main extends Component {
  render() {
    const flexContainer = {
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    }

    //Content will change once data gets decided
    const cardText = "Results"
    const subtitle = "Subtitle if needed"
    const demoNumber = ["Demo 1", "Demo 2", "Demo 3", "Demo 4"];

    let demoCard = demoNumber.map((number, i) => (
        <Cards
          key={i} 
          demoNumber={number} 
          cardText={cardText}
          subtitle={subtitle} 
        />
    ));

    return (
      <div>
        <NavBar />
        <div style={flexContainer}>
          {demoCard}
        </div>
      </div>
    );
  }
}

export default Main;