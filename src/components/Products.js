import React from 'react'
import "../components/css/Products.css"

function Products(props) {
  return (
    <React.Fragment>
    
        <ul className='products'>
         
    <div>Nombre: {props.name}</div>
    
    
    <div>Precio: {props.price}</div>
    
   
    <div>Descuento: {props.discount}</div>
    
   
    <div>Descripcion: {props.description}</div>
    
    
    <div>Detalle: {props.detail}</div>
    </ul>
    </React.Fragment>

  )
}

export default Products