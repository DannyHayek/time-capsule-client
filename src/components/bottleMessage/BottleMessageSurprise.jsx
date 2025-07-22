import React from 'react'

const BottleMessageSurprise = ({setSurprise}) => {
  return (
    <div>
        <label htmlFor="message-surprise" className='surprise-switch flex column bottle-message-label'>Surprise Mode
          <input onChange={e => setSurprise(e.target.checked)} type='checkbox' className='message-surprise-slider'></input>
        </label>
    </div>
  )
}

export default BottleMessageSurprise