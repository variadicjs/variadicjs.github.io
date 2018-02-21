import React from 'react';
import {Autocomplete} from 'react-materialize';

const Dropdown = (props) => {
  const s = {
    width: "40%"
  }
  return(
    <Autocomplete
      style={s}
      title='Function'
      data={props.data}
      onAutocomplete={props.handleDropdownChange}
    />
  )
};

export default Dropdown;
