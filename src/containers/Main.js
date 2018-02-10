import React, { Component } from 'react';
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";
import variadic from 'variadic.js';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardText: "Results",
      subtitle: "Type numbers to test function",
      demoTitle: [],
      data: ""
    };
  }

  componentDidMount(){
    let funcTitles = []
    //Get all current functions in variadic
    for(let i in variadic){
      funcTitles.push(i)
    }
    //Set their titles to state
    this.setState({demoTitle: Object.values(funcTitles)})
  }

  handleClick = (func, params, e) => {
    // TODO: DO SOMETHING WITH THE OUTPUT
    // console.log(func, params, e)
    if(func in variadic) console.log(variadic[func].apply(this,params));
  }

  render() {
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