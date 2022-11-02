import React from 'react'
import Prodes from './components/productDescription/ProductDescription'
import Proimg from './components/productImage/ProductImage'





const App = () => {
  return (
    <div className="contain-everything">
        <div className='container'>
          <Proimg />
          <Prodes />
        </div>
    </div>
  )
}

export default App