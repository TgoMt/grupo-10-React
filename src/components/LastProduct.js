import React, { useEffect, useState } from 'react'
import PanelLastProduct from './PanelLastProduct'
import '../assets/css/LastProduct.css'

function LastProduct() {
   
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

    const lastProduct = [products[products.length - 1]];
    return (
        <React.Fragment >
            
            <div className='panels'>
                <div className='panelsTitleLastProduct'>Último Producto:
                    
                    <ul>
                        {
                            lastProduct.map((item, i) => {
                                return <li><PanelLastProduct {...item} key={i}/></li>
                            })
                        }
                    </ul>
                </div>   
                </div>
        </React.Fragment>
    )
}

export default LastProduct
    
    
    
