import { loginThunk } from "@/services/auth_servises";
//@ts-ignore
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const getIsLoginFromLocalStorage = (): boolean => {
  if (typeof window !== "undefined") {
    // Проверяем, что код выполняется на клиенте
    const isLogin = localStorage.getItem("isLogin");
    return isLogin ? JSON.parse(isLogin) : false; // Парсим значение, если оно есть, иначе возвращаем false
  }
  return false; // Возвращаем false по умолчанию, если код выполняется на сервере
};

export interface authProps {
  email: string | null;
  isLogin: boolean;
  err: string | null;
  loading: boolean;
}

export const initialState: authProps = {
  email: null,
  err: null,
  loading: false,
  isLogin: getIsLoginFromLocalStorage(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
      state: authProps,
      action: PayloadAction<{ isLogin: boolean; email: string }>
    ) => {
      state.email = action.payload.email;
      localStorage.setItem("isLogin", JSON.stringify(action.payload.isLogin)); // Обновляем localStorage
    },
    logout: (state: authProps) => {
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
      .addCase(loginThunk.fulfilled, (state: authProps, action: any) => {
        state.loading = false;
        state.err = null;
      })
      .addCase(loginThunk.rejected, (state: authProps, action: any) => {
        state.err = action.payload;
      });
  },
});
export const { loginSuccess, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
