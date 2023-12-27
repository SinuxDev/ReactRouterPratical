import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductsDetail from "./Pages/ProductsDetail";
import About from "./Pages/About";
import Error from "./Pages/Error";


const router = createBrowserRouter([
  {
    path:"",
    element: <Main />,
    errorElement: <Error/>,
    children:[
    {path:"/",element: <Home/>},
    {path:"/products",element: <Products/> },
    {path:"/products/:title", element: <ProductsDetail/> },
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
