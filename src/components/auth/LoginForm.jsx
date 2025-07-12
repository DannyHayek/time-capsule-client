import React from 'react'
import AuthButton from './AuthButton'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'

const LoginForm = () => {
  return (
    <div>
        <section>
          <form className='flex column flex-center'>
            <EmailInput />

            <PasswordInput />
          </form>
        </section>
        
        <section>
          <AuthButton />
        </section>
    </div>
  )
}

export default LoginForm