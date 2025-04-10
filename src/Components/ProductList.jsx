import React from 'react'
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import { useDispatch , useSelector } from 'react-redux';
import { action } from './redux/slices/cartslice';  




export default function ProductList(props) {
  const cartProducts = useSelector((store)=>{return store.cartReducer.cartProducts})
  const dispatch = useDispatch()
  
   const handleAddProduct = (product) => {
    dispatch(action.addToCart(product))

  }
  const handleDeleteProduct = (product) => {
    dispatch(action.deleteFromCart(product))

  }

    const {filteredGroupedProducts}=props;
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
  {filteredGroupedProducts === null ? (
    <h1>Loading...</h1>
  ) : (
    filteredGroupedProducts.map((product) => (
      <div 
        className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full h-96 flex flex-col'
        key={product.id}
      >
        <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-gray-100 p-2">
          <img
            className="w-full h-full object-contain"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className='p-4 flex flex-col flex-grow'>
          <p className='text-lg font-semibold text-gray-800 line-clamp-2 mb-2'>
            {product.title}
          </p>
          <div className="mt-auto">
          // In ProductList.jsx, update price display to:
          <p className='text-gray-600'>${product.price.toFixed(2)}</p>
          </div>
          <div className='flex flex-row items-center text-center mt-4'>
              <FaSquareMinus onClick={()=>handleDeleteProduct(product)}></FaSquareMinus>
              <div className='text-gray-600 m-2'>
                  {cartProducts.find(p => p.id === product.id)?.quantity || 0}
              </div>
              <FaSquarePlus onClick={() => handleAddProduct(product)}></FaSquarePlus>
              
              
          </div>
        </div>
      </div>
    ))
  )}
</div>
  )
  
}
