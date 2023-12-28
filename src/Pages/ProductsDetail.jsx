import React from 'react'
import { json, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import User from '../Components/User';

const ProductsDetail = () => {
    const post = useLoaderData();
    const {title,body,userId} = post
    const navigate = useNavigate();
    const navigatehandler = () => {
      navigate("/products")
    }

  return (
    <>  
         <h1 className='data-title' > {title} </h1>
          <div className='data2'>
            <User userID={userId} />
            <p > {body} </p>
          </div>
      <div className='product-btn-ctr'>
      <button onClick={navigatehandler} className='product-btn' >Go Back to Post</button>
      </div>
    </>
  )
}

export default ProductsDetail

export const loader = async ({request,params}) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`)

  if(!response.ok){
    throw json({message : "Can't Found this Post"},{status : 404});
  }else{
    const post = await response.json();
    return post;
  }

}
