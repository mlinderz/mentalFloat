import React from 'react';
import './Button.css'

function ClasspassButton(props) {
  return (
      <a href={props.href}>
    <img className="image3" src={props.src}/>
      </a>
  );
}
export default ClasspassButton;

