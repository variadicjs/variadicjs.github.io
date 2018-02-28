import React from 'react';

const Avatar = (props) => (
    <img 
    	style={props.style} 
    	src={props.src} 
    	alt={props.alt} 
    	className="img-responsive"
    />
);

export default Avatar;
