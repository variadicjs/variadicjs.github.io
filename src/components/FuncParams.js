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
    const {value} = this.state;

    return(
      <form onSubmit={this.handleParamSubmit}>
        <Input
          value={value}
          id={`${funcName}-input`}
          type="number"
          step="0.01"
          label="Enter number and hit RETURN"
          onChange={this.handleInputChange}
        />
        <p style={{color: 'red'}}>{error}</p>
      </form>
    );
  }
}

export default FuncParams;
