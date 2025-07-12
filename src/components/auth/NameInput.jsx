import React from 'react'

const NameInput = () => {
  return (
    <div className='flex column'>
        <label className='auth-label'>Name</label>
        <input className='font auth-input' placeholder='Enter your name...'></input>
    </div>
  )
}

export default NameInput