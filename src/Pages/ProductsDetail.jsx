import React from 'react'
import { json, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import User from '../Components/User';

const ProductsDetail = () => {
    const user = useLoaderData();
    const {name,email,website} = user
    const navigate = useNavigate();
    const navigatehandler = () => {
      navigate("/products")
    }

  return (
    <>  
         <h1 className='data-title' > {name} </h1>
          <div className='data2'>
            <User userName={user.name} />
            <p>  </p>
          </div>
      <div className='product-btn-ctr'>
      <button onClick={navigatehandler} className='product-btn' >Go Back to UserPages</button>
      </div>
    </>
  )
}

export default ProductsDetail

export const loader = async ({request,params}) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)

  if(!response.ok){
    throw json({message : "Can't Found this Post"},{status : 404});
  }else{
    const user = await response.json();
    console.log(user);
    return user;
  }

}
