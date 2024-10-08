import { loginThunk } from '@/services/auth_servises';
//@ts-ignore
import {createSlice,PayloadAction } from '@reduxjs/toolkit'
export interface authProps {
   email:string | null
   isLogin: boolean
   err:string | null
   loading: boolean
  }
  
  export const initialState: authProps = {
    email: null,
    err:null,
    loading:false,
    isLogin: false
  };
  
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      loginSuccess: (state:authProps, action: PayloadAction<{ token: string; user: any }>) => {
        state.email = action.payload.email;
        state.isLogin = true;
      },
      logout: (state:authProps) => {
        state.email = null;
        state.isLogin = false;
      },
  
    },
    
      extraReducers: (builder: any) => {
        builder
      .addCase(loginThunk.pending, (state: authProps) => {
        state.loading = true;
        state.err = null;
      })
      .addCase(
        loginThunk.fulfilled,
        (
          state: authProps,
          action: any
        ) => {
          state.loading = false;
          state.err = null;
        }
      )
      .addCase(
        loginThunk.rejected,
        (state: authProps, action: any) => {
          state.err = action.payload;
        }
      )
      }
  });
  export const { loginSuccess, logout } = authSlice.actions;

  export const authReducer = authSlice.reducer;