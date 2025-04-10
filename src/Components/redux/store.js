import { configureStore } from "@reduxjs/toolkit";      
import cartslice from './slices/cartslice';  

const store = configureStore({
    reducer: {  
     cartReducer: cartslice.reducer, // cartslice is imported from slices/cartslice.js 
    }
});

export default store; // Export the store as the default export of this module