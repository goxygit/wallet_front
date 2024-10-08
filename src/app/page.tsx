'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UnLoginPage from '../components/unlogin/page';
import { iam } from '../utils/req';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await iam(); // Выполняем проверку авторизации
      console.log('Авторизация:', isAuth);

      if (!isAuth) {
        router.push('/auth'); // Если не авторизован, редирект на страницу авторизации
      } else {
        setLoading(false); // Если авторизован, отключаем режим загрузки
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Показываем экран загрузки, пока идет проверка
  }

  return (
    <>
      <UnLoginPage />
    </>
  );
}
