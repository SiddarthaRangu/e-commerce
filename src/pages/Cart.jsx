import React from 'react'
import { useSelector } from 'react-redux';
import ProductList from '../Components/ProductList';

function Cart() {
  const cartProducts = useSelector((store) => store.cartReducer.cartProducts);

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
        </div>
      )}
    </div>
  );
}

export default Cart;