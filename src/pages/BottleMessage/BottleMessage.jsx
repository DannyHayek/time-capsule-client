import React, { useState } from 'react'
import BottleMessageTitle from '../../components/bottleMessage/BottleMessageTitle'
import BottleMessageCard from '../../components/bottleMessage/BottleMessageCard'
import './BottleMessage.css'
import BottleMessageBody from '../../components/bottleMessage/BottleMessageBody'
import BottleMessageButton from '../../components/bottleMessage/BottleMessageButton'

const BottleMessage = () => {
  const [bottleDelivery, setDelivery] = useState("");
  const [bottleStatus, setStatus] = useState("");
  const [bottleTag, setTag] = useState("");
  const [bottleSurprise, setSurprise] = useState("");
  const [bottleBody, setBody] = useState("");

  const props = [setDelivery, setStatus, setTag, setSurprise, setBody];

  const bottleMessage = () => {
    console.log(bottleStatus);
  }

  return (
    <div className='flex column bottle-message'>
      <BottleMessageTitle />
      <BottleMessageCard setDelivery={setDelivery} setStatus={setStatus} setTag={setTag} setSurprise={setSurprise}/>
      <BottleMessageButton bottleMessage={bottleMessage}/>
    </div>
  )
}

export default BottleMessage