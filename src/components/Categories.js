import React, { useEffect, useState } from 'react'

function Categories(props) {
   
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getDataCategories()

    }, [])

    const getDataCategories = async () => {
        const apiProductsCategories = await fetch("api/products")
        const categories = await apiProductsCategories.json()
        setCategories(categories.countByCategory)//ACA LLAMAMOS A DATA SI ES QUE QUEREMOS INGRESAR A LA DATA !IMPORTANTE¡, en este caso queremos ingresar al total
        /* console.log(categories.countByCategory) */

    }

    return (
        <React.Fragment>
            
            <div className='panels'>
                <div>{props.name}</div>
            <div className='panelsTitle'>Categories : {categories.length}</div>
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

export default Categories
    
    
    