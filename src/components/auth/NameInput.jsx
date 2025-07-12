import React from 'react'

const NameInput = ({ setName }) => {
  return (
    <div className='flex column'>
        <label className='auth-label'>Name</label>
        <input onChange={e => setName(e.target.value)} className='font auth-input' placeholder='Enter your name...'></input>
    </div>
  )
}

export default NameInput