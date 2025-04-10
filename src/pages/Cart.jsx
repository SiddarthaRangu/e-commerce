import React from 'react'
import { useSelector } from 'react-redux';
import ProductList from '../Components/ProductList';

function Cart() {
  const cartProducts = useSelector((store) => store.cartReducer.cartProducts);
  
  // Calculate total price
  const totalPrice = cartProducts.reduce(
    (acc, product) => acc + (product.price * product.quantity),
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartProducts.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <div className="grid gap-4">
          {cartProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow rounded-lg">
              <h3 className="font-semibold">{product.title}</h3>
              <p>Quantity: {product.quantity}</p>
              <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
            </div>
          ))}
          
          {/* Add Total Price Section */}
          <div className="mt-6 pt-4 border-t-2 border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">Grand Total:</span>
              <span className="text-xl font-bold">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;