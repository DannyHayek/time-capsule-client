import React from 'react'

const PasswordInput = ({ setPass }) => {
  return (
    <div className='flex column'>
            <label className='auth-label'>Password</label>
            <input onChange={e => setPass(e.target.value)} className='font auth-input' placeholder='Enter your password...' type='password'></input>
    </div>
  )
}

export default PasswordInput