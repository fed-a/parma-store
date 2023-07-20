import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '.';

const initialState = {
  showModal: false,
};

const authSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    toggleAuthModal: (state) => {
      state.showModal = !state.showModal;
    },
    showAuthModal: (state) => {
      state.showModal = true;
    },
    hideAuthModal: (state) => {
      state.showModal = false;
    },
  },
});

export const SelectAuthModal = (state: RootState) => state.auth.showModal;

export const { toggleAuthModal, showAuthModal, hideAuthModal } = authSlice.actions;
export const authReducer = authSlice.reducer;
