import React from 'react';
import {Autocomplete} from 'react-materialize';

const Dropdown = (props) => {
  const s = {
    width: "30%",
    minWidth: "300px",
    zIndex: "99",
    position: "fixed",
    marginTop: "20px",
    marginLeft: "20px"
  }

  const {data} = props;

  //Avoiding mutation
  let cardData = Object.assign({}, data);
  Object.keys(cardData).forEach(key => {
    return cardData[key] = null
  });

  return(
    <Autocomplete
      style={s}
      title='Function'
      data={cardData}
      onChange={props.handleDropdownChange}
    />
  )
};

export default Dropdown;
