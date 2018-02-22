import React from 'react';
import {Autocomplete} from 'react-materialize';

const Dropdown = (props) => {
  const s = {
    width: "40%"
  }

  const {handleDropdownChange, data} = props;

  return(
    <Autocomplete
      style={s}
      title='Function'
      data={data}
      onAutocomplete={handleDropdownChange}
    />
  )
};

export default Dropdown;
