import React from 'react';

const Avatar = (props) => (
    <img style={{borderRadius: "50%"}} src={props.src} alt={props.alt} className="img-responsive"/>
);

export default Avatar;
