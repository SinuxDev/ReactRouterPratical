import React from 'react'
import { json, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import User from '../Components/User';

const ProductsDetail = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const navigatehandler = () => {
      navigate("/users")
    }

  return (
    <>  
         <h1 className='data-title' >  </h1>
          <div className='data2'>
            <h1> Real Name : {user.name} </h1>
            <p> Username : {user.username} </p>
            <p> Email :  {user.email} </p>
            <h2> Address : {user.address.street} </h2>
            <span></span>
          </div>
      <div className='product-btn-ctr'>
      <button onClick={navigatehandler} className='product-btn' >Go Back to UserPages</button>
      </div>
    </>
  )
}

export default ProductsDetail

export const loader = async ({request,params}) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`)

  if(!response.ok){
    throw json({message : "Can't Found this Post"},{status : 404});
  }else{
    const user = await response.json();
    console.log(user);
    return user;
  }

}