import React from 'react'
import './productImage.css'
import IMG from '../../assets/image-product-mobile.jpg'
import IMG2 from '../../assets/image-product-desktop.jpg'

const {useEffect, useState} = React;

const getWidth = () => document.documentElement.clientWidth;

const ProductImage = () => {
  const [width, setWidth] = useState(getWidth());
  useEffect(() => {
    const resize = () => setWidth(getWidth());
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);
  return <div className='container-img'>{
    width >= 600 
      ? <img src={IMG2} alt="" />
      : <img src={IMG} alt="" />
    }
  </div>;
}

export default ProductImage