'use client'
import Login from '../../components/auth/login/main'
import Register from '../../components/auth/register/main'
import Test from '../../components/auth/test'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UnLoginPage from '../../components/unlogin/page';
import { iam } from '../../utils/req';
import { useAppDispatch } from '@/redux/store';
import { loginSuccess } from '@/redux/auth_slice';


export default()=>{
    const [loading, setLoading] = useState(true);
  const router = useRouter();
  const dispatch = useAppDispatch()
  useEffect(() => {
    const checkAuth = async () => {
      const response = await iam(); // Выполняем проверку авторизации

    if (response === undefined) {
      console.error('Ошибка: не удалось получить ответ от iam');
      return; // Прерываем выполнение, если ответа нет
    }

    const { data, status } = response;

      console.log('Авторизация:', data);

      if (status === 200) {
        router.push('/'); // Если не авторизован, редирект на страницу авторизации
        dispatch(loginSuccess({email: data.user.email, isLogin:true}))
        setLoading(false); // Если авторизован, отключаем режим загрузки
      }
    };

    checkAuth();
  }, []);
    return(
        <>
        <Login/>
        </>
    )
}