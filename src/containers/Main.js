import React, { Component } from 'react';
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";

class Main extends Component {
  constructor(props) {
    super(props);
    //Content will change once data gets decided
    this.state = {
      cardText: "Results",
      subtitle: "Subtitle if needed",
      demoNumber: ["Demo 1", "Demo 2", "Demo 3", "Demo 4"]
    };
  }

  render() {
    const flexContainer = {
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    }

    const {cardText, subtitle, demoNumber} = this.state;

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