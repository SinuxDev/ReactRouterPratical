import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import { ProductsDetail, Products, About, Home, Error } from "./Pages/index";
import { loader as productsLoader } from "./Pages/Products";
import { loader as productDetailLoader } from "./Pages/ProductsDetail";


const router = createBrowserRouter([
  {
    path:"",
    element: <Main />,
    errorElement: <Error/>,
    children:[
      {index:true,element: <Home/>},
      {path:"about", element: <About/> },
      {path:"/users",element: <Products/>, loader: productsLoader },
      {path:"/user/:userID", element: <ProductsDetail/>, loader: productDetailLoader },
  ]}
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
