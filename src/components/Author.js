import React from 'react';
import Avatar from "./Avatar";
import "./Avatar.css";

const Author = (props) => {
  const src = `https://github.com/${props.author}.png`;
  const href = `https://github.com/${props.author}`;

  return (
    <a className="small-avatar" href={href}>
      <Avatar className="round-avatar" src={src} alt={props.author} />
    </a>
  );
};

export default Author;
