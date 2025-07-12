import React from 'react'
import LoginForm from './LoginForm';

const Background = () => {
  return (
    <div className='auth-image flex'>
      <aside className='auth-form-background'>
        <LoginForm />
      </aside>
    </div>
  )
}

export default Background;