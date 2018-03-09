import React, {Component} from 'react';
import "./FuncCard.css";
import FuncParams from './FuncParams';
import Highlight from 'react-syntax-highlight';
import 'highlight.js/styles/atom-one-light.css';
import {Card, Button, Modal } from "react-materialize";
import { version } from 'variadic.js/package.json';
import AuthorList from "./AuthorList";

class FuncCard extends Component {
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
    this.handleClearCode = this.handleClearCode.bind(this);
  }

  componentDidMount() {
    this.fetchCode(this.props.funcName);
  }

  fetchCode(func) {
    fetch(`https://raw.githubusercontent.com/variadicjs/variadic.js/v${version}/lib/${func}.js`).then((response) => {
      response.text().then((data) => {
        this.setState({code: data});
      });
    })
  }

  handleParamsChange(params, e) {
    this.setState({params: params, result: '', error: ''});
  }

  handleRunCode(e) {
    let params = this.state.params;
    try {
      let result = this.props.func(...params);
      this.setState({result: result, error: ''});
    }
    catch(err) {
      this.setState({result: '', error: err.message})
    }
  }

  handleToggleCode(e) {
    this.setState(prevState => ({showCode: !prevState.showCode}));
  }

  handleClearCode() {
    this.setState({params: [], result: "", error: ""})
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
      code,
      showCode
    } = this.state;

    const matches = this.state.code.match(/@author+\s[\w, -]*/g);
    const authors = [];

    if(matches) {
      for(const match of matches){
        authors.push(match.split(' ')[1]);
      }
    }

    const callCode = `variadic.${funcName}(${params}) = ${result}`;

    return (
      <Card
        className="custom-card"
        title={funcName}
      >
        <p className="p-style">{subtitle}</p>
        <FuncParams
            funcName={funcName}
            params={params}
            error={error}
            onParamsChange={this.handleParamsChange}
            onSubmit={this.handleParamSubmit}
        />
        <div className="results-div">
          <Button floating className='grey darken-3 small-btn' waves='light' icon='clear' onClick={this.handleClearCode}>Clear</Button>
          <Highlight lang="js" value={callCode} />
        </div>
        <Button onClick={this.handleRunCode}>Run</Button>
        <Modal
          className="modal-width"
          header={`variadic.${funcName}()`}
          open={showCode}
          trigger={<Button onClick={this.handleToggleCode} className="button">Show Code</Button>}
        >
       
          <Highlight lang="js" value={code} />
        </Modal>
        <AuthorList authors={authors}/>
      </Card>
    )
  }
}

export default FuncCard;
