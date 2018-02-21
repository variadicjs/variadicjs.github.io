import React, {PureComponent} from 'react';
import "./FuncCard.css";
import FuncParams from './FuncParams';
import Highlight from 'react-syntax-highlight';
import 'highlight.js/styles/atom-one-light.css';
import {
  Card,
  CardActions,
  FlatButton,
  CardTitle,
  CardText,
  Dialog,
} from 'material-ui';
import { version } from 'variadic.js/package.json';

class FuncCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      params: [],
      result: '',
      showCode: false,
      code: '',
      error: '',
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
    this.setState({params: params, result: '', error: ''});
  }

  handleRunCode(e) {
    let funcName = this.props.funcName;
    let params = this.state.params;
    try {
      let result = this.props.func(...params);
      this.setState({result: result, error: ''});
    }
    catch(err) {
      this.setState({result: '', error: err.message})
    }
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
      error,
      code
    } = this.state;

    const callCode = `variadic.${funcName}(${params}) = ${result}`;

    return (
      <Card className="custom-card">
        <CardTitle title={funcName} subtitle={subtitle} />
        <FuncParams
            funcName={funcName}
            params={params}
            error={error}
            onParamsChange={this.handleParamsChange}
            onSubmit={this.handleParamSubmit}
          />

        <CardText>
          <Highlight lang="js" value={callCode} />
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
          <Highlight lang="js" value={code} />
          <FlatButton label="Hide Code" onClick={this.handleToggleCode}/>
        </Dialog>
      </Card>
    )
  }
}

export default FuncCard;
