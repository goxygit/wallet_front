import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../utils/axios";
interface UserData {
  id: number;
  title: string;
}

interface UserState {
  data: UserData[] | null;
  loading: boolean;
  error: string | null;
}

// Начальное состояние
const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

// Создание asyncThunk для GET-запроса
export const getCategories = createAsyncThunk(
  "categories/get",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axios.get("/category", {
        withCredentials: true, // Это важно для отправки куки!
      });

      return response.data as UserData[]; // Вернуть данные пользователя, если запрос успешен
    } catch (error) {
      // Возвращаем ошибку
      return rejectWithValue("Ошибка при получении данных пользователя");
    }
  }
);
export const createCategories = createAsyncThunk(
  "categories/create",
  async (title: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/category",
        {
          title,
        },
        {
          withCredentials: true, // Это важно для отправки куки!
        }
      );

      return response.data as UserData[]; // Вернуть данные пользователя, если запрос успешен
    } catch (error) {
      // Возвращаем ошибку
      return rejectWithValue("Ошибка при получении данных пользователя");
    }
  }
);

// Создание slice
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default categoriesSlice.reducer;
