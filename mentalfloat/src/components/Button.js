import React from 'react';
import './Button.css'

function Button(props) {
  return (
      <a href={props.href}>
    <img src={props.src}/>
    <p>{props.text}</p>
      </a>
  );
}

export default Button;