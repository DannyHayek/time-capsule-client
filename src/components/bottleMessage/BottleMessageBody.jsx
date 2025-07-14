import React from 'react'

const BottleMessageBody = () => {
  return (
    <div className='bottle-message-body'>
      <label htmlFor="message-body">
        <textarea form='bottle-message-data' id="message-body" placeholder='Enter your message...' className='bottle-message-body-input'></textarea>
      </label>
    </div>
  )
}

export default BottleMessageBody