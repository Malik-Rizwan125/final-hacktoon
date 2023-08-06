import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Cart from '../pages/Cart'
import Admin from '../pages/Admin'
import AddProduct from '../pages/AddProduct'

export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
