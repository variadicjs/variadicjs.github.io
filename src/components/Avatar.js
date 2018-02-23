import React from 'react';

const Avatar = (props) => (
  <div>
    <a href={props.href}>        
      <img style={{borderRadius: "50%"}} src={props.src} alt={props.alt} className="img-responsive"/>
    </a>
  </div>
);

export default Avatar;
