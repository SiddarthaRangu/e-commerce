import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import User from './Components/User'
import Cart from './Components/Cart'
import ProductDetails from './Components/ProductDetails'
import PageNotFound from './Components/PageNotFound'
import { Routes, Route, Navigate } from 'react-router-dom'
import PaginationContext from './Components/Contexts/PaginationProvider'

function App() {

  return (
    <>
    <PaginationContext>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/product/:id" element={<ProductDetails></ProductDetails>} />
        <Route path="/user" element={<User></User>} />
        <Route path="/home" element={<Navigate to="/" ></Navigate>} />
        <Route path="*" element={<PageNotFound></PageNotFound>} />
      </Routes>
      </PaginationContext>
    
    </>
  )
}

export default App
