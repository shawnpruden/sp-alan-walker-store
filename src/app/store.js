import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, productsReducer } from 'features';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;
