import React from 'react'
import Login from '../Login/Login'
import Home from '../Home/Home'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import Register from '../Register/Register'
import {Routes,Route} from 'react-router-dom'
const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoutes