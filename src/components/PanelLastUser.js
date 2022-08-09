import React from 'react';
import { Link } from 'react-router-dom';


function PanelLastUser(props) {
  return (
    <React.Fragment>
    
        <li>{props.name}</li>
        <li> {props.lastname}</li>
        <li> {props.email}</li>
        <li>{props.dni}</li>
      <li>{props.imagen}</li>

    </React.Fragment> 

  )
}

export default PanelLastUser