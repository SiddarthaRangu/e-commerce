import React from 'react'
import { Link } from 'react-router-dom'
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';
function Navbar() {
  const quantity = useSelector((store)=>{return store.cartReducer.cartQuantity})
  return (
    <div className='p-4 flex justify-around items-center bg-white text-gray-800 shadow-md sticky top-0 z-10'>
    <Link 
      to="/" 
      className='px-3 py-1 rounded-md hover:bg-gray-100 transition-colors font-medium'
    >
      Home
    </Link>
    
    <Link 
      to="User" 
      className='px-3 py-1 rounded-md hover:bg-gray-100 transition-colors font-medium'
    >
      User
    </Link>
    
    <Link 
      to="Cart" 
      className='relative px-3 py-1 rounded-md hover:bg-gray-100 transition-colors'
    >
      <div className='flex items-center gap-1'>
        <MdShoppingCart className='text-xl text-blue-60' />
        <div className='absolute -top-2 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold'>
          {quantity}
          
        </div>
      </div>
    </Link>
  </div>
  )
}

export default Navbar;