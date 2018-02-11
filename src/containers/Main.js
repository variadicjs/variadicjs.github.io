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
      result: "",
      currentFunc: ""
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
    let result;

    if(func in variadic) {
     result = variadic[func].apply(this,params);
    }
    //Set answer to state
    this.setState({result: result, currentFunc: func})
  }

  render() {
    const flexContainer = {
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    }

    const {
      cardText, 
      subtitle, 
      demoTitle, 
      result, 
      currentFunc
    } = this.state;
    
    let demoCard = demoTitle.map((title, i) => (
        <Cards
          key={i} 
          demoTitle={title} 
          cardText={cardText}
          subtitle={subtitle}
          onClickHandler={this.handleClick} 
          result={result}
          currentFunc={currentFunc}
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