import React from 'react'

const PasswordInput = () => {
  return (
    <div className='flex column'>
            <label className='auth-label'>Password</label>
            <input className='font auth-input' placeholder='Enter your password...' type='password'></input>
    </div>
  )
}

export default PasswordInput