import React from 'react'
import BottleMessageDetails from './BottleMessageDetails'
import BottleMessageBody from './BottleMessageBody'

const BottleMessageCard = () => {
  return (
    <div className='flex column bottle-message-card'>
        <BottleMessageDetails />
        <BottleMessageBody />
    </div>
  )
}

export default BottleMessageCard