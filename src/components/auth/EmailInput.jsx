import React from 'react'

const EmailInput = () => {
  return (
    <div className='flex column'>
        <label className='auth-label'>Email</label>
        <input className='font auth-input' placeholder='Enter your email...'></input>
    </div>
  )
}

export default EmailInput;