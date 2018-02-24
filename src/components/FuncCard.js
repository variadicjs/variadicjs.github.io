import React, {Component} from 'react';
import "./FuncCard.css";
import FuncParams from './FuncParams';
import Highlight from 'react-syntax-highlight';
import 'highlight.js/styles/atom-one-light.css';
import {Card, Button, Modal } from "react-materialize";
import { version } from 'variadic.js/package.json';
import Avatar from "./Avatar";
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
      code,
      showCode
    } = this.state;

    const matches = this.state.code.match(/@author+\s\w*/);
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
        <p style={{color: "#7D7D7D", marginBottom: "10px"}}>{subtitle}</p>
        <FuncParams
            funcName={funcName}
            params={params}
            error={error}
            onParamsChange={this.handleParamsChange}
            onSubmit={this.handleParamSubmit}
        />

        <Highlight lang="js" value={callCode} />

        <Button onClick={this.handleRunCode}>Run</Button>
        <Modal
          style={{width: "70%"}}
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
