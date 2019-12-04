import React from 'react';
import './Button.css'

function TherapyButton(props) {
  return (
      <a href={props.href}>
    <img className="image2" src={props.src}/>
      </a>
  );
}
export default TherapyButton;

