import React from 'react';
import './Button.css'

function Button(props) {
  return (
      <a href={props.href}>
    <img className="image" src={props.src}/>
      </a>
  );
}


export default Button;

