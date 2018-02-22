import React, { Component } from 'react';
import FuncCard from "../components/FuncCard";
import {Carousel} from "react-materialize";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: "Type numbers to test function",
      funcNames: {},
      currentFunc: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    this.setState({funcNames: Object.keys(this.props.variadic)})
  }

  handleClick(func, e) {
    this.setState({currentFunc: func})
  }

  componentDidUpdate(prevProps, prevState){

    if(this.props.dropdownSelection !== prevProps.dropdownSelection){

      let newArr = this.state.funcNames.filter(e =>
        e !== this.props.dropdownSelection
      );

      newArr.unshift(this.props.dropdownSelection)
      this.setState({funcNames:newArr});
    }
  }

  render() {
    const flexContainer = {
      marginTop: "30px",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    }

    const {
      subtitle,
      funcNames,
      currentFunc
    } = this.state;

    const {
      variadic
    } = this.props;

    let funcCards = funcNames.map((funcName, i) => (
      <div key={i} style={{width: "400px"}}>
        <FuncCard
          funcName={funcName}
          func={variadic[funcName]}
          subtitle={subtitle}
          onClickHandler={this.handleClick}
          currentFunc={currentFunc}
        />
      </div>
    ));

    return (
      <div style={flexContainer}>
        <Carousel>
          {funcCards}
        </Carousel>
      </div>
    );
  }
}

export default CardList;
