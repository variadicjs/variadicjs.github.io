import React, {Component} from 'react';
import {TextField} from 'material-ui';

class FuncParams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
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
    this.textField.select();
    this.props.onParamsChange(params);
  }

  render() {
    const {funcName, error} = this.props;

    return(
      <form onSubmit={this.handleParamSubmit}>
        <TextField
          ref={(input) => {this.textField = input;}}
          id={`${funcName}-input`}
          type="number"
          step="0.01"
          hintText="Enter number and hit RETURN"
          errorText={error}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default FuncParams;
