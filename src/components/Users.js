import React from 'react'
import "../assets/css/Products.css"

function Users(props) {
  return (
    <React.Fragment>
    
        <ul className='products'>
         
    <div>Nombre: {props.name}</div>
    
    
    <div>Apellido: {props.lastname}</div>
    
   
    <div>D.N.I: {props.dni}</div>
    
   
    <div>Email: {props.email}</div>
    
    
   
    </ul>
    </React.Fragment>

  )
}

export default Users