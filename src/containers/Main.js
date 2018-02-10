import React, { Component } from 'react';
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";
import variadic from 'variadic.js';

class Main extends Component {
  constructor(props) {
    super(props);
    //Content will change once data gets decided
    this.state = {
      cardText: "Results",
      subtitle: "Type numbers to test function",
      demoTitle: [],
      data: ""
    };
  }

  componentDidMount(){
    //get all current functions in variadic and set their titles to state
    let funcTitles = []

    for(let i in variadic){
      funcTitles.push(i)
    }

    this.setState({demoTitle: Object.values(funcTitles)})
  }

  handleClick = (func, params, e) => {
    // TODO: DO SOMETHING WITH THE OUTPUT
    // console.log(func, params, e)
    if(func in variadic) console.log(variadic[func].apply(this,params));
  }

  render() {
    console.log(this.state)
    const flexContainer = {
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    }

    const {cardText, subtitle, demoTitle} = this.state;
    
    let demoCard = demoTitle.map((title, i) => (
        <Cards
          key={i} 
          demoTitle={title} 
          cardText={cardText}
          subtitle={subtitle}
          onClickHandler={this.handleClick} 
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