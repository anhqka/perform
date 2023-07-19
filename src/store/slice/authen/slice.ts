import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";

interface User {
  name: string;
  email: string;
  photoUrl: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
};

export const authenSlice = createSlice({
  name: "authenSlice",
  initialState,
  reducers: {
    setAuthRedirectResult: (state, { payload }: any) => {
      
      if (payload.idToken) {
        const currentUser: User = {
          name: payload.displayName,
          email: payload.email,
          photoUrl: payload.photoUrl,
        };
        state.user = currentUser;
        state.isAuthenticated = true;
        localStorage.setItem('refreshToken', payload.refreshToken)
      } else {
        state.isAuthenticated = false;
      }
    },
    setIsGlobalLoading: (state, action : PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
  extraReducers: (builder) => {},
});

export const selectCurrentUser = (state: RootState) => state?.authenSlice?.user;
export const selectIsGlobalLoading = (state: RootState) => state?.authenSlice?.isLoading;
export const selectIsAuthenticated = (state: RootState) =>
  state?.authenSlice?.isAuthenticated;

export const { setAuthRedirectResult, setIsGlobalLoading } = authenSlice.actions;

export default authenSlice.reducer;
