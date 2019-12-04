import React from 'react';
import './Button.css'

function MotivationButton(props) {
  return (
      <a className="image" href={props.href}>
          
<h5>{props.children}</h5>
      </a>
  );
}


export default MotivationButton;
