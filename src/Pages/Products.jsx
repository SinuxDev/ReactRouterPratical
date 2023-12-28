import { Link } from "react-router-dom"

const PRODUCTS = [
  {
    id : 1,
    title : "Apple",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus minima amet deserunt qui ullam id quibusdam repellat repellendus fugit labore distinctio alias illum quod, eos, quidem adipisci et! Earum."
  },
  {
    id : 2,
    title : "Mango",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus minima amet deserunt qui ullam id quibusdam repellat repellendus fugit labore distinctio alias illum quod, eos, quidem adipisci et! Earum."
  },
  {
    id : 3,
    title : "Orange",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus minima amet deserunt qui ullam id quibusdam repellat repellendus fugit labore distinctio alias illum quod, eos, quidem adipisci et! Earum."
  }
];

const Products = () => {
  return (
    <>
        {
          PRODUCTS.map((product) => (
            <Link to={`/product/${product.title}`} >
              <div className="product-list" key={product.id} >
                <p className="title"> {product.title} </p>
                <p> {product.description} </p>
              </div>
            </Link>
          ))
        }
    </>
  )
}

export default Products

const loader = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  
  if(!response.ok){
    // code...
  }else{
    const data = await response.json();
    console.log(data);
  }
}