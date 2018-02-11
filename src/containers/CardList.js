import React, { Component } from 'react';
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";
import variadic from 'variadic.js';

class CardList extends Component {
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
    let text = `variadic.${func}(${params}) = ${result}`
    this.setState({cardText: text, result: result, currentFunc: func})
  }

  handleSeeCode = (func, e) => {
    if(func in variadic) {
      fetch(`https://raw.githubusercontent.com/variadicjs/variadic.js/develop/lib/${func}.js`).then((response) => {
        response.text().then((data) => {
          this.setState({cardText: data, currentFunc: func});
        });
      })
    }
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
          onSeeCodeHandler={this.handleSeeCode}
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

export default CardList;
