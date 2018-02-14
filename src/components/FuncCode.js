import React, {Component} from 'react';
import {CardText} from 'material-ui';

class FuncCode extends Component {
  constructor(props) {
    super(props);
    // TODO Format the code here
    this.state = {code: props.code}
  }

  render() {
    return(<CardText>{this.state.code}</CardText>);
  }
}

export default FuncCode;
