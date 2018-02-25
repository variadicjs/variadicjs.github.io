import React from 'react';

const Avatar = (props) => (
    <img 
    	style={{borderRadius: "50%"}} 
    	src={props.src} 
    	alt={props.alt} c
    	lassName="img-responsive"
    />
);

export default Avatar;
