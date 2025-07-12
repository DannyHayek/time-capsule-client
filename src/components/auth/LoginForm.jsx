import React from 'react'
import AuthButton from './AuthButton'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import AlterAuth from './AlterAuth'

const LoginForm = () => {
  return (
    <div className='flex column flex-center auth-form-btn'>
        <form className='flex column flex-center auth-form'>
            <EmailInput />

            <PasswordInput />
        </form>

        <AuthButton />

        <AlterAuth />
    </div>
  )
}

export default LoginForm