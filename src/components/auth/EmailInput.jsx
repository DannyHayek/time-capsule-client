import React from 'react'

const EmailInput = ({ setEmail }) => {


  return (
    <div className='flex column'>
        <label className='auth-label'>Email</label>
        <input onChange={e => setEmail(e.target.value)} className='font auth-input' placeholder='Enter your email...'></input>
    </div>
  )
}

export default EmailInput;