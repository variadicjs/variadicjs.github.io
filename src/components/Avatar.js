import React from 'react';

const Avatar = (props) => (
  <div>
    <a href={`https://github.com/${props.authors}`}>        
      <img style={{borderRadius: "50%"}} src={`https://github.com/${props.authors}.png`} alt="boohoo" className="img-responsive"/>
    </a>
  </div>
);

export default Avatar;
