import React from 'react'
import BottleMessageDate from './BottleMessageDate'
import BottleMessageStatus from './BottleMessageStatus'
import BottleMessageTag from './BottleMessageTag'
import BottleMessageSurprise from './BottleMessageSurprise'

const BottleMessageDetails = ({setDelivery, setStatus, setTag, setSurprise}) => {
  return (
    <div className='flex space-evenly bottle-message-details'>
        <BottleMessageDate setDelivery={setDelivery}/>
        <BottleMessageStatus setStatus={setStatus}/>
        <BottleMessageTag setTag={setTag}/>
        <BottleMessageSurprise setSurprise={setSurprise}/>
    </div>
  )
}

export default BottleMessageDetails