import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between  bg-gray-800 p-2  text-white'>
      <Link  to="/">Home</Link>
      <Link  to="User">User</Link>
      <Link  to="Cart">Cart</Link>

    </div>
  )
}

export default Navbar;