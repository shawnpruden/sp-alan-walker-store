import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { commerce } from 'lib/commerce';

const initialState = { cart: {} };

export const handleCart = createAsyncThunk(
  'cart/handleCart',
  async ({ type, productId, quantity, variant, cartItemId }) => {
    try {
      switch (type) {
        case 'fetch':
          return await commerce.cart.retrieve();

        case 'add': {
          const { cart } = await commerce.cart.add(
            productId,
            quantity,
            variant
          );

          return cart;
        }

        case 'update': {
          const { cart } = await commerce.cart.update(cartItemId, {
            quantity: quantity,
          });

          return cart;
        }

        case 'remove': {
          const { cart } = await commerce.cart.remove(cartItemId);

          return cart;
        }

        case 'empty': {
          const { cart } = await commerce.cart.empty();

          return cart;
        }

        case 'refresh':
          return await commerce.cart.refresh();

        default:
          break;
      }
    } catch (err) {
      console.log(err);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: {
    [handleCart.fulfilled]: (state, { payload }) => {
      state.cart = payload;
    },
  },
});

export default cartSlice.reducer;
