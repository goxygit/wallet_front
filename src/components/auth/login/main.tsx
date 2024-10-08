'use client'
import { useAppDispatch } from "@/redux/store"
import { loginThunk } from "@/services/auth_servises"
//@ts-ignore
import { useForm } from "react-hook-form"
import s from './styles.module.scss'



interface IFormInput {
  email: string
  password: string
}

export default ()=> {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useAppDispatch()
    // Функция, которая будет вызвана при отправке формы
    const onSubmit = async (data:IFormInput) => {
      console.log(data)
      await dispatch(loginThunk({email: data.email,password: data.password}))
    };
  

  return (
    <div className={s.login_block}>
    <h2 className={s.h2}>Login</h2>
     <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
     <div>
        <input {...register("email", { required: 'Please confirm your password', })} />
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
              value: /^(?=.*[A-Z])/,
              message: "Password must contain at least one uppercase letter ",
            },
          })}
          placeholder="Password"
        />
        {errors.password && <span>{errors.password.message}</span>}

        {/* Поле подтверждения пароля */}
        </div>
      <input className={s.send} type="submit" value='Send' />
    </form>
    </div>
   
  )
}




// Використовуємо withAuth для перевірки авторизації
