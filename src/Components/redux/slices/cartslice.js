import { createSlice}from "@reduxjs/toolkit"

const cartslice = createSlice({
  name: "cart",
  initialState: {
    cartQuantity: 0,
    cartProducts: [],
  },
   reducers:{
     // In addToCart reducer
addToCart: (state, action) => {
    const productTobeAdded = action.payload;
    const requiredProduct = state.cartProducts.find(
      (product) => product.id === productTobeAdded.id
    );
  
    if (requiredProduct) {
      requiredProduct.quantity += 1;
    } else {
      // Create new object to avoid mutation
      state.cartProducts.push({
        ...productTobeAdded,
        quantity: 1
      });
    }
    
    // Calculate total quantity correctly
    state.cartQuantity = state.cartProducts.reduce(
      (total, item) => total + item.quantity,
      0
    );
  },
  // Update deleteFromCart reducer
deleteFromCart: (state, action) => {
    const productTodelete = action.payload;
    const productIdx = state.cartProducts.findIndex(
      (product) => product.id === productTodelete.id
    );
  
    if (productIdx !== -1) {
      const product = state.cartProducts[productIdx];
      product.quantity -= 1;  // Always decrement first
      
      if (product.quantity <= 0) {
        state.cartProducts.splice(productIdx, 1);
      }
      
      // Recalculate total quantity
      state.cartQuantity = state.cartProducts.reduce(
        (total, item) => total + item.quantity,
        0
      );
    }
  }
    },
})
export const action = {addToCart:cartslice.actions.addToCart,
                        deleteFromCart:cartslice.actions.deleteFromCart}; // Export the actions to be used in components
 // Export the actions to be used in components
export default cartslice;