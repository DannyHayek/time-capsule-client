import React from 'react'

const BottleMessageSurprise = () => {
  return (
    <div>
        <label htmlFor="message-surprise" className='surprise-switch flex column bottle-message-label'>Surprise Mode
          <input type='checkbox' className='message-surprise-slider'></input>
        </label>
    </div>
  )
}

export default BottleMessageSurprise