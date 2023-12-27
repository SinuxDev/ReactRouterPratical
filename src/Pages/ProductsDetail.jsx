import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductsDetail = () => {
    const navigate = useNavigate();
    const {title} = useParams();
    const navigatehandler = () => {
      navigate("/products")
    }

  return (
    <>  
      <h1>Product Details Page</h1>
        <h1>
           Product Title -  {title}
        </h1>
      <div className='product-btn-ctr'>
      <button onClick={navigatehandler} className='product-btn' >Go Back to Product Page</button>
      </div>
    </>
  )
}

export default ProductsDetail