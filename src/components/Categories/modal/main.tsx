"use client";
import { createCategories, getCategories } from "@/redux/category_slice";
import { useAppDispatch } from "@/redux/store";
import { loginThunk } from "@/services/auth_servises";
import classNames from "classnames";
import { type } from "os";
import { title } from "process";
//@ts-ignore
import { SubmitHandler, useForm } from "react-hook-form";
import s from "./styles.module.scss";

interface IFormInput {
  title: string;
}

type propsType = {
  func: (bool: boolean) => void;
};

const Modal: React.FC<propsType> = ({ func }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const dispatch = useAppDispatch();
  // Функция, которая будет вызвана при отправке формы
  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    await dispatch(createCategories(data.title));
    func(false);
    dispatch(getCategories(1));
  };

  return (
    <div className={s.modal}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <span className={s.text}>Category title</span>
        <div className={s.input_container}>
          <input
            className={s.input}
            placeholder="Title..."
            {...register("title", { required: "Please confirm the title" })}
          />
          {errors.title && <span>{errors.title.message}</span>}
        </div>
        <div className={s.buttons}>
          <input
            className={classNames(s.send, s.button)}
            type="submit"
            value="Send"
          />
          <button
            onClick={() => {
              func(false);
            }}
            className={classNames(s.close, s.button)}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};
export default Modal;
// Використовуємо withAuth для перевірки авторизації
