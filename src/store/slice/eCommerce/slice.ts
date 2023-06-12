import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

export const eCommerceSlice = createSlice({
  name: 'eCommerceSlice',
  initialState,
  reducers: {
    setIsGlobalLoading: (state, action) => {
      state.isLoading = action.payload;
    },
   
  },
});

export const { actions: appActions } = eCommerceSlice;

export default eCommerceSlice.reducer;
