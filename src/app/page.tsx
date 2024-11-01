"use client";
import { useEffect, useState } from "react";
import UnLoginPage from "../components/unlogin/page";
import { checkAuth } from "@/utils/check_auth";
import { useRouter } from "next/navigation";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth(setLoading, router);
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
