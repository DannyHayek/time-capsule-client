import React from 'react'
import BottleMessageDetails from './BottleMessageDetails'
import BottleMessageBody from './BottleMessageBody'

const BottleMessageCard = ({setDelivery, setStatus, setTag, setSurprise, setBody}) => {
  return (
    <div className='flex column bottle-message-card'>
        <BottleMessageDetails setDelivery={setDelivery} setStatus={setStatus} setTag={setTag} setSurprise={setSurprise}/>
        <BottleMessageBody setBody={setBody}/>
    </div>
  )
}

export default BottleMessageCard