// productSlice.ts

import { IProduct } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ProductState {
  products: IProduct[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
      state.loading = false;
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
    // other actions as needed
  },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure, addProduct } = productSlice.actions;

export default productSlice.reducer;


