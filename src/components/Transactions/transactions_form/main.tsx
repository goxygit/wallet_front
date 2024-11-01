"use client";
import { useAppDispatch } from "@/redux/store";
import { loginThunk } from "@/services/auth_servises";
//@ts-ignore
import { SubmitHandler, useForm } from "react-hook-form";
import s from "./styles.module.scss";
import plus from "../../../../public/plus.png";
import Image from "next/image";
import classNames from "classnames";
interface IFormInput {
  title: string;
  ammount: string;
  category: string;
}

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const dispatch = useAppDispatch();
  // Функция, которая будет вызвана при отправке формы
  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    console.log(data);
  };

  return (
    <div className={s.transaction_block}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputs}>
          <span className={s.headers}>Title</span>
          <input
            placeholder="Title..."
            className={s.input}
            {...register("title", { required: "Please confirm the title" })}
          />
          {errors.title && (
            <span className={s.error}>{errors.title.message}</span>
          )}
        </div>
        <div className={s.inputs}>
          <span className={s.headers}>Ammount</span>
          <input
            placeholder="Ammount..."
            className={s.input}
            {...register("ammount", {
              required: "Password is required",
            })}
          />
          {errors.ammount && (
            <span className={s.error}>{errors.ammount.message}</span>
          )}

          {/* Поле подтверждения пароля */}
        </div>
        <div className={s.manage}>
          <Image
            className={s.image}
            src={plus}
            alt="plus"
            width={12}
            height={12}
          />{" "}
          Manage Categories
        </div>
        <div className={s.radio_group}>
          <label>
            <input
              className={s.radio}
              type="radio"
              value="optionA"
              {...register("category", { required: true })}
            />
            Category A
          </label>

          <label>
            <input
              className={s.radio}
              type="radio"
              value="optionB"
              {...register("category", { required: true })}
            />
            Category B
          </label>
        </div>
        <input
          className={classNames(s.send, s.input)}
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};
