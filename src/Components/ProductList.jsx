import React from 'react'

export default function ProductList(props) {
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
            <p className='text-gray-600'>${product.price}</p>
            <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ))
  )}
</div>
  )
}
