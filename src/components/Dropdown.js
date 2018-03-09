import React from 'react';
import {Autocomplete} from 'react-materialize';

const Dropdown = (props) => {
  const s = {
    width: "35%",
    minWidth: "300px",
    zIndex: "99",
    position: "fixed",
    marginTop: "20px",
  }

  const {data} = props;
  
  return(
    <Autocomplete
      style={s}
      title='Function'
      data={data}
      onChange={props.handleDropdownChange}
    />
  )
};

export default Dropdown;
