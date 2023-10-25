import React from 'react'
import {Link} from 'react-router-dom'
import Styles from "./navbar.module.css"
const Navbar = () => {
  return (
    <div className={Styles.navabar}>
        
       
        <h3 className={Styles.font}>Thinsil </h3>
        <Link style={{textDecoration:'none'}} to="/home">
        <h3>Home</h3>
        </Link>
         <Link  style={{textDecoration:'none'}} to="/product">
         <h3>Product</h3>
         </Link>
         <Link  style={{textDecoration:'none'}} to='/cart'>
         <h3>Add to Cart</h3>
         </Link>
          
         
        
          <Link  style={{textDecoration:'none'}} to='/register'>
          <h3>Login</h3>
          </Link>
       
       
    </div>
  )
}

export default Navbar