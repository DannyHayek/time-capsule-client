import React from 'react'
import BottleMessageDetails from './BottleMessageDetails'
import BottleMessageBody from './BottleMessageBody'
import BottleMessageFile from './BottleMessageFile'

const BottleMessageCard = ({setDelivery, setStatus, setTag, setSurprise, setBody}) => {
  return (
    <div className='flex column bottle-message-card'>
        <BottleMessageDetails setDelivery={setDelivery} setStatus={setStatus} setTag={setTag} setSurprise={setSurprise}/>
        <BottleMessageFile />
        <BottleMessageBody setBody={setBody}/>
    </div>
  )
}

export default BottleMessageCard