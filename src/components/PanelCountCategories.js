import React from 'react';



function PanelCountCategories(props) {
  return (
    <React.Fragment>
    
        <li>{props.category}: {props.Conteo}</li>

    </React.Fragment> 

  )
}

export default PanelCountCategories