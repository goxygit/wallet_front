import { authReducer } from './auth_slice';
//@ts-ignore
import { configureStore } from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'

export const store = configureStore({
  reducer: {
    auth:authReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch