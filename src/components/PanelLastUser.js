import React from 'react'


function PanelLastUser(props) {
    const propsItems = props.items
  return (
    <React.Fragment>
    
        <ul>
        {propsItems.map(item=>

        <div >
        Nombre: {item.name}</div>
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