import React from 'react'
import './productdescription.css'
import { HiOutlineShoppingCart } from 'react-icons/hi';



const ProductDescription = () => {
  return (
    <section className='container-des'>
        <div className='perfume'>
          <span>P E R F U M E</span>
        </div>
        <div className="title">
          <h1>Gabrielle Essence Eau De Parfum</h1>
        </div>
        <div className="paragraph">
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <div className="price">
          <div className="new-price">$149.99</div>
          <div className="old-price">$169.99</div>
        </div>
        <div className="button">
          <button className='btn'><HiOutlineShoppingCart />&nbsp; Add to Cart</button>
        </div>
    </section>
  )
}

export default ProductDescription