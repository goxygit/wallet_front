'use client'
//@ts-ignore
import { useForm } from "react-hook-form"
import s from '../login/styles.module.scss'


interface IFormInput {
  email: string
  password: string
  passwordIsCorrect: number
}

export default ()=> {
    const { register, handleSubmit, formState: { errors },watch  } = useForm();

    // Функция, которая будет вызвана при отправке формы
    const onSubmit = (data:IFormInput) => {
      console.log(data);
    };
    const password = watch("password");


  return (
    <div className={s.login_block}>
    <h2 className={s.h2}>Register</h2>
     <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
        <input {...register("email", { required: 'Please confirm your password', maxLength: 20 })} />
        {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
              message: "Password must contain at least one uppercase letter and one special character",
            },
          })}
          placeholder="Password"
        />
        {errors.password && <span>{errors.password.message}</span>}

        {/* Поле подтверждения пароля */}
        </div>
      <div>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value: string) =>
              value === password || "Passwords do not match", // Проверка на совпадение
          })}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        </div>
      <input className={s.send} type="submit" value='Send' />
    </form>
    </div>
   
  )
}
