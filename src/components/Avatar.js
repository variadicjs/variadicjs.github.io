import React from 'react';

const Avatar = (props) => (
    <img 
    	style={props.style} 
    	src={props.src} 
    	alt={props.alt} 
    	className={props.className}
    />
);

export default Avatar;
