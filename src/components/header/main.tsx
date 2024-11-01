"use client";
import s from "./styles.module.scss";
import Logo from "./logo/main";
import Auth from "./unauthorized_header/main";
import Nav from "./authorized_header/main";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
export default () => {
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const [isAuthLoaded, setIsAuthLoaded] = useState(false);

  useEffect(() => {
    // Инициализация завершена, когда isLogin определён
    if (typeof isLogin === "boolean") {
      setIsAuthLoaded(true);
    }
  }, [isLogin]);

  // Пока значение isLogin не загружено, показываем пустой контейнер или скелетон
  if (!isAuthLoaded) {
    return <></>;
  }
  return (
    <header className={s.header}>
      <Logo />

      {isLogin && <Nav />}
    </header>
  );
};
