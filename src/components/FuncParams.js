import React, {Component} from 'react';
import {Input} from 'react-materialize';

class FuncParams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleParamSubmit = this.handleParamSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({value: e.target.value});
  }

  handleParamSubmit(e) {
    e.preventDefault();
    let params = this.props.params.slice();
    params.push(Number(this.state.value));
    this.props.onParamsChange(params);
    this.setState({value: ""})
  }

  render() {
    const {funcName, error} = this.props;

    return(
      <form onSubmit={this.handleParamSubmit}>
        <Input
          value={this.state.value}
          id={`${funcName}-input`}
          type="number"
          step="0.01"
          placeholder="Enter number and hit RETURN"
          error={error}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default FuncParams;