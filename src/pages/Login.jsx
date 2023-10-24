import React, { useContext } from 'react'
import CustomInput from '../components/UI/Input/CustomInput'
import CustomButton from '../components/UI/Button/CustomButton'
import { authContext } from '../context'

const Login = () => {
    const {isAuth,setIsAuth}=useContext(authContext)
    function login(e) {
      e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth',true)
    }
  return (
    <div>
        <h1>Регистрация</h1>
        <form onSubmit={login}>
            <CustomInput type="text" placeholder='логин' />
            <CustomInput type="text" placeholder='пароль' />
            <CustomButton>
                Вход
            </CustomButton >
        </form>
    </div>
  )
}

export default Login