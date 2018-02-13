import React, {Component} from 'react';
import {CardText} from 'material-ui';

class FuncResult extends Component {
  constructor(props) {
    super(props);
    this.state = {params: props.params}

    this.handleParamRemove = this.handleParamRemove.bind(this);
  }

  handleParamRemove(e) {
    // TODO implement parameters removing
    this.setState(prevState => {
      // prevState.params.push(Number(this.state.value))
      return {params: prevState.params}
    })
    this.props.onParamsChange(this.state.params);
  }

  render() {
    const {funcName, params, result} = this.props;
    return(
      <CardText>
        {`variadic.${funcName}(${params}) = ${result}`}
      </CardText>
    );
  }
}

export default FuncResult;
