import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import { ProductsDetail, Products, About, Home, Error } from "./Pages/index";


const router = createBrowserRouter([
  {
    path:"",
    element: <Main />,
    errorElement: <Error/>,
    children:[
      {index:true,element: <Home/>},
      {path:"/products",element: <Products/> },
      {path:"/product/:title", element: <ProductsDetail/> },
      {path:"about", element: <About/> }
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
