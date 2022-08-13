import React from 'react'
import CountCategories from './CountCategories'
import LastProduct from './LastProduct'
import LastUser from './LastUser'
import "../assets/css/LastProduct.css"

const PanelsLoose = () => {
  return (
        <div className='panelsLoose'>
          <CountCategories />
          <LastProduct />
          <LastUser />
          </div>
  )
}

export default PanelsLoose