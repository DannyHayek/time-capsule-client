import React from 'react'

const BottleMessageDate = ({setDelivery}) => {
  return (
    <div>
        <label htmlFor="delivery-date" className='bottle-message-label flex column'>Delivery Date</label>
        <input onChange={e => setDelivery(e.target.value)} type='date' className='delivery-date-picker'></input>
    </div>
  )
}

export default BottleMessageDate