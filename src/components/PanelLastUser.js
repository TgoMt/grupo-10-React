import React from 'react'


function PanelLastUser(props) {
  return (
    <React.Fragment>
    
        <ul>
        {props.name}
        {props.email}
  
    </ul>
    </React.Fragment> 

  )
}

export default PanelLastUser