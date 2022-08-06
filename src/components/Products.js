import React, { useEffect, useState } from 'react'

function Products() {
   
    const [products, setProducts] = useState([])
    useEffect(() => {
        getDataProducts()

    }, [])

    const getDataProducts = async () => {
        const apiProducts = await fetch("api/products")
        const products = await apiProducts.json()
        setProducts(products.total)//ACA LLAMAMOS A DATA SI ES QUE QUEREMOS INGRESAR A LA DATA !IMPORTANTE¡, en este caso queremos ingresar al total
        /* console.log(products.total)
 */
    }

    return (
        <React.Fragment>
            <div className='panels'>
            <div className='panelsTitle'>Productos : {products}</div>
                <div>
                    
                    <ul>
                        {/* {
                            users.map((item, i) => {
                                return <li><Categories {...item} key={i}/></li>
                            })
                        } */}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Products
    
    
    
