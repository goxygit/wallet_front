import { apiUrl } from '@/utils/axios';
import axios from '@/utils/axios';
//@ts-ignore

import { AsyncThunk,createAsyncThunk } from '@reduxjs/toolkit';
import { loginSuccess } from '@/redux/auth_slice';




type loginType ={
    email:string,
    password:string

}

export const loginThunk = createAsyncThunk<void, { email: string; password: string }>(
  'auth/login',
  async ({ email, password }, { dispatch }) => {


    try {
    
        const {data} = await axios.post(
            `${apiUrl}/user/login`,
            
            {
                email,
                password,
                
            },
            {
                withCredentials: true
            }
        )

        const { token, user } = data;

        // Сохраняем токен и пользователя в Redux
        dispatch(loginSuccess({ token, user }));

        return data;
    }
    catch (err) {
        console.log(err)
    }

});