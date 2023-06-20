import { createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../..";

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
      } else {
        state.isAuthenticated = false;
      }
    },
    setIsGlobalLoading: (state, { payload }) => {
      state.isLoading = payload
    },
  },
  extraReducers: (builder) => {},
});

export const selectCurrentUser = (state: any) => state?.authenSlice?.user;
export const selectIsGlobalLoading = (state: any) => state?.authenSlice?.isLoading;
export const selectIsAuthenticated = (state: any) =>
  state?.authenSlice?.isAuthenticated;

export const { setAuthRedirectResult, setIsGlobalLoading } = authenSlice.actions;

export default authenSlice.reducer;
