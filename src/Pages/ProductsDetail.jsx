import React from 'react'
import { useParams } from 'react-router-dom'

const ProductsDetail = () => {

    const {title} = useParams();

  return (
    <>
        <h1>
            I'm product detail {title}
        </h1>
    </>
  )
}

export default ProductsDetail