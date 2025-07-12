import React, { useState } from 'react'
import AuthButton from './AuthButton'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import AlterAuth from './AlterAuth'
import NameInput from './NameInput'

const AuthForm = () => {
    const [authType, setAuth] = useState(localStorage.getItem("authType"));
    console.log(authType);

  return (
    <div className='flex column flex-center auth-form-btn'>
        <form className='flex column flex-center auth-form'>
            {authType === "Signup" && <NameInput />}

            <EmailInput />

            <PasswordInput />
        </form>

        <AuthButton />

        <AlterAuth authType={authType} setAuth={setAuth}/>
    </div>
  )
}

export default AuthForm