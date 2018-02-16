import React, {Component} from 'react';
import "./FuncCard.css";
import FuncCode from './FuncCode';
import FuncParams from './FuncParams';
import FuncResult from './FuncResult';
import {
  Card,
  CardActions,
  FlatButton,
  CardTitle,
  CardText,
  Dialog,
} from 'material-ui';
import { version } from 'variadic.js/package.json';

class FuncCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: [],
      result: '',
      showCode: false,
      code: '',
    };

    this.handleToggleCode = this.handleToggleCode.bind(this);
    this.handleParamsChange = this.handleParamsChange.bind(this);
    this.handleRunCode = this.handleRunCode.bind(this);
  }

  fetchCode(func) {
    fetch(`https://raw.githubusercontent.com/variadicjs/variadic.js/v${version}/lib/${func}.js`).then((response) => {
      response.text().then((data) => {
        this.setState({code: data});
      });
    })
  }

  componentDidMount() {
    this.fetchCode(this.props.funcName);
  }

  handleParamsChange(params, e) {
    this.setState({params: params});
  }

  handleRunCode(e) {
    let funcName = this.props.funcName;
    let params = this.state.params;
    let result = this.props.func(...params);
    this.setState({result: result});
    this.props.onClickHandler(funcName);
  }

  handleToggleCode(e) {
    this.setState(prevState => ({showCode: !prevState.showCode}));
  }


  render() {
    const {
      funcName,
      subtitle,
    } = this.props;
    const {
      params,
      result,
      code
    } = this.state;

    return (
      <Card className="custom-card">
        <CardTitle title={funcName} subtitle={subtitle} />
        <FuncParams
            funcName={funcName}
            params={params}
            onParamsChange={this.handleParamsChange}
            onSubmit={this.handleParamSubmit}
          />

        <CardText>
          <FuncResult
            funcName={funcName}
            params={params}
            result={result}
          />
        </CardText>

        <CardActions>
          <FlatButton label="Run" onClick={this.handleRunCode}/>
          <FlatButton label={'Show Code'} onClick={this.handleToggleCode}/>
        </CardActions>

        <Dialog
          title={`variadic.${funcName}()`}
          modal={false}
          open={this.state.showCode}
          onRequestClose={this.handleToggleCode}
          autoScrollBodyContent={true}
        >
          <FuncCode code={code}/>
          <FlatButton label="Hide Code" onClick={this.handleToggleCode}/>
        </Dialog>
      </Card>
    )
  }
}

export default FuncCard;
