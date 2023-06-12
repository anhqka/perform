import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

export const authenSlice = createSlice({
  name: 'authenSlice',
  initialState,
  reducers: {
    setIsGlobalLoading: (state, action) => {
      state.isLoading = action.payload;
    },
   
  },
});

export const { actions: appActions } = authenSlice;

export default authenSlice.reducer;
