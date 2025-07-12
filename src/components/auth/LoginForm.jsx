import React from 'react'

const LoginForm = () => {
  return (
    <div>
        <section>
          <form className='flex column flex-center'>
            <label className='auth-label'>Email</label>
            <input></input>
            <label className='auth-label'>Password</label>
            <input></input>
          </form>
        </section>
        
        <section>
          <button>
            Login
          </button>
        </section>
    </div>
  )
}

export default LoginForm