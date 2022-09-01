import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { commerce } from 'lib/commerce';

const initialState = { products: [] };

export const handleProducts = createAsyncThunk(
  'products/handleProducts',
  async () => {
    try {
      const { data } = await commerce.products.list();

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [handleProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export default productsSlice.reducer;
