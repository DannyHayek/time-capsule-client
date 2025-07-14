import React from 'react'

const BottleMessageDate = () => {
  return (
    <div>
        <label htmlFor="delivery-date" className='bottle-message-label flex column'>Delivery Date</label>
        <input type='date' className='delivery-date-picker'></input>
    </div>
  )
}

export default BottleMessageDate