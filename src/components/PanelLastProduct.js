import React from 'react';
import { Link } from 'react-router-dom';


function PanelLastProduct(props) {
  return (
    <React.Fragment>
    
        <li>{props.name}</li>
        <li> {props.price}</li>
        <li> {props.discount}</li>
        <li>{props.description}</li>
      <li>{props.imagen}</li>
      <li>{props.detail}</li>
    </React.Fragment> 

  )
}

export default PanelLastProduct