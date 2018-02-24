import React from 'react';

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
      <img style={{borderRadius: "50%"}} src={src} alt={props.author} className="img-responsive"/>
    </a>
  );
};

export default Author;
