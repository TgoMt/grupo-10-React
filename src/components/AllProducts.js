import React, { useEffect, useState } from 'react'
import Products from './Products'


function AllProducts() {
   
    const [products, setProducts] = useState([])
    useEffect(() => {
        getDataProducts()

    }, [])

    const getDataProducts = async () => {
        const apiProducts = await fetch("api/products")
        const products = await apiProducts.json()
        setProducts(products.products)//ACA LLAMAMOS A DATA SI ES QUE QUEREMOS INGRESAR A LA DATA !IMPORTANTE¡, en este caso queremos ingresar al total
        /* console.log(products.products) */
 
    }

    return (
        <React.Fragment>
            
           
                <div className='panelsProducts'>
                    
                    <ul>
                        {
                            products.map((item, i) => {
                                return <li><Products {...item} key={i}/></li>
                            })
                        }
                    </ul>
                </div>   
        </React.Fragment>
    )
}

export default AllProducts
    
    
    
