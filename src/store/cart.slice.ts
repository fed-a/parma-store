import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '.';

const initialState = {
  cart: [] as number[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<number>) => {
      state.cart.push(action.payload);
    },
    removeCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item !== action.payload);
    },
  },
});

export const SelectCart = (state: RootState) => state.cart.cart;

export const { addCart, removeCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
