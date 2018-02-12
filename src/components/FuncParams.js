import React, {Component} from 'react';
import {TextField, CardText} from 'material-ui';

class FuncParams extends Component {
  constructor(props) {
    super(props);
    this.state = {params: props.params}
    this.state.value = 0;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleParamSubmit = this.handleParamSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({value: e.target.value});
  }

  handleParamSubmit(e) {
    e.preventDefault();
    this.setState(prevState => {
      prevState.params.push(Number(this.state.value))
      return {params: prevState.params}
    })
    this.props.onParamsChange(this.state.params);
  }

  render() {
    return(
      <form onSubmit={this.handleParamSubmit}>
        <TextField
          id="new-param"
          type="number"
          hintText="Enter number and hit RETURN"
          onChange={this.handleInputChange}
        />
        <CardText>
          [{this.state.params.toString()}]
        </CardText>
      </form>
    );
  }
}

export default FuncParams;
