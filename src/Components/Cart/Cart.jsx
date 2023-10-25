import React, { useState } from 'react'
import Styles from './cart.module.css'
const Cart = (props) => {


  const ProductData = JSON.parse(localStorage.getItem('ProductData'));
  console.log(ProductData, "productdata")

  const deletelocal=()=>{
    localStorage.removeItem("ProductData");
  }
  return (
    <div style={{ height: "100vh" }} className={Styles.CartPage}>
      <h1>Add Your fevarate</h1>
    

      <h2 className={Styles.heading}>Shopping Cart </h2>
      <div className={Styles.container}>
      <div className={Styles.cart}>
        <img width="250px" height="300px" src={ProductData.img} alt="" />
        <h3>{ProductData.name}</h3>
        <button onClick={deletelocal}>Delete</button>
      </div>
    
      </div>
     


    </div>
  );
};


export default Cart