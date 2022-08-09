import React, { useEffect, useState } from 'react'
import "../assets/css/Home.css";


function TotalProducts(props) {
   
    const [products, setProducts] = useState([])
    useEffect(() => {
        getDataProducts()

    }, [])

    const getDataProducts = async () => {
        const apiProducts = await fetch("api/products")
        const products = await apiProducts.json()
        setProducts(products)//ACA LLAMAMOS A DATA SI ES QUE QUEREMOS INGRESAR A LA DATA !IMPORTANTE¡, en este caso queremos ingresar al total
        /* console.log(products) */

    }

    return (
        <React.Fragment>
            <div className='panels'>
            <a className='panelsTitle'>Productos : {products.total}</a>
           
            </div>
        </React.Fragment>
    )
}

export default TotalProducts
    
    
    
