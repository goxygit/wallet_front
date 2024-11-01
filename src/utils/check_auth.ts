"use client";
import { loginSuccess } from "@/redux/auth_slice";

import { iam } from "./req";

type CheckAuthFunc = (
  func: React.Dispatch<React.SetStateAction<boolean>>,
  router: any
) => Promise<{ email: string | null; isLogin: boolean } | null>;

export const checkAuth: CheckAuthFunc = async (func, router) => {
  const response = await iam(); // Виконуємо перевірку авторизації

  if (response === undefined) {
    console.error("Помилка: не вдалося отримати відповідь від iam");
    return null;
  }

  const { data, status } = response;
  if (status !== 200) {
    router.push("/auth"); // Якщо не авторизований, редирект на сторінку авторизації
    return null;
  } else {
    func(false); // Вимикаємо режим завантаження, якщо авторизований
    return { email: data.user.email, isLogin: true }; // Повертаємо дані про авторизацію
  }
};
