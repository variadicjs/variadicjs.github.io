import React from 'react';
import Avatar from "./Avatar"

const Author = (props) => {
  const src = `https://github.com/${props.author}.png`;
  const href = `https://github.com/${props.author}`;
  const style = {
    height: "30px",
    width: "30px",
    display: "inline-block",
    marginTop: "18px"
  }

  return (
    <a style={style} href={href}>
      <Avatar src={src} alt={props.author} />
    </a>
  );
};

export default Author;
