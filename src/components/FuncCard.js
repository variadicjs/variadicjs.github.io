import React, {Component} from 'react';
import "./FuncCard.css";
import variadic from 'variadic.js';
import FuncCode from './FuncCode';
import FuncParams from './FuncParams';
import {
  Card,
  CardActions,
  CardText,
  FlatButton,
  CardTitle,
} from 'material-ui';

class FuncCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.params = [];
    this.state.result = '';

    this.state.showCode = false;
    this.fetchCode(props.demoTitle);
    this.handleToggleCode = this.handleToggleCode.bind(this);
    this.handleParamsChange = this.handleParamsChange.bind(this);
    this.handleRunCode = this.handleRunCode.bind(this);
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

  handleParamsChange(params, e) {
    this.setState({params: params});
  }

  handleRunCode(e) {
    let result = variadic[this.props.demoTitle](...this.state.params);
    let func = this.props.demoTitle;
    let params = this.state.params;
    let text = `variadic.${func}(${params}) = ${result}`;
    this.setState({result: text});
    this.props.onClickHandler(this.props.demoTitle);
  }

  handleToggleCode(e) {
    this.setState(prevState => ({showCode: !prevState.showCode}));
  }


  render() {
    const {
      demoTitle,
      subtitle,
      currentFunc
    } = this.props;

    return (
      <Card className="custom-card">
        <CardTitle title={demoTitle} subtitle={subtitle} />
        <FuncParams
            params={this.state.params}
            onParamsChange={this.handleParamsChange}
            onSubmit={this.handleParamSubmit}
          />

        <CardActions>
          <FlatButton label="Run" onClick={this.handleRunCode}/>
          <FlatButton label={this.state.showCode ? 'Hide Code' : 'Show Code'} onClick={this.handleToggleCode}/>
        </CardActions>
        <CardText>
            {//Only showing result for function user is on
              demoTitle === currentFunc?
              `${this.state.result}`
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
