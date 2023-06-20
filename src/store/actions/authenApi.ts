import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../../configs";

export const signInGoogle: any = createAsyncThunk("auth/signIn", async () => {
  const data: any = await signInWithRedirect(auth, provider);
  localStorage.setItem('userab',JSON.stringify(data))
  return data;
});