"use client";
import s from "./styles.module.scss";
import CreateTransaction from "./transactions_form/main";
import Statistics from "./statistics/main";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../../redux/store";

import Table from "./table/main";
import { useEffect, useState } from "react";
import { checkAuth } from "@/utils/check_auth";
import { loginSuccess } from "@/redux/auth_slice";
export default () => {
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authenticate = async () => {
      const authData = await checkAuth(setLoading, router);

      if (authData && authData.email) {
        dispatch(loginSuccess({ email: authData.email, isLogin: true })); // Виконуємо dispatch тільки після успішної авторизації
      }
    };

    authenticate();
  }, [router, dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Показываем экран загрузки, пока идет проверка
  }
  return (
    <div className={s.transactions_page}>
      <CreateTransaction />
      <Statistics />
      <div className={s.third_element}>
        <Table />
      </div>
    </div>
  );
};
