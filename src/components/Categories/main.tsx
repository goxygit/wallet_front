"use client";
import Image from "next/image";
import s from "./styles.module.scss";
import plus from "../../../public/plus.png";
import edit from "../../../public/edit.png";
import deleteIcon from "../../../public/delete.png";
import Modal from "./modal/main";
import { RootState, useAppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { getCategories } from "@/redux/category_slice";
import { useSelector } from "react-redux";
export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { data, loading } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(getCategories(1));
  }, [dispatch]);

  if (loading || !data) return <div>Загрузка...</div>;
  return (
    <div className={s.categories_block}>
      <div className={s.categories}>
        <h3 className={s.h}>Your categories list:</h3>

        <div className={s.elements}>
          {data.map((category, index) => (
            <div key={index} className={s.element}>
              <span className={s.text}>{category.title}</span>
              <div className={s.icons}>
                <Image
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                  src={edit}
                  alt="Edit"
                  width={16}
                  height={16}
                />
                <Image src={deleteIcon} alt="Delete" width={16} height={16} />
              </div>
            </div>
          ))}
        </div>

        <div
          onClick={() => {
            setIsModalOpen(true);
          }}
          className={s.manage}
        >
          <Image
            className={s.image}
            src={plus}
            alt="plus"
            width={12}
            height={12}
          />{" "}
          Manage Categories
        </div>
      </div>
      {isModalOpen && <Modal func={setIsModalOpen} />}
    </div>
  );
};
