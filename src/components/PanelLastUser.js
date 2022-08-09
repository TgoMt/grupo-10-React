import React from 'react'


function PanelLastUser(props) {
  return (
    <React.Fragment>
    
        <ul>
        {props.items.map(item =>
        <div>Nombre: {item.name}</div>
        )}
         
   {/*  
    
    <div>Precio: {props.price}</div>
    
   
    <div>Descuento: {props.discount}</div>
    
   
    <div>Descripcion: {props.description}</div>
    
    
    <div>Detalle: {props.detail}</div> */}
    </ul>
    </React.Fragment>

  )
}

export default PanelLastUser