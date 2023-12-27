import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav>
            <NavLink to={"/"} className={( {isActive} ) => isActive ? "active" : ""} >Home</NavLink>
            <NavLink to={"/products"} >Products</NavLink>
            <NavLink to={"/products/title"} >Product Detail</NavLink>
            <NavLink to={"/about"} >About</NavLink>
        </nav>
    </>
  )
}

export default Navbar