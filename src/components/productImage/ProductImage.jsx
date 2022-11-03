import React from 'react'
import './productImage.css'
import IMG from '../../assets/image-product-mobile.jpg'
import IMG2 from '../../assets/image-product-desktop.jpg'

const ProductImage = () => {
  function displayImage(){
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    console.log(vw);
    if(vw < 600) {
     console.log(vw + "is smaller than 600");
     return (<img src={IMG} alt="" />);
    } else {
     console.log(vw + "is bigger than 600");
     return (<img src={IMG2} alt="" />);
    }
}
  return (
    <div className='container-img'>
      {displayImage()}
    </div>
  )
}

export default ProductImage