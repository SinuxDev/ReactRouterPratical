
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
]

const Products = () => {
  return (
    <>
        {
          PRODUCTS.map((product) => (
            <div className="product-list" key={product.id} >
              <p className="title"> {product.title} </p>
              <p> {product.description} </p>
            </div>
          ))
        }
    </>
  )
}

export default Products