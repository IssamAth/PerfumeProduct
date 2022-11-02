import React from 'react'
import './productImage.css'
import IMG from '../../assets/image-product-mobile.jpg'

const ProductImage = () => {
  return (
    <div className='container-img'>
       <img src={IMG} alt="" />
    </div>
  )
}

export default ProductImage