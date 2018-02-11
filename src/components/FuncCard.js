import React, {Component} from 'react';
import "./FuncCard.css";
import variadic from 'variadic.js';
import FuncCode from './FuncCode';
import {
  Card,
  CardActions,
  CardText,
  FlatButton,
  CardTitle,
  TextField
} from 'material-ui';

class FuncCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: [],
      value2: [],
      value3: []
    };

    this.state.showCode = false;
    this.fetchCode(props.demoTitle);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleCode = this.handleToggleCode.bind(this);
  }

  fetchCode(func) {
    if(func in variadic) {
      fetch(`https://raw.githubusercontent.com/variadicjs/variadic.js/develop/lib/${func}.js`).then((response) => {
        response.text().then((data) => {
          this.setState({code: data});
        });
      })
    }
  }

  handleToggleCode(e) {
    this.setState(prevState => ({showCode: !prevState.showCode}));
  }

  handleChange(e) {
    //After digits were restricted and verfied as numbers, pass through switch to set appropriate state
    const verifyTextBox = (userInput, id) => {
      switch (id) {
        case "textbox1":
             this.setState({value1: userInput})
          break;
        case "textbox2":
             this.setState({value2: userInput})
          break
        case "textbox3":
             this.setState({value3: userInput})
          break;
        default:
        console.log("somethings didn't work")
      }
    }

    //Regex to only allow numbers
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      //Can change to <= 3 to account for 3 digit numbers
      if(e.target.value.length <= 2){
        verifyTextBox(e.target.value, e.target.id);
      }
    }
  }

  render() {
    const {
      demoTitle,
      onClickHandler,
      cardText,
      subtitle,
      currentFunc
    } = this.props;

    const {value1, value2, value3} = this.state;

    return (
      <Card className="custom-card">
        <CardTitle title={demoTitle} subtitle={subtitle} />
        <TextField
          className="text-field"
          id="textbox1"
          value={value1}
          onChange={this.handleChange}
        />
        <TextField
          className="text-field"
          id="textbox2"
          value={value2}
          onChange={this.handleChange}
        />
        <TextField
          className="text-field"
          id="textbox3"
          value={value3}
          onChange={this.handleChange}
        />
        {/*<CardMedia>
          <img src="https://code.org/images/apple-touch-icon-precomposed.png" alt="" />
        </CardMedia> */}

          {/* TODO: FIGURE OUT HOW WE'LL GET THE INPUT VALUES */}
        <CardActions>
          <FlatButton label="Run" onClick={(e) => onClickHandler(demoTitle, [value1, value2, value3], e)}/>
          <FlatButton label={this.state.showCode ? 'Hide Code' : 'Show Code'} onClick={this.handleToggleCode}/>
        </CardActions>
        <CardText>
            {//Only showing result for function user is on
              demoTitle === currentFunc?
              `${cardText}`
              :
              null
            }
        </CardText>
        {(this.state.showCode && <FuncCode code={this.state.code}/>)}
      </Card>
    )
  }
}

export default FuncCard;
