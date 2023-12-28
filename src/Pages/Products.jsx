import { Link, json, useLoaderData } from "react-router-dom"
import User from "../Components/User";

const Products = () => {
  const USERS = useLoaderData();
  return (
    <>
        {
          USERS.map((user) => (
            <Link to={`/product/${user.id}`} key={user.id}  >
              <div className="product-list">
                <User userName={user.name} />
                <p> Username :  {user.username} </p>
              </div>
            </Link>
          ))
        }
    </>
  )
}

export default Products

export const loader = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
  if(!response.ok){
    throw json({ message:"Can't get posts now"},{status:500});
  }else{
    const data = await response.json();
    console.log(data);
    return data;
  }
};